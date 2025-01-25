'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full transition-all duration-300 z-50 ${
      scrolled ? 'bg-red-600 py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5V7M15 11V13M15 17V19M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" 
              stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-bold text-white">StreetSkate</span>
        </div>

        <nav className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-red-200 transition-colors">Events</a>
          <a href="#" className="text-white hover:text-red-200 transition-colors">Spots</a>
          <a href="#" className="text-white hover:text-red-200 transition-colors">Community</a>
          <a href="#" className={`px-4 py-2 rounded-full transition-colors ${
            scrolled ? 'bg-white text-red-600 hover:bg-red-100' : 'bg-red-600 text-white hover:bg-red-700'
          }`}>
            Join Us
          </a>
        </nav>
      </div>
    </header>
  )
} 