"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CHANNEL_CATEGORIES, SAMPLE_CHANNELS } from "@/data/channels";

export default function ChannelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [qualityFilter, setQualityFilter] = useState<"ALL" | "4K" | "FHD">("ALL");

  const filteredChannels = useMemo(() => {
    return SAMPLE_CHANNELS.filter((channel) => {
      const matchesCat = selectedCategory === "all" || channel.category === selectedCategory;
      const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            channel.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            channel.language.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesQuality = qualityFilter === "ALL" || channel.quality === qualityFilter;
      return matchesCat && matchesSearch && matchesQuality;
    });
  }, [selectedCategory, searchQuery, qualityFilter]);

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>25,000+ CHANNELS &bull; 120,000+ VOD</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl tracking-tight leading-none text-slate-900">
            LIVE CHANNEL CATALOGUE
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-sans">
            Search our broadcast library including Canadian regional feeds, live sports (TSN, Sportsnet, RDS), US networks, and international 4K feeds.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-6 rounded-3xl card-light border border-slate-200 mb-10 space-y-6 bg-slate-50">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search channel (e.g. TSN, Sportsnet, RDS, CBC)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-full pl-11 pr-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 font-mono shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-900 font-mono"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Quality Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-xs font-mono text-slate-600 font-bold hidden sm:inline">QUALITY:</span>
              <div className="inline-flex p-1 rounded-full bg-white border border-slate-200 shadow-xs">
                {(["ALL", "4K", "FHD"] as const).map((q) => (
                  <button
                    key={q}
                    onClick={() => setQualityFilter(q)}
                    className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                      qualityFilter === q
                        ? "bg-red-600 text-white font-black shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-t border-slate-200 pt-4">
            {CHANNEL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white font-black shadow-xs"
                    : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-slate-500">
          <div>
            Showing <strong className="text-slate-900">{filteredChannels.length}</strong> matching channels
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>ALL FEEDS ACTIVE 24/7</span>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {filteredChannels.map((channel) => (
            <div
              key={channel.id}
              className="card-light p-4 flex items-center justify-between gap-3 border border-slate-200 hover:border-red-300 transition-all group bg-white"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-[10px] text-red-600 shrink-0 font-mono overflow-hidden text-center px-1 uppercase select-none tracking-tight">
                  <span className="truncate max-w-full">{channel.logoText}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-red-600 transition-colors">
                    {channel.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 truncate">
                    <span>{channel.country}</span>
                    <span>•</span>
                    <span>{channel.language}</span>
                  </div>
                </div>
              </div>

              <span
                className={`text-[10px] font-mono font-black px-2 py-0.5 rounded ${
                  channel.quality === "4K"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-slate-100 text-slate-700 border border-slate-200"
                }`}
              >
                {channel.quality}
              </span>
            </div>
          ))}
        </div>

        {/* Plans banner */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 text-center max-w-4xl mx-auto space-y-6 bg-slate-50">
          <h3 className="font-headline text-4xl text-slate-900">
            READY TO WATCH 25,000+ LIVE CHANNELS?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-sans">
            Instant 5-minute activation with full access to live sports, movies, and TV shows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="btn-pill-red text-xs group"
            >
              <span>View Plans &amp; Pricing</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>
            <Link
              href="/sports"
              className="btn-pill-outline text-xs group"
            >
              <span>Explore Live Sports</span>
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
