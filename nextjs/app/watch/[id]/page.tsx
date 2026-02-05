import React from 'react';
import { getMovieById } from '../../data/mockData';

import Link from 'next/link';
import { notFound } from 'next/navigation';

interface WatchPageProps {
  params: Promise<{
    id: string;
  }>;
}
// components/VideoPlayer.tsx
const VideoPlayer = ({ embedUrl }: { embedUrl: string }) => {
  return (
    <div className="w-full h-full">
      <iframe
        src={embedUrl}
        className="w-full h-full border-none"
        allowFullScreen
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};
export default async function WatchPage({ params }: WatchPageProps) {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#010511] text-white">
      {/* Top Navigation: ปรับให้กระทัดรัดขึ้นบน Mobile */}
      <nav className="fixed top-0 left-0 w-full p-4 z-50 flex items-center gap-4 bg-gradient-to-b from-black/90 to-transparent transition-opacity hover:opacity-100 opacity-80 md:opacity-100">
        <Link href="/">
          <button className="p-2 hover:bg-white/10 rounded-full transition group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
        <div className="flex flex-col md:flex-row md:items-baseline md:gap-2 overflow-hidden">
          <span className="text-sm md:text-xl font-bold text-red-600 uppercase tracking-wider">Watching</span>
          <span className="text-base md:text-2xl font-medium text-gray-200 truncate">{movie.title}</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex flex-col pt-16 md:pt-20">
        {/* Video Player Container: 
            - บน Mobile: กว้างเต็มจอ (w-full) ไม่มี padding
            - บน Desktop: มี max-w และ padding สวยงาม
        */}
        <div className="w-full bg-black shadow-2xl">
          <div className="max-w-7xl mx-auto aspect-video">
             <VideoPlayer embedUrl={movie.videoUrl} />
          </div>
        </div>
        
        {/* Movie Info Section */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-8 md:py-12">
           <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-2xl md:text-5xl font-black">{movie.title}</h1>
                
                <div className="flex items-center gap-4 text-sm md:text-base text-gray-400">
                  <span className="text-green-500 font-semibold">{movie.year}</span>
                  <span className="border border-gray-700 px-2 py-0.5 rounded-sm text-[10px] md:text-xs text-white">4K ULTRA HD</span>
                  <span>{movie.duration}</span>
                </div>
              </div>

              {/* Description box */}
              <div className="p-4 md:p-0 bg-white/5 md:bg-transparent rounded-lg border border-white/10 md:border-none">
                <p className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-4xl">
                  {movie.description}
                </p>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}