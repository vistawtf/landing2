import { FooterSection } from "@/components/landing2/FooterSection";
import { HeroSection } from "@/components/landing2/HeroSection";
import { LatestSection } from "@/components/landing2/LatestSection";
import { Navigation } from "@/components/landing2/Navigation";
import { NewsletterSection } from "@/components/landing2/NewsletterSection";
import { ServicesSection } from "@/components/landing2/ServicesSection";
import { WhoWeAreSection } from "@/components/landing2/WhoWeAreSection";
import { HeroLatestDivider, SectionDivider } from "@/components/landing2/SectionDividers";

export default function Landing2Page() {
  return (
    <main className="relative scroll-smooth snap-y snap-mandatory">
      <Navigation />
      <HeroSection />
      <HeroLatestDivider />
      <LatestSection />
      <SectionDivider dark />
      <NewsletterSection />
      <SectionDivider dark />
      <ServicesSection />
      <SectionDivider dark />
      <WhoWeAreSection />
      <SectionDivider />
      <FooterSection />
    </main>
  );
}
