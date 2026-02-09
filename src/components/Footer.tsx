"use client";

import { Logo, DarkModeToggle } from "./shared";

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

export function Footer() {
  return (
    <footer className="footer-compact">
      <div className="container">
        {/* Mobile layout */}
        <div className="sm:hidden">
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
            <Logo />
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
              <Logo />
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
                <a href="https://linkedin.com/company/vista" target="_blank" rel="noopener noreferrer" className="text-body-sm text-muted hover:text-foreground transition-colors">LinkedIn</a>
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
