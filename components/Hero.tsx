'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="gradient-soft relative overflow-hidden px-4 sm:px-6" style={{ paddingTop: '140px', paddingBottom: '64px' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-15 sm:mb-20 lg:mb-25">
              Caregiver Staffing Software Built to Reduce No-Shows and Coverage Gaps
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-14 sm:mb-16 leading-relaxed max-w-xl">
              CAREFLOW OS helps staffing coordinators simplify scheduling, fill open shifts faster, and keep caregiver operations organized with real-time communication and automated coverage workflows.
            </p>
            <div className="flex justify-center sm:justify-start mb-16 sm:mb-20">
              <button className="btn-primary flex items-center justify-center gap-3 text-lg">
                Book a Demo
                <ArrowRight size={24} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:scale-125 lg:translate-x-8 lg:-translate-y-24"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
              <Image
                src="/hero-image.png"
                alt="CAREFLOW OS Dashboard Preview"
                width={1000}
                height={750}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
