"use client";

import Link from "next/link";
import { AnimatedSection, SectionHeader } from "./shared";

const services = [
  {
    number: "01",
    title: "AI Training",
    description:
      "Custom AI workshops and training programs for crypto teams. From prompt engineering to building internal tools — we make your team dangerous.",
    href: "/services",
  },
  {
    number: "02",
    title: "Marketing Campaigns",
    description:
      "Strategy, content, and distribution for protocols that want to be heard. We've helped projects go from unknown to unavoidable.",
    href: "/services",
  },
  {
    number: "03",
    title: "Protocol Growth",
    description:
      "Research-backed growth strategies for onchain projects. Community, partnerships, narrative positioning — the full stack.",
    href: "/services",
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="section-spacing">
      <div className="container">
        <SectionHeader number="01" label="What We Do" />

        <AnimatedSection className="mt-8 mb-14">
          <h2 className="text-h1 text-foreground max-w-xl">
            We don&apos;t just watch the future — we build it.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 120}>
              <Link href={service.href} className="service-card group">
                <div className="service-card-inner">
                  <span className="text-[11px] font-mono text-muted-light tracking-wider">{service.number}</span>
                  <h3 className="text-[1.0625rem] font-medium text-foreground mt-3 mb-3 group-hover:text-ultra-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-body-sm text-muted leading-[1.65] flex-1">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 text-[13px] font-medium text-ultra-orange opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    Learn more
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
