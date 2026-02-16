"use client";

import { useEffect, useState } from 'react';
import { GridLines } from './GridLines';

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

// Fallback articles if RSS fails
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

function ArticleCard({ article, isLarge = false }: { article: Article; isLarge?: boolean }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-[#F2F2F2] hover:bg-[#E8E8E8] transition-colors duration-200 h-full ${isLarge ? '' : 'aspect-square'}`}
    >
      <article className="h-full flex flex-col">
        {/* Image - 50% height */}
        <div
          className={`w-full relative ${isLarge ? 'h-[50%]' : 'h-[50%]'}`}
          style={{
            background: article.image ? `url(${article.image}) center/cover` : FALLBACK_GRADIENTS[article.category] || FALLBACK_GRADIENTS.default,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/[0.20] to-transparent" />
        </div>

        <div className={`${isLarge ? 'p-5 md:p-6' : 'p-4'} flex-1 flex flex-col justify-between min-h-0`}>
          <div>
            {/* Title - bigger and more lines since no description on small cards */}
            <h3 className={`${isLarge ? 'text-[28px] md:text-[32px] line-clamp-2' : 'text-[20px] md:text-[22px] line-clamp-3'} font-medium text-[#111] leading-[1.15]`}>
              {article.title}
            </h3>

            {/* Description - only on large card */}
            {isLarge && (
              <p className="text-[#444444] text-[16px] leading-[1.4] line-clamp-2 mt-2">
                {article.excerpt}
              </p>
            )}
          </div>

          {/* Read more */}
          <div className="mt-auto pt-3 text-[13px] font-medium uppercase tracking-[0.05em] text-[#666666] group-hover:text-[#FF5233] transition-colors">
            READ MORE <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </div>
        </div>
      </article>
    </a>
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
        // Fallback articles already set in state
      }
    }

    loadArticles();
  }, []);

  const [latest, ...rest] = articles;

  return (
    <section id="latest" className="relative landing2-section-spacing bg-[#FFFFFF]">
      <GridLines />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16">
        <h2 className="text-[32px] md:text-[44px] font-semibold text-[#111] lowercase mb-10 md:mb-14">the latest</h2>

        <div className="hidden md:grid md:grid-cols-2 gap-0 border border-black/[0.12] aspect-[2/1]">
          {latest && (
            <div className="h-full border-r border-black/[0.12]">
              <ArticleCard article={latest} isLarge />
            </div>
          )}

          <div className="grid grid-cols-2 grid-rows-2 h-full">
            {rest.map((article, idx) => (
              <div key={idx} className="h-full [&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b border-black/[0.12]">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden border border-black/[0.12] grid grid-cols-1 gap-0">
          {articles.map((article, idx) => (
            <div key={idx} className={idx > 0 ? 'border-t border-black/[0.12]' : ''}>
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
