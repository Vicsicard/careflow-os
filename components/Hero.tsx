'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-40 pb-32 sm:pt-56 sm:pb-48 gradient-soft relative overflow-hidden">
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Stop Managing Caregiver Staffing Through Chaos
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-xl">
              CAREFLOW OS brings calm and organization to your daily staffing operations. Reduce no-shows, streamline scheduling, and manage open shifts without endless texting or spreadsheets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="btn-primary flex items-center justify-center gap-3 text-lg">
                Book a Demo
                <ArrowRight size={24} />
              </button>
              <button className="btn-secondary text-lg">See How It Works</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={24} className="text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Real-Time Coordination</p>
                  <p className="text-gray-600">Instant caregiver confirmations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={24} className="text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Built for Operations</p>
                  <p className="text-gray-600">Designed for daily staffing</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200/50">
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200/50">
                    <p className="text-sm font-medium text-gray-600 mb-2">Active Shifts</p>
                    <p className="text-4xl font-bold text-blue-600">24</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200/50">
                    <p className="text-sm font-medium text-gray-600 mb-2">Confirmed</p>
                    <p className="text-4xl font-bold text-teal-600">18</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200/50">
                    <p className="text-sm font-medium text-gray-600 mb-2">Open</p>
                    <p className="text-4xl font-bold text-orange-600">6</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-semibold text-gray-900 mb-4">Caregiver Status</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">Sarah Martinez</span>
                      </div>
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-lg">Confirmed</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">Marcus Johnson</span>
                      </div>
                      <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-lg">Pending</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">Jennifer Lee</span>
                      </div>
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-lg">Confirmed</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <MessageSquare size={16} />
                    Recent Activity
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700"><span className="font-semibold">Sarah M.</span> confirmed 2pm shift</p>
                    <p className="text-gray-600 text-xs">2 minutes ago</p>
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
