'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CF</span>
            </div>
            <span className="font-semibold text-gray-900 hidden sm:inline">CAREFLOW OS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
            <button className="btn-primary">Book a Demo</button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <a href="#features" className="block py-2 text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="block py-2 text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#benefits" className="block py-2 text-gray-600 hover:text-gray-900">Benefits</a>
            <button className="btn-primary w-full mt-4">Book a Demo</button>
          </nav>
        )}
      </div>
    </header>
  );
}
