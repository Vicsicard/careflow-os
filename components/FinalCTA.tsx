'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-600 to-teal-600 relative overflow-hidden" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
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
          <p className="text-2xl text-blue-100 mb-14 max-w-3xl mx-auto leading-relaxed final-cta-subtitle"
            style={{ textAlign: 'center', display: 'block', width: '100%', marginBottom: '5rem' }}>
            See how CAREFLOW OS can help simplify scheduling, reduce staffing chaos, and improve caregiver coordination.
          </p>
          <button id="final-cta-button" className="inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 lg:px-20 lg:py-10 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            Book a Demo
            <ArrowRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
