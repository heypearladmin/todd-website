import Link from "next/link";
import { site } from "@/lib/site";

export function ArticleCTA() {
  return (
    <div className="rounded-2xl bg-sand px-7 py-8 mt-2">
      <p className="caption !text-ink/50 mb-3">Ask Todd</p>
      <p className="display-sm text-ink mb-2">Have a specific question?</p>
      <p className="text-[1.0rem] leading-[1.78] text-ink/70 max-w-[38rem] mb-6">
        The honest answer is usually faster than a long article. Send a note and I will reply within a business day.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <Link href={site.contactPath} className="btn-primary">
          Send a note
          <span aria-hidden className="text-base">→</span>
        </Link>
        <Link href={site.blogPath} className="editorial-link text-sm font-medium">
          More field notes
        </Link>
      </div>
    </div>
  );
}
