'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Optional: Add a title above the video */}
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
              {/* Replace the src with your video path */}
              <video
                className="w-full h-full object-cover"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/careflow-video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Optional: Custom play button overlay (shows before playing) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-opacity hover:bg-black/30">
                  <button
                    onClick={(e) => {
                      const video = e.currentTarget.parentElement?.querySelector('video');
                      video?.play();
                    }}
                    className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Optional: Caption below video */}
          <p className="text-center text-gray-500 mt-6 text-sm">
            2-minute overview of CAREFLOW OS features
          </p>
        </motion.div>
      </div>
    </section>
  );
}
