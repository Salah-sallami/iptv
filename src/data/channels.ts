export interface ChannelItem {
  id: string;
  name: string;
  category: string;
  quality: "4K" | "FHD" | "HD";
  language: string;
  country: string;
  logoText: string;
  featured?: boolean;
}

export const CHANNEL_CATEGORIES = [
  { id: "all", label: "All Channels (25,000+)" },
  { id: "canada", label: "🇨🇦 Canada Local & National" },
  { id: "quebec", label: "🍁 French Canada (Québec)" },
  { id: "sports", label: "⚽ Live Sports & PPV" },
  { id: "usa", label: "🇺🇸 US Major Networks" },
  { id: "uk", label: "🇬🇧 UK & European" },
  { id: "movies", label: "🍿 Premium Cinema & HBO" },
  { id: "kids", label: "🧸 Kids & Family" },
  { id: "news", label: "📰 24/7 Global News" },
  { id: "international", label: "🌍 International / World" },
];

export const SAMPLE_CHANNELS: ChannelItem[] = [
  // Canada National & Regional
  { id: "c1", name: "CBC Television Toronto", category: "canada", quality: "4K", language: "English", country: "Canada", logoText: "CBC", featured: true },
  { id: "c2", name: "CTV HD Toronto", category: "canada", quality: "4K", language: "English", country: "Canada", logoText: "CTV", featured: true },
  { id: "c3", name: "Global TV Ontario", category: "canada", quality: "FHD", language: "English", country: "Canada", logoText: "GLO", featured: true },
  { id: "c4", name: "Citytv Toronto", category: "canada", quality: "FHD", language: "English", country: "Canada", logoText: "CITY" },
  { id: "c5", name: "TSN 1 4K", category: "sports", quality: "4K", language: "English", country: "Canada", logoText: "TSN1", featured: true },
  { id: "c6", name: "TSN 2 HD", category: "sports", quality: "FHD", language: "English", country: "Canada", logoText: "TSN2" },
  { id: "c7", name: "TSN 3 / 4 / 5 Regional", category: "sports", quality: "FHD", language: "English", country: "Canada", logoText: "TSN" },
  { id: "c8", name: "Sportsnet Ontario 4K", category: "sports", quality: "4K", language: "English", country: "Canada", logoText: "SN ON", featured: true },
  { id: "c9", name: "Sportsnet East / West / Pacific", category: "sports", quality: "FHD", language: "English", country: "Canada", logoText: "SN 360", featured: true },
  { id: "c10", name: "Sportsnet ONE 4K", category: "sports", quality: "4K", language: "English", country: "Canada", logoText: "SN 1" },
  { id: "c11", name: "Sportsnet 360", category: "sports", quality: "FHD", language: "English", country: "Canada", logoText: "SN360" },
  { id: "c12", name: "CP24 Breaking News", category: "news", quality: "FHD", language: "English", country: "Canada", logoText: "CP24", featured: true },
  { id: "c13", name: "BNN Bloomberg Canada", category: "news", quality: "FHD", language: "English", country: "Canada", logoText: "BNN" },
  { id: "c14", name: "W Network HD", category: "canada", quality: "FHD", language: "English", country: "Canada", logoText: "W NET" },
  { id: "c15", name: "Showcase Canada", category: "movies", quality: "FHD", language: "English", country: "Canada", logoText: "SHOW" },
  { id: "c16", name: "Crave 1 4K Ultra HD", category: "movies", quality: "4K", language: "English", country: "Canada", logoText: "CRV1", featured: true },
  { id: "c17", name: "Crave 2 / HBO Canada HD", category: "movies", quality: "4K", language: "English", country: "Canada", logoText: "HBO", featured: true },
  { id: "c18", name: "Crave 3 & 4 Movies", category: "movies", quality: "FHD", language: "English", country: "Canada", logoText: "CRV" },
  { id: "c19", name: "Starz 1 & 2 Canada", category: "movies", quality: "FHD", language: "English", country: "Canada", logoText: "STARZ" },
  { id: "c20", name: "YTV Canada Kids", category: "kids", quality: "FHD", language: "English", country: "Canada", logoText: "YTV" },
  { id: "c21", name: "Treehouse TV", category: "kids", quality: "FHD", language: "English", country: "Canada", logoText: "TREE" },
  { id: "c22", name: "Family Channel HD", category: "kids", quality: "FHD", language: "English", country: "Canada", logoText: "FAM" },
  { id: "c23", name: "Teletoon / Cartoon Network CA", category: "kids", quality: "FHD", language: "English", country: "Canada", logoText: "TELE" },
  { id: "c24", name: "Discovery Channel Canada", category: "canada", quality: "4K", language: "English", country: "Canada", logoText: "DISC" },
  { id: "c25", name: "History Channel Canada", category: "canada", quality: "FHD", language: "English", country: "Canada", logoText: "HIST" },
  { id: "c26", name: "HGTV Canada", category: "canada", quality: "FHD", language: "English", country: "Canada", logoText: "HGTV" },
  { id: "c27", name: "Food Network Canada", category: "canada", quality: "FHD", language: "English", country: "Canada", logoText: "FOOD" },

  // Quebec & French Canada
  { id: "q1", name: "ICI Radio-Canada Télé Montréal", category: "quebec", quality: "4K", language: "French", country: "Canada", logoText: "SRC", featured: true },
  { id: "q2", name: "TVA Montréal HD", category: "quebec", quality: "4K", language: "French", country: "Canada", logoText: "TVA", featured: true },
  { id: "q3", name: "Noovo Québec", category: "quebec", quality: "FHD", language: "French", country: "Canada", logoText: "NOOV" },
  { id: "q4", name: "RDS 1 HD (Réseau des sports)", category: "quebec", quality: "4K", language: "French", country: "Canada", logoText: "RDS 1", featured: true },
  { id: "q5", name: "RDS 2 & RDS Info", category: "quebec", quality: "FHD", language: "French", country: "Canada", logoText: "RDS" },
  { id: "q6", name: "TVA Sports 1 & 2 HD", category: "quebec", quality: "4K", language: "French", country: "Canada", logoText: "TVA S", featured: true },
  { id: "q7", name: "Télé-Québec", category: "quebec", quality: "FHD", language: "French", country: "Canada", logoText: "TQ" },
  { id: "q8", name: "LCN (Le Canal Nouvelles)", category: "quebec", quality: "FHD", language: "French", country: "Canada", logoText: "LCN" },
  { id: "q9", name: "ICI RDI 24/7 Info", category: "quebec", quality: "FHD", language: "French", country: "Canada", logoText: "RDI" },
  { id: "q10", name: "Super Écran 1-4 4K", category: "quebec", quality: "4K", language: "French", country: "Canada", logoText: "SECR", featured: true },
  { id: "q11", name: "Canal D / Canal Vie", category: "quebec", quality: "FHD", language: "French", country: "Canada", logoText: "CAN D" },
  { id: "q12", name: "Ztélé / Zeste / Évasion", category: "quebec", quality: "FHD", language: "French", country: "Canada", logoText: "ZEST" },

  // Live Sports & PPV
  { id: "s1", name: "NHL Center Ice 1-14 HD (All Games)", category: "sports", quality: "4K", language: "English/French", country: "USA/Canada", logoText: "NHL", featured: true },
  { id: "s2", name: "NFL Sunday Ticket 1-16 (No Blackouts)", category: "sports", quality: "4K", language: "English", country: "USA", logoText: "NFL", featured: true },
  { id: "s3", name: "NBA League Pass 1-12", category: "sports", quality: "4K", language: "English", country: "USA", logoText: "NBA", featured: true },
  { id: "s4", name: "MLB Extra Innings 1-14", category: "sports", quality: "FHD", language: "English", country: "USA", logoText: "MLB" },
  { id: "s5", name: "UFC Fight Pass & Main PPV 4K", category: "sports", quality: "4K", language: "English", country: "USA", logoText: "UFC", featured: true },
  { id: "s6", name: "DAZN 1-4 Premier League & Champions League", category: "sports", quality: "4K", language: "English", country: "UK/Canada", logoText: "DAZN", featured: true },
  { id: "s7", name: "Sky Sports Main Event / Premier League / F1", category: "sports", quality: "4K", language: "English", country: "UK", logoText: "SKY S", featured: true },
  { id: "s8", name: "TNT Sports 1-4 UK (Champions League)", category: "sports", quality: "4K", language: "English", country: "UK", logoText: "TNT", featured: true },
  { id: "s9", name: "ESPN, ESPN2, ESPNU, ESPN News", category: "sports", quality: "4K", language: "English", country: "USA", logoText: "ESPN", featured: true },
  { id: "s10", name: "Fox Sports 1 (FS1) & FS2 4K", category: "sports", quality: "4K", language: "English", country: "USA", logoText: "FS1" },
  { id: "s11", name: "beIN Sports 1-16 HD", category: "sports", quality: "FHD", language: "Multi", country: "Global", logoText: "beIN" },
  { id: "s12", name: "Willow Cricket HD / Willow Xtra", category: "sports", quality: "FHD", language: "English", country: "Global", logoText: "WILW" },
  { id: "s13", name: "WWE Network & Premium Live Events", category: "sports", quality: "4K", language: "English", country: "USA", logoText: "WWE" },
  { id: "s14", name: "Formula 1 TV Pro 50FPS", category: "sports", quality: "4K", language: "English", country: "Global", logoText: "F1 TV", featured: true },

  // US Major Networks
  { id: "u1", name: "ABC East & West 4K", category: "usa", quality: "4K", language: "English", country: "USA", logoText: "ABC" },
  { id: "u2", name: "NBC East & West 4K", category: "usa", quality: "4K", language: "English", country: "USA", logoText: "NBC" },
  { id: "u3", name: "CBS East & West 4K", category: "usa", quality: "4K", language: "English", country: "USA", logoText: "CBS" },
  { id: "u4", name: "FOX East & West 4K", category: "usa", quality: "4K", language: "English", country: "USA", logoText: "FOX" },
  { id: "u5", name: "HBO East / West / Signature / Family", category: "movies", quality: "4K", language: "English", country: "USA", logoText: "HBO", featured: true },
  { id: "u6", name: "Cinemax, Showtime & TMC", category: "movies", quality: "FHD", language: "English", country: "USA", logoText: "SHOW" },
  { id: "u7", name: "AMC HD / FX HD / USA Network", category: "usa", quality: "FHD", language: "English", country: "USA", logoText: "AMC" },
  { id: "u8", name: "CNN US & International 4K", category: "news", quality: "4K", language: "English", country: "USA", logoText: "CNN" },
  { id: "u9", name: "Fox News Channel & Fox Business", category: "news", quality: "FHD", language: "English", country: "USA", logoText: "FOX N" },
  { id: "u10", name: "MSNBC HD", category: "news", quality: "FHD", language: "English", country: "USA", logoText: "MSNBC" },
  { id: "u11", name: "Discovery US / Nat Geo Wild 4K", category: "usa", quality: "4K", language: "English", country: "USA", logoText: "NAT G" },

  // UK & European
  { id: "uk1", name: "BBC One / Two / Four HD", category: "uk", quality: "4K", language: "English", country: "UK", logoText: "BBC" },
  { id: "uk2", name: "ITV 1, 2, 3, 4 HD", category: "uk", quality: "FHD", language: "English", country: "UK", logoText: "ITV" },
  { id: "uk3", name: "Channel 4 & Channel 5 HD", category: "uk", quality: "FHD", language: "English", country: "UK", logoText: "CH4" },
  { id: "uk4", name: "Sky Cinema Premiere / Action / Sci-Fi 4K", category: "movies", quality: "4K", language: "English", country: "UK", logoText: "SKY C" },
  { id: "uk5", name: "Sky Atlantic HD", category: "uk", quality: "FHD", language: "English", country: "UK", logoText: "SKY A" },

  // Kids
  { id: "k1", name: "Disney Channel / Disney XD / Disney Jr", category: "kids", quality: "FHD", language: "English", country: "USA", logoText: "DISN" },
  { id: "k2", name: "Nickelodeon / Nick Jr HD", category: "kids", quality: "FHD", language: "English", country: "USA", logoText: "NICK" },
  { id: "k3", name: "Cartoon Network / Boomerang", category: "kids", quality: "FHD", language: "English", country: "USA", logoText: "CN" },

  // International
  { id: "i1", name: "TF1 / France 2 / M6 HD", category: "international", quality: "4K", language: "French", country: "France", logoText: "TF1" },
  { id: "i2", name: "Canal+ France / Cinéma / Sport", category: "international", quality: "4K", language: "French", country: "France", logoText: "C+" },
  { id: "i3", name: "Rai 1, 2, 3 Italia", category: "international", quality: "FHD", language: "Italian", country: "Italy", logoText: "RAI" },
  { id: "i4", name: "TVE La 1 / Antena 3 España", category: "international", quality: "FHD", language: "Spanish", country: "Spain", logoText: "ANT 3" },
  { id: "i5", name: "RTP 1 & SIC Portugal", category: "international", quality: "FHD", language: "Portuguese", country: "Portugal", logoText: "RTP" },
  { id: "i6", name: "MBC 1, 2, 4 / Al Jazeera HD", category: "international", quality: "4K", language: "Arabic", country: "MENA", logoText: "MBC" },
];
