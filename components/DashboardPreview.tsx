'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Clock, Users } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            A Clearer View of Daily Staffing Operations
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 shadow-lg overflow-hidden"
        >
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Active Shifts</h3>
                <Clock size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">24</p>
              <p className="text-sm text-gray-600">Today's scheduled shifts</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Confirmations</h3>
                <CheckCircle size={20} className="text-teal-600" />
              </div>
              <p className="text-3xl font-bold text-teal-600 mb-2">18/24</p>
              <p className="text-sm text-gray-600">Caregiver confirmations</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Open Shifts</h3>
                <AlertCircle size={20} className="text-orange-600" />
              </div>
              <p className="text-3xl font-bold text-orange-600 mb-2">6</p>
              <p className="text-sm text-gray-600">Need coverage</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users size={18} className="text-blue-600" />
                Caregiver Status
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Sarah Martinez', status: 'Confirmed', color: 'bg-green-100 text-green-700' },
                  { name: 'Marcus Johnson', status: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
                  { name: 'Jennifer Lee', status: 'Confirmed', color: 'bg-green-100 text-green-700' },
                  { name: 'David Brown', status: 'No Response', color: 'bg-red-100 text-red-700' },
                ].map((caregiver, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">{caregiver.name}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${caregiver.color}`}>
                      {caregiver.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">SMS Activity</h3>
              <div className="space-y-3">
                {[
                  { message: 'Sarah M. confirmed for 2pm shift', time: '2 min ago' },
                  { message: 'Marcus J. sent availability update', time: '15 min ago' },
                  { message: 'Open shift alert sent to 8 caregivers', time: '28 min ago' },
                  { message: 'Jennifer L. confirmed for tomorrow', time: '1 hour ago' },
                ].map((activity, index) => (
                  <div key={index} className="pb-3 border-b border-gray-100 last:border-b-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
