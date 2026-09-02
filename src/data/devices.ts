export interface DeviceGuide {
  id: string;
  name: string;
  slug: string;
  category: "streaming-stick" | "tv-box" | "smart-tv" | "mobile" | "pc";
  iconName: string;
  imageUrl: string;
  badge?: string;
  popularApps: string[];
  setupTime: string;
  difficulty: "Easy" | "Medium";
  summary: string;
  steps: {
    title: string;
    description: string;
    code?: string;
    tips?: string;
  }[];
}

export const DEVICES_LIST: DeviceGuide[] = [
  {
    id: "firestick",
    name: "Amazon Fire TV Stick / Cube / Omni",
    slug: "amazon-firestick",
    category: "streaming-stick",
    iconName: "Flame",
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
    badge: "Most Popular in Canada",
    popularApps: ["TiviMate Premium", "IPTV Smarters Pro", "XCIPTV", "Downloader"],
    setupTime: "3-5 Minutes",
    difficulty: "Easy",
    summary: "The most popular and easiest device for Canadian IPTV streaming. Supports 4K HDR, Dolby Atmos, and blazing fast channel zapping.",
    steps: [
      {
        title: "Step 1: Install 'Downloader' App",
        description: "From your Firestick home screen, navigate to 'Find' > 'Search' and type 'Downloader'. Install the orange Downloader app by AFTVnews.",
      },
      {
        title: "Step 2: Enable Developer Options",
        description: "Go to Settings > My Fire TV > About. Click your Fire TV device name 7 times until it says 'You are now a developer!'. Then go back to Developer Options and enable 'Install Unknown Apps' for Downloader.",
      },
      {
        title: "Step 3: Download IPTV App (e.g. TiviMate / Smarters)",
        description: "Open Downloader, enter our fast direct shortcode or URL (e.g. 'https://streamoraiptv.com/app.apk') and click Go to download and install.",
        code: "Downloader Code: 289411",
      },
      {
        title: "Step 4: Login with Xtream Codes API",
        description: "Launch the app, choose 'Login with Xtream Codes API', enter the Server URL, Username, and Password sent to your email.",
        tips: "Enjoy 25,000+ live 4K channels and automatic Canadian EPG!"
      }
    ]
  },
  {
    id: "android-tv",
    name: "Android TV & Google TV (Chromecast, Shield, Onn)",
    slug: "android-tv-box",
    category: "tv-box",
    iconName: "Tv",
    imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&auto=format&fit=crop",
    badge: "Native Play Store",
    popularApps: ["TiviMate", "IPTV Smarters Pro", "OTT Navigator", "Sparkle TV"],
    setupTime: "3 Minutes",
    difficulty: "Easy",
    summary: "Native Android TV support via Google Play Store with zero sideloading required for most apps.",
    steps: [
      {
        title: "Step 1: Open Google Play Store on TV",
        description: "Search for 'TiviMate IPTV Player' or 'IPTV Smarters Pro' directly on the Google Play Store and click Install.",
      },
      {
        title: "Step 2: Add Playlist / Xtream Codes",
        description: "Open TiviMate or Smarters, click 'Add Playlist' and select 'Xtream Codes'.",
      },
      {
        title: "Step 3: Enter Your Credentials",
        description: "Enter the Server URL (http://portal.streamoraiptv.com:80), your username, and your password from your activation email.",
      },
      {
        title: "Step 4: Load EPG and Stream",
        description: "Click Done to fetch the TV guide and on-demand movies library. Done!",
      }
    ]
  },
  {
    id: "smart-tv",
    name: "Samsung Smart TV (Tizen) & LG Smart TV (webOS)",
    slug: "samsung-lg-smart-tv",
    category: "smart-tv",
    iconName: "MonitorPlay",
    imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop",
    badge: "Direct TV App",
    popularApps: ["ibPlayer Pro", "Hot IPTV", "Nanomid", "Smart IPTV (SIPTV)", "SET IPTV"],
    setupTime: "5 Minutes",
    difficulty: "Easy",
    summary: "Watch directly on your Samsung or LG TV without needing extra cables, sticks, or boxes.",
    steps: [
      {
        title: "Step 1: Open Your TV App Store",
        description: "On Samsung TV (Samsung Apps) or LG TV (LG Content Store), search for 'ibPlayer Pro' or 'Hot IPTV'.",
      },
      {
        title: "Step 2: Find Your Device MAC Address / Device Key",
        description: "Open the app to display your TV's unique MAC address (e.g. 00:1A:79:XX:XX:XX) and Device Key.",
      },
      {
        title: "Step 3: Upload Playlist or Contact Canadian Support",
        description: "Visit the player portal or send your MAC address to our 24/7 Canadian support team, and we will remotely configure your portal within 2 minutes.",
      }
    ]
  },
  {
    id: "apple-ios",
    name: "Apple TV, iPhone & iPad (iOS / tvOS)",
    slug: "apple-tv-ios",
    category: "mobile",
    iconName: "Smartphone",
    imageUrl: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800&auto=format&fit=crop",
    badge: "60FPS AirPlay 2",
    popularApps: ["GSE Smart IPTV", "IPTVX", "Smarters Player Lite", "Snappier IPTV"],
    setupTime: "4 Minutes",
    difficulty: "Easy",
    summary: "Ultra smooth 60fps streaming with AirPlay 2, Picture-in-Picture, and iCloud sync across all Apple devices.",
    steps: [
      {
        title: "Step 1: Install from Apple App Store",
        description: "Search and install 'Smarters Player Lite' or 'IPTVX' from the App Store on iOS or Apple TV 4K.",
      },
      {
        title: "Step 2: Login with Xtream API",
        description: "Choose Xtream Codes login option in the app.",
      },
      {
        title: "Step 3: Enter Your Subscription Details",
        description: "Input the Server URL, Username, and Password received in your welcome email.",
      }
    ]
  },
  {
    id: "mag-formuler",
    name: "MAG Box (254/322/524), Formuler & BuzzTV",
    slug: "mag-formuler-buzztv",
    category: "tv-box",
    iconName: "Box",
    imageUrl: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=800&auto=format&fit=crop",
    badge: "Hardware Set-Top",
    popularApps: ["MyTVOnline 2/3 (Formuler)", "Inner Portal (MAG)", "BuzzTV App 5"],
    setupTime: "2 Minutes",
    difficulty: "Easy",
    summary: "Dedicated Stalker portal configuration for hardware IPTV set-top boxes with native remote control buttons.",
    steps: [
      {
        title: "Step 1: Provide MAC Address During Order",
        description: "Provide your MAG / Formuler MAC address (starting with 00:1A:79) when connecting with our team via WhatsApp support.",
      },
      {
        title: "Step 2: Set Portal URL in Box Settings",
        description: "In System Settings > Servers > Portals, set Portal 1 URL to 'http://mag.streamoraiptv.com/c/'.",
      },
      {
        title: "Step 3: Reboot Portal",
        description: "Restart your box. Your channels and full TV guide will load automatically.",
      }
    ]
  },
  {
    id: "pc-mac",
    name: "Windows PC & Mac OS",
    slug: "windows-mac-pc",
    category: "pc",
    iconName: "Laptop",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    badge: "Web & Desktop App",
    popularApps: ["IPTV Smarters Desktop", "VLC Media Player", "Web Player Portal"],
    setupTime: "2 Minutes",
    difficulty: "Easy",
    summary: "Watch in your browser or through desktop software while working or traveling anywhere in the world.",
    steps: [
      {
        title: "Step 1: Web Player (No Install)",
        description: "Visit our fast web player at 'http://web.streamoraiptv.com' and log in directly with your username and password.",
      },
      {
        title: "Step 2: Or Download Desktop App",
        description: "Download IPTV Smarters Pro for Windows (.exe) or Mac (.dmg) from our installation center.",
      }
    ]
  }
];
