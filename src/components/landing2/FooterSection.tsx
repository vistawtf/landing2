import Link from 'next/link';
import { Twitter, Linkedin, Youtube } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="relative bg-[#111] text-[#E4E2D8] pt-0 pb-8">
      {/* Outer grid rails */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none">
        <div className="absolute inset-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/[0.06] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-white/[0.06]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* LEFT/RIGHT layout - Who we are + CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-white/[0.08]">
          {/* LEFT: Who we are */}
          <div className="py-16 md:py-20 px-6 md:px-16 md:border-r md:border-white/[0.08] flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[28px] md:text-[36px] font-medium text-[#E4E2D8] lowercase">vista</span>
              <span className="text-[#FF5233] text-[28px] md:text-[36px]">₊˚⊹</span>
            </div>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#E4E2D8] lowercase mb-4">
              who we are
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed mb-6">
              We're a research collective at the frontier of blockchain and AI. 
              We find signal in the noise and help teams move faster with research-backed insights.
            </p>
            <p className="text-[14px] md:text-[16px] text-white/50 leading-relaxed">
              Deep technical analysis meets practical execution. 
              That's the Vista difference.
            </p>
          </div>

          {/* RIGHT: CTAs */}
          <div className="py-16 md:py-20 px-6 md:px-16 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.12em] text-white/50 mb-4">Ready to work together?</p>
            <h3 className="text-[32px] md:text-[42px] font-medium leading-tight text-[#E4E2D8] mb-8">
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
        </div>

        {/* Main footer columns with separators */}
        <div className="grid grid-cols-1 md:[grid-template-columns:repeat(4,minmax(0,1fr))] gap-0 mb-14 px-0 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/[0.08] [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:md:border-b-0 [&>*:not(:last-child)]:border-white/[0.08]">
          <div className="py-10 md:py-12 px-6 md:border-r md:border-white/[0.08]">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-medium text-[#E4E2D8]">vista</span>
              <span className="text-[#FF5233] text-2xl" style={{ marginLeft: '4px', transform: 'rotate(0deg)' }}>₊˚⊹</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Research collective exploring blockchain and AI.
            </p>
          </div>

          <div className="py-10 md:py-12 px-6 md:border-r md:border-white/[0.08]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/landing2" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Home</Link></li>
              <li><Link href="/landing2#latest" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Research</Link></li>
              <li><Link href="/landing2#services" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Services</Link></li>
              <li><Link href="/landing2/about" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="py-10 md:py-12 px-6 md:border-r md:border-white/[0.08]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://vistasubstack.substack.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Substack</a></li>
              <li><a href="https://t.me/vistaDAO" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Telegram</a></li>
              <li><a href="https://twitter.com/viaboratorio" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#FF5233] transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div className="py-10 md:py-12 px-6">
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
