import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen gradient-bg text-white">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-blue-200 mb-8">Last updated: October 19, 2025</p>

            <div className="space-y-8 text-blue-100 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                <p>
                  At Everyday Christian, we take your privacy seriously. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you
                  use our mobile application. Please read this policy carefully.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Personal Information
                </h3>
                <p>We may collect personal information that you provide to us, including:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Name and email address</li>
                  <li>Account credentials</li>
                  <li>Profile information</li>
                  <li>Payment information (processed securely through third-party processors)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">
                  Spiritual Content
                </h3>
                <p>We collect and store content you create within the app:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Prayer journal entries</li>
                  <li>Personal notes and reflections</li>
                  <li>Reading progress and preferences</li>
                  <li>Chat conversations with our biblical guidance feature</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">
                  Usage Information
                </h3>
                <p>We automatically collect certain information about your device and usage:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Device information and identifiers</li>
                  <li>App usage statistics</li>
                  <li>Feature interaction data</li>
                  <li>Crash reports and performance data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  3. How We Use Your Information
                </h2>
                <p>We use the collected information for various purposes:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>To provide and maintain our service</li>
                  <li>To personalize your spiritual journey experience</li>
                  <li>To process your transactions and subscriptions</li>
                  <li>To send you devotionals and spiritual content</li>
                  <li>To improve our app features and user experience</li>
                  <li>To communicate with you about updates and support</li>
                  <li>To ensure the security and integrity of our service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  4. Data Privacy and Security
                </h2>
                <p>
                  We understand the sensitive nature of spiritual content. Your privacy is
                  paramount to us:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>
                    Your prayer journal and personal notes are encrypted and private to you
                  </li>
                  <li>We never share your spiritual content with third parties</li>
                  <li>We use industry-standard security measures to protect your data</li>
                  <li>Our staff does not access your personal spiritual content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Data Sharing</h2>
                <p>We do not sell your personal information. We may share information with:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>
                    Service providers who help us operate the app (cloud hosting, analytics)
                  </li>
                  <li>Payment processors for subscription management</li>
                  <li>
                    Law enforcement when required by law or to protect our rights and safety
                  </li>
                </ul>
                <p className="mt-4">
                  All third-party service providers are contractually obligated to keep your
                  information confidential and secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Your Privacy Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Export your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to certain data processing activities</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{' '}
                  <a
                    href="mailto:privacy@everydaychristian.app"
                    className="text-amber-400 hover:text-amber-300"
                  >
                    privacy@everydaychristian.app
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. Data Retention</h2>
                <p>
                  We retain your information for as long as your account is active or as needed to
                  provide you services. If you delete your account, we will delete your personal
                  data within 30 days, except where we are required to retain it by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. Children's Privacy</h2>
                <p>
                  Everyday Christian is intended for users aged 13 and older. We do not knowingly
                  collect personal information from children under 13. If we discover that a child
                  under 13 has provided us with personal information, we will delete it immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">9. International Users</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your
                  own. We ensure appropriate safeguards are in place to protect your information in
                  accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">10. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our service
                  and hold certain information. You can instruct your device to refuse all cookies
                  or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">11. Third-Party Links</h2>
                <p>
                  Our app may contain links to third-party websites or services. We are not
                  responsible for the privacy practices of these third parties. We encourage you to
                  read their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  12. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the "Last
                  updated" date. You are advised to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">13. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:privacy@everydaychristian.app"
                      className="text-amber-400 hover:text-amber-300"
                    >
                      privacy@everydaychristian.app
                    </a>
                  </p>
                  <p>
                    General Support:{' '}
                    <a
                      href="mailto:contact@everydaychristian.app"
                      className="text-amber-400 hover:text-amber-300"
                    >
                      contact@everydaychristian.app
                    </a>
                  </p>
                </div>
              </section>

              <section className="border-t border-blue-400/20 pt-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Commitment to You</h2>
                <p>
                  At Everyday Christian, we believe your spiritual journey is deeply personal. We
                  are committed to protecting your privacy and handling your data with the utmost
                  care and respect. Your trust is sacred to us, and we take this responsibility
                  seriously.
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
