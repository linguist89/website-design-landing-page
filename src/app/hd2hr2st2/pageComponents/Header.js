'use client'
import React, { useState } from 'react';
import Logo from '@/components/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-sm px-8 py-4">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center">
        {/* Left Navigation */}
        <nav className="flex gap-4">
          <button className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 font-medium transition-colors">
            About
          </button>
          <button className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 font-medium transition-colors">
            Products
          </button>
        </nav>

        {/* Centered Logo */}
        <div className="h-10">
          <Logo className="h-full w-auto text-blue-600" />
        </div>

        {/* Right Navigation */}
        <nav className="flex gap-4">
          <button className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 font-medium transition-colors">
            Services
          </button>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors">
            Contact
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden flex justify-center mb-4`}>
        <Logo className="h-10 w-auto text-blue-600" />
      </div>
      <nav className={`md:hidden ${isMenuOpen ? 'flex flex-col gap-2' : 'hidden'}`}>
        <button className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 font-medium transition-colors">
          About
        </button>
        <button className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 font-medium transition-colors">
          Products
        </button>
        <button className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 font-medium transition-colors">
          Services
        </button>
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header; 