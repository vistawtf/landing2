"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GridLines } from '../GridLines';

interface Article {
  title: string;
  excerpt: string;
  category: string;
  link: string;
  image?: string;
  date?: string;
}

const FALLBACK_GRADIENTS: Record<string, string> = {
  AI: 'linear-gradient(135deg, rgba(255,82,51,0.22) 0%, rgba(255,82,51,0.06) 100%)',
  DeFi: 'linear-gradient(135deg, rgba(17,17,17,0.10) 0%, rgba(17,17,17,0.04) 100%)',
  Infra: 'linear-gradient(135deg, rgba(176,107,88,0.22) 0%, rgba(176,107,88,0.08) 100%)',
  default: 'linear-gradient(135deg, rgba(255,82,51,0.16) 0%, rgba(17,17,17,0.05) 100%)',
};

const FALLBACK_ARTICLES: Article[] = [
  {
    title: 'The Future of AI Agents in DeFi',
    excerpt: 'Exploring how autonomous agents are reshaping decentralized finance protocols.',
    category: 'AI',
    link: '#',
  },
  {
    title: 'Protocol Governance 2.0',
    excerpt: 'New models for decentralized decision-making.',
    category: 'DeFi',
    link: '#',
  },
  {
    title: 'Infrastructure Scaling',
    excerpt: "How L2s are solving Ethereum's throughput challenges.",
    category: 'Infra',
    link: '#',
  },
  {
    title: 'MEV & Intent-Based Systems',
    excerpt: 'The evolution of transaction ordering and user intent.',
    category: 'DeFi',
    link: '#',
  },
  {
    title: 'AI Model Coordination',
    excerpt: 'Multi-agent systems working together on-chain.',
    category: 'AI',
    link: '#',
  },
];

// OPTION D: IMPROVED CURRENT LAYOUT
// Based on: Vista's current design
// Optimizes for: Better spacing + Prevent truncation + Black background
// Keeps: Same structure but improved proportions

function ArticleCard({ article, isLarge = false }: { article: Article; isLarge?: boolean }) {
  return (
    <Link
      href={article.link}
      className={`group block bg-[#111] hover:bg-[#1a1a1a] transition-colors duration-200 h-full ${isLarge ? '' : 'aspect-square'}`}
    >
      <article className="h-full flex flex-col">
        {/* Image - reduce to 35% for small cards to give more text space */}
        <div
          className={`w-full relative ${isLarge ? 'h-[50%]' : 'h-[35%]'} border-b border-white/[0.08]`}
          style={{
            background: article.image ? `url(${article.image}) center/cover` : FALLBACK_GRADIENTS[article.category] || FALLBACK_GRADIENTS.default,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/[0.20] to-transparent" />
        </div>

        <div className={`${isLarge ? 'p-5 md:p-6' : 'p-4'} flex-1 flex flex-col min-h-0`}>
          {/* Category badge */}
          <div className="text-[11px] font-semibold uppercase text-[#999999] tracking-[0.12em] mb-2">
            {article.category}
          </div>

          {/* Title - slightly smaller for small cards */}
          <h3 className={`${isLarge ? 'text-[28px] md:text-[32px]' : 'text-[17px] md:text-[18px]'} font-medium text-white mb-2 leading-[1.2] line-clamp-2`}>
            {article.title}
          </h3>

          {/* Description - always 2 lines max */}
          <p className={`text-[#cccccc] ${isLarge ? 'text-[16px] leading-[1.4]' : 'text-[13px] leading-[1.4]'} line-clamp-2 flex-1`}>
            {article.excerpt}
          </p>

          {/* Read more */}
          <div className="mt-auto pt-3 text-[13px] font-medium uppercase tracking-[0.05em] text-[#999999] group-hover:text-[#FF5233] transition-colors">
            READ MORE <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function LatestSection() {
  const [articles, setArticles] = useState<Article[]>(FALLBACK_ARTICLES);

  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetch('/rss-articles.json');
        if (response.ok) {
          const data = await response.json();
          if (data.articles && data.articles.length > 0) {
            setArticles(data.articles);
          }
        }
      } catch (error) {
        console.error('Failed to load RSS articles:', error);
      }
    }

    loadArticles();
  }, []);

  const [latest, ...rest] = articles;

  return (
    <section id="latest" className="relative landing2-section-spacing bg-[#E4E2D8]">
      <GridLines />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16">
        <h2 className="text-[32px] md:text-[44px] font-semibold text-[#111] lowercase mb-10 md:mb-14">the latest</h2>

        {/* Desktop: 2-column layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-0 border border-white/[0.15] aspect-[2/1]">
          {/* Large card */}
          {latest && (
            <div className="h-full border-r border-white/[0.15]">
              <ArticleCard article={latest} isLarge />
            </div>
          )}

          {/* Small cards - IMPROVED CURRENT: Better proportions */}
          <div className="grid grid-cols-2 grid-rows-2 h-full">
            {rest.map((article, idx) => (
              <div key={idx} className="h-full [&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b border-white/[0.15]">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Stack */}
        <div className="md:hidden border border-white/[0.15] grid grid-cols-1 gap-0">
          {articles.map((article, idx) => (
            <div key={idx} className={idx > 0 ? 'border-t border-white/[0.15]' : ''}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
