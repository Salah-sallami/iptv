"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Trophy, Tv, Clock, CheckCircle2 } from "lucide-react";

export default function ScheduleRibbon() {
  const [selectedDay, setSelectedDay] = useState("aujourdhui");

  const days = [
    { id: "lun", label: "Lun", date: "20", sub: "LNH" },
    { id: "mar", label: "Mar", date: "21", sub: "Champions" },
    { id: "mer", label: "Mer", date: "22", sub: "NBA" },
    { id: "jeu", label: "Jeu", date: "23", sub: "NFL" },
    { id: "aujourdhui", label: "Ven", date: "24", sub: "PPV / UFC" },
    { id: "sam", label: "Sam", date: "25", sub: "Hockey Night" },
    { id: "dim", label: "Dim", date: "26", sub: "Premier League" },
  ];

  const scheduledEvents = [
    {
      time: "19:00 EST",
      event: "Montréal Canadiens vs. Toronto Maple Leafs",
      channel: "RDS 4K / TSN 4K",
      category: "LNH Hockey",
      status: "Direct 4K"
    },
    {
      time: "20:30 EST",
      event: "UFC Main Event: Championship Fight Card",
      channel: "UFC PPV 4K",
      category: "Pay-Per-View",
      status: "Inclus Gratuitement"
    },
    {
      time: "21:00 EST",
      event: "HBO Max Premiere: Nouveau Box-Office",
      channel: "Crave 1 / HBO Canada",
      category: "Cinéma Exclusif",
      status: "VOD 4K"
    },
  ];

  return (
    <section className="mb-14">
      
      {/* Section Header matching "À l'horaire" from reference */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-cinema-title text-3xl sm:text-4xl text-white tracking-tight">
            À l&apos;horaire
          </h2>
          <p className="text-xs text-slate-400 font-sans mt-0.5">
            Sélectionnez un jour pour voir les diffusions sportives en direct, séries et événements spéciaux.
          </p>
        </div>

        <Link
          href="/sports"
          className="text-xs font-mono font-bold text-orchid-400 hover:text-orchid-300 transition-colors flex items-center gap-1 uppercase tracking-wider"
        >
          <span>Voir horaire complet</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Day Selector Ribbon matching reference */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6">
        {days.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDay(d.id)}
            className={`px-4 py-3 rounded-2xl flex flex-col items-center min-w-[76px] transition-all ${
              selectedDay === d.id
                ? "bg-orchid-600 text-white shadow-lg shadow-orchid-600/30 scale-105 font-black border border-orchid-400"
                : "bg-obsidian-900 text-slate-400 hover:text-white hover:bg-white/5 border border-white/10"
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">{d.label}</span>
            <span className="font-headline text-2xl leading-tight">{d.date}</span>
            <span className="text-[9px] font-mono truncate max-w-[65px] opacity-70">{d.sub}</span>
          </button>
        ))}
      </div>

      {/* Schedule Items List */}
      <div className="space-y-3">
        {scheduledEvents.map((item, index) => (
          <div
            key={index}
            className="card-obsidian p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10 hover:border-orchid-500/40 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 rounded-xl bg-black border border-white/10 text-orchid-400 font-mono text-xs font-bold shrink-0">
                {item.time}
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white">
                  {item.event}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span className="text-orchid-300 font-bold">{item.channel}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {item.status}
              </span>
              <Link
                href="/sports"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-orchid-600 text-white text-xs font-bold transition-colors"
              >
                Regarder
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
