'use client'
import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  const pages = [
    {
      path: '/hd1hr1st1',
      headerUse: 'Corporate websites and portfolios - Left logo, right navigation',
      heroUse: 'Lead generation with clear call-to-action',
      styleUse: 'Tech startups and modern brands - Bold red-orange palette'
    },
    {
      path: '/hd2hr2st2',
      headerUse: 'E-commerce and retail - Centered navigation',
      heroUse: 'Product showcase with visual emphasis',
      styleUse: 'Luxury and premium brands - Elegant dark theme'
    },
    {
      path: '/hd3hr3st3',
      headerUse: 'Creative agencies - Dynamic navigation',
      heroUse: 'Brand storytelling with rich media',
      styleUse: 'Creative industries - Vibrant color scheme'
    },
    {
      path: '/hd4hr4st4',
      headerUse: 'SaaS platforms - Feature-rich navigation',
      heroUse: 'Product features showcase',
      styleUse: 'Technology sector - Professional blue tones'
    },
    {
      path: '/hd5hr5st5',
      headerUse: 'Service businesses - Streamlined menu',
      heroUse: 'Service showcase with testimonials',
      styleUse: 'Professional services - Clean minimal design'
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-8 p-4">
        {pages.map((page, index) => (
          <div key={index} className="flex flex-col gap-4">
            <Link 
              href={page.path}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer"
            >
              <iframe
                src={page.path}
                className="w-full h-full border-none transform scale-[0.25] origin-top-left"
                style={{
                  width: '400%',
                  height: '400%',
                  pointerEvents: 'none'
                }}
              />
            </Link>
            <div className="space-y-2 px-2">
              <p className="text-sm text-gray-800"><span className="font-semibold">Header:</span> {page.headerUse}</p>
              <p className="text-sm text-gray-800"><span className="font-semibold">Hero:</span> {page.heroUse}</p>
              <p className="text-sm text-gray-800"><span className="font-semibold">Style:</span> {page.styleUse}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage; 