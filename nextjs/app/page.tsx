import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovieRow from './components/MovieRow';
import { featuredMovie, movies } from './data/mockData';

export default function Home() {
  return (
    // overflow-x-hidden สำคัญมากเพื่อป้องกันบัค Card ทะลุขอบในมือถือ
    <div className="relative min-h-screen bg-[#010511] overflow-x-hidden">
      <Navbar />
      
      <main className="relative">
        {/* Hero Section: ขยายพื้นที่ด้านล่างเพิ่มเล็กน้อยเพื่อให้ MovieRow แรกดูไม่เบียด */}
        <section className="relative mb-6 md:mb-10 lg:mb-16">
          <HeroSection movie={featuredMovie} />
        </section>

        {/* Movie Rows Container:
            - จัดระยะ space-y ให้ดูมีมิติมากขึ้น
            - คุม px ให้ตรงกับ Navbar เพื่อความ Alignment
        */}
        <div className="flex flex-col space-y-10 md:space-y-16 lg:space-y-24 px-4 md:px-12 pb-24">
          <MovieRow title="Trending Now" movies={movies} />
          <MovieRow title="Top Rated" movies={[...movies].reverse()} />
          <MovieRow title="Action Movies" movies={movies} />
          <MovieRow title="Sci-Fi Thrillers" movies={[movies[0], movies[2], movies[4]]} />
        </div>
      </main>

      {/* Footer: ปรับสีให้จางลงเพื่อให้เข้ากับโทน Cinematic */}
      <footer className="py-12 text-center text-gray-600 text-xs border-t border-white/5 mx-12">
        <p>© 2026 DooDram Project - All Rights Reserved.</p>
        <p className="mt-2 opacity-50">Developed for TeamManDown (TMD) Platform</p>
      </footer>
    </div>
  );
}