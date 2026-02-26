import { RingIcon, GridIcon, PlusIcon } from './icons';
import { GridLines } from './GridLines';
import Link from 'next/link';
import Image from 'next/image';

function DecorativeSymbols() {
  return (
    <div className="parallax-container absolute inset-0 pointer-events-none select-none" style={{ perspective: '1000px' }}>
      <div className="relative h-full w-full max-w-[1200px] mx-auto overflow-hidden">
        <RingIcon
          className="absolute text-[#FF5233]"
          style={{
            width: 'clamp(150px, 18vw, 230px)',
            height: 'auto',
            top: '3%',
            left: '51%',
            transform: 'translateZ(-200px) scale(1.08)',
          }}
        />
        <GridIcon
          className="absolute text-[#FF5233] hidden sm:block"
          style={{
            width: 'clamp(180px, 32vw, 340px)',
            height: 'auto',
            top: '30%',
            right: '1%',
            transform: 'translateZ(-150px) scale(1.04)',
          }}
        />
        <PlusIcon
          className="absolute text-[#FF5233]"
          style={{
            width: 'clamp(120px, 18vw, 200px)',
            height: 'auto',
            bottom: '10%',
            left: '41%',
            transform: 'translateZ(-100px) scale(1.0)',
          }}
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative flex items-start overflow-hidden bg-[#FFFFFF]"
    >
      <GridLines />
      <DecorativeSymbols />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-16 pt-[140px] md:pt-[140px] pb-[90px] md:pb-[90px]">
        <div className="max-w-[560px] md:max-w-[640px]">
          <h1
            className="text-[#111111]"
            style={{
              fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontFeatureSettings: '"kern" 1, "liga" 1',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                textDecorationLine: 'underline',
                textDecorationColor: '#FF5233',
                textDecorationThickness: '2px',
                textUnderlineOffset: '0.20em',
                textDecorationStyle: 'solid',
              }}
            >
              vista
            </span>{' '}
            investigates
            <br />
            the future of the
            <br />
            internet
          </h1>

          <p className="text-[16px] md:text-[20px] text-[#575757] leading-[1.6] max-w-[480px] md:max-w-[540px] mt-2">
            A research hub for builders, investors, and explorers in blockchain and AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link
              href="#newsletter"
              className="bg-[#FF5233] text-white px-7 py-3.5 rounded-[3px] text-[15px] font-medium hover:bg-[#E64A2E] transition-colors duration-200 text-center"
            >
              Subscribe
            </Link>
            <Link
              href="#services"
              className="bg-transparent text-[#111111] px-7 py-3.5 rounded-[3px] border border-black/[0.15] text-[15px] font-medium hover:border-[#FF5233] hover:text-[#FF5233] hover:bg-[rgba(255,82,51,0.04)] transition-all duration-200 text-center"
            >
              See what we do →
            </Link>
          </div>

          <div className="mt-10 md:mt-12">
            <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.12em] text-[#999999] mb-2 md:mb-3 font-mono">
              Trusted by
            </p>
            <div className="flex gap-6 md:gap-8 items-center opacity-60">
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
      </div>
    </section>
  );
}
