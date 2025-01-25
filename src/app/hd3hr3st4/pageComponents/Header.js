'use client'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-green-50">
      <div className="max-w-7xl mx-auto">
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
          
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:border-green-500"
              />
              <button className="absolute right-3 top-2.5">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-green-700 hover:text-green-900">Products</a>
            <a href="#" className="text-green-700 hover:text-green-900">Resources</a>
            <a href="#" className="text-green-700 hover:text-green-900">Contact</a>
          </nav>

          <button className="md:hidden">
            <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 