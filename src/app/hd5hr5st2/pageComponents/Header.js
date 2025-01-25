'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
              <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-2xl font-bold text-white">ProSkate</span>
          </div>

          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>

        {/* Overlay Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-blue-900/95 backdrop-blur-sm">
            <nav className="max-w-7xl mx-auto py-8 px-6">
              <ul className="space-y-6 text-lg">
                <li>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors">Pro Team</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors">Training</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors">Events</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors">Shop</a>
                </li>
                <li>
                  <button className="px-6 py-2 bg-white text-blue-900 rounded-full hover:bg-blue-100 transition-colors">
                    Join Team
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 