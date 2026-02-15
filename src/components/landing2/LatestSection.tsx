"use client";

import Link from 'next/link';
import { GridLines } from './GridLines';

interface Article {
  title: string;
  excerpt: string;
  category: string;
  link: string;
  image?: string;
}

const FALLBACK_GRADIENTS: Record<string, string> = {
  AI: 'linear-gradient(135deg, rgba(255,82,51,0.22) 0%, rgba(255,82,51,0.06) 100%)',
  DeFi: 'linear-gradient(135deg, rgba(17,17,17,0.10) 0%, rgba(17,17,17,0.04) 100%)',
  Infra: 'linear-gradient(135deg, rgba(176,107,88,0.22) 0%, rgba(176,107,88,0.08) 100%)',
  default: 'linear-gradient(135deg, rgba(255,82,51,0.16) 0%, rgba(17,17,17,0.05) 100%)',
};

function ArticleCard({ article, isLarge = false, framed = true }: { article: Article; isLarge?: boolean; framed?: boolean }) {
  return (
    <Link
      href={article.link}
      className={`article-card group block rounded-none bg-transparent overflow-hidden transition-colors duration-200 h-full ${isLarge ? '' : 'aspect-square'}`}
      style={{ aspectRatio: isLarge ? 'auto' : undefined }}
    >
      {/* Image Area */}
      <div
        className={`w-full relative ${isLarge ? 'h-[52%] md:h-[56%]' : 'h-[42%]'} border-b border-black/[0.08]`}
        style={{
          background: article.image ? `url(${article.image}) center/cover` : FALLBACK_GRADIENTS[article.category] || FALLBACK_GRADIENTS.default
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] to-transparent" />
      </div>

      {/* Content Area */}
      <div className="p-5 md:p-6">
        <div className="text-[11px] font-semibold uppercase text-[#B06B58] tracking-[0.1em] mb-3">
          {article.category}
        </div>

        <h3 className={`${isLarge ? 'text-[34px] md:text-[40px]' : 'text-[20px] md:text-[22px]'} font-medium text-[#111] mb-3 leading-[1.08] line-clamp-2`}>
          {article.title}
        </h3>

        <p className={`text-[#575757] leading-[1.45] mb-5 ${isLarge ? 'text-[17px] md:text-[18px] line-clamp-3' : 'text-[16px] line-clamp-2'}`}>
          {article.excerpt}
        </p>

        <div className="text-[15px] font-medium text-[#3F3F3F] group-hover:text-[#FF5233] transition-colors">
          READ MORE <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </Link>
  );
}

export function LatestSection() {
  // Mock articles for now - replace with RSS feed integration
  const articles: Article[] = [
    {
      title: "The Future of AI Agents in DeFi",
      excerpt: "Exploring how autonomous agents are reshaping decentralized finance protocols.",
      category: "AI",
      link: "#",
    },
    {
      title: "Protocol Governance 2.0",
      excerpt: "New models for decentralized decision-making.",
      category: "DeFi",
      link: "#",
    },
    {
      title: "Infrastructure Scaling",
      excerpt: "How L2s are solving Ethereum's throughput challenges.",
      category: "Infra",
      link: "#",
    },
    {
      title: "MEV & Intent-Based Systems",
      excerpt: "The evolution of transaction ordering and user intent.",
      category: "DeFi",
      link: "#",
    },
    {
      title: "AI Model Coordination",
      excerpt: "Multi-agent systems working together on-chain.",
      category: "AI",
      link: "#",
    },
  ];

  const [latest, ...rest] = articles;

  return (
    <section id="latest" className="relative py-20 md:py-32 bg-[#E4E2D8]">
      <GridLines />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16">
        <h2 className="text-[36px] md:text-[48px] font-semibold text-[#111] lowercase mb-12">
          the latest
        </h2>

        {/* Desktop: 1 large (left) + 2x2 squares (right) */}
        <div className="hidden md:grid md:grid-cols-[1.15fr_1fr] gap-0 border border-black/[0.10]">
          {latest && (
            <div className="border-r border-black/[0.10]">
              <ArticleCard article={latest} isLarge framed={false} />
            </div>
          )}

          <div className="grid grid-cols-2 gap-0">
            {rest.map((article, idx) => (
              <div key={idx} className="[&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b border-black/[0.10]">
                <ArticleCard article={article} framed={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Single column, 5 squares, column grid style */}
        <div className="md:hidden border border-black/[0.10]">
          {articles.map((article, idx) => (
            <div key={idx} className={idx > 0 ? 'border-t border-black/[0.10]' : ''}>
              <ArticleCard article={article} framed={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
