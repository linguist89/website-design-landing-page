'use client'
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Video Section */}
          <div className="relative aspect-video mb-12 rounded-xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Master Creative Design
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                  Learn from industry experts and build your creative portfolio with hands-on projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors">
                    Start Learning
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-gray-800">
              <div className="w-12 h-12 mx-auto mb-4 text-green-500">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-400">Engage with real-world projects and get hands-on experience</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800">
              <div className="w-12 h-12 mx-auto mb-4 text-green-500">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-gray-400">Learn directly from industry professionals</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800">
              <div className="w-12 h-12 mx-auto mb-4 text-green-500">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Courses</h3>
              <p className="text-gray-400">Earn industry-recognized certificates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 