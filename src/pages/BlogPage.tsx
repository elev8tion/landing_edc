import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getBlogPosts } from '../lib/blog-api';
import type { BlogPost } from '../types/database';

export default function BlogPage() {
  useScrollAnimation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const { posts: data } = await getBlogPosts(12, 0);
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen gradient-bg text-white">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Insights, inspiration, and practical guidance for your faith journey
            </p>
          </div>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold"></div>
              <p className="mt-4 text-blue-200">Loading posts...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-blue-200">No blog posts yet. Check back soon!</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
              <article
                key={post.id}
                className="glass-card glass-card-hover p-8 group cursor-pointer scroll-animate opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-blue-200 mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-blue-300 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.read_time || 5} min read</span>
                  </div>
                </div>

                <div className="flex items-center text-amber-400 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </article>
            ))}
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <>
              <div className="mt-16 max-w-2xl mx-auto scroll-animate opacity-0">
                <NewsletterSignup />
              </div>

              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-brand-gold via-brand-amber to-brand-gold text-blue-900 font-semibold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-brand-gold/50 transition-all transform hover:scale-105">
                  Load More Articles
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
