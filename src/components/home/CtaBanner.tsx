import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/15 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-red-400 font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>UPGRADE YOUR CANADIAN TV STREAMING TODAY</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white">
            START STREAMING <br />
            <span className="text-red-500">IN 4K UHD</span> <span className="text-blue-400">NOW</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Join over 5,000+ Canadian households enjoying 25,000+ channels and 120,000+ movies. Instant activation in 5 minutes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/pricing"
              className="btn-pill-red text-base px-8 py-3.5 group shadow-lg"
            >
              <span>Choose Your Plan</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-4 h-4 text-red-600" />
              </div>
            </Link>

            <Link
              href="/channels"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all group"
            >
              <span>Explore Channels (25k+)</span>
              <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span>🍁 CANADIAN CDN SERVERS</span>
            <span>•</span>
            <span>💬 24/7 WHATSAPP CARE</span>
            <span>•</span>
            <span>⚡ 5-MIN ACTIVATION</span>
            <span>•</span>
            <span>🔒 NO CONTRACTS</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
