'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <svg
                className="w-10 h-10 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">DigiFlow</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-red-500">Home</Link>
            <Link href="/features" className="text-gray-800 hover:text-red-500">Features</Link>
            <Link href="/pricing" className="text-gray-800 hover:text-red-500">Pricing</Link>
            <Link href="/contact" className="text-gray-800 hover:text-red-500">Contact</Link>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-800 hover:text-red-500">Home</Link>
              <Link href="/features" className="block px-3 py-2 text-gray-800 hover:text-red-500">Features</Link>
              <Link href="/pricing" className="block px-3 py-2 text-gray-800 hover:text-red-500">Pricing</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-800 hover:text-red-500">Contact</Link>
              <button className="w-full bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 