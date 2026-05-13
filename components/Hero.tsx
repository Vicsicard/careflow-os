'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="gradient-soft relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          {/* EYEBROW TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8"
          >
            HOME CARE STAFFING SOFTWARE
          </motion.p>

          {/* MAIN HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 lg:mb-12"
          >
            Caregiver Staffing Software
          </motion.h1>

          {/* SUPPORTING TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            Simplify scheduling, reduce staffing chaos, and coordinate caregivers with real-time operational workflows.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex justify-center items-center mb-16 sm:mb-20"
          >
            <button className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4">
              Book a Demo
              <ArrowRight size={24} />
            </button>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-5xl sm:max-w-6xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
              <Image
                src="/hero-image.png"
                alt="CAREFLOW OS Dashboard Preview"
                width={1400}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* SECONDARY OUTCOME HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mt-16 sm:mt-20 lg:mt-24 mb-6 sm:mb-8"
          >
            Built to Reduce No-Shows and Coverage Gaps
          </motion.h2>

          {/* SECONDARY SUPPORTING TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            CAREFLOW OS helps staffing coordinators manage open shifts, automate confirmations, and keep caregiver operations organized every day.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
