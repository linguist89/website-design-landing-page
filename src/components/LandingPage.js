'use client'
import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  const pages = [
    {
      title: 'hd1hr1st1',
      path: '/hd1hr1st1'
    },
    {
      title: 'hd2hr2st2',
      path: '/hd2hr2st2'
    },
    {
      title: 'hd3hr3st3',
      path: '/hd3hr3st3'
    },
    {
      title: 'hd4hr4st4',
      path: '/hd4hr4st4'
    },
    {
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
            <iframe
              src={page.path}
              title={page.title}
              className="w-full h-full border-none transform scale-[0.25] origin-top-left"
              style={{
                width: '400%',
                height: '400%',
                pointerEvents: 'none'
              }}
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