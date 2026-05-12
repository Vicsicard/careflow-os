'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src="/careflowos-logo.png" 
                alt="CAREFLOW OS Logo" 
                width={160} 
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-base text-gray-400 leading-relaxed">
              Staffing coordination made simple, organized, and calm.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors font-medium">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors font-medium">How It Works</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors font-medium">Benefits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-base text-gray-400">
              &copy; 2025 CAREFLOW OS. All rights reserved.
            </p>
            <button className="btn-primary text-base">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
