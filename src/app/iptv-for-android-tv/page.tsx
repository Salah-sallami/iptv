import { Metadata } from "next";
import Link from "next/link";
import { 
  Tv, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Cpu,
  Smartphone
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "IPTV for Android TV Box & Nvidia Shield (2026 Guide) | Streamora IPTV",
  description: "Best IPTV setup for Android TV boxes and Nvidia Shield. Step-by-step guide for TiviMate, OTT Navigator, and XCIPTV with 4K 60fps anti-freeze streaming.",
  alternates: {
    canonical: "/iptv-for-android-tv",
  },
  openGraph: {
    title: "IPTV for Android TV Box & Nvidia Shield (2026 Guide) | Streamora IPTV",
    description: "Best IPTV setup for Android TV boxes and Nvidia Shield. Step-by-step guide for TiviMate, OTT Navigator, and XCIPTV with 4K 60fps anti-freeze streaming.",
    url: `${SITE_CONFIG.url}/iptv-for-android-tv`,
  },
};

export default function IptvForAndroidTvPage() {
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Setup IPTV on Android TV Box & Nvidia Shield",
    "description": "Step-by-step instructions to configure Streamora IPTV on Android TV and Android boxes using TiviMate IPTV Player.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download TiviMate IPTV Player",
        "text": "Open Google Play Store on your Android TV or Nvidia Shield, search for 'TiviMate IPTV Player', and click Install."
      },
      {
        "@type": "HowToStep",
        "name": "Select Add Playlist & Choose Xtream Codes API",
        "text": "Open TiviMate, click 'Add Playlist', and select 'Xtream Codes login' as your connection protocol."
      },
      {
        "@type": "HowToStep",
        "name": "Enter Your Streamora IPTV Credentials",
        "text": "Enter your Server URL, Username, and Password provided in your Streamora activation confirmation."
      },
      {
        "@type": "HowToStep",
        "name": "Enable EPG & Auto Frame Rate",
        "text": "Check 'Include TV Guide (EPG)', click Next, and enable Auto Frame Rate in Settings for smooth 4K 60fps live sports playback."
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
        "name": "IPTV for Android TV",
        "item": `${SITE_CONFIG.url}/iptv-for-android-tv`
      }
    ]
  };

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>ANDROID TV &bull; NVIDIA SHIELD &bull; TIVIMATE 4K</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-slate-900">
            BEST <span className="text-red-600">IPTV FOR ANDROID TV</span> &amp; NVIDIA SHIELD
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Unlock the pinnacle of IPTV performance. Combine powerful Android TV hardware decoders with Streamora IPTV&apos;s Anti-Freeze 9.8™ servers for flawless 4K 60fps sports, rapid channel zapping, and multi-screen streaming.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/iptv-plans"
              className="btn-pill-red text-xs group"
            >
              <span>Get Android TV IPTV Plan (from $6.58/mo)</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>

            <Link
              href="/iptv-setup"
              className="btn-pill-outline text-xs group"
            >
              <span>Universal Setup Hub</span>
              <div className="btn-circle-icon-dark">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Step-by-Step TiviMate Android TV Setup */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              How to Setup TiviMate on Android TV in <span className="text-red-600">4 Quick Steps</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              TiviMate is the gold standard IPTV player on Android TV. Follow this tutorial to configure your 25,000+ channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 01
              </span>
              <h3 className="font-headline text-xl text-slate-900">Install TiviMate from Play Store</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Open Google Play Store on your Android TV or Nvidia Shield. Search for <strong>TiviMate IPTV Player</strong> and install the app.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 02
              </span>
              <h3 className="font-headline text-xl text-slate-900">Select Xtream Codes Login</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Launch TiviMate, click <strong>Add Playlist</strong>, and select <strong>Xtream Codes</strong> for the fastest channel synchronization and automatic EPG.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 03
              </span>
              <h3 className="font-headline text-xl text-slate-900">Enter Streamora Credentials</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Enter your Server URL, Username, and Password sent upon subscription activation. Make sure <strong>Include VOD</strong> is checked.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 04
              </span>
              <h3 className="font-headline text-xl text-slate-900">Enjoy 4K UHD Live TV</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Click Done. Your TV guide and 25,000+ channels will organize by country and category with full 7-day Catch-up TV.
              </p>
            </div>
          </div>
        </div>

        {/* Android TV Top Compatible Apps & Hardware */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl card-light border border-slate-200 bg-slate-50 space-y-4">
            <h3 className="font-headline text-2xl text-slate-900 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-red-600" />
              <span>Recommended Android Hardware</span>
            </h3>
            <ul className="space-y-3 text-xs text-slate-700 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Nvidia Shield TV Pro:</strong> Tegra X1+ processor with AI 4K upscaling for the crispest live sports picture.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Sony Bravia / TCL Android TVs:</strong> Native Android OS with direct Google Play Store integration.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Xiaomi Mi Box S &amp; MECOOL:</strong> Budget-friendly 4K HDR streaming boxes with dual-band Wi-Fi.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl card-light border border-slate-200 bg-slate-50 space-y-4">
            <h3 className="font-headline text-2xl text-slate-900 flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-600" />
              <span>Best Android TV IPTV Apps</span>
            </h3>
            <ul className="space-y-3 text-xs text-slate-700 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>TiviMate Premium:</strong> Best overall UI, multi-screen view, recording, and catch-up TV.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>OTT Navigator:</strong> Highly customizable player with dynamic codec selection and PIP support.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>XCIPTV Player:</strong> User-friendly interface with built-in speed test and dual EXO/VLC players.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Informational SEO Content */}
        <div className="max-w-4xl mx-auto space-y-10 text-slate-800 font-sans leading-relaxed mb-20 border-t border-slate-200 pt-16">
          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Why Android TV is the Best Platform for IPTV Streaming
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Android TV provides uncompromised flexibility for <strong>IPTV streaming</strong>. Unlike locked operating systems, Android TV allows native hardware decoding for HEVC/H.265 4K video feeds, custom audio passthrough (Dolby 5.1 / Atmos), and background EPG caching for instantaneous channel loading.
            </p>
          </section>

          {/* Internal Links Navigation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-headline text-xl text-slate-900 mb-3">Explore Other Guides &amp; Plans</h3>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <Link href="/iptv-for-firestick" className="text-red-600 hover:underline font-bold">
                → Firestick Setup Guide
              </Link>
              <Link href="/iptv-for-google-tv" className="text-red-600 hover:underline font-bold">
                → Google TV Setup Guide
              </Link>
              <Link href="/iptv-for-smart-tv" className="text-red-600 hover:underline font-bold">
                → Smart TV Setup Guide
              </Link>
              <Link href="/iptv-plans" className="text-red-600 hover:underline font-bold">
                → View IPTV Plans &amp; Pricing
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
