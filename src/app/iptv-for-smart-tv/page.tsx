import { Metadata } from "next";
import Link from "next/link";
import { 
  Tv, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Monitor, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Smartphone,
  Layers,
  Settings
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Best IPTV for Smart TV (Samsung & LG Guide) | Streamora IPTV",
  description: "Learn how to setup IPTV on Samsung Smart TV and LG Smart TV. Complete 2026 guide for Smart IPTV, IPTV Smarters Pro, and IBO Player with 4K UHD streaming.",
  alternates: {
    canonical: "/iptv-for-smart-tv",
  },
  openGraph: {
    title: "Best IPTV for Smart TV (Samsung & LG Guide) | Streamora IPTV",
    description: "Learn how to setup IPTV on Samsung Smart TV and LG Smart TV. Complete 2026 guide for Smart IPTV, IPTV Smarters Pro, and IBO Player with 4K UHD streaming.",
    url: `${SITE_CONFIG.url}/iptv-for-smart-tv`,
  },
};

export default function IptvForSmartTvPage() {
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Setup IPTV on Samsung & LG Smart TV",
    "description": "Step-by-step tutorial to install and configure Streamora IPTV on Samsung Tizen and LG webOS Smart TVs.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Install an IPTV Player from TV App Store",
        "text": "Open Samsung App Store or LG Content Store, search for IBO Player, IPTV Smarters Pro, or Smart IPTV, and install the application."
      },
      {
        "@type": "HowToStep",
        "name": "Locate Your MAC Address & Device Key",
        "text": "Launch the installed app on your Smart TV to view your unique MAC Address and Device Key displayed on the welcome screen."
      },
      {
        "@type": "HowToStep",
        "name": "Connect Your Streamora IPTV M3U Playlist",
        "text": "Provide your MAC address to our support team or enter your Streamora M3U Plus URL into the app's web portal."
      },
      {
        "@type": "HowToStep",
        "name": "Restart App & Start 4K Streaming",
        "text": "Reload the app on your TV. All 25,000+ live TV channels, sports categories, and movies with electronic TV guides (EPG) will load automatically."
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
        "name": "IPTV for Smart TV",
        "item": `${SITE_CONFIG.url}/iptv-for-smart-tv`
      }
    ]
  };

  const recommendedApps = [
    {
      name: "IBO Player",
      tag: "Best for Samsung & LG",
      desc: "Blazing-fast channel switching, native 4K support, modern interface, and easy remote control navigation."
    },
    {
      name: "IPTV Smarters Pro",
      tag: "Most Popular",
      desc: "Supports Xtream Codes API login, multi-screen viewing, parental controls, and full EPG integration."
    },
    {
      name: "Smart IPTV (SIPTV)",
      tag: "Classic Player",
      desc: "Reliable M3U playlist loader with fast zap times for Samsung Tizen and LG webOS televisions."
    },
    {
      name: "SET IPTV",
      tag: "Fast & Lightweight",
      desc: "Minimalist player with high buffer resilience and direct MAC address web management."
    }
  ];

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>SMART TV STREAMING GUIDE &bull; SAMSUNG &amp; LG WEBOS</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-slate-900">
            BEST <span className="text-red-600">IPTV FOR SMART TV</span> (SAMSUNG, LG, SONY, TCL)
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Transform your living room Smart TV into a complete 4K home theater. Enjoy 25,000+ live TV channels, sports in 60fps, and 120,000+ VOD movies directly on Samsung Tizen, LG webOS, Sony, and Hisense with zero external boxes required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/iptv-plans"
              className="btn-pill-red text-xs group"
            >
              <span>Get Smart TV IPTV Plan (from $6.58/mo)</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>

            <Link
              href="/iptv-setup"
              className="btn-pill-outline text-xs group"
            >
              <span>All Device Guides</span>
              <div className="btn-circle-icon-dark">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Step-by-Step Walkthrough Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              How to Install &amp; Setup IPTV on Smart TV in <span className="text-red-600">4 Simple Steps</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Follow this step-by-step guide to activate Streamora IPTV on your Samsung or LG television in under 3 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 01
              </span>
              <h3 className="font-headline text-xl text-slate-900">Install an IPTV Player</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Open Samsung Smart Hub or LG Content Store. Search for <strong>IBO Player</strong>, <strong>IPTV Smarters Pro</strong>, or <strong>Smart IPTV</strong> and download the application.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 02
              </span>
              <h3 className="font-headline text-xl text-slate-900">Get Device MAC / Key</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Open the newly installed app on your TV. Note the <strong>MAC Address</strong> (e.g. 00:1a:79:xx:xx) and <strong>Device Key</strong> displayed on your TV screen.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 03
              </span>
              <h3 className="font-headline text-xl text-slate-900">Upload Playlist URL</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Visit the app portal on your phone or PC, or send your MAC address to Streamora WhatsApp support to connect your active M3U Plus playlist.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 04
              </span>
              <h3 className="font-headline text-xl text-slate-900">Start 4K Streaming</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Restart the app on your Smart TV. All 25,000+ live TV channels, sports categories, and 120,000+ movies will load with complete EPG TV guides!
              </p>
            </div>
          </div>
        </div>

        {/* Best Smart TV Players Overview */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 bg-slate-50 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              TOP RECOMMENDED SMART TV IPTV APPS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Compatible with Samsung Tizen OS (2017–2026 models) and LG webOS (3.0 to 24+).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recommendedApps.map((app) => (
              <div key={app.name} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline text-2xl text-slate-900">{app.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 text-[10px] font-mono font-bold uppercase border border-red-200">
                    {app.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Informational SEO Guide Content */}
        <div className="max-w-4xl mx-auto space-y-10 text-slate-800 font-sans leading-relaxed mb-20 border-t border-slate-200 pt-16">
          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Why Streamora is the Best IPTV Service for Smart TV
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Smart TVs manufactured by Samsung and LG run proprietary operating systems (Tizen and webOS) that require specialized, optimized media decoders. Streamora IPTV provides high-performance M3U Plus playlists and Xtream API endpoints specifically formatted to prevent memory leaks and audio desynchronization on Smart TV hardware.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Smart TV IPTV Troubleshooting Tips
            </h2>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Use 5GHz Wi-Fi or Ethernet:</strong> Connect your Smart TV via 5GHz Wi-Fi or a direct LAN ethernet cable for consistent 25 Mbps+ speeds required for 4K 60fps streaming.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Clear App Cache:</strong> If an app feels sluggish, clear the Smart TV app memory in Settings &gt; Support &gt; Device Care.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Update App Version:</strong> Always ensure your IPTV player is updated to the latest version available in the Samsung App Store or LG Content Store.</span>
              </li>
            </ul>
          </section>

          {/* Internal Links Navigation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-headline text-xl text-slate-900 mb-3">Explore Other Device Guides</h3>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <Link href="/iptv-for-firestick" className="text-red-600 hover:underline font-bold">
                → Firestick Setup Guide
              </Link>
              <Link href="/iptv-for-android-tv" className="text-red-600 hover:underline font-bold">
                → Android TV Setup Guide
              </Link>
              <Link href="/iptv-for-google-tv" className="text-red-600 hover:underline font-bold">
                → Google TV Setup Guide
              </Link>
              <Link href="/iptv-plans" className="text-red-600 hover:underline font-bold">
                → View IPTV Subscription Plans
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
