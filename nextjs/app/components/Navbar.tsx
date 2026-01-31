'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-black/90' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 py-4 md:px-12">
        <Link href="/" className="text-2xl font-bold text-red-600 md:text-3xl">
          DooDram
        </Link>

        <div className="flex items-center gap-4 text-white">
          <Link href="/" className="text-sm font-medium hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-gray-300">
            TV Shows
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-gray-300">
            Movies
          </Link>
          
          <div className="ml-4 dropdown">
             <button
                className="flex items-center gap-2 cursor-pointer"
                onClick={async () => {
                   await fetch('/api/logout', { method: 'POST' });
                   window.location.href = '/login'; 
                }}
             >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Profile" 
                className="w-8 h-8 rounded"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
