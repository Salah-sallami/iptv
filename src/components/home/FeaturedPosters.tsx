import Link from "next/link";
import { ArrowUpRight, Play, Star, Sparkles } from "lucide-react";

export default function FeaturedPosters() {
  const posters = [
    {
      id: "p1",
      title: "ALGER",
      subtitle: "Cinéma & Action 4K",
      badge: "4K ULTRA HD",
      bgGradient: "from-emerald-950 via-slate-900 to-black",
      posterArtText: "ALGER",
      category: "Box-Office",
      rating: "9.4"
    },
    {
      id: "p2",
      title: "POET",
      subtitle: "Festival & Drame",
      badge: "CANNES / TIFF",
      bgGradient: "from-rose-950 via-red-950 to-black",
      posterArtText: "POET",
      category: "Cinéma International",
      rating: "9.1"
    },
    {
      id: "p3",
      title: "SUPER HAPPY FOREVER",
      subtitle: "Crave & VOD Exclusif",
      badge: "NOUVEAUTÉ",
      bgGradient: "from-sky-950 via-blue-950 to-black",
      posterArtText: "SUPER HAPPY",
      category: "Comédie / Drame",
      rating: "8.9"
    },
    {
      id: "p4",
      title: "MON PÈRE, MON OMBRE",
      subtitle: "Cinéma Québécois",
      badge: "QUÉBEC / VFQ",
      bgGradient: "from-amber-950 via-orange-950 to-black",
      posterArtText: "MON OMBRE",
      category: "Production Canadienne",
      rating: "9.3"
    },
    {
      id: "p5",
      title: "NHL LIVE 4K",
      subtitle: "TSN & Sportsnet 4K",
      badge: "SANS BLACKOUT",
      bgGradient: "from-blue-950 via-purple-950 to-black",
      posterArtText: "NHL 4K",
      category: "Sports Canadien",
      rating: "9.8"
    },
  ];

  return (
    <section className="mb-14">
      
      {/* Section Header matching "Films à l'affiche" from reference */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-cinema-title text-3xl sm:text-4xl text-white tracking-tight">
            Films &amp; Chaînes à l&apos;affiche
          </h2>
          <p className="text-xs text-slate-400 font-sans mt-0.5">
            Plus de 120 000 films, séries et 25 000 chaînes en direct disponibles en streaming 4K instantané.
          </p>
        </div>

        <Link
          href="/channels"
          className="text-xs font-mono font-bold text-orchid-400 hover:text-orchid-300 transition-colors flex items-center gap-1 uppercase tracking-wider"
        >
          <span>Voir tout</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Row of Posters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {posters.map((poster) => (
          <Link
            key={poster.id}
            href="/channels"
            className="poster-card p-4 flex flex-col justify-between group shadow-xl"
          >
            {/* Top Tag & Rating */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-orchid-300 border border-white/10">
                {poster.badge}
              </span>
              <span className="text-[10px] font-mono font-bold text-amber-400 flex items-center gap-0.5 bg-black/60 px-1.5 py-0.5 rounded">
                ★ {poster.rating}
              </span>
            </div>

            {/* Simulated Poster Graphic */}
            <div className={`absolute inset-0 bg-gradient-to-t ${poster.bgGradient} opacity-90 group-hover:opacity-100 transition-opacity`}>
              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                <span className="font-headline text-5xl text-white font-black tracking-widest text-center transform -rotate-12">
                  {poster.posterArtText}
                </span>
              </div>
            </div>

            {/* Bottom Title & Details */}
            <div className="z-10 pt-16 mt-auto">
              <span className="text-[10px] font-mono text-orchid-300 block mb-0.5">
                {poster.category}
              </span>
              <h3 className="font-cinema-title text-base sm:text-lg text-white group-hover:text-orchid-300 transition-colors truncate">
                {poster.title}
              </h3>
              <p className="text-[11px] text-slate-400 truncate">
                {poster.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
