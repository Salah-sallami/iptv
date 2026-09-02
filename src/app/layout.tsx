import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveChatWidget from "@/components/ui/LiveChatWidget";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Streamora IPTV | Best IPTV Service & 4K Live TV Streaming (2026)",
    template: "%s | Streamora IPTV"
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: "Streamora IPTV", url: SITE_CONFIG.url }],
  creator: "Streamora IPTV",
  publisher: "Streamora IPTV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "Streamora IPTV | Best IPTV Service & 4K Live TV Streaming (2026)",
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Streamora IPTV - 25,000+ Live Channels and 120,000+ VOD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamora IPTV | Best IPTV Service & 4K Live TV Streaming (2026)",
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${syne.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://i.ibb.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.ibb.co" />
        <link rel="alternate" type="text/markdown" title="LLMs" href="/llms.txt" />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-red-600 selection:text-white">
        <ScrollProgressBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <LiveChatWidget />
      </body>
    </html>
  );
}
