export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
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
