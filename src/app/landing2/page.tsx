"use client";

import { Navigation } from '@/components/landing2/Navigation';
import { HeroSection } from '@/components/landing2/HeroSection';
import { LatestSection } from '@/components/landing2/LatestSection';
import { NewsletterSection } from '@/components/landing2/NewsletterSection';
import { ServicesSection } from '@/components/landing2/ServicesSection';
import { WhoWeAreSection } from '@/components/landing2/WhoWeAreSection';
import { FooterSection } from '@/components/landing2/FooterSection';

function SectionDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className="w-full"
      style={{
        height: '1px',
        background: dark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
      }}
      aria-hidden="true"
    />
  );
}

function HeroLatestDivider() {
  return (
    <div className="w-full py-2" aria-hidden="true">
      <div
        style={{
          height: '10px',
          background: '#FF5233',
          boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)',
        }}
      />
    </div>
  );
}

export default function Landing2Page() {
  return (
    <main className="relative">
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
      <FooterSection />
    </main>
  );
}
