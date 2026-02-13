"use client";

import { ChevronRight } from "lucide-react";
import { AnimatedSection, SectionHeader } from "./shared";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="snap-section">
      <SectionHeader number="01" label="Current Project" />

      <div className="snap-section-center section-content-with-header">
        <div className="container">
          <AnimatedSection delay={150}>
            <div className="newsletter-hero-card relative isolate flex w-full min-h-[270px] items-start overflow-hidden border border-[#d4d4d4] bg-[#f7f7f7] p-[clamp(20px,3.2vw,30px)] max-md:pb-[16px] md:min-h-[clamp(520px,72vh,920px)] md:h-full md:items-center">
              <div className="newsletter-hero-bg-base absolute inset-0 bg-[#f7f7f7]" aria-hidden="true" />
              <div
                className="newsletter-hero-vector absolute inset-0 bg-[url('/frame-110.svg')] bg-no-repeat bg-[length:auto_125%] bg-[position:170%_center] md:bg-[length:auto_108%] md:bg-[position:100%_center] lg:bg-[length:auto_112%] lg:bg-[position:100%_center]"
                aria-hidden="true"
              />
              <div
                className="newsletter-hero-overlay absolute inset-0"
                aria-hidden="true"
              />

              <div className="newsletter-hero-content relative z-10 w-full md:max-w-[62%]">
                <p className="newsletter-hero-kicker">GET VISTA IN YOUR INBOX</p>
                <h2 className="newsletter-hero-title">
                  Biweekly briefings on DeFi, L2s, AI agents, and emerging crypto trends.
                </h2>
                <ul className="newsletter-hero-bullets" aria-label="Newsletter highlights">
                  <li>Curated news, without the noise</li>
                  <li>Built for operators who ship</li>
                  <li>Read in minutes, relevant all week</li>
                </ul>
                <form
                  className="newsletter-hero-form"
                  onSubmit={(e) => e.preventDefault()}
                  aria-label="Subscribe to Vista newsletter"
                >
                  <input
                    type="email"
                    className="newsletter-hero-input"
                    placeholder="you@company.com"
                    aria-label="Email address"
                    required
                  />
                  <button
                    type="submit"
                    className="newsletter-hero-submit"
                    aria-label="Subscribe"
                    style={{ width: "auto", minWidth: "auto", padding: "0 16px", gap: "8px" }}
                  >
                    <span>Subscribe</span>
                    <ChevronRight className="newsletter-hero-submit-icon" strokeWidth={2.2} style={{ width: "18px", height: "18px" }} />
                  </button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
