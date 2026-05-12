'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 gradient-soft">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stop Managing Caregiver Staffing Through Chaos
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              CAREFLOW OS helps staffing coordinators reduce no-shows, organize caregiver scheduling, and manage open shifts without endless texting, phone calls, or spreadsheets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">See How It Works</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Active Shifts</p>
                    <p className="text-2xl font-bold text-blue-600">24</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📋</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Confirmations</p>
                    <p className="text-2xl font-bold text-teal-600">18/24</p>
                  </div>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Open Shifts</p>
                    <p className="text-2xl font-bold text-orange-600">6</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚠️</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-3">Recent SMS Activity</p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Sarah M.</span> confirmed for today
                    </div>
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Marcus J.</span> sent availability update
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
