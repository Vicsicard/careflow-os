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
    <section id="benefits" className="gradient-soft" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28 sm:mb-32"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Built to Reduce Daily Staffing Stress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto benefits-subtitle"
            style={{ textAlign: 'center', display: 'block', width: '100%', marginBottom: '3rem' }}>
            Bring more organization, faster communication, and smoother caregiver coordination into your daily operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:from-teal-200 group-hover:to-teal-100 transition-colors duration-300">
                <CheckCircle size={32} className="text-teal-600" />
              </div>
              <p className="text-lg font-bold text-gray-900">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
