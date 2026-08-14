import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import {
  getAllNeighborhoodSlugs,
  getAllBlogSlugs,
  findJournalPost,
} from "@/lib/home-content";
import { getAllFaqSlugs } from "@/lib/blog-utils";

const BASE = site.websiteUrl;

// Fixed build date for pages without a real "last changed" signal — avoids
// resetting lastModified to the deploy date on every build, which Google
// learns to ignore as a crawl-priority signal.
const STATIC_LAST_MODIFIED = new Date("2026-08-01");

function parseBlogDate(publishDate: string): Date {
  const d = new Date(publishDate);
  return isNaN(d.getTime()) ? STATIC_LAST_MODIFIED : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = STATIC_LAST_MODIFIED;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/neighborhoods`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/explore`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/policies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/new-braunfels-real-estate-agent`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/buying-a-home-in-new-braunfels`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/selling-a-home-in-new-braunfels`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/relocating-to-new-braunfels`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/new-braunfels-home-valuation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const neighborhoodPages: MetadataRoute.Sitemap = getAllNeighborhoodSlugs().map(
    (slug) => ({
      url: `${BASE}/neighborhoods/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const blogPages: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => {
    const post = findJournalPost(slug);
    return {
      url: `${BASE}/blog/${slug}`,
      lastModified: post ? parseBlogDate(post.publishDate) : now,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  const faqPages: MetadataRoute.Sitemap = getAllFaqSlugs().map((slug) => ({
    url: `${BASE}/faq/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...neighborhoodPages, ...blogPages, ...faqPages];
}
