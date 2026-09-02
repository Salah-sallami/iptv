import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="bg-slate-900 text-white py-2 px-4 text-xs font-mono border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap text-[11px]">
          <div className="flex items-center gap-1.5 text-red-400 font-bold">
            <span>🍁</span>
            <span>OFFICIAL <strong>CANADIAN 4K IPTV</strong></span>
          </div>
          <span className="hidden md:inline text-slate-700">|</span>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <span>⚡</span>
            <span>INSTANT 5-MIN ACTIVATION</span>
          </div>
          <span className="hidden lg:inline text-slate-700">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-emerald-400 font-bold">
            <span>✦</span>
            <span>ANTI-FREEZE 9.8™ TECH &bull; 99.9% UPTIME</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>4K SERVERS ONLINE</span>
          </div>
          <Link
            href="/iptv-plans"
            className="text-red-400 hover:text-red-300 font-extrabold uppercase text-[11px] flex items-center gap-1 group"
          >
            <span>View IPTV Plans</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
