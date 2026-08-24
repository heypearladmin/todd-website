import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Search Homes for Sale | Todd Spencer — New Braunfels Real Estate",
  description:
    "Search homes for sale in New Braunfels and Comal County. Browse MLS listings with Todd Spencer, your local real estate expert.",
  alternates: {
    canonical: "https://todd-spencer.com/idx-search",
  },
  // Not linked from nav and IDX Broker integration is not yet approved —
  // keep this out of Google's index until it's live. This does not affect
  // IDX Broker's own dynamic-wrapper fetch of this page (see comment below).
  robots: {
    index: false,
    follow: false,
  },
};

/*
 * IDX Broker Dynamic Wrapper page.
 * IDX Broker fetches this URL, splits on <div id="idxStart">, and uses
 * the surrounding HTML as the site shell for all hosted search pages.
 * The includeWrapper.js call is required by IDX Broker's dynamic wrapper spec.
 */
export default function IdxSearchPage() {
  return (
    <>
      <Script
        src="//homesforeveryday.idxbroker.com/idx/wrapper-js/includeWrapper.js"
        strategy="beforeInteractive"
      />
      <div className="min-h-[60vh]">
        <div id="idxStart" />
      </div>
    </>
  );
}
