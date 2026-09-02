import { Metadata } from "next";
import Link from "next/link";
import { 
  Tv, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  AlertTriangle, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Activity,
  Cpu,
  RefreshCw,
  Wifi
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Complete IPTV Guide (2026): Everything You Need to Know | Streamora IPTV",
  description: "Comprehensive 2026 IPTV guide. Understand how IPTV streaming works, EPG, VOD, codecs, VPN usage, and how to fix IPTV buffering and connection issues.",
  alternates: {
    canonical: "/iptv-guide",
  },
  openGraph: {
    title: "Complete IPTV Guide (2026): Everything You Need to Know | Streamora IPTV",
    description: "Comprehensive 2026 IPTV guide. Understand how IPTV streaming works, EPG, VOD, codecs, VPN usage, and how to fix IPTV buffering and connection issues.",
    url: `${SITE_CONFIG.url}/iptv-guide`,
  },
};

export default function IptvGuidePage() {
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why does IPTV buffer during big sports matches and how can I fix it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Buffering on budget IPTV services is caused by server overload or ISP throttling. To fix it, use a premium provider with CDN load balancing like Streamora IPTV, switch your Wi-Fi to 5GHz or use Ethernet, and set stream buffer size to Medium in your player settings."
        }
      },
      {
        "@type": "Question",
        "name": "How does IPTV technology differ from traditional cable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional cable transmits all channels simultaneously over coaxial cables. IPTV uses Internet Protocol unicast streaming, sending only the requested channel to your device, allowing high-bitrate 4K 60fps streaming and instant access to 120,000+ on-demand movies."
        }
      },
      {
        "@type": "Question",
        "name": "How do I refresh my Electronic Program Guide (EPG)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In player apps like TiviMate or IPTV Smarters, go to Settings > EPG / TV Guide and click 'Update TV Guide'. Streamora updates its global XMLTV guides every 4 hours."
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
        "name": "IPTV Guide",
        "item": `${SITE_CONFIG.url}/iptv-guide`
      }
    ]
  };

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>2026 COMPLETE KNOWLEDGE BASE &bull; TECHNOLOGY &amp; TROUBLESHOOTING</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-slate-900">
            THE ULTIMATE <span className="text-red-600">IPTV GUIDE</span> (2026)
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Everything you need to master IPTV streaming. Learn how modern IPTV architecture works, discover performance optimization tips, and solve common buffering issues with our expert troubleshooting guide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/iptv-plans"
              className="btn-pill-red text-xs group"
            >
              <span>View IPTV Plans &amp; Pricing</span>
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

        {/* How IPTV Works 3-Pillar Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h2 className="font-headline text-2xl text-slate-900">Unicast Edge CDN Delivery</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Unlike traditional broadcast networks that push every channel down a cable wire, IPTV establishes a dedicated high-speed unicast data stream only for the channel you are currently watching.
            </p>
          </div>

          <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="font-headline text-2xl text-slate-900">H.265 HEVC 4K Transcoding</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Streamora encodes video using High-Efficiency Video Coding (H.265), delivering crystal-clear 4K 60fps picture quality while using 50% less internet bandwidth than outdated H.264 codecs.
            </p>
          </div>

          <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="font-headline text-2xl text-slate-900">Anti-Freeze 9.8™ Redundancy</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Multi-tiered server failover architecture dynamically re-routes traffic across secondary server clusters if a primary node experiences latency or connection drops.
            </p>
          </div>
        </div>

        {/* Master Troubleshooting Matrix */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 bg-slate-50 mb-20 max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              IPTV TROUBLESHOOTING &amp; FIXES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Solve the most common streaming issues in under 60 seconds.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Issue: Stream Buffering or Freezing</span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                <strong>Fix:</strong> Switch from 2.4GHz Wi-Fi to 5GHz Wi-Fi or plug in an Ethernet cable. In player settings (e.g. TiviMate), change Buffer Size to &quot;Medium&quot; or &quot;Large&quot;. If your ISP throttles IPTV streams during prime time, connect via a high-speed VPN (WireGuard protocol).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Issue: TV Guide (EPG) Not Loading or Blank</span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                <strong>Fix:</strong> Navigate to Settings &gt; EPG in your IPTV player and click <strong>&quot;Update TV Guide&quot;</strong> or <strong>&quot;Clear EPG Cache&quot;</strong>. Ensure your device time and timezone match your local region.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Issue: Audio and Video Out of Sync</span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                <strong>Fix:</strong> Switch your player&apos;s decoder setting from Software to <strong>Hardware (ExoPlayer)</strong> or <strong>VLC</strong>. Most modern streaming hardware (Firestick 4K, Shield) provides dedicated audio sync chips.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Issue: &quot;Playlist Cannot Be Loaded&quot; or Error 401/403</span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                <strong>Fix:</strong> Verify there are no accidental spaces in your Username, Password, or Server URL. Ensure you have not exceeded your simultaneous active connection limit.
              </p>
            </div>
          </div>
        </div>

        {/* Informational SEO Content Section */}
        <div className="max-w-4xl mx-auto space-y-10 text-slate-800 font-sans leading-relaxed mb-20 border-t border-slate-200 pt-16">
          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Is IPTV legal?</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  IPTV is standard Internet Protocol Television technology used globally by millions of households. Streamora IPTV operates a high-speed streaming infrastructure delivering licensed streams and public broadcasts directly to your devices.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Can I record live TV shows on IPTV?</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Yes! Apps like TiviMate Premium and IPTV Smarters allow live TV recording and scheduled DVR recording directly to your device storage or external USB drive.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links Navigation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-headline text-xl text-slate-900 mb-3">Explore Setup Guides &amp; Pricing</h3>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <Link href="/iptv-subscription" className="text-red-600 hover:underline font-bold">
                → Buy IPTV Subscription
              </Link>
              <Link href="/iptv-plans" className="text-red-600 hover:underline font-bold">
                → Compare IPTV Plans
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
