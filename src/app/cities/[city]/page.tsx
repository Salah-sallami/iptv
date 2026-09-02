import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { CANADIAN_CITIES } from "@/data/cities";
import { ArrowRight, ArrowUpRight, Activity, Wifi, Trophy } from "lucide-react";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";

export function generateStaticParams() {
  return CANADIAN_CITIES.map((c) => ({
    city: c.slug,
  }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = CANADIAN_CITIES.find((c) => c.slug === params.city);
  if (!city) return {};

  return {
    title: `Best IPTV ${city.name}, ${city.provinceCode} (2026) | 4K UHD & Anti-Freeze`,
    description: city.metaDescription,
    alternates: {
      canonical: `/cities/${city.slug}`,
    },
  };
}

export default function CityLandingPage({ params }: { params: { city: string } }) {
  const city = CANADIAN_CITIES.find((c) => c.slug === params.city);

  if (!city) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* City Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>LOCAL CDN HUB &bull; {city.name}, {city.province}</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-slate-900">
            BEST IPTV <span className="text-red-600">{city.name.toUpperCase()}</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            {city.heroSnippet} Enjoy 25,000+ live channels, 120,000+ VOD titles, local news, and live sports in 4K UHD with instant 5-minute activation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/pricing"
              className="btn-pill-red text-xs group"
            >
              <span>View {city.name} Plans (CAD)</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>

            <Link
              href="/channels"
              className="btn-pill-outline text-xs group"
            >
              <span>Explore 25k+ Channels</span>
              <div className="btn-circle-icon-dark">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Localized Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 font-sans">
          <div className="card-light p-6 border border-slate-200 space-y-3 bg-slate-50 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-600 font-bold">
              <span>LOCAL LATENCY</span>
              <Activity className="w-4 h-4" />
            </div>
            <h3 className="font-headline text-3xl text-slate-900">{city.avgLatency} RESPONSE</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct edge node streaming cache minimizes hops and eliminates buffering in {city.name}.
            </p>
          </div>

          <div className="card-light p-6 border border-slate-200 space-y-3 bg-slate-50 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-blue-600 font-bold">
              <span>CANADIAN ISPS</span>
              <Wifi className="w-4 h-4" />
            </div>
            <h3 className="font-headline text-3xl text-slate-900">OPTIMIZED PEERING</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tested on {city.popularISPs.join(", ")} for zero ISP throttling.
            </p>
          </div>

          <div className="card-light p-6 border border-slate-200 space-y-3 bg-slate-50 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-red-600 font-bold">
              <span>SPORTS COVERAGE</span>
              <Trophy className="w-4 h-4" />
            </div>
            <h3 className="font-headline text-3xl text-slate-900">HOME &amp; AWAY FEEDS</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {city.localTeams.join(" • ")} in crystal-clear 4K 60FPS.
            </p>
          </div>
        </div>

      </div>

      <PricingSection />
      <FaqSection />
    </div>
  );
}
