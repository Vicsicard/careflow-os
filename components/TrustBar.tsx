'use client';

import { motion } from 'framer-motion';
import { AlertCircle, MessageSquare, Clock, CheckCircle, Users, Zap } from 'lucide-react';

const painPoints = [
  { icon: Clock, label: 'Last-minute callouts' },
  { icon: AlertCircle, label: 'Open shifts' },
  { icon: MessageSquare, label: 'Endless texting' },
  { icon: CheckCircle, label: 'Missed confirmations' },
  { icon: Users, label: 'Staffing confusion' },
  { icon: Zap, label: 'Coordinator burnout' },
];

export default function TrustBar() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/50" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-700 mb-20 sm:mb-24 text-xl font-medium max-w-3xl mx-auto"
        >
          Built for staffing coordinators managing real-world caregiver scheduling challenges every day.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-white transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-lg"
              >
                <Icon size={32} className="text-blue-600" />
                <p className="text-sm font-medium text-gray-700 text-center">{point.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
