'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-blue-50 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            Transform Your Service Business
          </h1>
          <p className="text-blue-700 text-lg">
            Professional solutions tailored to your needs. Join thousands of satisfied customers.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-500"
            />
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </form>
          <div className="flex items-center space-x-2 text-blue-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Trusted by 1000+ businesses</span>
          </div>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Professional service"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
} 