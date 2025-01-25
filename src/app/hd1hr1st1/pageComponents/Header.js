'use client'
import React, { useState } from 'react';
import Logo from '@/components/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="h-10">
        <Logo className="h-full w-auto text-red-500" />
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2"
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

      {/* Desktop Navigation */}
      <nav className={`md:flex gap-4 ${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-white p-4 shadow-md flex flex-col' : 'hidden'} md:relative md:top-0 md:flex-row md:p-0 md:shadow-none`}>
        <button className="px-4 py-2 rounded-md hover:bg-red-50 text-gray-700 font-medium transition-colors">
          About
        </button>
        <button className="px-4 py-2 rounded-md hover:bg-red-50 text-gray-700 font-medium transition-colors">
          Services
        </button>
        <button className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 font-medium transition-colors">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header; 