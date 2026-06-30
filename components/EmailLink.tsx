"use client";

import { site } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function EmailLink({ className }: { className?: string }) {
  function handleClick() {
    window.gtag?.("event", "email_click", {
      event_category: "contact",
      event_label: site.email,
    });
  }

  return (
    <a href={site.emailHref} onClick={handleClick} className={className}>
      {site.email}
    </a>
  );
}
