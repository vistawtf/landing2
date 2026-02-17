"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DarkModeToggle } from "./shared";

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
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="group flex items-center h-8">
          <span className="text-xl flex items-center">
            <span className="font-medium text-foreground tracking-tight">vista</span>
            <span className="text-ultra-orange" style={{ marginLeft: "4px" }}>₊˚⊹</span>
          </span>
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
