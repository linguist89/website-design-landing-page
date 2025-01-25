'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative min-h-[800px] bg-sky-900">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/50 to-sky-900 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">Learn From Pro Skaters</h1>
          <p className="text-xl text-sky-200 mb-8">Master everything from basic tricks to advanced techniques with our video tutorials</p>
        </div>

        <div className="max-w-4xl mx-auto bg-sky-800/50 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="aspect-video relative bg-sky-950 flex items-center justify-center">
            <div className="text-sky-200">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M10 8L16 12L10 16V8Z" fill="currentColor" stroke="none"/>
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Featured: Kickflip Masterclass</h3>
            <p className="text-sky-200 mb-4">Learn the perfect kickflip from professional skater Mike Thompson</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sky-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 8V12L15 15" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" strokeWidth="2"/>
                </svg>
                <span>15 minutes</span>
              </div>
              <button className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-500 transition-colors">
                Watch Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sky-200">
          <div>
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div>Video Tutorials</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">20+</div>
            <div>Pro Instructors</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div>Support</div>
          </div>
        </div>
      </div>
    </div>
  )
} 