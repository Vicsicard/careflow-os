'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Quote size={32} className="text-blue-600 mx-auto mb-6" />
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 leading-relaxed">
            "CAREFLOW OS helped us reduce the daily chaos around caregiver scheduling and coverage. Our coordinators finally feel organized."
          </p>
          <div>
            <p className="font-semibold text-gray-900">Sarah Chen</p>
            <p className="text-gray-600">Staffing Coordinator, Home Care Services</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
