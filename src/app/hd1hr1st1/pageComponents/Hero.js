'use client'
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-500 to-orange-500 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Transform Your Business with Modern Solutions
            </h1>
            <p className="text-lg text-red-100">
              Empower your company with cutting-edge technology and innovative strategies designed for the digital age.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-6">
                {/* Feature Cards */}
                {[
                  { title: 'Analytics', value: '99%', desc: 'Accuracy' },
                  { title: 'Growth', value: '2x', desc: 'Year over Year' },
                  { title: 'Users', value: '10k+', desc: 'Active Daily' },
                  { title: 'ROI', value: '300%', desc: 'Average Return' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-3xl font-bold mt-2">{item.value}</p>
                    <p className="text-sm text-red-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero; 