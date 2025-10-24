import { useState, useEffect } from 'react';
import {
  BookOpen,
  Heart,
  MessageCircle,
  Calendar,
  Sparkles,
  ChevronDown,
  Apple,
  Smartphone,
  Check,
  Star,
  Mail,
  Send,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhoneMockup from '../components/PhoneMockup';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  useScrollAnimation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen gradient-bg text-white overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered Logo at Top */}
          <div className={`flex justify-center mb-16 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <img
              src="/images/logos/logo.png"
              alt="Everyday Christian"
              className="h-56 md:h-72 lg:h-80 xl:h-96 w-auto"
            />
          </div>

          {/* Content Below Logo */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text Content */}
            <div className={`text-center lg:text-left space-y-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Deepen Your Faith,
                <br />
                <span className="text-gradient">Stay Connected</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Intelligent Scripture chat, daily devotionals, prayer tracking, and <span className="text-brand-amber font-semibold">31,103 Bible verses</span> from the World English Bible - all in your pocket, offline-first.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => alert('Coming Soon! Everyday Christian will be available on the App Store shortly. Sign up for our newsletter below to be notified when we launch!')}
                  className="glass-card glass-card-hover px-8 py-4 flex items-center justify-center space-x-3 font-semibold"
                  aria-label="Download Everyday Christian on the App Store"
                >
                  <Apple className="w-6 h-6" aria-hidden="true" />
                  <span>Download on App Store</span>
                </button>
                <button
                  onClick={() => alert('Coming Soon! Everyday Christian will be available on Google Play shortly. Sign up for our newsletter below to be notified when we launch!')}
                  className="glass-card glass-card-hover px-8 py-4 flex items-center justify-center space-x-3 font-semibold"
                  aria-label="Get Everyday Christian on Google Play"
                >
                  <Smartphone className="w-6 h-6" aria-hidden="true" />
                  <span>Get it on Google Play</span>
                </button>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="w-72 sm:w-96 lg:w-[450px] xl:w-[500px]">
                <img
                  src="/images/app/final-mockup-1.png"
                  alt="Everyday Christian App - Home Screen"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need for{' '}
              <span className="text-gradient">Spiritual Growth</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Powerful features designed to help you walk closer with God every day
            </p>
          </div>

          {/* Feature Showcase with Screenshots */}
          <div className="space-y-24">
            {/* Biblical Chat */}
            <div className="grid lg:grid-cols-2 gap-12 items-center scroll-animate opacity-0">
              <div className="order-2 lg:order-1">
                <PhoneMockup
                  image="/images/app/intelligent-scripture-chat-mockup.png"
                  alt="Biblical Chat Feature"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center space-x-2 glass-card px-4 py-2">
                  <MessageCircle className="w-5 h-5 text-brand-amber" />
                  <span className="text-sm font-semibold">Scripture Chat</span>
                  <span className="text-xs bg-brand-amber text-slate-900 px-2 py-0.5 rounded-full font-bold">Premium</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Intelligent <span className="text-gradient">Scripture Chat</span>
                </h3>
                <p className="text-xl text-blue-200 leading-relaxed">
                  Get biblical wisdom and guidance through intelligent conversation. Ask questions about Scripture, faith, and life's challenges. 150 messages per month.
                </p>
                <ul className="space-y-3">
                  {['Biblical guidance & wisdom', 'Crisis detection & intervention', '150 messages/month', 'Scripture-based responses', 'Content filtering for safety', 'Professional referrals when needed'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-brand-amber flex-shrink-0" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Prayer Journal */}
            <div className="grid lg:grid-cols-2 gap-12 items-center scroll-animate opacity-0">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 glass-card px-4 py-2">
                  <Heart className="w-5 h-5 text-brand-amber" />
                  <span className="text-sm font-semibold">Prayer Journal</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Track Your <span className="text-gradient">Prayer Journey</span>
                </h3>
                <p className="text-xl text-blue-200 leading-relaxed">
                  Organize your prayers by category and witness God's faithfulness as you see answered prayers over time.
                </p>
                <ul className="space-y-3">
                  {['Category organization', 'Active & answered tracking', 'Personal & private', 'Daily reminders'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-brand-amber flex-shrink-0" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <PhoneMockup
                  image="/images/app/prayer-journal-mockup.png"
                  alt="Prayer Journal Feature"
                />
              </div>
            </div>

            {/* Bible Browser */}
            <div className="grid lg:grid-cols-2 gap-12 items-center scroll-animate opacity-0">
              <div className="order-2 lg:order-1">
                <PhoneMockup
                  image="/images/app/biblebrowser-mockup.png"
                  alt="Bible Browser Feature"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center space-x-2 glass-card px-4 py-2">
                  <BookOpen className="w-5 h-5 text-brand-amber" />
                  <span className="text-sm font-semibold">Bible Browser</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Explore God's <span className="text-gradient">Word</span>
                </h3>
                <p className="text-xl text-blue-200 leading-relaxed">
                  Read any chapter freely with an intuitive interface. Search, bookmark, and dive deep into Scripture.
                </p>
                <ul className="space-y-3">
                  {['Multiple translations', 'Search & bookmarks', 'Reading plans', 'Offline access'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-brand-amber flex-shrink-0" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Daily Devotionals */}
            <div className="grid lg:grid-cols-2 gap-12 items-center scroll-animate opacity-0">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 glass-card px-4 py-2">
                  <Calendar className="w-5 h-5 text-brand-amber" />
                  <span className="text-sm font-semibold">Daily Devotionals</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Grow Closer <span className="text-gradient">Every Day</span>
                </h3>
                <p className="text-xl text-blue-200 leading-relaxed">
                  Start your day with meaningful reflections. Build consistency with streak tracking and daily encouragement.
                </p>
                <ul className="space-y-3">
                  {['Fresh content daily', 'Streak tracking', 'Morning inspiration', 'Spiritual growth'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-brand-amber flex-shrink-0" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <PhoneMockup
                  image="/images/app/daily-devotional-mockup.png"
                  alt="Daily Devotional Feature"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy-First Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-transparent to-blue-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 scroll-animate opacity-0">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-brand-amber/20 rounded-full mb-4">
                <svg className="w-12 h-12 text-brand-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Faith Journey, <span className="text-gradient">Your Privacy</span>
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                Unlike other faith apps that have faced data breaches and sold user data to military contractors and data brokers, Everyday Christian is built privacy-first from the ground up.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'No user accounts required',
                'No personal data collected',
                'No location tracking',
                'All data stays on your device',
                'No analytics or behavior monitoring',
                'Your prayers never sold to data brokers'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-brand-amber flex-shrink-0" />
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-900/30 rounded-lg border border-blue-800/50">
              <p className="text-sm text-blue-200">
                <strong className="text-brand-amber">Note:</strong> Only the AI chat feature uses Google's Gemini API - your messages are sent anonymously with no user identifiers. Everything else works completely offline and stays on your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by <span className="text-gradient">Believers Everywhere</span>
            </h2>
            <p className="text-xl text-blue-200">See how Everyday Christian is transforming lives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Active User for 6 months',
                content:
                  'This app has completely transformed my prayer life. Being able to track my prayers and see how God answers them has strengthened my faith immensely.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Daily Devotional Reader',
                content:
                  'The daily devotionals are so meaningful and perfectly timed. It feels like God is speaking directly to my current situation every single day.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Bible Study Leader',
                content:
                  'As a small group leader, I use the Biblical Chat feature to prepare for discussions. The insights are scripturally sound and incredibly helpful.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="scroll-animate opacity-0 glass-card p-8"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="border-t border-blue-400/20 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-blue-300">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-blue-200">Choose the plan that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                features: [
                  'Daily Devotionals',
                  'Bible Browser',
                  'Prayer Journal',
                  'Community Access',
                  'Reading Plans',
                  'Streak Tracking',
                  'Offline Access',
                  'Ad-Free Experience',
                ],
                cta: 'Get Started',
                highlighted: false,
                trial: null,
              },
              {
                name: 'Premium',
                price: '$35',
                period: 'per year',
                features: [
                  'Everything in Free',
                  'Intelligent Scripture Chat (150 messages/month)',
                  'Biblical wisdom and guidance',
                  'Scripture-based responses',
                  'Crisis detection & intervention',
                  'Cancel anytime - no renewal unless you want',
                ],
                cta: 'Start 3-Day Free Trial',
                highlighted: true,
                trial: {
                  duration: '3 days',
                  limit: '5 messages per day',
                  note: 'Cancel anytime - will not auto-renew unless you choose',
                },
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`scroll-animate opacity-0 glass-card p-8 flex flex-col ${
                  plan.highlighted
                    ? 'ring-2 ring-amber-400 scale-105 shadow-2xl shadow-purple-500/30'
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gradient-to-r from-brand-amber to-brand-gold text-blue-900 text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-blue-200 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.trial && (
                  <div className="mb-6 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                    <p className="text-sm text-blue-200 mb-2">
                      <strong className="text-amber-400">Trial Details:</strong>
                    </p>
                    <ul className="text-sm text-blue-300 space-y-1">
                      <li>• {plan.trial.duration} free trial</li>
                      <li>• {plan.trial.limit} during trial</li>
                      <li className="text-xs text-blue-400 mt-2">* {plan.trial.note}</li>
                    </ul>
                  </div>
                )}
                {!plan.trial && <div className="mb-6" style={{ height: '140px' }}></div>}
                <button
                  onClick={() => alert('Coming Soon! Everyday Christian will be available on the App Store and Google Play shortly. Sign up for our newsletter below to be notified when we launch!')}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-brand-amber to-brand-gold text-blue-900 hover:shadow-lg hover:shadow-brand-amber/50 transform hover:scale-105'
                      : 'glass-card glass-card-hover'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is Everyday Christian available on both iOS and Android?',
                a: 'Yes! Everyday Christian is available on both the App Store and Google Play Store.',
              },
              {
                q: 'Can I use the app offline?',
                a: 'Premium users have full offline access to all features, including downloaded devotionals and Bible chapters.',
              },
              {
                q: 'What Bible translations are available?',
                a: 'We offer multiple translations including KJV, NIV, ESV, NLT, and more. Premium users get access to all translations.',
              },
              {
                q: 'Is my prayer journal private?',
                a: 'Absolutely. Your prayer journal is completely private and encrypted. Only you can access your personal prayers.',
              },
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes, you can cancel your subscription at any time from your account settings. No questions asked.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="scroll-animate opacity-0 glass-card p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-blue-200 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate opacity-0 glass-card p-8 md:p-12 text-center">
            <Mail className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-200 mb-8">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <form
              className="max-w-md mx-auto space-y-4"
              aria-label="Contact form"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                // Create mailto link with pre-filled content
                const subject = encodeURIComponent('Contact from Everyday Christian Website');
                const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
                window.location.href = `mailto:contact@everydaychristian.app?subject=${subject}&body=${body}`;

                alert('Thank you for your message! Your email client will open to send the message.');
                form.reset();
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-blue-400/30 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Email address"
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-blue-400/30 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                aria-label="Your message"
                required
                minLength={10}
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-amber to-brand-gold text-blue-900 font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-brand-amber/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                aria-label="Send message"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient">Faith Journey?</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join thousands of believers growing closer to God every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => alert('Coming Soon! Everyday Christian will be available on the App Store shortly. Sign up for our newsletter below to be notified when we launch!')}
                className="glass-card glass-card-hover px-8 py-4 flex items-center justify-center space-x-3 font-semibold"
                aria-label="Download Everyday Christian on the App Store"
              >
                <Apple className="w-6 h-6" aria-hidden="true" />
                <span>Download on App Store</span>
              </button>
              <button
                onClick={() => alert('Coming Soon! Everyday Christian will be available on Google Play shortly. Sign up for our newsletter below to be notified when we launch!')}
                className="glass-card glass-card-hover px-8 py-4 flex items-center justify-center space-x-3 font-semibold"
                aria-label="Get Everyday Christian on Google Play"
              >
                <Smartphone className="w-6 h-6" aria-hidden="true" />
                <span>Get it on Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
