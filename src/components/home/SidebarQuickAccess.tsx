"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight, Calendar, Sparkles, Film, Trophy, Menu } from "lucide-react";
import { getWhatsAppPlanUrl } from "@/lib/constants";

export default function SidebarQuickAccess() {
  const [selectedDevice, setSelectedDevice] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<string>("12m");

  const miniPosters = [
    { title: "POET", tag: "Ciné", bg: "bg-red-900/80", text: "POET" },
    { title: "FOREVER", tag: "4K", bg: "bg-sky-900/80", text: "SUPER" },
    { title: "DOMINGOS", tag: "VOD", bg: "bg-purple-900/80", text: "CLUB" },
    { title: "LE FIL", tag: "Drame", bg: "bg-slate-900", text: "FIL" },
    { title: "MON PÈRE", tag: "Québec", bg: "bg-orange-950", text: "PÈRE" },
    { title: "BLEUET", tag: "Sports", bg: "bg-blue-950", text: "TSN" },
    { title: "ALGER", tag: "Action", bg: "bg-emerald-950", text: "ALGER" },
    { title: "SICARIO", tag: "4K", bg: "bg-rose-950", text: "4K" },
    { title: "RDS LIVE", tag: "LNH", bg: "bg-red-950", text: "RDS" },
  ];

  return (
    <div className="sidebar-cinema-panel p-6 sm:p-7 flex flex-col justify-between space-y-6 text-black border border-black/10">
      
      {/* Top Slanted Brand Mark matching CINEMA CINEMA */}
      <div className="flex items-center justify-between">
        <div className="brand-slanted-box">
          <div className="text-xl tracking-wider leading-none">IPTV CANADA</div>
          <div className="text-xl tracking-wider leading-none text-orchid-400">4K STREAMING</div>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>SERVEURS ACTIFS</span>
        </div>
      </div>

      {/* Nav Pills Bar in Sidebar */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
        <Link href="/channels" className="flex-1 py-1.5 px-2 text-center rounded-lg bg-white shadow-xs text-black hover:text-orchid-600 transition-colors">
          Films &amp; VOD
        </Link>
        <Link href="/sports" className="flex-1 py-1.5 px-2 text-center rounded-lg text-slate-600 hover:text-black transition-colors">
          Événements
        </Link>
        <Link href="/pricing" className="py-1.5 px-2.5 rounded-lg text-slate-600 hover:text-black">
          <Menu className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* "Horaire et billets / Forfaits & Accès" */}
      <div className="space-y-4 pt-1">
        <div className="flex items-center justify-between">
          <h4 className="font-headline text-2xl tracking-wide text-black">
            HORAIRE ET BILLETS
          </h4>
          <span className="text-[10px] font-mono text-slate-500 font-bold">PRIX EN CAD</span>
        </div>

        {/* Location / Device Selector Tiles matching reference */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
            📍 Choisir le nombre d&apos;écrans :
          </span>

          <div className="grid grid-cols-3 gap-2">
            
            {/* Tile 1: 1 Screen */}
            <button
              onClick={() => setSelectedDevice(1)}
              className={`p-3 rounded-2xl text-center flex flex-col items-center justify-between transition-all ${
                selectedDevice === 1
                  ? "bg-orchid-600 text-white shadow-md ring-2 ring-orchid-600"
                  : "bg-pastel-blue text-slate-800 hover:opacity-90"
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-black/10 flex items-center justify-center font-black text-xs mb-1">
                {selectedDevice === 1 ? <Check className="w-4 h-4 text-white" /> : "1"}
              </div>
              <span className="text-[11px] font-extrabold leading-tight">1 Écran</span>
              <span className="text-[9px] opacity-80">$19/m</span>
            </button>

            {/* Tile 2: 2 Screens */}
            <button
              onClick={() => setSelectedDevice(2)}
              className={`p-3 rounded-2xl text-center flex flex-col items-center justify-between transition-all ${
                selectedDevice === 2
                  ? "bg-orchid-600 text-white shadow-md ring-2 ring-orchid-600"
                  : "bg-pastel-peach text-slate-800 hover:opacity-90"
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-black/10 flex items-center justify-center font-black text-xs mb-1">
                {selectedDevice === 2 ? <Check className="w-4 h-4 text-white" /> : "2"}
              </div>
              <span className="text-[11px] font-extrabold leading-tight">2 Écrans</span>
              <span className="text-[9px] opacity-80">$34/m</span>
            </button>

            {/* Tile 3: 4 Screens VIP */}
            <button
              onClick={() => setSelectedDevice(4)}
              className={`p-3 rounded-2xl text-center flex flex-col items-center justify-between transition-all ${
                selectedDevice === 4
                  ? "bg-orchid-600 text-white shadow-md ring-2 ring-orchid-600"
                  : "bg-slate-200 text-slate-800 hover:opacity-90"
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-black/10 flex items-center justify-center font-black text-xs mb-1">
                {selectedDevice === 4 ? <Check className="w-4 h-4 text-white" /> : "4"}
              </div>
              <span className="text-[11px] font-extrabold leading-tight">4 Écrans</span>
              <span className="text-[9px] opacity-80">$55/m</span>
            </button>

          </div>
        </div>

        {/* Date / Plan Dropdown Pill matching reference */}
        <div className="pt-1">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-bold">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar className="w-4 h-4 text-orchid-600" />
              <span>Forfait :</span>
            </div>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="bg-transparent text-black font-extrabold text-xs focus:outline-none cursor-pointer"
            >
              <option value="12m">12 Mois (79$ CAD - Meilleure Valeur)</option>
              <option value="6m">6 Mois (49$ CAD)</option>
              <option value="3m">3 Mois (29$ CAD)</option>
              <option value="1m">1 Mois (19$ CAD)</option>
            </select>
          </div>
        </div>

        {/* Instant Checkout CTA */}
        <a
          href={getWhatsAppPlanUrl(selectedPlan === "12m" ? "12 Months" : selectedPlan === "6m" ? "6 Months" : selectedPlan === "3m" ? "3 Months" : "1 Month", selectedDevice)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-2xl bg-black hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg group"
        >
          <span>Commander sur WhatsApp</span>
          <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* "À l'affiche" Mini Poster Matrix matching reference bottom-right */}
      <div className="pt-2 border-t border-slate-200 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-headline text-xl text-black">À L&apos;AFFICHE (25K+ CANAUX)</h4>
          <Link href="/channels" className="text-[11px] font-bold text-orchid-600 hover:underline">
            Tout voir
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {miniPosters.map((poster, index) => (
            <div
              key={index}
              className={`${poster.bg} rounded-xl aspect-[3/4] p-2 flex flex-col justify-between text-white relative overflow-hidden group hover:scale-105 transition-transform shadow-xs`}
            >
              <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-xs w-fit">
                {poster.tag}
              </span>
              <span className="font-headline text-sm tracking-wide leading-none truncate">
                {poster.title}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
