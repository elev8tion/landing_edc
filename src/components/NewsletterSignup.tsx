import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implement actual newsletter subscription
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="glass-card p-6 flex items-center space-x-3 text-green-400 animate-fadeIn">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <p className="font-semibold">Thanks for subscribing! Check your email to confirm.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6" aria-label="Newsletter signup form">
      <div className="flex items-center space-x-2 mb-4">
        <Mail className="w-5 h-5 text-amber-400" />
        <h3 className="font-semibold text-lg">Stay Updated</h3>
      </div>
      <p className="text-blue-200 text-sm mb-4">
        Get weekly devotionals and faith-building content delivered to your inbox.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-blue-400/30 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Email address for newsletter"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-to-r from-amber-400 to-amber-600 text-blue-900 font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-amber-400/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Subscribe to newsletter"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      <p className="text-xs text-blue-300 mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}
