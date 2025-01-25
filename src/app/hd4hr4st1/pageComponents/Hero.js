'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
            Find Your Perfect
            <span className="block">Skate Spot</span>
          </h1>
          
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Join the largest community of street skaters. Discover hidden spots, connect with local riders, and share your favorite locations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-red-100 transition-colors">
              Explore Spots
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Add Your Spot
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-red-200">Skate Spots</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-red-200">Skaters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-red-200">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-red-200">Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </div>
  )
} 