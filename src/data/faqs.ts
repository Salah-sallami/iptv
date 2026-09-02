export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "setup" | "billing" | "sports" | "technical";
}

export const FAQS_LIST: FaqItem[] = [
  {
    id: "what-is-iptv",
    question: "What is IPTV and how does IPTV Canada work?",
    category: "general",
    answer: "IPTV (Internet Protocol Television) is advanced streaming technology that delivers television content over high-speed internet instead of outdated cable or satellite infrastructure. When you subscribe to Streamora IPTV (streamoraiptv.com), you receive secure credentials connecting you to our high-speed CDN servers. You can stream 25,000+ live TV channels, 120,000+ movies & TV series on-demand in crystal-clear 4K and FHD with zero buffering."
  },
  {
    id: "how-to-order",
    question: "How do I order and activate my subscription?",
    category: "billing",
    answer: "Simply message our Canadian support team on WhatsApp with your desired plan. We will confirm your order and activate your 4K IPTV login credentials within 5 minutes."
  },
  {
    id: "activation-time",
    question: "How fast is activation and what is the customer support response time?",
    category: "general",
    answer: "Activation is virtually instantaneous! Once payment is verified, your Xtream Codes and M3U login credentials are automatically dispatched to your email within 5 to 15 minutes. Our dedicated Canadian bilingual support team operates 24/7 with an average live response time of 10-15 minutes via Live Chat, Email, and WhatsApp."
  },
  {
    id: "vpn-requirement",
    question: "Do I need a VPN for IPTV streaming in Canada?",
    category: "technical",
    answer: "A VPN is optional but recommended for privacy and preventing ISP bandwidth throttling during major live sporting events. Major Canadian ISPs (like Bell, Rogers, Shaw, and Telus) occasionally throttle high-bandwidth video traffic during peak hours. Our IPTV service is 100% compatible with leading VPNs like NordVPN, ExpressVPN, Surfshark, and IPVanish, but also runs smoothly with direct connections on all Canadian networks."
  },
  {
    id: "sports-coverage",
    question: "Are all NHL, NFL, NBA, MLB, and UFC PPV fights included?",
    category: "sports",
    answer: "Yes! Every single NHL game (with both Canadian Home and Away feeds from TSN, Sportsnet, RDS, TVA Sports, NHL Center Ice), NFL Sunday Ticket & RedZone, NBA League Pass, MLB Extra Innings, Premier League, UEFA Champions League, and all UFC/Boxing Pay-Per-View (PPV) main cards are included with zero blackout restrictions and at no extra monthly fee."
  },
  {
    id: "multiple-devices",
    question: "Can I watch on multiple devices at the same time?",
    category: "technical",
    answer: "Yes! We offer flexible plans supporting 1, 2, 3, or 4 simultaneous device connections. You can watch the hockey game in the living room in 4K on your Firestick while family members stream movies in bedrooms on Apple TV, iPads, or Android phones simultaneously."
  },
  {
    id: "travel-access",
    question: "Can I use IPTV Canada while traveling abroad?",
    category: "general",
    answer: "Yes! You can access all your favorite Canadian channels, local news, and live sports from anywhere in the world. As long as you have an active high-speed internet connection (Wi-Fi or cellular), your login works seamlessly on mobile devices, laptops, and streaming sticks."
  },
  {
    id: "compatible-devices",
    question: "What devices and IPTV player apps are supported?",
    category: "setup",
    answer: "Our service is compatible with all smart devices: Amazon Fire TV Stick / Cube, Android TV / Google TV (Chromecast, Onn, Nvidia Shield), Samsung Tizen Smart TVs, LG webOS Smart TVs, Apple TV 4K, iPhones, iPads, MAG Boxes (254, 322, 524), Formuler (MyTVOnline 2/3), BuzzTV, Windows PC, Mac, and apps like TiviMate, IPTV Smarters Pro, ibPlayer Pro, and XCIPTV."
  },
  {
    id: "refund-policy",
    question: "What is your refund policy and guarantee?",
    category: "billing",
    answer: "We stand 100% behind our service quality. We provide a 7-day money-back satisfaction guarantee if you experience technical issues that our 24/7 Canadian technical support team cannot resolve."
  }
];
