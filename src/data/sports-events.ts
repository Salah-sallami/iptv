export interface SportsLeague {
  id: string;
  name: string;
  category: string;
  iconText: string;
  badge: string;
  imageUrl: string;
  channels: string[];
  description: string;
  features: string[];
}

export const SPORTS_LEAGUES: SportsLeague[] = [
  {
    id: "nhl",
    name: "NHL Hockey",
    category: "Hockey",
    iconText: "🏒",
    badge: "All Canadian & US Feeds",
    imageUrl: "https://i.ibb.co/TMxytW7X/photo-1580748141549-71748dbe0bdc-1.avif",
    channels: ["TSN 1-5", "Sportsnet 4K", "RDS 1-2", "TVA Sports", "NHL Center Ice 1-14"],
    description: "Every regular season and Stanley Cup Playoff game in 4K 60FPS with both Home & Away commentary feeds and zero regional blackouts.",
    features: ["Home & Away Feeds", "French Commentary (RDS/TVA)", "Zero Regional Blackouts", "4K Ultra HD 60FPS"]
  },
  {
    id: "nfl",
    name: "NFL Football",
    category: "Football",
    iconText: "🏈",
    badge: "NFL Sunday Ticket & RedZone",
    imageUrl: "https://i.ibb.co/rKWPrnkS/photo-1566577739112-5180d4bf9390-1.avif",
    channels: ["NFL RedZone", "NFL Sunday Ticket 1-16", "ESPN", "Fox Sports 4K", "CBS Sports", "TSN"],
    description: "Live Sunday afternoon action, Thursday Night Football, Sunday Night Football, Monday Night Football, and the Super Bowl.",
    features: ["NFL RedZone Live", "Every Sunday Game", "Home & Away Broadcasters", "Fantasy Multi-Screen"]
  },
  {
    id: "nba",
    name: "NBA Basketball",
    category: "Basketball",
    iconText: "🏀",
    badge: "NBA League Pass",
    imageUrl: "https://i.ibb.co/fY4YdBd0/photo-1546519638-68e109498ffc-1.avif",
    channels: ["TSN", "Sportsnet", "NBA TV", "NBA League Pass 1-12", "ESPN", "TNT Sports"],
    description: "All Toronto Raptors games, NBA playoffs, and full US league games with crystal-clear 1080p and 4K streams.",
    features: ["All Raptors Broadcasts", "All Out-of-Market Games", "Full NBA Finals Coverage", "Instant Replay / Catch-Up"]
  },
  {
    id: "ufc",
    name: "UFC & Boxing PPV",
    category: "Combat Sports",
    iconText: "🥊",
    badge: "All PPVs Included Free",
    imageUrl: "https://i.ibb.co/ffRmP2g/photo-1517438322307-e67111335449-1.avif",
    channels: ["UFC PPV 4K", "TNT Sports Box Office", "DAZN PPV", "Sky Sports Box Office"],
    description: "Never pay $79.99 for a PPV fight card again. All UFC numbered events, Fight Nights, and world championship boxing included at no extra charge.",
    features: ["Main Card & Early Prelims", "4K 60FPS High Bitrate", "No Buffering During Big Fights", "Replays Available Next Morning"]
  },
  {
    id: "soccer",
    name: "Premier League & Champions League",
    category: "Soccer / Football",
    iconText: "⚽",
    badge: "Global Football",
    imageUrl: "https://i.ibb.co/v45MJTLN/988670.avif",
    channels: ["DAZN Canada", "Fubo Sports", "Sky Sports Premier League", "TNT Sports UK", "Canal+ Sport", "beIN Sports"],
    description: "Full season access to English Premier League, UEFA Champions League, La Liga, Serie A, MLS, and international FIFA tournaments.",
    features: ["Every Premier League Match", "Multi-Audio Commentary", "Champions League & Europa League", "Full Match Replays"]
  },
  {
    id: "f1",
    name: "Formula 1 & Motorsports",
    category: "Racing",
    iconText: "🏎️",
    badge: "F1 TV Pro 50FPS",
    imageUrl: "https://i.ibb.co/gZwCBmjF/photo-1568605117036-5fe5e7bab0b7-1.avif",
    channels: ["Sky Sports F1 4K", "TSN Auto", "RDS", "F1 Live Feed"],
    description: "Practice sessions, qualifying rounds, sprint shootouts, and Sunday Grand Prix races with dedicated onboard camera channels.",
    features: ["Pit Lane & Onboard Feeds", "Canadian Grand Prix Special", "Full Race Replays", "4K HDR Video Quality"]
  }
];
