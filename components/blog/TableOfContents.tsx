"use client";

import { useEffect, useRef, useState } from "react";
import type { TocItem } from "@/lib/blog-utils";

type Props = { items: TocItem[] };

export function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!items.length) return;

    const headingEls = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const visibleMap = new Map<string, boolean>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleMap.set(entry.target.id, entry.isIntersecting);
        });
        const first = headingEls.find((el) => visibleMap.get(el.id));
        if (first) setActiveId(first.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headingEls.forEach((el) => observerRef.current!.observe(el));
    return () => observerRef.current?.disconnect();
  }, [items]);

  if (!items.length) return null;

  const linkClass = (id: string, level: 2 | 3) => {
    const base =
      "block truncate text-left transition-colors duration-200 leading-snug py-1";
    const indent = level === 3 ? "pl-3 text-[0.8125rem]" : "text-[0.875rem]";
    const active =
      id === activeId
        ? "text-primary font-semibold"
        : "text-ink/55 hover:text-ink font-normal";
    return `${base} ${indent} ${active}`;
  };

  const list = (
    <ol className="space-y-0.5">
      {items.map(({ id, label, level }) => (
        <li key={id}>
          <a href={`#${id}`} className={linkClass(id, level)} onClick={() => setMobileOpen(false)}>
            {label}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      {/* Mobile: collapsible */}
      <div className="lg:hidden rounded-xl border border-ink/[0.09] bg-paper overflow-hidden">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex w-full items-center justify-between px-5 py-3.5 text-left"
          aria-expanded={mobileOpen}
        >
          <span className="caption !text-ink/60 !normal-case !tracking-normal text-[0.8125rem] font-semibold">
            On this page
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
            className={`text-ink/40 transition-transform duration-300 ${mobileOpen ? "rotate-180" : ""}`}
          >
            <path d="M3 6l5 4 5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {mobileOpen && <div className="px-5 pb-4">{list}</div>}
      </div>

      {/* Desktop: always visible */}
      <div className="hidden lg:block">
        <p className="caption !text-ink/45 mb-3 text-[0.75rem]">On this page</p>
        {list}
      </div>
    </>
  );
}
