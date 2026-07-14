import type { JournalPost, JournalFaq } from "./home-content";
import { journalPosts } from "./home-content";

export type TocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-{2,}/g, "-");
}

export function tocItemsFromPost(post: JournalPost): TocItem[] {
  const items: TocItem[] = [];
  for (const section of post.sections) {
    const id = slugifyHeading(section.heading);
    items.push({ id, label: section.heading, level: 2 });
    if (section.subsections) {
      for (const sub of section.subsections) {
        items.push({ id: slugifyHeading(sub.heading), label: sub.heading, level: 3 });
      }
    }
  }
  return items;
}

export function readingTime(post: JournalPost): number {
  const chunks: string[] = [post.intro];
  for (const s of post.sections) {
    if (s.body) chunks.push(s.body);
    if (s.bulletPoints) chunks.push(...s.bulletPoints);
    if (s.subsections) {
      for (const sub of s.subsections) {
        if (sub.body) chunks.push(sub.body);
        if (sub.bulletPoints) chunks.push(...sub.bulletPoints);
      }
    }
  }
  if (post.faqs) {
    for (const f of post.faqs) {
      chunks.push(f.question, f.answer);
    }
  }
  const words = chunks.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function getRelatedPosts(current: JournalPost, max = 3): JournalPost[] {
  return journalPosts
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, max);
}

export function getFaqBySlug(
  faqSlug: string
): { faq: JournalFaq; post: JournalPost } | null {
  for (const post of journalPosts) {
    if (!post.faqs) continue;
    for (const faq of post.faqs) {
      if (slugifyHeading(faq.question) === faqSlug) {
        return { faq, post };
      }
    }
  }
  return null;
}

export function getAllFaqSlugs(): string[] {
  const seen = new Set<string>();
  const slugs: string[] = [];
  for (const post of journalPosts) {
    if (!post.faqs) continue;
    for (const faq of post.faqs) {
      const slug = slugifyHeading(faq.question);
      if (!seen.has(slug)) {
        seen.add(slug);
        slugs.push(slug);
      }
    }
  }
  return slugs;
}
