'use client';

import React from 'react';
import Link from 'next/link';
import { Movie } from '../data/mockData';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    // 🟢 1. เปลี่ยนจาก group เป็น "group/card" (ตั้งชื่อกลุ่มให้ชัดเจน)
    <div className="group/card relative cursor-pointer transition-all duration-300 ease-out 
                    min-w-[160px] h-[90px] 
                    md:min-w-[280px] md:h-[158px] 
                    md:hover:scale-110 md:hover:z-50 md:hover:shadow-2xl">
      <Link href={`/watch/${movie.id}`} className="block w-full h-full">
        
        {/* รูปภาพหนัง */}
        <div className="relative w-full h-full overflow-hidden rounded-md shadow-md border border-white/5">
          <img
            src={movie.thumbnailUrl}
            // 🟢 2. เปลี่ยนเป็น "group-hover/card" (เพื่อให้ขยายเฉพาะตอนชี้การ์ดนี้)
            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
            alt={movie.title}
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-2 opacity-0 transition-opacity duration-300 
                          group-hover/card:opacity-100 
                          bg-gradient-to-t from-black/80 via-black/20 to-transparent">
             <div className="flex items-center justify-center mb-auto pt-4">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </div>
             </div>
             
             <div className="space-y-1">
                <p className="text-[10px] md:text-sm font-bold text-white truncate">{movie.title}</p>
                <div className="flex items-center gap-2 text-[8px] md:text-[10px] text-gray-300">
                   <span className="text-green-500">{movie.year}</span>
                   <span className="border border-gray-500 px-1 rounded-sm">HD</span>
                   <span>{movie.duration}</span>
                </div>
             </div>
          </div>
        </div>

        {/* Mobile Title */}
        <p className="mt-2 text-xs font-medium text-gray-400 md:hidden truncate w-full px-1">
          {movie.title}
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;