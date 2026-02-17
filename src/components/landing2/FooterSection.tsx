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

// LinkedIn square "in" logo
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
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
            <p className="text-xs uppercase tracking-[0.12em] text-white/50 mb-3">Ready to work together?</p>
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
          <div className="relative min-h-[200px] md:min-h-0 overflow-hidden border-l border-white/[0.08]">
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
              <li><a href="https://t.me/vistaDAO" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Telegram</a></li>
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
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-white/40">
            <span>© 2026 Vista</span>
            <span className="hidden md:inline">|</span>
            <span>vista.wtf</span>
          </div>

          <div className="flex gap-4">
            <a href="https://twitter.com/viaboratorio" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="X (Twitter)"><XIcon className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="LinkedIn"><LinkedInIcon className="w-5 h-5" /></a>
            <a href="https://vistasubstack.substack.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Substack"><SubstackIcon className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
