'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full bg-[#FF4500] text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 9C21 7 20 6 18 6H14L12 4H6C4 4 3 5 3 7V17C3 19 4 20 6 20H18C20 20 21 19 21 17V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L12 16L16 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xl font-bold">Skate Style</span>
      </div>
      <nav className="flex items-center space-x-6">
        <a href="#" className="hover:text-gray-200 transition-colors">Tricks</a>
        <a href="#" className="hover:text-gray-200 transition-colors">Shop</a>
        <a href="#" className="hover:text-gray-200 transition-colors">Login</a>
      </nav>
    </header>
  )
} 