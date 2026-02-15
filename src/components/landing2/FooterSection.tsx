import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Code2, Tags } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="relative bg-[#111] text-[#E4E2D8] pt-0 pb-8">
      {/* Outer grid rails */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none">
        <div className="absolute inset-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/[0.06] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-white/[0.06]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* CTA band (Stripe/Chaos inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] px-6 md:px-16 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/[0.08] [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:md:border-b-0 [&>*:not(:last-child)]:border-white/[0.08]">
          <div className="py-12 md:py-14 md:pr-10 md:border-r md:border-white/[0.08]">
            <p className="text-xs uppercase tracking-[0.12em] text-white/50 mb-3">Ready to work together?</p>
            <h3 className="text-3xl md:text-4xl font-medium leading-tight text-[#E4E2D8] mb-4">
              Build something useful
              <br className="hidden md:block" />
              with Vista.
            </h3>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/landing2/services"
                className="bg-[#FF5233] text-white px-6 py-3 rounded-[2px] text-sm font-semibold uppercase tracking-wider hover:bg-[#FF7043] transition-colors"
              >
                Work with Vista →
              </Link>
              <Link
                href="/landing2/about"
                className="border border-white/[0.2] text-[#E4E2D8] px-6 py-3 rounded-[2px] text-sm font-semibold uppercase tracking-wider hover:border-white/[0.35] transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="py-12 md:py-14 md:px-8 md:border-r md:border-white/[0.08]">
            <Code2 className="w-4 h-4 text-white/50 mb-4" />
            <h4 className="text-base font-medium text-[#E4E2D8] mb-2">Start shipping</h4>
            <p className="text-sm text-white/60 mb-3">Research and execution for teams moving fast.</p>
            <Link href="/landing2/services" className="text-sm text-white/80 hover:text-[#FF5233] transition-colors">
              Explore services →
            </Link>
          </div>

          <div className="py-12 md:py-14 md:pl-8">
            <Tags className="w-4 h-4 text-white/50 mb-4" />
            <h4 className="text-base font-medium text-[#E4E2D8] mb-2">See pricing</h4>
            <p className="text-sm text-white/60 mb-3">Engagement models aligned with your scope.</p>
            <Link href="/landing2/services" className="text-sm text-white/80 hover:text-[#FF5233] transition-colors">
              Talk to us →
            </Link>
          </div>
        </div>

        {/* Main footer columns with separators */}
        <div className="grid grid-cols-1 md:grid-cols-4 mb-14 px-6 md:px-16 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/[0.08] [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:md:border-b-0 [&>*:not(:last-child)]:border-white/[0.08]">
          <div className="py-10 md:py-12 md:pr-8 md:border-r md:border-white/[0.08]">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-medium text-[#E4E2D8]">vista</span>
              <span className="text-[#FF5233] text-2xl" style={{ marginLeft: '4px', transform: 'rotate(0deg)' }}>₊˚⊹</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-[220px]">
              Research collective exploring blockchain and AI.
            </p>
          </div>

          <div className="py-10 md:py-12 md:px-8 md:border-r md:border-white/[0.08]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/landing2" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Home</Link></li>
              <li><Link href="/landing2#latest" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Research</Link></li>
              <li><Link href="/landing2#services" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Services</Link></li>
              <li><Link href="/landing2/about" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="py-10 md:py-12 md:px-8 md:border-r md:border-white/[0.08]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://vistasubstack.substack.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Substack</a></li>
              <li><a href="https://t.me/vistaDAO" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Telegram</a></li>
              <li><a href="https://twitter.com/viaboratorio" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div className="py-10 md:py-12 md:pl-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/landing2/services" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Get support</Link></li>
              <li><Link href="/landing2/services" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Custom scope</Link></li>
              <li><Link href="/landing2/about" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Contact us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-2 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-white/40">
            <span>© 2026 Vista</span>
            <span className="hidden md:inline">|</span>
            <span>vista.wtf</span>
          </div>

          <div className="flex gap-4">
            <a href="https://twitter.com/viaboratorio" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
