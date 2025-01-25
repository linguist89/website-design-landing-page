'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const heroText = document.querySelector('.hero-text')
      const heroImage = document.querySelector('.hero-image')
      
      if (heroText && heroImage) {
        heroText.style.transform = `translateY(${scrolled * 0.5}px)`
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-500 to-orange-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.3)_100%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hero-text space-y-8 text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Bold Innovation
              <span className="block text-orange-200">Starts Here</span>
            </h1>
            <p className="text-xl text-orange-100">
              Transform your ideas into reality with our cutting-edge solutions and bold approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-red-500 rounded-lg hover:bg-orange-100 transition duration-300 font-semibold">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-image relative h-[500px]">
            <div className="absolute inset-0 animate-float">
              <Image
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
                alt="Innovation concept"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-white/90">
          {[
            { number: '250+', label: 'Projects Completed' },
            { number: '99%', label: 'Client Satisfaction' },
            { number: '15+', label: 'Years Experience' },
            { number: '50+', label: 'Team Members' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-orange-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
} 