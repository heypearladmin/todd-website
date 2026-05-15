/**
 * Home page content. All copy is em-dash free per brand voice.
 * Image paths use SEO-friendly filenames; assets should live at the listed paths under /public.
 */

export const heroContent = {
  eyebrow: "New Braunfels, Texas",
  headlineBefore: "The local insider",
  headlineItalic: "for living in New Braunfels.",
  dek: "Guides, neighborhood deep dives, and friendly market notes from someone who actually lives the river life. No pressure. No hype. Just honest help when you are ready.",
  primaryCta: { label: "Start a conversation", href: "/contact" },
  secondaryCta: { label: "Explore the city", href: "/neighborhoods" },
  landscapeSrc: "/images/hero-new-braunfels-river.webp",
  portraitSrc: "/images/hero-new-braunfels-river-mobile.webp",
  imageAlt:
    "Cinematic view of the Comal River in New Braunfels at golden hour with cypress trees and warm Hill Country light.",
} as const;

/* ─────────────────────────── Trust / Authority ─────────────────────────── */

export const localGuide = {
  eyebrow: "Your local guide",
  title: "A trusted insider, not a high pressure salesperson.",
  dek: "Fifteen years living, eating, floating, and working in New Braunfels. I help families relocate, retirees right size, first time buyers find their footing, and Austin and San Antonio commuters find a place that finally feels like home.",
  pullQuote:
    "Hyperlocal is not a buzzword. It is where you float on Saturday and where you grab coffee on Tuesday.",
  aboutHref: "/about",
  aboutLabel: "Read the longer story",
} as const;

export const trustColophon = {
  lines: [
    { label: "Years in market", value: "15+" },
    { label: "Closings (rolling)", value: "180+" },
    { label: "Median days on market", value: "22" },
    { label: "Five star reviews", value: "120+" },
  ],
  proof:
    "Representing first time buyers, relocating families, retirees, and Austin and San Antonio commuters. Paperwork tight. Communication clear. The pace is yours.",
} as const;

/* ─────────────────────────── Explore New Braunfels ─────────────────────────── */

export type ExploreCategory =
  | "restaurants"
  | "river-life"
  | "live-music"
  | "breweries"
  | "hidden-gems"
  | "weekend-activities"
  | "neighborhood-guides"
  | "family-activities";

export type ExploreTile = {
  category: ExploreCategory;
  title: string;
  dek: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const exploreTiles: ExploreTile[] = [
  {
    category: "restaurants",
    title: "Where to eat",
    dek: "From limestone porches to converted feed stores. The places locals return to and the ones worth the drive.",
    href: "/blog/restaurants",
    imageSrc: "/images/explore-restaurants-gruene-supper.webp",
    imageAlt:
      "Warmly lit Gruene area restaurant patio at golden hour with limestone walls and string lights.",
  },
  {
    category: "river-life",
    title: "River life",
    dek: "Tubing the Comal, sunset wades on the Guadalupe, and the local etiquette nobody writes down.",
    href: "/blog/river-life",
    imageSrc: "/images/explore-river-life-comal-float.webp",
    imageAlt:
      "Crystal clear Comal River with tubers floating gently between cypress trees in soft morning light.",
  },
  {
    category: "live-music",
    title: "Live music",
    dek: "Gruene Hall, dance floors that still creak, and the small rooms where Texas songwriters work things out.",
    href: "/blog/live-music",
    imageSrc: "/images/explore-live-music-gruene-hall.webp",
    imageAlt:
      "Interior of Gruene Hall at dusk with warm stage light spilling onto a worn wooden dance floor.",
  },
  {
    category: "breweries",
    title: "Breweries and taprooms",
    dek: "Local hops, river patios, and Tuesday night trivia. A short list, honestly ranked, fully drinkable.",
    href: "/blog/breweries",
    imageSrc: "/images/explore-breweries-faust-taproom.webp",
    imageAlt:
      "New Braunfels craft brewery taproom interior with reclaimed wood, copper kettles, and warm hanging bulbs.",
  },
  {
    category: "hidden-gems",
    title: "Hidden gems",
    dek: "The swimming hole behind the limestone bend. The bakery with a line of regulars and zero signage.",
    href: "/blog/hidden-gems",
    imageSrc: "/images/explore-hidden-gems-secret-cove.webp",
    imageAlt:
      "Secluded swimming cove on the Guadalupe with limestone outcropping and quiet, glassy water.",
  },
  {
    category: "weekend-activities",
    title: "Weekend rhythm",
    dek: "Farmers markets, vintage strolls, river floats, and the early supper that keeps Sunday calm.",
    href: "/blog/weekends",
    imageSrc: "/images/explore-weekend-activities-farmers-market.webp",
    imageAlt:
      "Saturday farmers market in New Braunfels with woven baskets of peaches and tomatoes in golden morning light.",
  },
  {
    category: "neighborhood-guides",
    title: "Neighborhood guides",
    dek: "Canopy roads, school paths, walk to water pockets, and the slow streets that locals love.",
    href: "/neighborhoods",
    imageSrc: "/images/explore-neighborhood-guides-canopy-drive.webp",
    imageAlt:
      "Tree canopied residential drive in New Braunfels with mature live oaks arching over the lane.",
  },
  {
    category: "family-activities",
    title: "Family days",
    dek: "Schlitterbahn after the crowds, Landa Park hideouts, and the parks where kids hand back their phones.",
    href: "/blog/family",
    imageSrc: "/images/explore-family-activities-river-sunset.webp",
    imageAlt:
      "Family wading in the Comal River at sunset with bare feet on smooth limestone and warm light.",
  },
];

/* ─────────────────────────── Video Authority ─────────────────────────── */

export type VideoCard = {
  kind: "market-update" | "community-spotlight" | "lifestyle-reel" | "local-business";
  eyebrow: string;
  title: string;
  dek: string;
  posterSrc: string;
  posterAlt: string;
  runtime: string;
  href: string;
};

export const videoAuthority = {
  eyebrow: "On camera",
  title: "Field notes you can watch.",
  dek: "Short, honest videos from around town. Market reads, neighborhood walks, community spotlights, and friendly business features. New episodes most weeks.",
  primaryCta: { label: "Watch on YouTube", href: "https://www.youtube.com/@ToddSpencer-x7b" },
  secondaryCta: { label: "Follow on Instagram", href: "https://www.instagram.com/toddspencer.realtor" },
} as const;

export const videoCards: VideoCard[] = [
  {
    kind: "market-update",
    eyebrow: "Market update",
    title: "What the corridor is actually doing this month",
    dek: "Inventory by price band, what closed, and what is sitting longer than it should.",
    posterSrc: "/images/video-market-update-poster.webp",
    posterAlt:
      "Editorial film poster style still of New Braunfels skyline at soft hour with the river bending through.",
    runtime: "6 min",
    href: "https://www.youtube.com/@ToddSpencer-x7b",
  },
  {
    kind: "community-spotlight",
    eyebrow: "Community spotlight",
    title: "The Saturday morning at Landa Park",
    dek: "A walk through one of the most quietly beloved corners of the city.",
    posterSrc: "/images/video-community-spotlight-poster.webp",
    posterAlt:
      "Cinematic still of Landa Park footbridge in New Braunfels with mature trees and morning sunlight.",
    runtime: "4 min",
    href: "https://www.youtube.com/@ToddSpencer-x7b",
  },
  {
    kind: "lifestyle-reel",
    eyebrow: "Lifestyle reel",
    title: "One perfect day on the Comal",
    dek: "From put in to porch. A no rush, no hustle weekend in 90 seconds.",
    posterSrc: "/images/video-lifestyle-reel-poster.webp",
    posterAlt:
      "Cinematic still of golden hour float on the Comal River with cypress trees and gentle ripples.",
    runtime: "1 min",
    href: "https://www.instagram.com/toddspencer.realtor",
  },
];

/* ─────────────────────────── Featured Neighborhoods ─────────────────────────── */

export type Neighborhood = {
  slug: string;
  title: string;
  dek: string;
  vibe: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "gruene",
    title: "Gruene",
    dek: "Limestone bones, hall glow, and front porches that have heard every chorus. Historic, walkable, and rarely quiet on a weekend.",
    vibe: "Historic and lively",
    href: "/neighborhoods/gruene",
    imageSrc: "/images/neighborhood-gruene-historic-limestone.webp",
    imageAlt:
      "Historic Gruene main street at golden hour with limestone facades and warm bulb lighting.",
  },
  {
    slug: "downtown-new-braunfels",
    title: "Downtown New Braunfels",
    dek: "Plaza weekends, the river a block away, and a Main Street that has quietly leveled up. Restaurants, coffee, and slow Saturdays.",
    vibe: "Walkable and waking up",
    href: "/neighborhoods/downtown-new-braunfels",
    imageSrc: "/images/neighborhood-downtown-new-braunfels-plaza.webp",
    imageAlt:
      "Downtown New Braunfels plaza at soft hour with historic architecture and gentle foot traffic.",
  },
  {
    slug: "canyon-lake",
    title: "Canyon Lake",
    dek: "Dawn pinks on reservoir glass, hill country quiet, and morning views that feel borrowed from a travel annual.",
    vibe: "Lakefront calm",
    href: "/neighborhoods/canyon-lake",
    imageSrc: "/images/neighborhood-canyon-lake-shoreline.webp",
    imageAlt:
      "Aerial dawn photograph of Canyon Lake with folded Hill Country ridges and soft pink water.",
  },
  {
    slug: "vintage-oaks",
    title: "Vintage Oaks",
    dek: "Canopy drives, stone walls, and the kind of cul de sacs where kids still bike at dusk.",
    vibe: "Family scale luxury",
    href: "/neighborhoods/vintage-oaks",
    imageSrc: "/images/neighborhood-vintage-oaks-canopy.webp",
    imageAlt:
      "Canopy drive in Vintage Oaks with mature live oaks arching over a quiet residential lane.",
  },
  {
    slug: "veramendi",
    title: "Veramendi",
    dek: "A master planned community shaped by the land it sits on. Trails, water, and a fresh take on neighborhood life.",
    vibe: "New and considered",
    href: "/neighborhoods/veramendi",
    imageSrc: "/images/neighborhood-veramendi-aerial.webp",
    imageAlt:
      "Aerial photograph of Veramendi development in New Braunfels with rolling Hill Country terrain and trail network.",
  },
];

/* ─────────────────────────── Social Proof ─────────────────────────── */

export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Todd never rushed us. He translated inspection noise into decisions we could sleep on and made the negotiation feel human.",
    attribution: "Morgan and Alex",
    context: "Relocated from Austin",
  },
  {
    quote:
      "He reads this town the way a good editor reads a manuscript. What to keep, what to cut, what to protect.",
    attribution: "Lane",
    context: "Downsizing near the river",
  },
  {
    quote:
      "Offers were explained like chapters, not traps. We closed on time and there was zero drama.",
    attribution: "Priya and Jordan",
    context: "First time buyers",
  },
];

export const googleReviewStats = {
  rating: "5.0",
  count: "120+",
  source: "Google Reviews",
  href: "https://www.google.com/search?q=Todd+Spencer+Realtor+New+Braunfels",
};

export type StoryWin = {
  metric: string;
  title: string;
  dek: string;
};

export const storyWins: StoryWin[] = [
  {
    metric: "9 days",
    title: "On market for a Gruene cottage",
    dek: "A careful price band read and a buyer pool we already knew. Sold above asking with one inspection request.",
  },
  {
    metric: "$0",
    title: "Surprises at close",
    dek: "Disclosure questions answered up front and a lender on speed dial. A drama free close for a relocating family.",
  },
  {
    metric: "3 months",
    title: "From first call to keys",
    dek: "A retiree downsizing from a multi acre property. Patient touring, clear math, and a result that fit the next chapter.",
  },
];

/* ─────────────────────────── Market Insights ─────────────────────────── */

export type InsightCard = {
  kind: "moving" | "cost-of-living" | "lifestyle" | "trends";
  eyebrow: string;
  title: string;
  dek: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const marketInsights = {
  eyebrow: "Field notes",
  title: "Read the corridor before you tour it.",
  dek: "Plain English guides for the questions buyers, sellers, and the curious actually ask. Updated as the market shifts.",
  signalLabel: "River corridor velocity",
  signalValue: "+6%",
  signalDek: "Year over year change in under contract volume inside a 1.5 mile Comal buffer (illustrative).",
} as const;

export const insightCards: InsightCard[] = [
  {
    kind: "moving",
    eyebrow: "Moving guide",
    title: "Moving to New Braunfels",
    dek: "Schools, commute math, the parts of town that work for which season of life.",
    href: "/blog/moving-to-new-braunfels",
    imageSrc: "/images/insight-moving-to-new-braunfels.webp",
    imageAlt:
      "Wide editorial photograph of New Braunfels skyline at golden hour with river bend in foreground.",
  },
  {
    kind: "cost-of-living",
    eyebrow: "Numbers",
    title: "Cost of living",
    dek: "Housing, taxes, utilities, and the small line items that quietly add up here.",
    href: "/blog/cost-of-living",
    imageSrc: "/images/insight-cost-of-living-guide.webp",
    imageAlt:
      "Editorial flat lay of New Braunfels home keys, a coffee, and a small notebook on warm paper.",
  },
  {
    kind: "lifestyle",
    eyebrow: "Lifestyle",
    title: "River rituals and weekend rhythm",
    dek: "Float seasons, supper hours, market mornings, and the slow part of Sunday.",
    href: "/blog/lifestyle",
    imageSrc: "/images/insight-lifestyle-river-rituals.webp",
    imageAlt:
      "Editorial photograph of soft morning light over the Comal River with cypress trees.",
  },
  {
    kind: "trends",
    eyebrow: "Market trends",
    title: "Real estate trends",
    dek: "What is moving, what is sitting, and where the next chapter of the corridor is being written.",
    href: "/blog/market-trends",
    imageSrc: "/images/insight-real-estate-trends.webp",
    imageAlt:
      "Aerial editorial photograph of Hill Country residential corridor in soft afternoon light.",
  },
];

/* ─────────────────────────── Final CTA ─────────────────────────── */

export const finalCta = {
  eyebrow: "Whenever you are ready",
  title: "Tell me the chapter you are in. I will bring the map and the patience.",
  dek: "First time buying, relocating, downsizing, or just curious about the market. I read every note and respond within a business day.",
  button: { label: "Send Todd a note", href: "/contact" },
  secondary: { label: "Browse neighborhood guides", href: "/neighborhoods" },
  desktopSrc: "/images/cta-hill-country-twilight.webp",
  mobileSrc: "/images/cta-hill-country-twilight-mobile.webp",
  imageAlt:
    "Twilight silhouette of Texas Hill Country hills outside New Braunfels with a warm residual horizon glow.",
} as const;

/* ─────────────────────────── Shared texture ─────────────────────────── */

export const trustTextureSrc = "/images/texture-paper-warm.webp" as const;

/* ─────────────────────────── Newsletter ─────────────────────────── */

export const newsletterCopy = {
  eyebrow: "The dispatch",
  title: "Hill Country notes, once a month.",
  dek: "A short, honest email. Market reads, new guides, the occasional river update. No spam. Unsubscribe any time.",
  placeholder: "you@example.com",
  cta: "Subscribe",
  consentLine: "We respect your inbox.",
} as const;

/* ─────────────────────────── Dynamic route helpers ─────────────────────────── */

export type BlogArticle = {
  slug: string;
  eyebrow: string;
  title: string;
  dek: string;
  imageSrc: string;
  imageAlt: string;
  category: "Explore" | "Market Insights";
  href: string;
};

function slugFromBlogHref(href: string): string | null {
  const match = /^\/blog\/(.+)$/.exec(href);
  return match ? match[1] : null;
}

export function findBlogArticle(slug: string): BlogArticle | null {
  const fromExplore = exploreTiles.find((t) => slugFromBlogHref(t.href) === slug);
  if (fromExplore) {
    return {
      slug,
      eyebrow: "Explore New Braunfels",
      title: fromExplore.title,
      dek: fromExplore.dek,
      imageSrc: fromExplore.imageSrc,
      imageAlt: fromExplore.imageAlt,
      category: "Explore",
      href: fromExplore.href,
    };
  }
  const fromInsight = insightCards.find((c) => slugFromBlogHref(c.href) === slug);
  if (fromInsight) {
    return {
      slug,
      eyebrow: fromInsight.eyebrow,
      title: fromInsight.title,
      dek: fromInsight.dek,
      imageSrc: fromInsight.imageSrc,
      imageAlt: fromInsight.imageAlt,
      category: "Market Insights",
      href: fromInsight.href,
    };
  }
  return null;
}

export function getAllBlogSlugs(): string[] {
  const slugs = new Set<string>();
  for (const t of exploreTiles) {
    const s = slugFromBlogHref(t.href);
    if (s) slugs.add(s);
  }
  for (const c of insightCards) {
    const s = slugFromBlogHref(c.href);
    if (s) slugs.add(s);
  }
  return Array.from(slugs);
}

export function findNeighborhood(slug: string): Neighborhood | null {
  return neighborhoods.find((n) => n.slug === slug) ?? null;
}

export function getAllNeighborhoodSlugs(): string[] {
  return neighborhoods.map((n) => n.slug);
}

export function getRelatedNeighborhoods(currentSlug: string, count = 2): Neighborhood[] {
  return neighborhoods.filter((n) => n.slug !== currentSlug).slice(0, count);
}
