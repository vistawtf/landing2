"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/shared";

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
      {/* Header spacer */}
      <div className="h-14" />
      <main>
        <div className="container pt-8 pb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 12 12" fill="none">
              <path d="M9.5 6H2.5M2.5 6L6 2.5M2.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>
        </div>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <AnimatedSection>
              <h1 className="text-display text-foreground mb-4">We&apos;re Vista.</h1>
              <p className="text-body-lg text-muted max-w-lg">
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
                <div className="space-y-4 text-body text-muted leading-relaxed sm:text-lg">
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
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-h1 text-foreground mb-10">How We Think</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 100}>
                  <div className="p-6 border border-border rounded-lg">
                    <h3 className="text-h3 text-foreground mb-2">{value.title}</h3>
                    <p className="text-body-sm text-muted leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 md:py-32 border-t border-border">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-h1 text-foreground mb-4">Stay in the loop.</h2>
              <p className="text-body-lg text-muted mb-8 max-w-md mx-auto">
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
                <button type="submit" className="btn-primary">
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
