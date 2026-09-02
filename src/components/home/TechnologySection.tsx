import Link from "next/link";
import { HelpCircle, Info, ShieldCheck, ArrowUpRight, Cpu } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TechnologySection() {
  const points = [
    {
      id: "what-is-iptv",
      icon: <HelpCircle className="w-8 h-8 text-blue-600" />,
      title: "What is IPTV?",
      description:
        "IPTV (Internet Protocol Television) represents the future of entertainment delivery. Unlike traditional cable or satellite TV, our advanced IPTV service transmits high-quality video content through secure internet protocols, providing superior streaming performance and flexibility that Canadian households deserve.",
    },
    {
      id: "how-it-works",
      icon: <Info className="w-8 h-8 text-blue-600" />,
      title: "How Our IPTV Subscription Works",
      description:
        "Our Canadian IPTV technology converts television signals into digital data packets, delivered through optimized streaming servers across Canada. This ensures lightning-fast channel switching, crystal-clear 4K quality, and zero buffering—providing an entertainment experience that surpasses traditional broadcasting methods.",
    },
    {
      id: "why-choose-us",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Why Choose Our IPTV Package?",
      description:
        "Our IPTV technology ensures 99.9% uptime, zero buffering, and 4K Ultra HD quality. It offers instant channel switching, multi-device support, and runs on Canadian servers for reliable performance.",
      cta: {
        label: "Read Our Complete Setup Guide",
        href: "/installation-guide",
      },
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference & Website Format */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-4 border-b border-slate-200 pb-8">
          
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNOLOGY</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-slate-900">
            IPTV SERVICE EXPLAINED
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed font-sans">
            Understanding how our advanced IPTV delivers premium entertainment to Canadian households
          </p>

        </ScrollReveal>

        {/* 3-Column Technology Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {points.map((pt, index) => (
            <ScrollReveal
              key={pt.id}
              delay={index * 120}
              variant="scale"
              className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors"
            >
              {/* Circular Outlined Blue Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[2.5px] border-blue-500 bg-white flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                {pt.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight mb-4">
                {pt.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 font-sans leading-relaxed mb-6">
                {pt.description}
              </p>

              {/* Optional CTA button in 3rd column */}
              {pt.cta && (
                <div className="mt-auto pt-2 w-full flex justify-center">
                  <Link
                    href={pt.cta.href}
                    className="btn-pill-primary text-xs w-full sm:w-auto justify-center group"
                  >
                    <span>{pt.cta.label}</span>
                    <div className="btn-circle-icon">
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-900" />
                    </div>
                  </Link>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
