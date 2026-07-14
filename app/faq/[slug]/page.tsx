import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllFaqSlugs,
  getFaqBySlug,
  getRelatedFaqs,
  getRelatedPosts,
  slugifyHeading,
} from "@/lib/blog-utils";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";
import { QuickAnswer } from "@/components/blog/QuickAnswer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { KeyTakeaways } from "@/components/faq/KeyTakeaways";
import { FaqArticleBody } from "@/components/faq/FaqArticleBody";
import { ComparisonTable } from "@/components/faq/ComparisonTable";
import { FaqSources } from "@/components/faq/FaqSources";

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
      authors: [site.agentName],
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
  const relatedFaqs = getRelatedFaqs(slug, post, 4);
  const relatedPosts = getRelatedPosts(post, 3);
  const hasArticle =
    (faq.sections && faq.sections.length > 0) ||
    faq.tableData ||
    (faq.takeaways && faq.takeaways.length > 0);

  return (
    <>
      <JsonLd schema={faqSchema([faq]) as Record<string, unknown>} />
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
        {/* ── Hero ── */}
        <div className="border-b border-ink/[0.07] bg-paper">
          <div className="section-wrap-narrow py-14 md:py-18">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink/45"
            >
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
              <span aria-hidden className="text-ink/25">/</span>
              <Link
                href={site.blogPath}
                className="hover:text-ink transition-colors"
              >
                Journal
              </Link>
              <span aria-hidden className="text-ink/25">/</span>
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-ink transition-colors line-clamp-1 max-w-[16rem]"
              >
                {post.title}
              </Link>
              <span aria-hidden className="text-ink/25">/</span>
              <span className="text-ink/30 line-clamp-1 max-w-[14rem]">
                {faq.question}
              </span>
            </nav>

            {/* Label + H1 */}
            <p className="caption !text-primary mb-4">Frequently asked</p>
            <h1 className="display-lg text-ink max-w-3xl">{faq.question}</h1>

            {/* Meta row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.8125rem] text-ink/50">
              <span>By {site.agentName}</span>
              <span aria-hidden className="text-ink/25">·</span>
              <span>From: {post.title}</span>
              {(faq.lastUpdated ?? post.publishDate) && (
                <>
                  <span aria-hidden className="text-ink/25">·</span>
                  <span>
                    Last updated:{" "}
                    <time>{faq.lastUpdated ?? post.publishDate}</time>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <section className="section-wrap-narrow py-14 md:py-20">
          <div className="space-y-10">
            {/* 1. Quick Answer */}
            <QuickAnswer answer={faq.answer} />

            {/* 2. Key Takeaways */}
            {faq.takeaways && faq.takeaways.length > 0 && (
              <KeyTakeaways takeaways={faq.takeaways} />
            )}

            {/* 3. Expanded Article */}
            {faq.sections && faq.sections.length > 0 && (
              <div className="border-t border-ink/[0.08] pt-10">
                <FaqArticleBody sections={faq.sections} />
              </div>
            )}

            {/* 4. Comparison Table */}
            {faq.tableData && (
              <div className="border-t border-ink/[0.08] pt-10">
                <p className="caption !text-ink/50 mb-4">At a glance</p>
                <ComparisonTable tableData={faq.tableData} />
              </div>
            )}

            {/* 5. Related Questions */}
            {relatedFaqs.length > 0 && (
              <div className="border-t border-ink/[0.08] pt-10">
                <p className="caption !text-ink/50 mb-5">Related questions</p>
                <div className="space-y-3">
                  {relatedFaqs.map(({ faq: f, faqSlug: fSlug }) => (
                    <Link
                      key={fSlug}
                      href={`/faq/${fSlug}`}
                      className="group block rounded-xl border border-ink/[0.09] bg-paper px-5 py-4 transition-shadow duration-300 hover:shadow-lift"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[0.9375rem] font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-primary">
                          {f.question}
                        </p>
                        <span
                          aria-hidden
                          className="mt-0.5 flex-shrink-0 text-ink/30 transition-colors duration-200 group-hover:text-primary"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3 8h10M9 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-[0.875rem] leading-[1.65] text-ink/55">
                        {f.answer}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Sources */}
            {faq.sources && faq.sources.length > 0 && (
              <div className="border-t border-ink/[0.08] pt-10">
                <FaqSources sources={faq.sources} />
              </div>
            )}

            {/* 7. Back to article */}
            <div className="border-t border-ink/[0.08] pt-8">
              <Link
                href={`/blog/${post.slug}`}
                className="editorial-link text-sm font-medium"
              >
                ← Read the full guide: {post.title}
              </Link>
            </div>

            {/* 8. Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="border-t border-ink/[0.08] pt-10">
                <RelatedArticles posts={relatedPosts} />
              </div>
            )}

            {/* 9. CTA */}
            <div className="rounded-2xl bg-sand px-7 py-8">
              <p className="caption !text-ink/50 mb-2">Need help?</p>
              <p className="display-sm text-ink mb-2">
                Need help buying land in New Braunfels?
              </p>
              <p className="mb-6 text-[1.0rem] leading-[1.78] text-ink/70">
                Todd replies to most inquiries within a business day.
              </p>
              <Link href={site.contactPath} className="btn-primary">
                Book a consultation →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
