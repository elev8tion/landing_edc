export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: BlogPost;
        Insert: BlogPostInsert;
        Update: BlogPostUpdate;
      };
      blog_comments: {
        Row: BlogComment;
        Insert: BlogCommentInsert;
        Update: BlogCommentUpdate;
      };
      blog_reactions: {
        Row: BlogReaction;
        Insert: BlogReactionInsert;
        Update: BlogReactionUpdate;
      };
    };
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  author_name: string;
  author_avatar: string | null;
  category: string;
  tags: string[];
  read_time: number | null;
  views: number;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPostInsert {
  id?: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  content: string;
  featured_image?: string | null;
  author_name?: string;
  author_avatar?: string | null;
  category: string;
  tags?: string[];
  read_time?: number | null;
  views?: number;
  published?: boolean;
  published_at?: string | null;
}

export interface BlogPostUpdate {
  slug?: string;
  title?: string;
  excerpt?: string | null;
  content?: string;
  featured_image?: string | null;
  author_name?: string;
  author_avatar?: string | null;
  category?: string;
  tags?: string[];
  read_time?: number | null;
  views?: number;
  published?: boolean;
  published_at?: string | null;
}

export interface BlogComment {
  id: string;
  post_id: string;
  author_name: string;
  author_email: string;
  content: string;
  approved: boolean;
  created_at: string;
}

export interface BlogCommentInsert {
  id?: string;
  post_id: string;
  author_name: string;
  author_email: string;
  content: string;
  approved?: boolean;
}

export interface BlogCommentUpdate {
  author_name?: string;
  author_email?: string;
  content?: string;
  approved?: boolean;
}

export type ReactionType = 'like' | 'helpful' | 'pray';

export interface BlogReaction {
  id: string;
  post_id: string;
  reaction_type: ReactionType;
  user_identifier: string;
  created_at: string;
}

export interface BlogReactionInsert {
  id?: string;
  post_id: string;
  reaction_type: ReactionType;
  user_identifier: string;
}

export interface BlogReactionUpdate {
  reaction_type?: ReactionType;
}

export interface ReactionCount {
  reaction_type: ReactionType;
  count: number;
}

export interface BlogAnalytics {
  total_posts: number;
  total_views: number;
  total_comments: number;
  total_reactions: number;
  top_posts: Array<{
    id: string;
    title: string;
    slug: string;
    views: number;
  }>;
  category_breakdown: Record<string, number>;
}
