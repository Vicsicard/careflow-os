'use client';

import { motion } from 'framer-motion';
import { Calendar, Bell, Zap, MessageSquare, TrendingUp, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Keep caregiver shifts and availability organized in one place with intuitive calendar views.',
  },
  {
    icon: Bell,
    title: 'Automated Confirmations',
    description: 'Reduce missed shifts with automatic caregiver check-ins and intelligent reminders.',
  },
  {
    icon: Zap,
    title: 'Open Shift Recovery',
    description: 'Quickly notify available caregivers when coverage changes happen in real-time.',
  },
  {
    icon: MessageSquare,
    title: 'Real-Time Text Communication',
    description: 'Reduce endless manual texting and coordinator overload with integrated SMS.',
  },
  {
    icon: TrendingUp,
    title: 'Caregiver Reliability Tracking',
    description: 'Track attendance, responsiveness, and shift history for better decisions.',
  },
  {
    icon: DollarSign,
    title: 'Payment & Shift Tracking',
    description: 'Simplify shift management, payment workflows, and caregiver coordination.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-white" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28 sm:mb-32"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Everything Needed to Coordinate Caregivers More Efficiently
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed specifically for staffing coordinators managing real-world caregiver operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-blue-200/50 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-colors duration-300">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
