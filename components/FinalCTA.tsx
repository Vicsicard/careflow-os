'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Bring More Organization to Your Caregiver Staffing
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how CAREFLOW OS can help simplify scheduling, communication, and caregiver coordination.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
            Schedule a Demo
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
