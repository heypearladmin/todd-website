/**
 * Home page content. All copy is em-dash free per brand voice.
 * Image paths use SEO-friendly filenames; assets should live at the listed paths under /public.
 */

export const heroContent = {
  eyebrow: "New Braunfels, Texas",
  headlineBefore: "The local insider",
  headlineItalic: "for living in New Braunfels.",
  dek: "Guides, neighborhood deep dives, and market notes from a New Braunfels real estate agent who actually lives the river life. No pressure. No hype. Just honest help when you are ready.",
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
  title: "A trusted New Braunfels Realtor, not a high pressure salesperson.",
  dek: "Fifteen years living, eating, floating, and working in New Braunfels. As a local real estate agent, I help families relocate, retirees right size, first time buyers find their footing, and Austin and San Antonio commuters find a place that finally feels like home.",
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
  href: "https://www.google.com/maps/place/Todd+Spencer,+REALTOR%C2%AE/@29.8444127,-99.4899049,8z/data=!3m1!4b1!4m6!3m5!1s0x4bc390cbe2cc144b:0x143deca60dd0bcc4!8m2!3d29.850971!4d-98.1705181!16s%2Fg%2F11mf057bzq",
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
  {
    kind: "moving",
    eyebrow: "Buyer guide",
    title: "When your offer gets rejected",
    dek: "What it means, what to do next, and how to come back stronger in the New Braunfels market.",
    href: "/blog/offer-rejected-new-braunfels",
    imageSrc: "/images/website-blog-offer-rejected-new-braunfels.png",
    imageAlt:
      "Young couple reviewing real estate documents at a kitchen table in a warm Texas home, thoughtful and determined.",
  },
  {
    kind: "lifestyle",
    eyebrow: "Relocation guide",
    title: "Pet-friendly New Braunfels",
    dek: "Dog parks, river trails, and the spots where your dog gets as good a Saturday as you do.",
    href: "/blog/pet-friendly-new-braunfels",
    imageSrc: "/images/website-blog-pet-friendly-new-braunfels.png",
    imageAlt:
      "Happy dog wading in crystal-clear spring-fed river water with cypress trees lining the bank in New Braunfels.",
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
