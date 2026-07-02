import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findBlogArticle, findJournalPost, getAllBlogSlugs } from "@/lib/home-content";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";

function parsePublishDate(date?: string): string {
  if (!date) return "2026-01-07";
  const d = new Date(date);
  return isNaN(d.getTime()) ? "2026-01-07" : d.toISOString().split("T")[0];
}

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

  const journalPost = findJournalPost(slug);

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
            datePublished: parsePublishDate(journalPost?.publishDate),
            dateModified: parsePublishDate(journalPost?.publishDate),
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
      {journalPost?.faqs && journalPost.faqs.length > 0 && (
        <JsonLd
          schema={faqSchema(journalPost.faqs) as Record<string, unknown>}
        />
      )}
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
              className="caption !text-paper transition-colors duration-cinema ease-cinema hover:!text-paper/80"
            >
              Journal
            </Link>
            <span aria-hidden className="h-px w-6 bg-paper/60" />
            <span className="caption !text-paper">{article.category}</span>
          </div>
          <h1 className="display-xl mt-6 max-w-4xl !text-paper">{article.title}</h1>
          <p className="dek mt-8 max-w-2xl !text-paper/80">{article.dek}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.875rem] text-paper/65">
            <span>By {site.agentName}</span>
            <span aria-hidden className="text-paper/30">·</span>
            <span>{journalPost?.publishDate ?? "Updated regularly"}</span>
          </div>
        </div>
      </section>

      {/* body */}
      <section className="section-wrap-narrow py-20 md:py-28 lg:py-32">
        <div className="prose-spaced space-y-14">
          {journalPost ? (
            <>
              <p className="text-[1.125rem] leading-[1.8] text-ink/80 md:text-[1.1875rem]">
                {journalPost.intro}
              </p>

              {journalPost.sections.map((section) => (
                <section key={section.heading} className="border-t border-ink/[0.08] pt-10">
                  {section.eyebrow && (
                    <p className="caption !text-ink/50">{section.eyebrow}</p>
                  )}
                  <h2 className="display-md mt-4 text-ink">{section.heading}</h2>
                  {section.body && (
                    <p className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75">
                      {section.body}
                    </p>
                  )}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="mt-5 space-y-2 text-[1.0625rem] leading-[1.78] text-ink/75">
                      {section.bulletPoints.map((pt) => (
                        <li key={pt} className="flex gap-3">
                          <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="mt-10 space-y-8">
                      {section.subsections.map((sub) => (
                        <div key={sub.heading}>
                          <h3 className="display-sm text-ink">{sub.heading}</h3>
                          {sub.body && (
                            <p className="mt-3 text-[1.0625rem] leading-[1.78] text-ink/75">
                              {sub.body}
                            </p>
                          )}
                          {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                            <ul className="mt-3 space-y-2 text-[1.0625rem] leading-[1.78] text-ink/75">
                              {sub.bulletPoints.map((pt) => (
                                <li key={pt} className="flex gap-3">
                                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </>
          ) : (
            <>
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
            </>
          )}

          {journalPost?.faqs && journalPost.faqs.length > 0 && (
            <section className="border-t border-ink/[0.08] pt-10">
              <p className="caption !text-ink/50">Common questions</p>
              <h2 className="display-md mt-4 text-ink">Frequently asked questions.</h2>
              <div className="mt-8 space-y-0 divide-y divide-ink/[0.07]">
                {journalPost.faqs.map((faq) => (
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
              <Link href={site.blogPath} className="editorial-link text-sm font-medium">
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
