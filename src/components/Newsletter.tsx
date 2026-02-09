"use client";

import { useState } from "react";
import { AnimatedSection, SectionHeader } from "./shared";
import { ArrowRightIcon } from "./icons";

const NEWSLETTER_ITEMS = [
  { icon: "📰", text: "Top story of the week (no hype)" },
  { icon: "🔧", text: "Tool of the week — tools we actually use" },
  { icon: "📖", text: "Practical tutorial or how-to" },
  { icon: "⚖️", text: "Regulatory updates" },
  { icon: "💼", text: "Job opportunities" },
  { icon: "🎁", text: "Partner perks & discounts" },
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="newsletter" className="snap-section">
      <SectionHeader number="01" label="Current Project" />

      <div className="snap-section-center section-content-with-header">
        <div className="container">
          <AnimatedSection delay={150}>
            <div className="newsletter-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Content */}
                <div className="flex flex-col justify-center">
                  <p className="text-body-sm text-ultra-orange mb-2 flex items-center gap-2">
                    <span>✦</span>
                    <span>Join over 10,000 subscribers</span>
                  </p>
                  <h2 className="text-h1 text-foreground mb-3">Emergent Stack</h2>
                  <p className="text-body text-muted italic mb-6">
                    Crypto + AI in Latin America — signals, tools, and field-tested guides.
                  </p>

                  <div className="mb-6">
                    <p className="text-body text-foreground mb-3 font-semibold">
                      What you&apos;ll get every 2 weeks:
                    </p>
                    <ul className="space-y-2 text-body-sm text-muted">
                      {NEWSLETTER_ITEMS.map(({ icon, text }) => (
                        <li key={icon} className="flex items-start gap-2">
                          <span className="flex-shrink-0">{icon}</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-caption text-muted mb-3">In partnership with:</p>
                    <div className="flex items-center gap-4">
                      <div className="px-4 py-2 border border-dashed border-border text-caption text-muted">[ETH Latam Logo]</div>
                      <div className="px-4 py-2 border border-dashed border-border text-caption text-muted">[Arco Logo]</div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="flex flex-col justify-center">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      disabled={status === "loading"}
                      className="input w-full"
                    />
                    <button type="submit" disabled={status === "loading"} className="btn-primary w-full px-8 py-4 justify-center">
                      {status === "loading" ? "..." : status === "success" ? "✓ You're in!" : <>JOIN FREE <ArrowRightIcon /></>}
                    </button>
                  </form>
                  <p className="mt-4 text-caption text-muted text-center">No spam. Unsubscribe anytime.</p>
                  {status === "success" && (
                    <p className="mt-4 text-medium-lime text-sm animate-fade-in text-center">
                      Thanks for subscribing! We&apos;ll be in touch soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
