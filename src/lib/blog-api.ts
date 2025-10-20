import { supabase } from './supabase';
import type { BlogPost, BlogComment, BlogReaction, ReactionCount, BlogAnalytics, ReactionType } from '../types/database';

/**
 * Get all published blog posts with pagination
 */
export async function getBlogPosts(limit = 10, offset = 0) {
  const { data, error, count } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact' })
    .eq('published', true)
    .order('published_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) throw error;
  return { posts: data as BlogPost[], total: count || 0 };
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) throw error;
  return data as BlogPost;
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(category: string, limit = 10) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('category', category)
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data as BlogPost[];
}

/**
 * Get blog posts by tag
 */
export async function getBlogPostsByTag(tag: string, limit = 10) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .contains('tags', [tag])
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data as BlogPost[];
}

/**
 * Search blog posts by title or content
 */
export async function searchBlogPosts(query: string, limit = 10) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .or(`title.ilike.%${query}%,content.ilike.%${query}%,excerpt.ilike.%${query}%`)
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data as BlogPost[];
}

/**
 * Increment post view count
 */
export async function incrementPostViews(postId: string) {
  const { error } = await supabase.rpc('increment_post_views', {
    post_id: postId,
  });

  if (error) throw error;
}

/**
 * Get approved comments for a post
 */
export async function getPostComments(postId: string) {
  const { data, error } = await supabase
    .from('blog_comments')
    .select('*')
    .eq('post_id', postId)
    .eq('approved', true)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data as BlogComment[];
}

/**
 * Submit a new comment (pending approval)
 */
export async function submitComment(
  postId: string,
  authorName: string,
  authorEmail: string,
  content: string
) {
  const { data, error } = await supabase
    .from('blog_comments')
    .insert({
      post_id: postId,
      author_name: authorName,
      author_email: authorEmail,
      content,
      approved: false,
    })
    .select()
    .single();

  if (error) throw error;
  return data as BlogComment;
}

/**
 * Get reaction counts for a post
 */
export async function getPostReactions(postId: string): Promise<ReactionCount[]> {
  const { data, error } = await supabase
    .from('blog_reactions')
    .select('reaction_type')
    .eq('post_id', postId);

  if (error) throw error;

  // Count reactions by type
  const counts: Record<ReactionType, number> = {
    like: 0,
    helpful: 0,
    pray: 0,
  };

  data.forEach((reaction) => {
    counts[reaction.reaction_type as ReactionType]++;
  });

  return Object.entries(counts).map(([reaction_type, count]) => ({
    reaction_type: reaction_type as ReactionType,
    count,
  }));
}

/**
 * Add a reaction to a post
 */
export async function addReaction(
  postId: string,
  reactionType: ReactionType,
  userIdentifier: string
) {
  const { data, error } = await supabase
    .from('blog_reactions')
    .insert({
      post_id: postId,
      reaction_type: reactionType,
      user_identifier: userIdentifier,
    })
    .select()
    .single();

  if (error) {
    // Check if it's a unique constraint violation (user already reacted)
    if (error.code === '23505') {
      throw new Error('You have already reacted with this type');
    }
    throw error;
  }

  return data as BlogReaction;
}

/**
 * Remove a reaction from a post
 */
export async function removeReaction(
  postId: string,
  reactionType: ReactionType,
  userIdentifier: string
) {
  const { error } = await supabase
    .from('blog_reactions')
    .delete()
    .eq('post_id', postId)
    .eq('reaction_type', reactionType)
    .eq('user_identifier', userIdentifier);

  if (error) throw error;
}

/**
 * Get blog analytics (admin only)
 */
export async function getBlogAnalytics() {
  const { data, error } = await supabase.rpc('get_blog_analytics');

  if (error) throw error;
  return data as BlogAnalytics;
}

/**
 * Get unique categories
 */
export async function getCategories() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('category')
    .eq('published', true);

  if (error) throw error;

  const uniqueCategories = [...new Set(data.map((post) => post.category))];
  return uniqueCategories.sort();
}

/**
 * Get all unique tags
 */
export async function getAllTags() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('tags')
    .eq('published', true);

  if (error) throw error;

  const allTags = data.flatMap((post) => post.tags || []);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.sort();
}

/**
 * Get related posts (same category, excluding current post)
 */
export async function getRelatedPosts(postId: string, category: string, limit = 3) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('category', category)
    .eq('published', true)
    .neq('id', postId)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data as BlogPost[];
}
