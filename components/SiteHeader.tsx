"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: site.neighborhoodsPath, label: "Neighborhoods" },
  { href: "/explore", label: "Explore" },
  { href: site.blogPath, label: "Journal" },
  { href: site.aboutPath, label: "About" },
  { href: site.contactPath, label: "Contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Header is always rendered in its readable state — cream surface, ink text, soft blur.
  // This guarantees the nav stays visible at the top of every page, including the homepage hero.
  return (
    <header className="sticky top-0 z-40 border-b border-ink/[0.08] bg-paper/90 backdrop-blur-md shadow-[0_18px_40px_-30px_rgba(24,33,53,0.18)]">
      <div className="section-wrap flex items-center justify-between gap-6 py-5 md:py-6">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity duration-cinema ease-cinema hover:opacity-80"
          onClick={() => setMenuOpen(false)}
          aria-label={`${site.brand}, New Braunfels home`}
        >
          <span className="relative block h-11 w-11 shrink-0">
            <Image
              src={site.logoSrc}
              alt={site.logoAlt}
              fill
              priority
              sizes="44px"
              className="object-contain"
            />
          </span>
          <span className="whitespace-nowrap font-display text-[1.0625rem] font-semibold tracking-tight text-ink md:text-[1.125rem]">
            {site.brand}
          </span>
          <span className="hidden whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.32em] text-muted xl:inline">
            · New Braunfels
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink/70 transition-colors duration-cinema ease-cinema hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden whitespace-nowrap text-[0.78rem] font-medium tracking-wide text-ink/70 transition-colors duration-cinema ease-cinema hover:text-primary xl:inline"
          >
            {site.phone}
          </a>
          <Link
            href={site.contactPath}
            className="btn-primary hidden whitespace-nowrap !px-5 !py-2.5 sm:inline-flex"
          >
            Book a call
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((s) => !s)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-cinema ease-cinema lg:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <span aria-hidden className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-cinema ease-cinema ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink transition-opacity duration-cinema ease-cinema ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-ink transition-transform duration-cinema ease-cinema ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-ink/[0.06] bg-paper/95 backdrop-blur-md transition-[max-height,opacity] duration-cinema ease-cinema lg:hidden ${
          menuOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-wrap flex flex-col gap-1 py-4" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-[0.95rem] font-medium text-ink/85 transition-colors duration-cinema ease-cinema hover:bg-paper-deep hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-ink/[0.06] px-4 pt-4 text-[0.875rem] text-ink/70">
            <a href={site.phoneHref} className="hover:text-primary">
              {site.phone}
            </a>
            <a href={site.emailHref} className="hover:text-primary">
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
