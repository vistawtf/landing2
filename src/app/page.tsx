import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LatestSection } from "@/components/sections/LatestSection";
import { Navigation } from "@/components/sections/Navigation";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HeroLatestDivider, SectionDivider } from "@/components/sections/SectionDividers";

export default function Landing2Page() {
  return (
    <main className="relative scroll-smooth">
      <Navigation />
      <HeroSection />
      <HeroLatestDivider />
      <LatestSection />
      <SectionDivider dark />
      <NewsletterSection />
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
