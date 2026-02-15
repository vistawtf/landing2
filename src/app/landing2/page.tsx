"use client";

import { Navigation } from '@/components/landing2/Navigation';
import { HeroSection } from '@/components/landing2/HeroSection';
import { LatestSection } from '@/components/landing2/LatestSection';
import { NewsletterSection } from '@/components/landing2/NewsletterSection';
import { ServicesSection } from '@/components/landing2/ServicesSection';
import { WhoWeAreSection } from '@/components/landing2/WhoWeAreSection';
import { FooterSection } from '@/components/landing2/FooterSection';

export default function Landing2Page() {
  return (
    <main className="relative" style={{ scrollSnapType: 'y proximity' }}>
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
