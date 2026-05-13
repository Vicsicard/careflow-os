'use client';

import { motion } from 'framer-motion';
import { Calendar, Bell, Zap, MessageSquare, TrendingUp, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Keep caregiver shifts, availability, and assignments organized in one easy-to-manage system.',
  },
  {
    icon: Bell,
    title: 'Automated Confirmations',
    description: 'Reduce missed shifts with automatic caregiver check-ins and reminders before coverage issues happen.',
  },
  {
    icon: Zap,
    title: 'Open Shift Recovery',
    description: 'Quickly notify available caregivers when schedule changes or cancellations occur.',
  },
  {
    icon: MessageSquare,
    title: 'Real-Time Text Communication',
    description: 'Reduce manual texting and improve caregiver communication with integrated SMS workflows.',
  },
  {
    icon: TrendingUp,
    title: 'Caregiver Reliability Tracking',
    description: 'Track responsiveness, attendance, and caregiver history to make more confident staffing decisions.',
  },
  {
    icon: DollarSign,
    title: 'Simplified Shift & Payment Tracking',
    description: 'Keep shift details, caregiver hours, and payment workflows organized in one place.',
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
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-16 leading-tight feature-title"
            style={{ marginBottom: '2rem' }}>
            Everything Needed to Coordinate Caregivers More Efficiently
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto feature-subtitle"
            style={{ marginBottom: '3.125rem' }}>
            Designed specifically for staffing coordinators managing fast-moving caregiver operations.
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
