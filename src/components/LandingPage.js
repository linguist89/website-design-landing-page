'use client'
import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  const pages = [
    {
      url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Nature image',
      title: 'hd1hr1st1',
      path: '/hd1hr1st1'
    },
    {
      url: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Architecture image',
      title: 'hd2hr2st2',
      path: '/hd2hr2st2'
    },
    {
      url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Travel image',
      title: 'hd3hr3st3',
      path: '/hd3hr3st3'
    },
    {
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Food image',
      title: 'hd4hr4st4',
      path: '/hd4hr4st4'
    },
    {
      url: 'https://images.unsplash.com/photo-1518997554305-5eea2f04e384?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Technology image',
      title: 'hd5hr5st5',
      path: '/hd5hr5st5'
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-8 p-4">
        {pages.map((page, index) => (
          <Link 
            href={page.path}
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer"
          >
            <img
              src={page.url}
              alt={page.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-2xl font-bold">{page.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage; 