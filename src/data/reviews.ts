export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  province: string;
  avatarUrl: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  deviceUsed: string;
}

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Michael S.",
    location: "Toronto, ON",
    province: "Ontario",
    avatarUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 5,
    date: "July 14, 2025",
    comment: "The streaming quality is exceptional, and customer support is always there when needed. Over 25,000 channels with zero buffering during Saturday night NHL games. Best IPTV service in Canada by a mile.",
    verifiedPurchase: true,
    deviceUsed: "Firestick 4K Max (TiviMate)"
  },
  {
    id: "rev-2",
    name: "Sarah M.",
    location: "Vancouver, BC",
    province: "British Columbia",
    avatarUrl: "https://randomuser.me/api/portraits/women/9.jpg",
    rating: 5,
    date: "August 02, 2025",
    comment: "Been using Streamora IPTV for sports and movies for over 8 months now. The 4K quality is amazing with zero buffering. Ordered on WhatsApp and had my login in under 7 minutes!",
    verifiedPurchase: true,
    deviceUsed: "Apple TV 4K (IPTVX)"
  },
  // {
  //   id: "rev-3",
  //   name: "Émilie R.",
  //   location: "Montréal, QC",
  //   province: "Québec",
  //   avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg",
  //   rating: 5,
  //   date: "June 28, 2025",
  //   comment: "Enfin un vrai service IPTV fiable au Québec! RDS, TVA Sports, ICI Radio-Canada et tous les films récents en français québécois. Service client bilingue très réactif.",
  //   verifiedPurchase: true,
  //   deviceUsed: "Formuler Z11 Pro Max"
  // },
  {
    id: "rev-3",
    name: "David K.",
    location: "Calgary, AB",
    province: "Alberta",
    avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 5,
    date: "September 11, 2025",
    comment: "I was paying over $160/mo to Telus with half the channels. Now I pay $79 for a full year and have every sports channel, PPV event, and movie in 4K.",
    verifiedPurchase: true,
    deviceUsed: "Nvidia Shield Pro"
  },
  // {
  //   id: "rev-5",
  //   name: "Marc L.",
  //   location: "Ottawa, ON",
  //   province: "Ontario",
  //   avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg",
  //   rating: 5,
  //   date: "October 05, 2025",
  //   comment: "Tried 3 other IPTV services before this one and all of them froze during UFC fights. IPTV Canada's anti-freeze servers stayed rock solid in 4K throughout the entire fight card.",
  //   verifiedPurchase: true,
  //   deviceUsed: "Google Chromecast 4K"
  // },
  // {
  //   id: "rev-6",
  //   name: "Jennifer P.",
  //   location: "Halifax, NS",
  //   province: "Nova Scotia",
  //   avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  //   rating: 5,
  //   date: "November 19, 2025",
  //   comment: "Got the 3-device family plan. Kids watch Disney, husband catches sports, and I watch Netflix series on Smart TV. Fantastic value and top picture quality.",
  //   verifiedPurchase: true,
  //   deviceUsed: "Samsung Smart TV"
  // }
];
