import { Mail, Play, Tv } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Tv,
      title: "Choose Your Plan",
      desc: "Pick from 3, 6, or 12-month subscriptions. No hidden fees.",
      badge: "30-second order",
    },
    {
      num: "02",
      icon: Mail,
      title: "Instant Delivery",
      desc: "Login credentials delivered to your email within 60 seconds.",
      badge: "< 1 minute setup",
    },
    {
      num: "03",
      icon: Play,
      title: "Start Watching",
      desc: "Use our IPTV app or any compatible player. Done!",
      badge: "Works immediately",
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28 relative overflow-hidden border-b border-slate-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-50 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="badge-index-box text-slate-900 border-slate-300 bg-slate-50 font-mono text-sm">
              03
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
              [ EASY 3-STEP SETUP ]
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-sans leading-tight">
            Streaming in <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 bg-clip-text text-transparent">3 Simple Steps</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-sans">
            No complicated setup. No tech skills required. Just pick a plan and start watching.
          </p>
        </ScrollReveal>

        {/* 3-Step Cards with Floating Badges & Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto relative">
          
          {/* Subtle connecting horizontal line on desktop */}
          <div className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[1px] bg-slate-200 -z-0"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <ScrollReveal
                key={index}
                delay={index * 120}
                variant="scale"
                className="relative z-10 flex flex-col items-center"
              >
                {/* Top Floating Number Badge */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-mono font-black text-sm flex items-center justify-center shadow-lg shadow-blue-500/25 ring-4 ring-white mb-6">
                  {step.num}
                </div>

                {/* Card Box */}
                <div className="card-light w-full p-8 sm:p-9 flex flex-col items-center text-center justify-between rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-all shadow-sm hover:shadow-md h-full min-h-[300px]">
                  
                  <div className="flex flex-col items-center">
                    {/* Icon Box */}
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 max-w-xs">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/70 border border-slate-300/80 text-[11px] font-mono font-bold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                    <span>{step.badge}</span>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
