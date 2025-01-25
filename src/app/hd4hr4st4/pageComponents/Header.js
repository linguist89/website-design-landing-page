'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <svg
                className={`w-10 h-10 transition-colors duration-300 ${
                  isScrolled ? 'text-purple-500' : 'text-white'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className={`ml-2 text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Visionary
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/portfolio" 
              className={`hover:text-purple-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/services" 
              className={`hover:text-purple-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`hover:text-purple-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className={`hover:text-purple-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
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
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl">
            <div className="py-2">
              <Link href="/portfolio" className="block px-4 py-2 text-gray-800 hover:text-purple-500">
                Portfolio
              </Link>
              <Link href="/services" className="block px-4 py-2 text-gray-800 hover:text-purple-500">
                Services
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-800 hover:text-purple-500">
                About
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-800 hover:text-purple-500">
                Blog
              </Link>
              <div className="px-4 py-2">
                <button className="w-full bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 