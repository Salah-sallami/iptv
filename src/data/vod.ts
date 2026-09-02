export interface VodItem {
  id: string;
  title: string;
  category: "movie" | "series" | "quebec" | "blockbuster";
  year: number;
  rating: string;
  quality: "4K UHD" | "4K HDR" | "FHD 60FPS";
  duration: string;
  genres: string[];
  posterUrl: string;
  backdropUrl: string;
  synopsis: string;
  audioTracks: string[];
  subtitles: string[];
}

export const RECENT_VOD_DATA: VodItem[] = [
  {
    id: "vod-1",
    title: "Dune: Part Two",
    category: "blockbuster",
    year: 2024,
    rating: "8.6",
    quality: "4K HDR",
    duration: "2h 46m",
    genres: ["Sci-Fi", "Adventure", "Action"],
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    audioTracks: ["English Dolby Atmos", "Français Canadien 5.1"],
    subtitles: ["English", "Français", "Español"]
  },
  {
    id: "vod-2",
    title: "Deadpool & Wolverine",
    category: "blockbuster",
    year: 2024,
    rating: "7.8",
    quality: "4K UHD",
    duration: "2h 08m",
    genres: ["Action", "Comedy", "Sci-Fi"],
    posterUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    synopsis: "Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool to defeat a common enemy.",
    audioTracks: ["English 5.1", "Français VFQ 5.1"],
    subtitles: ["English CC", "Français"]
  },
  {
    id: "vod-3",
    title: "House of the Dragon",
    category: "series",
    year: 2024,
    rating: "8.5",
    quality: "4K HDR",
    duration: "Season 2",
    genres: ["Drama", "Action", "Fantasy"],
    posterUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    synopsis: "The Targaryen civil war begins as King Aegon II and Queen Rhaenyra fight for the Iron Throne in Westeros.",
    audioTracks: ["English Dolby Atmos", "Français 5.1"],
    subtitles: ["English", "Français", "Multi-Language"]
  },
  {
    id: "vod-4",
    title: "Gladiator II",
    category: "blockbuster",
    year: 2024,
    rating: "7.9",
    quality: "4K UHD",
    duration: "2h 28m",
    genres: ["Action", "Drama", "History"],
    posterUrl: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    synopsis: "Years after witnessing the death of Maximus, Lucius must enter the Colosseum after the emperors of Rome conquer his home.",
    audioTracks: ["English Dolby Atmos", "Français VFQ"],
    subtitles: ["English", "Français"]
  },
  {
    id: "vod-5",
    title: "Shōgun",
    category: "series",
    year: 2024,
    rating: "8.7",
    quality: "4K HDR",
    duration: "10 Episodes",
    genres: ["Drama", "History", "Adventure"],
    posterUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop",
    synopsis: "When a mysterious European ship is found maroonded in a Japanese fishing village, Lord Toranaga discovers secrets that could tip the scales of power.",
    audioTracks: ["Japanese / English 5.1", "Français Dub"],
    subtitles: ["English CC", "Français"]
  },
  {
    id: "vod-6",
    title: "The Penguin",
    category: "series",
    year: 2024,
    rating: "8.8",
    quality: "4K UHD",
    duration: "8 Episodes",
    genres: ["Crime", "Drama", "Thriller"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
    synopsis: "Following the events of The Batman, Oz Cobb seeks to seize the reins of the criminal underworld in Gotham City.",
    audioTracks: ["English Dolby Atmos", "Français 5.1"],
    subtitles: ["English CC", "Français"]
  },
  {
    id: "vod-7",
    title: "Stranger Things 5",
    category: "series",
    year: 2025,
    rating: "8.7",
    quality: "4K HDR",
    duration: "Season 5",
    genres: ["Sci-Fi", "Horror", "Drama"],
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    synopsis: "The final battle for Hawkins begins as Eleven and her friends face the ultimate power of the Upside Down.",
    audioTracks: ["English Dolby Atmos", "Français 5.1"],
    subtitles: ["English", "Français", "Español"]
  },
  {
    id: "vod-8",
    title: "The Last of Us",
    category: "series",
    year: 2024,
    rating: "8.8",
    quality: "4K HDR",
    duration: "Season 2",
    genres: ["Drama", "Action", "Adventure"],
    posterUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    synopsis: "After a deadly pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    audioTracks: ["English 5.1", "Français 5.1"],
    subtitles: ["English CC", "Français"]
  },
  {
    id: "vod-9",
    title: "Oppenheimer",
    category: "blockbuster",
    year: 2023,
    rating: "8.9",
    quality: "4K UHD",
    duration: "3h 00m",
    genres: ["Biography", "Drama", "History"],
    posterUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    audioTracks: ["English Dolby Atmos", "Français VFQ"],
    subtitles: ["English", "Français"]
  },
  {
    id: "vod-10",
    title: "Mon Père, Mon Ombre",
    category: "quebec",
    year: 2024,
    rating: "8.4",
    quality: "4K UHD",
    duration: "1h 54m",
    genres: ["Drame", "Québec", "Cinema"],
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    synopsis: "Un regard intime et poignant sur les liens filiaux et la résilience au cœur des grands espaces québécois.",
    audioTracks: ["Français Québécois (VFQ 5.1)"],
    subtitles: ["Français CC", "English"]
  },
  {
    id: "vod-11",
    title: "Yellowstone",
    category: "series",
    year: 2024,
    rating: "8.7",
    quality: "4K UHD",
    duration: "Season 5 Part 2",
    genres: ["Drama", "Western"],
    posterUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    synopsis: "A ranching family in Montana faces off against others encroaching on their land in the grand finale of Yellowstone.",
    audioTracks: ["English 5.1", "Français 5.1"],
    subtitles: ["English", "Français"]
  },
  {
    id: "vod-12",
    title: "Inside Out 2",
    category: "blockbuster",
    year: 2024,
    rating: "7.7",
    quality: "4K HDR",
    duration: "1h 36m",
    genres: ["Animation", "Family", "Adventure"],
    posterUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    synopsis: "Follow Riley in her teenage years as new emotions like Anxiety and Envy move into headquarters.",
    audioTracks: ["English 5.1", "Français Canadien 5.1"],
    subtitles: ["English", "Français", "Español"]
  }
];
