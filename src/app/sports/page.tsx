import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SPORTS_LEAGUES } from "@/data/sports-events";

export default function SportsPage() {
  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>4K 60FPS LIVE SPORTS &bull; ALL PPVS INCLUDED</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl tracking-tight leading-none text-slate-900">
            CANADIAN &amp; GLOBAL LIVE SPORTS
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-sans">
            Never miss a goal, touchdown, knockout, or race. Watch NHL Center Ice, NFL Sunday Ticket, NBA Pass, and UFC PPVs with zero regional blackouts.
          </p>
        </div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card-light p-6 border border-slate-200 flex items-center gap-4 bg-white shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-xl shrink-0">
              🏒
            </div>
            <div>
              <h3 className="font-headline text-2xl text-slate-900">NHL HOME &amp; AWAY FEEDS</h3>
              <p className="text-xs text-slate-600 font-sans">TSN, Sportsnet, RDS, TVA Sports, and NHL Center Ice.</p>
            </div>
          </div>

          <div className="card-light p-6 border border-slate-200 flex items-center gap-4 bg-white shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl shrink-0">
              🥊
            </div>
            <div>
              <h3 className="font-headline text-2xl text-slate-900">ALL PPVS INCLUDED FREE</h3>
              <p className="text-xs text-slate-600 font-sans">All numbered UFC cards, boxing, and WWE events.</p>
            </div>
          </div>

          <div className="card-light p-6 border border-slate-200 flex items-center gap-4 bg-white shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl shrink-0">
              📺
            </div>
            <div>
              <h3 className="font-headline text-2xl text-slate-900">MULTI-SCREEN 60FPS</h3>
              <p className="text-xs text-slate-600 font-sans">Watch up to 4 live games simultaneously with zero lag.</p>
            </div>
          </div>
        </div>

        {/* Leagues */}
        <div className="space-y-6 mb-16">
          {SPORTS_LEAGUES.map((league) => (
            <div
              key={league.id}
              className="card-light p-8 border border-slate-200 hover:border-red-300 transition-all bg-white"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{league.iconText}</span>
                    <h3 className="font-headline text-3xl text-slate-900">{league.name}</h3>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 uppercase">
                      {league.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {league.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {league.channels.map((ch, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 lg:border-l lg:border-slate-100 lg:pl-8 shrink-0 w-full lg:w-72">
                  {league.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 text-center max-w-4xl mx-auto space-y-6 bg-slate-50">
          <h3 className="font-headline text-4xl text-slate-900">
            READY TO CATCH TONIGHT&apos;S GAME IN 4K?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-sans">
            Get instant activation in 5 minutes and stream on your TV right away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="btn-pill-red text-xs group"
            >
              <span>Get Sports Plan &bull; $19 CAD</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>
            <Link
              href="/channels"
              className="btn-pill-outline text-xs group"
            >
              <span>Browse 25k+ Channels</span>
              <div className="btn-circle-icon-dark">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
