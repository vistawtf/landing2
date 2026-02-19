"use client";

import { AnimatedSection, SectionHeader } from "./shared";
import { SOCIAL_SUBSTACK } from "@/lib/constants";

const placeholderArticles = [
  {
    title: "The AI Agent Stack Is Consolidating — Here's Who Wins",
    date: "Feb 12, 2026",
    category: "AI",
    excerpt:
      "Three infrastructure layers are emerging as the default rails for autonomous agents. We break down the convergence and what it means for builders.",
  },
  {
    title: "Restaking Economics: Beyond the Points Meta",
    date: "Feb 5, 2026",
    category: "DeFi",
    excerpt:
      "Points season is fading, but the economic design space for restaking is just getting started. A look at sustainable models emerging from the noise.",
  },
  {
    title: "Why LatAm Is Crypto's Most Underrated Market",
    date: "Jan 29, 2026",
    category: "Ecosystem",
    excerpt:
      "Real usage, real demand, real builders. We spent 6 months mapping the Latin American crypto ecosystem and found something most VCs are missing.",
  },
];

export function ArticlesPreview() {
  return (
    <section id="articles" className="section-spacing border-t border-border">
      <div className="container">
        <SectionHeader number="02" label="Latest from Vista" />

        <div className="articles-preview-grid mt-10">
          {placeholderArticles.map((article, i) => (
            <AnimatedSection key={article.title} delay={i * 120}>
              <a
                href={SOCIAL_SUBSTACK}
                target="_blank"
                rel="noopener noreferrer"
                className="article-card group"
              >
                <div className="article-card-meta">
                  <span className="article-card-category">{article.category}</span>
                  <span className="article-card-date">{article.date}</span>
                </div>
                <h3 className="article-card-title group-hover:text-ultra-orange transition-colors duration-300">{article.title}</h3>
                <p className="article-card-excerpt">{article.excerpt}</p>
                <span className="article-card-read">
                  Read on Substack
                  <svg className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
