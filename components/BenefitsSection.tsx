'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Fewer Staffing Headaches',
  'Faster Shift Coverage',
  'Better Caregiver Accountability',
  'Less Coordinator Burnout',
  'More Organized Operations',
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding gradient-soft">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built to Reduce Daily Staffing Stress
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the relief of organized, efficient caregiver coordination.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={28} className="text-teal-600" />
              </div>
              <p className="text-lg font-semibold text-gray-900">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
