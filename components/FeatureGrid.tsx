'use client';

import { motion } from 'framer-motion';
import { Calendar, Bell, Zap, MessageSquare, TrendingUp, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Keep caregiver shifts and availability organized in one place.',
  },
  {
    icon: Bell,
    title: 'Automated Confirmations',
    description: 'Reduce missed shifts with automatic caregiver check-ins and reminders.',
  },
  {
    icon: Zap,
    title: 'Open Shift Recovery',
    description: 'Quickly notify available caregivers when coverage changes happen.',
  },
  {
    icon: MessageSquare,
    title: 'Real-Time Text Communication',
    description: 'Reduce endless manual texting and coordinator overload.',
  },
  {
    icon: TrendingUp,
    title: 'Caregiver Reliability Tracking',
    description: 'Track attendance, responsiveness, and shift history.',
  },
  {
    icon: DollarSign,
    title: 'Payment & Shift Tracking',
    description: 'Simplify shift management, payment workflows, and caregiver coordination.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything Needed to Coordinate Caregivers More Efficiently
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
