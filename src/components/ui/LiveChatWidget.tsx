import { SITE_CONFIG } from "@/lib/constants";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.81 8.1 19.14L7.81 18.97L4.69 19.79L5.52 16.75L5.33 16.45C4.59 15.27 4.2 13.9 4.2 12.5C4.2 8.17 7.71 4.67 12.04 4.67V3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.03 8.01 12.19C8.14 12.35 9.73 14.81 12.18 15.86C12.76 16.11 13.22 16.27 13.57 16.38C14.16 16.57 14.7 16.54 15.12 16.48C15.6 16.41 16.59 15.88 16.8 15.3C17 14.71 17 14.21 16.94 14.11C16.87 14.01 16.71 13.95 16.47 13.83C16.23 13.71 15.05 13.13 14.83 13.05C14.61 12.97 14.45 12.93 14.29 13.17C14.13 13.41 13.66 13.95 13.52 14.11C13.38 14.27 13.24 14.29 13 14.17C12.76 14.05 11.99 13.8 11.07 12.98C10.35 12.34 9.87 11.55 9.73 11.31C9.59 11.07 9.71 10.94 9.83 10.82C9.94 10.71 10.08 10.53 10.2 10.39C10.32 10.25 10.36 10.15 10.44 9.99C10.52 9.83 10.48 9.69 10.42 9.57C10.36 9.45 9.89 8.28 9.69 7.8C9.5 7.33 9.3 7.4 9.15 7.39C9.01 7.38 8.85 7.38 8.69 7.38L8.53 7.33Z" />
    </svg>
  );
}

export default function LiveChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-slate-950 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl shadow-slate-900/40 border border-slate-800 hover:scale-105 active:scale-95 transition-all"
        aria-label="Chat with 24/7 Canadian Support on WhatsApp"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <span>24/7 Canadian Support</span>
        </div>
        
        <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <WhatsAppIcon className="w-5 h-5 fill-white" />
        </div>
      </a>
    </div>
  );
}
