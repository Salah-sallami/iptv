import { Metadata } from "next";
import Link from "next/link";
import { 
  Tv, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Download, 
  ShieldCheck, 
  Zap, 
  Settings,
  HelpCircle
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How to Install IPTV on Firestick (2026 Step-by-Step) | Streamora IPTV",
  description: "Complete step-by-step guide to install IPTV on Amazon Firestick 4K & Fire TV. Enable developer options, use Downloader, and stream 25,000+ channels in 3 minutes.",
  alternates: {
    canonical: "/iptv-for-firestick",
  },
  openGraph: {
    title: "How to Install IPTV on Firestick (2026 Step-by-Step) | Streamora IPTV",
    description: "Complete step-by-step guide to install IPTV on Amazon Firestick 4K & Fire TV. Enable developer options, use Downloader, and stream 25,000+ channels in 3 minutes.",
    url: `${SITE_CONFIG.url}/iptv-for-firestick`,
  },
};

export default function IptvForFirestickPage() {
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Install and Setup IPTV on Amazon Firestick",
    "description": "Step-by-step tutorial to install IPTV players like TiviMate or IPTV Smarters on Amazon Fire TV Stick 4K using Downloader.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Install the Downloader App",
        "text": "From Firestick home screen, click Find > Search, type 'Downloader', and install the orange Downloader app."
      },
      {
        "@type": "HowToStep",
        "name": "Enable Developer Options & Install Unknown Apps",
        "text": "Go to Settings > My Fire TV > Developer Options > Install Unknown Apps > Turn Downloader ON. (On Fire OS 8, click My Fire TV > About 7 times to reveal Developer Options)."
      },
      {
        "@type": "HowToStep",
        "name": "Download TiviMate or IPTV Smarters via Code",
        "text": "Launch Downloader, enter quick code 289411 for TiviMate (or 78522 for IPTV Smarters), and click Install."
      },
      {
        "@type": "HowToStep",
        "name": "Login with Streamora IPTV Credentials",
        "text": "Open the player, select Xtream Codes API, enter your Streamora Server URL, Username, and Password to load 25,000+ channels in 4K."
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
        "name": "IPTV for Firestick",
        "item": `${SITE_CONFIG.url}/iptv-for-firestick`
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
            <span>AMAZON FIRESTICK 4K &bull; 3-MINUTE INSTALL GUIDE</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-slate-900">
            HOW TO INSTALL <span className="text-red-600">IPTV ON FIRESTICK</span> (2026)
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            The Amazon Fire TV Stick is the #1 streaming device for IPTV in 2026. Follow our straightforward, verified tutorial to install Downloader, setup TiviMate or IPTV Smarters, and unlock 25,000+ live 4K channels with anti-freeze protection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/iptv-plans"
              className="btn-pill-red text-xs group"
            >
              <span>Get Firestick IPTV Plan (from $6.58/mo)</span>
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

        {/* Step-by-Step Firestick Walkthrough Cards */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Step-by-Step <span className="text-red-600">Firestick IPTV Setup</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Compatible with Fire TV Stick HD, Fire TV Stick 4K, 4K Max, and Fire TV Cube.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 01
              </span>
              <h3 className="font-headline text-xl text-slate-900">Install Downloader App</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Go to <strong>Find &gt; Search</strong> on your Firestick. Type &quot;Downloader&quot; and install the official orange Downloader utility by AFTVnews.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 02
              </span>
              <h3 className="font-headline text-xl text-slate-900">Enable Developer Options</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Go to <strong>Settings &gt; My Fire TV &gt; Developer Options</strong>. Enable <strong>Install Unknown Apps</strong> for Downloader. (If hidden, click About 7 times).
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 03
              </span>
              <h3 className="font-headline text-xl text-slate-900">Enter Downloader Code</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Open Downloader and enter quick code <strong className="text-red-600 font-mono">289411</strong> for TiviMate or <strong className="text-red-600 font-mono">78522</strong> for IPTV Smarters Pro.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 04
              </span>
              <h3 className="font-headline text-xl text-slate-900">Login &amp; Stream in 4K</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Launch the player, enter your Streamora Xtream Codes API credentials, and start streaming 25,000+ live channels immediately!
              </p>
            </div>
          </div>
        </div>

        {/* Downloader Quick Codes Box */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 bg-slate-50 mb-20 max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl text-slate-900 text-center mb-8">
            VERIFIED FIRESTICK DOWNLOADER QUICK CODES (2026)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base">TiviMate IPTV Player</h3>
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 font-mono font-black text-sm border border-red-200">
                  289411
                </span>
              </div>
              <p className="text-xs text-slate-600 font-sans">
                Best UI, premium TV guide, multi-screen view, and hardware-accelerated 4K 60fps video decoder.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base">IPTV Smarters Pro</h3>
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 font-mono font-black text-sm border border-red-200">
                  78522
                </span>
              </div>
              <p className="text-xs text-slate-600 font-sans">
                Popular all-in-one player for Live TV, Movies, TV Series VOD, and master search.
              </p>
            </div>
          </div>
        </div>

        {/* Informational SEO Content Section */}
        <div className="max-w-4xl mx-auto space-y-10 text-slate-800 font-sans leading-relaxed mb-20 border-t border-slate-200 pt-16">
          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Why Firestick is the Best Device for IPTV Streaming
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The Amazon Fire TV Stick features quad-core processors, dedicated hardware HEVC/H.265 decoders, and Wi-Fi 6 support (on Firestick 4K Max). Combined with Streamora IPTV&apos;s low-latency edge CDN network, Firestick users experience near-zero latency, seamless channel switching, and instant 4K HDR playback.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Firestick IPTV Troubleshooting &amp; Optimization
            </h2>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Developer Options Missing on Fire OS 8?</strong> Navigate to Settings &gt; My Fire TV &gt; About. Click your Fire TV Stick name 7 times rapidly until a popup states &quot;No need, you are already a developer.&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Fixing Buffering:</strong> In TiviMate settings, set Stream Buffer Size to &quot;Medium&quot; or &quot;Large&quot; and use Hardware Audio/Video decoding for smoothest sports playback.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Power Supply:</strong> Always plug your Firestick into the wall electrical outlet using the included power adapter rather than a low-voltage TV USB port.</span>
              </li>
            </ul>
          </section>

          {/* Internal Links Navigation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-headline text-xl text-slate-900 mb-3">Related Guides &amp; IPTV Resources</h3>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <Link href="/iptv-for-smart-tv" className="text-red-600 hover:underline font-bold">
                → Smart TV Setup Guide
              </Link>
              <Link href="/iptv-for-android-tv" className="text-red-600 hover:underline font-bold">
                → Android TV Setup Guide
              </Link>
              <Link href="/iptv-for-google-tv" className="text-red-600 hover:underline font-bold">
                → Google TV Setup Guide
              </Link>
              <Link href="/iptv-plans" className="text-red-600 hover:underline font-bold">
                → View IPTV Plans &amp; Packages
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
