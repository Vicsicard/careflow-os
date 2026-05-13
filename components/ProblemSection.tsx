'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProblemSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white" style={{ paddingTop: '120px', paddingBottom: '160px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50"
        >
          <Image
            src="/crisis-2.png"
            alt="Staffing Crisis Management"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
