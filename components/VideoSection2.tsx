'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

export default function VideoSection2() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '16px', paddingRight: '16px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Title above the video */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Automated Coverage Coordination in Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600" style={{ textAlign: 'center', display: 'block', width: '100%', maxWidth: '42rem', margin: '0 auto' }}>
              See how CAREFLOW OS automates shift coordination and coverage recovery
            </p>
          </div>

          {/* Video Container - Mobile Optimized */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-200/50 bg-gray-900">
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                controlsList="nodownload"
                preload="metadata"
                playsInline
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
              >
                <source src="https://pub-d76cf5834a8b4179a93c312211a9c8d9.r2.dev/CAREFLOW_OS_Automated_Coverage_Coordination.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Large Play Button Overlay - Only show when paused */}
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 group"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600 ml-1" fill="currentColor" />
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Caption below video */}
          <p className="text-center text-gray-500 mt-4 sm:mt-6 text-xs sm:text-sm">
            See how automated coverage coordination works
          </p>
        </motion.div>
      </div>
    </section>
  );
}
