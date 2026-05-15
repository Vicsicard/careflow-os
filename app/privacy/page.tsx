'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main className="w-full">
      <Header />
      
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-12">Last updated: May 15, 2026</p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  CAREFLOW OS ("Company," "we," "us," or "our") operates the CAREFLOW OS website and platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide Directly</h3>
                <p>We collect information you voluntarily provide when you:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Request a demo or contact us through our website</li>
                  <li>Create an account or register for our services</li>
                  <li>Subscribe to our communications</li>
                  <li>Provide feedback or participate in surveys</li>
                </ul>
                <p>This information may include:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name and industry</li>
                  <li>Staffing operation details</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect certain information:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral source</li>
                  <li>Device information</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.3 Mobile Information</h3>
                <p>
                  If you consent to receive SMS communications from CAREFLOW OS, we collect and maintain your mobile phone number. <strong>Mobile information will not be shared, sold, or conveyed to third parties for marketing or promotional purposes.</strong>
                </p>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you requested information about our services</li>
                  <li>To schedule and conduct product demonstrations</li>
                  <li>To improve our website and services</li>
                  <li>To send operational and account notifications (if you consent)</li>
                  <li>To send staffing coordination alerts and scheduling notifications (if you consent)</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect against fraud and security threats</li>
                </ul>
              </section>

              {/* SMS Communication */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. SMS Communication and Mobile Messaging</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 SMS Consent</h3>
                <p>
                  If you opt-in to receive SMS messages from CAREFLOW OS, you are consenting to receive text messages related to staffing coordination, scheduling alerts, operational notifications, and account-related communications.
                </p>
                <p className="mt-4">
                  <strong>SMS consent is not shared with third parties.</strong> Your decision to receive SMS messages is specific to CAREFLOW OS and is not transferred, sold, or shared with any other organization.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2 Message Frequency and Rates</h3>
                <p>
                  Message frequency varies based on your staffing coordination needs and operational requirements. Message and data rates may apply depending on your mobile service plan. Please contact your mobile service provider for details about your plan's text messaging rates.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.3 Opting Out</h3>
                <p>
                  You may opt out of receiving SMS messages from CAREFLOW OS at any time by:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Replying "STOP" to any SMS message from CAREFLOW OS</li>
                  <li>Contacting us directly at support@careflowos.com</li>
                  <li>Updating your communication preferences in your account settings</li>
                </ul>
                <p>
                  After you send the SMS message "STOP," we will no longer send SMS messages to your phone number, except as required by law or to confirm your opt-out request.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.4 Help and Support</h3>
                <p>
                  If you have questions about SMS messages from CAREFLOW OS, you can reply "HELP" to any message, or contact us at support@careflowos.com or (303) 378-8055.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical, administrative, and physical security measures designed to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
                </p>
                <p className="mt-4">
                  We use industry-standard encryption, secure servers, and access controls to protect your data. Your information is stored on secure servers and is accessible only to authorized personnel.
                </p>
              </section>

              {/* Cookies and Analytics */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Analytics</h2>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your experience, analyze website usage, and improve our services. These technologies help us understand how you interact with our website.
                </p>
                <p className="mt-4">
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                </p>
              </section>

              {/* Third-Party Providers */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Service Providers</h2>
                <p>
                  We may share your information with third-party service providers who assist us in operating our website and conducting our business, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Cloud hosting providers</li>
                  <li>Email service providers</li>
                  <li>SMS communication platforms (Twilio)</li>
                  <li>Analytics providers</li>
                  <li>Payment processors</li>
                </ul>
                <p className="mt-4">
                  These service providers are contractually obligated to use your information only as necessary to provide services to us and are required to maintain the confidentiality and security of your information.
                </p>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal obligations)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Opt out of SMS communications</li>
                  <li>Request information about how your data is used</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the information provided in the Contact Us section below.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. The retention period may vary depending on the context of the processing and our legal obligations.
                </p>
                <p className="mt-4">
                  When you opt out of SMS communications, we retain your phone number and opt-out status to ensure we do not send you further messages.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will take steps to delete such information promptly.
                </p>
              </section>

              {/* Policy Updates */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last updated" date.
                </p>
                <p className="mt-4">
                  Your continued use of our services following the posting of revised Privacy Policy means that you accept and agree to the changes.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, our privacy practices, or how we handle your information, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-2">
                  <p><strong>CAREFLOW OS</strong></p>
                  <p>Email: privacy@careflowos.com</p>
                  <p>Phone: (303) 378-8055</p>
                  <p>Website: www.careflowos.com</p>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
