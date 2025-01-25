'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-[#FF4500] to-[#FF8C00] flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-6">Master Your Skateboarding Journey</h1>
        <p className="text-xl mb-8">Join our community of skaters and level up your skills with expert guidance</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-[#FF4500] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Start Learning
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
            Watch Demos
          </button>
        </div>
        <div className="mt-12 flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-sm opacity-80">Tricks Learned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm opacity-80">Pro Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm opacity-80">Community Support</div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/20 z-0"></div>
    </div>
  )
} 