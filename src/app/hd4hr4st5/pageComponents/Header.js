'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full transition-all duration-300 ${
      isScrolled ? 'bg-sky-50/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
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
            <a href="#" className={`transition-colors ${
              isScrolled ? 'text-sky-900 hover:text-sky-700' : 'text-sky-800 hover:text-sky-600'
            }`}>Home</a>
            <a href="#" className={`transition-colors ${
              isScrolled ? 'text-sky-900 hover:text-sky-700' : 'text-sky-800 hover:text-sky-600'
            }`}>Services</a>
            <a href="#" className={`transition-colors ${
              isScrolled ? 'text-sky-900 hover:text-sky-700' : 'text-sky-800 hover:text-sky-600'
            }`}>Contact</a>
          </nav>

          <button className="md:hidden">
            <svg className={`w-6 h-6 transition-colors ${
              isScrolled ? 'text-sky-900' : 'text-sky-800'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 