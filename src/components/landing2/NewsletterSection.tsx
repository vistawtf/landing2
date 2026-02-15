"use client";

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export function NewsletterSection() {
  return (
    <section id="newsletter" className="relative h-screen flex items-center justify-center bg-[#111] text-[#E4E2D8] overflow-hidden" style={{ scrollSnapAlign: 'center' }}>
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#111]" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[url('/frame-110.svg')] bg-no-repeat bg-[length:auto_125%] bg-[position:170%_center] md:bg-[length:auto_108%] md:bg-[position:100%_center] lg:bg-[length:auto_112%] lg:bg-[position:100%_center] opacity-40 md:opacity-100 lg:opacity-75"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#111] via-[rgba(17,17,17,0.9)] to-[rgba(17,17,17,0.58)] md:via-[rgba(17,17,17,0.72)] md:to-[rgba(17,17,17,0.16)] lg:via-[rgba(17,17,17,0.66)] lg:to-[rgba(17,17,17,0.1)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-16">
        <div className="flex flex-col gap-5 max-w-[700px]">
          {/* Kicker + Badge */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8E8E8E]">
              EMERGENT STACK BY ETH LATAM
            </p>
            <div className="bg-white/[0.08] border border-white/[0.15] rounded-2xl px-3 py-1 text-[11px] font-semibold text-[#E4E2D8]">
              10k+ subscribers
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(1.3rem,6.2vw,1.6rem)] md:text-5xl font-medium text-[#F5F5F5] leading-tight max-w-[26ch] md:max-w-none mb-4">
            Less scrolling & more insights:
            <br />
            The blockchain + AI newsletter for builders shaping the future
          </h2>

          {/* Bullets */}
          <ul className="mt-3 mb-5 space-y-1 text-lg md:text-base text-[#E6E6E6] leading-relaxed">
            <li className="relative pl-5">
              <span className="absolute left-0 text-[#BDBDBD]">›</span>
              Curated signals, without the noise.
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 text-[#BDBDBD]">›</span>
              Built for operators shipping across LatAm.
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 text-[#BDBDBD]">›</span>
              Read in minutes, relevant all week.
            </li>
          </ul>

          {/* Form */}
          <form
            className="flex flex-col md:flex-row gap-3 md:gap-0 w-full max-w-[620px] mt-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="flex-1 h-14 md:h-14 px-5 md:px-5 bg-white/[0.08] border border-white/[0.15] rounded-[2px] md:rounded-r-none text-[#EDEDED] text-base placeholder:text-[#9A9A9A] focus:outline-none focus:border-white/[0.3] transition-colors"
              placeholder="you@company.com"
              required
            />
            <button
              type="submit"
              className="h-14 md:h-14 px-6 md:px-6 bg-[#FF5233] text-white rounded-[2px] md:rounded-l-none text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#FF6A47] focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 transition-colors"
            >
              <span>SUBSCRIBE</span>
              <ChevronRight className="w-[18px] h-[18px]" strokeWidth={2.2} />
            </button>
          </form>

          {/* Authorship */}
          <p className="text-sm text-white/60 mt-3">
            authored by <span className="text-[#FF5233] font-semibold">vista</span> in collab with arco.lat
          </p>

          {/* Partner Logos */}
          <div className="flex gap-6 items-center mt-8">
            <a
              href="https://ethlatam.org"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/partners/eth-latam-white.svg"
                alt="ETH Latam"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </a>
            <a
              href="https://arco.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/partners/arco-white.png"
                alt="Arco"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
