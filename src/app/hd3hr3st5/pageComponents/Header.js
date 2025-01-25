'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full bg-sky-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8L12 4L20 8L12 12L4 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl font-bold">SkateVids</span>
        </div>
        
        <div className="flex-grow max-w-xl mx-4">
          <div className="relative">
            <input 
              type="search" 
              placeholder="Search tutorials..." 
              className="w-full px-4 py-2 bg-sky-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-sky-300"
            />
            <svg className="w-5 h-5 absolute right-3 top-2.5 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-sky-200 transition-colors">Tutorials</a>
          <a href="#" className="hover:text-sky-200 transition-colors">Categories</a>
          <a href="#" className="hover:text-sky-200 transition-colors">Upload</a>
          <a href="#" className="hover:text-sky-200 transition-colors">Login</a>
        </nav>
      </div>
    </header>
  )
} 