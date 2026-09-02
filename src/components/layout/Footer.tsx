import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Clock, MessageCircle, Tv, ShieldCheck } from "lucide-react";
import { CANADIAN_CITIES } from "@/data/cities";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Strip */}
        <div className="p-8 rounded-3xl bg-slate-800/80 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              ✦
            </div>
            <div>
              <h4 className="font-headline text-2xl text-white">STREAMORA IPTV &bull; 99.9% UPTIME &bull; 4K UHD</h4>
              <p className="text-xs text-slate-300 font-sans">Anti-Freeze 9.8™ technology, 25,000+ live TV channels, and 24/7 dedicated customer care.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold">
              ⚡ 5-MIN ACTIVATION
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold">
              💬 24/7 WHATSAPP CARE
            </span>
          </div>
        </div>

        {/* Main Grid: 5 Categorized Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black font-headline tracking-wider text-white hover:text-red-400 transition-colors">
                STREAMORA<span className="text-red-500">.IPTV</span>
              </span>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-sans">
              Streamora IPTV is the premier live TV and VOD streaming provider in 2026. Delivering 25,000+ live channels, 120,000+ movies &amp; series with anti-freeze server clusters.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{SITE_CONFIG.supportEmail}</span>
              </div>
              <a 
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.whatsappNumber}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>24/7 Real-Time Customer Care</span>
              </div>
            </div>
          </div>

          {/* Col 2: IPTV Subscriptions */}
          <div>
            <h5 className="font-headline text-lg text-white mb-4 tracking-wider">
              SUBSCRIPTIONS
            </h5>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/iptv-subscription" className="hover:text-red-400 transition-colors">BUY SUBSCRIPTION</Link>
              </li>
              <li>
                <Link href="/iptv-plans" className="hover:text-red-400 transition-colors">IPTV PLANS &amp; PRICING</Link>
              </li>
              <li>
                <Link href="/channels" className="hover:text-red-400 transition-colors">25,000+ CHANNELS</Link>
              </li>
              <li>
                <Link href="/sports" className="hover:text-red-400 transition-colors">LIVE SPORTS &amp; PPV</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-red-400 transition-colors">IPTV BLOG</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Device Guides */}
          <div>
            <h5 className="font-headline text-lg text-white mb-4 tracking-wider">
              DEVICE GUIDES
            </h5>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/iptv-for-firestick" className="hover:text-red-400 transition-colors">AMAZON FIRESTICK</Link>
              </li>
              <li>
                <Link href="/iptv-for-smart-tv" className="hover:text-red-400 transition-colors">SAMSUNG &amp; LG TV</Link>
              </li>
              <li>
                <Link href="/iptv-for-android-tv" className="hover:text-red-400 transition-colors">ANDROID TV &amp; SHIELD</Link>
              </li>
              <li>
                <Link href="/iptv-for-google-tv" className="hover:text-red-400 transition-colors">GOOGLE TV &amp; CAST</Link>
              </li>
              <li>
                <Link href="/iptv-setup" className="hover:text-red-400 transition-colors">UNIVERSAL SETUP HUB</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Legal */}
          <div>
            <h5 className="font-headline text-lg text-white mb-4 tracking-wider">
              RESOURCES &amp; LEGAL
            </h5>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/iptv-guide" className="hover:text-red-400 transition-colors">IPTV GUIDE &amp; TROUBLESHOOTING</Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-red-400 transition-colors">TERMS OF SERVICE</Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-red-400 transition-colors">PRIVACY POLICY</Link>
              </li>
              <li>
                <Link href="/legal/refund" className="hover:text-red-400 transition-colors">REFUND POLICY</Link>
              </li>
              <li>
                <Link href="/legal/dmca" className="hover:text-red-400 transition-colors">DMCA NOTICE</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-8 pb-6 text-xs text-slate-400 leading-relaxed space-y-2 font-mono">
          <p>
            <strong className="text-slate-300">DISCLAIMER:</strong> Streamora IPTV does not host, broadcast, or store media files on its servers. All streams are delivered via licensed external providers. Users are responsible for complying with local regulations.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} STREAMORA IPTV (STREAMORAIPTV.COM). ALL RIGHTS RESERVED.
          </div>
          <div className="text-red-400 font-bold">
            ✦ HIGH-SPEED 4K LIVE TV STREAMING
          </div>
        </div>

      </div>
    </footer>
  );
}
