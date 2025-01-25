'use client'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-orange-800 hover:text-orange-900">About</a>
          <a href="#" className="text-orange-800 hover:text-orange-900">Features</a>
        </nav>
        
        <div className="flex items-center justify-center py-4 md:py-0">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={50} 
            height={50}
            className="mx-4"
          />
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-orange-800 hover:text-orange-900">Services</a>
          <a href="#" className="text-orange-800 hover:text-orange-900">Contact</a>
        </nav>

        <button className="md:hidden absolute right-6 top-6">
          <svg className="w-6 h-6 text-orange-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
} 