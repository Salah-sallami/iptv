import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function DmcaPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
          <div className="flex items-center gap-3 border-b border-white/10 pb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">DMCA Copyright Notice &amp; Takedown Policy</h1>
              <p className="text-xs text-slate-400">Last updated: January 2026</p>
            </div>
          </div>

          <p>
            Streamora IPTV (streamoraiptv.com) respects the intellectual property rights of others and adheres strictly to the Digital Millennium Copyright Act (&ldquo;DMCA&rdquo;) and international copyright provisions.
          </p>

          <h3 className="text-lg font-bold text-white pt-2">1. No Content Hosted on Servers</h3>
          <p>
            Streamora IPTV does not host, upload, store, archive, or transmit any video files, media content, or live streams on its servers. All streams and video files referenced are freely accessible via third-party web protocols and external indexers over the public internet.
          </p>

          <h3 className="text-lg font-bold text-white pt-2">2. Filing a DMCA Notice</h3>
          <p>
            If you are a copyright owner or authorized representative and believe that any index link accessible via our service infringes your copyright, please provide a written notification containing:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>Physical or electronic signature of the authorized copyright holder.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the specific URL or stream identifier.</li>
            <li>Your contact details including telephone number, mailing address, and valid email address.</li>
            <li>A statement of good faith belief that the disputed use is not authorized.</li>
          </ul>

          <h3 className="text-lg font-bold text-white pt-2">3. Designated Agent Contact</h3>
          <p>
            Please direct all official copyright inquiries to our designated DMCA agent at: <strong className="text-sky-400 font-mono">dmca@streamoraiptv.com</strong>. Takedown requests are reviewed and processed within 24 to 48 business hours.
          </p>
        </div>

      </div>
    </div>
  );
}
