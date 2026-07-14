import Link from "next/link";
import type { JournalFaq } from "@/lib/home-content";
import { slugifyHeading } from "@/lib/blog-utils";

type Props = { faqs: JournalFaq[] };

export function FAQCards({ faqs }: Props) {
  if (!faqs.length) return null;
  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const slug = slugifyHeading(faq.question);
        return (
          <Link
            key={faq.question}
            href={`/faq/${slug}`}
            className="group block rounded-xl border border-ink/[0.09] bg-paper px-5 py-4 transition-shadow duration-300 hover:shadow-lift"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-[0.9375rem] font-semibold leading-snug text-ink group-hover:text-primary transition-colors duration-200">
                {faq.question}
              </p>
              <span
                aria-hidden
                className="mt-0.5 flex-shrink-0 text-ink/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <p className="mt-2 line-clamp-2 text-[0.875rem] leading-[1.65] text-ink/55">
              {faq.answer}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
