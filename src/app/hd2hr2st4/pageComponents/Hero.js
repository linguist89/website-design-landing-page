'use client'

import Image from 'next/image'

export default function Hero() {
  const products = [
    {
      title: "Bamboo Deck",
      price: "$89.99",
      features: ["Sustainable", "Durable", "Eco-friendly"]
    },
    {
      title: "Hemp Grip Tape",
      price: "$24.99",
      features: ["100% Natural", "Extra Grip", "Biodegradable"]
    },
    {
      title: "Recycled Wheels",
      price: "$39.99",
      features: ["Ocean Plastic", "Smooth Ride", "Earth-Friendly"]
    }
  ]

  return (
    <div className="min-h-[800px] bg-[#2F4F4F] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Sustainable Skateboarding Gear</h1>
          <p className="text-xl text-green-200 mb-8">Ride with purpose. Every product is crafted with the planet in mind.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-[#1A2F2F] p-8 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-green-800 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"/>
                  <path d="M12 8v8" strokeWidth="2"/>
                  <path d="M8 12h8" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
              <p className="text-green-200 text-xl mb-4">{product.price}</p>
              <ul className="text-sm space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300">{feature}</li>
                ))}
              </ul>
              <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-12 text-green-200">
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Eco-Friendly</p>
            </div>
            <div>
              <p className="text-3xl font-bold">5000+</p>
              <p className="text-sm">Happy Riders</p>
            </div>
            <div>
              <p className="text-3xl font-bold">30 Days</p>
              <p className="text-sm">Return Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 