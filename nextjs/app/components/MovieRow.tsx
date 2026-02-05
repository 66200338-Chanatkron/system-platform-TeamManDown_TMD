'use client';

import React, { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../data/mockData';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth * 0.8
          : scrollLeft + clientWidth * 0.8;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col space-y-2 md:space-y-4 my-6 md:my-10">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl px-4 md:px-12">
        {title}
      </h2>

      {/* 🟢 แก้จุดที่ 1: ตั้งชื่อกลุ่มเป็น "group/row" */}
      <div className="relative group/row">
        
        {/* Left Chevron */}
        <button
          // 🟢 แก้จุดที่ 2: ใช้ group-hover/row เพื่อให้ตอบสนองเฉพาะตอนชี้ที่แถว
          className={`absolute top-0 bottom-0 left-0 z-40 m-auto h-full w-12 items-center justify-center bg-black/20 opacity-0 transition group-hover/row:opacity-100 hover:bg-black/40 hidden md:flex ${!isMoved && 'hidden'}`}
          onClick={() => handleClick('left')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="h-9 w-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div
          className="flex items-center space-x-2 md:space-x-4 overflow-x-scroll scrollbar-hide px-4 md:px-12 scroll-smooth snap-x snap-mandatory"
          ref={rowRef}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="snap-start flex-shrink-0">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* Right Chevron */}
        <button
          // 🟢 แก้จุดที่ 3: ใช้ group-hover/row เช่นกัน
          className="absolute top-0 bottom-0 right-0 z-40 m-auto h-full w-12 items-center justify-center bg-black/20 opacity-0 transition group-hover/row:opacity-100 hover:bg-black/40 hidden md:flex"
          onClick={() => handleClick('right')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="h-9 w-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieRow;