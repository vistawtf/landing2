'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SOCIAL_SUBSTACK, SOCIAL_TELEGRAM } from '@/lib/constants';

export interface Article {
  title: string;
  link: string;
  pubDate?: string;
}

type LineStyle = 'cmd' | 'dim' | 'normal' | 'accent' | 'title' | 'header' | 'divider' | 'blank';

interface Line {
  text: string;
  style: LineStyle;
  charDelay: number; // ms per character; 0 = instant
  pauseMs: number;   // ms to wait after line is fully typed
  href?: string;
}

/* ─── helpers ─────────────────────────────────────────────── */
const blank = (pauseMs = 90): Line => ({ text: '', style: 'blank', charDelay: 0, pauseMs });
const div   = (pauseMs = 40): Line => ({ text: '─'.repeat(44), style: 'divider', charDelay: 0, pauseMs });

function buildLines(articles: Article[]): Line[] {
  const lines: Line[] = [
    { text: '$ vista --agent-mode',        style: 'cmd',    charDelay: 18, pauseMs: 30 },
    { text: '> loading agent context...',  style: 'dim',    charDelay: 9,  pauseMs: 100 },
    blank(40),
    { text: 'vista  ₊˚⊹',                 style: 'title',  charDelay: 28, pauseMs: 25 },
    { text: 'research collective · blockchain + AI', style: 'dim', charDelay: 6, pauseMs: 25 },
    blank(30),
    { text: 'web        →  vista.wtf',                      style: 'dim', charDelay: 5, pauseMs: 10 },
    { text: `telegram   →  ${SOCIAL_TELEGRAM.replace('https://', '')}`, style: 'dim', charDelay: 5, pauseMs: 10 },
    { text: 'twitter    →  @vistawtf',                      style: 'dim', charDelay: 5, pauseMs: 10 },
    { text: `newsletter →  ${SOCIAL_SUBSTACK.replace('https://', '')}`, style: 'dim', charDelay: 5, pauseMs: 10 },
    blank(30),
    div(20),
    blank(30),
    { text: '## ABOUT',  style: 'header', charDelay: 12, pauseMs: 25 },
    blank(20),
    { text: 'Vista is a research and execution team focused on', style: 'normal', charDelay: 5, pauseMs: 8 },
    { text: 'blockchain and AI. We turn emerging signals into',  style: 'normal', charDelay: 5, pauseMs: 8 },
    { text: 'practical strategy and production-ready products.', style: 'normal', charDelay: 5, pauseMs: 25 },
    blank(30),
    div(20),
    blank(30),
    { text: '## SERVICES', style: 'header', charDelay: 12, pauseMs: 25 },
    blank(20),
    { text: '01. AI TRAINING',             style: 'accent', charDelay: 12, pauseMs: 8 },
    { text: '    Custom models, fine-tuning LLMs, agent systems.',   style: 'normal', charDelay: 5, pauseMs: 25 },
    blank(20),
    { text: '02. MARKETING CAMPAIGNS',     style: 'accent', charDelay: 12, pauseMs: 8 },
    { text: '    Research-backed go-to-market strategies.',          style: 'normal', charDelay: 5, pauseMs: 25 },
    blank(20),
    { text: '03. PROTOCOL GROWTH',         style: 'accent', charDelay: 12, pauseMs: 8 },
    { text: '    Community building, tokenomics, ecosystem growth.', style: 'normal', charDelay: 5, pauseMs: 30 },
    blank(30),
    div(20),
    blank(30),
    { text: '## BLOG', style: 'header', charDelay: 12, pauseMs: 25 },
    blank(20),
  ];

  if (articles.length === 0) {
    lines.push({ text: '[ no articles cached ]', style: 'dim', charDelay: 18, pauseMs: 30 });
    lines.push({ text: `  → ${SOCIAL_SUBSTACK.replace('https://', '')}`, style: 'dim', charDelay: 14, pauseMs: 30, href: SOCIAL_SUBSTACK });
  } else {
    articles.forEach(a => {
      const date  = a.pubDate ? `  [${new Date(a.pubDate).toISOString().slice(0, 10)}]` : '';
      const title = a.title.length > 46 ? a.title.slice(0, 46) + '…' : a.title;
      lines.push({ text: `→ ${title}${date}`, style: 'normal', charDelay: 5, pauseMs: 15, href: a.link });
    });
  }

  lines.push(blank(80));
  lines.push(div(60));
  lines.push(blank(80));
  lines.push({ text: 'WORK WITH VISTA  →  vista.wtf/services', style: 'dim', charDelay: 14, pauseMs: 40, href: '/services' });
  lines.push(blank(60));
  lines.push({ text: '← back to site', style: 'dim', charDelay: 20, pauseMs: 60, href: '/' });

  return lines;
}

/* ─── style map ───────────────────────────────────────────── */
const styleMap: Record<LineStyle, string> = {
  cmd:     'text-white/30',
  dim:     'text-white/[0.22]',
  normal:  'text-white/55',
  accent:  'text-[#FF5233]/70',
  title:   'text-[#E4E2D8] text-base',
  header:  'text-white/30 text-[10px] uppercase tracking-[0.18em]',
  divider: 'text-white/[0.07]',
  blank:   '',
};

/* ─── line renderer ───────────────────────────────────────── */
function Line({ line, partial }: { line: Line; partial?: string }) {
  const text = partial !== undefined ? partial : line.text;
  const cls  = `leading-relaxed ${styleMap[line.style]}`;

  if (line.style === 'blank') return <div className="h-[18px]" />;

  const isLink = !!line.href && partial === undefined;
  return (
    <div className={cls}>
      {isLink ? (
        <a
          href={line.href}
          className="hover:text-[#FF5233] transition-colors hover:underline underline-offset-2"
          target={line.href!.startsWith('http') ? '_blank' : undefined}
          rel={line.href!.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {text}
        </a>
      ) : text}
    </div>
  );
}

/* ─── main component ──────────────────────────────────────── */
export function TerminalPage({ articles }: { articles: Article[] }) {
  const lines = useMemo(() => buildLines(articles), [articles]);

  const [lineIdx,  setLineIdx]  = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [blink,    setBlink]    = useState(true);
  const [skipped,  setSkipped]  = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const done = lineIdx >= lines.length;

  const skip = useCallback(() => {
    setSkipped(true);
    setLineIdx(lines.length);
  }, [lines.length]);

  /* keyboard skip */
  useEffect(() => {
    if (done) return;
    const handler = (e: KeyboardEvent) => {
      if (['Space', 'Enter', 'Escape'].includes(e.code)) skip();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [done, skip]);

  /* typing engine */
  useEffect(() => {
    if (done || skipped) return;
    const line = lines[lineIdx];

    // Instant line (blank / divider)
    if (line.charDelay === 0 || line.text === '') {
      const t = setTimeout(() => { setLineIdx(i => i + 1); setCharIdx(0); }, line.pauseMs);
      return () => clearTimeout(t);
    }

    // Still typing characters
    if (charIdx < line.text.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), line.charDelay);
      return () => clearTimeout(t);
    }

    // Line fully typed — pause then advance
    const t = setTimeout(() => { setLineIdx(i => i + 1); setCharIdx(0); }, line.pauseMs);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, done, skipped, lines]);

  /* cursor blink */
  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(t);
  }, []);

  /* auto-scroll to latest output */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [lineIdx, charIdx]);

  const currentLine = !done ? lines[lineIdx] : null;
  const partial     = currentLine ? currentLine.text.slice(0, charIdx) : '';
  const showCursor  = !done && currentLine && currentLine.style !== 'blank';

  return (
    <main
      className="min-h-screen bg-[#0a0a0a] text-[#E4E2D8] font-mono px-6 py-16 relative overflow-x-hidden"
      onClick={!done ? skip : undefined}
    >

      {/* SVG noise grain */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <filter id="page-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#page-noise)" opacity="0.04" />
      </svg>

      {/* CRT scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.13) 3px, rgba(0,0,0,0.13) 4px)' }}
      />

      {/* Terminal output */}
      <div className="relative z-10 max-w-[65ch] mx-auto text-sm">

        {/* Completed lines */}
        {lines.slice(0, lineIdx).map((line, i) => (
          <Line key={i} line={line} />
        ))}

        {/* Active typing line */}
        {showCursor && (
          <div className={`leading-relaxed ${styleMap[currentLine!.style]}`}>
            {partial}
            <span className="text-[#FF5233]/45" style={{ opacity: blink ? 1 : 0 }}>█</span>
          </div>
        )}

        {/* Idle cursor after done */}
        {done && (
          <span className="text-[#FF5233]/30 text-sm" style={{ opacity: blink ? 1 : 0 }}>_</span>
        )}

        <div ref={bottomRef} className="h-16" />
      </div>

      {/* Skip hint */}
      {!done && (
        <button
          onClick={skip}
          className="fixed bottom-6 right-6 font-mono text-[10px] uppercase tracking-widest text-white/15 hover:text-white/35 transition-colors cursor-pointer"
        >
          [skip →]
        </button>
      )}
    </main>
  );
}
