'use client'
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        {/* Main Product Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Solutions for Your Business
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our comprehensive suite of tools designed to streamline your operations and boost productivity.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Pricing
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Easy Integration',
              description: 'Seamlessly integrate with your existing tools and workflows',
              icon: '🔄'
            },
            {
              title: 'Real-time Analytics',
              description: 'Get instant insights with our powerful analytics dashboard',
              icon: '📊'
            },
            {
              title: '24/7 Support',
              description: 'Our dedicated team is always here to help you succeed',
              icon: '🎯'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-blue-100">
              {/* Placeholder for testimonial avatar */}
              <div className="absolute inset-0 flex items-center justify-center text-blue-500 text-4xl">
                👤
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600 text-lg italic mb-4">
                "This solution has transformed how we operate. The integration was smooth, and the results were immediate."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-8">Choose the plan that works best for your business</p>
          <div className="inline-flex items-center bg-blue-50 rounded-lg p-2">
            <span className="px-4 py-2 bg-white rounded-md shadow-sm text-blue-600 font-medium">Monthly</span>
            <span className="px-4 py-2 text-gray-600">Annual (Save 20%)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 