"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    let observer: IntersectionObserver | null = null;
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setInverted(entry.isIntersecting);
          });
        },
        {
          threshold: 0.1,
          rootMargin: '-50px 0px -50px 0px',
        }
      );

      observer.observe(newsletterSection);
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer?.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        inverted
          ? 'bg-[rgba(17,17,17,0.8)] border-b border-white/[0.08]'
          : scrolled
          ? 'bg-[rgba(250,250,250,0.8)] border-b border-black/[0.08]'
          : 'bg-transparent border-b-0'
      }`}
      style={{ backdropFilter: (scrolled || inverted) ? 'blur(12px)' : 'none' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-16">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-4' : 'py-5'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 transition-all duration-300">
            <span
              className={`text-lg font-medium transition-all duration-300 overflow-hidden ${inverted ? 'text-[#E4E2D8]' : 'text-[#111111]'}`}
              style={{
                maxWidth: scrolled ? '80px' : '0px',
                opacity: scrolled ? 1 : 0,
                marginRight: scrolled ? '4px' : '0px',
              }}
            >
              vista
            </span>
            <span className="text-[#FF5233] text-2xl" style={{ transform: 'rotate(0deg)' }}>
              ₊˚⊹
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/landing2#services"
              className={`text-base font-medium transition-colors duration-300 ${
                inverted ? 'text-[#E4E2D8] hover:text-[#FF5233]' : 'text-[#111111] hover:text-[#FF5233]'
              }`}
            >
              Services
            </Link>
            <Link
              href="/landing2#latest"
              className={`text-base font-medium transition-colors duration-300 ${
                inverted ? 'text-[#E4E2D8] hover:text-[#FF5233]' : 'text-[#111111] hover:text-[#FF5233]'
              }`}
            >
              Research
            </Link>
            <Link
              href="/landing2/about"
              className={`text-base font-medium transition-colors duration-300 ${
                inverted ? 'text-[#E4E2D8] hover:text-[#FF5233]' : 'text-[#111111] hover:text-[#FF5233]'
              }`}
            >
              About
            </Link>
            <Link
              href="#newsletter"
              className="bg-[#FF5233] text-white px-6 py-2.5 rounded-[2px] text-base font-medium hover:bg-[#FF7043] transition-colors duration-200"
            >
              Subscribe
            </Link>
          </div>

          <Link
            href="#newsletter"
            className="hidden md:inline-flex lg:hidden bg-[#FF5233] text-white px-5 py-2 rounded-[2px] text-sm font-medium hover:bg-[#FF7043] transition-colors duration-200"
          >
            Subscribe
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 border rounded-[2px] transition-colors ${
              inverted ? 'border-white/20 text-[#E4E2D8]' : 'border-black/20 text-[#111111]'
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className={`md:hidden pb-4 pt-1 border-t ${inverted ? 'border-white/[0.08]' : 'border-black/[0.08]'}`}>
            <div className="flex flex-col gap-3">
              <Link onClick={() => setMenuOpen(false)} href="/landing2#services" className={`${inverted ? 'text-[#E4E2D8]' : 'text-[#111111]'} text-base`}>
                Services
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="/landing2#latest" className={`${inverted ? 'text-[#E4E2D8]' : 'text-[#111111]'} text-base`}>
                Research
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="/landing2/about" className={`${inverted ? 'text-[#E4E2D8]' : 'text-[#111111]'} text-base`}>
                About
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                href="#newsletter"
                className="mt-1 inline-flex w-fit bg-[#FF5233] text-white px-5 py-2 rounded-[2px] text-sm font-medium"
              >
                Subscribe
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
