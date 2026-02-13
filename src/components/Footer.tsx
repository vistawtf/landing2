"use client";

import Image from "next/image";
import { DarkModeToggle } from "./shared";

const navLinks = [
  { id: "newsletter", label: "Newsletter" },
  { id: "about", label: "About" },
];

function scrollToSection(e: React.MouseEvent, id: string) {
  e.preventDefault();
  const element = document.getElementById(id);
  if (!element) return;
  const snapContainer = document.querySelector(".snap-container");
  const isContainerScrollable = snapContainer && getComputedStyle(snapContainer).overflow !== "visible";
  if (isContainerScrollable && snapContainer) {
    snapContainer.scrollTo({ top: element.offsetTop, behavior: "smooth" });
  } else {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function FooterBrandLogo() {
  return (
    <a
      href="#hero"
      onClick={(e) => scrollToSection(e, "hero")}
      className="inline-flex items-center"
      aria-label="Go to top"
    >
      <Image
        src="/partners/vista logo for light bgs.svg"
        alt="Vista logo"
        width={452}
        height={164}
        className="footer-vista-logo-light w-[64px] h-[20px] object-contain"
      />
      <Image
        src="/partners/vista logo for dark bgs.svg"
        alt="Vista logo"
        width={513}
        height={236}
        className="footer-vista-logo-dark w-[64px] h-[20px] object-contain"
      />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="footer-compact">
      <div className="container">
        {/* Mobile layout */}
        <div className="sm:hidden">
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
            <FooterBrandLogo />
            <div className="flex gap-6 text-caption">
              <div className="flex flex-col gap-1">
                {navLinks.map(({ id, label }) => (
                  <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)} className="text-muted hover:text-foreground transition-colors">{label}</a>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <a href="mailto:info@vista.wtf" className="text-muted hover:text-foreground transition-colors">Email</a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-caption text-muted">© {new Date().getFullYear()} Vista</span>
            <div className="flex items-center gap-3">
              <span className="text-caption text-muted font-mono">vista.wtf</span>
              <DarkModeToggle />
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <FooterBrandLogo />
              <p className="text-caption text-muted mt-4">Research collective exploring<br />blockchain and AI.</p>
            </div>
            <div>
              <span className="text-label text-muted block mb-4">Links</span>
              <div className="flex flex-col gap-2">
                {navLinks.map(({ id, label }) => (
                  <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)} className="text-body-sm text-muted hover:text-foreground transition-colors">{label}</a>
                ))}
              </div>
            </div>
            <div>
              <span className="text-label text-muted block mb-4">Connect</span>
              <div className="flex flex-col gap-2">
                <a href="mailto:info@vista.wtf" className="text-body-sm text-muted hover:text-foreground transition-colors">info@vista.wtf</a>
                <a href="https://twitter.com/viaboratorio" target="_blank" rel="noopener noreferrer" className="text-body-sm text-muted hover:text-foreground transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border flex items-center justify-between">
            <span className="text-caption text-muted">© {new Date().getFullYear()} Vista</span>
            <div className="flex items-center gap-3">
              <span className="text-caption text-muted font-mono">vista.wtf</span>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
