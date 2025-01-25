'use client'
import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="h-10">
        <Logo className="h-full w-auto text-gray-800" />
      </div>
      <nav className="flex gap-4">
        <button className="px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium transition-colors">
          About
        </button>
        <button className="px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium transition-colors">
          Settings
        </button>
        <button className="px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium transition-colors">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header; 