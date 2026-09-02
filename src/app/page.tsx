import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import CommunitySlider from "@/components/home/CommunitySlider";
import PricingSection from "@/components/home/PricingSection";
import HowItWorks from "@/components/home/HowItWorks";
import TechnologySection from "@/components/home/TechnologySection";
import DeviceGrid from "@/components/home/DeviceGrid";
import ComparisonTable from "@/components/home/ComparisonTable";
import SportsSection from "@/components/home/SportsSection";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* 01. Hero Main Spotlight */}
      <Hero />

      {/* Stats Counter Strip */}
      <StatsStrip />

      {/* 02. Curved Motion Images Slider ("Let's connect / Join the Community") */}
      <CommunitySlider />

      {/* 03. Pricing & Subscription Plans */}
      <PricingSection />

      {/* 04. How It Works (3 Steps) */}
      <HowItWorks />

      {/* 05. IPTV Service Explained (Technology) */}
      <TechnologySection />

      {/* 06. Universal Device Compatibility */}
      <DeviceGrid />

      {/* 07. Comparison Table */}
      <ComparisonTable />

      {/* 08. Live Sports & PPV */}
      <SportsSection />

      {/* 10. Customer Testimonials */}
      <Testimonials />

      {/* 12. Frequently Asked Questions */}
      <FaqSection />

      {/* 13. Grand Finale CTA Banner */}
      <CtaBanner />
    </main>
  );
}
