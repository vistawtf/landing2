"use client";

import { AnimatedSection } from "./shared";
import { RingIcon, GridIcon, PlusIcon } from "./icons";

function DecorativeSymbols() {
  return (
    <div className="parallax-container absolute inset-0 overflow-hidden pointer-events-none select-none" style={{ perspective: "1000px" }}>
      <RingIcon
        className="absolute text-ultra-orange will-change-transform"
        style={{
          width: "clamp(160px, 21vw, 280px)",
          height: "auto",
          top: "-5%",
          left: "50%",
          transform: "translateZ(-200px) scale(1.2)",
        }}
      />
      <GridIcon
        className="absolute text-ultra-orange hidden sm:block will-change-transform"
        style={{
          width: "clamp(200px, 40vw, 420px)",
          height: "auto",
          top: "25%",
          right: "-5%",
          transform: "translateZ(-150px) scale(1.15)",
        }}
      />
      <PlusIcon
        className="absolute text-ultra-orange will-change-transform"
        style={{
          width: "clamp(140px, 22vw, 240px)",
          height: "auto",
          bottom: "-8%",
          left: "48%",
          transform: "translateZ(-100px) scale(1.1)",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="snap-section relative">
      <DecorativeSymbols />

      <div className="snap-section-center pt-14">
        <div className="container relative z-10">
          <AnimatedSection className="max-w-lg lg:max-w-xl">
            <a
              href="#newsletter"
              className="group inline-flex items-center gap-2 text-body-md text-muted hover:text-foreground transition-colors mb-6 border border-ultra-orange/40 rounded-full px-4 py-2 hover:border-ultra-orange hover:bg-ultra-orange/5"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-ultra-orange">📬</span>
              <span>We share what we find</span>
              <span className="text-muted">·</span>
              <span className="text-ultra-orange group-hover:underline">Join 10,000+ readers →</span>
            </a>

            <h1 className="text-display text-foreground mb-4" style={{ fontWeight: 400 }}>
              <span className="underline decoration-ultra-orange decoration-4 underline-offset-8">vista</span> investigates
              <br />
              the future of the internet
            </h1>

            <p className="text-body-lg text-muted max-w-sm">
              A research collective on blockchain and AI.<br />
              See what&apos;s coming before others do.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="container">
          <button
            onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 animate-on-scroll-delay transition-colors cursor-pointer"
            aria-label="Scroll to newsletter"
          >
            <span className="text-caption text-muted tracking-widest uppercase text-[10px]">Scroll</span>
            <div className="animate-bounce translate-y-[1px]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-ultra-orange">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
