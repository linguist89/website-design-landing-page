'use client'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={40} 
            height={40}
            className="mr-4"
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
} 