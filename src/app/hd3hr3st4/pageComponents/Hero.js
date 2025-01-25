'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Sustainable Solutions for Tomorrow
          </h1>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Discover how our eco-friendly approach is transforming industries while protecting our planet.
          </p>
        </div>

        <div className="relative aspect-video w-full max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?auto=format&fit=crop&q=80"
            alt="Sustainable technology"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-colors">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Environmental Impact</h3>
            <p className="text-green-600">Reducing carbon footprint through innovative technologies</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Scientific Research</h3>
            <p className="text-green-600">Data-driven solutions backed by extensive research</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Global Reach</h3>
            <p className="text-green-600">Making a positive impact across continents</p>
          </div>
        </div>
      </div>
    </section>
  )
} 