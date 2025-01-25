'use client'
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Professional Plumbing Solutions for Your Home
            </h1>
            
            <p className="text-lg text-gray-600">
              Expert plumbing services with 24/7 emergency support. Trust our experienced team for all your plumbing needs.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-blue-500 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold">24/7 Service</h3>
                <p className="text-sm text-gray-600">Emergency support anytime</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-blue-500 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Fast Response</h3>
                <p className="text-sm text-gray-600">Quick arrival guaranteed</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-blue-500 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Licensed Pros</h3>
                <p className="text-sm text-gray-600">Certified plumbers</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-blue-500 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold">Fair Pricing</h3>
                <p className="text-sm text-gray-600">Transparent rates</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full sm:w-auto bg-blue-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors">
              Schedule Service Now
            </button>
          </div>

          {/* Image Side */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
              alt="Professional Plumber at Work"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
            {/* Testimonial Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-700">"Excellent service! Fixed our emergency leak in no time. Highly recommended!"</p>
                  <p className="text-sm font-semibold mt-2">- Sarah Johnson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 