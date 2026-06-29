import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Message Received",
  description: "Your message has been received. Todd Spencer will be in touch within a business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main id="main" className="bg-paper">
      <section className="relative isolate overflow-hidden bg-paper-deep">
        <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-70" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[15%] -z-10 h-[32rem] w-[32rem] rounded-full bg-copper/[0.09] blur-[160px]"
        />
        <div className="section-wrap relative py-24 md:py-32 lg:py-40">
          <div className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">Message received</p>
          </div>
          <h1 className="display-lg mt-6 max-w-2xl text-ink">
            Thanks — I will be in touch.
          </h1>
          <p className="dek mt-6 max-w-xl">
            I read every message and reply within a business day. In the meantime,
            feel free to explore the neighborhood guides or call directly.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link href={site.neighborhoodsPath} className="btn-primary">
              Browse neighborhoods
            </Link>
            <a
              href={site.phoneHref}
              className="editorial-link text-sm font-medium"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
