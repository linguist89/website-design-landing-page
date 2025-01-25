'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
          alt="Tranquil beach scene"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 to-green-800/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Tranquility
          </h1>
          <p className="text-xl text-sky-100 mb-8">
            Discover a perfect blend of luxury and nature in our exclusive eco-resorts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition duration-300">
              Book Now
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition duration-300">
              Virtual Tour
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '100+', label: 'Locations' },
              { number: '50k+', label: 'Happy Guests' },
              { number: '4.9', label: 'Rating' },
              { number: '15+', label: 'Years' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sky-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 