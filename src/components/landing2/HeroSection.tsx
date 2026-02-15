"use client";

import { RingIcon, GridIcon, PlusIcon } from './icons';
import { GridLines } from './GridLines';
import Link from 'next/link';
import Image from 'next/image';

function DecorativeSymbols() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <div className="parallax-container relative h-full w-full" style={{ perspective: '1000px' }}>
        <RingIcon
          className="absolute text-[#FF5233] will-change-transform"
          style={{
            width: 'clamp(160px, 20vw, 260px)',
            height: 'auto',
            top: '-10%',
            left: '62%',
            transform: 'translateZ(-200px) scale(1.08) rotate(0deg)',
          }}
        />
        <GridIcon
          className="absolute text-[#FF5233] hidden md:block will-change-transform"
          style={{
            width: 'clamp(140px, 17vw, 220px)',
            height: 'auto',
            top: '50%',
            right: '-12%',
            transform: 'translateY(-50%) translateZ(-150px) scale(1.02) rotate(0deg)',
          }}
        />
        <PlusIcon
          className="absolute text-[#FF5233] will-change-transform"
          style={{
            width: 'clamp(130px, 16vw, 200px)',
            height: 'auto',
            bottom: '-20%',
            left: '-20%',
            transform: 'translateZ(-100px) scale(1.02) rotate(0deg)',
          }}
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-[84vh] flex items-start overflow-hidden bg-[#E4E2D8]">
      <GridLines />
      <DecorativeSymbols />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-16 pt-[140px] md:pt-[140px] pb-16 md:pb-20">
        <div className="max-w-[560px] md:max-w-[640px]">
          <h1 className="text-[44px] md:text-[68px] lg:text-[76px] font-semibold leading-[0.98] text-[#111111] mb-6">
            <span className="underline decoration-[#FF5233] decoration-[4px]" style={{ textUnderlineOffset: '0.22em' }}>
              vista
            </span>{' '}
            investigates
            <br />
            the future of the internet
          </h1>

          <p className="text-[16px] md:text-[20px] text-[#575757] leading-[1.6] max-w-[480px] md:max-w-[540px] mt-2">
            A research hub for builders, investors, and explorers in blockchain and AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link
              href="#newsletter"
              className="bg-[#FF5233] text-white px-7 py-3.5 rounded-[2px] text-[15px] font-medium hover:bg-[#FF7043] transition-colors duration-200 text-center"
            >
              Subscribe
            </Link>
            <Link
              href="#services"
              className="bg-transparent text-[#111111] px-7 py-3.5 rounded-[2px] border border-black/[0.15] text-[15px] font-medium hover:border-[#FF5233] hover:text-[#FF5233] hover:bg-[rgba(255,82,51,0.04)] transition-all duration-200 text-center"
            >
              See what we do →
            </Link>
          </div>

          <div className="flex gap-6 md:gap-8 items-center mt-10 md:mt-12 opacity-60">
            <Image
              src="/partners/apeco black.svg"
              alt="ApeChain"
              width={92}
              height={24}
              className="h-5 md:h-6 w-auto"
            />
            <Image
              src="/partners/obol dark.svg"
              alt="Obol"
              width={64}
              height={24}
              className="h-5 md:h-6 w-auto"
            />
            <Image
              src="/partners/arco-black.png"
              alt="Arco"
              width={78}
              height={24}
              className="h-5 md:h-6 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
