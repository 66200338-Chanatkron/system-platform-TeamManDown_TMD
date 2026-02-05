export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  year: number;
  genre: string[];
}

export const featuredMovie: Movie = {
  id: "featured-1",
  title: "Inception",
  description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  // ใช้รูปจาก TMDB เนื่องจาก Wikimedia ไม่มีภาพแนวนอน (Landscape) สำหรับ Banner
  thumbnailUrl: "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
  // เปลี่ยนเป็น YouTube Embed ของจริง
  videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0", 
  duration: "2h 28m",
  year: 2010,
  genre: ["Sci-Fi", "Action", "Thriller"],
};

export const movies: Movie[] = [
  {
    id: "1",
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E", // YouTube Embed
    duration: "2h 49m",
    year: 2014,
    genre: ["Sci-Fi", "Drama", "Adventure"],
  },
  {
    id: "2",
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg", // รูปใหม่
    videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY", // YouTube Embed
    duration: "2h 32m",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
  },
  {
    id: "3",
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg", // รูปใหม่
    videoUrl: "https://www.youtube.com/embed/Way9Dexny3w", // YouTube Embed
    duration: "2h 46m",
    year: 2024,
    genre: ["Sci-Fi", "Adventure"],
  },
  {
    id: "4",
    title: "Oppenheimer",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    videoUrl: "https://www.youtube.com/embed/uYPbbksJxIg", // YouTube Embed
    duration: "3h",
    year: 2023,
    genre: ["Biography", "Drama", "History"],
  },
  {
    id: "5",
    title: "Avatar: The Way of Water",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
    videoUrl: "https://www.youtube.com/embed/d9MyqFCDajM", // YouTube Embed
    duration: "3h 12m",
    year: 2022,
    genre: ["Sci-Fi", "Adventure", "Action"],
  },
];

export const getMovieById = (id: string): Movie | undefined => {
  if (id === featuredMovie.id) return featuredMovie;
  return movies.find((m) => m.id === id);
};