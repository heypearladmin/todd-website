"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const WIDGET_SCRIPT_ID = "idxwidgetsrc-169078";
const WIDGET_ELEMENT_ID = "idx-listings-showcase-169078";
const WIDGET_SRC = "https://todd.homesforeveryday.com/idx/widgets/169078";
const IDX_DOMAIN = "todd.homesforeveryday.com";

/**
 * Renders Todd's official IDX Broker Listings Showcase widget (id 169078).
 *
 * The widget script inserts its own <idx-listings-showcase> element via
 * `document.getElementById(WIDGET_SCRIPT_ID).before(...)`, i.e. relative to
 * its own <script> tag's DOM position — not via next/script, which always
 * appends to the end of <body> regardless of JSX position. The script tag
 * has to be a real DOM node inside this component's container for the
 * widget to render here instead of at the bottom of the page.
 */
export function FeaturedListings() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Defensive cleanup in case a prior mount (React StrictMode double-invoke,
    // or client-side back/forward navigation) left a stale instance behind.
    document.getElementById(WIDGET_SCRIPT_ID)?.remove();
    document.getElementById(WIDGET_ELEMENT_ID)?.remove();

    const script = document.createElement("script");
    script.id = WIDGET_SCRIPT_ID;
    script.src = WIDGET_SRC;
    script.type = "text/javascript";
    script.setAttribute("charset", "UTF-8");
    container.appendChild(script);

    function onClick(e: MouseEvent) {
      const anchor = e
        .composedPath()
        .find((el): el is HTMLAnchorElement => el instanceof HTMLAnchorElement && !!el.href);
      if (!anchor || !anchor.href.includes(IDX_DOMAIN)) return;

      window.gtag?.("event", "listing_click", {
        agent: "todd",
        destination: "todd_idx",
        listing_url: anchor.href,
        page_url: window.location.href,
      });
    }

    // Capture phase: the widget renders inside an open shadow root, so this
    // still sees the click via composedPath(). No preventDefault — the
    // widget's own navigation is left completely untouched.
    container.addEventListener("click", onClick, { capture: true });

    return () => {
      container.removeEventListener("click", onClick, { capture: true });
      document.getElementById(WIDGET_SCRIPT_ID)?.remove();
      document.getElementById(WIDGET_ELEMENT_ID)?.remove();
    };
  }, []);

  return <div ref={containerRef} className="min-h-[420px] w-full" />;
}
