"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { neighborhoods } from "@/lib/home-content";

const buyingLinks = [
  { href: "/buying-a-home-in-new-braunfels", label: "Buying a Home" },
  { href: "/blog/first-time-homebuyer-new-braunfels", label: "First-Time Home Buyers" },
  { href: "/blog/first-time-homebuyer-new-braunfels#get-pre-approved-before-you-do-anything-else", label: "Getting Pre-Approved" },
  { href: "/blog/winning-offer-new-braunfels-texas", label: "Making an Offer" },
  { href: "/blog/home-inspection-new-braunfels-texas", label: "Home Inspections" },
  { href: "/blog/closing-costs-new-braunfels-texas", label: "Closing Costs" },
  { href: "/blog/first-time-homebuyer-new-braunfels#closing-day-in-texas", label: "Closing Day" },
  { href: "/blog/new-construction-vs-resale-new-braunfels", label: "New Construction" },
] as const;

const sellingLinks = [
  { href: "/selling-a-home-in-new-braunfels", label: "Selling a Home" },
  { href: "/blog/selling-home-new-braunfels-guide", label: "Home Selling Guide" },
  { href: "/new-braunfels-home-valuation", label: "What's My Home Worth?" },
  { href: "/blog/selling-home-new-braunfels-guide#what-to-do-before-the-sign-goes-in-the-yard", label: "Preparing Your Home" },
  { href: "/blog/selling-home-new-braunfels-guide#staging-for-the-new-braunfels-buyer", label: "Home Staging" },
  { href: "/blog/selling-home-new-braunfels-guide#getting-the-price-right-from-day-one", label: "Pricing Your Home" },
  { href: "/blog/selling-home-new-braunfels-guide#how-your-home-gets-in-front-of-the-right-buyers", label: "Marketing Your Home" },
  { href: "/blog/selling-home-new-braunfels-guide#evaluating-offers-and-getting-to-the-closing-table", label: "Offers & Negotiation" },
] as const;

const viewAllLinks = {
  buying: { href: "/buying-a-home-in-new-braunfels", label: "View All Buying Guides" },
  selling: { href: "/selling-a-home-in-new-braunfels", label: "View All Selling Guides" },
} as const;

const links = [
  // TEMPORARY: IDX Broker's Dynamic Wrapper JS 404s on the newly-approved
  // domain (todd.homesforeveryday.com/idx/wrapper-js/includeWrapper.js), so
  // /idx-search renders blank. Link straight to their hosted search page
  // (confirmed working) until the wrapper is republished on IDX Broker's
  // side, then switch this back to "/idx-search".
  { href: "https://todd.homesforeveryday.com/idx/search/advanced", label: "Search Homes", external: true },
  { href: "/explore", label: "Explore" },
  { href: site.blogPath, label: "Blog" },
  { href: site.aboutPath, label: "About" },
  { href: site.contactPath, label: "Contact" },
] as const;

const viewAllNeighborhoods = { href: site.neighborhoodsPath, label: "View All Neighborhoods" };

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointer(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink/70 transition-colors duration-cinema ease-cinema hover:text-primary"
      >
        Services
        <svg
          width="10"
          height="10"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className={`transition-transform duration-cinema ease-cinema ${open ? "rotate-180" : ""}`}
        >
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`absolute left-1/2 top-full z-10 mt-3 w-[34rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper shadow-surface transition-[opacity,transform] duration-cinema ease-cinema ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 divide-x divide-ink/[0.07]">
          <div className="py-5">
            <p className="px-6 pb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink/40">
              Buying
            </p>
            {buyingLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-2 text-[0.8125rem] font-medium tracking-wide text-ink/75 transition-colors duration-cinema ease-cinema hover:bg-paper-deep hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={viewAllLinks.buying.href}
              onClick={() => setOpen(false)}
              className="mt-2 block px-6 py-2 text-[0.75rem] font-semibold tracking-wide text-primary transition-colors duration-cinema ease-cinema hover:text-copper"
            >
              {viewAllLinks.buying.label} →
            </Link>
          </div>
          <div className="py-5">
            <p className="px-6 pb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink/40">
              Selling
            </p>
            {sellingLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-2 text-[0.8125rem] font-medium tracking-wide text-ink/75 transition-colors duration-cinema ease-cinema hover:bg-paper-deep hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={viewAllLinks.selling.href}
              onClick={() => setOpen(false)}
              className="mt-2 block px-6 py-2 text-[0.75rem] font-semibold tracking-wide text-primary transition-colors duration-cinema ease-cinema hover:text-copper"
            >
              {viewAllLinks.selling.label} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function NeighborhoodsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointer(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink/70 transition-colors duration-cinema ease-cinema hover:text-primary"
      >
        Neighborhoods
        <svg
          width="10"
          height="10"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className={`transition-transform duration-cinema ease-cinema ${open ? "rotate-180" : ""}`}
        >
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`absolute left-1/2 top-full z-10 mt-3 w-[24rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper shadow-surface transition-[opacity,transform] duration-cinema ease-cinema ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="py-5">
          <p className="px-6 pb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink/40">
            Featured Neighborhoods
          </p>
          <div className="grid grid-cols-2 gap-x-2 px-3">
            {neighborhoods.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-[0.8125rem] font-medium tracking-wide text-ink/75 transition-colors duration-cinema ease-cinema hover:bg-paper-deep hover:text-primary"
              >
                {n.title}
              </Link>
            ))}
          </div>
          <div className="mt-2 border-t border-ink/[0.07] px-6 pt-3">
            <Link
              href={viewAllNeighborhoods.href}
              onClick={() => setOpen(false)}
              className="block text-[0.75rem] font-semibold tracking-wide text-primary transition-colors duration-cinema ease-cinema hover:text-copper"
            >
              {viewAllNeighborhoods.label} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <ServicesDropdown />
          <NeighborhoodsDropdown />
          {links.map((l) =>
            "external" in l && l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink/70 transition-colors duration-cinema ease-cinema hover:text-primary"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink/70 transition-colors duration-cinema ease-cinema hover:text-primary"
              >
                {l.label}
              </Link>
            )
          )}
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
        className={`border-t border-ink/[0.06] bg-paper/95 backdrop-blur-md transition-[max-height,opacity] duration-cinema ease-cinema lg:hidden ${
          menuOpen ? "max-h-[calc(100vh-5rem)] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="section-wrap flex flex-col gap-1 py-4" aria-label="Mobile">
          <p className="px-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink/40">
            Buying
          </p>
          {buyingLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-2.5 text-[0.9rem] font-medium text-ink/80 transition-colors duration-cinema ease-cinema hover:bg-paper-deep hover:text-primary"
            >
              {l.label}
            </Link>
          ))}

          <p className="mt-3 px-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink/40">
            Selling
          </p>
          {sellingLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-2.5 text-[0.9rem] font-medium text-ink/80 transition-colors duration-cinema ease-cinema hover:bg-paper-deep hover:text-primary"
            >
              {l.label}
            </Link>
          ))}

          <p className="mt-3 px-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink/40">
            Neighborhoods
          </p>
          {neighborhoods.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-2.5 text-[0.9rem] font-medium text-ink/80 transition-colors duration-cinema ease-cinema hover:bg-paper-deep hover:text-primary"
            >
              {n.title}
            </Link>
          ))}
          <Link
            href={viewAllNeighborhoods.href}
            onClick={() => setMenuOpen(false)}
            className="block rounded-2xl px-4 py-2.5 text-[0.85rem] font-semibold text-primary transition-colors duration-cinema ease-cinema hover:text-copper"
          >
            {viewAllNeighborhoods.label} →
          </Link>

          {links.map((l) =>
            "external" in l && l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-[0.95rem] font-medium text-ink/85 transition-colors duration-cinema ease-cinema hover:bg-paper-deep hover:text-primary"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-[0.95rem] font-medium text-ink/85 transition-colors duration-cinema ease-cinema hover:bg-paper-deep hover:text-primary"
              >
                {l.label}
              </Link>
            )
          )}
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
