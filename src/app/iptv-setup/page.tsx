import { Metadata } from "next";
import Link from "next/link";
import { 
  Tv, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Monitor, 
  Smartphone, 
  Layers, 
  Download, 
  HelpCircle,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "IPTV Setup Guide: Step-by-Step for All Devices | Streamora IPTV",
  description: "Universal IPTV setup guide. Step-by-step tutorials for Firestick, Smart TV, Android Box, Apple TV, and Windows/Mac using M3U playlist and Xtream Codes API.",
  alternates: {
    canonical: "/iptv-setup",
  },
  openGraph: {
    title: "IPTV Setup Guide: Step-by-Step for All Devices | Streamora IPTV",
    description: "Universal IPTV setup guide. Step-by-step tutorials for Firestick, Smart TV, Android Box, Apple TV, and Windows/Mac using M3U playlist and Xtream Codes API.",
    url: `${SITE_CONFIG.url}/iptv-setup`,
  },
};

export default function IptvSetupPage() {
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between Xtream Codes API and M3U Playlist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xtream Codes API uses Server URL, Username, and Password to synchronize live channels, VOD movies, TV series, and EPG guides automatically. An M3U Playlist is a direct file or URL containing channel links."
        }
      },
      {
        "@type": "Question",
        "name": "How long does IPTV activation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Streamora IPTV accounts are activated in under 5 minutes. You will receive your login credentials immediately via email and WhatsApp upon order confirmation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a VPN to use Streamora IPTV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No VPN is required because Streamora IPTV uses SSL encrypted anti-freeze server streams. However, our service is 100% compatible with all major VPNs (ExpressVPN, NordVPN, Surfshark) if you prefer."
        }
      }
    ]
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
        "name": "IPTV Setup Guide",
        "item": `${SITE_CONFIG.url}/iptv-setup`
      }
    ]
  };

  const deviceGuides = [
    {
      title: "Amazon Firestick & Fire TV",
      slug: "/iptv-for-firestick",
      icon: Tv,
      desc: "Fast setup using Downloader code 289411 for TiviMate and IPTV Smarters Pro.",
      time: "3 Minutes"
    },
    {
      title: "Smart TV (Samsung & LG)",
      slug: "/iptv-for-smart-tv",
      icon: Monitor,
      desc: "Native app install via Samsung App Store and LG Content Store (IBO Player, Smart IPTV).",
      time: "2 Minutes"
    },
    {
      title: "Android TV Box & Shield",
      slug: "/iptv-for-android-tv",
      icon: Layers,
      desc: "Google Play Store direct download with hardware 4K 60fps decoding on TiviMate.",
      time: "2 Minutes"
    },
    {
      title: "Google TV & Chromecast",
      slug: "/iptv-for-google-tv",
      icon: Smartphone,
      desc: "Chromecast 4K & Google TV Streamer setup with voice remote and full TV guide.",
      time: "3 Minutes"
    },
    {
      title: "Apple TV & iOS (iPhone/iPad)",
      slug: "/installation-guide/apple-tv-ios",
      icon: Globe,
      desc: "Using IPTVX, GSE Smart IPTV, or Smarters Player Lite on Apple tvOS and iOS.",
      time: "3 Minutes"
    },
    {
      title: "MAG & Formuler Set-Top Box",
      slug: "/installation-guide/mag-formuler-box",
      icon: Zap,
      desc: "Dedicated Stalker portal configuration with MAC address activation for hardware remotes.",
      time: "2 Minutes"
    }
  ];

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>UNIVERSAL SETUP HUB &bull; ALL DEVICES &amp; APPS</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-slate-900">
            UNIVERSAL <span className="text-red-600">IPTV SETUP GUIDE</span> (2026)
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Everything you need to configure Streamora IPTV on your television, streaming stick, tablet, or phone. Choose your device below for step-by-step instructions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/iptv-plans"
              className="btn-pill-red text-xs group"
            >
              <span>Get Your IPTV Subscription (from $6.58/mo)</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>

            <Link
              href="/iptv-guide"
              className="btn-pill-outline text-xs group"
            >
              <span>Read Troubleshooting Guide</span>
              <div className="btn-circle-icon-dark">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Device Selection Hub Cards */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Select Your <span className="text-red-600">Streaming Device</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Click any device below for detailed screenshots, download codes, and configuration tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {deviceGuides.map((guide) => {
              const IconComp = guide.icon;
              return (
                <Link
                  key={guide.title}
                  href={guide.slug}
                  className="card-light p-7 rounded-3xl border border-slate-200 bg-white hover:border-red-500 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-mono font-bold text-[10px]">
                        ⏱ {guide.time}
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                      {guide.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-red-600">
                    <span>View Setup Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Connection Protocols Explained */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 bg-slate-50 mb-20 max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              IPTV CONNECTION PROTOCOLS EXPLAINED
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Streamora supports all 3 industry-standard IPTV delivery methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-mono font-bold">
                RECOMMENDED
              </div>
              <h3 className="font-headline text-xl text-slate-900">Xtream Codes API</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Best for modern players (TiviMate, Smarters). Automatically loads categorized Live TV, Movies, Series, and TV Guide using Server URL, Username, and Password.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-mono font-bold">
                UNIVERSAL
              </div>
              <h3 className="font-headline text-xl text-slate-900">M3U Plus Playlist URL</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Direct URL link containing stream addresses and channel metadata. Ideal for VLC Media Player, Smart IPTV, and web-based media players.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-mono font-bold">
                HARDWARE STB
              </div>
              <h3 className="font-headline text-xl text-slate-900">Stalker Portal (MAC)</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Engineered for dedicated hardware set-top boxes (MAG 540, Formuler Z11, BuzzTV). Connects via portal URL and your device&apos;s 00:1A:79 MAC address.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-8 mb-20 border-t border-slate-200 pt-16">
          <h2 className="font-headline text-3xl sm:text-4xl text-slate-900 text-center">
            FREQUENTLY ASKED SETUP QUESTIONS
          </h2>

          <div className="space-y-4 font-sans">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">How fast is IPTV activation?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Streamora IPTV activations take under 5 minutes. You will receive your Xtream Codes API login, M3U URL, and setup steps immediately via email and WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">What internet speed do I need for 4K streaming?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We recommend a minimum download speed of 15 Mbps for FHD 1080p channels and 25 Mbps+ for 4K 60fps sports and movies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Can I test on multiple devices?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yes! You can install your subscription on as many devices as you like, and choose a 1, 2, 3, or 4 simultaneous connection plan so your whole family can watch at once.
              </p>
            </div>
          </div>

          {/* Internal Links Navigation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-headline text-xl text-slate-900 mb-3">Explore Related Links</h3>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <Link href="/iptv-subscription" className="text-red-600 hover:underline font-bold">
                → IPTV Subscription Overview
              </Link>
              <Link href="/iptv-plans" className="text-red-600 hover:underline font-bold">
                → IPTV Plans &amp; Pricing
              </Link>
              <Link href="/iptv-guide" className="text-red-600 hover:underline font-bold">
                → Complete Troubleshooting Guide
              </Link>
              <Link href="/channels" className="text-red-600 hover:underline font-bold">
                → Channel List
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
