'use client';

import { motion } from 'framer-motion';
import { FileText, MessageCircle, Phone, AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold text-gray-900 mb-24 text-center leading-tight"
        >
          Staffing Coordination Shouldn't Feel Like Crisis Management
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-16 relative h-96 flex items-center justify-center border border-gray-200/50 shadow-xl">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-12 left-10 w-28 h-36 bg-yellow-100 rounded-2xl rotate-12 shadow-2xl p-4 border-2 border-yellow-300">
                  <p className="text-xs font-bold text-yellow-900">NOTES</p>
                  <p className="text-xs text-yellow-800 mt-3">Sarah - 2pm</p>
                  <p className="text-xs text-yellow-800">Marcus - ?</p>
                </div>

                <div className="absolute top-24 right-16 w-24 h-24 bg-blue-100 rounded-2xl -rotate-6 shadow-2xl flex items-center justify-center border-2 border-blue-300">
                  <MessageCircle size={40} className="text-blue-600" />
                </div>

                <div className="absolute bottom-16 left-16 w-32 h-24 bg-red-100 rounded-2xl rotate-3 shadow-2xl p-3 border-2 border-red-300">
                  <p className="text-xs font-bold text-red-900">SPREADSHEET</p>
                  <p className="text-xs text-red-800 mt-2">Shifts | Status</p>
                </div>

                <div className="absolute bottom-12 right-12 w-20 h-20 bg-gray-300 rounded-full shadow-2xl flex items-center justify-center border-2 border-gray-400">
                  <Phone size={32} className="text-gray-700" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-gray-700 mb-12 leading-relaxed font-medium">
              Most staffing teams spend their day reacting to:
            </p>

            <div className="space-y-5 mb-12">
              {[
                { icon: AlertTriangle, text: 'Caregiver callouts' },
                { icon: AlertTriangle, text: 'Coverage gaps' },
                { icon: MessageCircle, text: 'Constant follow-up' },
                { icon: FileText, text: 'Scheduling confusion' },
                { icon: Phone, text: 'Manual communication' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <Icon size={24} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200/50">
              <p className="text-xl text-gray-900 font-semibold leading-relaxed">
                CAREFLOW OS brings caregiver coordination into one organized system designed to reduce daily staffing stress and bring calm to your operations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
