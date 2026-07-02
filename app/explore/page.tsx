import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { exploreTiles } from "@/lib/home-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Explore New Braunfels",
  description:
    "Restaurants, river life, live music, breweries, hidden gems, weekend rhythm, neighborhood guides, and family days. A premium local read.",
  alternates: {
    canonical: `${site.websiteUrl}/explore`,
  },
  openGraph: {
    title: "Explore New Braunfels · Todd Spencer",
    description:
      "Restaurants, river life, live music, breweries, hidden gems, weekend rhythm, neighborhood guides, and family days.",
    url: `${site.websiteUrl}/explore`,
    type: "website",
    images: [{ url: "https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg", width: 1200, height: 630, alt: "Todd Spencer — New Braunfels Real Estate Agent" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore New Braunfels, TX",
    description: "Discover the best of New Braunfels — rivers, trails, dining, music, and local culture.",
    images: ["https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg"],
  },
};

export default function ExploreIndexPage() {
  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Explore New Braunfels", href: "/explore" },
          ]) as Record<string, unknown>
        }
      />
    <main id="main" className="bg-paper">
      {/* page intro */}
      <section className="section-wrap py-20 md:py-28 lg:py-32">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Explore New Braunfels</p>
        </div>
        <h1 className="display-lg mt-6 max-w-3xl text-ink">
          A city worth knowing, one vignette at a time.
        </h1>
        <p className="dek mt-8">
          Eight ways into New Braunfels. Restaurants worth the drive, river days worth the wait, dance halls worth the dust, and the small Saturday rituals that turn a ZIP code into a neighborhood.
        </p>
      </section>

      {/* magazine list */}
      <section className="section-wrap pb-24 md:pb-32 lg:pb-40">
        <div className="space-y-20 md:space-y-28 lg:space-y-32">
          {exploreTiles.map((tile, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={tile.category}
                className={`group grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-center ${
                  reverse ? "" : ""
                }`}
              >
                <Link
                  href={tile.href}
                  className={`block lg:col-span-7 ${reverse ? "lg:order-2 lg:col-start-6" : ""}`}
                >
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover">
                    <Image
                      src={tile.imageSrc}
                      alt={tile.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.045]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent"
                    />
                    <div className="absolute left-6 top-6 flex items-center gap-2 sm:left-8 sm:top-8">
                      <span className="caption rounded-full bg-ink/60 px-3 py-1 !text-paper backdrop-blur-sm">
                        № {String(i + 1).padStart(2, "0")} / 08
                      </span>
                      <span aria-hidden className="h-px w-6 bg-paper/40" />
                    </div>
                  </div>
                </Link>

                <div className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:col-start-1" : "lg:pl-2"}`}>
                  <Link href={tile.href} className="block">
                    <p className="caption !text-ink/45">{tile.category.replace(/-/g, " ")}</p>
                    <h2 className="display-md mt-4 text-ink transition-colors duration-cinema ease-cinema group-hover:text-primary">
                      {tile.title}
                    </h2>
                    <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.78] text-ink/70">
                      {tile.dek}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-cinema ease-cinema group-hover:text-copper">
                      Read field note
                      <span
                        aria-hidden
                        className="block h-px w-8 bg-primary transition-all duration-cinema ease-cinema group-hover:w-14 group-hover:bg-copper"
                      />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
    </>
  );
}
