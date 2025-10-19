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

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className={`text-center lg:text-left space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-4">
                <Sparkles className="w-5 h-5 text-brand-amber" />
                <span className="text-sm text-blue-100">Your Faith Journey Companion</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Rise and Shine,
                <br />
                <span className="text-gradient">Friend!</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-200 leading-relaxed">
                Deepen your faith with daily devotionals, biblical guidance, prayer tracking, and a
                supportive Christian community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <a
                  href="#"
                  className="glass-card glass-card-hover px-8 py-4 flex items-center justify-center space-x-3 font-semibold"
                  aria-label="Download Everyday Christian on the App Store"
                >
                  <Apple className="w-6 h-6" aria-hidden="true" />
                  <span>Download on App Store</span>
                </a>
                <a
                  href="#"
                  className="glass-card glass-card-hover px-8 py-4 flex items-center justify-center space-x-3 font-semibold"
                  aria-label="Get Everyday Christian on Google Play"
                >
                  <Smartphone className="w-6 h-6" aria-hidden="true" />
                  <span>Get it on Google Play</span>
                </a>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className={`relative ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <PhoneMockup
                image="/images/app/01_home_screen.png"
                alt="Everyday Christian App Home Screen"
                className="animate-float"
              />
            </div>
          </div>

          <a
            href="#features"
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block"
            aria-label="Scroll to features section"
          >
            <ChevronDown className="w-8 h-8 text-blue-200" />
          </a>
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
                  image="/images/app/02_biblical_chat.png"
                  alt="Biblical Chat Feature"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center space-x-2 glass-card px-4 py-2">
                  <MessageCircle className="w-5 h-5 text-brand-amber" />
                  <span className="text-sm font-semibold">Biblical Chat</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Get Biblical Wisdom <span className="text-gradient">Anytime</span>
                </h3>
                <p className="text-xl text-blue-200 leading-relaxed">
                  Ask questions and receive guidance rooted in Scripture. Our AI-powered chat provides biblical wisdom for any situation you face.
                </p>
                <ul className="space-y-3">
                  {['Scripture interpretation', 'Prayer requests', 'Life challenges', 'Faith questions'].map((item, i) => (
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
                  image="/images/app/03_prayer_journal.png"
                  alt="Prayer Journal Feature"
                />
              </div>
            </div>

            {/* Bible Browser */}
            <div className="grid lg:grid-cols-2 gap-12 items-center scroll-animate opacity-0">
              <div className="order-2 lg:order-1">
                <PhoneMockup
                  image="/images/app/04_bible_browser.png"
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
                  image="/images/app/05_daily_devotional.png"
                  alt="Daily Devotional Feature"
                />
              </div>
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                features: [
                  'Daily Devotionals',
                  'Bible Browser',
                  'Basic Prayer Journal',
                  'Community Access',
                ],
                cta: 'Get Started',
                highlighted: false,
              },
              {
                name: 'Premium',
                price: '$4.99',
                period: 'per month',
                features: [
                  'Everything in Free',
                  'Biblical Chat (Unlimited)',
                  'Advanced Prayer Tracking',
                  'Reading Plans',
                  'Streak Tracking',
                  'Offline Access',
                  'Ad-Free Experience',
                ],
                cta: 'Start Free Trial',
                highlighted: true,
              },
              {
                name: 'Lifetime',
                price: '$49.99',
                period: 'one-time',
                features: [
                  'Everything in Premium',
                  'Lifetime Access',
                  'Priority Support',
                  'Early Access to Features',
                  'Support Development',
                ],
                cta: 'Get Lifetime Access',
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`scroll-animate opacity-0 glass-card p-8 ${
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
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
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

                // TODO: Implement actual form submission
                console.log('Form submitted:', { email, message });
                alert('Thank you for your message! We will get back to you soon.');
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
              <a
                href="#"
                className="glass-card glass-card-hover px-8 py-4 flex items-center justify-center space-x-3 font-semibold"
                aria-label="Download Everyday Christian on the App Store"
              >
                <Apple className="w-6 h-6" aria-hidden="true" />
                <span>Download on App Store</span>
              </a>
              <a
                href="#"
                className="glass-card glass-card-hover px-8 py-4 flex items-center justify-center space-x-3 font-semibold"
                aria-label="Get Everyday Christian on Google Play"
              >
                <Smartphone className="w-6 h-6" aria-hidden="true" />
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
