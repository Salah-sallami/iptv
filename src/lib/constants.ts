export const SITE_CONFIG = {
  name: "Streamora IPTV",
  shortName: "Streamora",
  domain: "streamoraiptv.com",
  url: "https://streamoraiptv.com",
  description: "Streamora IPTV is a premier live TV streaming and IPTV service provider in 2026. Access 25,000+ live 4K & FHD channels, 120,000+ VOD movies & series, anti-freeze technology, and 24/7 dedicated support.",
  keywords: [
    // Primary keywords
    "IPTV",
    "IPTV subscription",
    "IPTV service",
    "IPTV provider",
    "IPTV channels",
    "IPTV streaming",
    "online IPTV",
    "live TV streaming",
    "IPTV plans",
    "IPTV packages",
    // Commercial keywords
    "buy IPTV subscription",
    "best IPTV subscription",
    "IPTV subscription price",
    "IPTV monthly subscription",
    "IPTV 3 months",
    "IPTV 6 months",
    "IPTV 12 months",
    // Long-tail keywords
    "best IPTV service",
    "IPTV for Smart TV",
    "IPTV for Android TV",
    "IPTV for Firestick",
    "IPTV for Google TV",
    "IPTV for Samsung Smart TV",
    "IPTV for LG Smart TV",
    "IPTV for Apple TV",
    "how to install IPTV",
    "how to setup IPTV",
    "IPTV setup guide",
    "IPTV troubleshooting"
  ],
  supportEmail: "support@streamoraiptv.com",
  billingEmail: "billing@streamoraiptv.com",
  address: {
    street: "159 Henderson Ave",
    city: "Ottawa",
    province: "ON",
    postalCode: "K1N 7P7",
    country: "Canada",
  },
  operatingHours: "24/7/365 Real-Time Customer Support",
  whatsappNumber: "+212 648-832898",
  whatsappUrl: "https://wa.me/212648832898?text=Hello%20Streamora%20IPTV%2C%20I%20have%20a%20question%20about%20your%20IPTV%20service.",
  telegramHandle: "@streamoraiptv_official",
  rating: {
    value: 4.96,
    count: 2480,
    best: 5,
  }
};

export function getWhatsAppUrl(message?: string): string {
  const base = "https://wa.me/212648832898";
  if (!message) {
    return "https://wa.me/212648832898?text=Hello%20Streamora%20IPTV%2C%20I%20have%20a%20question%20about%20your%20IPTV%20service.";
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppPlanUrl(planName: string, devices: number = 1): string {
  return getWhatsAppUrl(`Hello Streamora IPTV, I would like to order the ${planName} package for ${devices} ${devices === 1 ? "device" : "devices"}.`);
}
