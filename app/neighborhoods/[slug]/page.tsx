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
  return {
    title: `${n.title} · Neighborhood guide`,
    description: n.dek,
    openGraph: {
      title: `${n.title} · ${site.brand}`,
      description: n.dek,
      type: "article",
      images: [{ url: n.imageSrc, alt: n.imageAlt }],
    },
  };
}

const KNOW_BLOCKS = [
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
];

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const n = findNeighborhood(slug);
  if (!n) notFound();
  const related = getRelatedNeighborhoods(n.slug, 2);

  return (
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

      {/* what to know */}
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
          {KNOW_BLOCKS.map((b) => (
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
  );
}
