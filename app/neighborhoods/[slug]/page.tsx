import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findNeighborhood,
  getAllNeighborhoodSlugs,
  getRelatedNeighborhoods,
} from "@/lib/home-content";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllNeighborhoodSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = findNeighborhood(slug);
  if (!n) return {};
  const url = `${site.websiteUrl}/neighborhoods/${slug}`;
  return {
    title: `${n.title} · Neighborhood guide`,
    description: n.details?.shortAnswer ?? n.dek,
    alternates: { canonical: url },
    openGraph: {
      title: `${n.title} · ${site.brand}`,
      description: n.details?.shortAnswer ?? n.dek,
      url,
      type: "article",
      images: [{ url: n.imageSrc, alt: n.imageAlt }],
    },
  };
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const n = findNeighborhood(slug);
  if (!n) notFound();
  const related = getRelatedNeighborhoods(n.slug, 2);
  const d = n.details;

  return (
    <>
      <JsonLd
        schema={
          articleSchema({
            title: `${n.title} · Neighborhood Guide · New Braunfels`,
            description: n.details?.shortAnswer ?? n.dek,
            imageUrl: n.imageSrc,
            imageAlt: n.imageAlt,
            urlPath: `/neighborhoods/${n.slug}`,
          }) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Neighborhoods", href: "/neighborhoods" },
            { name: n.title, href: `/neighborhoods/${n.slug}` },
          ]) as Record<string, unknown>
        }
      />
      {d?.faqs && d.faqs.length > 0 && (
        <JsonLd
          schema={faqSchema(d.faqs) as Record<string, unknown>}
        />
      )}
    <main id="main" className="bg-paper">
      {/* hero */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 -z-10">
          <Image
            src={n.imageSrc}
            alt={n.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/3 bg-gradient-to-b from-ink/55 to-transparent"
        />

        <div className="section-wrap relative py-24 pt-32 md:py-32 md:pt-40 lg:py-40 lg:pt-48">
          <div className="flex items-center gap-3">
            <Link
              href={site.neighborhoodsPath}
              className="caption !text-paper/65 transition-colors duration-cinema ease-cinema hover:!text-paper"
            >
              Neighborhoods
            </Link>
            <span aria-hidden className="h-px w-6 bg-paper/40" />
            <span className="caption !text-paper/65">New Braunfels</span>
          </div>
          <h1 className="display-xl mt-6 max-w-4xl !text-paper">{n.title}</h1>
          <p className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] px-4 py-1.5 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-paper/85">
              {n.vibe}
            </span>
          </p>
          <p className="dek mt-8 max-w-2xl !text-paper/80">{n.dek}</p>
        </div>
      </section>

      {d ? (
        <>
          {/* short answer */}
          <section className="section-wrap py-14 md:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">The short answer</p>
              </div>
              <p className="mt-6 text-[1.125rem] leading-[1.8] text-ink/80 md:text-[1.1875rem]">
                {d.shortAnswer}
              </p>
            </div>
          </section>

          {/* overview */}
          <section className="section-wrap border-t border-ink/[0.07] py-14 md:py-20">
            <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="tick" aria-hidden />
                  <p className="eyebrow">Overview</p>
                </div>
                <h2 className="display-md mt-5 text-ink">Living in {n.title}.</h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                {d.overview.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75 first:mt-0"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* best for */}
          <section className="section-wrap border-t border-ink/[0.07] py-14 md:py-20">
            <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="tick" aria-hidden />
                  <p className="eyebrow">Best for</p>
                </div>
                <h2 className="display-md mt-5 text-ink">Who thrives here.</h2>
              </div>
              <ul className="lg:col-span-7 lg:col-start-6 space-y-4 mt-0">
                {d.bestFor.map((item) => (
                  <li key={item} className="flex gap-3 text-[1.0625rem] leading-[1.75] text-ink/75">
                    <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* housing */}
          <section className="section-wrap border-t border-ink/[0.07] py-14 md:py-20">
            <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="tick" aria-hidden />
                  <p className="eyebrow">Housing</p>
                </div>
                <h2 className="display-md mt-5 text-ink">What the market looks like.</h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                {d.housing.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75 first:mt-0"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* lifestyle */}
          <section className="section-wrap border-t border-ink/[0.07] py-14 md:py-20">
            <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="tick" aria-hidden />
                  <p className="eyebrow">Lifestyle</p>
                </div>
                <h2 className="display-md mt-5 text-ink">Day to day rhythm.</h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                {d.lifestyle.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75 first:mt-0"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* commute + schools side by side */}
          <section className="section-wrap border-t border-ink/[0.07] py-14 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="tick" aria-hidden />
                  <p className="eyebrow">Commute</p>
                </div>
                <h2 className="display-sm mt-5 text-ink">Getting to work.</h2>
                <p className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75">{d.commute}</p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="tick" aria-hidden />
                  <p className="eyebrow">Schools</p>
                </div>
                <h2 className="display-sm mt-5 text-ink">Education options.</h2>
                <p className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75">{d.schools}</p>
              </div>
            </div>
          </section>

          {/* pros and cons */}
          <section className="section-wrap border-t border-ink/[0.07] py-14 md:py-20">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Trade-offs</p>
            </div>
            <h2 className="display-md mt-5 text-ink">Pros and cons.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <p className="caption !text-ink/50 mb-5">What works well</p>
                <ul className="space-y-4">
                  {d.prosAndCons.pros.map((pro) => (
                    <li key={pro} className="flex gap-3 text-[1.0rem] leading-[1.72] text-ink/75">
                      <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="caption !text-ink/50 mb-5">What to know going in</p>
                <ul className="space-y-4">
                  {d.prosAndCons.cons.map((con) => (
                    <li key={con} className="flex gap-3 text-[1.0rem] leading-[1.72] text-ink/75">
                      <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink/25" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* faqs */}
          {d.faqs.length > 0 && (
            <section className="section-wrap border-t border-ink/[0.07] py-14 md:py-20">
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">Common questions</p>
              </div>
              <h2 className="display-md mt-5 text-ink">What buyers ask about {n.title}.</h2>
              <div className="mt-10 space-y-0 divide-y divide-ink/[0.07]">
                {d.faqs.map((faq) => (
                  <details key={faq.question} className="group py-6">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                      <h3 className="display-sm text-ink">{faq.question}</h3>
                      <span
                        aria-hidden
                        className="mt-1 flex-shrink-0 text-ink/40 transition-transform duration-300 group-open:rotate-45"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-[1.0rem] leading-[1.78] text-ink/70 max-w-3xl">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* market notes */}
          <section className="section-wrap border-t border-ink/[0.07] py-14 md:py-20">
            <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="tick" aria-hidden />
                  <p className="eyebrow">Market notes</p>
                </div>
                <h2 className="display-md mt-5 text-ink">How homes move here.</h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-[1.0625rem] leading-[1.78] text-ink/75">{d.marketNotes}</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* fallback: original placeholder blocks */
        <section className="section-wrap py-20 md:py-28 lg:py-32">
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">What to know</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">Living in {n.title}.</h2>
            </div>
            <p className="dek lg:col-span-5">
              A field guide in progress. The honest pace of the neighborhood, the small details that take a while to learn, and the parts that surprise people in a good way.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
            {[
              {
                eyebrow: "School and walkability",
                title: "Day to day rhythm",
                body: "Schools, sidewalks, walk to coffee, and the small frictions that matter once you live somewhere. A working list, updated as the neighborhood changes.",
              },
              {
                eyebrow: "Outdoors",
                title: "River, trails, and parks",
                body: "Closest put ins, shaded walks, and the parks locals actually use. Where to be on a Saturday morning and where to go when you need quiet on a Tuesday.",
              },
              {
                eyebrow: "Market",
                title: "How homes move here",
                body: "Inventory trends, common floor plans, and the price bands that move quickly. Plain English, current as of the season.",
              },
            ].map((b) => (
              <article
                key={b.title}
                className="rounded-[24px] border border-ink/[0.08] bg-paper p-7 shadow-surface md:p-8"
              >
                <p className="caption !text-ink/50">{b.eyebrow}</p>
                <h3 className="display-sm mt-4 text-ink">{b.title}</h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.72] text-ink/65">{b.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* tour cta */}
      <section className="relative isolate overflow-hidden bg-paper-deep py-section-y md:py-section-y-md">
        <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-60" />
        <div className="section-wrap relative">
          <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">A real tour</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">Tour {n.title} with Todd.</h2>
              <p className="dek mt-6 max-w-[42rem]">
                No script. No pressure. We walk the streets, talk through the trade offs, and you decide what fits. Most first tours are an hour and a coffee.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 lg:col-span-4 lg:justify-end">
              <Link href={site.contactPath} className="btn-primary">
                Book a tour
                <span aria-hidden className="text-base">→</span>
              </Link>
              <a
                href={site.phoneHref}
                className="editorial-link text-sm font-medium tracking-wide"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* related */}
      {related.length > 0 ? (
        <section className="section-wrap py-20 md:py-28 lg:py-32">
          <div className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">Read next</p>
          </div>
          <h2 className="display-md mt-5 text-ink">Other neighborhoods worth a look.</h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {related.map((r) => (
              <Link key={r.slug} href={r.href} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover">
                  <Image
                    src={r.imageSrc}
                    alt={r.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-cinema ease-cinema group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/[0.08] to-transparent"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="display-sm text-ink">{r.title}</h3>
                  <span className="caption !text-ink/45">{r.vibe}</span>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-[1.7] text-ink/65">{r.dek}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
    </>
  );
}
