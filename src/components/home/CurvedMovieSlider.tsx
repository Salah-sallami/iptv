"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Pause,
  Star, 
  X,
  Volume2,
  Globe,
  Film,
  Tv,
  Sparkles,
  Zap,
  RotateCw,
  Info
} from "lucide-react";
import { VodItem, RECENT_VOD_DATA } from "@/data/vod";

export default function CurvedMovieSlider() {
  const [items, setItems] = useState<VodItem[]>(RECENT_VOD_DATA);
  const [category, setCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedMovie, setSelectedMovie] = useState<VodItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [slideSpeed, setSlideSpeed] = useState<number>(3800); // ms per slide
  const [progress, setProgress] = useState<number>(0);

  // Dynamic 3D Mouse Parallax Tilt
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Drag tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);

  // Fetch recent movies/series from API
  useEffect(() => {
    async function fetchVod() {
      try {
        const res = await fetch(`/api/vod/recent?category=${category}`);
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setItems(json.data);
            setCurrentIndex(0);
            setProgress(0);
          }
        }
      } catch (err) {
        console.error("Failed to load VOD API data", err);
      }
    }
    fetchVod();
  }, [category]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setProgress(0);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setProgress(0);
  }, [items.length]);

  // Dynamically jump/transfer directly to a clicked card
  const handleCardClick = (relativePos: number, item: VodItem) => {
    if (relativePos === 0) {
      setSelectedMovie(item);
    } else {
      setCurrentIndex((prev) => (prev + relativePos + items.length * 100) % items.length);
      setProgress(0);
    }
  };

  // Continuous Progress & Auto-Slide Engine
  useEffect(() => {
    if (!isPlaying || items.length === 0) return;

    const interval = 40;
    const step = (interval / slideSpeed) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, items.length, slideSpeed, handleNext]);

  // Keyboard Navigation (Left / Right Arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Mouse Parallax Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Touch and drag handlers for smooth manual gestures
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchStartX.current = clientX;
    touchEndX.current = clientX;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchEndX.current = clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 40) {
        handleNext();
      } else if (diff < -40) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Helper to retrieve visible 7 items around current index
  const getVisibleItems = () => {
    if (items.length === 0) return [];
    const visible = [];
    const count = 7;
    const offset = Math.floor(count / 2); // 3 on left, 1 center, 3 on right

    for (let i = -offset; i <= offset; i++) {
      const idx = (currentIndex + i + items.length * 100) % items.length;
      visible.push({
        item: items[idx],
        relativePos: i, // -3, -2, -1, 0, 1, 2, 3
      });
    }
    return visible;
  };

  // 3D curved perspective matrix with smooth interpolated curve
  const getCardTransformStyle = (pos: number) => {
    const tiltX = mouseOffset.y * -3;
    const tiltY = mouseOffset.x * 5;

    switch (pos) {
      case -3:
        return {
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${28 + tiltY}deg) scale(1.18) translateY(-4px)`,
          opacity: 0.82,
          filter: "brightness(0.85) saturate(0.9)",
          zIndex: 10,
        };
      case -2:
        return {
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${18 + tiltY}deg) scale(1.05) translateY(0px)`,
          opacity: 0.92,
          filter: "brightness(0.92)",
          zIndex: 20,
        };
      case -1:
        return {
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${9 + tiltY}deg) scale(0.96) translateY(4px)`,
          opacity: 1,
          filter: "brightness(0.98)",
          zIndex: 30,
        };
      case 0: // Center spotlight card
        return {
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${0 + tiltY}deg) scale(0.94) translateY(6px)`,
          opacity: 1,
          filter: "brightness(1.05) saturate(1.1)",
          zIndex: 40,
        };
      case 1:
        return {
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${-9 + tiltY}deg) scale(0.96) translateY(4px)`,
          opacity: 1,
          filter: "brightness(0.98)",
          zIndex: 30,
        };
      case 2:
        return {
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${-18 + tiltY}deg) scale(1.05) translateY(0px)`,
          opacity: 0.92,
          filter: "brightness(0.92)",
          zIndex: 20,
        };
      case 3:
        return {
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${-28 + tiltY}deg) scale(1.18) translateY(-4px)`,
          opacity: 0.82,
          filter: "brightness(0.85) saturate(0.9)",
          zIndex: 10,
        };
      default:
        return { transform: "none", opacity: 0, zIndex: 0 };
    }
  };

  const visibleSlots = getVisibleItems();

  return (
    <section 
      ref={containerRef}
      className="bg-white text-slate-900 py-20 lg:py-28 relative overflow-hidden border-b border-slate-200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Dynamic Background Ambient Lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-100/50 blur-[160px] rounded-full pointer-events-none -z-10 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mouseOffset.x * 40}px), ${mouseOffset.y * 30}px)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference Layout */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span>BEHIND THE SCREENS &bull; 120,000+ TITLES</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl tracking-tight leading-none text-slate-900">
            CURIOUS WHAT ELSE YOU CAN <span className="text-red-600">STREAM?</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            Explore 120,000+ on-demand movies, latest cinema blockbusters, HBO Max hits, and Canadian series updated in 4K UHD daily.
          </p>

          {/* CTA and Dynamic Interactive Controls */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/channels"
              className="btn-pill-red text-xs group shadow-md"
            >
              <span>Explore All 120k+ Titles</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>

            {/* Dynamic Playback & Speed Controls */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200 shadow-xs font-mono text-xs">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-full transition-colors ${
                  isPlaying ? "bg-white text-slate-900 shadow-xs" : "bg-red-600 text-white"
                }`}
                title={isPlaying ? "Pause smooth auto-glide" : "Play smooth auto-glide"}
                aria-label="Toggle dynamic playback"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => {
                  const speeds = [5000, 3800, 2200];
                  const nextIdx = (speeds.indexOf(slideSpeed) + 1) % speeds.length;
                  setSlideSpeed(speeds[nextIdx]);
                  setProgress(0);
                }}
                className="px-3 py-1 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold border border-slate-200 transition-colors"
                title="Change slide animation speed"
              >
                {slideSpeed === 2200 ? "⚡ FAST" : slideSpeed === 3800 ? "SMOOTH" : "CINEMATIC"}
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {[
              { id: "all", label: "All Releases" },
              { id: "blockbuster", label: "4K Blockbusters" },
              { id: "series", label: "Trending Series" },
              { id: "quebec", label: "Québec Cinema (VFQ)" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                  category === cat.id
                    ? "bg-slate-900 text-white shadow-xs scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* 3D Curved Perspective Panoramic Carousel with Silky-Smooth Animations */}
        <div 
          className="relative my-8 py-6 overflow-hidden select-none cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
          
          {/* Dynamic Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/95 border border-slate-300 shadow-xl text-slate-800 hover:text-red-600 hover:scale-110 active:scale-95 flex items-center justify-center transition-all backdrop-blur-md"
            aria-label="Previous movie"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/95 border border-slate-300 shadow-xl text-slate-800 hover:text-red-600 hover:scale-110 active:scale-95 flex items-center justify-center transition-all backdrop-blur-md"
            aria-label="Next movie"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* 3D Curved Arc Container */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 min-h-[360px] sm:min-h-[440px] px-4 perspective-[1200px]">
            {visibleSlots.map(({ item, relativePos }) => {
              const transformStyle = getCardTransformStyle(relativePos);
              const isCenter = relativePos === 0;

              return (
                <div
                  key={`${item.id}-${relativePos}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(relativePos, item);
                  }}
                  style={{
                    ...transformStyle,
                    transition: "transform 0.75s cubic-bezier(0.2, 0.9, 0.25, 1), opacity 0.75s ease, filter 0.75s ease",
                    willChange: "transform, opacity, filter",
                  }}
                  className={`relative shrink-0 w-[130px] sm:w-[170px] md:w-[210px] h-[230px] sm:h-[300px] md:h-[370px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border-2 ${
                    isCenter 
                      ? "border-red-500 shadow-red-500/25 ring-4 ring-red-500/20" 
                      : "border-white/80 hover:border-red-400"
                  }`}
                  title={isCenter ? "Click to view full details" : "Click to glide to center"}
                >
                  {/* Smooth Animated Image Wrapper with Ken-Burns Drift */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={item.posterUrl}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                        isCenter 
                          ? "scale-108 animate-pulse-subtle" 
                          : "scale-100 group-hover:scale-106"
                      }`}
                      style={{
                        transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
                        willChange: "transform",
                      }}
                      loading="lazy"
                    />

                    {/* Smooth Sheen / Light Reflection Sweep for Spotlight Card */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-60 mix-blend-overlay"></div>
                    )}
                  </div>

                  {/* Gradient Lighting & Metadata */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent flex flex-col justify-between p-3 sm:p-4 text-white">
                    
                    {/* Top Badges */}
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-[10px] font-mono font-black px-2 py-0.5 rounded-full bg-red-600/95 text-white backdrop-blur-xs shadow-xs">
                        {item.quality}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-mono font-bold bg-black/70 px-2 py-0.5 rounded-full backdrop-blur-xs text-amber-400 border border-white/10">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-red-400 font-bold uppercase tracking-wider">
                        {item.category === "series" ? (
                          <>
                            <Tv className="w-2.5 h-2.5" />
                            <span>TV SERIES</span>
                          </>
                        ) : (
                          <>
                            <Film className="w-2.5 h-2.5" />
                            <span>FEATURE FILM</span>
                          </>
                        )}
                      </div>
                      <h3 className="font-headline text-lg sm:text-2xl text-white leading-tight drop-shadow-md group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
                        <span>{item.year}</span>
                        <span>{item.duration}</span>
                      </div>

                      {/* Smooth Animation Progress Bar for Center Spotlight Card */}
                      {isCenter && isPlaying && (
                        <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mt-2">
                          <div 
                            className="bg-red-500 h-full transition-all duration-75 ease-linear rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Dynamic Hover Action Badge */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="w-13 h-13 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform duration-300">
                      {isCenter ? <Info className="w-5 h-5" /> : <RotateCw className="w-5 h-5" />}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Smooth Interactive Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-6">
            {items.map((it, i) => (
              <button
                key={it.id}
                onClick={() => {
                  setCurrentIndex(i);
                  setProgress(0);
                }}
                className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                  currentIndex === i
                    ? "w-8 bg-red-600 shadow-xs"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Transfer smoothly to slide ${i + 1}`}
                title={it.title}
              />
            ))}
          </div>

        </div>

        {/* 4 Feature Pillars Matching Reference Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-200">
          
          <div className="text-center sm:text-left space-y-1">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              # 01
            </span>
            <h4 className="font-headline text-xl text-slate-900">4K ULTRA HD &amp; HDR</h4>
            <p className="text-xs text-slate-600 font-sans">Crystal clear 4K 60FPS streams with Dolby Atmos audio.</p>
          </div>

          <div className="text-center sm:text-left space-y-1">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              # 02
            </span>
            <h4 className="font-headline text-xl text-slate-900">DAILY CINEMA RELEASES</h4>
            <p className="text-xs text-slate-600 font-sans">New movies added within hours of digital premiere.</p>
          </div>

          <div className="text-center sm:text-left space-y-1">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              # 03
            </span>
            <h4 className="font-headline text-xl text-slate-900">MULTI-AUDIO &amp; VFQ</h4>
            <p className="text-xs text-slate-600 font-sans">English &amp; French Canadian dubs with multi-subs.</p>
          </div>

          <div className="text-center sm:text-left space-y-1">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              # 04
            </span>
            <h4 className="font-headline text-xl text-slate-900">1-CLICK INSTANT PLAY</h4>
            <p className="text-xs text-slate-600 font-sans">Zero buffer playback across all TV apps &amp; boxes.</p>
          </div>

        </div>

      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="card-light w-full max-w-2xl bg-white border border-slate-200 overflow-hidden shadow-2xl rounded-3xl relative animate-in zoom-in-95 duration-200">
            
            {/* Backdrop Cover */}
            <div className="relative h-48 sm:h-64 w-full overflow-hidden">
              <img
                src={selectedMovie.backdropUrl}
                alt={selectedMovie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
              
              <button
                onClick={() => setSelectedMovie(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center transition-all shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-mono text-[10px] font-bold">
                      {selectedMovie.quality}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-800 bg-white/90 px-2 py-0.5 rounded-full">
                      {selectedMovie.year} &bull; {selectedMovie.duration}
                    </span>
                  </div>
                  <h3 className="font-headline text-3xl sm:text-4xl text-slate-900 drop-shadow-xs">
                    {selectedMovie.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-900 border border-slate-200 shadow-xs font-mono text-xs font-bold">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{selectedMovie.rating} / 10</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
                {selectedMovie.synopsis}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-slate-500 flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-red-600" />
                    <span>AUDIO TRACKS</span>
                  </div>
                  <div className="font-bold text-slate-800">
                    {selectedMovie.audioTracks.join(", ")}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-slate-500 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-600" />
                    <span>SUBTITLES</span>
                  </div>
                  <div className="font-bold text-slate-800">
                    {selectedMovie.subtitles.join(", ")}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedMovie(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 font-mono"
                >
                  Close
                </button>
                <Link
                  href="/pricing"
                  className="btn-pill-red text-xs group w-full sm:w-auto text-center justify-center"
                >
                  <span>Start Streaming in 4K</span>
                  <div className="btn-circle-icon">
                    <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                  </div>
                </Link>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
