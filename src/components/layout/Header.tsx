"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown,
  Tv,
  Monitor,
  Layers,
  Smartphone
} from "lucide-react";
import TopBanner from "./TopBanner";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/iptv-subscription", label: "Subscription" },
    { href: "/iptv-plans", label: "Plans" },
    { href: "/channels", label: "Channels (25k+)" },
    { href: "/sports", label: "Live Sports" },
    { href: "/iptv-setup", label: "Setup" },
    { href: "/iptv-guide", label: "Guide" },
    { href: "/blog", label: "Blog" },
  ];

  const deviceLinks = [
    { href: "/iptv-for-firestick", label: "Amazon Firestick 4K", icon: Tv },
    { href: "/iptv-for-smart-tv", label: "Samsung & LG Smart TV", icon: Monitor },
    { href: "/iptv-for-android-tv", label: "Android TV & Shield", icon: Layers },
    { href: "/iptv-for-google-tv", label: "Google TV & Chromecast", icon: Smartphone },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xs">
      <TopBanner />
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl sm:text-3xl font-black font-headline tracking-wider text-slate-900 group-hover:text-red-600 transition-colors">
              STREAMORA<span className="text-red-600">.IPTV</span>
            </span>
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-mono font-bold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              <span>4K LIVE STREAMING</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 px-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive(link.href)
                    ? "text-red-600 bg-red-50 font-black"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown for Devices */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all">
                <span>Devices</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute right-0 mt-2 w-64 py-2 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="px-4 py-1.5 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Device Setup Guides
                </div>
                {deviceLinks.map((dev) => {
                  const Icon = dev.icon;
                  return (
                    <Link
                      key={dev.href}
                      href={dev.href}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-700 hover:text-red-600 hover:bg-slate-50 font-medium transition-colors"
                    >
                      <Icon className="w-4 h-4 text-slate-400" />
                      <span>{dev.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Signature Pill CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/iptv-plans"
              className="inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-red-600/20 hover:scale-105 active:scale-95 transition-all group"
            >
              <span>Get Instant Access</span>
              <div className="w-7 h-7 rounded-full bg-white text-red-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/iptv-plans"
              className="px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-black uppercase sm:hidden"
            >
              Plans
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-6 space-y-2 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive(link.href)
                    ? "text-red-600 bg-red-50 font-black"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-slate-100">
              <div className="px-4 py-1.5 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                Device Guides
              </div>
              {deviceLinks.map((dev) => (
                <Link
                  key={dev.href}
                  href={dev.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                >
                  → {dev.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3 px-2">
              <Link
                href="/iptv-plans"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <span>View IPTV Plans &amp; Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
