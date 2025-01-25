'use client'
import React from 'react';

const LandingPage = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Nature image'
    },
    {
      url: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Architecture image'
    },
    {
      url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Travel image'
    },
    {
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Food image'
    },
    {
      url: 'https://images.unsplash.com/photo-1518997554305-5eea2f04e384?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Technology image'
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-8 p-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage; 