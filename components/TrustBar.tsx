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
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-600 mb-8 text-lg"
        >
          Built for staffing coordinators managing real-world caregiver scheduling challenges every day.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon size={24} className="text-blue-600" />
                <p className="text-sm text-gray-600 text-center">{point.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
