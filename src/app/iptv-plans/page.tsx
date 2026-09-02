"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Flame,
  CheckCircle2,
  Tv,
  HelpCircle
} from "lucide-react";
import { PRICING_PLANS } from "@/data/pricing";
import { SITE_CONFIG, getWhatsAppPlanUrl } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";

export default function IptvPlansPage() {
  const [deviceCount, setDeviceCount] = useState<number>(1);
  const [currency, setCurrency] = useState<"CAD" | "USD">("CAD");
  const conversionRate = currency === "USD" ? 0.73 : 1.0;

  const cardIcons = ["❖", "✳", "⊛", "✦"];

  const schemaData = {
    "@type": "Product",
    "name": "Streamora IPTV Subscription Plans & Packages",
    "image": `${SITE_CONFIG.url}/og-image.jpg`,
    "description": "Compare 3, 6, and 12-month IPTV packages from Streamora IPTV. Over 25,000 live 4K channels, 120k+ VOD, and anti-freeze tech with multi-device connections.",
    "brand": {
      "@type": "Brand",
      "name": "Streamora IPTV"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "2480"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": currency,
      "lowPrice": currency === "USD" ? "21.00" : "29.00",
      "highPrice": currency === "USD" ? "58.00" : "79.00",
      "offerCount": "3",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbsSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "IPTV Plans",
        "item": `${SITE_CONFIG.url}/iptv-plans`
      }
    ]
  };

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <JsonLd data={schemaData} />
      <JsonLd data={breadcrumbsSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>OFFICIAL IPTV PACKAGES &bull; NO HIDDEN CHARGES</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-slate-900">
            TRANSPARENT <span className="text-red-600">IPTV PLANS</span> &bull; 3, 6, 12 MONTHS
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-sans max-w-3xl mx-auto">
            Choose the perfect <strong>IPTV package</strong> tailored to your streaming setup. Enjoy 25,000+ live 4K &amp; FHD channels, 120,000+ movies on demand, and live sports with instant 5-minute activation.
          </p>
        </div>

        {/* Currency and Device Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-3xl card-light border border-slate-200 mb-14 max-w-4xl mx-auto bg-slate-50">
          
          {/* Device Selector */}
          <div className="space-y-2 text-center sm:text-left">
            <label className="text-xs font-mono font-bold text-slate-600 uppercase tracking-widest block">
              Simultaneous Device Connections:
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

                  {/* Card Header Centered */}
                  <div className="text-left md:text-center space-y-2 mb-6">
                    <h2 className="font-headline text-3xl sm:text-4xl text-slate-900 tracking-wide group-hover:text-red-600 transition-colors">
                      {plan.durationLabel}
                    </h2>

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

        {/* Informational Breakdown of IPTV Package Tiers */}
        <div className="max-w-4xl mx-auto space-y-12 text-slate-800 font-sans leading-relaxed mb-20 border-t border-slate-200 pt-16">
          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Understanding IPTV Subscription Price Tiers
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When evaluating an <strong>IPTV monthly subscription</strong> or annual plan, duration and server priority play a significant role. Streamora IPTV guarantees equal 4K high-bitrate bandwidth across all subscription tiers, while longer terms provide substantial cost savings of up to 65% off regular rates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-headline text-xl text-slate-900">IPTV 3 Months</h3>
                <p className="text-xs text-slate-600">
                  Ideal for testing multi-room performance across a sports season. Zero long-term commitment.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-headline text-xl text-slate-900">IPTV 6 Months</h3>
                <p className="text-xs text-slate-600">
                  Our most popular mid-tier subscription, locking in discounted rates for half a year of live sports &amp; cinema.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-headline text-xl text-slate-900">IPTV 12 Months</h3>
                <p className="text-xs text-slate-600">
                  The best value IPTV package at just ~$6.58/month. Saves over $1,200 annually compared to traditional cable.
                </p>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="space-y-6">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Frequently Asked Questions About IPTV Plans
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Are there any hidden fees or automatic renewals?</h3>
                <p className="text-xs text-slate-600">
                  No. All Streamora IPTV plans are flat-rate subscriptions with zero hidden fees. We do not automatically charge your account when your term ends; you choose when to renew.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Can I use one subscription on multiple TVs simultaneously?</h3>
                <p className="text-xs text-slate-600">
                  Yes! Use the device connection selector above to choose 1, 2, 3, or 4 simultaneous devices so everyone in your household can stream different channels at the same time.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">How fast is activation after ordering?</h3>
                <p className="text-xs text-slate-600">
                  Activation takes under 5 minutes. You will receive your Xtream Codes API credentials, M3U playlist URL, and step-by-step setup guides immediately via email and WhatsApp.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links Navigation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-headline text-xl text-slate-900 mb-3">Helpful IPTV Links</h3>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <Link href="/iptv-subscription" className="text-red-600 hover:underline font-bold">
                → IPTV Subscription Overview
              </Link>
              <Link href="/iptv-setup" className="text-red-600 hover:underline font-bold">
                → Universal Setup Instructions
              </Link>
              <Link href="/iptv-for-firestick" className="text-red-600 hover:underline font-bold">
                → Firestick Setup Guide
              </Link>
              <Link href="/iptv-for-smart-tv" className="text-red-600 hover:underline font-bold">
                → Smart TV Setup Guide
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
