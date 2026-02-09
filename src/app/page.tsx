"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Logo } from "@/components/shared";
import { HeroSection } from "@/components/Hero";
import { NewsletterSection } from "@/components/Newsletter";
import { AboutSection } from "@/components/About";

// ========================================
// SECTION IDS
// ========================================

const SECTION_IDS = ["hero", "newsletter", "about"] as const;

// ========================================
// SCROLL SNAP HOOK
// ========================================

function usePremiumScrollSnap(containerRef: React.RefObject<HTMLElement | null>) {
  const isScrollingRef = useRef(false);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastWheelTimeRef = useRef(0);
  const accumulatedDeltaRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let wheelEventCount = 0;
    let wheelEventResetTimeout: NodeJS.Timeout | null = null;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.ctrlKey) return;

      const now = performance.now();
      const timeSinceLastWheel = now - lastWheelTimeRef.current;
      lastWheelTimeRef.current = now;

      wheelEventCount++;
      if (wheelEventResetTimeout) clearTimeout(wheelEventResetTimeout);
      wheelEventResetTimeout = setTimeout(() => { wheelEventCount = 0; }, 100);

      if (wheelEventCount > 3 && timeSinceLastWheel < 50 && Math.abs(e.deltaY) < 50) {
        return;
      }

      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      accumulatedDeltaRef.current += e.deltaY;

      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);

      wheelTimeoutRef.current = setTimeout(() => {
        const delta = accumulatedDeltaRef.current;
        accumulatedDeltaRef.current = 0;
        if (Math.abs(delta) < 10) return;

        const sectionHeight = window.innerHeight;
        const currentSection = Math.round(container.scrollTop / sectionHeight);
        const maxSection = Math.round((container.scrollHeight - sectionHeight) / sectionHeight);
        const direction = delta > 0 ? 1 : -1;
        const targetSection = Math.max(0, Math.min(maxSection, currentSection + direction));
        const targetScroll = targetSection * sectionHeight;

        if (targetScroll !== container.scrollTop) {
          isScrollingRef.current = true;
          container.scrollTo({ top: targetScroll, behavior: "smooth" });
          setTimeout(() => { isScrollingRef.current = false; }, 600);
        }
      }, 50);

      e.preventDefault();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
      if (wheelEventResetTimeout) clearTimeout(wheelEventResetTimeout);
    };
  }, [containerRef]);
}

// ========================================
// HEADER
// ========================================

function Header({ activeSection, onNavigate }: { activeSection: string; onNavigate: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const snapContainer = document.querySelector(".snap-container");

    // On mobile, snap-container has overflow:visible so window scrolls instead
    const isContainerScrollable = snapContainer && getComputedStyle(snapContainer).overflow !== "visible";

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = isContainerScrollable
          ? (snapContainer as HTMLElement).scrollTop
          : window.scrollY || document.documentElement.scrollTop;
        setScrolled(scrollTop > 300);
        ticking = false;
      });
    };

    const target = isContainerScrollable ? snapContainer! : window;
    target.addEventListener("scroll", handleScroll, { passive: true });
    return () => target.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "newsletter", label: "Newsletter" },
    { id: "about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container">
        <div className="grid grid-cols-3 items-center h-14">
          <Logo showText={scrolled} onNavigate={onNavigate} />

          <nav className="flex items-center justify-center gap-4 sm:gap-8">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(id); }}
                className={`nav-link text-body-md transition-colors ${
                  activeSection === id ? "text-ultra-orange nav-link-active" : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex justify-end">
            <button
              onClick={() => onNavigate("newsletter")}
              className="bg-ultra-orange hover:bg-ultra-orange/90 text-white px-4 py-2 text-body-sm font-medium transition-colors rounded"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// ========================================
// MAIN PAGE
// ========================================

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const containerRef = useRef<HTMLElement>(null);

  usePremiumScrollSnap(containerRef);

  // Track active section for navbar
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section!));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = useCallback((id: string) => {
    const element = document.getElementById(id);
    const container = containerRef.current;
    if (element && container) {
      container.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main ref={containerRef} className="snap-container bg-background">
        <HeroSection />
        <NewsletterSection />
        <AboutSection />
      </main>
    </>
  );
}
