import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Play } from "lucide-react";
import { SPORTS_LEAGUES } from "@/data/sports-events";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SportsSection() {
  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-50 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="badge-index-box text-red-600 border-red-200 bg-red-50 font-mono text-sm">
                05
              </div>
              <span className="text-red-600 font-bold text-sm">🏒</span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
                [ LIVE 4K SPORTS &bull; ALL PPVS INCLUDED ]
              </span>
            </div>

            <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-slate-900">
              ALL SPORTS WITHOUT BLACKOUTS
            </h2>
          </div>

          <Link
            href="/sports"
            className="btn-pill-outline self-start lg:self-auto group"
          >
            <span>Explore Sports Hub</span>
            <div className="btn-circle-icon-dark">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </ScrollReveal>

        {/* Sports Cards Grid with Rich Photography Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPORTS_LEAGUES.map((league, index) => (
            <ScrollReveal
              key={league.id}
              delay={index * 90}
              variant="scale"
            >
              <div className="card-light p-6 sm:p-7 flex flex-col justify-between group hover:border-red-300 transition-all bg-white h-full shadow-sm hover:shadow-md rounded-3xl">
                <div>
                  
                  {/* High-Definition Sports Action Image Banner */}
                  <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 shadow-inner">
                    <img
                      src={league.imageUrl}
                      alt={league.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Dark gradient shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                    {/* Top Badges over image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="text-sm">{league.iconText}</span>
                        <span>{league.category}</span>
                      </span>

                      <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-full bg-red-600 text-white shadow-xs">
                        4K 60FPS
                      </span>
                    </div>

                    {/* Bottom Pill Badge over image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-slate-900 border border-slate-200 uppercase tracking-wider font-mono shadow-xs backdrop-blur-xs">
                        {league.badge}
                      </span>

                      <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Play className="w-3 h-3 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline text-3xl text-slate-900 tracking-wide mb-2 group-hover:text-red-600 transition-colors">
                    {league.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6">
                    {league.description}
                  </p>

                  {/* Channels Tags */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Included Channels:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {league.channels.map((ch, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 font-medium"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {league.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
