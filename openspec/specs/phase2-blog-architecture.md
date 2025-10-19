# Phase 2: Blog Architecture Specification

**Version**: 1.0
**Last Updated**: 2025-10-19
**Status**: Planned
**Priority**: High

## Overview
Phase 2 introduces a full-featured blogging system powered by Supabase, allowing the Everyday Christian team to publish articles, engage with readers through comments, and track engagement through reactions.

## Technology Stack

### Backend
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage for featured images
- **Auth**: Supabase Auth (for admin access)
- **API**: Supabase Auto-generated REST API

### Frontend
- **Editor**: TipTap or React Quill (rich text editing)
- **Markdown**: Marked.js for markdown rendering
- **Search**: Client-side with Fuse.js (Phase 2a) → Supabase FTS (Phase 2b)
- **Forms**: React Hook Form with Zod validation

## Database Schema

### Table: `blog_posts`
```sql
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author_name TEXT NOT NULL DEFAULT 'Everyday Christian Team',
  author_avatar TEXT,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  read_time INTEGER,
  views INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_tags ON blog_posts USING GIN(tags);

-- Auto-update timestamp
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

### Table: `blog_comments`
```sql
CREATE TABLE blog_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_blog_comments_post_id ON blog_comments(post_id);
CREATE INDEX idx_blog_comments_approved ON blog_comments(approved);
```

### Table: `blog_reactions`
```sql
CREATE TABLE blog_reactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  reaction_type TEXT NOT NULL CHECK (reaction_type IN ('like', 'helpful', 'pray')),
  user_identifier TEXT NOT NULL, -- IP hash or session ID
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, user_identifier, reaction_type)
);

-- Indexes
CREATE INDEX idx_blog_reactions_post_id ON blog_reactions(post_id);
CREATE INDEX idx_blog_reactions_type ON blog_reactions(reaction_type);
```

### Storage Bucket: `blog-images`
```sql
-- Public bucket for featured images and content images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

-- Policy: Anyone can read
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Policy: Authenticated users can upload
CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
```

## Row Level Security (RLS)

### Public Read Access
```sql
-- Anyone can read published posts
CREATE POLICY "Public read published posts"
ON blog_posts FOR SELECT
USING (published = true);

-- Anyone can read approved comments
CREATE POLICY "Public read approved comments"
ON blog_comments FOR SELECT
USING (approved = true);

-- Anyone can read reactions
CREATE POLICY "Public read reactions"
ON blog_reactions FOR SELECT
USING (true);
```

### Admin Access
```sql
-- Admins can do everything with posts
CREATE POLICY "Admin full access to posts"
ON blog_posts FOR ALL
USING (auth.jwt() ->> 'role' = 'admin');

-- Admins can moderate comments
CREATE POLICY "Admin full access to comments"
ON blog_comments FOR ALL
USING (auth.jwt() ->> 'role' = 'admin');
```

### User Interaction
```sql
-- Anyone can insert comments (pending approval)
CREATE POLICY "Anyone can insert comments"
ON blog_comments FOR INSERT
WITH CHECK (true);

-- Anyone can insert reactions (one per type per post)
CREATE POLICY "Anyone can insert reactions"
ON blog_reactions FOR INSERT
WITH CHECK (true);
```

## API Endpoints (Supabase Auto-generated)

### Public Endpoints
```typescript
// Get all published posts with pagination
GET /rest/v1/blog_posts?published=eq.true&order=published_at.desc&limit=10&offset=0

// Get single post by slug
GET /rest/v1/blog_posts?slug=eq.${slug}&published=eq.true&select=*

// Get comments for a post
GET /rest/v1/blog_comments?post_id=eq.${postId}&approved=eq.true&order=created_at.asc

// Get reaction counts for a post
GET /rest/v1/blog_reactions?post_id=eq.${postId}&select=reaction_type,count

// Submit a comment
POST /rest/v1/blog_comments
Body: { post_id, author_name, author_email, content }

// Add a reaction
POST /rest/v1/blog_reactions
Body: { post_id, reaction_type, user_identifier }

// Increment view count
POST /rest/v1/rpc/increment_post_views
Body: { post_id }
```

### Admin Endpoints (Authenticated)
```typescript
// Create/Update/Delete posts
POST /rest/v1/blog_posts
PATCH /rest/v1/blog_posts?id=eq.${postId}
DELETE /rest/v1/blog_posts?id=eq.${postId}

// Moderate comments
PATCH /rest/v1/blog_comments?id=eq.${commentId}
Body: { approved: true }

// Get analytics
GET /rest/v1/rpc/get_blog_analytics
```

## Admin Dashboard Features

### Post Editor
- Rich text editor with formatting toolbar
- Markdown support
- Image upload with drag & drop
- SEO preview (title, excerpt, featured image)
- Category and tag management
- Draft/publish workflow
- Schedule publishing
- Auto-save drafts

### Post Management
- List all posts (published and drafts)
- Search and filter
- Bulk actions (publish, unpublish, delete)
- Quick edit (title, category, tags)
- Duplicate post
- View analytics per post

### Comment Moderation
- List pending comments
- Approve/reject with one click
- Bulk moderation
- Reply to comments
- Flag spam

### Analytics Dashboard
- Total views, comments, reactions
- Top performing posts
- Category breakdown
- Time-series charts
- Engagement metrics

## Public Blog Features

### Blog Listing Page
```typescript
interface BlogListingProps {
  posts: BlogPost[];
  totalCount: number;
  currentPage: number;
  filters: {
    category?: string;
    tag?: string;
    search?: string;
  };
}
```

Features:
- Grid layout (3 columns on desktop)
- Featured post highlight
- Category filter sidebar
- Tag cloud
- Search bar
- Pagination or infinite scroll
- Sort by: newest, most viewed, most engaged

### Individual Post Page
```typescript
interface BlogPostPageProps {
  post: BlogPost;
  comments: Comment[];
  reactions: ReactionCount[];
  relatedPosts: BlogPost[];
}
```

Features:
- Hero image
- Author info with avatar
- Reading time estimate
- Category badge
- Tag list
- Social share buttons
- Table of contents (for long posts)
- Comments section
- Reaction buttons (Like, Helpful, Pray)
- Related posts
- Newsletter signup CTA

### Search & Discovery
- Full-text search
- Filter by category
- Filter by tag
- Sort options
- "Related posts" algorithm
- "Popular posts" sidebar
- "Recent posts" sidebar

## Content Types

### BlogPost
```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown
  featuredImage: string | null;
  authorName: string;
  authorAvatar: string | null;
  category: string;
  tags: string[];
  readTime: number; // minutes
  views: number;
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
```

### Comment
```typescript
interface Comment {
  id: string;
  postId: string;
  authorName: string;
  authorEmail: string;
  content: string;
  approved: boolean;
  createdAt: Date;
}
```

### Reaction
```typescript
type ReactionType = 'like' | 'helpful' | 'pray';

interface Reaction {
  id: string;
  postId: string;
  reactionType: ReactionType;
  userIdentifier: string;
  createdAt: Date;
}

interface ReactionCount {
  reactionType: ReactionType;
  count: number;
}
```

## Implementation Phases

### Phase 2a: Core Blog (Week 1-2)
- ✅ Supabase project setup
- ✅ Database schema creation
- ✅ RLS policies
- ✅ Storage bucket setup
- ✅ Basic admin dashboard (CRUD)
- ✅ Public blog listing page
- ✅ Individual post pages
- ✅ Client-side search

### Phase 2b: Engagement (Week 3)
- ✅ Comments system
- ✅ Comment moderation UI
- ✅ Reaction buttons
- ✅ Social sharing
- ✅ Newsletter integration

### Phase 2c: Analytics & Polish (Week 4)
- ✅ View tracking
- ✅ Analytics dashboard
- ✅ SEO optimization (meta tags, sitemap)
- ✅ Performance optimization
- ✅ Related posts algorithm
- ✅ Full-text search with Supabase

## SEO Considerations

### Meta Tags
```tsx
<head>
  <title>{post.title} | Everyday Christian Blog</title>
  <meta name="description" content={post.excerpt} />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.excerpt} />
  <meta property="og:image" content={post.featuredImage} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

### Sitemap
- Auto-generate sitemap.xml
- Include all published posts
- Update on publish/unpublish
- Submit to Google Search Console

### Performance
- Lazy load images
- Code splitting for admin dashboard
- CDN for images (Supabase Storage has CDN)
- Server-side rendering (SSR) for blog pages with Vercel

## Design System Integration

All blog components must use the exact Flutter design system:
- Glass cards for post listings
- Gold accent for CTAs and highlights
- Cosmic aurora background
- Smooth scroll animations
- Responsive grid layout

## Migration from Static Posts

Current static posts in `src/data/blogPosts.ts` will be:
1. Migrated to Supabase via seed script
2. Enhanced with full content (currently only excerpts)
3. Assigned proper categories and tags
4. Published with historical dates

## Future Enhancements (Phase 3+)

- Multi-author support
- User accounts for commenters
- Comment threading (replies)
- Rich notifications for new posts
- RSS feed
- Email digests
- Content recommendations with AI
- A/B testing for headlines
- Advanced analytics (heatmaps, scroll depth)
