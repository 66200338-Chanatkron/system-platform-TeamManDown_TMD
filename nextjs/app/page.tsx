import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovieRow from './components/MovieRow';
import { featuredMovie, movies } from './data/mockData';

export default function Home() {
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Navbar />
        
        {/* Hero Section */}
        <div className="-ml-4 lg:-ml-16 mb-10">
           <HeroSection movie={featuredMovie} />
        </div>

        {/* Movie Rows */}
        <section className="space-y-8 md:space-y-16 pl-4 z-20 relative">
            <MovieRow title="Trending Now" movies={movies} />
            <MovieRow title="Top Rated" movies={[...movies].reverse()} />
            <MovieRow title="Action Movies" movies={movies} />
            <MovieRow title="Sci-Fi Thrillers" movies={[movies[0], movies[2], movies[4]]} />
        </section>
      </main>
    </div>
  );
}
