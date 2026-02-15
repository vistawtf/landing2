"use client";

import { useState, useEffect, useCallback } from "react";
import { Logo, DarkModeToggle } from "@/components/shared";
import { HeroSection } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ArticlesPreview } from "@/components/ArticlesPreview";
import { NewsletterSection } from "@/components/Newsletter";
import { AboutSection } from "@/components/About";

const SECTION_IDS = ["hero", "services", "articles", "newsletter", "about"] as const;

function Header({ activeSection, onNavigate }: { activeSection: string; onNavigate: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled((window.scrollY || document.documentElement.scrollTop) > 300);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "services", label: "Services" },
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

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section!));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="bg-background">
        <HeroSection />
        <ServicesPreview />
        <ArticlesPreview />
        <NewsletterSection />
        <AboutSection />
      </main>
    </>
  );
}
