'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DashboardPreview() {
  return (
    <section className="bg-white" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50"
        >
          <Image
            src="/Operations.png"
            alt="Daily Staffing Operations"
            width={1400}
            height={800}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
