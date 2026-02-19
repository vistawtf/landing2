"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/shared";
import { TwitterIcon } from "@/components/icons";

const values = [
  {
    title: "Signal over noise",
    description: "We filter thousands of data points into what actually matters. No filler, no hype.",
  },
  {
    title: "Edge without effort",
    description: "Confidence in restraint. We're opinionated, but we show our work.",
  },
  {
    title: "Build in public",
    description: "Our newsletter is our product. Our reputation is our track record. Everything we do is out there.",
  },
  {
    title: "LatAm-first, globally relevant",
    description: "We're building from Latin America because the most interesting things are happening here.",
  },
];

export default function AboutPage() {
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
              <h1 className="text-display text-foreground mb-5" style={{ fontWeight: 400 }}>
                We&apos;re Vista.
              </h1>
              <p className="text-body-lg text-muted max-w-lg leading-relaxed">
                A research collective investigating the future of blockchain and AI. Based in Latin America, building for the world.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <AnimatedSection>
                <h2 className="text-h1 text-foreground">The Story</h2>
              </AnimatedSection>
              <AnimatedSection delay={100} className="lg:col-span-2">
                <div className="space-y-5 text-body text-muted leading-[1.75] sm:text-[1.0625rem]">
                  <p>
                    Vista started with a simple observation: the most valuable thing in crypto isn&apos;t the tokens — it&apos;s the information.
                  </p>
                  <p>
                    We built a newsletter. Then a community. Then clients started asking us to help them too. Now we&apos;re a research and execution team that helps protocols grow with intelligence, not noise.
                  </p>
                  <p>
                    We&apos;re still writers first. Everything we do is built on research, clear thinking, and the belief that if you can explain something simply, you actually understand it.
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <p className="text-label text-muted-light mb-4">Trusted by</p>
                  <div className="flex flex-wrap items-center gap-8">
                    <a href="https://apechain.com" target="_blank" rel="noopener noreferrer" className="client-logo">
                      <Image src="/partners/apeco black.svg" alt="ApeChain" width={140} height={40} className="about-partner-image-light h-6 sm:h-7 w-auto" />
                      <Image src="/partners/apeco.svg" alt="ApeChain" width={140} height={40} className="about-partner-image-dark h-6 sm:h-7 w-auto" />
                    </a>
                    <a href="https://obol.org" target="_blank" rel="noopener noreferrer" className="client-logo">
                      <Image src="/partners/obol dark.svg" alt="Obol" width={138} height={40} className="about-partner-image-light h-6 sm:h-7 w-auto" />
                      <Image src="/partners/obol.svg" alt="Obol" width={138} height={40} className="about-partner-image-dark h-6 sm:h-7 w-auto" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <span className="text-label text-muted-light">Follow</span>
                  <a href="https://twitter.com/vistawtf" target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-ultra-orange transition-colors" aria-label="Twitter">
                    <TwitterIcon className="w-[18px] h-[18px]" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-h1 text-foreground mb-12">How We Think</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 100}>
                  <div className="value-card">
                    <h3 className="text-[1.0625rem] font-medium text-foreground mb-2">{value.title}</h3>
                    <p className="text-body-sm text-muted leading-[1.65]">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-spacing border-t border-border">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-h1 text-foreground mb-4">Stay in the loop.</h2>
              <p className="text-body-lg text-muted mb-8 max-w-md mx-auto leading-relaxed">
                Join 10,000+ readers getting the best of blockchain & AI, weekly.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="input flex-1"
                  required
                />
                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
              </form>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
