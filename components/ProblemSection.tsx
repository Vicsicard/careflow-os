'use client';

import { motion } from 'framer-motion';
import { FileText, MessageCircle, Phone, AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Staffing Coordination Shouldn't Feel Like Crisis Management
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gray-50 rounded-2xl p-12 relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute top-8 left-8 w-24 h-32 bg-yellow-100 rounded-lg rotate-12 shadow-lg p-3 border-2 border-yellow-300">
                  <p className="text-xs font-bold text-yellow-900">NOTES</p>
                  <p className="text-xs text-yellow-800 mt-2">Sarah - 2pm</p>
                  <p className="text-xs text-yellow-800">Marcus - ?</p>
                </div>

                <div className="absolute top-20 right-12 w-20 h-20 bg-blue-100 rounded-lg -rotate-6 shadow-lg flex items-center justify-center border-2 border-blue-300">
                  <MessageCircle size={32} className="text-blue-600" />
                </div>

                <div className="absolute bottom-12 left-12 w-28 h-20 bg-red-100 rounded-lg rotate-3 shadow-lg p-2 border-2 border-red-300">
                  <p className="text-xs font-bold text-red-900">SPREADSHEET</p>
                  <p className="text-xs text-red-800 mt-1">Shifts | Status</p>
                </div>

                <div className="absolute bottom-8 right-8 w-16 h-16 bg-gray-200 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-400">
                  <Phone size={24} className="text-gray-600" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Most staffing teams spend their day reacting to:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: AlertTriangle, text: 'Caregiver callouts' },
                { icon: AlertTriangle, text: 'Coverage gaps' },
                { icon: MessageCircle, text: 'Constant follow-up' },
                { icon: FileText, text: 'Scheduling confusion' },
                { icon: Phone, text: 'Manual communication' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon size={20} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-lg text-gray-900 font-medium">
              CAREFLOW OS brings caregiver coordination into one organized system designed to reduce daily staffing stress.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
