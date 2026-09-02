import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Tv, 
  Radio, 
  CheckCircle2, 
  Flame,
  Plus
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-100/60 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-blue-100/50 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Technical decorative markers */}
        <div className="flex items-center justify-between text-slate-500 text-xs font-mono mb-8 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="badge-index-box text-slate-900 border-slate-300 bg-white shadow-xs">
              01
            </div>
            <span className="hidden sm:inline tracking-widest text-[11px] text-slate-600 font-bold">
              [ CANADIAN 4K STREAMING INFRASTRUCTURE ]
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-red-600 font-bold flex items-center gap-1">
              <Plus className="w-3 h-3" />
              <span>INSTANT 5-MIN ACTIVATION</span>
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-blue-600 font-bold">
              ANTI-FREEZE 9.8™ 4K TECH
            </span>
          </div>
        </div>

        {/* Main Grid: Left Typography + Right 4K Broadcast Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top tiny badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span>STREAMORA IPTV &bull; PREMIER 4K STREAMING 2026</span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="font-headline text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.92] text-slate-900">
              STREAMING TV, <br />
              <span className="text-red-600">25,000+ CHANNELS</span> <br />
              <span className="text-blue-600">WITHOUT FREEZING</span>
            </h1>

           {/* Micro proof indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-600 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-bold">Instant Activation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-bold">Premium Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-bold">Reliable Streaming</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans">
              Enjoy live sports (NHL, NFL, UFC PPVs), news, movies, and shows from Canada, the US, UK, and worldwide in 4K UHD. Over 120,000+ VOD titles, anti-freeze servers, 24/7 support, and no long-term contracts.
            </p>

            {/* Signature Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/iptv-plans"
                className="btn-pill-red group"
              >
                <span>Choose Your Plan</span>
                <div className="btn-circle-icon">
                  <ArrowRight className="w-4 h-4 text-red-600" />
                </div>
              </Link>

              <Link
                href="/iptv-setup"
                className="btn-pill-outline group"
              >
                <span>Setup Guides</span>
                <div className="btn-circle-icon-dark">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>

          </div>

          {/* Right Column: 4K Broadcast Showcase */}
       

        </div>

      </div>

    </section>
  );
}
