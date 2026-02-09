"use client";

import { useState, useEffect, useRef } from "react";
import { MoonIcon, SunIcon } from "./icons";

// ========================================
// HOOKS
// ========================================

export function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// ========================================
// SHARED COMPONENTS
// ========================================

export function AnimatedSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Logo({ showText = true, onNavigate }: { showText?: boolean; onNavigate?: (id: string) => void }) {
  return (
    <a
      href="#hero"
      onClick={(e) => { e.preventDefault(); onNavigate?.("hero"); }}
      className="group flex items-center h-8"
    >
      <span className="text-xl flex items-center">
        <span
          className="overflow-hidden flex items-center"
          style={{ width: showText ? "52px" : "0px", transition: "width 300ms ease-out" }}
        >
          <span
            className="font-medium text-foreground tracking-tight whitespace-nowrap"
            style={{
              transform: showText ? "translateX(0)" : "translateX(-20px)",
              opacity: showText ? 1 : 0,
              transition: "transform 300ms ease-out, opacity 200ms ease-out",
            }}
          >
            vista
          </span>
        </span>
        <span className="text-ultra-orange" style={{ marginLeft: "4px" }}>₊˚⊹</span>
      </span>
    </a>
  );
}

export function SectionHeader({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-header">
      <div className="max-w-[1536px] mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4">
            <span className="text-label text-muted font-mono">{number}</span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-label text-muted">{label}</span>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = localStorage.getItem("theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
  };

  return (
    <button
      onClick={mounted ? toggle : undefined}
      className={`theme-toggle transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
      aria-label="Toggle theme"
    >
      {mounted ? (dark ? <SunIcon /> : <MoonIcon />) : <div className="w-4 h-4" />}
    </button>
  );
}
