"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/shared";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const services = [
  {
    number: "01",
    title: "AI Training & Upskilling",
    tagline: "Make your team dangerous.",
    description:
      "Most crypto teams know AI matters. Few know what to do about it. We run custom workshops — from prompt engineering to building internal AI tools — designed for your team's actual workflow. Not generic courses. Real, applied training.",
    includes: [
      "Custom curriculum for each team",
      "Hands-on workshops, not slide decks",
      "From beginner to building internal tools",
      "Ongoing support after training",
    ],
  },
  {
    number: "02",
    title: "Marketing Campaigns",
    tagline: "From unknown to unavoidable.",
    description:
      "Good projects die in silence every day. We make sure yours doesn't. Strategy, content, and distribution built for crypto. We understand the culture, the channels, and the narratives that move markets.",
    includes: [
      "Full-stack: strategy → content → distribution",
      "Crypto-native team (we live here)",
      "Community-first approach",
      "Data-driven, not vibes-driven",
    ],
  },
  {
    number: "03",
    title: "Protocol Growth",
    tagline: "Research-backed growth, full stack.",
    description:
      "Growth in crypto isn't just marketing — it's ecosystem strategy. We combine research, community building, and narrative positioning to help protocols find their place in the market and grow there.",
    includes: [
      "Competitive research & positioning",
      "Community strategy & activation",
      "Partnership facilitation",
      "Narrative development",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container">
            <AnimatedSection>
              <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-foreground transition-colors mb-8">
                <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                  <path d="M9.5 6H2.5M2.5 6L6 2.5M2.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to home
              </Link>
              <span className="text-label text-ultra-orange mb-4 block">Services</span>
              <h1 className="text-display text-foreground mb-5" style={{ fontWeight: 400 }}>
                What we build
              </h1>
              <p className="text-body-lg text-muted max-w-lg leading-relaxed">
                We combine deep research with execution. Whether you need AI infrastructure,
                market strategy, or full-stack growth — we ship results, not decks.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services */}
        <div className="container">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <section className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 py-16 md:py-20 ${i > 0 ? "border-t border-border" : "border-t border-border"}`}>
                <div>
                  <span className="text-[11px] font-mono text-muted-light tracking-wider">{service.number}</span>
                  <h2 className="text-h1 text-foreground mt-2 mb-2">{service.title}</h2>
                  <p className="text-body text-ultra-orange/80 italic mb-6">{service.tagline}</p>
                  <p className="text-body text-muted leading-[1.7]">{service.description}</p>
                </div>
                <div className="lg:pt-8">
                  <h3 className="text-label text-muted-light mb-6">What&apos;s included</h3>
                  <ul className="space-y-4">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body-sm text-foreground">
                        <span className="text-ultra-orange mt-0.5 text-xs font-mono">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <section className="section-spacing border-t border-border">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-h1 text-foreground mb-4">Ready to build?</h2>
              <p className="text-body text-muted mb-8 max-w-md mx-auto leading-relaxed">
                Tell us about your project and we&apos;ll scope a plan that fits.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:info@vista.wtf" className="subscribe-btn inline-flex items-center gap-2">
                  Get in touch
                  <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link href="/" className="text-body-sm text-muted hover:text-ultra-orange transition-colors">
                  Or just follow along →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
