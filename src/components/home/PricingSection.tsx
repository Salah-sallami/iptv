"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight,
  Check
} from "lucide-react";
import { PRICING_PLANS } from "@/data/pricing";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getWhatsAppPlanUrl } from "@/lib/constants";

export default function PricingSection() {
  const [deviceCount, setDeviceCount] = useState<number>(1);

  const cardIcons = ["❖", "✳", "⊛", "✦"];

  return (
    <section id="pricing" className="bg-slate-50 text-slate-900 py-20 lg:py-28 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Centered on Desktop & Mobile */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 space-y-4 border-b border-slate-200 pb-8">
          
          <div className="inline-flex items-center justify-center gap-3">
            <div className="badge-index-box text-slate-900 border-slate-300 bg-white font-mono text-sm shadow-xs">
              02
            </div>
            <span className="text-red-600 font-black text-lg">✳</span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
              [ SUBSCRIPTION TIERS &bull; CANADIAN CAD ]
            </span>
          </div>

          <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-slate-900">
            IPTV SUBSCRIPTION PLANS
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed font-sans max-w-xl mx-auto">
            Choose your ideal Canadian IPTV package with 25,000+ live channels, 4K sports, and instant 5-minute activation.
          </p>
          
          {/* Device Switcher Centered */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700">Devices:</span>
            <div className="inline-flex p-1 rounded-full bg-white border border-slate-200 shadow-xs">
              {[1, 2, 3, 4].map((count) => (
                <button
                  key={count}
                  onClick={() => setDeviceCount(count)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    deviceCount === count
                      ? "bg-slate-900 text-white shadow-xs font-black"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {count} {count === 1 ? "Screen" : "Screens"}
                </button>
              ))}
            </div>
          </div>

        </ScrollReveal>

        {/* 3 Clean White Cards Grid Centered on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => {
            const price = plan.prices[deviceCount];
            const originalPrice = plan.originalPrices[deviceCount];
            const monthlyEquivalent = (price / plan.durationMonths).toFixed(2);

            return (
              <ScrollReveal
                key={plan.id}
                delay={index * 100}
                variant="scale"
                className={`card-light p-7 sm:p-8 flex flex-col justify-between relative group ${
                  plan.isBestValue
                    ? "ring-2 ring-red-600 shadow-xl border-red-200"
                    : "border-slate-200"
                }`}
              >
                <div>
                  {/* Card Top Meta Line */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-slate-100 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">0{index + 1}</span>
                      <span className="text-red-600 font-bold">{cardIcons[index]}</span>
                    </div>
                    {plan.badge ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-mono">
                        {deviceCount} {deviceCount === 1 ? "DEVICE" : "DEVICES"}
                      </span>
                    )}
                  </div>

                  {/* Card Header Centered on Desktop */}
                  <div className="text-left md:text-center mb-6">
                    <h3 className="font-headline text-3xl sm:text-4xl text-slate-900 tracking-wide mb-1 group-hover:text-red-600 transition-colors">
                      {plan.durationLabel}
                    </h3>

                    <div className="flex items-baseline justify-start md:justify-center gap-1.5 mb-1">
                      <span className="font-headline text-4xl sm:text-5xl text-slate-900 font-mono tracking-tight">
                        ${price}
                      </span>
                      <span className="text-xs font-bold text-slate-500 font-mono">CAD</span>
                      <span className="text-xs text-red-600 font-mono font-bold ml-auto md:ml-2">
                        ~${monthlyEquivalent}/mo
                      </span>
                    </div>

                    <p className="text-[11px] font-mono text-slate-400">
                      Regular: <span className="line-through">${originalPrice} CAD</span>
                    </p>
                  </div>

                  {/* Features Checklist */}
                  <ul className="space-y-2.5 text-xs text-slate-600 mb-8 font-sans border-t border-slate-100 pt-6">
                    {plan.features.slice(0, 7).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 font-mono uppercase group-hover:text-red-600 transition-colors tracking-wider">
                    GET ACCESS
                  </span>
                  <a
                    href={getWhatsAppPlanUrl(plan.durationLabel, deviceCount)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-red-600 group-hover:text-white text-slate-900 flex items-center justify-center transition-all shadow-xs"
                    aria-label={`Order ${plan.durationLabel} plan on WhatsApp`}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
