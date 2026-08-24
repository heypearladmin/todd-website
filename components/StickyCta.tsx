"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type Variant = "general" | "buyer" | "seller" | "relocation" | "neighborhood";

type VariantConfig = {
  message: string;
  ctaLabel: string;
  href: string;
  isExternalAction?: boolean;
};

const VARIANTS: Record<Variant, VariantConfig> = {
  buyer: {
    message: "Ready to Find Your Next Home?",
    ctaLabel: "Talk to Todd",
    href: site.contactPath,
  },
  seller: {
    message: "Curious What Your Home Is Worth?",
    ctaLabel: "Get My Home Value",
    href: "/new-braunfels-home-valuation#valuation-form",
  },
  relocation: {
    message: "Moving to New Braunfels?",
    ctaLabel: "Talk to Todd",
    href: site.contactPath,
  },
  neighborhood: {
    message: "Want to Know More About This Area?",
    ctaLabel: "Talk to Todd",
    href: site.contactPath,
  },
  general: {
    message: "Have Questions? Talk to Todd",
    ctaLabel: site.phone,
    href: site.phoneHref,
    isExternalAction: true,
  },
};

const DISMISS_KEY = "stickyCtaDismissed";
const SHOW_AFTER_PX = 480;

/**
 * Persistent bottom bar, contextual by page intent. Appears after the
 * visitor has scrolled past the hero, dismissible for the rest of the
 * session. Desktop shows the contextual message + matching CTA; mobile
 * collapses to a single click-to-call bar regardless of variant.
 */
export function StickyCta({ variant }: { variant: Variant }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const config = VARIANTS[variant];

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      return;
    }
    setDismissed(false);

    function onScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismiss() {
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  if (dismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Contact Todd Spencer"
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 transition-transform duration-500 ease-editorial motion-reduce:transition-none ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-ink/[0.08] bg-paper/95 backdrop-blur-md shadow-[0_-18px_40px_-30px_rgba(24,33,53,0.18)]">
        <div className="section-wrap flex items-center gap-4 py-3 md:py-3.5">
          {/* Desktop: contextual message + matching CTA */}
          <p className="hidden flex-1 text-[0.9375rem] font-medium text-ink md:block">
            {config.message}
          </p>
          {config.isExternalAction ? (
            <a href={config.href} className="hidden btn-primary !px-5 !py-2.5 md:inline-flex">
              {config.ctaLabel}
            </a>
          ) : (
            <Link href={config.href} className="hidden btn-primary !px-5 !py-2.5 md:inline-flex">
              {config.ctaLabel}
            </Link>
          )}

          {/* Mobile: simplified click-to-call only */}
          <a
            href={site.phoneHref}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[0.9375rem] font-medium text-paper md:hidden"
          >
            <span aria-hidden>📞</span>
            Call Todd Spencer
          </a>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-ink/40 transition-colors duration-200 hover:bg-ink/[0.06] hover:text-ink/70"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
