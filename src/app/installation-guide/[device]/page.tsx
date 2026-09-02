import { notFound } from "next/navigation";
import Link from "next/link";
import { DEVICES_LIST } from "@/data/devices";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";

export function generateStaticParams() {
  return DEVICES_LIST.map((d) => ({
    device: d.slug,
  }));
}

export default function DeviceGuidePage({ params }: { params: { device: string } }) {
  const guide = DEVICES_LIST.find((d) => d.slug === params.device);

  if (!guide) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link
          href="/installation-guide"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 hover:text-red-700 mb-8 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Device Guides</span>
        </Link>

        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              SETUP GUIDE &bull; {guide.setupTime}
            </span>
            {guide.badge && (
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase">
                ★ {guide.badge}
              </span>
            )}
          </div>

          <h1 className="font-headline text-4xl sm:text-6xl tracking-tight leading-none text-slate-900">
            HOW TO SETUP ON {guide.name}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed">
            {guide.summary}
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="font-bold text-slate-700">RECOMMENDED APPS:</span>
            {guide.popularApps.map((app, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-white text-slate-900 border border-slate-200 shadow-xs">
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-16">
          {guide.steps.map((step, index) => (
            <div
              key={index}
              className="card-light p-8 border border-slate-200 relative bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white font-black text-base flex items-center justify-center shrink-0 shadow-xs">
                  0{index + 1}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-headline text-2xl text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {step.description}
                  </p>

                  {step.code && (
                    <div className="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-center justify-between gap-4 font-mono text-sm shadow-md">
                      <div className="flex items-center gap-2 text-red-400">
                        <Terminal className="w-4 h-4" />
                        <span className="font-bold text-white">{step.code}</span>
                      </div>
                    </div>
                  )}

                  {step.tips && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                      <span>{step.tips}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Xtream API box */}
        <div className="p-8 rounded-3xl card-light border border-slate-200 mb-16 space-y-4 font-mono text-xs bg-slate-50">
          <h3 className="font-headline text-2xl text-slate-900">🔑 XTREAM CODES API CREDENTIALS</h3>
          <p className="text-slate-600 font-sans">
            Your welcome email contains credentials matching this standard Xtream structure:
          </p>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 text-slate-800 shadow-xs">
            <div><span className="text-slate-400">SERVER URL:</span> <strong className="text-red-600">http://portal.streamoraiptv.com:80</strong></div>
            <div><span className="text-slate-400">USERNAME:</span> <strong className="text-slate-900">your_username</strong></div>
            <div><span className="text-slate-400">PASSWORD:</span> <strong className="text-blue-600">your_password</strong></div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 text-center space-y-6 bg-slate-50">
          <h3 className="font-headline text-4xl text-slate-900">READY TO START STREAMING?</h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-sans">
            Get instant activation in 5 minutes and 24/7 Canadian customer care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="btn-pill-red text-xs group"
            >
              <span>View Pricing Plans</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>
            <Link
              href="/channels"
              className="btn-pill-outline text-xs group"
            >
              <span>Browse 25k+ Channels</span>
              <div className="btn-circle-icon-dark">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
