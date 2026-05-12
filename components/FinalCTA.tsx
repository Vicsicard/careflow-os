'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 via-blue-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-10 leading-tight">
            Bring More Organization to Your Caregiver Staffing
          </h2>
          <p className="text-2xl text-blue-100 mb-14 max-w-3xl mx-auto leading-relaxed">
            See how CAREFLOW OS can help simplify scheduling, communication, and caregiver coordination.
          </p>
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg">
            Schedule a Demo
            <ArrowRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
