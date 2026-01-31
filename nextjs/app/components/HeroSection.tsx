import React from 'react';
import { Movie } from '../data/mockData';
import Link from 'next/link';

interface HeroSectionProps {
  movie: Movie;
}

const HeroSection: React.FC<HeroSectionProps> = ({ movie }) => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.thumbnailUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold text-white md:text-6xl lg:text-7xl drop-shadow-lg">
          {movie.title}
        </h1>
        <p className="mb-6 max-w-lg text-lg text-gray-200 shadow-black drop-shadow-md">
          {movie.description}
        </p>
        
        <div className="flex items-center gap-4">
          <Link 
            href={`/watch/${movie.id}`}
            className="flex items-center gap-2 rounded bg-white px-6 py-2.5 text-lg font-bold text-black transition hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            Play
          </Link>
          <button className="flex items-center gap-2 rounded bg-gray-500/70 px-6 py-2.5 text-lg font-bold text-white transition hover:bg-gray-500/50 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
