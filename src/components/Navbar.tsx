"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo, DarkModeToggle } from "./shared";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo showText onNavigate={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <nav className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-body-sm text-muted hover:text-foreground transition-colors"
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
