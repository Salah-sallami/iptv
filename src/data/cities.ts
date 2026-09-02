export interface CanadianCity {
  slug: string;
  name: string;
  province: string;
  provinceCode: string;
  population: string;
  avgLatency: string;
  popularISPs: string[];
  localTeams: string[];
  metaDescription: string;
  heroSnippet: string;
}

export const CANADIAN_CITIES: CanadianCity[] = [
  {
    slug: "toronto",
    name: "Toronto",
    province: "Ontario",
    provinceCode: "ON",
    population: "2.9M+",
    avgLatency: "4ms",
    popularISPs: ["Bell Fibe", "Rogers Ignite", "Beanfield", "TekSavvy"],
    localTeams: ["Toronto Maple Leafs (NHL)", "Toronto Raptors (NBA)", "Toronto Blue Jays (MLB)", "Toronto FC (MLS)"],
    metaDescription: "Best IPTV Toronto service in 2026. Watch 25,000+ live 4K channels, Maple Leafs, Raptors, Blue Jays games with no blackouts and instant activation in Toronto, GTA & Ontario.",
    heroSnippet: "Enjoy ultra-low latency 4K streaming connected straight to Toronto's major Equinix CDN exchange."
  },
  {
    slug: "montreal",
    name: "Montréal",
    province: "Québec",
    provinceCode: "QC",
    population: "1.8M+",
    avgLatency: "6ms",
    popularISPs: ["Vidéotron Helix", "Bell Fibe", "EBOX", "Fizz"],
    localTeams: ["Canadiens de Montréal (LNH)", "CF Montréal (MLS)", "Alouettes de Montréal (LCF)"],
    metaDescription: "Meilleur service IPTV à Montréal en 2026. Regardez RDS, TVA Sports, ICI Télé, matchs des Canadiens de Montréal en direct 4K avec assistance bilingue 24/7.",
    heroSnippet: "Diffusez toutes vos chaînes québécoises préférées en 4K UHD avec nos serveurs optimisés pour Montréal et le Québec."
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "British Columbia",
    provinceCode: "BC",
    population: "675k+ (Metro 2.6M)",
    avgLatency: "7ms",
    popularISPs: ["Telus PureFibre", "Shaw / Rogers", "Novus", "Oxio"],
    localTeams: ["Vancouver Canucks (NHL)", "BC Lions (CFL)", "Vancouver Whitecaps (MLS)"],
    metaDescription: "Top IPTV Vancouver provider in 2026. 25,000+ live HD/4K channels with Pacific CDN servers. Watch Canucks, Premier League, and international channels buffer-free.",
    heroSnippet: "Direct fiber interconnects across Metro Vancouver, Richmond, Burnaby, Surrey and Vancouver Island."
  },
  {
    slug: "calgary",
    name: "Calgary",
    province: "Alberta",
    provinceCode: "AB",
    population: "1.4M+",
    avgLatency: "9ms",
    popularISPs: ["Telus Fibre", "Shaw (Rogers)", "TekSavvy", "Distributel"],
    localTeams: ["Calgary Flames (NHL)", "Calgary Stampeders (CFL)", "Calgary Wranglers (AHL)"],
    metaDescription: "Best IPTV Calgary subscription in 2026. Full coverage of Calgary Flames hockey, NFL Sunday Ticket, movies, and family channels with fast Western Canadian servers.",
    heroSnippet: "Fast Western Canada server nodes ensuring zero buffering during peak prime-time streaming."
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "Alberta",
    provinceCode: "AB",
    population: "1.1M+",
    avgLatency: "9ms",
    popularISPs: ["Telus PureFibre", "Shaw", "VMedia"],
    localTeams: ["Edmonton Oilers (NHL)", "Edmonton Elks (CFL)", "Oil Kings (WHL)"],
    metaDescription: "Reliable IPTV Edmonton service. Stream Edmonton Oilers games in 4K 60fps, 120,000+ movies on demand, and international television without long contracts.",
    heroSnippet: "Crystal clear Oilers 4K coverage with anti-freeze servers built for Alberta sports fans."
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    province: "Ontario",
    provinceCode: "ON",
    population: "1.0M+",
    avgLatency: "5ms",
    popularISPs: ["Bell Fibe", "Rogers", "National Capital FreeNet", "Oxio"],
    localTeams: ["Ottawa Senators (NHL)", "Ottawa Redblacks (CFL)", "Ottawa 67's (OHL)"],
    metaDescription: "Headquartered in Ottawa! Canada's highest rated IPTV provider offering bilingual support, Senators live games, and instant activation in the National Capital Region.",
    heroSnippet: "Local Canadian headquarters located at 159 Henderson Ave, Ottawa. Fast bilingual customer service team."
  },
  {
    slug: "quebec-city",
    name: "Québec City",
    province: "Québec",
    provinceCode: "QC",
    population: "550k+",
    avgLatency: "8ms",
    popularISPs: ["Vidéotron", "Bell", "CCAP", "Cogeco"],
    localTeams: ["Remparts de Québec (LHJMQ)", "Rouge et Or (U Sports)"],
    metaDescription: "Abonnement IPTV Ville de Québec 2026. Accès complet aux chaînes québécoises, films français et sports internationaux avec serveurs ultra-rapides.",
    heroSnippet: "Qualité d'image exceptionnelle et forfaits adaptés aux téléspectateurs de la Capitale-Nationale."
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "Manitoba",
    provinceCode: "MB",
    population: "750k+",
    avgLatency: "11ms",
    popularISPs: ["Bell MTS", "Shaw (Rogers)", "VMedia"],
    localTeams: ["Winnipeg Jets (NHL)", "Winnipeg Blue Bombers (CFL)", "Manitoba Moose (AHL)"],
    metaDescription: "Best IPTV Winnipeg service for Manitoba viewers. Watch Winnipeg Jets live in 4K, TSN, Sportsnet, and 120k+ VOD titles with zero buffering.",
    heroSnippet: "Dedicated Central Canada streaming routing for uninterrupted Jets hockey and live television."
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    province: "Ontario",
    provinceCode: "ON",
    population: "570k+",
    avgLatency: "5ms",
    popularISPs: ["Cogeco", "Bell Fibe", "Rogers", "TekSavvy"],
    localTeams: ["Hamilton Tiger-Cats (CFL)", "Forge FC (CPL)", "Hamilton Bulldogs"],
    metaDescription: "Affordable IPTV Hamilton & Niagara region subscription with 25k channels, 4K picture quality, and easy 5-minute setup on Firestick and Smart TVs.",
    heroSnippet: "Low-latency Golden Horseshoe fiber connection for seamless multi-room streaming."
  },
  {
    slug: "halifax",
    name: "Halifax",
    province: "Nova Scotia",
    provinceCode: "NS",
    population: "440k+",
    avgLatency: "12ms",
    popularISPs: ["Bell Aliant FibreOP", "Eastlink", "Purple Cow Internet"],
    localTeams: ["Halifax Mooseheads (QMJHL)", "Halifax Wanderers FC (CPL)", "Halifax Thunderbirds"],
    metaDescription: "Top rated Atlantic Canada IPTV in Halifax, NS. High-speed Atlantic Canadian CDN edge nodes, live sports, and instant activation.",
    heroSnippet: "Atlantic CDN caching node delivering fast channel switching across Nova Scotia and the Maritimes."
  }
];
