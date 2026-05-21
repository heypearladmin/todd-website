import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findBlogArticle, getAllBlogSlugs } from "@/lib/home-content";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/seo/schemas";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = findBlogArticle(slug);
  if (!article) return {};
  const url = `${site.websiteUrl}/blog/${slug}`;
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.dek,
      url,
      type: "article",
      authors: [site.agentName],
      images: [{ url: article.imageSrc, alt: article.imageAlt }],
    },
  };
}

const PLACEHOLDER_BODY = [
  {
    eyebrow: "Quick read",
    title: "What this guide covers",
    body: "A short, honest take. The parts locals talk about and the parts visitors miss. We update this as the city changes.",
  },
  {
    eyebrow: "The shortlist",
    title: "Where to start",
    body: "Three places worth your first trip, with the times of day that show each one at its best. Walking distance to coffee in every case.",
  },
  {
    eyebrow: "Worth knowing",
    title: "Field notes",
    body: "The seasonality, the parking math, the timing. Small details that turn a good outing into a memorable one.",
  },
];

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = findBlogArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        schema={
          blogPostingSchema({
            title: article.title,
            description: article.dek,
            imageUrl: article.imageSrc,
            imageAlt: article.imageAlt,
            slug: article.slug,
            category: article.category,
          }) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Journal", href: "/blog" },
            { name: article.title, href: `/blog/${article.slug}` },
          ]) as Record<string, unknown>
        }
      />
    <main id="main" className="bg-paper">
      {/* hero */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 -z-10">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/3 bg-gradient-to-b from-ink/55 to-transparent"
        />

        <div className="section-wrap relative py-24 pt-32 md:py-32 md:pt-40 lg:py-40 lg:pt-48">
          <div className="flex items-center gap-3">
            <Link
              href={site.blogPath}
              className="caption !text-paper/65 transition-colors duration-cinema ease-cinema hover:!text-paper"
            >
              Journal
            </Link>
            <span aria-hidden className="h-px w-6 bg-paper/40" />
            <span className="caption !text-paper/65">{article.category}</span>
          </div>
          <h1 className="display-xl mt-6 max-w-4xl !text-paper">{article.title}</h1>
          <p className="dek mt-8 max-w-2xl !text-paper/80">{article.dek}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.875rem] text-paper/65">
            <span>By {site.agentName}</span>
            <span aria-hidden className="text-paper/30">·</span>
            <span>{article.category}</span>
            <span aria-hidden className="text-paper/30">·</span>
            <span>Updated regularly</span>
          </div>
        </div>
      </section>

      {/* body */}
      <section className="section-wrap-narrow py-20 md:py-28 lg:py-32">
        <div className="prose-spaced space-y-14">
          <p className="text-[1.125rem] leading-[1.8] text-ink/80 md:text-[1.1875rem]">
            This is a working draft. The full guide is in production. In the meantime, the shape of what is coming, and an invitation to ask questions in the gaps.
          </p>

          {PLACEHOLDER_BODY.map((block) => (
            <section key={block.title} className="border-t border-ink/[0.08] pt-10">
              <p className="caption !text-ink/50">{block.eyebrow}</p>
              <h2 className="display-md mt-4 text-ink">{block.title}</h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75">{block.body}</p>
            </section>
          ))}

          <section className="border-t border-ink/[0.08] pt-10">
            <p className="caption !text-ink/50">Ask Todd</p>
            <h2 className="display-md mt-4 text-ink">Have a specific question?</h2>
            <p className="mt-5 max-w-[40rem] text-[1.0625rem] leading-[1.78] text-ink/75">
              The honest answer is usually faster than a long article. Send a note and I will reply within a business day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href={site.contactPath} className="btn-primary">
                Send a note
                <span aria-hidden className="text-base">→</span>
              </Link>
              <Link href="/explore" className="editorial-link text-sm font-medium">
                More field notes
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
    </>
  );
}
