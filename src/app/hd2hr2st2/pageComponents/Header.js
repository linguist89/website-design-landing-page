'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="hidden md:flex justify-between items-center">
          {/* Left Navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-800 hover:text-blue-500">Home</Link>
            <Link href="/features" className="text-gray-800 hover:text-blue-500">Features</Link>
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <svg
                className="w-10 h-10 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">PlumbPro</span>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/pricing" className="text-gray-800 hover:text-blue-500">Pricing</Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600"
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-800 hover:text-blue-500 py-2">Home</Link>
              <Link href="/features" className="text-gray-800 hover:text-blue-500 py-2">Features</Link>
              <Link href="/pricing" className="text-gray-800 hover:text-blue-500 py-2">Pricing</Link>
              <Link href="/contact" className="text-gray-800 hover:text-blue-500 py-2">Contact</Link>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
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