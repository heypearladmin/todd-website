"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const LABEL_DISMISS_KEY = "quickContactLabelDismissed";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M7.5 3.75h-2A2.25 2.25 0 0 0 3.25 6c0 8.15 6.6 14.75 14.75 14.75a2.25 2.25 0 0 0 2.25-2.25v-2a1 1 0 0 0-.76-.97l-4-1a1 1 0 0 0-1.02.27l-1.4 1.4a12.3 12.3 0 0 1-5.52-5.52l1.4-1.4a1 1 0 0 0 .27-1.02l-1-4a1 1 0 0 0-.97-.76Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4.2 3.15A.5.5 0 0 1 4 18.75V5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="10.5" cy="10.5" r="6.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 19l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

const ACTIONS = [
  {
    key: "call",
    label: "Call Todd",
    sublabel: site.phone,
    href: site.phoneHref,
    icon: PhoneIcon,
    external: true,
  },
  {
    key: "message",
    label: "Send a Message",
    sublabel: "Get a reply within a business day",
    href: site.contactPath,
    icon: MessageIcon,
    external: false,
  },
  {
    key: "search",
    label: "Search Homes",
    sublabel: "Browse current listings",
    // TEMPORARY: IDX Broker's Dynamic Wrapper JS 404s on the newly-approved
    // domain, so /idx-search renders blank. Link straight to their hosted
    // search page (confirmed working) until the wrapper is republished on
    // IDX Broker's side, then switch this back to "/idx-search".
    href: "https://todd.homesforeveryday.com/idx/search/advanced",
    icon: SearchIcon,
    external: true,
    newTab: true,
  },
];

export function QuickContactFab() {
  const [open, setOpen] = useState(false);
  const [labelDismissed, setLabelDismissed] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(LABEL_DISMISS_KEY) !== "1") {
      setLabelDismissed(false);
    }
  }, []);

  function dismissLabel() {
    setLabelDismissed(true);
    sessionStorage.setItem(LABEL_DISMISS_KEY, "1");
  }

  return (
    <div className="fixed bottom-[92px] right-4 z-40 flex flex-col items-end gap-3 md:bottom-24 md:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Contact Todd Spencer"
          className="w-[17rem] origin-bottom-right overflow-hidden rounded-[20px] border border-ink/[0.08] bg-paper shadow-surface-hover"
        >
          <div className="flex items-start justify-between gap-3 bg-ink px-5 py-4">
            <div>
              <p className="text-[0.9375rem] font-medium !text-paper">Need anything?</p>
              <p className="mt-1 text-[0.8125rem] leading-[1.5] !text-paper/70">
                Call, message, or search homes — whatever&apos;s easiest.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-paper/60 transition-colors duration-200 hover:bg-paper/10 hover:text-paper"
            >
              <CloseIcon className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex flex-col divide-y divide-ink/[0.06]">
            {ACTIONS.map(({ key, label, sublabel, href, icon: Icon, external, newTab }) => {
              const content = (
                <>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="block text-[0.9rem] font-medium text-ink">{label}</span>
                    <span className="block text-[0.75rem] text-ink/55">{sublabel}</span>
                  </span>
                </>
              );
              const rowClass =
                "flex items-center gap-3 px-5 py-3.5 transition-colors duration-200 hover:bg-ink/[0.03]";
              return external ? (
                <a
                  key={key}
                  href={href}
                  className={rowClass}
                  {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {content}
                </a>
              ) : (
                <Link key={key} href={href} className={rowClass}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        {!open && !labelDismissed && (
          <div className="flex items-center gap-1 rounded-full border border-ink/[0.08] bg-paper py-1.5 pl-4 pr-1.5 shadow-surface">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="whitespace-nowrap text-[0.875rem] font-medium text-ink"
            >
              Have Questions? Talk to Todd
            </button>
            <button
              type="button"
              onClick={dismissLabel}
              aria-label="Dismiss"
              className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-ink/40 transition-colors duration-200 hover:bg-ink/[0.06] hover:text-ink/70"
            >
              <CloseIcon className="h-3 w-3" />
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close contact options" : "Contact options"}
          aria-expanded={open}
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-paper shadow-surface-hover transition-transform duration-200 ease-editorial hover:scale-105 motion-reduce:transition-none"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <PhoneIcon className="h-6 w-6" />}
        </button>
      </div>
    </div>
  );
}
