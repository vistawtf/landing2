"use client";

import { AnimatedSection, SectionHeader } from "./shared";
import { TwitterIcon, LinkedInIcon } from "./icons";
import { Footer } from "./Footer";

export function AboutSection() {
  return (
    <section id="about" className="snap-section snap-section-end">
      <SectionHeader number="02" label="About" />

      <div className="about-content section-content-with-header">
        <div className="container">
          <AnimatedSection delay={150}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <h3 className="text-h1 text-foreground">Built by Vista</h3>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-4 text-body text-muted leading-relaxed sm:text-lg">
                  <p>We&apos;re not a news outlet. We&apos;re builders actively working with and for major projects in the ecosystem.</p>
                  <p>
                    We&apos;re the team behind{" "}
                    <a href="https://ethlatam.org" target="_blank" rel="noopener noreferrer" className="text-ultra-orange hover:underline">ethlatam.org</a>
                    {" "}— the largest Ethereum event in Latin America.
                  </p>
                  <p>We live on the frontier of these technologies, and we&apos;re passionate about helping people and businesses in our region compete with the best tools in the world.</p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-border">
                  <p className="text-caption text-muted mb-3">Trusted by:</p>
                  <div className="flex flex-wrap items-center gap-4">
                    {["Client Logo 1", "Client Logo 2", "Client Logo 3"].map((label) => (
                      <div key={label} className="px-4 py-2 border border-dashed border-border text-caption text-muted">[{label}]</div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <span className="text-caption text-muted">Follow →</span>
                  {[
                    { href: "https://twitter.com/viaboratorio", label: "Twitter", Icon: TwitterIcon },
                    { href: "https://linkedin.com/company/vista", label: "LinkedIn", Icon: LinkedInIcon },
                  ].map(({ href, label, Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-ultra-orange transition-colors" aria-label={label}>
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </section>
  );
}
