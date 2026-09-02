import Link from "next/link";
import { Tv, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DeviceGrid() {
  const devices = [
    {
      id: "firetv",
      name: "Fire TV",
      slug: "amazon-firestick",
      logo: (
        <div className="flex flex-col items-center">
          <div className="flex items-center text-slate-900 group-hover:text-red-600 transition-colors font-bold text-xl sm:text-2xl font-sans tracking-tight">
            fire<span className="font-light ml-0.5">tv</span>
          </div>
          {/* Amazon smile arrow */}
          <svg className="w-10 h-2.5 text-slate-900 group-hover:text-red-600 transition-colors mt-0.5" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3C12 9 28 9 38 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M34 1L38.5 3L35.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />
          </svg>
        </div>
      ),
    },
    {
      id: "androidtv",
      name: "Android TV",
      slug: "android-tv-box",
      logo: (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-slate-900 group-hover:text-red-600 transition-colors">
            {/* Android robot head */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h4v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.72 2.24 12.88 2 12 2c-.88 0-1.72.24-2.64.63L7.88 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.67 4.37 5.4 6.04 5.08 8h13.84c-.32-1.96-1.59-3.63-3.39-4.84zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
            <span className="font-bold text-lg sm:text-xl font-sans tracking-tight">android<span className="font-light">tv</span></span>
          </div>
        </div>
      ),
    },
    {
      id: "appletv",
      name: "Apple TV",
      slug: "apple-tv-ios",
      logo: (
        <div className="flex items-center gap-1 text-slate-900 group-hover:text-red-600 transition-colors font-bold text-xl sm:text-2xl font-sans">
          {/* Apple Logo */}
          <svg className="w-5 h-5 fill-current mb-0.5" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.7-7.94-12.04-14.58-6.19-9.5-11.04-20.4-14.54-32.69-3.51-12.3-5.26-23.77-5.26-34.42 0-14.77 3.59-26.65 10.77-35.65 7.18-9 16.27-13.62 27.27-13.87 5.18 0 10.98 1.34 17.4 4.02 6.42 2.68 10.22 4.08 11.41 4.2 1.45-.25 5.48-1.74 12.08-4.47 6.6-2.73 12.2-3.96 16.8-3.69 12.44.64 22.38 5.25 29.83 13.83-10.83 6.55-16.14 15.65-15.93 27.31.22 9.07 3.65 16.66 10.29 22.77 6.64 6.11 14.57 9.53 23.79 10.27-2.02 6.18-4.52 12.34-7.5 18.49zM119.22 33.51c0-7.24 2.64-14.15 7.92-20.73 5.28-6.58 11.83-10.95 19.65-13.11-.2 1.5-.47 3.06-.82 4.68-.7 3.24-2.04 6.74-4.02 10.5-1.98 3.76-4.56 6.84-7.74 9.24-3.18 2.4-6.66 4.07-10.44 5.01-1.04.26-2.02.43-2.95.51-.52-.89-.9-1.91-1.14-3.07-.32-1.39-.46-2.4-.46-3.03z"/>
          </svg>
          <span>tv<sup className="text-sm font-normal -top-2">+</sup></span>
        </div>
      ),
    },
    {
      id: "samsung",
      name: "Samsung",
      slug: "samsung-lg-smart-tv",
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-semibold">Samsung</span>
          <div className="flex items-center text-slate-900 group-hover:text-red-600 transition-colors font-bold text-base sm:text-lg font-sans tracking-tight">
            S<span className="text-red-600 text-xs mx-0.5">✦</span>MART TV
          </div>
        </div>
      ),
    },
    {
      id: "lg",
      name: "LG",
      slug: "samsung-lg-smart-tv",
      logo: (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-slate-900 group-hover:text-red-600 transition-colors">
            {/* LG circle logo */}
            <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-[10px] font-black">
              L
            </div>
            <span className="font-bold text-base sm:text-lg font-sans tracking-tight">web<span className="font-normal uppercase text-xs">OS</span></span>
          </div>
        </div>
      ),
    },
    {
      id: "roku",
      name: "Roku",
      slug: "roku-chromecast",
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-slate-900 group-hover:text-red-600 transition-colors font-extrabold text-xl sm:text-2xl font-sans tracking-tight">
            Roku
          </span>
        </div>
      ),
    },
    {
      id: "chromecast",
      name: "Chromecast",
      slug: "roku-chromecast",
      logo: (
        <div className="flex items-center gap-1.5 text-slate-900 group-hover:text-red-600 transition-colors">
          {/* Chromecast Cast Icon */}
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
          </svg>
          <span className="font-semibold text-sm sm:text-base font-sans tracking-tight lowercase">chromecast</span>
        </div>
      ),
    },
    {
      id: "nvidia",
      name: "Nvidia Shield",
      slug: "android-tv-box",
      logo: (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-slate-900 group-hover:text-red-600 transition-colors font-bold text-sm sm:text-base font-sans tracking-wider">
            {/* NVIDIA Eye / Badge */}
            <svg className="w-5 h-4 fill-current" viewBox="0 0 24 20">
              <path d="M6.3 3.6C7.9 2.2 10 1.3 12.3 1.3c4.7 0 8.5 3.8 8.5 8.5 0 2.5-1.1 4.7-2.8 6.3l2.8 1.4c2.4-2.1 3.9-5.1 3.9-8.5 0-6.1-4.9-11-11-11C9.4-1 6.5.2 4.3 2.1l2 1.5zm-2.8 2.2C2.1 7.2 1.3 8.7 1.3 10.4c0 3.2 2.6 5.8 5.8 5.8 1.7 0 3.2-.7 4.3-1.9l2.8 1.4c-1.8 1.8-4.3 2.9-7.1 2.9C3.1 18.6-.1 14.9-.1 10.4c0-2.4 1-4.5 2.6-6.1l1 1.5z" />
            </svg>
            <span>NVIDIA</span>
          </div>
        </div>
      ),
    },
    {
      id: "windows",
      name: "Windows",
      slug: "windows-mac-pc",
      logo: (
        <div className="flex items-center gap-1.5 text-slate-900 group-hover:text-red-600 transition-colors">
          {/* Windows 4 Squares */}
          <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
            <div className="bg-current rounded-[1px]"></div>
            <div className="bg-current rounded-[1px]"></div>
            <div className="bg-current rounded-[1px]"></div>
            <div className="bg-current rounded-[1px]"></div>
          </div>
          <span className="font-semibold text-sm sm:text-base font-sans tracking-tight">Windows</span>
        </div>
      ),
    },
    {
      id: "vidaa",
      name: "VIDAA",
      slug: "samsung-lg-smart-tv",
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">Hisense Powered By</span>
          <span className="text-slate-900 group-hover:text-red-600 transition-colors font-black text-base sm:text-lg font-sans tracking-widest">
            VIDAA
          </span>
        </div>
      ),
    },
    {
      id: "formuler",
      name: "Formuler",
      slug: "mag-formuler-buzztv",
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-slate-900 group-hover:text-red-600 transition-colors font-black text-sm sm:text-base font-sans tracking-wider uppercase">
            FORMULER
          </span>
          <span className="text-[8px] font-mono text-slate-400 tracking-wider">Z11 Pro &bull; Z10 Pro Max</span>
        </div>
      ),
    },
    {
      id: "buzztv",
      name: "BuzzTV",
      slug: "mag-formuler-buzztv",
      logo: (
        <div className="flex items-center gap-1.5 text-slate-900 group-hover:text-red-600 transition-colors">
          <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[9px] font-black">
            B
          </div>
          <span className="font-bold text-sm sm:text-base font-sans tracking-tight">buzz<span className="font-black text-red-600">TV</span></span>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-20 lg:py-28 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference Layout */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 space-y-4 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" />
            <span>STREAM ANYWHERE ANYTIME</span>
          </div>

          <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-slate-900">
            WATCH IPTV CANADA ON ALL DEVICES
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Don&apos;t worry—your IPTV subscription works seamlessly on all smart devices, from Fire Stick and Smart TVs to Android, Apple, Magbox, and Roku. No matter what you use, you&apos;ll enjoy smooth streaming.
          </p>
        </ScrollReveal>

        {/* 12 Devices Grid (6 Columns on Desktop x 2 Rows) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-12 max-w-6xl mx-auto">
          {devices.map((device, index) => (
            <ScrollReveal
              key={device.id}
              delay={index * 40}
              variant="scale"
            >
              <Link
                href={`/installation-guide/${device.slug}`}
                className="card-light p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-400 hover:shadow-lg transition-all flex flex-col items-center justify-between text-center group relative min-h-[140px] sm:min-h-[150px]"
                title={`View ${device.name} installation guide`}
              >
                {/* Brand Logo / Typography in Center */}
                <div className="my-auto flex items-center justify-center h-12 w-full">
                  {device.logo}
                </div>

                {/* Subtitle / Device Name underneath */}
                <div className="mt-2 text-center w-full pt-2 border-t border-slate-100/80">
                  <span className="text-xs font-sans font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                    {device.name}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
