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
  {
    slug: "riverchase",
    title: "RiverChase",
    dek: "Limestone bluffs, slow river bends, and the kind of evenings where porch light, cicada song, and a slow Hill Country breeze all arrive at once. Quiet acreage minutes from town — upscale, easygoing, and built for the long stay.",
    vibe: "Hill Country river homes",
    href: "/neighborhoods/riverchase",
    // Placeholder asset — reuse existing Hill Country aerial until a RiverChase-specific frame is delivered.
    // Suggested replacement filename: /images/neighborhood-riverchase-hill-country.webp
    imageSrc: "/images/insight-real-estate-trends.webp",
    imageAlt:
      "Aerial editorial photograph of a Hill Country residential neighborhood near New Braunfels with rolling oak canopy and soft late afternoon light.",
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

export type JournalSection = {
  heading: string;
  eyebrow?: string;
  body: string;
  bulletPoints?: string[];
  subsections?: {
    heading: string;
    body: string;
    bulletPoints?: string[];
  }[];
};

export type JournalPost = {
  slug: string;
  eyebrow: string;
  title: string;
  dek: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  publishDate: string;
  intro: string;
  sections: JournalSection[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "2026-new-braunfels-real-estate-market-report",
    eyebrow: "Market report",
    title: "2026 New Braunfels Real Estate Market Report",
    dek: "Home prices, key trends, neighborhood insights, and a forecast for the rest of the year from a local agent who lives and works here.",
    imageSrc: "/images/2026 New Braunfels Real Estate Market Report 06_11.png",
    imageAlt: "Aerial view of New Braunfels Hill Country residential corridor at soft afternoon light.",
    category: "Market Insights",
    publishDate: "June 2026",
    intro: "As we move deeper into 2026, the New Braunfels real estate market is experiencing dynamic changes that reflect broader trends in Texas residential real estate. Buyers and sellers alike seek clarity on current home prices and the factors driving these shifts. This report covers property values, emerging housing trends, neighborhood insights, and predictions for the remainder of the year.",
    sections: [
      {
        heading: "Current Home Prices in New Braunfels",
        eyebrow: "By the numbers",
        body: "In 2026, New Braunfels has seen a notable increase in home prices reflecting growing demand and competitive market dynamics. The current average home price stands at approximately $425,000, a robust year-on-year increase fueled by the influx of relocating families and persistently low inventory levels.",
        subsections: [
          {
            heading: "How property values have changed",
            body: "Over the past few years, property values have steadily risen. The average home price has increased by roughly 10% since 2025, driven by improvements in local infrastructure and heightened demand from out-of-state buyers. The Hill Country lifestyle has solidified New Braunfels as a prime location for families and retirees alike.",
          },
          {
            heading: "Neighborhoods showing the highest price growth",
            body: "Certain neighborhoods are particularly noteworthy for substantial appreciation. Areas such as Gruene and River Chase have seen property values surge approximately 12-15% over the past year, linked to their proximity to amenities, shopping, dining, and recreational facilities.",
          },
        ],
      },
      {
        heading: "Key Housing Trends Shaping 2026",
        eyebrow: "What is moving",
        body: "Current housing trends are shaped by changing buyer preferences and ongoing shifts in market dynamics. There is increasing demand for single-family homes with ample outdoor space as families seek accommodations that support work-from-home arrangements and lifestyle flexibility.",
        subsections: [
          {
            heading: "How housing supply is affecting buyer choices",
            body: "Tight inventory is profoundly influencing buyer choices. With inventory levels down about 20% compared to last year, buyers face increased competition and higher prices. This scarcity often leads to bidding wars, compelling homebuyers to reconsider budgetary constraints and adjust their desired home features.",
          },
          {
            heading: "Most popular property types right now",
            body: "In 2026, the most sought-after properties include spacious single-family homes and modern townhouses. Properties with outdoor amenities such as patios, pools, and large yards have become increasingly attractive as buyers prioritize outdoor living.",
          },
        ],
      },
      {
        heading: "2026 Market Forecast",
        eyebrow: "Looking ahead",
        body: "The forecast indicates a continuation of current trends with cautionary notes for both buyers and sellers. Expected shifts in interest rates and economic factors may impact market dynamics during the latter half of 2026.",
        subsections: [
          {
            heading: "Predicted trends for the rest of the year",
            body: "Market predictions suggest a modest price increase of 3-5% for the remainder of 2026. Seasonal demand and economic stability in Texas will continue to influence this trajectory. Sellers are advised to remain positioned to take advantage of rising demand while staying mindful of changing conditions.",
          },
          {
            heading: "What first-time buyers should know",
            body: "First-time buyers are encouraged to familiarize themselves with local market conditions and financing options before committing. Understanding the benefits and potential drawbacks of various neighborhoods, as well as lending processes and available resources, is crucial. Building a relationship with a local agent who knows the hyperlocal market provides invaluable insights.",
          },
        ],
      },
      {
        heading: "Top Neighborhoods for Lifestyle and Investment",
        eyebrow: "Where to look",
        body: "Several neighborhoods stand out for great lifestyle amenities and investment potential. Communities like River Chase and the historic Gruene district offer charming aesthetics and robust long-term appreciation opportunities.",
        subsections: [
          {
            heading: "Local amenities that drive neighborhood desirability",
            body: "Access to parks, recreational facilities, and vibrant community events play a significant role in attracting new residents. River Chase, for example, offers a country club and scenic trails, enhancing quality of life in ways that show up in appreciation data.",
          },
          {
            heading: "How commuter access influences value",
            body: "The proximity of New Braunfels to Austin and San Antonio significantly influences buyer preferences. Commuters are drawn to neighborhoods that offer convenient access to major highways while maintaining a peaceful suburban environment.",
          },
        ],
      },
      {
        heading: "Mid-2026 Market Statistics",
        eyebrow: "The data",
        body: "As of mid-2026, the average days on market for homes has decreased to just 30 days, indicating a rapid sales environment. Inventory remains low at only 1.5 months of supply, highlighting the competitive nature of the market. If you are thinking about buying or selling, acting with a clear strategy and a local guide makes the difference.",
      },
    ],
  },
  {
    slug: "how-todd-differentiates-his-services",
    eyebrow: "About Todd",
    title: "How Todd Spencer Differentiates His Real Estate Services",
    dek: "Hyperlocal guides, real-time market data, relocation support, and honest communication. Here is what working with Todd actually looks like.",
    imageSrc: "/images/How Todd Differentiates His Services From Other New Braunfels Real Estate Agents 06_11.png",
    imageAlt: "Cinematic editorial photograph of a New Braunfels neighborhood street at golden hour.",
    category: "About Todd",
    publishDate: "June 2026",
    intro: "In the competitive landscape of New Braunfels real estate, standing out requires more than a license and a lockbox. Todd Spencer employs a unique approach focused on hyperlocal insight and personalized service, catering to both buyers and sellers. This article explores how that specialized knowledge creates a tailored experience addressing the specific needs of relocating buyers and local sellers alike.",
    sections: [
      {
        heading: "Unique Neighborhood Insights",
        eyebrow: "Hyperlocal",
        body: "Todd's expertise comes from deep knowledge of local neighborhoods built over 15 years of living and working here. This allows him to provide insights that go beyond typical market data, covering local amenities, demographics, and lifestyle options that help clients truly understand an area before making a commitment.",
        subsections: [
          {
            heading: "Hyperlocal guides for buyers",
            body: "Todd's neighborhood guides cover popular attractions, dining options, community events, and points of interest that align with buyers' lifestyles. The goal is to help potential homeowners envision their lives in an area, not just evaluate a floor plan.",
          },
          {
            heading: "Neighborhood specializations",
            body: "Todd specializes in Prosperity Hills, Gruene, Hill Country, River Chase, and the broader New Braunfels corridor. Each community offers unique cultural experiences: Prosperity Hills for its scenic views and upscale homes, Gruene for its historic charm and local shops, Hill Country for its natural beauty and spacious properties.",
          },
        ],
      },
      {
        heading: "Real-Time Market Updates",
        eyebrow: "The data",
        body: "In a fast-paced market, timely information is essential. Todd uses advanced market analysis tools to provide clients with real-time updates about trends in New Braunfels. This adaptive approach ensures both buyers and sellers always have access to the latest data.",
        subsections: [
          {
            heading: "2026 trends Todd monitors",
            bulletPoints: [
              "Rising home values driven by demand and limited inventory",
              "Shift toward suburban living as buyers seek more space",
              "Increased competition from relocation demand, requiring prompt action",
            ],
            body: "",
          },
          {
            heading: "How Todd's reports differ from generic data",
            body: "Todd's market reports emphasize tailored data relevant to each client's specific situation. Rather than broad statistics, they include local market specifics for the chosen neighborhood, average days on market, and local buyer behaviors. Reports are updated regularly throughout the buying or selling journey.",
          },
        ],
      },
      {
        heading: "Supporting Relocating Buyers",
        eyebrow: "Relocation",
        body: "Relocating can be overwhelming. Todd offers comprehensive support to ease the transition for buyers coming from Austin, San Antonio, and beyond. His services include personalized consultations, neighborhood tours, and practical resources covering everything from school enrollment to local service providers.",
        subsections: [
          {
            heading: "Commuter-friendly neighborhood recommendations",
            body: "Understanding commuting needs is crucial for those transitioning from larger cities. Todd identifies neighborhoods that meet buyer preferences while also addressing commute realities, including locations near major highways and transit options.",
          },
        ],
      },
      {
        heading: "Guiding Local Sellers",
        eyebrow: "For sellers",
        body: "For local sellers, Todd offers personalized strategies that highlight the unique features of their properties. With deep understanding of New Braunfels market conditions, he empowers sellers to maximize value while minimizing time on market.",
        subsections: [
          {
            heading: "Practical seller tips",
            bulletPoints: [
              "Home staging guidance to attract the right buyers",
              "Targeted marketing using both digital and traditional channels",
              "Competitive pricing strategies based on current market data and property features",
            ],
            body: "",
          },
          {
            heading: "Community connections that enhance sale opportunities",
            body: "Todd's established relationships within the community further enhance home sale opportunities. Networking with local businesses and participating in community events allows him to market homes effectively and tap into buyer networks within New Braunfels.",
          },
        ],
      },
      {
        heading: "Why Transparency and Honesty Set Todd Apart",
        eyebrow: "The standard",
        body: "Todd's commitment to transparency is a significant differentiator in his practice. Clients are informed about every aspect of the buying or selling process, from market conditions to potential challenges. This open communication builds trust and allows clients to feel genuinely confident in their decisions.",
      },
      {
        heading: "How to Access Todd's Services",
        eyebrow: "Get in touch",
        body: "Clients interested in working with Todd can reach out directly for a personalized consultation. Todd provides thorough support in consultation and contract negotiation, including detailed contract review, negotiation strategy development, and ongoing availability throughout the process. Visit todd-spencer.com or call (512) 665-3747.",
      },
    ],
  },
  {
    slug: "moving-to-new-braunfels-relocation-guide",
    eyebrow: "Relocation guide",
    title: "Moving to New Braunfels: A Complete Relocation Guide",
    dek: "Neighborhoods, real estate trends, cost of living comparisons, moving checklists, commute times, and community connection strategies.",
    imageSrc: "/images/Moving to New Braunfels_ A Complete Relocation Guide 06_11.png",
    imageAlt: "Wide editorial photograph of New Braunfels Hill Country at golden hour with river bend in foreground.",
    category: "Relocation",
    publishDate: "June 2026",
    intro: "Relocating to New Braunfels is an exciting venture filled with vibrant community life, scenic natural beauty, and a rich cultural heritage. This guide covers the essential aspects of moving here, providing in-depth insights into neighborhoods, real estate trends, living costs, and community engagement. Whether you are drawn to the Hill Country vistas or the lively local festivals, this guide equips you with the information you need for a successful move.",
    sections: [
      {
        heading: "Neighborhoods: Which One Fits Your Life?",
        eyebrow: "Where to land",
        body: "New Braunfels boasts various neighborhoods, each with distinct amenities and lifestyle offerings. Residents choose their community based on personal preferences, ranging from tranquil retreats to vibrant, activity-rich environments.",
        subsections: [
          {
            heading: "Notable neighborhoods at a glance",
            body: "",
            bulletPoints: [
              "Gruene: Historic charm, live music at Gruene Hall, Guadalupe River access, charming shops and restaurants",
              "Vintage Oaks: Upscale community with resort-style pool, walking trails, expansive lots, and luxury amenities",
              "RiverChase: Larger lots, rural feel, riverfront properties, ideal for those seeking serene living near the city",
            ],
          },
          {
            heading: "Schools and parks",
            body: "The New Braunfels Independent School District oversees local educational institutions rated favorably for academic achievement and extracurricular engagement. For recreation, Landa Park and Cypress Bend Park feature playgrounds, walking trails, and picnic areas for families to enjoy throughout the year.",
          },
        ],
      },
      {
        heading: "Real Estate Market Trends",
        eyebrow: "The market",
        body: "Home prices in New Braunfels have seen steady increases due to high demand and limited inventory. The market reflects a competitive environment, with many homes receiving multiple offers within days of listing. Potential buyers are encouraged to act quickly when a property meets their needs.",
        subsections: [
          {
            heading: "Common property types and price ranges",
            body: "",
            bulletPoints: [
              "Single-family homes: $270,000 to $550,000, 3-5 bedrooms, family-oriented layouts",
              "Townhomes: $220,000 to $370,000, low-maintenance living ideal for young professionals",
              "Luxury homes: $550,000 to $1,200,000+, upscale amenities and larger properties in prime locations",
            ],
          },
        ],
      },
      {
        heading: "Cost of Living",
        eyebrow: "The numbers",
        body: "New Braunfels presents an attractive cost of living compared to nearby cities like Austin and San Antonio, generally offering more affordable housing while still delivering the amenities and lifestyle benefits that come with urban living.",
        subsections: [
          {
            heading: "What to budget for",
            body: "",
            bulletPoints: [
              "Utilities: Average monthly utilities align with or are slightly below national averages",
              "Groceries and transportation: Generally reasonable, in line with Texas averages",
              "Housing: Varies significantly by neighborhood but broadly more affordable than Austin",
            ],
          },
        ],
      },
      {
        heading: "Your Moving Checklist",
        eyebrow: "Get organized",
        body: "A comprehensive checklist simplifies the relocation process and ensures nothing is overlooked.",
        bulletPoints: [
          "Create a move timeline detailing when to pack, hire movers, and set up utilities",
          "Gather important documents: identification, medical records, school transcripts",
          "Schedule utility installations in advance for a seamless arrival",
          "Connect with emergency services, fire department, and hospitals in New Braunfels",
          "Reach out to schools for enrollment processes within NBISD",
          "Identify health service providers and community programs ahead of time",
        ],
      },
      {
        heading: "Commuting to Austin and San Antonio",
        eyebrow: "Getting around",
        body: "Interstate 35 serves as the primary highway connecting New Braunfels to Austin and San Antonio. Commuters can expect travel times of approximately 30-45 minutes depending on traffic conditions, making it feasible for those working in these larger cities. Many residents find the trade-off well worth it: a quieter pace of life here, urban amenities a short drive away.",
      },
      {
        heading: "Engaging with the Community",
        eyebrow: "Putting down roots",
        body: "Becoming involved locally is one of the most rewarding aspects of moving to New Braunfels. Community centers offer classes, activities, and events that promote social interaction. Throughout the year, local festivals celebrate the city's cultural heritage. Various interest-focused meetup groups connect newcomers with residents who share similar hobbies.",
      },
    ],
  },
  {
    slug: "new-braunfels-relocation-welcome-packet",
    eyebrow: "Welcome packet",
    title: "New Braunfels Relocation Welcome Packet",
    dek: "Everything you need to know about neighborhoods, housing market conditions, schools, lifestyle, and cost of living before your move.",
    imageSrc: "/images/New Braunfels Relocation Welcome Packet 06_11.png",
    imageAlt: "Warm editorial flat lay of a New Braunfels welcome packet with local map and coffee on paper.",
    category: "Relocation",
    publishDate: "June 2026",
    intro: "Relocating to a new city can be both exciting and daunting, especially when it involves finding the right neighborhood, understanding the housing market, and ensuring your new home meets your family's needs. This welcome packet serves as your comprehensive guide for exploring New Braunfels, covering neighborhoods, schools, lifestyle, and cost of living.",
    sections: [
      {
        heading: "Neighborhoods",
        eyebrow: "Where to live",
        body: "New Braunfels is known for its vibrant neighborhoods, each with unique character and amenities. Understanding these options helps you choose where to live and enjoy the community.",
        subsections: [
          {
            heading: "Gruene",
            body: "Gruene is famous for its historic district and the iconic Gruene Hall, Texas's oldest dance hall. This area features charming older homes alongside new construction, catering to varied lifestyles. Residents enjoy easy access to the Guadalupe River, numerous shops, and local eateries, making it a lively and deeply rooted place to live.",
          },
          {
            heading: "Canyon Lake",
            body: "Canyon Lake offers breathtaking waterfront properties and a blend of tranquility and adventure. With expansive views and outdoor recreational opportunities, this area appeals to those seeking a serene lifestyle. Ideal for boating enthusiasts and nature lovers, Canyon Lake fosters a strong sense of community among its residents.",
          },
          {
            heading: "RiverChase",
            body: "RiverChase is an upscale residential neighborhood featuring large properties and landscaped parks. Known for its amenities including a clubhouse, walking trails, and river access for kayaking, it provides an idyllic environment for families and anyone seeking a more luxurious living experience within reach of the city.",
          },
        ],
      },
      {
        heading: "Housing Market Overview",
        eyebrow: "The market",
        body: "The housing market in New Braunfels is diverse and dynamic, catering to various buyer needs. New Braunfels has witnessed a significant number of transactions and steady increases in home values, reflecting strong market demand. Ongoing developments in infrastructure and amenities indicate a positive outlook for buyers and investors alike.",
        subsections: [
          {
            heading: "Quick price reference by neighborhood",
            body: "",
            bulletPoints: [
              "Gruene: $350,000 to $600,000, high demand",
              "Canyon Lake: $300,000 to $500,000, medium demand",
              "RiverChase: $400,000 to $800,000, high demand",
            ],
          },
        ],
      },
      {
        heading: "Schools",
        eyebrow: "Education",
        body: "New Braunfels is served primarily by the New Braunfels Independent School District, which has a strong reputation for academic excellence. Schools focus on delivering quality education supported by various extracurricular activities that enhance student engagement. The community's school-age population is diverse, enriching the educational experience for families from all backgrounds.",
      },
      {
        heading: "Lifestyle",
        eyebrow: "How life feels here",
        body: "Life in New Braunfels is characterized by a blend of natural beauty, recreational activities, and a vibrant cultural scene. Residents enjoy an active lifestyle year-round thanks to the area's mild climate.",
        subsections: [
          {
            heading: "Outdoor recreation",
            body: "From tubing down the Comal River to hiking in the nearby Hill Country State Natural Area, outdoor activities define the New Braunfels calendar. Local leagues cater to all ages and skill levels, ensuring community involvement and camaraderie.",
          },
          {
            heading: "Dining and community events",
            body: "The local dining scene reflects the rich cultural heritage of the area, with restaurants offering everything from Tex-Mex to classic American dishes, often accompanied by live music. Throughout the year, events like Wurstfest and seasonal farmers' markets celebrate the area's heritage and provide opportunities to connect with neighbors.",
          },
        ],
      },
      {
        heading: "Cost of Living Breakdown",
        eyebrow: "Budget planning",
        body: "",
        bulletPoints: [
          "Housing: Varies by neighborhood, broadly more affordable than Austin or San Antonio",
          "Utilities: Average monthly costs approximately $150 to $200 for a standard home",
          "Groceries: Closely aligned with the national average, affordable for families",
          "Transportation: Reasonable, with I-35 providing direct access to major employment centers",
        ],
      },
      {
        heading: "Additional Resources and Next Steps",
        eyebrow: "How to begin",
        body: "For personalized assistance navigating the New Braunfels market, consulting a local real estate expert saves time and reduces uncertainty. Todd Spencer specializes in guiding relocating buyers and sellers through the complexities of this market. Contact Todd at (512) 665-3747 or todd@todd-spencer.com, or visit todd-spencer.com for more information.",
      },
    ],
  },
  {
    slug: "river-chase-neighborhood-guide",
    eyebrow: "Neighborhood guide",
    title: "River Chase Neighborhood Guide",
    dek: "Real estate trends, community amenities, local events, commuting convenience, and everything else you need to know about living in River Chase.",
    imageSrc: "/images/River Chase Neighborhood Guide 06_11.png",
    imageAlt: "Aerial editorial photograph of River Chase neighborhood in New Braunfels with Hill Country terrain and oak canopy.",
    category: "Neighborhoods",
    publishDate: "June 2026",
    intro: "River Chase, a vibrant community in New Braunfels, offers a unique blend of scenic beauty, residential harmony, and thriving real estate opportunities. This guide covers everything from current market conditions to the lifestyle River Chase fosters, with insights from someone who knows the neighborhood well.",
    sections: [
      {
        heading: "Real Estate in River Chase",
        eyebrow: "The market",
        body: "The River Chase real estate market is characterized by a variety of housing options that cater to different preferences and budgets. The neighborhood has seen a notable increase in demand fueled by its picturesque setting and appealing lifestyle. Current market trends indicate a year-over-year increase of approximately 6% in under-contract volume, signaling a competitive environment for prospective homebuyers.",
        subsections: [
          {
            heading: "Current market snapshot",
            body: "",
            bulletPoints: [
              "Average home price: approximately $500,000",
              "Year-over-year growth rate: 6%",
              "Average days on market: 30 days",
            ],
          },
          {
            heading: "What buyers should know",
            body: "Demand has shifted toward larger residential units that provide ample space, reflecting lifestyle changes among various demographics. Many properties feature common floor plans that align well with modern living and home office needs.",
          },
        ],
      },
      {
        heading: "Community Lifestyle",
        eyebrow: "How life feels",
        body: "Living in River Chase provides a serene environment that merges natural beauty with a sense of community. The peaceful landscape encourages outdoor activities such as hiking and biking, while nearby amenities offer convenience for daily living. The rhythm of life here emphasizes community interaction and engagement.",
      },
      {
        heading: "Amenities",
        eyebrow: "What is here",
        body: "The amenities available within River Chase significantly contribute to the overall lifestyle experience.",
        bulletPoints: [
          "Well-maintained parks providing spaces for relaxation and community gatherings",
          "Local eateries serving a variety of cuisines catering to different tastes",
          "Nearby shopping centers offering essential goods and services",
          "Clubhouse and recreation facilities for residents",
        ],
      },
      {
        heading: "Local Events",
        eyebrow: "Community calendar",
        body: "Local events play a crucial role in fostering community bonds. Seasonal festivals, farmers' markets, and neighborhood gatherings create opportunities for social interaction and engagement. Annual holiday celebrations and regular farmers' markets allow residents to showcase local artisan goods and farm-fresh produce while strengthening community ties.",
      },
      {
        heading: "Commuting from River Chase",
        eyebrow: "Getting to work",
        body: "River Chase's strategic location offers excellent commuting options for residents traveling to Austin and San Antonio. Proximity to major highways and local transit routes simplifies the daily commute, making it a desirable choice for professionals working in urban areas while choosing to live at a more relaxed pace.",
      },
      {
        heading: "Who Lives in River Chase?",
        eyebrow: "The community",
        body: "River Chase attracts a diverse range of buyers, from growing families looking for spacious homes to retirees searching for a tranquil setting. Retirees find River Chase particularly appealing due to its peaceful atmosphere, supportive community, and availability of local amenities that cater to an active lifestyle without the noise of a busy suburb.",
      },
      {
        heading: "Schools and Educational Resources",
        eyebrow: "Education",
        body: "The River Chase area is served by well-regarded local schools within the New Braunfels Independent School District. Beyond primary and secondary schooling, residents have access to tutoring services, recreational programs, and extracurricular activities. These resources enhance the educational experience while promoting community involvement.",
      },
    ],
  },
  {
    slug: "what-makes-river-chase-unique",
    eyebrow: "Deep dive",
    title: "What Makes River Chase Unique in New Braunfels",
    dek: "Guadalupe River access, Hill Country trails, competitive real estate, and a community that genuinely knows its neighbors. A close look at what sets River Chase apart.",
    imageSrc: "/images/What Makes River Chase Unique in New Braunfels_ 06_11.png",
    imageAlt: "Scenic view of River Chase green space and natural landscape in New Braunfels Hill Country.",
    category: "Neighborhoods",
    publishDate: "June 2026",
    intro: "Nestled in the landscape of New Braunfels, River Chase stands out as a community that combines natural beauty with modern living. Whether you are a relocating buyer, a retiree seeking tranquility, or a family looking for a vibrant lifestyle, River Chase caters to diverse needs and offers a rich tapestry of experiences. Here is a close look at what makes this neighborhood more than just a place to live.",
    sections: [
      {
        heading: "Key Amenities That Define River Chase",
        eyebrow: "What sets it apart",
        body: "River Chase is defined by exceptional amenities that cater to every lifestyle. From lush parks and expansive trails to the Guadalupe River, this community positions itself as a hub for outdoor enthusiasts and social gatherings.",
        subsections: [
          {
            heading: "Parks, trails, and outdoor spaces",
            body: "",
            bulletPoints: [
              "River Chase Park: Walking trails, picnic areas, and playgrounds promoting activity and gathering",
              "Nature trails: Excellent for hiking and jogging, weaving through natural Hill Country landscape",
              "Community green spaces: Open areas for gatherings and neighborly connection",
            ],
          },
          {
            heading: "Guadalupe River access",
            body: "Access to the Guadalupe River significantly enhances River Chase's recreational offerings. Residents enjoy tubing during Texas summers, fishing along abundant stretches of river, and picnicking at riverside spots that offer some of the most serene environments in the area. The river is not just a waterway here, it is a daily part of life.",
          },
        ],
      },
      {
        heading: "The Real Estate Market in River Chase for 2026",
        eyebrow: "Market conditions",
        body: "The River Chase real estate market is dynamic, with opportunities for buyers and investors at multiple price points. Understanding current trends and available options is essential for making a well-timed move.",
        subsections: [
          {
            heading: "Home types and price ranges",
            body: "",
            bulletPoints: [
              "Single-family homes: $300,000 to $600,000, suitable for first-time buyers and those seeking space",
              "Luxury properties: Starting around $600,000, featuring upscale finishes and larger lots",
              "Custom-built homes: Many exceeding $800,000, providing a unique living experience tailored to individual preferences",
            ],
          },
          {
            heading: "How River Chase compares to other Hill Country real estate",
            body: "River Chase offers competitive pricing compared to similar neighborhoods while also delivering a wealth of amenities including parks and river access. With ongoing development and investment in infrastructure, River Chase is positioned for continued appreciation, making it attractive to both homebuyers and investors.",
          },
        ],
      },
      {
        heading: "For Relocating Buyers and Retirees",
        eyebrow: "Making the move",
        body: "For those considering a move to River Chase, understanding the local amenities and services is crucial for ensuring a smooth transition.",
        subsections: [
          {
            heading: "Schools and healthcare",
            body: "River Chase's proximity to reputable schools within the New Braunfels Independent School District and several nearby hospitals and clinics provides peace of mind for families and individuals alike. Quality services are accessible without requiring a drive into a larger city.",
          },
          {
            heading: "Tips for settling in",
            bulletPoints: [
              "Engage in local events early to integrate into the community quickly",
              "Build relationships with neighbors for insights into local culture and the best spots",
              "Explore parks and trails soon after arrival to appreciate what you have access to",
            ],
            body: "",
          },
        ],
      },
      {
        heading: "Commuter Accessibility",
        eyebrow: "Getting around",
        body: "Accessibility is a significant consideration for residents who commute to nearby cities. River Chase offers commendable transport options that support daily commuting needs.",
        bulletPoints: [
          "Austin: Around 30-40 minutes via Interstate 35, depending on traffic",
          "San Antonio: Approximately 25-35 minutes via US Highway 281",
        ],
        subsections: [
          {
            heading: "Work-life balance from River Chase",
            body: "The strategic location of River Chase supports a genuinely desirable work-life balance. Quick access to outdoor recreation allows for rejuvenating evenings after work. Various community events foster connections that make coming home feel like arriving somewhere that knows your name.",
          },
        ],
      },
      {
        heading: "Community Events and Local Businesses",
        eyebrow: "Community life",
        body: "Community engagement creates a sense of belonging. River Chase hosts events throughout the year that bring residents together and support local businesses.",
        bulletPoints: [
          "Annual neighborhood BBQ for mingling and entertainment",
          "Holiday festivals that bring the community together for seasonal celebrations",
          "Farmers markets showcasing local produce and artisan crafts",
          "Grocery stores, diverse dining options, and essential services all within reach",
        ],
      },
    ],
  },
];

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
  const fromJournal = journalPosts.find((p) => p.slug === slug);
  if (fromJournal) {
    return {
      slug,
      eyebrow: fromJournal.eyebrow,
      title: fromJournal.title,
      dek: fromJournal.dek,
      imageSrc: fromJournal.imageSrc,
      imageAlt: fromJournal.imageAlt,
      category: fromJournal.category as "Market Insights" | "Explore",
      href: `/blog/${slug}`,
    };
  }
  return null;
}

export function findJournalPost(slug: string): JournalPost | null {
  return journalPosts.find((p) => p.slug === slug) ?? null;
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
  for (const p of journalPosts) {
    slugs.add(p.slug);
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
