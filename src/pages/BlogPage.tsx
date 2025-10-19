import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPage() {
  const posts = [
    {
      title: '5 Ways to Deepen Your Prayer Life',
      excerpt:
        'Discover practical strategies to make your prayer time more meaningful and transformative.',
      date: 'October 15, 2025',
      readTime: '5 min read',
      category: 'Prayer',
    },
    {
      title: 'Building Consistent Bible Reading Habits',
      excerpt:
        'Learn how to establish a daily Bible reading routine that sticks and transforms your spiritual walk.',
      date: 'October 12, 2025',
      readTime: '7 min read',
      category: 'Bible Study',
    },
    {
      title: 'The Power of Gratitude in Faith',
      excerpt:
        'Explore how practicing gratitude can revolutionize your relationship with God and others.',
      date: 'October 8, 2025',
      readTime: '6 min read',
      category: 'Spiritual Growth',
    },
    {
      title: 'Overcoming Doubt: A Journey of Faith',
      excerpt:
        'Personal testimonies and biblical insights on navigating seasons of doubt and uncertainty.',
      date: 'October 5, 2025',
      readTime: '8 min read',
      category: 'Faith',
    },
    {
      title: 'Digital Discipleship in the Modern Age',
      excerpt:
        'How technology and apps like Everyday Christian can enhance your spiritual journey.',
      date: 'October 1, 2025',
      readTime: '5 min read',
      category: 'Technology',
    },
    {
      title: 'Finding Peace in Troubled Times',
      excerpt:
        'Biblical wisdom and practical steps for maintaining peace when life feels overwhelming.',
      date: 'September 28, 2025',
      readTime: '6 min read',
      category: 'Peace',
    },
  ];

  return (
    <div className="min-h-screen gradient-bg text-white">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Insights, inspiration, and practical guidance for your faith journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="glass-card glass-card-hover p-8 group cursor-pointer animate-fadeInUp"
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
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center text-amber-400 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="glass-card glass-card-hover px-8 py-4 font-semibold">
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
