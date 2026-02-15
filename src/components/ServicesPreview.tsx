"use client";

import Link from "next/link";
import { AnimatedSection, SectionHeader } from "./shared";

const services = [
  {
    icon: "🧠",
    title: "AI Training",
    description:
      "Custom AI workshops and training programs for crypto teams. From prompt engineering to building internal AI tools — we make your team dangerous.",
  },
  {
    icon: "📡",
    title: "Marketing Campaigns",
    description:
      "Strategy, content, and distribution for protocols that want to be heard. We've helped projects go from unknown to unavoidable.",
  },
  {
    icon: "🔬",
    title: "Protocol Growth",
    description:
      "Research-backed growth strategies for onchain projects. Community, partnerships, narrative positioning — the full stack.",
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <SectionHeader number="01" label="What We Do" />

        <AnimatedSection className="mt-8 mb-12">
          <h2 className="text-h1 text-foreground max-w-xl">
            We don&apos;t just watch the future — we build it.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <Link
                href="/services"
                className="group block p-6 border border-border rounded-lg hover:border-ultra-orange/50 hover:bg-surface-hover transition-all duration-300"
              >
                <span className="text-2xl mb-4 block">{service.icon}</span>
                <h3 className="text-h3 text-foreground mb-2 group-hover:text-ultra-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-body-sm text-muted leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-caption text-ultra-orange font-medium">
                  Learn more →
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
