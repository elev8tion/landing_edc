import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/logos/logo.png"
                alt="Everyday Christian Logo"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-white">Everyday Christian</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Your daily companion for spiritual growth, prayer, and biblical guidance.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <a
              href="mailto:contact@everydaychristian.app"
              className="text-sm flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>contact@everydaychristian.app</span>
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Everyday Christian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
