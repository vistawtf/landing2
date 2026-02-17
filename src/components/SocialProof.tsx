"use client";

import Image from "next/image";
import { AnimatedSection, SectionHeader } from "./shared";

const stats = [
  { value: "10,000+", label: "Newsletter readers" },
  { value: "5,000+", label: "Telegram community" },
  { value: "15+", label: "Protocols served" },
];

const clients = [
  {
    name: "ApeChain",
    href: "https://apechain.com",
    lightSrc: "/partners/apeco black.svg",
    darkSrc: "/partners/apeco.svg",
    width: 140,
    height: 40,
  },
  {
    name: "Obol",
    href: "https://obol.org",
    lightSrc: "/partners/obol dark.svg",
    darkSrc: "/partners/obol.svg",
    width: 138,
    height: 40,
  },
];

export function SocialProof() {
  return (
    <section id="proof" className="section-spacing border-t border-border">
      <div className="container">
        <SectionHeader number="03" label="By the Numbers" />

        <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-12">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 120}>
              <div>
                <p className="stat-value">{stat.value}</p>
                <p className="text-body-sm text-muted mt-1">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16" delay={400}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <span className="text-label text-muted-light">Trusted by</span>
            <div className="flex flex-wrap items-center gap-8">
              {clients.map((client) => (
                <a
                  key={client.name}
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="client-logo"
                  aria-label={client.name}
                >
                  <Image
                    src={client.lightSrc}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="about-partner-image-light h-6 sm:h-7 w-auto"
                  />
                  <Image
                    src={client.darkSrc}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="about-partner-image-dark h-6 sm:h-7 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
