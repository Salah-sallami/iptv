import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
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
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Privacy Policy</h1>
              <p className="text-xs text-slate-400">Strict Zero-Logging &amp; Canadian Data Protection</p>
            </div>
          </div>

          <p>
            At Streamora IPTV (streamoraiptv.com), safeguarding your privacy is our top priority. We operate under strict privacy guidelines and do not monitor, inspect, store, or sell your viewing habits, device history, or personal data.
          </p>

          <h3 className="text-lg font-bold text-white">1. Information We Collect</h3>
          <p>
            We collect only the minimal necessary contact information required to dispatch and manage your subscription: your email address and preferred device type. We do not store sensitive payment card details on our servers.
          </p>

          <h3 className="text-lg font-bold text-white">2. No Activity Logging</h3>
          <p>
            Our Canadian streaming servers do not keep logs of the channels, movies, sports events, or streams you watch. Your entertainment habits remain 100% private.
          </p>

          <h3 className="text-lg font-bold text-white">3. Third-Party Sharing</h3>
          <p>
            We will never sell, lease, or distribute your email address or account details to third-party advertising brokers or marketing agencies.
          </p>
        </div>

      </div>
    </div>
  );
}
