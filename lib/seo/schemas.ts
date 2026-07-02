import { site } from "@/lib/site";

const BASE = site.websiteUrl;

// ─── Core entity schemas ────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: BASE,
    logo: {
      "@type": "ImageObject",
      url: `${BASE}${site.logoSrc}`,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: Object.values(site.social),
  } as const;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    name: site.legalName,
    url: BASE,
    telephone: site.phone,
    email: site.email,
    image: `${BASE}${site.ogImage}`,
    logo: {
      "@type": "ImageObject",
      url: `${BASE}${site.logoSrc}`,
    },
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Braunfels",
      addressRegion: "TX",
      postalCode: "78130",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.703,
      longitude: -98.1245,
    },
    areaServed: [
      { "@type": "City", name: "New Braunfels", sameAs: "https://en.wikipedia.org/wiki/New_Braunfels,_Texas" },
      { "@type": "City", name: "Gruene" },
      { "@type": "City", name: "Canyon Lake" },
      { "@type": "City", name: "Comal County" },
    ],
    sameAs: Object.values(site.social),
  } as const;
}

export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.agentName,
    url: BASE,
    telephone: site.phone,
    email: site.email,
    image: {
      "@type": "ImageObject",
      url: `${BASE}${site.agentPortraitSrc}`,
      description: site.agentPortraitAlt,
    },
    jobTitle: "Real Estate Agent",
    worksFor: {
      "@type": "Organization",
      name: site.brokerage.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Braunfels",
      addressRegion: "TX",
      addressCountry: "US",
    },
    knowsAbout: [
      "New Braunfels real estate",
      "Texas Hill Country neighborhoods",
      "Comal County homes",
      "relocation to New Braunfels",
      "first-time home buyers",
    ],
    sameAs: Object.values(site.social),
  } as const;
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand,
    url: BASE,
    description: site.description,
    publisher: {
      "@type": "Person",
      name: site.agentName,
      url: `${BASE}/about`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  } as const;
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.agentName,
    url: `${BASE}/about`,
    image: {
      "@type": "ImageObject",
      url: `${BASE}${site.agentPortraitSrc}`,
      description: site.agentPortraitAlt,
    },
    jobTitle: "Real Estate Agent",
    worksFor: {
      "@type": "Organization",
      name: site.brokerage.name,
    },
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Braunfels",
      addressRegion: "TX",
      addressCountry: "US",
    },
    knowsAbout: [
      "New Braunfels real estate",
      "Texas Hill Country",
      "Comal River lifestyle",
      "relocation services",
    ],
    sameAs: Object.values(site.social),
  } as const;
}

// ─── Page-level schemas ──────────────────────────────────────────────────────

export function breadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE}${item.href}`,
    })),
  } as const;
}

export function articleSchema(opts: {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  urlPath: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const absoluteImage = opts.imageUrl.startsWith("http")
    ? opts.imageUrl
    : `${BASE}${opts.imageUrl}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: {
      "@type": "ImageObject",
      url: absoluteImage,
      description: opts.imageAlt,
    },
    url: `${BASE}${opts.urlPath}`,
    datePublished: opts.datePublished ?? "2024-01-01",
    dateModified: opts.dateModified ?? new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: site.agentName,
      url: `${BASE}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}${site.logoSrc}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}${opts.urlPath}`,
    },
  } as const;
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
  category: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const absoluteImage = opts.imageUrl.startsWith("http")
    ? opts.imageUrl
    : `${BASE}${opts.imageUrl}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: {
      "@type": "ImageObject",
      url: absoluteImage,
      description: opts.imageAlt,
    },
    url: `${BASE}/blog/${opts.slug}`,
    datePublished: opts.datePublished ?? "2024-01-01",
    dateModified: opts.dateModified ?? new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: site.agentName,
      url: `${BASE}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}${site.logoSrc}`,
      },
    },
    articleSection: opts.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/blog/${opts.slug}`,
    },
    isPartOf: {
      "@type": "Blog",
      name: `${site.brand} Journal`,
      url: `${BASE}/blog`,
    },
  } as const;
}

export function neighborhoodPlaceSchema(opts: {
  name: string;
  description: string;
  imageUrl: string;
  urlPath: string;
}) {
  const absoluteImage = opts.imageUrl.startsWith("http")
    ? opts.imageUrl
    : `${BASE}${opts.imageUrl}`;
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: opts.name,
    description: opts.description,
    image: {
      "@type": "ImageObject",
      url: absoluteImage,
    },
    url: `${BASE}${opts.urlPath}`,
    containedInPlace: {
      "@type": "City",
      name: "New Braunfels",
      sameAs: "https://en.wikipedia.org/wiki/New_Braunfels,_Texas",
    },
    containsPlace: {
      "@type": "State",
      name: "Texas",
    },
  } as const;
}

export function servicePageSchema(opts: {
  name: string;
  description: string;
  urlPath: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${BASE}${opts.urlPath}`,
    serviceType: opts.serviceType,
    provider: {
      "@type": "RealEstateAgent",
      name: site.agentName,
      url: BASE,
      telephone: site.phone,
      email: site.email,
    },
    areaServed: {
      "@type": "City",
      name: "New Braunfels",
      sameAs: "https://en.wikipedia.org/wiki/New_Braunfels,_Texas",
    },
  } as const;
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } as const;
}
