'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Create the Shift',
    description: 'Enter caregiver needs and schedule coverage with intuitive shift creation.',
  },
  {
    number: '2',
    title: 'Caregivers Confirm Automatically',
    description: 'The system handles confirmations and intelligent reminders automatically.',
  },
  {
    number: '3',
    title: 'Staffing Issues Are Detected Early',
    description: 'Potential coverage problems are identified before shifts are missed.',
  },
  {
    number: '4',
    title: 'Open Shifts Get Recovered Faster',
    description: 'Available caregivers are notified immediately for rapid coverage.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-white to-gray-50" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28 sm:mb-32"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Simple Enough for Daily Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A streamlined workflow designed for busy staffing coordinators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-10 border border-gray-200/50 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <ArrowRight size={18} className="text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block lg:hidden text-center mt-6">
                  <ArrowRight size={20} className="text-blue-300 mx-auto rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
