import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function TermsOfService() {
  useScrollAnimation();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/legal/terms-of-service.md')
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error loading terms of service:', error));
  }, []);

  return (
    <div className="min-h-screen gradient-bg text-white">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 md:p-12 scroll-animate opacity-0">
            <div className="prose prose-invert prose-blue max-w-none
              prose-headings:text-white
              prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-bold prose-h1:mb-6
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-white
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-blue-100
              prose-h4:text-lg prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-blue-200
              prose-p:text-blue-100 prose-p:leading-relaxed prose-p:my-4
              prose-a:text-brand-amber prose-a:hover:underline
              prose-strong:text-white prose-strong:font-bold
              prose-ul:my-4 prose-ul:ml-6
              prose-ol:my-4 prose-ol:ml-6
              prose-li:text-blue-100 prose-li:my-2
              prose-code:text-brand-amber prose-code:bg-blue-900/30 prose-code:px-1 prose-code:rounded
              prose-blockquote:border-l-4 prose-blockquote:border-brand-amber prose-blockquote:pl-4 prose-blockquote:italic
              prose-hr:border-blue-800 prose-hr:my-8">
              {content ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              ) : (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-amber"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
