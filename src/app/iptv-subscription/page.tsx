import { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  Tv, 
  Flame, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  ArrowUpRight, 
  Smartphone, 
  Monitor, 
  HelpCircle,
  Clock,
  Sparkles,
  Layers
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppPlanUrl } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Buy IPTV Subscription (2026) | 25k+ Live 4K Channels | Streamora IPTV",
  description: "Get the best IPTV subscription with 25,000+ live 4K channels, 120,000+ VOD movies, and anti-freeze technology. Instant activation for Smart TV, Firestick, and Android.",
  alternates: {
    canonical: "/iptv-subscription",
  },
  openGraph: {
    title: "Buy IPTV Subscription (2026) | 25k+ Live 4K Channels | Streamora IPTV",
    description: "Get the best IPTV subscription with 25,000+ live 4K channels, 120,000+ VOD movies, and anti-freeze technology. Instant activation for Smart TV, Firestick, and Android.",
    url: `${SITE_CONFIG.url}/iptv-subscription`,
  },
};

export default function IptvSubscriptionPage() {
  const schemaData = {
    "@type": "Product",
    "name": "Streamora IPTV Subscription",
    "image": `${SITE_CONFIG.url}/og-image.jpg`,
    "description": "Streamora IPTV subscription provides access to 25,000+ live TV channels, 120,000+ movies & TV series in 4K UHD with 99.9% uptime and anti-freeze servers.",
    "brand": {
      "@type": "Brand",
      "name": "Streamora IPTV"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "2480"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "CAD",
      "lowPrice": "29.00",
      "highPrice": "79.00",
      "offerCount": "3",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbsSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "IPTV Subscription",
        "item": `${SITE_CONFIG.url}/iptv-subscription`
      }
    ]
  };

  const plans = [
    {
      name: "3 Months",
      price: "$29",
      monthly: "~$9.67/mo",
      label: "Quarterly Plan",
      features: [
        "25,000+ Live Channels (4K / FHD / HD)",
        "120,000+ Movies & Series VOD (Updated Weekly)",
        "Anti-Freeze 9.8™ Streaming Tech",
        "All Live Sports & PPV Events Included",
        "Electronic Program Guide (EPG)",
        "Instant 5-Minute Activation",
        "24/7 Priority Support via WhatsApp"
      ],
      popular: false
    },
    {
      name: "6 Months",
      price: "$49",
      monthly: "~$8.17/mo",
      label: "Most Popular",
      features: [
        "25,000+ Live Channels (4K / FHD / HD)",
        "120,000+ Movies & Series VOD (Updated Weekly)",
        "Anti-Freeze 9.8™ Streaming Tech",
        "All Live Sports & PPV Events Included",
        "Electronic Program Guide (EPG)",
        "Instant 5-Minute Activation",
        "24/7 Priority Support via WhatsApp"
      ],
      popular: true
    },
    {
      name: "12 Months",
      price: "$79",
      monthly: "~$6.58/mo",
      label: "Best Value (Save 65%)",
      features: [
        "25,000+ Live Channels (4K / FHD / HD)",
        "120,000+ Movies & Series VOD (Updated Weekly)",
        "Anti-Freeze 9.8™ Streaming Tech",
        "All Live Sports & PPV Events Included",
        "Electronic Program Guide (EPG)",
        "Instant 5-Minute Activation",
        "VIP 24/7 Dedicated Support",
        "Multi-Room & Multi-Device Compatible"
      ],
      popular: false
    }
  ];

  const devices = [
    {
      name: "Amazon Firestick & Fire TV",
      slug: "/iptv-for-firestick",
      desc: "Fast TiviMate & Downloader setup in under 3 minutes.",
      icon: Tv
    },
    {
      name: "Smart TV (Samsung & LG)",
      slug: "/iptv-for-smart-tv",
      desc: "IBO Player, Smart IPTV, and IPTV Smarters Pro support.",
      icon: Monitor
    },
    {
      name: "Android TV Box & Shield",
      slug: "/iptv-for-android-tv",
      desc: "Native 4K 60fps hardware decoding with TiviMate.",
      icon: Layers
    },
    {
      name: "Google TV & Chromecast",
      slug: "/iptv-for-google-tv",
      desc: "Seamless Google Play Store installation & smooth playback.",
      icon: Smartphone
    }
  ];

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <JsonLd data={schemaData} />
      <JsonLd data={breadcrumbsSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>2026 OFFICIAL IPTV PROVIDER &bull; 99.9% UPTIME</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-slate-900">
            PREMIUM <span className="text-red-600">IPTV SUBSCRIPTION</span> WITH 25,000+ 4K CHANNELS
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Experience ultra-smooth live TV streaming, major sports leagues (NHL, NFL, Premier League, UFC PPV), and 120,000+ on-demand movies. Engineered with Anti-Freeze 9.8™ servers for zero buffering on any device.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/iptv-plans"
              className="btn-pill-red text-xs group"
            >
              <span>Explore IPTV Packages (from $6.58/mo)</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>

            <Link
              href="/iptv-setup"
              className="btn-pill-outline text-xs group"
            >
              <span>View Setup Guides</span>
              <div className="btn-circle-icon-dark">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h2 className="font-headline text-2xl text-slate-900">True 4K &amp; 60FPS Sports Streaming</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Never miss a moment of high-speed sports action. Enjoy dedicated 60fps high-bitrate video streams with zero stuttering or resolution drops during peak viewing hours.
            </p>
          </div>

          <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="font-headline text-2xl text-slate-900">Anti-Freeze 9.8™ Server Architecture</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Our intelligent edge CDN load-balancers automatically route your connection through the fastest local server nodes, preventing buffering and ISP bandwidth throttling.
            </p>
          </div>

          <div className="card-light p-7 rounded-3xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="font-headline text-2xl text-slate-900">Instant 5-Minute Setup &amp; Delivery</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Receive your Xtream Codes API credentials and M3U playlist URLs within minutes via email and WhatsApp. Compatible with all top player applications.
            </p>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-sans">
              Choose Your <span className="text-red-600">IPTV Subscription</span>
            </h2>
            <p className="text-slate-600 text-sm font-sans">
              All plans include complete 25,000+ live TV channels, 120,000+ VOD titles, and sports PPV access with no long-term contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`card-light p-7 flex flex-col justify-between relative rounded-3xl bg-white ${
                  plan.popular
                    ? "border-red-500 ring-2 ring-red-600 shadow-xl"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-4 border-b border-slate-100 mb-6">
                    <span className="font-bold text-slate-900">0{index + 1}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 text-[10px] font-mono font-bold uppercase border border-red-200">
                      {plan.label}
                    </span>
                  </div>

                  <div className="text-left md:text-center space-y-2 mb-6">
                    <h3 className="font-headline text-3xl sm:text-4xl text-slate-900 tracking-wide">
                      {plan.name.toUpperCase()}
                    </h3>

                    <div className="flex items-baseline gap-2 md:justify-center">
                      <span className="font-headline text-5xl sm:text-6xl text-slate-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                        CAD
                      </span>
                      <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                        {plan.monthly}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600 mb-8 font-sans">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase">
                    Order Package
                  </span>
                  <a
                    href={getWhatsAppPlanUrl(plan.name, 1)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-900 hover:bg-red-600 text-white flex items-center justify-center transition-all shadow-xs"
                    aria-label={`Order ${plan.name} IPTV Subscription on WhatsApp`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Devices Hub */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 bg-slate-50 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              STREAM ON ANY DEVICE &bull; COMPLETE COMPATIBILITY
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Streamora IPTV works seamlessly across all major smart devices, streaming boxes, smartphones, and computers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device) => {
              const IconComp = device.icon;
              return (
                <Link
                  key={device.name}
                  href={device.slug}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-500 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline text-xl text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                      {device.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {device.desc}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-1.5 text-xs font-mono font-bold text-red-600">
                    <span>Setup Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Informational SEO Content Section */}
        <div className="max-w-4xl mx-auto space-y-10 text-slate-800 font-sans leading-relaxed mb-20 border-t border-slate-200 pt-16">
          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              What is an IPTV Subscription and How Does It Work?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              An <strong>IPTV subscription</strong> (Internet Protocol Television) delivers live TV channels, on-demand movies, and pay-per-view sports broadcasts over high-speed internet instead of traditional cable or satellite hookups. With Streamora IPTV, your streaming device connects directly to high-speed CDN server clusters, providing instant channel switching, sharp 4K UHD video resolution, and interactive program guides (EPG).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl text-slate-900">
              Why Choose Streamora as Your IPTV Service Provider?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When choosing an <strong>IPTV service provider</strong>, server stability and stream uptime are paramount. Streamora IPTV utilizes proprietary Anti-Freeze 9.8™ technology with automatic failover routing, ensuring zero buffering during peak prime-time events such as the Super Bowl, Stanley Cup, Champions League, and UFC Main Cards.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>25,000+ Worldwide &amp; Local Channels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>120,000+ 4K Movies &amp; TV Series VOD</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Long-Term Contracts or Hidden Fees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Xtream Codes API &amp; M3U Playlist Delivery</span>
              </li>
            </ul>
          </section>

          {/* Internal Links Navigation Block */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-headline text-xl text-slate-900 mb-3">Explore Related IPTV Resources</h3>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <Link href="/iptv-plans" className="text-red-600 hover:underline font-bold">
                → IPTV Plans &amp; Pricing
              </Link>
              <Link href="/iptv-setup" className="text-red-600 hover:underline font-bold">
                → Universal IPTV Setup Hub
              </Link>
              <Link href="/iptv-guide" className="text-red-600 hover:underline font-bold">
                → IPTV Beginners Guide
              </Link>
              <Link href="/channels" className="text-red-600 hover:underline font-bold">
                → 25k+ Channel List
              </Link>
              <Link href="/sports" className="text-red-600 hover:underline font-bold">
                → Live Sports Schedule
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
