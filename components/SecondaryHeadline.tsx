'use client';

import { motion } from 'framer-motion';

export default function SecondaryHeadline() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container-custom">
        <div className="w-full px-4 sm:px-6" style={{ textAlign: 'center' }}>
          {/* SECONDARY OUTCOME HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 lg:mb-12"
          >
            Built to Reduce No-Shows and Coverage Gaps
          </motion.h2>

          {/* SECONDARY SUPPORTING TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed mx-auto max-w-4xl"
            style={{ textAlign: 'center', display: 'block', width: '100%' }}
          >
            CAREFLOW OS helps staffing coordinators simplify scheduling, automate caregiver confirmations, and recover open shifts before coverage problems become daily emergencies.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
