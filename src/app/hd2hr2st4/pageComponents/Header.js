'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full bg-[#2F4F4F] text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-green-200 transition-colors">Shop</a>
          <a href="#" className="hover:text-green-200 transition-colors">Tutorials</a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L4 9V21H20V9L12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 17H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-2xl font-bold">EcoSkate</span>
        </div>

        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-green-200 transition-colors">Community</a>
          <a href="#" className="hover:text-green-200 transition-colors">Login</a>
        </nav>
      </div>
    </header>
  )
} 