import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Tv } from "lucide-react";
import { DEVICES_LIST } from "@/data/devices";

export default function InstallationGuideHub() {
  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" />
            <span>COMPLETE SETUP TUTORIALS</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl tracking-tight leading-none text-slate-900">
            HOW TO SET UP IPTV IN 5 MINUTES
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-sans">
            Choose your device below for step-by-step instructions. Our Canadian support team is also available 24/7.
          </p>
        </div>

        {/* Downloader Code Banner */}
        <div className="card-light p-8 max-w-3xl mx-auto mb-16 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-red-50/50 shadow-md rounded-3xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 font-bold text-2xl shadow-xs">
              🔥
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-0.5">
                FIRESTICK &bull; DOWNLOADER CODE
              </span>
              <h3 className="font-headline text-3xl text-slate-900">
                SHORTCODE: 289411
              </h3>
              <p className="text-xs text-slate-600 font-sans mt-0.5">
                Enter code <strong className="text-slate-900 font-mono">289411</strong> in the Downloader app to install TiviMate &amp; Smarters.
              </p>
            </div>
          </div>
          
          <Link
            href="/installation-guide/amazon-firestick"
            className="btn-pill-red text-xs group shrink-0"
          >
            <span>Firestick Guide</span>
            <div className="btn-circle-icon">
              <ArrowRight className="w-3.5 h-3.5 text-red-600" />
            </div>
          </Link>
        </div>

        {/* Device Cards 6-Grid with Image Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {DEVICES_LIST.map((device, index) => (
            <div
              key={device.id}
              className="card-light p-6 sm:p-7 flex flex-col justify-between group hover:border-red-300 transition-all bg-white shadow-sm hover:shadow-md rounded-3xl"
            >
              <div>
                {/* Device Hardware Image Header */}
                <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 shadow-inner">
                  <img
                    src={device.imageUrl}
                    alt={device.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                  {/* Top Bar over image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-mono font-black px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                      0{index + 1}
                    </span>

                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-red-600 text-white shadow-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{device.setupTime}</span>
                    </span>
                  </div>

                  {/* Bottom Category Badge over image */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-slate-900 border border-slate-200 uppercase tracking-wider font-mono shadow-xs backdrop-blur-xs">
                      {device.badge || "Universal Support"}
                    </span>
                  </div>
                </div>

                {/* Device Title */}
                <h3 className="font-headline text-3xl text-slate-900 tracking-wide mb-2 group-hover:text-red-600 transition-colors">
                  {device.name}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6">
                  {device.summary}
                </p>

                {/* Recommended Apps */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Recommended Apps:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {device.popularApps.map((app, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Read Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase group-hover:text-red-600 transition-colors">
                  Read Step-by-Step
                </span>
                <Link
                  href={`/installation-guide/${device.slug}`}
                  className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-red-600 group-hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-xs"
                  aria-label={`Open ${device.name} installation guide`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
