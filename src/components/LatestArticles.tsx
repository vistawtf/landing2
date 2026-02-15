"use client";

import { AnimatedSection, SectionHeader } from "./shared";

const placeholderArticles = [
  {
    category: "RESEARCH",
    title: "The State of AI Agents in DeFi",
    excerpt:
      "How autonomous agents are reshaping liquidity, MEV, and protocol governance — and what it means for builders.",
  },
  {
    category: "ANALYSIS",
    title: "LatAm's Crypto Moment",
    excerpt:
      "Why Latin America is becoming the most important region for crypto adoption, and the builders making it happen.",
  },
  {
    category: "OPINION",
    title: "The Newsletter Is the Product",
    excerpt:
      "In an era of information overload, curation is the killer app. Here's how we think about signal vs. noise.",
  },
];

export function LatestArticles() {
  return (
    <section id="articles" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <SectionHeader number="02" label="Latest from Vista" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {placeholderArticles.map((article, i) => (
            <AnimatedSection key={article.title} delay={i * 100}>
              <div className="group p-6 border border-border rounded-lg hover:border-ultra-orange/30 transition-all duration-300 opacity-80">
                <span className="text-[10px] font-mono font-semibold tracking-wider text-ultra-orange uppercase">
                  {article.category}
                </span>
                <h3 className="text-h3 text-foreground mt-2 mb-3">
                  {article.title}
                </h3>
                <p className="text-body-sm text-muted leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="text-caption text-muted-light italic">Coming soon</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8" delay={300}>
          <a
            href="https://vistasubstack.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm text-ultra-orange hover:underline"
          >
            Read more on Substack →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
