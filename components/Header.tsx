'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-200/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 px-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">CF</span>
            </div>
            <span className="font-bold text-gray-900 hidden sm:inline text-lg">CAREFLOW OS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">How It Works</a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Benefits</a>
            <button className="btn-primary text-sm">Book a Demo</button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-100 space-y-4">
            <a href="#features" className="block py-3 text-gray-600 hover:text-gray-900 font-medium">Features</a>
            <a href="#how-it-works" className="block py-3 text-gray-600 hover:text-gray-900 font-medium">How It Works</a>
            <a href="#benefits" className="block py-3 text-gray-600 hover:text-gray-900 font-medium">Benefits</a>
            <button className="btn-primary w-full mt-4">Book a Demo</button>
          </nav>
        )}
      </div>
    </header>
  );
}
