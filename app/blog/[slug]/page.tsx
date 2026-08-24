import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findBlogArticle, findJournalPost, getAllBlogSlugs } from "@/lib/home-content";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";
import {
  readingTime,
  tocItemsFromPost,
  getRelatedPosts,
  slugifyHeading,
} from "@/lib/blog-utils";
import { QuickAnswer } from "@/components/blog/QuickAnswer";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { FAQCards } from "@/components/blog/FAQCards";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleCTA } from "@/components/blog/ArticleCTA";
import { RichText } from "@/components/blog/RichText";
import { StickyCta } from "@/components/StickyCta";

const CATEGORY_STICKY_VARIANT: Record<string, "buyer" | "seller" | "relocation" | "neighborhood"> = {
  "Buyer Guide": "buyer",
  "Seller Guide": "seller",
  "Relocation Guide": "relocation",
  Relocation: "relocation",
  "Neighborhood Guide": "neighborhood",
  Investment: "seller",
};

function parsePublishDate(date?: string): string {
  if (!date) return "2026-01-07";
  const d = new Date(date);
  return isNaN(d.getTime()) ? "2026-01-07" : d.toISOString().split("T")[0];
}

type Params = { slug: string };

const BLOG_NEIGHBORHOOD_SLUG: Record<string, string> = {
  "gruene-historic-district-guide": "gruene",
  "downtown-new-braunfels-neighborhood-guide": "downtown-new-braunfels",
  "canyon-lake-real-estate-guide": "canyon-lake",
  "vintage-oaks-neighborhood-guide": "vintage-oaks",
  "veramendi-neighborhood-guide": "veramendi",
  "river-chase-neighborhood-guide": "riverchase",
  "what-makes-river-chase-unique": "riverchase",
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trimEnd() + "…";
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
  const ogTitle = truncate(article.title, 60);
  const metaDesc = truncate(article.dek, 160);
  const twDesc = truncate(article.dek, 125);
  return {
    title: article.title,
    description: metaDesc,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: metaDesc,
      url,
      type: "article",
      authors: [site.agentName],
      images: [{ url: article.imageSrc, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: twDesc,
      images: [article.imageSrc],
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
  const mins = journalPost ? readingTime(journalPost) : null;
  const tocItems = journalPost ? tocItemsFromPost(journalPost) : [];
  const related = journalPost ? getRelatedPosts(journalPost) : [];
  const neighborhoodSlug = BLOG_NEIGHBORHOOD_SLUG[slug];

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
            { name: "Blog", href: "/blog" },
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
        {/* ── Hero ── */}
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
              {mins && (
                <>
                  <span aria-hidden className="text-paper/30">·</span>
                  <span>{mins} min read</span>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="section-wrap py-14 md:py-20 lg:py-24">
          {journalPost && (
            <div className="mb-8">
              <QuickAnswer answer={journalPost.dek} />
            </div>
          )}

          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14 lg:items-start">
            {/* Sidebar TOC (order-first on mobile → above article; order-last on desktop → right col) */}
            {tocItems.length > 0 && (
              <aside
                aria-label="Table of contents"
                className="mb-8 lg:mb-0 order-first lg:order-last lg:sticky lg:top-24 lg:self-start"
              >
                <TableOfContents items={tocItems} />
              </aside>
            )}

            {/* Article */}
            <article className="space-y-14 min-w-0">
              {journalPost ? (
                <>
                  <p className="text-[1.125rem] leading-[1.8] text-ink/80 md:text-[1.1875rem]">
                    <RichText text={journalPost.intro} />
                  </p>

                  {journalPost.sections.map((section) => {
                    const headingId = slugifyHeading(section.heading);
                    return (
                      <section
                        key={section.heading}
                        className="border-t border-ink/[0.08] pt-10"
                      >
                        {section.eyebrow && (
                          <p className="caption !text-ink/50">{section.eyebrow}</p>
                        )}
                        <h2
                          id={headingId}
                          className="display-md mt-4 text-ink scroll-mt-28"
                        >
                          {section.heading}
                        </h2>
                        {section.body && (
                          <p className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75">
                            <RichText text={section.body} />
                          </p>
                        )}
                        {section.bulletPoints && section.bulletPoints.length > 0 && (
                          <ul className="mt-5 space-y-2 text-[1.0625rem] leading-[1.78] text-ink/75">
                            {section.bulletPoints.map((pt) => (
                              <li key={pt} className="flex gap-3">
                                <span
                                  aria-hidden
                                  className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
                                />
                                <span><RichText text={pt} /></span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.subsections && section.subsections.length > 0 && (
                          <div className="mt-10 space-y-8">
                            {section.subsections.map((sub) => {
                              const subId = slugifyHeading(sub.heading);
                              return (
                                <div key={sub.heading}>
                                  <h3
                                    id={subId}
                                    className="display-sm text-ink scroll-mt-28"
                                  >
                                    {sub.heading}
                                  </h3>
                                  {sub.body && (
                                    <p className="mt-3 text-[1.0625rem] leading-[1.78] text-ink/75">
                                      <RichText text={sub.body} />
                                    </p>
                                  )}
                                  {sub.bulletPoints &&
                                    sub.bulletPoints.length > 0 && (
                                      <ul className="mt-3 space-y-2 text-[1.0625rem] leading-[1.78] text-ink/75">
                                        {sub.bulletPoints.map((pt) => (
                                          <li key={pt} className="flex gap-3">
                                            <span
                                              aria-hidden
                                              className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
                                            />
                                            <span><RichText text={pt} /></span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </section>
                    );
                  })}

                  {/* Neighborhood cross-link */}
                  {neighborhoodSlug && (
                    <section className="border-t border-ink/[0.08] pt-10">
                      <Link
                        href={`/neighborhoods/${neighborhoodSlug}`}
                        className="inline-flex items-center gap-2.5 text-sm font-medium text-primary transition-colors duration-300 ease-editorial hover:text-copper"
                      >
                        View the full neighborhood profile
                        <span aria-hidden className="block h-px w-8 bg-current" />
                      </Link>
                    </section>
                  )}

                  {/* FAQ Cards */}
                  {journalPost.faqs && journalPost.faqs.length > 0 && (
                    <section className="border-t border-ink/[0.08] pt-10">
                      <p className="caption !text-ink/50 mb-2">Common questions</p>
                      <h2
                        id="frequently-asked-questions"
                        className="display-md text-ink mb-8 scroll-mt-28"
                      >
                        Frequently asked questions.
                      </h2>
                      <FAQCards faqs={journalPost.faqs} />
                    </section>
                  )}

                  {/* Related Articles */}
                  {related.length > 0 && (
                    <section className="border-t border-ink/[0.08] pt-10">
                      <RelatedArticles posts={related} />
                    </section>
                  )}

                  {/* PDF download */}
                  {journalPost.pdfSrc && (
                    <section className="border-t border-ink/[0.08] pt-10">
                      <div className="flex flex-col items-start gap-5 rounded-[24px] border border-ink/[0.08] bg-ink/[0.02] p-8 shadow-surface sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="caption !text-ink/50">Take it with you</p>
                          <p className="mt-2 text-[1.0625rem] font-medium text-ink">
                            Download this guide as a PDF.
                          </p>
                          <p className="mt-1 text-[0.9375rem] leading-[1.6] text-ink/65">
                            Same guide, saved for later — no form, no email required.
                          </p>
                        </div>
                        <a
                          href={journalPost.pdfSrc}
                          download
                          className="btn-primary flex-shrink-0"
                        >
                          Download PDF
                          <span aria-hidden className="text-base">↓</span>
                        </a>
                      </div>
                    </section>
                  )}

                  {/* CTA */}
                  <ArticleCTA category={article.category} />
                </>
              ) : (
                <>
                  <p className="text-[1.125rem] leading-[1.8] text-ink/80 md:text-[1.1875rem]">
                    This is a working draft. The full guide is in production. In the
                    meantime, the shape of what is coming, and an invitation to ask
                    questions in the gaps.
                  </p>

                  {PLACEHOLDER_BODY.map((block) => (
                    <section
                      key={block.title}
                      className="border-t border-ink/[0.08] pt-10"
                    >
                      <p className="caption !text-ink/50">{block.eyebrow}</p>
                      <h2 className="display-md mt-4 text-ink">{block.title}</h2>
                      <p className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75">
                        {block.body}
                      </p>
                    </section>
                  ))}

                  <ArticleCTA />
                </>
              )}
            </article>
          </div>
        </section>
      </main>
      <StickyCta variant={CATEGORY_STICKY_VARIANT[article.category] ?? "general"} />
    </>
  );
}
