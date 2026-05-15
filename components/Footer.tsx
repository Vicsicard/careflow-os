'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/careflowos-logo.png" 
              alt="CAREFLOW OS Logo" 
              width={320}
              height={88}
              style={{ height: 'auto', width: 'auto', maxHeight: '40px' }}
              className="max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-16"
            />
          </Link>
          
          {/* Compliance Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
            <Link href="/terms" className="text-gray-400 hover:text-gray-200 transition-colors">
              Terms & Conditions
            </Link>
          </div>
          
          <p className="text-base text-gray-400 leading-relaxed text-center">
            &copy; 2026 CAREFLOW OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
