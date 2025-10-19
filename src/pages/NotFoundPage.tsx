import { Link } from 'react-router-dom';
import { Home, SearchX } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen gradient-bg text-white flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <SearchX className="w-24 h-24 text-amber-400 mx-auto mb-8" />

            <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Page Not <span className="text-gradient">Found</span>
            </h2>

            <p className="text-xl text-blue-200 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <Link
              to="/"
              className="inline-flex items-center space-x-3 glass-card glass-card-hover px-8 py-4 font-semibold"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
