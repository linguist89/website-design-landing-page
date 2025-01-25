'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="py-3 border-b">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <svg
                  className="w-10 h-10 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-800">EduHub</span>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses, tutorials, and resources..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <button type="submit" className="ml-2 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                Search
              </button>
            </form>

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
        </div>

        {/* Main Navigation - Desktop */}
        <nav className="hidden md:flex items-center justify-center py-3 space-x-8">
          <Link href="/courses" className="text-gray-700 hover:text-green-500">Courses</Link>
          <Link href="/tutorials" className="text-gray-700 hover:text-green-500">Tutorials</Link>
          <Link href="/resources" className="text-gray-700 hover:text-green-500">Resources</Link>
          <Link href="/community" className="text-gray-700 hover:text-green-500">Community</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-green-500">Pricing</Link>
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3">
              <Link href="/courses" className="text-gray-700 hover:text-green-500 py-2">Courses</Link>
              <Link href="/tutorials" className="text-gray-700 hover:text-green-500 py-2">Tutorials</Link>
              <Link href="/resources" className="text-gray-700 hover:text-green-500 py-2">Resources</Link>
              <Link href="/community" className="text-gray-700 hover:text-green-500 py-2">Community</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-green-500 py-2">Pricing</Link>
              <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
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