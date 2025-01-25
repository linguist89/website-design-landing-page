'use client'
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Digital Presence Today
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Create stunning landing pages in minutes with our intuitive platform. 
            No coding required.
          </p>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto bg-red-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-600 transition-colors">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md text-lg font-semibold hover:border-red-500 hover:text-red-500 transition-colors">
              Watch Demo
            </button>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Replace these with actual company logos */}
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 