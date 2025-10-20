-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Blog posts table
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

-- Indexes for blog_posts
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_tags ON blog_posts USING GIN(tags);

-- Trigger for blog_posts updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Blog comments table
CREATE TABLE blog_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for blog_comments
CREATE INDEX idx_blog_comments_post_id ON blog_comments(post_id);
CREATE INDEX idx_blog_comments_approved ON blog_comments(approved);

-- Blog reactions table
CREATE TABLE blog_reactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  reaction_type TEXT NOT NULL CHECK (reaction_type IN ('like', 'helpful', 'pray')),
  user_identifier TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, user_identifier, reaction_type)
);

-- Indexes for blog_reactions
CREATE INDEX idx_blog_reactions_post_id ON blog_reactions(post_id);
CREATE INDEX idx_blog_reactions_type ON blog_reactions(reaction_type);

-- Row Level Security Policies

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_reactions ENABLE ROW LEVEL SECURITY;

-- blog_posts policies
CREATE POLICY "Public read published posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Admin full access to posts"
  ON blog_posts FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

-- blog_comments policies
CREATE POLICY "Public read approved comments"
  ON blog_comments FOR SELECT
  USING (approved = true);

CREATE POLICY "Anyone can insert comments"
  ON blog_comments FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admin full access to comments"
  ON blog_comments FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

-- blog_reactions policies
CREATE POLICY "Public read reactions"
  ON blog_reactions FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert reactions"
  ON blog_reactions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admin full access to reactions"
  ON blog_reactions FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

-- Helper function to increment post views
CREATE OR REPLACE FUNCTION increment_post_views(post_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE blog_posts
  SET views = views + 1
  WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function to get blog analytics
CREATE OR REPLACE FUNCTION get_blog_analytics()
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'total_posts', (SELECT COUNT(*) FROM blog_posts WHERE published = true),
    'total_views', (SELECT COALESCE(SUM(views), 0) FROM blog_posts),
    'total_comments', (SELECT COUNT(*) FROM blog_comments WHERE approved = true),
    'total_reactions', (SELECT COUNT(*) FROM blog_reactions),
    'top_posts', (
      SELECT json_agg(row_to_json(t))
      FROM (
        SELECT id, title, slug, views
        FROM blog_posts
        WHERE published = true
        ORDER BY views DESC
        LIMIT 5
      ) t
    ),
    'category_breakdown', (
      SELECT json_object_agg(category, count)
      FROM (
        SELECT category, COUNT(*) as count
        FROM blog_posts
        WHERE published = true
        GROUP BY category
      ) t
    )
  ) INTO result;

  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
