"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  ArrowUpRight, 
  Tv, 
  Mail,
  Play,
  CreditCard, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Flame
} from "lucide-react";
import { PRICING_PLANS } from "@/data/pricing";
import FaqSection from "@/components/home/FaqSection";
import { getWhatsAppPlanUrl } from "@/lib/constants";

export default function PricingPage() {
  const [deviceCount, setDeviceCount] = useState<number>(1);
  const [currency, setCurrency] = useState<"CAD" | "USD">("CAD");
  const conversionRate = currency === "USD" ? 0.73 : 1.0;

  const cardIcons = ["❖", "✳", "⊛", "✦"];

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
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>01 &bull; OFFICIAL CANADIAN PLANS</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl tracking-tight leading-none text-slate-900">
            TRANSPARENT PRICING &bull; NO CONTRACTS
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-sans">
            Enjoy 25,000+ live channels, 120,000+ movies in 4K UHD with instant 5-minute activation and 24/7 support.
          </p>
        </div>

        {/* Currency and Device Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-3xl card-light border border-slate-200 mb-14 max-w-4xl mx-auto bg-slate-50">
          
          {/* Device Selector */}
          <div className="space-y-2 text-center sm:text-left">
            <label className="text-xs font-mono font-bold text-slate-600 uppercase tracking-widest block">
              Simultaneous Devices:
            </label>
            <div className="inline-flex p-1 rounded-full bg-white border border-slate-200 shadow-xs">
              {[1, 2, 3, 4].map((count) => (
                <button
                  key={count}
                  onClick={() => setDeviceCount(count)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    deviceCount === count
                      ? "bg-slate-900 text-white font-black shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {count} {count === 1 ? "Device" : "Devices"}
                </button>
              ))}
            </div>
          </div>

          {/* Currency Selector */}
          <div className="space-y-2 text-center sm:text-right">
            <label className="text-xs font-mono font-bold text-slate-600 uppercase tracking-widest block">
              Display Currency:
            </label>
            <div className="inline-flex p-1 rounded-full bg-white border border-slate-200 shadow-xs">
              <button
                onClick={() => setCurrency("CAD")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === "CAD"
                    ? "bg-red-600 text-white font-black shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🍁 CAD ($)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === "USD"
                    ? "bg-blue-600 text-white font-black shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🇺🇸 USD ($)
              </button>
            </div>
          </div>

        </div>

        {/* Pricing Cards 3-Grid Centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {PRICING_PLANS.map((plan, index) => {
            const cadPrice = plan.prices[deviceCount];
            const displayPrice = currency === "USD" 
              ? Math.round(cadPrice * conversionRate) 
              : cadPrice;
            const originalPrice = currency === "USD"
              ? Math.round(plan.originalPrices[deviceCount] * conversionRate)
              : plan.originalPrices[deviceCount];

            return (
              <div
                key={plan.id}
                className={`card-light p-7 flex flex-col justify-between relative group bg-white shadow-sm hover:shadow-md rounded-3xl ${
                  plan.isBestValue
                    ? "border-red-500 ring-2 ring-red-600 shadow-xl"
                    : "border-slate-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-4 border-b border-slate-100 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">0{index + 1}</span>
                      <span className="text-red-600 font-bold">{cardIcons[index]}</span>
                    </div>
                    {plan.badge ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 text-[10px] font-mono font-bold uppercase border border-red-200">
                        {plan.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-mono">
                        {deviceCount} {deviceCount === 1 ? "DEVICE" : "DEVICES"}
                      </span>
                    )}
                  </div>

                  {/* Card Header Centered on Desktop & Mobile */}
                  <div className="text-left md:text-center space-y-2 mb-6">
                    <h3 className="font-headline text-3xl sm:text-4xl text-slate-900 tracking-wide group-hover:text-red-600 transition-colors">
                      {plan.durationLabel}
                    </h3>

                    <div className="flex items-baseline gap-2 md:justify-center">
                      <span className="font-headline text-5xl sm:text-6xl text-slate-900 tracking-tight">
                        ${displayPrice}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                        {currency}
                      </span>
                      <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                        ~${(displayPrice / plan.durationMonths).toFixed(2)}/mo
                      </span>
                    </div>

                    <p className="text-[11px] font-mono text-slate-400">
                      Regular: <span className="line-through">${originalPrice} {currency}</span>
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600 mb-8 font-sans">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase group-hover:text-red-600 transition-colors">
                    Order Plan
                  </span>
                  <a
                    href={getWhatsAppPlanUrl(plan.durationLabel, deviceCount)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-red-600 group-hover:text-white text-slate-900 flex items-center justify-center transition-all shadow-xs"
                    aria-label={`Order ${plan.durationLabel} on WhatsApp`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Streaming in 3 Simple Steps Section on Pricing Page */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Streaming in <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 bg-clip-text text-transparent">3 Simple Steps</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              No complicated setup. No tech skills required. Just pick a plan and start watching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Top Floating Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-mono font-black text-xs flex items-center justify-center shadow-md shadow-blue-500/20 ring-4 ring-white mb-5">
                    {step.num}
                  </div>

                  {/* Card Box */}
                  <div className="card-light w-full p-7 flex flex-col items-center text-center justify-between rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-all shadow-sm hover:shadow-md h-full min-h-[260px]">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center mb-5 shadow-sm">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-sans tracking-tight mb-2">
                        {step.title}
                      </h4>

                      <p className="text-xs text-slate-600 font-sans leading-relaxed mb-5 max-w-xs">
                        {step.desc}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 border border-slate-300/80 text-[10px] font-mono font-bold text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                      <span>{step.badge}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <FaqSection />
    </div>
  );
}
