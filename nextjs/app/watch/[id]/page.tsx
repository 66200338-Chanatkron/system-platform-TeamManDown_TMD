import React from 'react';
import { getMovieById } from '../../data/mockData';
import VideoPlayer from '../../components/VideoPlayer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface WatchPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WatchPage({ params }: WatchPageProps) {
  // Await the params promise in Next.js 15+ convention (if applicable, but safe here)
  const { id } = await params;
  const movie = getMovieById(id as string);

  if (!movie) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation / Back Button */}
      <nav className="fixed w-full p-4 z-50 flex items-center gap-8 bg-black/50 backdrop-blur-md">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 cursor-pointer hover:text-gray-300 transition"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <span className="font-bold text-xl md:text-2xl">
          Watching: <span className="font-normal text-gray-300">{movie.title}</span>
        </span>
      </nav>

      {/* Video Player Container */}
      <div className="flex items-center justify-center h-screen w-full px-4 md:px-20 pt-20 pb-10">
        <div className="w-full max-w-7xl">
           <VideoPlayer embedUrl={movie.videoUrl} />
           
           <div className="mt-8 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{movie.year}</span>
                <span className="border border-gray-600 px-2 py-0.5 rounded text-xs">HD</span>
                <span>{movie.duration}</span>
              </div>
              <p className="text-lg text-gray-300 max-w-4xl">{movie.description}</p>
           </div>
        </div>
      </div>
    </div>
  );
}
