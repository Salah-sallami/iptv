import { MetadataRoute } from "next";
import { CANADIAN_CITIES } from "@/data/cities";
import { BLOG_POSTS } from "@/data/blog-posts";
import { DEVICES_LIST } from "@/data/devices";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Primary SEO and Commercial Hub Routes
  const primaryRoutes = [
    { path: "", priority: 1.0, freq: "daily" as const },
    { path: "/iptv-subscription", priority: 0.95, freq: "daily" as const },
    { path: "/iptv-plans", priority: 0.95, freq: "daily" as const },
    { path: "/iptv-for-firestick", priority: 0.9, freq: "weekly" as const },
    { path: "/iptv-for-smart-tv", priority: 0.9, freq: "weekly" as const },
    { path: "/iptv-for-android-tv", priority: 0.9, freq: "weekly" as const },
    { path: "/iptv-for-google-tv", priority: 0.9, freq: "weekly" as const },
    { path: "/iptv-setup", priority: 0.9, freq: "weekly" as const },
    { path: "/iptv-guide", priority: 0.85, freq: "weekly" as const },
    { path: "/channels", priority: 0.85, freq: "daily" as const },
    { path: "/sports", priority: 0.85, freq: "daily" as const },
    { path: "/pricing", priority: 0.8, freq: "daily" as const },
    { path: "/installation-guide", priority: 0.8, freq: "weekly" as const },
    { path: "/blog", priority: 0.8, freq: "daily" as const },
    { path: "/legal/dmca", priority: 0.3, freq: "monthly" as const },
    { path: "/legal/terms", priority: 0.3, freq: "monthly" as const },
    { path: "/legal/privacy", priority: 0.3, freq: "monthly" as const },
    { path: "/legal/refund", priority: 0.3, freq: "monthly" as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.freq,
    priority: route.priority,
  }));

  // City programmatic SEO landing routes
  const cityRoutes = CANADIAN_CITIES.map((city) => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Blog article routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Device installation guides
  const deviceRoutes = DEVICES_LIST.map((device) => ({
    url: `${baseUrl}/installation-guide/${device.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...primaryRoutes, ...cityRoutes, ...blogRoutes, ...deviceRoutes];
}
