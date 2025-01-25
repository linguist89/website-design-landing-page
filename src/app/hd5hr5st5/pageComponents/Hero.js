'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-sky-900">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        <div className="parallax absolute inset-0" data-speed="0.2">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80"
            alt="Luxury Eco-Resort Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/70 to-sky-900/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Decorative Elements */}
            <div className="parallax absolute -top-20 -left-20" data-speed="0.4">
              <div className="w-40 h-40 bg-sky-400/20 rounded-full blur-xl" />
            </div>
            <div className="parallax absolute -bottom-20 -right-20" data-speed="0.6">
              <div className="w-60 h-60 bg-sky-300/20 rounded-full blur-xl" />
            </div>

            {/* Content */}
            <div className="relative text-center text-white space-y-8">
              <h1 className="text-5xl md:text-7xl font-light leading-tight">
                <span className="block parallax" data-speed="0.3">Discover</span>
                <span className="block parallax" data-speed="0.4">Paradise</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto parallax" data-speed="0.5">
                Experience luxury eco-resorts nestled in nature's most pristine locations. Your perfect getaway awaits.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 parallax" data-speed="0.6">
                <button className="px-8 py-4 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition-all transform hover:scale-105">
                  Explore Destinations
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all transform hover:scale-105">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-sm uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Interactive Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            <div className="parallax" data-speed="0.7">
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all cursor-pointer">
                <div className="font-light text-3xl">25+</div>
                <div className="text-sm text-sky-200">Locations</div>
              </div>
            </div>
            <div className="parallax" data-speed="0.8">
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all cursor-pointer">
                <div className="font-light text-3xl">100%</div>
                <div className="text-sm text-sky-200">Eco-Friendly</div>
              </div>
            </div>
            <div className="parallax" data-speed="0.9">
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all cursor-pointer">
                <div className="font-light text-3xl">5★</div>
                <div className="text-sm text-sky-200">Rating</div>
              </div>
            </div>
            <div className="parallax" data-speed="1">
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all cursor-pointer">
                <div className="font-light text-3xl">10k+</div>
                <div className="text-sm text-sky-200">Happy Guests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 