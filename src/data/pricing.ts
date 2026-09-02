export interface PricingPlan {
  id: string;
  durationMonths: number;
  durationLabel: string;
  badge?: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  prices: {
    [devices: number]: number; // devices -> CAD price
  };
  originalPrices: {
    [devices: number]: number;
  };
  features: string[];
  serverSpeed: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "3-months",
    durationMonths: 3,
    durationLabel: "3 Months",
    serverSpeed: "High Performance Server",
    badge: "Quarterly Save 25%",
    prices: {
      1: 29,
      2: 55,
      3: 75,
      4: 90,
    },
    originalPrices: {
      1: 45,
      2: 80,
      3: 110,
      4: 135,
    },
    features: [
      "4K Ultra HD & FHD Streaming",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Series VOD",
      "All Premium PPV Events Included",
      "Anti-Freeze 9.8™ Streaming Tech",
      "Smart EPG & 7-Day Catch-Up TV",
      "24/7 Canadian Support (Chat & Email)",
      "Instant Activation in 5 Minutes",
      "Compatible With All Smart Devices",
      "Dedicated Canadian CDN Routing"
    ]
  },
  {
    id: "6-months",
    durationMonths: 6,
    durationLabel: "6 Months",
    serverSpeed: "High Performance Server",
    badge: "Most Popular Choice",
    isPopular: true,
    prices: {
      1: 49,
      2: 85,
      3: 115,
      4: 140,
    },
    originalPrices: {
      1: 75,
      2: 130,
      3: 175,
      4: 215,
    },
    features: [
      "4K Ultra HD & FHD Streaming",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Series VOD",
      "All Premium PPV Events Included",
      "Anti-Freeze 9.8™ Streaming Tech",
      "Smart EPG & 7-Day Catch-Up TV",
      "Priority 24/7 Canadian Support",
      "Instant Activation in 5 Minutes",
      "Compatible With All Smart Devices",
      "Dedicated Canadian CDN Routing",
      "Multi-Screen Support"
    ]
  },
  {
    id: "12-months",
    durationMonths: 12,
    durationLabel: "12 Months",
    serverSpeed: "High Performance Server",
    badge: "Best Value – Save 65%",
    isBestValue: true,
    prices: {
      1: 79,
      2: 139,
      3: 189,
      4: 229,
    },
    originalPrices: {
      1: 150,
      2: 260,
      3: 350,
      4: 430,
    },
    features: [
      "4K Ultra HD & FHD Streaming",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Series VOD",
      "All Premium PPV Events Included",
      "Anti-Freeze 9.8™ Streaming Tech",
      "Smart EPG & 7-Day Catch-Up TV",
      "VIP 24/7 Canadian Support",
      "Instant Activation in 5 Minutes",
      "Compatible With All Smart Devices",
      "Dedicated Canadian CDN Routing",
      "Multi-Screen Support",
      "Free VOD Library Updates Weekly"
    ]
  }
];
