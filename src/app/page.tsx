import { FooterSection } from "@/components/landing2/FooterSection";
import { HeroSection } from "@/components/landing2/HeroSection";
import { LatestSection } from "@/components/landing2/LatestSection";
import { Navigation } from "@/components/landing2/Navigation";
import { NewsletterSection } from "@/components/landing2/NewsletterSection";
import { ServicesSection } from "@/components/landing2/ServicesSection";
import { WhoWeAreSection } from "@/components/landing2/WhoWeAreSection";

export default function LandingV2Page() {
  return (
    <main className="relative bg-[#E4E2D8] text-[#111111]" style={{ scrollSnapType: "y proximity" }}>
      <Navigation />
      <HeroSection />
      <LatestSection />
      <NewsletterSection />
      <ServicesSection />
      <WhoWeAreSection />
      <FooterSection />
    </main>
  );
}
