"use client";

import Image from "next/image";
import { AnimatedSection, SectionHeader } from "./shared";

const stats = [
  { value: "10,000+", label: "Newsletter readers" },
  { value: "5,000+", label: "Community members" },
  { value: "15+", label: "Protocols served" },
];

export function SocialProof() {
  return (
    <section id="proof" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <SectionHeader number="03" label="By the Numbers" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 100}>
              <div className="text-center sm:text-left">
                <p className="text-display text-ultra-orange font-medium">{stat.value}</p>
                <p className="text-body-sm text-muted mt-1">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12" delay={300}>
          <p className="text-caption text-muted mb-4">Trusted by:</p>
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="https://apechain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/partners/apeco black.svg"
                alt="ApeChain"
                width={140}
                height={40}
                className="about-partner-image-light h-7 w-auto"
              />
              <Image
                src="/partners/apeco.svg"
                alt="ApeChain"
                width={140}
                height={40}
                className="about-partner-image-dark h-7 w-auto"
              />
            </a>
            <a
              href="https://obol.org"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/partners/obol dark.svg"
                alt="Obol"
                width={138}
                height={40}
                className="about-partner-image-light h-7 w-auto"
              />
              <Image
                src="/partners/obol.svg"
                alt="Obol"
                width={138}
                height={40}
                className="about-partner-image-dark h-7 w-auto"
              />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
