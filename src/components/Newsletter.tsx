"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "./shared";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="snap-section">
      <div className="snap-section-center">
        <div className="container">
          <AnimatedSection delay={150}>
            <div className="newsletter-hero-card relative isolate flex w-full min-h-[270px] items-start overflow-hidden border border-[#d4d4d4] bg-[#f7f7f7] px-[clamp(18px,3vw,26px)] py-[clamp(28px,3.9vw,40px)] max-md:pb-[18px] md:min-h-[clamp(500px,64vh,640px)] md:py-[clamp(40px,4.8vw,58px)] md:px-[clamp(24px,2.8vw,36px)] md:items-center">
              <div className="newsletter-hero-bg-base absolute inset-0 bg-[#f7f7f7]" aria-hidden="true" />
              <div
                className="newsletter-hero-vector absolute inset-0 bg-[url('/frame-110.svg')] bg-no-repeat bg-[length:auto_125%] bg-[position:170%_center] md:bg-[length:auto_108%] md:bg-[position:100%_center] lg:bg-[length:auto_112%] lg:bg-[position:100%_center]"
                aria-hidden="true"
              />
              <div
                className="newsletter-hero-overlay absolute inset-0"
                aria-hidden="true"
              />

              <div className="newsletter-hero-content relative z-10 w-full">
                <div className="newsletter-hero-layout">
                  <div className="newsletter-hero-main">
                    <div className="newsletter-kicker-row">
                      <p className="newsletter-hero-kicker">EMERGENT STACK BY ETH LATAM</p>
                      <ul className="newsletter-proof-row newsletter-proof-row-inline" aria-label="Newsletter social proof">
                        <li className="newsletter-proof-chip">10k+ subscribers</li>
                      </ul>
                    </div>
                    <h2 className="newsletter-hero-title">
                      Less scrolling & more insights:
                      <br />
                      The blockchain + AI newsletter for builders shaping the future
                    </h2>
                    <ul className="newsletter-hero-bullets" aria-label="Newsletter highlights">
                      <li>Curated signals, without the noise.</li>
                      <li>Built for operators shipping across LatAm.</li>
                      <li>Read in minutes, relevant all week.</li>
                    </ul>
                  </div>

                  <div className="newsletter-hero-form-wrap">
                    <form
                      className="newsletter-hero-form"
                      onSubmit={(e) => e.preventDefault()}
                      aria-label="Subscribe to Emergent Stack newsletter"
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
                      >
                        <span>SUBSCRIBE</span>
                        <ChevronRight className="newsletter-hero-submit-icon" strokeWidth={2.2} />
                      </button>
                    </form>
                    <p className="newsletter-meta newsletter-form-meta">
                      authored by <span className="newsletter-subcopy-emphasis">vista</span> in collab with arco.lat
                    </p>
                  </div>

                  <div className="newsletter-hero-partners" aria-label="Newsletter partners and distribution">
                    <div className="newsletter-partner-strip" role="group" aria-label="Arco and ETH Latam logos">
                      <a
                        href="https://ethlatam.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="newsletter-partner-link newsletter-partner-logo newsletter-partner-logo-eth"
                        aria-label="Visit ETH Latam website"
                      >
                        <Image
                          src="/partners/eth-latam-black.svg"
                          alt="ETH Latam logo"
                          width={1408}
                          height={710}
                          className="newsletter-partner-image newsletter-partner-image-light"
                        />
                        <Image
                          src="/partners/eth-latam-white.svg"
                          alt="ETH Latam logo"
                          width={1408}
                          height={710}
                          className="newsletter-partner-image newsletter-partner-image-dark"
                        />
                      </a>
                      <a
                        href="https://arco.lat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="newsletter-partner-link newsletter-partner-logo newsletter-partner-logo-arco"
                        aria-label="Visit Arco website"
                      >
                        <Image
                          src="/partners/arco-black.png"
                          alt="Arco Latam Studio logo"
                          width={780}
                          height={485}
                          className="newsletter-partner-image newsletter-partner-image-light"
                        />
                        <Image
                          src="/partners/arco-white.png"
                          alt="Arco Latam Studio logo"
                          width={780}
                          height={485}
                          className="newsletter-partner-image newsletter-partner-image-dark"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
