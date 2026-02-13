"use client";

import Image from "next/image";
import { AnimatedSection } from "./shared";
import { TwitterIcon } from "./icons";
import { Footer } from "./Footer";

export function AboutSection() {
  return (
    <section id="about" className="snap-section snap-section-end">
      <div className="about-content">
        <div className="container">
          <AnimatedSection delay={150}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <h3 className="text-h1 text-foreground">About Vista</h3>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-4 text-body text-muted leading-relaxed sm:text-lg">
                  <p>Vista is a research and execution team focused on blockchain and AI.</p>
                  <p>We treat information as the most valuable asset in onchain ecosystems, turning technical change into clear signals and practical strategy.</p>
                  <p>Our work combines data pipelines and research systems. For business teams, we provide practical AI upskilling and competitor intelligence as part of our work.</p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-border">
                  <p className="text-caption text-muted mb-3">Trusted by:</p>
                  <div className="flex flex-wrap items-center gap-6">
                    <a
                      href="https://apechain.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit ApeChain website"
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src="/partners/apeco black.svg"
                        alt="ApeChain logo"
                        width={140}
                        height={40}
                        className="about-partner-image-light h-6 sm:h-7 w-auto"
                      />
                      <Image
                        src="/partners/apeco.svg"
                        alt="ApeChain logo"
                        width={140}
                        height={40}
                        className="about-partner-image-dark h-6 sm:h-7 w-auto"
                      />
                    </a>
                    <a
                      href="https://obol.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Obol website"
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src="/partners/obol dark.svg"
                        alt="Obol logo"
                        width={138}
                        height={40}
                        className="about-partner-image-light h-6 sm:h-7 w-auto"
                      />
                      <Image
                        src="/partners/obol.svg"
                        alt="Obol logo"
                        width={138}
                        height={40}
                        className="about-partner-image-dark h-6 sm:h-7 w-auto"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <span className="text-caption text-muted">Follow {"->"}</span>
                  {[
                    { href: "https://twitter.com/viaboratorio", label: "Twitter", Icon: TwitterIcon },
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
