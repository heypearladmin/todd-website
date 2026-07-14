import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllFaqSlugs, getFaqBySlug, slugifyHeading } from "@/lib/blog-utils";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllFaqSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = getFaqBySlug(slug);
  if (!result) return {};
  const { faq } = result;
  const url = `${site.websiteUrl}/faq/${slug}`;
  const desc =
    faq.answer.length > 160 ? faq.answer.slice(0, 159) + "…" : faq.answer;
  return {
    title: faq.question,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: faq.question,
      description: desc,
      url,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: faq.question,
      description: desc,
    },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const result = getFaqBySlug(slug);
  if (!result) notFound();

  const { faq, post } = result;

  const relatedFaqs = (post.faqs ?? []).filter(
    (f) => slugifyHeading(f.question) !== slug
  );

  return (
    <>
      <JsonLd
        schema={
          faqSchema([faq]) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Journal", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
            { name: faq.question, href: `/faq/${slug}` },
          ]) as Record<string, unknown>
        }
      />
      <main id="main" className="bg-paper">
        <section className="section-wrap-narrow py-20 md:py-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-[0.875rem] text-ink/50">
            <Link href={site.blogPath} className="hover:text-ink transition-colors">Journal</Link>
            <span aria-hidden>/</span>
            <Link href={`/blog/${post.slug}`} className="hover:text-ink transition-colors line-clamp-1 max-w-[18rem]">
              {post.title}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink/30">FAQ</span>
          </nav>

          {/* Question */}
          <p className="caption !text-ink/50 mb-4">Frequently asked</p>
          <h1 className="display-lg text-ink max-w-3xl">{faq.question}</h1>

          {/* Answer */}
          <div className="mt-8 max-w-2xl">
            <p className="text-[1.125rem] leading-[1.8] text-ink/80">{faq.answer}</p>
          </div>

          {/* Back to full article */}
          <div className="mt-10 border-t border-ink/[0.08] pt-8">
            <Link
              href={`/blog/${post.slug}`}
              className="editorial-link text-sm font-medium"
            >
              ← Read the full article: {post.title}
            </Link>
          </div>

          {/* Related FAQs from same post */}
          {relatedFaqs.length > 0 && (
            <div className="mt-14">
              <p className="caption !text-ink/50 mb-5">More from this guide</p>
              <div className="space-y-3">
                {relatedFaqs.map((f) => {
                  const fSlug = slugifyHeading(f.question);
                  return (
                    <Link
                      key={f.question}
                      href={`/faq/${fSlug}`}
                      className="group block rounded-xl border border-ink/[0.09] bg-paper px-5 py-4 hover:shadow-lift transition-shadow duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[0.9375rem] font-semibold leading-snug text-ink group-hover:text-primary transition-colors duration-200">
                          {f.question}
                        </p>
                        <span aria-hidden className="mt-0.5 flex-shrink-0 text-ink/30 group-hover:text-primary transition-colors duration-200">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-[0.875rem] leading-[1.65] text-ink/55">
                        {f.answer}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-sand px-7 py-8">
            <p className="display-sm text-ink mb-2">Still have questions?</p>
            <p className="text-[1.0rem] leading-[1.78] text-ink/70 mb-5">
              Todd replies to most inquiries within a business day.
            </p>
            <Link href={site.contactPath} className="btn-primary">
              Send a note →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
