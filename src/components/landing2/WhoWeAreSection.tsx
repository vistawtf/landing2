import Link from 'next/link';
import { GridLines } from './GridLines';

export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="relative py-20 md:py-32 bg-[#E4E2D8]">
      <GridLines />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16">
        <h2 className="text-[36px] md:text-[48px] font-semibold text-[#111] lowercase mb-6">
          who we are
        </h2>

        <p className="text-xl text-[#575757] leading-relaxed max-w-[640px] mb-6">
          Vista is a research collective exploring blockchain and AI. We&apos;re at the frontier, finding signal in the noise. We help teams move faster with research-backed insights and execution.
        </p>

        <Link
          href="/landing2/about"
          className="inline-block text-base font-medium text-[#575757] hover:text-[#FF5233] hover:underline hover:underline-offset-4 transition-all"
        >
          Learn more about Vista →
        </Link>
      </div>
    </section>
  );
}
