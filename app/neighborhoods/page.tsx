import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { neighborhoods } from "@/lib/home-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Neighborhoods",
  description:
    "Featured New Braunfels neighborhoods. Gruene, Downtown New Braunfels, Canyon Lake, Vintage Oaks, and Veramendi.",
  alternates: {
    canonical: `${site.websiteUrl}/neighborhoods`,
  },
  openGraph: {
    title: "Neighborhoods · Todd Spencer · New Braunfels",
    description:
      "Featured New Braunfels neighborhoods. Gruene, Downtown New Braunfels, Canyon Lake, Vintage Oaks, and Veramendi.",
    url: `${site.websiteUrl}/neighborhoods`,
    type: "website",
    images: [{ url: "https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg", width: 1200, height: 630, alt: "Todd Spencer — New Braunfels Real Estate Agent" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Braunfels Neighborhoods Guide",
    description: "Explore every New Braunfels neighborhood — Gruene, Veramendi, Vintage Oaks, River Chase, and more.",
    images: ["https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg"],
  },
};

export default function NeighborhoodsIndexPage() {
  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Neighborhoods", href: "/neighborhoods" },
          ]) as Record<string, unknown>
        }
      />
    <main id="main" className="bg-paper">
      <section className="section-wrap py-20 md:py-28 lg:py-32">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Neighborhoods</p>
        </div>
        <h1 className="display-lg mt-6 max-w-3xl text-ink">
          Read the corridor before you tour it.
        </h1>
        <p className="dek mt-8">
          Quiet details. School paths, tube put ins, porch hours, and the slow streets that locals love.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-y-20">
          {neighborhoods.map((n) => (
            <Link key={n.slug} href={n.href} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover">
                <Image
                  src={n.imageSrc}
                  alt={n.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-cinema ease-cinema group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/[0.08] to-transparent"
                />
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="display-sm text-ink">{n.title}</h2>
                  <span className="caption !text-ink/45">{n.vibe}</span>
                </div>
                <p className="text-[0.9375rem] leading-[1.7] text-ink/65">{n.dek}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-cinema ease-cinema group-hover:text-copper">
                  Read the guide
                  <span aria-hidden className="block h-px w-8 bg-primary transition-all duration-cinema ease-cinema group-hover:w-12 group-hover:bg-copper" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
