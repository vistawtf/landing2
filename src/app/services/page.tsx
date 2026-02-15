"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/shared";
import { Footer } from "@/components/Footer";

const services = [
  {
    icon: "⚡",
    title: "AI Training",
    subtitle: "Custom models that understand your ecosystem",
    description:
      "We build and fine-tune AI models tailored to your protocol's needs. From data pipeline architecture to production-ready agents that automate research, moderation, and user support.",
    includes: [
      "Custom training data pipelines",
      "Model fine-tuning & evaluation",
      "Agent design & deployment",
      "Ongoing model maintenance",
    ],
  },
  {
    icon: "📡",
    title: "Marketing Campaigns",
    subtitle: "Strategy that cuts through crypto noise",
    description:
      "Research-backed narratives combined with distribution that reaches the right builders and investors. We don't do hype — we do informed, targeted, and measurable campaigns.",
    includes: [
      "Market & competitor research",
      "Narrative development",
      "Content production & distribution",
      "KOL coordination & management",
    ],
  },
  {
    icon: "🚀",
    title: "Protocol Promotion",
    subtitle: "End-to-end launch and growth support",
    description:
      "From pre-launch awareness to sustained community growth. We handle the full stack: positioning, community activation, media outreach, and analytics.",
    includes: [
      "Launch strategy & execution",
      "Community building & activation",
      "Media & PR outreach",
      "Analytics & growth tracking",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="h-14" />
      <div className="container">
        <div className="pt-8 pb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 12 12" fill="none">
              <path d="M9.5 6H2.5M2.5 6L6 2.5M2.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </div>

        <div className="pt-8 pb-16 border-b border-border">
          <AnimatedSection>
            <span className="text-label text-ultra-orange mb-4 block">Services</span>
            <h1 className="text-display text-foreground mb-4" style={{ fontWeight: 400 }}>
              What we build
            </h1>
            <p className="text-body-lg text-muted max-w-lg">
              We combine deep research with execution. Whether you need AI infrastructure,
              market strategy, or full-stack promotion — we ship results, not decks.
            </p>
          </AnimatedSection>
        </div>

        <div className="py-16 space-y-0">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-16 ${i > 0 ? "border-t border-border" : ""}`}>
                <div>
                  <div className="text-2xl mb-4">{service.icon}</div>
                  <h2 className="text-h1 text-foreground mb-2">{service.title}</h2>
                  <p className="text-body text-ultra-orange mb-4">{service.subtitle}</p>
                  <p className="text-body text-muted leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <h3 className="text-label text-muted mb-6">What&apos;s included</h3>
                  <ul className="space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body-sm text-foreground">
                        <span className="text-ultra-orange mt-1 text-xs">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="py-16 border-t border-border text-center">
            <h2 className="text-h1 text-foreground mb-4">Ready to build?</h2>
            <p className="text-body text-muted mb-8 max-w-md mx-auto">
              Tell us about your project and we&apos;ll scope a plan that fits.
            </p>
            <a href="mailto:info@vista.wtf" className="btn-primary inline-flex items-center gap-2">
              Get in touch
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  );
}
