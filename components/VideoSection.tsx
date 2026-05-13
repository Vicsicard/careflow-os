'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Title above the video */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              See CAREFLOW OS in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how staffing coordinators are simplifying their daily operations
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 bg-gray-900">
            <div className="relative aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                controlsList="nodownload"
                preload="metadata"
              >
                <source src="https://pub-d76cf5834a8b4179a93c312211a9c8d9.r2.dev/careflow-video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Caption below video */}
          <p className="text-center text-gray-500 mt-6 text-sm">
            2-minute overview of CAREFLOW OS features
          </p>
        </motion.div>
      </div>
    </section>
  );
}
