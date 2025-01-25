'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={40} 
              height={40}
              className="mr-4"
            />
          </div>

          <nav className={`
            fixed inset-0 bg-black/90 backdrop-blur-sm transition-all duration-300
            flex flex-col items-center justify-center space-y-8 text-lg
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            md:relative md:inset-auto md:bg-transparent md:backdrop-blur-none
            md:flex-row md:space-y-0 md:space-x-8 md:opacity-100 md:visible
          `}>
            <a href="#" className="text-white hover:text-red-400 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-red-400 transition-colors">About</a>
            <a href="#" className="text-white hover:text-red-400 transition-colors">Services</a>
            <a href="#" className="text-white hover:text-red-400 transition-colors">Contact</a>
            <button 
              className="absolute top-6 right-6 text-white md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </nav>

          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 