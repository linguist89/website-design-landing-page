'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = window.scrollY
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{ transform: `translate(${scrollProgress * 100}px, ${scrollProgress * -50}px)` }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{ transform: `translate(${scrollProgress * -100}px, ${scrollProgress * 50}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-7xl font-bold text-white mb-8"
            style={{ transform: `translateY(${scrollProgress * -50}px)`, opacity: 1 - scrollProgress }}
          >
            Pro Skate
            <span className="block text-blue-300">Academy</span>
          </h1>
          
          <p 
            className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto"
            style={{ transform: `translateY(${scrollProgress * -30}px)`, opacity: 1 - scrollProgress }}
          >
            Train with professional skateboarders, master advanced techniques, and join an elite community of dedicated athletes.
          </p>

          <div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            style={{ transform: `translateY(${scrollProgress * -20}px)`, opacity: 1 - scrollProgress }}
          >
            <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-100 transition-colors">
              Start Training
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Meet the Team
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Pro Trainers' },
              { number: '100+', label: 'Tricks' },
              { number: '5000+', label: 'Students' },
              { number: '15+', label: 'Countries' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
                style={{ 
                  transform: `translateY(${scrollProgress * -(10 * (index + 1))}px)`,
                  opacity: 1 - scrollProgress
                }}
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-blue-800">
        <div 
          className="h-full bg-white transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  )
} 