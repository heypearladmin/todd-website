"use client";

import { site } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function PhoneLink({ className }: { className?: string }) {
  function handleClick() {
    window.gtag?.("event", "phone_click", {
      event_category: "contact",
      event_label: site.phone,
    });
  }

  return (
    <a
      href={site.phoneHref}
      onClick={handleClick}
      className={className}
    >
      {site.phone}
    </a>
  );
}
