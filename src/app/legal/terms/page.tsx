import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
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
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Terms &amp; Conditions</h1>
              <p className="text-xs text-slate-400">Effective Date: January 1, 2026</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-white">1. Service Agreement</h3>
          <p>
            By subscribing to Streamora IPTV (streamoraiptv.com), you agree to these Terms and Conditions. Our services provide access to video streaming playlists and software configuration data for personal, non-commercial entertainment use.
          </p>

          <h3 className="text-lg font-bold text-white">2. Device Usage &amp; Simultaneous Connections</h3>
          <p>
            Subscriptions are limited to the exact number of active simultaneous connections purchased (1, 2, 3, or 4 devices). Exceeding your purchased device limit simultaneously may result in automatic stream buffering or temporary account suspension by the load balancer.
          </p>

          <h3 className="text-lg font-bold text-white">3. Network Speed &amp; ISP Requirements</h3>
          <p>
            For optimal 4K Ultra HD and FHD streaming performance, a stable high-speed broadband or fiber internet connection with a minimum download speed of 25 Mbps is recommended.
          </p>

          <h3 className="text-lg font-bold text-white">4. Order &amp; Payment Terms</h3>
          <p>
            All plans are priced in Canadian Dollars (CAD). Orders are confirmed directly via our official WhatsApp support channel. We do not store financial cards or conduct automated recurring electronic billing on this website.
          </p>
        </div>

      </div>
    </div>
  );
}
