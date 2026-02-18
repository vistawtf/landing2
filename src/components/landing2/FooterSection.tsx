import Link from 'next/link';
import { AsciiPlasma } from './AsciiPlasma';

// Custom Substack icon SVG
function SubstackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" fill="currentColor"/>
    </svg>
  );
}

// Official X (Twitter) logo
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
    </svg>
  );
}

// Official Telegram logo
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor"/>
    </svg>
  );
}

export function FooterSection() {
  return (
    <footer className="relative bg-[#111] text-[#E4E2D8] pt-0 pb-8">
      {/* Outer grid rails */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none">
        <div className="absolute inset-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/[0.06] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-white/[0.06]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* LEFT/RIGHT layout - CTA + ASCII plasma */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-white/[0.08]">
          {/* LEFT: CTAs */}
          <div className="py-8 md:py-10 px-6 md:border-r md:border-white/[0.08] flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.12em] text-white/50 mb-3 font-mono">Ready to work together?</p>
            <h3 className="text-[32px] md:text-[42px] font-medium leading-tight text-[#E4E2D8] mb-6">
              Build something useful with Vista.
            </h3>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/landing2/services"
                className="bg-[#FF5233] text-white px-7 py-4 rounded-[3px] text-sm font-semibold uppercase tracking-wider hover:bg-[#E64A2E] transition-colors duration-200"
              >
                Work with Vista →
              </Link>
              <Link
                href="/landing2/about"
                className="border border-white/[0.2] text-[#E4E2D8] px-7 py-4 rounded-[3px] text-sm font-semibold uppercase tracking-wider hover:border-white/[0.35] transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* RIGHT: ASCII plasma animation */}
          <div className="relative min-h-[200px] md:min-h-0 overflow-hidden border-t border-r border-white/[0.08]">
            <AsciiPlasma />
          </div>
        </div>

        {/* Main footer columns with separators */}
        <div className="grid grid-cols-1 md:[grid-template-columns:repeat(4,minmax(0,1fr))] gap-0 mb-12 px-0 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/[0.08] [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:md:border-b-0 [&>*:not(:last-child)]:border-white/[0.08]">
          <div className="py-8 md:py-10 px-6 md:border-r md:border-white/[0.08]">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-medium text-[#E4E2D8]">vista</span>
              <span className="text-[#FF5233] text-2xl" style={{ marginLeft: '4px', transform: 'rotate(0deg)' }}>₊˚⊹</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Research collective exploring blockchain and AI.
            </p>
          </div>

          <div className="py-8 md:py-10 px-6 md:border-r md:border-white/[0.08]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/landing2" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Home</Link></li>
              <li><Link href="/landing2#latest" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Research</Link></li>
              <li><Link href="/landing2#services" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Services</Link></li>
              <li><Link href="/landing2/about" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="py-8 md:py-10 px-6 md:border-r md:border-white/[0.08]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://vistasubstack.substack.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Substack</a></li>
              <li><a href="https://t.me/vistainsights" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Telegram</a></li>
              <li><a href="https://twitter.com/viaboratorio" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div className="py-8 md:py-10 px-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/landing2/services" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Get support</Link></li>
              <li><Link href="/landing2/services" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Custom scope</Link></li>
              <li><Link href="/landing2/about" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Contact us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-2 px-6 flex flex-col md:flex-row justify-between items-start gap-4 text-left">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-white/40 font-mono">
            <span>© 2026 Vista</span>
            <span className="hidden md:inline">|</span>
            <span>vista.wtf</span>
          </div>

          <div className="flex gap-4">
            <a href="https://twitter.com/viaboratorio" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="X (Twitter)"><XIcon className="w-5 h-5" /></a>
            <a href="https://t.me/vistainsights" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Telegram"><TelegramIcon className="w-5 h-5" /></a>
            <a href="https://vistasubstack.substack.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Substack"><SubstackIcon className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
