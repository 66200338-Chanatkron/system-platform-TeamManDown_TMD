'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-12 md:py-4">
        
        {/* Left Side: Logo & Desktop Links */}
        <div className="flex items-center gap-4 md:gap-10">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white hover:text-red-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <Link href="/" className="text-2xl font-black tracking-tighter text-red-600 md:text-3xl hover:scale-105 transition-transform">
            DOODRAM
          </Link>

          <div className="hidden md:flex items-center gap-6 text-gray-200">
            <Link href="/" className="text-sm font-medium hover:text-white transition-colors">Home</Link>
            <Link href="#" className="text-sm font-medium hover:text-white transition-colors">TV Shows</Link>
            <Link href="#" className="text-sm font-medium hover:text-white transition-colors">Movies</Link>
            <Link href="#" className="text-sm font-medium hover:text-white transition-colors">New & Popular</Link>
          </div>
        </div>

        {/* Right Side: Profile & Utils */}
        <div className="flex items-center gap-5 text-white">
          {/* Search Icon (Optional but recommended) */}
          <button className="hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          <div className="group relative">
            <button className="flex items-center gap-2 overflow-hidden rounded shadow-sm border border-transparent group-hover:border-white transition-all">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Profile" 
                className="w-8 h-8 md:w-9 md:h-9"
              />
            </button>
            
            {/* Simple Hover Dropdown for Logout */}
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block">
              <div className="bg-black/90 border border-gray-700 min-w-[120px] py-2 rounded-md shadow-xl">
                <button 
                  onClick={async () => {
                    await fetch('/api/logout', { method: 'POST' });
                    window.location.href = '/login'; 
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsMenuOpen(false)} />
          
          {/* Sidebar Content */}
          <div className="absolute left-0 top-0 h-screen w-64 bg-black border-r border-gray-800 p-6 flex flex-col gap-6 animate-in slide-in-from-left duration-300">
            <div className="text-2xl font-bold text-red-600 mb-4">DOODRAM</div>
            <Link href="/" className="text-lg font-medium hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#" className="text-lg font-medium hover:text-red-500" onClick={() => setIsMenuOpen(false)}>TV Shows</Link>
            <Link href="#" className="text-lg font-medium hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Movies</Link>
            <div className="mt-auto pt-6 border-t border-gray-800 text-sm text-gray-500">
              © 2026 DooDram Project
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;