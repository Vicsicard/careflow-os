'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-gray-600 mb-12">Last updated: May 15, 2026</p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              
              {/* Agreement */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using the CAREFLOW OS website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              {/* Service Description */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                <p>
                  CAREFLOW OS provides a caregiver staffing coordination platform designed to help staffing coordinators manage scheduling, automate confirmations, and coordinate open shift recovery. The platform includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Shift scheduling and management tools</li>
                  <li>Automated caregiver confirmation systems</li>
                  <li>Open shift notification and recovery features</li>
                  <li>Real-time communication workflows</li>
                  <li>Caregiver reliability tracking</li>
                  <li>Staffing coordination analytics</li>
                </ul>
              </section>

              {/* SMS Messaging Program */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. SMS Messaging Program</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Program Overview</h3>
                <p>
                  CAREFLOW OS operates an SMS messaging program to deliver staffing notifications, scheduling alerts, operational communications, and account notifications to registered users who have opted in to receive such messages.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.2 Messaging Purposes</h3>
                <p>
                  SMS messages from CAREFLOW OS are sent for the following operational purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li><strong>Staffing Notifications:</strong> Alerts about shift assignments, coverage changes, and staffing updates</li>
                  <li><strong>Scheduling Alerts:</strong> Reminders about upcoming shifts, schedule changes, and confirmation requests</li>
                  <li><strong>Operational Notifications:</strong> System updates, maintenance alerts, and operational coordination messages</li>
                  <li><strong>Account Notifications:</strong> Account status updates, password resets, and security alerts</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.3 Message Frequency</h3>
                <p>
                  Message frequency varies based on your staffing coordination needs and operational requirements. During peak staffing periods, you may receive multiple messages per day. During slower periods, you may receive fewer messages or none at all.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.4 Message and Data Rates</h3>
                <p>
                  <strong>Message frequency varies. Message and data rates may apply.</strong> Standard text message rates from your mobile service provider may apply to SMS messages you receive from CAREFLOW OS. Please contact your mobile service provider for details about your plan's text messaging rates and any applicable charges.
                </p>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                <p>
                  As a user of CAREFLOW OS, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Provide accurate and complete information when registering</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use the service for any illegal or unauthorized purpose</li>
                  <li>Not transmit any harmful, offensive, or abusive content</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              {/* SMS Opt-In and Opt-Out */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. SMS Opt-In and Opt-Out</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Opt-In Requirements</h3>
                <p>
                  To receive SMS messages from CAREFLOW OS, you must explicitly opt-in by checking the SMS consent checkbox during registration or account setup. We do not use implied consent or pre-checked boxes.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Opting Out</h3>
                <p>
                  <strong>Reply STOP to unsubscribe.</strong> You may opt out of receiving SMS messages from CAREFLOW OS at any time by:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Replying "STOP" to any SMS message from CAREFLOW OS</li>
                  <li>Contacting us at support@careflowos.com</li>
                  <li>Calling (303) 378-8055</li>
                  <li>Updating your communication preferences in your account</li>
                </ul>
                <p className="mt-4">
                  After you send the SMS message "STOP," we will no longer send SMS messages to your phone number, except as required by law or to confirm your opt-out request.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.3 Help and Support</h3>
                <p>
                  <strong>Reply HELP for assistance.</strong> If you have questions about SMS messages from CAREFLOW OS, you can:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Reply "HELP" to any SMS message from CAREFLOW OS</li>
                  <li>Email us at support@careflowos.com</li>
                  <li>Call (303) 378-8055</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
                <p>
                  All content on the CAREFLOW OS website and within the platform, including text, graphics, logos, images, and software, is the property of CAREFLOW OS or its content suppliers and is protected by international copyright laws.
                </p>
                <p className="mt-4">
                  You may not reproduce, distribute, transmit, display, or perform any content from our website or platform without our prior written permission.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, CAREFLOW OS and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of or in connection with your use of the service, even if we have been advised of the possibility of such damages.
                </p>
                <p className="mt-4">
                  Our total liability to you for any claim arising out of or relating to these terms or your use of the service shall not exceed the amount you paid to us, if any, in the 12 months preceding the claim.
                </p>
              </section>

              {/* Disclaimer of Warranties */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
                <p>
                  The CAREFLOW OS website and services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the service, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p className="mt-4">
                  We do not warrant that the service will be uninterrupted, error-free, or free from viruses or other harmful components.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless CAREFLOW OS and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising out of or in connection with your use of the service or violation of these terms.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the service at any time, without notice or liability, for any reason, including if we believe you have violated these terms or applicable laws.
                </p>
                <p className="mt-4">
                  Upon termination, your right to use the service will immediately cease.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Colorado.
                </p>
              </section>

              {/* Modifications */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service following the posting of revised terms means that you accept and agree to the changes.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p>
                  If you have questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-2">
                  <p><strong>CAREFLOW OS</strong></p>
                  <p>Email: legal@careflowos.com</p>
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
