import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { EmailLink } from "@/components/EmailLink";
import { PhoneLink } from "@/components/PhoneLink";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.brand}. Buying, selling, or curious about New Braunfels real estate.`,
  alternates: {
    canonical: `${site.websiteUrl}/contact`,
  },
  openGraph: {
    title: `Contact ${site.brand}`,
    description: `Get in touch with ${site.brand}. Buying, selling, or curious about New Braunfels real estate.`,
    url: `${site.websiteUrl}/contact`,
    type: "website",
    images: [{ url: "https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg", width: 1200, height: 630, alt: "Todd Spencer — New Braunfels Real Estate Agent" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Todd Spencer — New Braunfels Agent",
    description: "Reach Todd Spencer for buying, selling, or relocating in New Braunfels and Comal County.",
    images: ["https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]) as Record<string, unknown>
        }
      />
      <main id="main" className="bg-paper">
        {/* ── intro ── */}
        <section className="relative isolate overflow-hidden bg-paper-deep">
          <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-70" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-[15%] -z-10 h-[32rem] w-[32rem] rounded-full bg-copper/[0.09] blur-[160px]"
          />
          <div className="section-wrap relative py-24 md:py-32 lg:py-36">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Contact</p>
            </div>
            <h1 className="display-lg mt-6 max-w-3xl text-ink">
              Tell me the chapter you are in.
            </h1>
            <p className="dek mt-6">
              Buying, selling, relocating, or just curious about the market. I read every
              message and reply within a business day.
            </p>
          </div>
        </section>

        {/* ── form + sidebar ── */}
        <section className="section-wrap py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">

            {/* Form ─ left column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Sidebar ─ right column */}
            <aside className="lg:col-span-4 lg:col-start-9">
              {/* Portrait */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06]">
                <Image
                  src={site.agentPortraitSrc}
                  alt={site.agentPortraitAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-[center_20%]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
                />
              </div>

              {/* Contact details */}
              <div className="mt-8 space-y-5">
                <div>
                  <p className="eyebrow">Call or text</p>
                  <PhoneLink className="mt-2 block text-[1.125rem] font-medium text-ink transition-colors duration-300 ease-editorial hover:text-primary" />
                </div>
                <div className="hairline" />
                <div>
                  <p className="eyebrow">Email</p>
                  <EmailLink className="mt-2 block text-[1rem] text-ink/70 transition-colors duration-300 ease-editorial hover:text-primary" />
                </div>
                <div className="hairline" />
                <div>
                  <p className="eyebrow">Brokerage</p>
                  <p className="mt-2 text-[0.9375rem] text-ink/65">
                    {site.brokerage.name}
                  </p>
                  <p className="mt-0.5 text-[0.875rem] text-ink/40">
                    {site.brokerage.licenseLine}
                  </p>
                </div>
              </div>

              {/* Soft CTA */}
              <div className="mt-8 rounded-[18px] bg-paper-deep p-6 ring-1 ring-ink/[0.07]">
                <p className="eyebrow">Not ready to reach out?</p>
                <p className="mt-3 text-[0.9375rem] leading-[1.72] text-ink/65">
                  Start with the neighborhood guides. They cover what most agents
                  won&apos;t tell you until the second showing.
                </p>
                <Link
                  href={site.neighborhoodsPath}
                  className="mt-5 inline-flex items-center gap-2.5 text-sm font-medium text-primary transition-colors duration-300 ease-editorial hover:text-copper"
                >
                  Browse neighborhoods
                  <span aria-hidden className="block h-px w-8 bg-current" />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
