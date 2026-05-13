'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="bg-gradient-to-b from-white to-blue-50" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <Quote size={48} className="text-blue-600 mx-auto mb-10" />
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 leading-relaxed testimonial-quote"
            style={{ textAlign: 'center', display: 'block', width: '100%' }}>
            "CAREFLOW OS helped us reduce the daily chaos around caregiver scheduling and coverage. Our coordinators finally feel organized and back in control."
          </p>
          <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg flex flex-col items-center justify-center testimonial-attribution"
            style={{ textAlign: 'center' }}>
            <p className="font-bold text-gray-900 text-lg">Sarah Chen</p>
            <p className="text-gray-600 text-base">Staffing Coordinator, Home Care Services</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
