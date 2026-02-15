"use client";

import { AnimatedSection } from "./shared";
import { RingIcon, GridIcon, PlusIcon } from "./icons";

function DecorativeSymbols() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Ambient gradient glow */}
      <div
        className="absolute opacity-[0.07] dark:opacity-[0.04]"
        style={{
          width: "800px",
          height: "800px",
          top: "-200px",
          right: "-200px",
          background: "radial-gradient(circle, var(--ultra-orange), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute opacity-[0.05] dark:opacity-[0.03]"
        style={{
          width: "600px",
          height: "600px",
          bottom: "-100px",
          left: "-100px",
          background: "radial-gradient(circle, var(--ultra-blue), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Sacred SVG symbols */}
      <RingIcon
        className="absolute text-ultra-orange/[0.08] dark:text-ultra-orange/[0.06]"
        style={{
          width: "clamp(180px, 22vw, 300px)",
          height: "auto",
          top: "-3%",
          left: "52%",
          transform: "rotate(-12deg)",
        }}
      />
      <GridIcon
        className="absolute text-ultra-orange/[0.06] dark:text-ultra-orange/[0.04] hidden sm:block"
        style={{
          width: "clamp(220px, 38vw, 440px)",
          height: "auto",
          top: "22%",
          right: "-4%",
          transform: "rotate(8deg)",
        }}
      />
      <PlusIcon
        className="absolute text-ultra-orange/[0.08] dark:text-ultra-orange/[0.05]"
        style={{
          width: "clamp(150px, 20vw, 250px)",
          height: "auto",
          bottom: "-6%",
          left: "46%",
          transform: "rotate(15deg)",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100vh] min-h-[100dvh] flex items-center pt-14">
      <DecorativeSymbols />

      <div className="container relative z-10 py-16">
        <AnimatedSection className="max-w-xl lg:max-w-2xl">
          <a
            href="#newsletter"
            className="group inline-flex items-center gap-2 text-[13px] text-muted hover:text-foreground transition-all duration-300 mb-8 border border-border hover:border-ultra-orange/60 rounded-full px-4 py-2 hover:bg-ultra-orange/[0.03]"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ultra-orange animate-pulse" />
            <span>We share what we find</span>
            <span className="text-border">·</span>
            <span className="text-ultra-orange group-hover:underline underline-offset-2">Join 10,000+ readers →</span>
          </a>

          <h1 className="text-display text-foreground mb-6 leading-[1.08]" style={{ fontWeight: 400 }}>
            <span className="underline decoration-ultra-orange decoration-2 underline-offset-[0.18em]">vista</span> investigates
            <br />
            the future of the internet
          </h1>

          <p className="text-body-lg text-muted max-w-md leading-relaxed">
            A research collective on blockchain and AI.<br />
            See what&apos;s coming before others do.
          </p>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-10 left-0 right-0">
        <div className="container">
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2.5 animate-on-scroll-delay transition-colors cursor-pointer group"
            aria-label="Scroll down"
          >
            <span className="text-[10px] text-muted tracking-[0.2em] uppercase font-medium">Explore</span>
            <div className="animate-bounce">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-ultra-orange">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
