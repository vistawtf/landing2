"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const logoTheme = inverted ? "dark" : "light";

  useEffect(() => {
    let rafId: number | null = null;

    const updateNavState = () => {
      const nextScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      const newsletterSection = document.getElementById("newsletter");
      if (!newsletterSection) {
        rafId = null;
        return;
      }

      const rect = newsletterSection.getBoundingClientRect();
      const navHeight = navRef.current?.offsetHeight ?? 60;

      // Hysteresis thresholds to avoid jumpy color flips:
      // - Enter dark mode only when newsletter is very close to nav (tight trigger)
      // - Exit dark mode only when newsletter is clearly away from nav (looser trigger)
      const enterTopThreshold = navHeight + 14;
      const exitTopThreshold = navHeight + 140;
      const exitBottomThreshold = navHeight + 36;

      setInverted((prev) => {
        if (!prev) {
          const shouldEnter = rect.top <= enterTopThreshold && rect.bottom > exitBottomThreshold;
          return shouldEnter;
        }

        const shouldExit = rect.top >= exitTopThreshold || rect.bottom <= exitBottomThreshold;
        return shouldExit ? false : true;
      });
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateNavState();
        rafId = null;
      });
    };

    updateNavState();
    window.addEventListener("scroll", onScroll, { passive: true });

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        inverted
          ? "bg-[#111111] border-b border-white/[0.08]"
          : "bg-[#FFFFFF] border-b border-black/[0.08]"
      }`}
      style={scrolled ? { backdropFilter: "blur(8px) saturate(1.1)", WebkitBackdropFilter: "blur(8px) saturate(1.1)" } : undefined}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-16">
        <div className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "py-2.5" : "py-3"}`}>
          <Link href="/" className="flex items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <span
              className={`brand-wordmark-transition inline-block overflow-hidden whitespace-nowrap ${
                scrolled ? "max-w-[42px] opacity-100 translate-x-0" : "max-w-0 opacity-0 -translate-x-[2px]"
              }`}
            >
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

          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="#services"
              className={`text-base font-medium transition-colors duration-300 ${
                inverted ? "text-[#E4E2D8] hover:text-[#FF5233]" : "text-[#111111] hover:text-[#FF5233]"
              }`}
            >
              Services
            </Link>
            <Link
              href="#latest"
              className={`text-base font-medium transition-colors duration-300 ${
                inverted ? "text-[#E4E2D8] hover:text-[#FF5233]" : "text-[#111111] hover:text-[#FF5233]"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium transition-colors duration-300 ${
                inverted ? "text-[#E4E2D8] hover:text-[#FF5233]" : "text-[#111111] hover:text-[#FF5233]"
              }`}
            >
              About
            </Link>
            <Link
              href="#newsletter"
              className="bg-[#FF5233] text-white px-6 py-2.5 rounded-[3px] text-base font-medium hover:bg-[#E64A2E] transition-colors duration-200"
            >
              Subscribe
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 border rounded-[3px] transition-colors ${
              inverted ? "border-white/20 text-[#E4E2D8]" : "border-black/20 text-[#111111]"
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "max-h-[300px] opacity-100 pb-5 pt-2" : "max-h-0 opacity-0 pb-0 pt-0"
          }`}
        >
          <div className={`border-t ${inverted ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
            <div className="flex flex-col gap-4 pt-4">
              <Link onClick={() => setMenuOpen(false)} href="#services" className={`${inverted ? "text-[#E4E2D8]" : "text-[#111111]"} text-[17px] py-1`}>
                Services
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="#latest" className={`${inverted ? "text-[#E4E2D8]" : "text-[#111111]"} text-[17px] py-1`}>
                Blog
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="/about" className={`${inverted ? "text-[#E4E2D8]" : "text-[#111111]"} text-[17px] py-1`}>
                About
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                href="#newsletter"
                className="mt-1 inline-flex w-fit bg-[#FF5233] text-white px-5 py-2 rounded-[3px] text-sm font-medium"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
