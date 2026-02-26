"use client";

import Link from "next/link";
import { DarkModeToggle } from "./shared";
import { SOCIAL_SUBSTACK, SOCIAL_TELEGRAM, SOCIAL_TWITTER } from "@/lib/constants";
import { BrandLogo } from "@/components/brand/BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

const externalLinks = [
  { href: SOCIAL_SUBSTACK, label: "Substack" },
  { href: SOCIAL_TELEGRAM, label: "Telegram" },
  { href: SOCIAL_TWITTER, label: "Twitter" },
];

function FooterBrandLogo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Vista home">
      <BrandLogo
        variant="lockup"
        theme="light"
        className="footer-vista-logo-light footer-vista-logo-size"
      />
      <BrandLogo
        variant="lockup"
        theme="dark"
        className="footer-vista-logo-dark footer-vista-logo-size"
      />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="footer-compact">
      <div className="container">
        {/* Mobile */}
        <div className="sm:hidden">
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
            <FooterBrandLogo />
            <div className="flex gap-6 text-caption">
              <div className="flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <Link key={label} href={href} className="text-muted hover:text-foreground transition-colors">{label}</Link>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {externalLinks.map(({ href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">{label}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-caption text-muted">&copy; {new Date().getFullYear()} Vista</span>
            <div className="flex items-center gap-3">
              <span className="text-caption text-muted font-mono">vista.wtf</span>
              <DarkModeToggle />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <FooterBrandLogo />
              <p className="text-caption text-muted mt-4">Research collective exploring<br />blockchain and AI.</p>
            </div>
            <div>
              <span className="text-label text-muted block mb-4">Pages</span>
              <div className="flex flex-col gap-2">
                {navLinks.map(({ href, label }) => (
                  <Link key={label} href={href} className="text-body-sm text-muted hover:text-foreground transition-colors">{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <span className="text-label text-muted block mb-4">Connect</span>
              <div className="flex flex-col gap-2">
                <a href="mailto:info@vista.wtf" className="text-body-sm text-muted hover:text-foreground transition-colors">info@vista.wtf</a>
                {externalLinks.map(({ href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-body-sm text-muted hover:text-foreground transition-colors">{label}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border flex items-center justify-between">
            <span className="text-caption text-muted">&copy; {new Date().getFullYear()} Vista. All rights reserved.</span>
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
