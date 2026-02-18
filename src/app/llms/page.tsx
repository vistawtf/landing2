import { readFileSync } from 'fs';
import { join } from 'path';
import type { Metadata } from 'next';
import { TerminalPage, type Article } from './TerminalPage';

export const metadata: Metadata = {
  title: 'Vista — Agent Mode',
  description: 'Machine-readable overview of Vista: research collective exploring blockchain and AI.',
  robots: { index: false, follow: false },
};

function loadArticles(): Article[] {
  try {
    const raw  = readFileSync(join(process.cwd(), 'public', 'rss-articles.json'), 'utf-8');
    const data = JSON.parse(raw);
    return Array.isArray(data.articles) ? data.articles : [];
  } catch {
    return [];
  }
}

export default function LlmsPage() {
  return <TerminalPage articles={loadArticles()} />;
}
