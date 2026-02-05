'use client';

import React from 'react';
import { Movie } from '../data/mockData';
import Link from 'next/link';

interface HeroSectionProps {
  movie: Movie;
}

const HeroSection: React.FC<HeroSectionProps> = ({ movie }) => {
  return (
    // เปลี่ยนจาก h-fixed เป็น min-h เพื่อรองรับเนื้อหาที่อาจยาวขึ้นบนจอแคบ
    <div className="relative isolate flex flex-col justify-end min-h-[60vh] md:min-h-[75vh] lg:h-[95vh] pb-10 md:pb-16 lg:pb-24">
      
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <img 
          src={movie.thumbnailUrl} 
          alt={movie.title}
          className="h-full w-full object-cover object-top md:object-center"
        />
        {/* Gradients: ปรับความเข้มให้ดู Cinematic มากขึ้น */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#010511] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#010511]/80 via-transparent to-transparent md:from-[#010511]/60" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col space-y-4 px-4 md:px-12 lg:px-16">
        {/* Title: ใช้ Dynamic text size */}
        <h1 className="text-3xl font-black md:text-5xl lg:text-7xl drop-shadow-xl tracking-tighter uppercase max-w-[90%] md:max-w-[70%]">
          {movie.title}
        </h1>
        
        {/* Description: จำกัดบรรทัดบนมือถือเพื่อไม่ให้บัง UI ส่วนอื่น */}
        <p className="max-w-xs text-sm text-gray-200 line-clamp-3 md:line-clamp-none md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl drop-shadow-md">
          {movie.description}
        </p>
        
        {/* Buttons Container */}
        <div className="flex items-center gap-3 pt-2">
          <Link 
            href={`/watch/${movie.id}`}
            className="flex items-center gap-x-2 rounded bg-white px-6 py-2 text-sm font-bold text-black transition hover:bg-[#e6e6e6] md:px-10 md:py-3 md:text-xl active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-8 md:h-8">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            Play
          </Link>

          <button className="flex items-center gap-x-2 rounded bg-gray-500/50 backdrop-blur-md px-6 py-2 text-sm font-bold text-white transition hover:bg-gray-500/30 md:px-10 md:py-3 md:text-xl active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;