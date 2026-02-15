"use client";

import { RingIcon, GridIcon, PlusIcon } from './icons';
import { GridLines } from './GridLines';
import Link from 'next/link';
import Image from 'next/image';

function DecorativeSymbols() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <div className="parallax-container relative h-full max-w-[1200px] mx-auto overflow-hidden" style={{ perspective: "1000px" }}>
        <RingIcon
          className="absolute text-[#FF5233] will-change-transform"
          style={{
            width: "clamp(180px, 22vw, 300px)",
            height: "auto",
            top: "-14%",
            left: "58%",
            transform: "translateZ(-200px) scale(1.08) rotate(0deg)",
          }}
        />
        <GridIcon
          className="absolute text-[#FF5233] hidden md:block will-change-transform"
          style={{
            width: "clamp(170px, 20vw, 250px)",
            height: "auto",
            top: "52%",
            right: "-2%",
            transform: "translateY(-50%) translateZ(-150px) scale(1.02) rotate(0deg)",
          }}
        />
        <PlusIcon
          className="absolute text-[#FF5233] will-change-transform"
          style={{
            width: "clamp(160px, 18vw, 230px)",
            height: "auto",
            bottom: "-30%",
            left: "33%",
            transform: "translateZ(-100px) scale(1.02) rotate(0deg)",
          }}
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[88vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#E4E2D8]">
      <GridLines />
      <DecorativeSymbols />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-16 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-[620px] md:max-w-[700px]">
          <h1 className="text-[52px] md:text-[72px] lg:text-[76px] font-semibold leading-[0.98] text-[#111111] mb-6">
            <span className="underline decoration-[#FF5233] decoration-[4px]" style={{ textUnderlineOffset: '0.18em' }}>
              vista
            </span>{' '}
            investigates
            <br />
            the future of the internet
          </h1>

          <p className="text-[18px] md:text-[20px] text-[#575757] leading-[1.55] max-w-[540px] mt-2">
            A research hub for builders, investors, and explorers in blockchain and AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link
              href="#newsletter"
              className="bg-[#FF5233] text-white px-6 py-3 rounded-[2px] text-base font-medium hover:bg-[#FF7043] transition-colors duration-200 text-center"
            >
              Subscribe
            </Link>
            <Link
              href="#services"
              className="bg-transparent text-[#111111] px-6 py-3 rounded-[2px] border border-black/[0.15] text-base font-medium hover:border-[#FF5233] hover:text-[#FF5233] hover:bg-[rgba(255,82,51,0.04)] transition-all duration-200 text-center"
            >
              See what we do →
            </Link>
          </div>

          {/* Social Proof Logos */}
          <div className="flex gap-6 md:gap-8 items-center mt-8 opacity-70">
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
