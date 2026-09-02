import { Metadata } from "next";
import Link from "next/link";
import { 
  Tv, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  Cast,
  Settings
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "IPTV for Google TV & Chromecast Setup Guide | Streamora IPTV",
  description: "How to setup IPTV on Chromecast with Google TV and Google TV Streamer. Easy app installation, TiviMate configuration, and buffer-free 4K live TV streaming.",
  alternates: {
    canonical: "/iptv-for-google-tv",
  },
  openGraph: {
    title: "IPTV for Google TV & Chromecast Setup Guide | Streamora IPTV",
    description: "How to setup IPTV on Chromecast with Google TV and Google TV Streamer. Easy app installation, TiviMate configuration, and buffer-free 4K live TV streaming.",
    url: `${SITE_CONFIG.url}/iptv-for-google-tv`,
  },
};

export default function IptvForGoogleTvPage() {
  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Setup IPTV on Google TV & Chromecast",
    "description": "Step-by-step instructions to configure Streamora IPTV on Chromecast with Google TV using Play Store apps.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Search & Install TiviMate on Google TV",
        "text": "Navigate to the Apps tab on Google TV, search for 'TiviMate IPTV Player', and install directly from the Google Play Store."
      },
      {
        "@type": "HowToStep",
        "name": "Add Xtream Codes API Login",
        "text": "Open TiviMate on Google TV, choose Add Playlist > Xtream Codes, and enter your Streamora Server URL and credentials."
      },
      {
        "@type": "HowToStep",
        "name": "Configure Audio & Video Codecs",
        "text": "In Settings > Playback, ensure Hardware Decoding is enabled for Dolby Vision, HDR10+, and 60fps live sports playback."
      },
      {
        "@type": "HowToStep",
        "name": "Start Streaming 25,000+ Channels",
        "text": "Click Finish. All live TV channels, movie VOD collections, and TV series will sync automatically with full electronic TV guides."
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
        "name": "IPTV for Google TV",
        "item": `${SITE_CONFIG.url}/iptv-for-google-tv`
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
            <span>GOOGLE TV &bull; CHROMECAST 4K &bull; GOOGLE STREAMER</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-slate-900">
            IPTV FOR <span className="text-red-600">GOOGLE TV</span> &amp; CHROMECAST (2026)
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Experience the elegance of Google TV paired with Streamora IPTV&apos;s anti-freeze live television infrastructure. Stream 25,000+ channels, 4K sports, and 120k+ VOD titles with Google Assistant voice search and fluid remote navigation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/iptv-plans"
              className="btn-pill-red text-xs group"
            >
              <span>Get Google TV IPTV Plan (from $6.58/mo)</span>
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

        {/* Step-by-Step Google TV Guide */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              How to Install IPTV on Google TV in <span className="text-red-600">4 Easy Steps</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Setup is simple thanks to direct Google Play Store integration on Google TV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 01
              </span>
              <h3 className="font-headline text-xl text-slate-900">Install from Play Store</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Go to the <strong>Apps</strong> tab on Google TV. Search for <strong>TiviMate IPTV Player</strong> or <strong>OTT Navigator</strong> and click Install.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 02
              </span>
              <h3 className="font-headline text-xl text-slate-900">Select Xtream Codes</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Open the app, select <strong>Add Playlist</strong>, and click <strong>Xtream Codes API</strong> for full live TV categories and electronic guide syncing.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 03
              </span>
              <h3 className="font-headline text-xl text-slate-900">Enter Credentials</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Input your Streamora Server URL, Username, and Password sent upon instant activation.
              </p>
            </div>

            <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs">
                STEP 04
              </span>
              <h3 className="font-headline text-xl text-slate-900">Stream in 4K HDR</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Click Done. Your TV channels, sports streams, and movie VOD library will populate instantly on your Google TV home screen.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits on Google TV Hardware */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 bg-slate-50 mb-20 max-w-4xl mx-auto space-y-6">
          <h2 className="font-headline text-3xl text-slate-900 text-center">
            WHY GOOGLE TV DELIVERS AN EXCEPTIONAL IPTV EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Direct Google Play Store Access</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No complicated sideloading needed. Access verified IPTV players directly from Google&apos;s official store with automatic app updates.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Dolby Vision &amp; HDR10+ Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chromecast 4K outputs cinema-grade color dynamic range for blockbuster movies and live sports broadcasts.
              </p>
            </div>
          </div>
        </div>

        {/* Informational SEO Content Section */}
        <div className="max-w-4xl mx-auto space-y-10 text-slate-800 font-sans leading-relaxed mb-20 border-t border-slate-200 pt-16">
          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Google TV IPTV Optimization Tips
            </h2>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Free Up Storage:</strong> Google TV devices have limited onboard storage. Clear app caches periodically in Settings &gt; Apps &gt; See All Apps &gt; TiviMate &gt; Clear Cache.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>5GHz Wi-Fi Band:</strong> Always connect your Chromecast to your router&apos;s 5GHz Wi-Fi network to avoid interference on the 2.4GHz spectrum.</span>
              </li>
            </ul>
          </section>

          {/* Internal Links Navigation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-headline text-xl text-slate-900 mb-3">Explore Related Device Guides</h3>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <Link href="/iptv-for-firestick" className="text-red-600 hover:underline font-bold">
                → Firestick Setup Guide
              </Link>
              <Link href="/iptv-for-android-tv" className="text-red-600 hover:underline font-bold">
                → Android TV Setup Guide
              </Link>
              <Link href="/iptv-for-smart-tv" className="text-red-600 hover:underline font-bold">
                → Smart TV Setup Guide
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
