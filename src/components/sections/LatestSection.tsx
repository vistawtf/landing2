"use client";

import { useEffect, useMemo, useState } from 'react';
import { GridLines } from './GridLines';

interface Article {
  title: string;
  excerpt: string;
  category: string;
  link: string;
  image?: string;
  date?: string;
}

interface DisplayArticle extends Article {
  isPlaceholder?: boolean;
}

const FALLBACK_GRADIENTS: Record<string, string> = {
  AI: 'linear-gradient(135deg, rgba(255,82,51,0.22) 0%, rgba(255,82,51,0.06) 100%)',
  DeFi: 'linear-gradient(135deg, rgba(17,17,17,0.10) 0%, rgba(17,17,17,0.04) 100%)',
  Infra: 'linear-gradient(135deg, rgba(176,107,88,0.22) 0%, rgba(176,107,88,0.08) 100%)',
  default: 'linear-gradient(135deg, rgba(255,82,51,0.16) 0%, rgba(17,17,17,0.05) 100%)',
};

const PLACEHOLDER_COUNT = 5;

function createPlaceholderArticle(index: number): DisplayArticle {
  return {
    title: index === 0 ? 'Fresh insight coming soon' : 'New article coming soon',
    excerpt: 'Published updates from Vista will appear here shortly.',
    category: 'AI',
    link: '#',
    isPlaceholder: true,
  };
}

function ArticleCard({ article, isLarge = false }: { article: DisplayArticle; isLarge?: boolean }) {
  const isPlaceholder = !!article.isPlaceholder;
  const containerClass = `group block bg-[#F2F2F2] transition-colors duration-200 h-full ${isLarge ? '' : 'aspect-square'} border border-black/[0.08] ${isPlaceholder ? 'cursor-default' : 'hover:bg-[#E8E8E8]'}`;
  const previewBackground = isPlaceholder
    ? 'linear-gradient(135deg, rgba(17,17,17,0.08) 0%, rgba(17,17,17,0.02) 100%)'
    : (article.image ? `url(${article.image}) center/cover` : FALLBACK_GRADIENTS[article.category] || FALLBACK_GRADIENTS.default);

  const content = (
    <article className="h-full flex flex-col">
      <div
        className={`w-full relative ${isLarge ? 'h-[50%]' : 'h-[50%]'}`}
        style={{ background: previewBackground }}
      >
        <div className={`absolute inset-0 ${isPlaceholder ? 'bg-gradient-to-t from-black/[0.10] to-transparent' : 'bg-gradient-to-t from-black/[0.20] to-transparent'}`} />
      </div>

      <div className={`${isLarge ? 'p-5 md:p-6' : 'p-4'} flex-1 flex flex-col justify-between min-h-0`}>
        <div className={isLarge ? '' : 'h-[72px]'}>
          <h3 className={`${isLarge ? 'text-[28px] md:text-[32px] line-clamp-2' : 'text-[20px] md:text-[22px] line-clamp-3'} font-medium text-[#111] leading-[1.15] ${isPlaceholder ? 'opacity-75' : ''}`}>
            {article.title}
          </h3>

          {isLarge && (
            <p className={`text-[16px] leading-[1.4] line-clamp-2 mt-2 ${isPlaceholder ? 'text-[#666666]' : 'text-[#444444]'}`}>
              {article.excerpt}
            </p>
          )}
        </div>

        <div className={`mt-auto pt-3 text-[13px] font-mono font-medium uppercase tracking-[0.05em] transition-colors ${isPlaceholder ? 'text-[#8A8A8A]' : 'text-[#666666] group-hover:text-[#FF5233]'}`}>
          {isPlaceholder ? 'COMING SOON' : 'READ MORE ->'}
        </div>
      </div>
    </article>
  );

  if (isPlaceholder) {
    return <div className={containerClass} aria-hidden="true">{content}</div>;
  }

  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer" className={containerClass}>
      {content}
    </a>
  );
}

export function LatestSection() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetch('/rss-articles.json');
        if (!response.ok) return;

        const data = await response.json();
        const incoming = Array.isArray(data.articles) ? data.articles as Article[] : [];

        // Ignore fallback rows with placeholder links so UI never shows fake editorial posts.
        const realArticles = incoming.filter((item) => item?.link && item.link !== '#');
        setArticles(realArticles.slice(0, PLACEHOLDER_COUNT));
      } catch (error) {
        console.error('Failed to load RSS articles:', error);
      }
    }

    loadArticles();
  }, []);

  const displayArticles = useMemo(() => {
    const placeholders = Array.from(
      { length: Math.max(0, PLACEHOLDER_COUNT - articles.length) },
      (_, idx) => createPlaceholderArticle(articles.length + idx),
    );
    return [...articles, ...placeholders] as DisplayArticle[];
  }, [articles]);

  const [latest, ...rest] = displayArticles;

  return (
    <section id="latest" className="relative page-section-spacing bg-[#FFFFFF]">
      <GridLines />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16">
        <h2 className="text-[32px] md:text-[44px] font-medium leading-tight text-[#111] lowercase mb-10 md:mb-14">the latest</h2>

        <div className="hidden md:grid md:grid-cols-2 gap-0 aspect-[2/1]">
          {latest && (
            <div className="h-full">
              <ArticleCard article={latest} isLarge />
            </div>
          )}

          <div className="grid grid-cols-2 grid-rows-2 gap-0 h-full">
            {rest.map((article, idx) => (
              <div key={`desktop-${article.link}-${idx}`} className="h-full">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1 gap-0">
          {displayArticles.map((article, idx) => (
            <div key={`mobile-${article.link}-${idx}`}>
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
