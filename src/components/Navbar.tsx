"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DarkModeToggle } from "./shared";
import { BrandLogo } from "@/components/brand/BrandLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      rafId = null;
    };
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });

    const root = document.documentElement;
    const syncTheme = () => setIsDarkTheme(root.classList.contains("dark"));
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const logoTheme = isDarkTheme ? "dark" : "light";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="group flex items-center h-8">
          <span className="inline-block whitespace-nowrap">
            <BrandLogo
              variant="wordmark"
              theme={logoTheme}
              className="block h-4 w-auto"
              priority
            />
          </span>
          <div className="shrink-0 ml-1">
            <BrandLogo
              variant="mark"
              theme={logoTheme}
              className="block h-5 w-auto"
              priority
            />
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-body-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
