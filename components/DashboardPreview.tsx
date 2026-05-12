'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Clock, Users } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="bg-white" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32 sm:mb-36"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            A Clearer View of Daily Staffing Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time operational dashboard designed for staffing coordinators.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-16 lg:p-20 border border-gray-200/50 shadow-2xl overflow-hidden max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Active Shifts</h3>
                <Clock size={24} className="text-blue-600" />
              </div>
              <p className="text-5xl font-bold text-blue-600 mb-3">24</p>
              <p className="text-base text-gray-600">Today's scheduled shifts</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Confirmations</h3>
                <CheckCircle size={24} className="text-teal-600" />
              </div>
              <p className="text-5xl font-bold text-teal-600 mb-3">18/24</p>
              <p className="text-base text-gray-600">Caregiver confirmations</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Open Shifts</h3>
                <AlertCircle size={24} className="text-orange-600" />
              </div>
              <p className="text-5xl font-bold text-orange-600 mb-3">6</p>
              <p className="text-base text-gray-600">Need coverage</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-3 text-lg">
                <Users size={22} className="text-blue-600" />
                Caregiver Status
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Sarah Martinez', status: 'Confirmed', color: 'bg-green-100 text-green-700' },
                  { name: 'Marcus Johnson', status: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
                  { name: 'Jennifer Lee', status: 'Confirmed', color: 'bg-green-100 text-green-700' },
                  { name: 'David Brown', status: 'No Response', color: 'bg-red-100 text-red-700' },
                ].map((caregiver, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <span className="text-base font-semibold text-gray-900">{caregiver.name}</span>
                    <span className={`text-xs font-bold px-4 py-2 rounded-lg ${caregiver.color}`}>
                      {caregiver.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">SMS Activity</h3>
              <div className="space-y-4">
                {[
                  { message: 'Sarah M. confirmed for 2pm shift', time: '2 min ago' },
                  { message: 'Marcus J. sent availability update', time: '15 min ago' },
                  { message: 'Open shift alert sent to 8 caregivers', time: '28 min ago' },
                  { message: 'Jennifer L. confirmed for tomorrow', time: '1 hour ago' },
                ].map((activity, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                    <p className="text-base font-medium text-gray-900">{activity.message}</p>
                    <p className="text-sm text-gray-500 mt-2">{activity.time}</p>
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
