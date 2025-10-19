import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">
              Everyday Christian
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-blue-100 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-blue-100 hover:text-white transition-colors">
              Pricing
            </a>
            <Link to="/blog" className="text-blue-100 hover:text-white transition-colors">
              Blog
            </Link>
            <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a
              href="#features"
              className="block py-2 text-blue-100 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-blue-100 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block py-2 text-blue-100 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <Link
              to="/blog"
              className="block py-2 text-blue-100 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <a
              href="#contact"
              className="block py-2 text-blue-100 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
