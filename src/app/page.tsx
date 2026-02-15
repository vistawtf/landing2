"use client";

import { useState, useEffect, useCallback } from "react";
import { Logo, DarkModeToggle } from "@/components/shared";
import { HeroSection } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ArticlesPreview } from "@/components/ArticlesPreview";
import { SocialProof } from "@/components/SocialProof";
import { NewsletterSection } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const SECTION_IDS = ["hero", "services", "articles", "proof", "newsletter"] as const;

function Header({ activeSection, onNavigate }: { activeSection: string; onNavigate: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled((window.scrollY || document.documentElement.scrollTop) > 40);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "articles", label: "Research" },
    { id: "newsletter", label: "Newsletter" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14">
          <Logo showText={scrolled} onNavigate={onNavigate} />
          <nav className="hidden sm:flex items-center gap-8">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(id); }}
                className={`nav-link text-body-sm font-medium transition-colors duration-200 ${
                  activeSection === id ? "text-foreground nav-link-active" : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <button
              onClick={() => onNavigate("newsletter")}
              className="subscribe-btn text-body-sm font-medium"
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
      <main className="bg-background overflow-hidden">
        <HeroSection />
        <ServicesPreview />
        <ArticlesPreview />
        <SocialProof />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
