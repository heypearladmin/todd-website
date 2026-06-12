import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { insightCards, journalPosts } from "@/lib/home-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes from New Braunfels. Moving guides, cost of living, lifestyle rituals, and real estate trends.",
  alternates: {
    canonical: `${site.websiteUrl}/blog`,
  },
  openGraph: {
    title: "Journal · Todd Spencer",
    description:
      "Field notes from New Braunfels. Moving guides, cost of living, lifestyle rituals, and real estate trends.",
    url: `${site.websiteUrl}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Journal", href: "/blog" },
          ]) as Record<string, unknown>
        }
      />
    <main id="main" className="bg-paper">
      <section className="section-wrap py-20 md:py-28 lg:py-32">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Journal</p>
        </div>
        <h1 className="display-lg mt-6 max-w-3xl text-ink">
          Field notes from the corridor.
        </h1>
        <p className="dek mt-8">
          Honest, plain English guides for the questions buyers, sellers, and the curious actually ask. New entries posted regularly.
        </p>

        {/* New journal articles */}
        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
          {journalPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-cinema ease-cinema group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/[0.08] to-transparent"
                  />
                  <div className="absolute left-6 top-6 flex items-center gap-2 text-paper/85">
                    <span className="caption !text-paper/70">{post.eyebrow}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="display-sm text-ink">{post.title}</h2>
                  <p className="mt-3 text-[0.9375rem] leading-[1.7] text-ink/65">{post.dek}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-cinema ease-cinema group-hover:text-copper">
                    Continue reading
                    <span aria-hidden className="block h-px w-8 bg-primary transition-all duration-cinema ease-cinema group-hover:w-12 group-hover:bg-copper" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Evergreen guides */}
        <div className="mt-20 border-t border-ink/[0.08] pt-16">
          <p className="eyebrow text-ink/50">Evergreen guides</p>
          <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
            {insightCards.map((card) => (
              <article key={card.kind} className="group">
                <Link href={card.href} className="block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-cinema ease-cinema group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/[0.08] to-transparent"
                    />
                    <div className="absolute left-6 top-6 flex items-center gap-2 text-paper/85">
                      <span className="caption !text-paper/70">{card.eyebrow}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h2 className="display-sm text-ink">{card.title}</h2>
                    <p className="mt-3 text-[0.9375rem] leading-[1.7] text-ink/65">{card.dek}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-cinema ease-cinema group-hover:text-copper">
                      Continue reading
                      <span aria-hidden className="block h-px w-8 bg-primary transition-all duration-cinema ease-cinema group-hover:w-12 group-hover:bg-copper" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
