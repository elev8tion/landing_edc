import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TermsOfService() {
  useScrollAnimation();

  return (
    <div className="min-h-screen gradient-bg text-white">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 scroll-animate opacity-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-blue-200 mb-8">Last updated: October 19, 2025</p>

            <div className="space-y-8 text-blue-100 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
                <p>
                  By downloading, accessing, or using Everyday Christian, you agree to be bound by
                  these Terms of Service. If you do not agree to these terms, please do not use our
                  app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Description of Service</h2>
                <p>
                  Everyday Christian provides a mobile application designed to support your
                  spiritual journey through features including but not limited to:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Daily devotional content</li>
                  <li>Biblical guidance and chat features</li>
                  <li>Prayer journal and tracking</li>
                  <li>Bible reading plans and browser</li>
                  <li>Community features and support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. User Accounts</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account
                  credentials and for all activities that occur under your account. You agree to
                  notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Subscription and Payment</h2>
                <p>
                  Everyday Christian offers both free and premium subscription tiers. Premium
                  subscriptions are billed on a recurring basis unless cancelled. All fees are
                  non-refundable except as required by law.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>You may cancel your subscription at any time</li>
                  <li>Cancellations take effect at the end of the current billing period</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. User Content</h2>
                <p>
                  You retain ownership of any content you create within the app, including prayer
                  journal entries and personal notes. However, you grant us a license to store and
                  process this content to provide our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Acceptable Use</h2>
                <p>You agree not to use Everyday Christian to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Distribute spam or malicious content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the service for any commercial purposes without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  7. Intellectual Property
                </h2>
                <p>
                  All content, features, and functionality of Everyday Christian are owned by us or
                  our licensors and are protected by copyright, trademark, and other intellectual
                  property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. Disclaimer of Warranties</h2>
                <p>
                  Everyday Christian is provided "as is" without warranties of any kind. We do not
                  guarantee that the service will be uninterrupted, secure, or error-free. The app
                  provides spiritual resources but is not a substitute for professional counseling
                  or medical advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  9. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, we shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages arising from your use of
                  Everyday Christian.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">10. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. We will notify
                  users of significant changes via email or in-app notification. Continued use of
                  the service after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">11. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the service at our sole
                  discretion, without notice, for conduct that we believe violates these Terms of
                  Service or is harmful to other users, us, or third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">12. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the
                  laws of the United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">13. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-4">
                  Email:{' '}
                  <a
                    href="mailto:legal@everydaychristian.app"
                    className="text-amber-400 hover:text-amber-300"
                  >
                    legal@everydaychristian.app
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
