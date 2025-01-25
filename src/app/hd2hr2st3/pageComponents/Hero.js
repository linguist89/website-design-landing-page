'use client'
import Image from 'next/image'

export default function Hero() {
  const features = [
    { title: 'Innovation', description: 'Cutting-edge solutions' },
    { title: 'Quality', description: 'Premium craftsmanship' },
    { title: 'Support', description: '24/7 expert assistance' },
    { title: 'Value', description: 'Competitive pricing' }
  ]

  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-900">
              Discover Our Creative Solutions
            </h1>
            <p className="text-orange-700 text-lg">
              Transform your ideas into reality with our innovative products and creative expertise.
            </p>
            <div className="flex space-x-4">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80"
              alt="Creative workspace"
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-2">{feature.title}</h3>
              <p className="text-orange-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 