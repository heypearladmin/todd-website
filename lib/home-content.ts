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

export type NeighborhoodFaq = {
  question: string;
  answer: string;
};

export type NeighborhoodDetails = {
  shortAnswer: string;
  overview: string;
  bestFor: string[];
  housing: string;
  lifestyle: string;
  commute: string;
  schools: string;
  prosAndCons: {
    pros: string[];
    cons: string[];
  };
  faqs: NeighborhoodFaq[];
  marketNotes: string;
};

export type Neighborhood = {
  slug: string;
  title: string;
  dek: string;
  vibe: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  details?: NeighborhoodDetails;
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
    details: {
      shortAnswer:
        "Gruene is one of the most distinctive and charming neighborhoods in the New Braunfels area — a genuine Texas Hill Country landmark with historic character, walkable streets, and a strong sense of place. It offers a lifestyle that most neighborhoods simply cannot replicate, though buyers should know that weekends bring crowds and privacy comes at a premium.",
      overview:
        "Gruene (pronounced \"Green\") sits at the northwestern edge of New Braunfels along the Guadalupe River, and it carries a kind of quiet confidence that comes from being the real thing. Founded by German immigrant Henry D. Gruene in the 1870s, the district retains much of its original character — a water tower, a general store turned restaurant, cotton gin ruins, and Gruene Hall, which has been hosting live music continuously since 1878 and holds the title of oldest dance hall in Texas. That history is not manufactured or curated for tourists. It just is.\n\nLiving in or near Gruene means waking up in a place people drive hours to visit. The Guadalupe River runs along the southern edge of the district, offering some of the best tubing in Central Texas and year-round access to one of the region's most beloved natural corridors. On a Tuesday morning, the streets are quiet, the air smells like cedar and river water, and the whole area feels like it belongs to the people who actually live here. On a Saturday in July, it belongs to everyone — which is either charming or exhausting depending on your perspective.\n\nHousing ranges from original historic bungalows in the core district to newer construction in the surrounding residential areas. The neighborhood attracts buyers who want character, a walkable main street, and proximity to nature without sacrificing modern conveniences. It is not the right fit for every buyer, but for the right buyer, there is nothing else quite like it in the region.",
      bestFor: [
        "Buyers who value historic character and architectural authenticity over new construction finishes",
        "Those who enjoy walkability, live music, and a genuine small-town main street",
        "River enthusiasts — tubing, kayaking, and swimming are steps from many properties",
        "People who appreciate a strong sense of community identity and local pride",
        "Buyers relocating from urban areas who want culture and charm without a big-city footprint",
        "Investors or second-home buyers looking for a market with proven tourism-driven demand",
      ],
      housing:
        "Housing in the Gruene area runs a wide spectrum. In the historic core, you will find original late 19th and early 20th century bungalows and cottages, some meticulously restored and others still waiting for their moment. These properties rarely come to market, and when they do, they move quickly — often above asking. Expect to pay $450,000 to $700,000 or more for a genuine historic home close to the district, depending on condition and lot size.\n\nRadiating outward from the historic center, the surrounding neighborhoods offer a mix of 1980s and 1990s ranch-style homes alongside newer construction from the 2000s and 2010s. These properties tend to sit on quarter-acre to half-acre lots and offer more square footage for the price, typically in the $350,000 to $550,000 range. Lot sizes in Gruene proper tend to be modest by Texas standards, but the mature tree canopy and established landscaping make them feel generous. Buyers accustomed to large suburban lots may find the trade-off worthwhile given the location and character. New construction is limited in the immediate area, which helps preserve the neighborhood's scale and feel.",
      lifestyle:
        "Gruene delivers a lifestyle that is genuinely hard to replicate. The Guadalupe River is not a backdrop — it is part of daily life. Residents tube, kayak, swim, and fish in it through the long Texas summers. The Gruene River Club and several local outfitters make river access easy, and on warm evenings, the sound of the river and live music from Gruene Hall carries across the neighborhood in a way that feels cinematic.\n\nThe main street along Hunter Road and Gruene Road is anchored by a small but excellent collection of restaurants and shops. Mozie's, the Gristmill River Restaurant, and Gruene Hall itself draw visitors from across the state, but locals use them too — and the Gruene Market Days, held the third weekend of each month, brings artisans, food vendors, and live music to the district year-round.\n\nDuring the week, the pace is genuinely relaxed. The tourist energy fades, and Gruene settles into something that feels more like a small Texas town than a destination. That contrast — vibrant on weekends, peaceful midweek — defines the rhythm of life here and is something most residents come to appreciate rather than merely tolerate.",
      commute:
        "Gruene sits along the northwestern edge of New Braunfels, which places it roughly 35 minutes from downtown San Antonio via Interstate 35 under normal traffic conditions. The drive to Austin runs closer to 50 minutes to an hour, depending on your destination and the time of day. I-35 is the primary corridor for both directions, and peak-hour congestion — particularly in the Austin direction — is a real consideration for daily commuters. Many Gruene-area residents work remotely or make the drive two to three times a week rather than daily, which softens the calculus considerably. The neighborhood's proximity to both cities without being fully absorbed by either is one of its defining qualities.",
      schools:
        "The Gruene area is served by Comal Independent School District, one of the more well-regarded districts in the greater San Antonio and Hill Country region. Comal ISD has seen consistent growth alongside the broader New Braunfels population boom and has maintained solid academic performance through that expansion. Elementary-age students in the Gruene area generally attend Goodwin Frazier Elementary, with students feeding into Canyon Middle School and Canyon High School for secondary grades. Canyon High has a strong reputation locally for academics, athletics, and extracurriculars. Families relocating from larger metro areas generally find Comal ISD to be a meaningful upgrade in school quality relative to comparable Texas suburban districts.",
      prosAndCons: {
        pros: [
          "Unmatched historic character and architectural authenticity in the Texas Hill Country region",
          "Direct access to the Guadalupe River for tubing, kayaking, and swimming",
          "Walkable main street with genuine restaurants, music, and community events",
          "Strong name recognition that supports property values and resale demand",
          "Quieter, more residential feel during the week despite weekend popularity",
          "Comal ISD schools with a solid academic track record",
        ],
        cons: [
          "Weekend crowds can be significant, especially in summer — parking and noise are real considerations",
          "Limited housing inventory in the historic core means competition can be intense when properties do list",
          "Price per square foot tends to run higher than comparable homes elsewhere in New Braunfels",
          "I-35 commute to Austin in particular can be frustrating during peak hours",
          "Older homes may carry deferred maintenance, septic systems, or renovation needs that add to total cost",
          "Short-term rental activity in parts of the neighborhood can affect the residential feel on busy weekends",
        ],
      },
      faqs: [
        {
          question: "Is Gruene too touristy to actually live in?",
          answer:
            "It depends on your tolerance for weekend activity and your work schedule. During the week, Gruene is genuinely quiet and residential. The crowds concentrate on weekends, particularly in summer and during events like Gruene Market Days. Most residents describe a clear midweek rhythm that feels nothing like the weekend tourist version of the neighborhood. If you work from home and keep a flexible schedule, you will find plenty of windows when Gruene feels entirely your own.",
        },
        {
          question: "Are there short-term rental restrictions in Gruene?",
          answer:
            "New Braunfels has been actively working through short-term rental regulations, and the rules have shifted over time. Some parts of the Gruene area are subject to city of New Braunfels STR rules, while others fall under county jurisdiction. Before purchasing with STR intent — or if STR activity in the neighborhood concerns you as a buyer — it is worth reviewing the current ordinance with your agent and confirming the specific zoning of any property you are considering.",
        },
        {
          question:
            "What is the difference between buying in the historic core versus the surrounding Gruene area?",
          answer:
            "The historic core properties — within walking distance of Gruene Hall, the Gristmill, and the river — carry a premium and offer genuine historic architecture. They tend to be smaller, older, and require more attention. The surrounding residential areas offer newer construction, more square footage, and lower price points, but without the same walkability or historic character. Both have real appeal; it comes down to whether you are buying the lifestyle of being in Gruene or simply near it.",
        },
        {
          question:
            "How does the Guadalupe River affect the neighborhood — flooding, insurance, that kind of thing?",
          answer:
            "Flood zone designation varies significantly by specific property in the Gruene area. Some parcels close to the river sit in mapped flood zones and require flood insurance, which adds to carrying costs and should factor into your purchase decision. Properties further from the river bank are often outside designated flood zones, but it is always worth pulling the FEMA flood map and discussing insurance implications with an independent insurance agent before making an offer.",
        },
        {
          question: "Is Gruene a good investment from a resale standpoint?",
          answer:
            "Historically, yes. The combination of genuine historic scarcity — you cannot build more Gruene — strong tourism-driven name recognition, and steady population growth in the broader New Braunfels area has supported property values well. Historic core properties in particular tend to hold value through market softening because supply is inherently constrained. That said, no neighborhood is immune to broader market cycles, and buyers should evaluate any property on its own merits rather than relying on the Gruene name alone.",
        },
      ],
      marketNotes:
        "The Gruene market operates with a scarcity dynamic that separates it from most of New Braunfels. Historic core properties rarely turn over, and when they do, well-priced listings attract multiple offers quickly. The broader surrounding area has seen the same moderating trends as the rest of Central Texas — rising rates through 2023 and 2024 took some heat out of the market — but demand in Gruene has remained more resilient than in newer subdivisions. Buyers should expect to move decisively when the right property appears. The days of extended negotiation on desirable Gruene properties are more exception than rule, even in a cooled broader market.",
    },
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
    details: {
      shortAnswer:
        "Downtown New Braunfels offers a rare combination of walkable small-city living, genuine Hill Country character, and a growing food and culture scene — all within a 30-minute drive of San Antonio. For buyers who want a real neighborhood with sidewalks, history, and something to do on a Tuesday evening, it delivers in a way that newer master-planned communities simply cannot.",
      overview:
        "Downtown New Braunfels is the original heart of a city that German settlers founded in 1845, and that history is still very much alive in the architecture, the street grid, and the community culture. Main Plaza anchors the neighborhood — a genuine town square surrounded by local restaurants, boutique shops, and a year-round calendar of events that draws residents out of their homes and onto the streets in a way you rarely see in suburban Texas.\n\nThe housing stock here is genuinely mixed. You'll find late-19th and early-20th century craftsman bungalows and limestone cottages sitting a few blocks from newer townhomes and low-rise condos built to meet demand from buyers who want walkability without giving up modern finishes. It is not a sanitized historic district — it is a living neighborhood, which means some blocks are impeccably maintained and others are mid-renovation. That variety is part of the appeal, and it creates real opportunity for buyers willing to look closely.\n\nLanda Park, one of the finest municipal parks in Central Texas, sits at the neighborhood's edge with its spring-fed pool, paddleboats, miniature railroad, and direct access to the Comal River. Schlitterbahn — the iconic waterpark that put New Braunfels on the national map — is a short walk or bike ride away. The Comal River itself flows through the area, cold and clear year-round, and tube rentals launch within walking distance of many downtown streets. For a neighborhood in a city of roughly 100,000 people, the outdoor access is genuinely exceptional.\n\nThe food and coffee scene has matured significantly in recent years. Independent cafes, wine bars, farm-to-table restaurants, and weekend farmers markets have filled in around the historic German restaurants and beer gardens that have been anchors for decades. Downtown New Braunfels today feels like a small city that has figured out what it wants to be — and buyers are noticing.",
      bestFor: [
        "Buyers who prioritize walkability and want to walk to dinner, coffee, or the farmers market without getting in a car",
        "Commuters to San Antonio who want a real neighborhood rather than a subdivision, with a manageable 30-minute drive south",
        "History and architecture enthusiasts drawn to limestone cottages, craftsman bungalows, and a genuine town center",
        "Buyers looking for rental or short-term rental potential in a high-traffic tourist destination",
        "Empty nesters and downsizers ready to trade square footage for lifestyle and proximity to culture and outdoor recreation",
        "First-time buyers who want the energy of an urban environment at a price point that remains accessible relative to Austin",
      ],
      housing:
        "Downtown New Braunfels offers more housing variety than most buyers expect. The older residential streets — particularly those within a few blocks of Main Plaza and along the Comal River — feature historic limestone homes, craftsman bungalows, and early-20th century cottages, typically on modest lots with mature trees and front porches. These properties range from move-in ready with tasteful renovations to full gut-rehab candidates, and they price roughly between $350,000 and $550,000 depending on condition and proximity to the plaza.\n\nNewer construction has filled in over the past decade in the form of townhomes, small-lot single-family homes, and low-rise condos. These tend to run $300,000 to $500,000 and offer modern layouts, low maintenance, and strong rental demand given the area's tourism draw. Lot sizes in the historic core are small by Texas standards — typically 4,000 to 8,000 square feet — which suits buyers looking for a lock-and-leave lifestyle. Garage parking is not always a given on older properties, so buyers coming from suburban settings should factor that in early.",
      lifestyle:
        "Life in downtown New Braunfels has a rhythm that feels genuinely different from the master-planned communities that have grown up around the city. On weekend mornings, the farmers market draws a mix of locals and visitors to Main Plaza. Friday evenings bring live music to the beer gardens and restaurant patios along San Antonio Street and Castell Avenue. The Comal River is cold enough to tube comfortably from May through September, and several outfitters within walking distance handle everything from tube rentals to shuttle runs.\n\nLanda Park offers 51 acres of green space with a spring-fed swimming pool, disc golf, tennis, a small lake with paddleboats, and the famous miniature railroad that has been running since 1951. For a neighborhood park, it is remarkably well-developed. The broader outdoor lifestyle extends easily to Canyon Lake (about 20 minutes west) and Guadalupe River State Park for kayaking, hiking, and camping.\n\nThe food scene deserves specific mention. Restaurants like Myron's Prime Steakhouse, Huisache Grill, and a growing collection of independent coffee shops and wine bars have added real depth to a dining culture that previously leaned heavily on German tradition. The Wurstfest grounds host the famous November festival but also serve as event space throughout the year. This is a neighborhood where there is almost always something happening within walking distance.",
      commute:
        "Downtown New Braunfels sits at a genuine geographic sweet spot between Texas's two largest metro areas. San Antonio is approximately 30 minutes south via IH-35, making a downtown commute realistic for most professional roles. Austin runs closer to 50 minutes under normal conditions, though peak-hour traffic on IH-35 through San Marcos and Kyle can stretch that to 70 minutes or more — something Austin-bound commuters should test drive on a Tuesday morning before committing. The New Braunfels area does not currently have commuter rail, so driving is the primary option. Within the neighborhood itself, a car is often unnecessary for daily errands, dining, and recreation.",
      schools:
        "Downtown New Braunfels is served by Comal Independent School District, one of the consistently higher-performing districts in the greater San Antonio region. Walnut Springs Elementary and New Braunfels Middle School serve the immediate downtown area, with New Braunfels High School as the primary high school. Comal ISD has received strong marks for academic performance and extracurricular programming, and the district's growth has prompted ongoing investment in facilities. Families with school-age children should confirm current attendance boundaries directly with Comal ISD, as boundary adjustments have occurred in recent years to manage enrollment growth across the district.",
      prosAndCons: {
        pros: [
          "Genuine walkability rare in Central Texas — coffee, dinner, and the farmers market without a car",
          "Landa Park and Comal River access are exceptional amenities for an urban neighborhood",
          "Strong short-term rental demand driven by consistent tourist traffic to Schlitterbahn and the river",
          "Historic character and architectural variety that newer developments cannot replicate",
          "Active community calendar — plaza events, Wurstfest, farmers markets — creates real neighborhood energy",
          "Comal ISD is a well-regarded district with strong academic performance",
        ],
        cons: [
          "IH-35 traffic to Austin can be significant during peak hours, making that commute less predictable",
          "Older homes may carry deferred maintenance, foundation considerations, or aging systems that require careful inspection",
          "Parking is limited on some historic streets — garages are not standard on older properties",
          "Tourist activity peaks in summer and during Wurstfest, bringing crowds and noise to central streets",
          "Inventory in the most walkable blocks is thin and moves quickly, which creates competitive offer situations",
          "Short-term rental regulations are subject to ongoing local policy discussion — buyers should verify current rules before purchasing with that intent",
        ],
      },
      faqs: [
        {
          question: "Are short-term rentals allowed in downtown New Braunfels?",
          answer:
            "New Braunfels has a short-term rental ordinance that regulates STRs within city limits, including registration requirements and certain restrictions by zoning classification. The rules have evolved in recent years and continue to be a topic of local policy discussion. If STR income is a factor in your purchase decision, verify the current regulations and your specific property's zoning with the City of New Braunfels before closing.",
        },
        {
          question:
            "How competitive is the market for walkable downtown properties?",
          answer:
            "Inventory in the most desirable downtown blocks — particularly historic homes within walking distance of Main Plaza and Landa Park — tends to be limited and sells relatively quickly when priced correctly. Well-maintained properties at fair market value routinely see multiple offers. Working with a local agent who tracks downtown specifically, and being prepared to move decisively, matters more here than in outlying subdivisions.",
        },
        {
          question:
            "Is flooding a concern in the downtown area near the Comal River?",
          answer:
            "Parts of the downtown area near the Comal and Guadalupe Rivers do fall within FEMA flood zones, and New Braunfels has experienced significant flood events historically. This is not a reason to avoid the area, but it is something to investigate thoroughly. Your agent should pull the flood map for any specific property you're considering, and a thorough inspection plus flood insurance review should be standard practice for anything near the river corridors.",
        },
        {
          question:
            "What is the typical lot size and square footage for downtown homes?",
          answer:
            "Historic properties in the downtown core typically sit on smaller lots — often 4,000 to 8,000 square feet — with home sizes ranging from roughly 1,000 to 2,200 square feet for older single-family homes. Newer townhomes and condos are similarly compact by suburban standards. If you are coming from a newer subdivision expecting a large yard and a three-car garage, downtown living requires some expectation-setting, but many buyers find the tradeoff well worth it.",
        },
        {
          question:
            "How does downtown New Braunfels feel compared to the newer master-planned communities like Veramendi or Vintage Oaks?",
          answer:
            "They serve genuinely different lifestyles. Downtown has age, walkability, historic character, and built-in community activity — but smaller lots, older infrastructure, and more variability in home condition. Veramendi and Vintage Oaks offer newer construction, larger lots, amenity centers, and more predictable finishes, but require a car for everything and lack the organic neighborhood energy of the historic core. Neither is objectively better; the right choice depends on how you actually want to live day-to-day.",
        },
      ],
      marketNotes:
        "Downtown New Braunfels has held its value well through the broader Central Texas market correction of 2023-2024. The combination of limited inventory in the historic core, consistent tourism-driven demand, and the neighborhood's genuine lifestyle appeal has kept prices relatively stable in the $300,000-$600,000 range. Properties in the most walkable locations — within a half-mile of Main Plaza — tend to command a premium over comparable square footage further out. Days on market have moderated from the frenzied 2021-2022 pace, giving buyers more time for due diligence, but well-priced homes in desirable locations still move quickly. The ongoing growth of New Braunfels as a whole continues to support downtown values.",
    },
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
    details: {
      shortAnswer:
        "Canyon Lake is a peaceful Hill Country reservoir community that offers some of the best waterfront living in Central Texas. Whether you're looking for a full-time lakefront retreat, a weekend getaway, or a quiet inland home with Hill Country views, Canyon Lake delivers a lifestyle that's hard to find this close to San Antonio and Austin.",
      overview:
        "Canyon Lake sits about 15 miles west of New Braunfels along the Guadalupe River, where an 8,240-acre reservoir anchors one of the most sought-after outdoor living communities in the Texas Hill Country. The lake was created in 1964 when the Army Corps of Engineers completed Canyon Dam, and the surrounding area has grown steadily ever since into a layered mix of full-time residents, retirees, remote workers, and vacation homeowners who all share one thing: they came here for the water and the quiet.\n\nUnlike New Braunfels or San Antonio, Canyon Lake does not have a traditional downtown or a dense commercial core. What it has instead is a network of coves, peninsulas, and ridgelines that give nearly every neighborhood its own character. Lakefront properties command elevated prices and strong demand. Inland homes on larger lots offer affordability and Hill Country serenity without the waterfront premium. Vacation rentals are common throughout the area, giving investors an active market alongside primary homebuyers.\n\nThe community draws people who want room to breathe. Neighbors wave when you pass. Deer wander through yards at dusk. Boats go out early and come back sunburned. It is the kind of place where people arrive for a weekend and start looking at listings by Sunday afternoon. For those who make the move permanent, Canyon Lake tends to hold them. The pace is slower here, and that is exactly the point.",
      bestFor: [
        "Buyers seeking waterfront or water-access living in the Texas Hill Country",
        "Retirees and remote workers who want rural peace within driving distance of two major metros",
        "Investors looking for short-term rental or vacation property with strong demand",
        "Families who prioritize outdoor lifestyle, boating, and open space over walkability",
        "Buyers priced out of lakefront markets closer to Austin who still want true waterfront living",
        "Anyone trading city congestion for elbow room, Hill Country views, and a slower pace",
      ],
      housing:
        "Canyon Lake's housing market splits cleanly between waterfront and inland, and the price gap between those two categories is significant. Lakefront estates and water-access homes typically range from $350,000 to well over $1 million, depending on lot size, dock access, water depth, and views. These properties sit on some of the most coveted real estate in Comal County, and they rarely stay on the market long when priced fairly.\n\nInland homes throughout the surrounding Hill Country give buyers a more accessible entry point, generally falling in the $250,000 to $500,000 range. Many sit on half-acre to multi-acre lots with live oak canopy, Hill Country topography, and the kind of space that is genuinely difficult to find this close to San Antonio. Construction styles range from classic limestone and cedar ranch homes to newer builds with metal roofs and modern interiors. Vacation cabins and short-term rental properties are woven throughout the community, and many buyers purchase with a rental strategy in mind from day one.",
      lifestyle:
        "Life at Canyon Lake is organized around the water and the outdoors. The reservoir offers 80 miles of shoreline with multiple public parks managed by the Army Corps of Engineers, including Canyon Lake Park, Cranes Mill Park, and Comal Park, each offering boat ramps, swimming areas, and day-use access. Boating, fishing, kayaking, and paddleboarding are everyday activities here, not weekend novelties.\n\nThe Guadalupe River below Canyon Dam draws tubers and swimmers during warmer months, and the surrounding Hill Country terrain gives hikers and mountain bikers options throughout the year. A small marina district near the dam offers boat rentals, fuel, and basic supplies. For dining and shopping, Canyon Lake residents typically head into New Braunfels or Gruene, though local options like Crane's Mill and a handful of lakeside restaurants provide solid day-to-day convenience. The pace here is genuinely relaxed. People are not rushing. That is a feature, not a limitation.",
      commute:
        "Canyon Lake sits roughly 45 minutes from downtown San Antonio via FM 306 and Highway 281, making it a realistic option for San Antonio commuters willing to trade city proximity for lake living. The drive to Austin runs approximately one hour under normal conditions, depending on which part of the city you are heading to. Remote and hybrid workers have embraced Canyon Lake enthusiastically because even a two or three day per week commute to either city is manageable. The roads through the Hill Country are scenic rather than congested, and the tradeoff of a longer drive for a waterfront or rural property with genuine space tends to feel like a fair deal for most buyers who land here.",
      schools:
        "Canyon Lake area students are served primarily by Comal Independent School District, one of the more well-regarded districts in the region. Comal ISD has consistently earned strong academic ratings from the Texas Education Agency and is known for solid athletics, arts programs, and a community-oriented culture. Depending on where in the Canyon Lake area a home is located, students may attend Rebecca Creek Elementary, Mountain Valley Middle School, or Canyon Lake High School. Buyers with children should verify school assignments by address, as attendance zones can vary within the broader Canyon Lake community. Private schooling options are available in New Braunfels, roughly 20 to 25 minutes away.",
      prosAndCons: {
        pros: [
          "80 miles of shoreline with multiple Army Corps public parks and boat ramps",
          "Genuine Hill Country scenery with views, live oaks, and open space",
          "Strong short-term rental market for investors",
          "Less traffic and congestion than New Braunfels or San Antonio suburbs",
          "Comal ISD schools with strong academic reputation",
          "Accessible from both San Antonio and Austin for hybrid commuters",
          "Wide range of price points from modest inland homes to luxury lakefront estates",
        ],
        cons: [
          "Limited walkable commercial amenities or dining options on the lake itself",
          "Most errands and restaurant options require a drive into New Braunfels",
          "Waterfront properties move quickly and competition can be intense at any price point",
          "Some areas have HOA restrictions or limitations on short-term rentals",
          "Rural roads and limited public transit mean car dependency is absolute",
          "Cell and internet service can be inconsistent in more remote coves and ridgeline areas",
        ],
      },
      faqs: [
        {
          question: "Can I operate a short-term rental at Canyon Lake?",
          answer:
            "Many Canyon Lake properties are used as short-term rentals and the market for vacation stays on the lake is active year-round. That said, rules vary depending on whether a property sits in a jurisdiction with STR regulations, or within an HOA that limits or prohibits rentals. Always verify rental restrictions before purchasing if that is part of your plan.",
        },
        {
          question:
            "What is the difference between waterfront and water-access at Canyon Lake?",
          answer:
            "Waterfront means the property sits directly on the lake with the shoreline as part of the lot. Water-access typically means a nearby community boat ramp or shared dock gives lake access without direct frontage. The price difference between the two can be substantial, and waterfront lots with good dock potential are significantly more valuable.",
        },
        {
          question: "How is the fishing at Canyon Lake?",
          answer:
            "Canyon Lake has a solid reputation for largemouth and smallmouth bass, striped bass, white bass, catfish, and crappie. The cooler, spring-fed Guadalupe River water below the dam also supports one of the few Texas trout fisheries below Canyon Dam, managed seasonally by Texas Parks and Wildlife.",
        },
        {
          question:
            "Are there public beach or swimming areas at Canyon Lake?",
          answer:
            "Yes. The Army Corps of Engineers maintains several parks around the lake with designated swimming areas, picnic facilities, and boat ramps. Comal Park on the north shore is one of the most popular spots for day-use swimming and is open to the public.",
        },
        {
          question: "How far is Canyon Lake from New Braunfels?",
          answer:
            "Canyon Lake is approximately 15 miles west of New Braunfels, about a 20 to 25 minute drive via FM 306. New Braunfels provides the closest concentration of grocery stores, restaurants, medical facilities, and shopping for most Canyon Lake residents.",
        },
      ],
      marketNotes:
        "Canyon Lake's real estate market has remained resilient through broader market shifts, driven by persistent demand from San Antonio buyers, Austin refugees, and investors chasing short-term rental income. Waterfront inventory is chronically tight, and well-priced lakefront properties with dock access or buildable waterfront lots attract multiple offers quickly. Inland homes have seen some softening in pace compared to the 2021 and 2022 peak years, giving buyers slightly more negotiating room. Prices in the $300,000 to $450,000 inland range are moving steadily, while properties above $700,000 tend to sit longer and require precise pricing. The vacation rental demand that spiked post-pandemic has leveled somewhat but remains a meaningful driver of buyer interest throughout the community.",
    },
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
    details: {
      shortAnswer:
        "Vintage Oaks is one of the most sought-after master-planned communities in the Texas Hill Country, offering large custom lots, resort-style amenities, and a strong sense of neighborhood that is genuinely rare at this price point. For buyers seeking space, privacy, and community in equal measure — without sacrificing access to San Antonio or Austin — it delivers on all fronts.",
      overview:
        "Vintage Oaks sits in the rolling hills northwest of New Braunfels, straddling the line between quiet Hill Country retreat and well-connected suburban living. Developed by Vintage Oaks at the Vineyard, the community spans several thousand acres and has grown steadily into one of the most recognized addresses in Comal County. What makes it stand apart from other master-planned communities in the region is the combination of serious land — lots range from one to ten acres — with resort-caliber amenities that genuinely get used. The canopy oaks are not incidental; mature live oaks define the character of the neighborhood, shading cul-de-sacs and framing custom home facades in a way that newer developments simply cannot replicate. Homes here are predominantly custom-built, meaning no two look alike, and architectural standards enforced by a strong HOA keep the overall aesthetic cohesive — Hill Country limestone, metal roofs, cedar accents — without feeling cookie-cutter. Gated sections within the community offer an additional layer of privacy for buyers who want it. The result is a neighborhood that feels more like a private resort than a subdivision, and the community's reputation reflects that. Buyers tend to stay, resale demand is consistent, and the Comal ISD school district is a meaningful draw for families with school-age children.",
      bestFor: [
        "Buyers seeking large custom lots (1-5+ acres) with Hill Country character and mature oak tree cover",
        "Families prioritizing Comal ISD schools with strong academic and extracurricular programs",
        "Remote workers or semi-retirees who want resort amenities at home without giving up highway access",
        "Buyers relocating from Austin or San Antonio who want more land and lower density without a long rural commute",
        "Second-home or weekend buyers looking for a permanent-feeling Hill Country retreat",
        "Move-up buyers ready to build or purchase a custom home in the $600K-$1.2M range",
      ],
      housing:
        "Vintage Oaks is almost entirely custom construction, which means the housing stock is diverse in layout and finish level but consistent in quality. Lot sizes start around one acre and extend to ten or more in some sections, giving homeowners genuine privacy and room for pools, guest casitas, workshops, or simply open sky. Architectural styles lean into Hill Country vernacular — limestone and stucco exteriors, standing-seam metal roofs, covered porches built for the Texas evening — though you will find contemporary interpretations as well. Square footage typically ranges from 2,500 to over 5,000 square feet, with four- and five-bedroom floor plans common among family buyers. Price points run from the low $500Ks for smaller lots with production-custom builds up through $1.5M and beyond for fully custom estates on premium acreage. The resale market tends to move steadily; inventory is not always plentiful, and well-priced homes in desirable sections attract serious buyers quickly. Buyers willing to purchase a lot and build can still find opportunities, though available lots have become less common as the community has matured.",
      lifestyle:
        "Life in Vintage Oaks revolves around the outdoors and the amenities the HOA has built to support it. The community clubhouse anchors a resort-style complex that includes multiple pools — including a lazy river — a well-equipped fitness center, sports courts for tennis and pickleball, and a sand volleyball court. Miles of walking and hiking trails wind through the natural Hill Country terrain, connecting neighborhoods to green space and viewpoints that remind you why people build out here in the first place. The community hosts regular events — holiday gatherings, food truck nights, fitness classes — that give the neighborhood a genuine social fabric. Outside the gates, Vintage Oaks is positioned well for Hill Country living. Gruene Historic District is a short drive, with its dance hall, river tubing, and local restaurants drawing both residents and visitors. Canyon Lake is accessible for boating and fishing. New Braunfels proper offers H-E-B, local dining, the Comal and Guadalupe rivers, and the broader amenities of a fast-growing city without the congestion of the metro. The pace of life here is unhurried, but you are never far from what you need.",
      commute:
        "Vintage Oaks sits off FM 306, which feeds directly to I-35 — the primary corridor connecting New Braunfels to both metro areas. San Antonio is approximately 40 minutes south under normal traffic conditions, making the community viable for professionals commuting into the city two or three days a week. Austin runs about 50 to 55 minutes north on I-35, though rush-hour variability on that corridor is a real factor buyers should account for. Many Vintage Oaks residents work remotely or on hybrid schedules, and the neighborhood's infrastructure — reliable internet options are available — supports that lifestyle well. The San Marcos Regional Airport is roughly 20 minutes away for private flyers.",
      schools:
        "Vintage Oaks is served by Comal Independent School District, one of the more highly regarded districts in the Texas Hill Country region. Comal ISD has posted consistent academic ratings and has grown its facilities and programs alongside the rapid residential growth of the area. Elementary students in Vintage Oaks typically attend Johnson Ranch Elementary, with Canyon Middle School and Canyon High School serving older grades. Canyon High has a strong reputation for academics, athletics, and fine arts programs. For families, Comal ISD is a meaningful part of the value proposition of buying in this community — it consistently outperforms neighboring districts on state accountability measures and offers the extracurricular depth that draws competitive families.",
      prosAndCons: {
        pros: [
          "Large lots with genuine privacy and mature Hill Country oak canopy",
          "Resort-style amenities that residents actively use — pools, trails, fitness, courts",
          "Strong HOA that maintains community standards and property values",
          "Comal ISD schools with a solid academic and extracurricular track record",
          "Custom architecture with no two homes alike, meaningful curb appeal throughout",
          "Gated sections available for buyers who prioritize additional security and privacy",
          "Strong resale demand and consistent value appreciation",
        ],
        cons: [
          "Distance from New Braunfels proper means most errands require a 15-20 minute drive",
          "HOA fees are meaningful and buyers should review CC&Rs carefully before purchase",
          "Lot inventory has tightened as the community has matured — fewer build opportunities",
          "I-35 traffic variability affects Austin commuters, particularly during peak hours",
          "Property taxes in Comal County, while competitive for the region, reflect the premium land and home values",
          "The community's size can feel sprawling — getting to know your neighbors may take intentional effort",
        ],
      },
      faqs: [
        {
          question:
            "Are there still lots available to build on in Vintage Oaks?",
          answer:
            "Available lots have become less common as the community has grown, but they do still come to market. Working with a local agent who tracks the community closely is the best way to identify lot opportunities before they are broadly listed. Some buyers also approach existing landowners directly in sections they are targeting.",
        },
        {
          question:
            "What are the HOA fees in Vintage Oaks, and what do they cover?",
          answer:
            "HOA fees vary depending on the section and lot size, but generally fall in the range of $800-$1,200 annually for standard sections, with some gated areas carrying additional assessments. Fees cover access to the full amenity complex — pools, fitness center, trails, sports courts, and community events — as well as common area maintenance and community management. Reviewing the specific HOA documents for any home or lot before purchase is always recommended.",
        },
        {
          question: "Is Vintage Oaks truly gated, or only partially?",
          answer:
            "The community has both gated and non-gated sections. Several neighborhoods within Vintage Oaks feature controlled access entry, while others are open to through traffic. Buyers who prioritize a fully gated experience should confirm the specific section's access setup with their agent before making an offer.",
        },
        {
          question:
            "How does Vintage Oaks compare to Veramendi or Creekside for families?",
          answer:
            "Vintage Oaks is the right fit for buyers who prioritize acreage, privacy, and a Hill Country setting over walkability or proximity to urban amenities. Veramendi and Creekside offer closer access to New Braunfels proper and tend to have smaller lots at lower price points. Vintage Oaks trades some convenience for significantly more land, better views, and a resort-community feel that the closer-in neighborhoods do not replicate.",
        },
        {
          question:
            "What internet and connectivity options are available?",
          answer:
            "Connectivity has improved meaningfully in Vintage Oaks as the community has grown. Fiber and high-speed cable options are available in most sections, making the neighborhood viable for remote workers and those who depend on reliable upload speeds. Buyers should verify service availability for a specific address, as coverage can vary by section within the larger community.",
        },
      ],
      marketNotes:
        "Vintage Oaks has demonstrated consistent demand through multiple market cycles, a reflection of the limited supply of large-lot luxury inventory in the Hill Country corridor. Median prices have appreciated steadily, and the community's position at the upper end of the New Braunfels market means it attracts a buyer pool that is largely insulated from rate sensitivity compared to entry-level segments. Days on market have normalized from the pandemic-era pace, and well-priced homes in desirable sections still move with relative speed. Buyers entering the market here should expect limited negotiating room on standout properties and should be prepared to act decisively. The custom nature of the housing stock also means price-per-square-foot comparisons require careful calibration — finish level, lot size, and views vary considerably between homes at similar list prices.",
    },
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
    details: {
      shortAnswer:
        "Veramendi is a well-planned, attractively priced newer community in New Braunfels that offers modern construction, strong amenities, and easy access to both San Antonio and Austin. For families and first-time buyers seeking Hill Country lifestyle without the premium price tag of older established neighborhoods, it is a genuinely compelling option.",
      overview:
        "Veramendi sits on the northwest edge of New Braunfels, carved out of the rolling Hill Country terrain that has made this corridor one of the fastest-growing in Texas. The community takes its name from Juan Martin de Veramendi, a prominent figure in early Texas history and the father-in-law of Jim Bowie — a nod to the deep roots this region carries even as it grows forward.\n\nWhat sets Veramendi apart from many master-planned developments is the intentionality behind the land plan. Rather than clearing everything flat, the developers worked around existing creek corridors, natural draws, and native vegetation to create a community that actually feels like it belongs to the Hill Country. Trails wind through the development and connect to open space, making it easy to walk or bike without ever loading into a car.\n\nThe homes here are newer construction — most built within the last several years — with multiple builders represented across different sections. Buyers can find everything from production homes with good standard finishes to more customized spec builds, depending on which phase and builder they are looking at. The price range generally sits between the low $300Ks and the mid-$600Ks, which makes Veramendi one of the more accessible entry points into the New Braunfels market without sacrificing quality or location.\n\nThe community is still actively developing, which means buyers who get in now are purchasing into a neighborhood that will continue to mature and appreciate as infrastructure and amenities come fully online.",
      bestFor: [
        "Families with school-age children looking for newer construction in Comal ISD",
        "First-time buyers seeking Hill Country lifestyle at a more accessible price point",
        "San Antonio commuters who want suburban space without a grueling drive",
        "Remote workers who need a comfortable home base with outdoor access close by",
        "Move-up buyers coming from older or smaller homes who want modern layouts and finishes",
        "Buyers who value trails, parks, and community amenities built into the neighborhood design",
      ],
      housing:
        "Veramendi offers a range of home styles that lean toward contemporary and transitional design — clean lines, open floor plans, and the kind of kitchen and living spaces that reflect how people actually use homes today. Lot sizes vary across sections, with some interior lots running compact and efficient while others back up to natural areas or creek buffers and offer more breathing room.\n\nEntry-level homes start in the low-to-mid $300Ks, typically offering three bedrooms and two bathrooms in the 1,600-2,000 square foot range. Moving up the price ladder, buyers in the $400K-$500K range can access four-bedroom homes with dedicated offices, larger primary suites, and upgraded finish packages. The upper end of the community, approaching $600K and above, tends to include larger lots, custom elevation options, and more premium interior selections.\n\nMultiple builders are active in Veramendi, which gives buyers the ability to compare construction styles, warranty programs, and design center options before committing. Because the community is still in active build-out phases, some buyers also have the option to purchase from a builder directly with a degree of personalization, rather than buying fully finished inventory.",
      lifestyle:
        "Life in Veramendi is oriented around the outdoors without demanding it. The trail system that threads through the community connects residents to pocket parks and natural open space, making a morning walk or an after-dinner bike ride with kids genuinely easy. The resort-style pool serves as a natural social hub during the long Texas summers, and the playgrounds scattered through the neighborhood mean younger children have places to land close to home.\n\nThe planned mixed-use village center — still coming online as development continues — is designed to bring everyday conveniences like coffee, dining, and retail within walking or biking distance of the homes. That kind of walkable core is rare in suburban Texas developments and, when fully realized, will meaningfully change the daily texture of life here.\n\nDowntown New Braunfels is just a short drive away, which means access to the Saturday farmers market, Gruene Historic District, local restaurants along the Comal River, and the broader social fabric of one of Texas's most livable mid-sized cities. Schlitterbahn, the Comal River, and Canyon Lake are all within easy reach for weekend recreation.",
      commute:
        "Veramendi's location on the northwest side of New Braunfels puts it in a strong position for commuters in both directions. San Antonio is approximately 30 minutes south via IH-35, making it realistic for daily office commutes without the kind of soul-crushing traffic that plagues larger metros. Austin runs about 50 minutes north under normal conditions — longer during peak hours, but manageable for hybrid schedules. New Braunfels itself sits near the midpoint of the Austin-San Antonio corridor, which also means residents have flexibility if their job situation changes or they work with clients in both cities.",
      schools:
        "Veramendi is served by Comal ISD, one of the more consistently well-regarded school districts in the greater San Antonio region. The district has expanded its facilities in step with New Braunfels's growth, adding campuses and programs to keep pace with incoming families. Elementary, middle, and high school assignments for Veramendi homes generally fall within newer facilities that reflect the district's investment in the northwest growth corridor. Comal ISD also offers a range of specialty programs and extracurriculars that give families options beyond the standard track. Buyers should confirm current campus assignments directly with the district, as zoning in active-growth areas can shift as new schools open.",
      prosAndCons: {
        pros: [
          "Newer construction with modern layouts and current building standards",
          "More affordable entry point than comparable Hill Country communities",
          "Thoughtful land plan that preserves natural creek corridors and green space",
          "Strong trail and parks infrastructure built into the community from the start",
          "Comal ISD schools with newer facilities serving the northwest corridor",
          "Convenient location — close to downtown New Braunfels and manageable commutes both directions",
          "Active community with a resort pool and growing social infrastructure",
          "Multiple builders present, giving buyers comparison options and some customization potential",
        ],
        cons: [
          "Community is still in active build-out, so some sections feel incomplete and construction traffic is ongoing",
          "The mixed-use village center is planned but not yet fully realized",
          "Newer neighborhood means less established tree canopy compared to older communities",
          "IH-35 corridor growth means traffic on local connector roads is increasing",
          "HOA fees and builder premiums can add to the true cost of ownership beyond the base price",
          "Austin commute at 50 minutes is manageable but not short, especially on peak traffic days",
        ],
      },
      faqs: [
        {
          question:
            "Is Veramendi still being built, or is it mostly established?",
          answer:
            "Veramendi is still in active development with multiple phases underway. Some sections have mature streetscapes and established residents, while others are in earlier build-out stages. This means buyers can still purchase new construction directly from builders in certain sections, which comes with warranty coverage and some customization options.",
        },
        {
          question:
            "How does Veramendi compare to Vintage Oaks in terms of price and feel?",
          answer:
            "Vintage Oaks sits at a higher price point — generally starting above $500K and running well past $1M for larger custom homes — and has an older, more established feel with a pronounced Hill Country acreage aesthetic. Veramendi is younger, more suburban in density, and more accessible in price. It is a different product for a different buyer, not a lesser one.",
        },
        {
          question: "What builders are building in Veramendi?",
          answer:
            "Several production and semi-custom builders have been active in Veramendi across different phases. The mix can change as phases sell out and new ones open. Touring the community's active model homes is the best way to see who is currently building, what their base packages include, and what the upgrade paths look like.",
        },
        {
          question:
            "Are there resale homes available in Veramendi, or only new construction?",
          answer:
            "Both exist. Earlier phases have resale inventory from homeowners who purchased in prior years, which can offer buyers a move-in-ready home without the wait or builder contract process. Resale pricing reflects current market conditions rather than builder base pricing, so it is worth comparing both options carefully.",
        },
        {
          question: "What are the HOA fees like in Veramendi?",
          answer:
            "HOA fees in Veramendi cover the resort pool, trail maintenance, parks, and common area upkeep. Rates can vary slightly by section and builder community within the larger development. Buyers should request the current HOA disclosure documents during any purchase process to understand the full fee structure and what is included.",
        },
      ],
      marketNotes:
        "Veramendi has benefited from the same underlying demand that has driven New Braunfels's growth into one of the fastest-expanding cities in the country. Homes in the community have generally held value well relative to the broader Central Texas market softening seen in 2023-2024, in part because new construction inventory here is priced closer to builder cost than speculative highs. The $300K-$600K range remains one of the more active price bands in the New Braunfels market, driven by real demand from families and commuters rather than investor speculation. Buyers should expect modest negotiating room on spec inventory but limited flexibility on to-be-built contracts. Resale homes in earlier phases tend to move steadily when priced accurately against new construction alternatives.",
    },
  },
  {
    slug: "riverchase",
    title: "RiverChase",
    dek: "Limestone bluffs, slow river bends, and the kind of evenings where porch light, cicada song, and a slow Hill Country breeze all arrive at once. Quiet acreage minutes from town — upscale, easygoing, and built for the long stay.",
    vibe: "Hill Country river homes",
    href: "/neighborhoods/riverchase",
    imageSrc: "/images/insight-real-estate-trends.webp",
    imageAlt:
      "Aerial editorial photograph of a Hill Country residential neighborhood near New Braunfels with rolling oak canopy and soft late afternoon light.",
    details: {
      shortAnswer:
        "River Chase is one of the most sought-after addresses in the New Braunfels area for buyers who want acreage, custom construction, and genuine Hill Country seclusion without sacrificing convenience. With Guadalupe River access, large wooded lots, and a tight-knit HOA, it consistently delivers on the promise of the Texas Hill Country lifestyle at a premium-but-justified price point.",
      overview:
        "Tucked into the limestone bluffs above the Guadalupe River about fifteen minutes west of downtown New Braunfels, River Chase is the kind of neighborhood that makes buyers exhale when they first drive through the gate. This is not a master-planned subdivision with matching rooflines and postage-stamp yards. It is a low-density, custom-home community where lots run from one to five acres, the tree canopy is left largely intact, and white-tailed deer cross the road at dusk with zero concern for traffic.\n\nThe community spans a stretch of rugged Hill Country terrain in Comal County, with sections that border or access the Guadalupe River — one of the defining geographic and cultural features of this entire region. Homes here are custom-built, meaning you get genuine architectural variety: some are Texas limestone ranch houses, others are contemporary Hill Country designs with metal roofs and walls of glass facing the canyon. What they share is quality craftsmanship, generous square footage, and a sense that each property was designed to belong to its specific piece of land.\n\nRiver Chase has developed steadily over the past two decades into a mature, well-maintained community with a strong homeowners association that keeps the common areas, road infrastructure, and amenity access in good condition. It attracts a mix of established families, semi-retirees, remote professionals, and San Antonio or Austin commuters who want more land and more sky than the urban fringe can offer. The result is a neighborhood with a genuine sense of permanence and pride of ownership — the kind of place where neighbors know each other and take the community seriously.",
      bestFor: [
        "Buyers seeking large custom lots with privacy and mature trees in a gated or semi-gated Hill Country setting",
        "Families wanting Comal ISD schools combined with an acreage lifestyle",
        "Remote workers or semi-retirees drawn to the Guadalupe River, wildlife, and dark-sky evenings",
        "San Antonio or Austin commuters who want true Hill Country living within a practical drive",
        "Buyers upgrading from suburban subdivisions who are ready for custom construction and real land",
        "Nature-oriented households — birding, kayaking, hiking — who want that access woven into daily life",
      ],
      housing:
        "River Chase is defined by custom single-family homes on large lots, with most properties falling between one and five acres. You will not find townhomes, patio homes, or cookie-cutter production builds here. Home sizes typically range from around 2,400 square feet on the smaller end to well over 4,500 square feet for the larger estate-style properties, with three- and four-car garages common given the lot sizes and the practical realities of Hill Country living.\n\nArchitectural styles lean toward Texas traditional — think native limestone exteriors, wide covered porches, metal or composition roofs — alongside a growing number of contemporary Hill Country designs that emphasize clean lines, oversized windows, and indoor-outdoor flow. Prices in River Chase currently run from approximately $500,000 on the entry end for older or smaller homes on standard lots, up to $1.2 million and above for newer custom builds on premier lots with river views or direct Guadalupe River frontage. Lot values alone on the water can be substantial. The community has seen consistent appreciation driven by limited inventory, land scarcity, and sustained demand from the broader San Antonio and Austin metro areas. Sellers here rarely need to discount aggressively — well-presented homes move.",
      lifestyle:
        "Life in River Chase organizes itself around the land and the river. Residents have access to Guadalupe River frontage through the community's HOA-managed amenity area, making tubing, kayaking, fishing, and riverside picnicking part of the routine rather than a weekend trip. The river here is quieter and less commercialized than the stretch running through downtown New Braunfels — which is precisely the appeal.\n\nThe lots themselves create a lifestyle that is hard to replicate in a conventional subdivision. Large setbacks and mature tree cover mean you genuinely cannot see your neighbor's house from your back porch in many cases. Wildlife is a constant presence — whitetail deer, wild turkey, foxes, and a wide variety of birds are regular visitors, and the low light pollution creates genuinely remarkable night skies.\n\nFor dining, shopping, and everyday errands, downtown New Braunfels is about fifteen minutes east. The historic Gruene district — with Gruene Hall, Moody Gardens, and a cluster of good restaurants and boutiques — is even closer. Canyon Lake is a short drive west for boating and lake recreation. River Chase residents tend to use the city's amenities deliberately rather than constantly, which suits the neighborhood's unhurried tempo perfectly.",
      commute:
        "River Chase sits roughly fifteen minutes from downtown New Braunfels via FM 306, which connects cleanly to Interstate 35. From I-35, San Antonio's northern suburbs are approximately thirty to thirty-five minutes south, and downtown San Antonio is reachable in under forty minutes under normal conditions. Austin is roughly forty-five minutes to an hour north depending on traffic and your destination within the city. The community is well positioned for hybrid commuters — close enough to make regular office days manageable, far enough to feel entirely removed from the metro grind when you are home. The drive itself, through Hill Country terrain along FM 306, is genuinely pleasant rather than punishing.",
      schools:
        "River Chase is served by Comal Independent School District, one of the stronger public school systems in the greater San Antonio region. The district has earned a reputation for academic consistency, competitive extracurricular programs, and well-maintained facilities driven by the area's strong tax base and community investment in education. Students in River Chase typically feed into Canyon Lake High School or New Braunfels High School depending on their specific address, and the district's elementary and middle schools have solid ratings. Comal ISD's growth has prompted ongoing facility investment, and the district has generally kept pace with the significant population increases the area has seen over the past decade. Private school options in New Braunfels proper are also accessible within a reasonable drive.",
      prosAndCons: {
        pros: [
          "Large custom lots with genuine privacy and mature Hill Country vegetation",
          "Guadalupe River access through HOA amenity area — swimming, fishing, kayaking",
          "Low density means wildlife, dark skies, and quiet that suburban areas cannot match",
          "Strong, active HOA maintains roads, common areas, and community standards",
          "Comal ISD school district with solid academic reputation",
          "Practical commute distance to both San Antonio and Austin for hybrid workers",
          "Custom home variety means architectural character and craftsmanship rather than production sameness",
          "Mature community with stable, long-term ownership culture and genuine neighborhood identity",
        ],
        cons: [
          "Price point is firmly premium — entry-level options are limited and competition for well-priced homes is real",
          "Rural road character means no sidewalks, limited street lighting, and occasional wildlife hazards on local roads",
          "Errands require a drive — no walkable commercial within the community",
          "HOA fees and deed restrictions are meaningful and should be reviewed carefully before purchase",
          "Septic systems and well water are common at this lot size and require buyer awareness and maintenance",
          "Some sections are not fully gated, which matters to buyers with specific security expectations",
          "Limited resale inventory means waiting for the right property can take time in a slow market",
        ],
      },
      faqs: [
        {
          question:
            "Does River Chase have direct Guadalupe River access for residents?",
          answer:
            "Yes. The community HOA maintains a river access area along the Guadalupe that is available to residents and their guests. The specific amenities and access points can vary by section of the community, so it is worth confirming exactly what is included for a given property's HOA membership before purchase. Some lots also have private river frontage, which commands a significant premium.",
        },
        {
          question: "Is River Chase a fully gated community?",
          answer:
            "Partially. River Chase has gated sections, but the community overall is not uniformly gated at every entrance. If full gated access is a priority for you, the specific section and lot location matters. This is something to verify for any individual property you are considering.",
        },
        {
          question:
            "What should buyers know about utilities — water, sewer, and internet?",
          answer:
            "Many properties in River Chase rely on private wells and septic systems rather than municipal utilities, which is standard for this lot size and location in Comal County. Buyers should budget for well and septic inspections as part of due diligence and understand the ongoing maintenance responsibilities. High-speed internet availability has improved significantly in recent years, with fixed wireless and fiber options now reaching much of the community — but confirming current service availability at a specific address before closing is always worthwhile.",
        },
        {
          question: "How does the HOA work and what does it cost?",
          answer:
            "River Chase has an active homeowners association that manages common areas, road maintenance, the river access amenity, and deed restriction enforcement. Annual HOA fees vary by section and lot and should be confirmed for any specific property. The HOA is generally regarded as well-run and financially stable, which contributes to the community's consistent upkeep and property values. Deed restrictions are meaningful here — review them before purchase if you have specific plans for outbuildings, livestock, short-term rentals, or commercial use.",
        },
        {
          question:
            "Is River Chase a good fit for short-term rental investment?",
          answer:
            "Likely not. River Chase's deed restrictions and HOA rules generally limit or prohibit short-term rentals, and the community's culture is oriented toward permanent or long-term residential use. If short-term rental income is part of your purchase strategy, this is not the right neighborhood — and Comal County's evolving STR regulations add another layer of complexity worth understanding with a local attorney before committing.",
        },
      ],
      marketNotes:
        "River Chase operates in a supply-constrained segment of the New Braunfels market. Inventory has historically been thin — owners tend to stay, and the lot sizes and custom nature of the homes mean that direct comparables are genuinely rare. This dynamic has supported strong price appreciation over the past several years, and while the broader market has moderated from its 2021-2022 peak pace, well-maintained, well-priced River Chase homes continue to attract serious buyers with limited days on market. The $700,000-to-$900,000 range sees the most activity. Riverfront or river-view lots remain the most competitive tier. Buyers should be prepared to move decisively when the right property appears, as hesitation in this community tends to cost more than patience saves.",
    },
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

export type JournalFaq = {
  question: string;
  answer: string;
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
  faqs?: JournalFaq[];
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
    faqs: [
      {
        question: "Is now a good time to buy in New Braunfels?",
        answer:
          "That depends on your situation more than the calendar. New Braunfels has shown consistent long-term appreciation, and buyers who plan to stay five or more years have historically done well here. If you're waiting for prices to drop significantly, the underlying demand drivers — location, lifestyle, and limited Hill Country land — make a dramatic correction unlikely. The better question is usually whether the timing works for your life, not just the market.",
      },
      {
        question: "How competitive is the New Braunfels market right now?",
        answer:
          "The market has moderated from the frenzied pace of a few years ago, which is actually good news for buyers. Well-priced homes in desirable areas still attract solid interest and can move quickly, but you're less likely to find yourself in a bidding war with a dozen other offers. Buyers today generally have more time to make thoughtful decisions, and sellers are more willing to negotiate on price, repairs, or closing costs than they were at the peak.",
      },
      {
        question: "What price range is most active in New Braunfels?",
        answer:
          "The entry and mid-range price points tend to see the most activity, driven by first-time buyers, relocating families, and investors. Move-up and luxury properties have their own rhythm — fewer buyers, but also fewer competing listings. The sweet spot shifts with interest rates and inventory, so it's worth checking what's actually moving when you're ready to buy or sell rather than relying on broad generalizations.",
      },
      {
        question: "How fast are homes selling in New Braunfels?",
        answer:
          "Days on market have stretched out compared to the ultra-low inventory years, but New Braunfels still moves faster than many comparable Texas markets. Homes that are priced right and show well tend to find a buyer within a few weeks. Overpriced listings or those needing significant work can sit considerably longer, which means preparation and realistic pricing matter more than ever for sellers.",
      },
      {
        question: "Is New Braunfels overpriced?",
        answer:
          "Values did rise sharply during the pandemic-era demand surge, and some buyers rightly ask whether prices are sustainable. The honest answer is that New Braunfels commands a premium for real reasons — Hill Country scenery, the Comal and Guadalupe rivers, top-rated Comal ISD schools, and a location that puts both Austin and San Antonio within a reasonable commute. Whether a specific home is priced fairly is a property-by-property question, and that's exactly the kind of analysis worth doing before you make an offer.",
      },
      {
        question: "What's driving demand for New Braunfels real estate?",
        answer:
          "A mix of factors keeps New Braunfels on buyers' radar. Remote and hybrid workers from Austin and San Antonio discovered they could get more space and a genuine outdoor lifestyle without sacrificing their jobs or city access. The Comal River, Canyon Lake, and the Hill Country draw people who want to actually live where they vacation. On top of that, continued job growth in the broader Austin-San Antonio corridor keeps bringing new residents to Comal and Guadalupe County — and New Braunfels tends to be high on their lists.",
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
    faqs: [
      {
        question: "Is New Braunfels a good place to live?",
        answer:
          "New Braunfels consistently ranks among the fastest-growing cities in Texas for good reason — it offers a rare combination of small-town character, outdoor recreation on the Comal and Guadalupe rivers, and easy access to both Austin and San Antonio. The historic Gruene district, a walkable downtown, and a strong local food and music scene give it genuine personality beyond the suburb label. Most people who move here say they wish they had done it sooner.",
      },
      {
        question:
          "Which neighborhoods are best for families, retirees, and commuters?",
        answer:
          "Families tend to gravitate toward Veramendi and Vintage Oaks for their newer construction, community amenities, and proximity to top-rated Comal ISD schools. Retirees often prefer the quieter, established feel of River Chase or the canyon views around Canyon Lake, where the pace is slower and the scenery does a lot of the heavy lifting. Commuters typically land in neighborhoods along the US-46 or IH-35 corridors — Veramendi and sections of central New Braunfels put you roughly 45 minutes from downtown Austin and 30 minutes from San Antonio without fighting the worst of the traffic.",
      },
      {
        question:
          "How does the cost of living compare to Austin and San Antonio?",
        answer:
          "New Braunfels sits somewhere between the two — meaningfully more affordable than Austin on housing costs, while running slightly higher than San Antonio in some categories due to demand and newer development. A home that would list near $700K in many Austin suburbs can often be found in the $450K-$550K range here with similar finishes and lot size. Property taxes in Comal County are competitive, though it is worth factoring in HOA fees if you are shopping in a master-planned community.",
      },
      {
        question:
          "What should I know about the Texas Hill Country lifestyle before moving here?",
        answer:
          "Life here moves around the outdoors — tubing the Comal River, kayaking the Guadalupe, hiking the Balcones Canyonlands, and weekend trips to Gruene Hall for live music are just part of the rhythm. Summers are hot and long, which is why river access is less of an amenity and more of a necessity for most locals. You will also want to make peace with the fact that Schlitterbahn season brings visitors to town, but most residents find the trade-off more than worth it.",
      },
      {
        question:
          "How long do homes typically stay on the market in New Braunfels?",
        answer:
          "The market has moderated from the frenzied pace of 2021-2022, and well-priced homes in desirable areas are typically going under contract within two to four weeks. Overpriced listings or homes with deferred maintenance can sit 60 days or longer, which actually creates opportunity for buyers who were squeezed out during the peak years. Inventory has improved, so you generally have more time to make a thoughtful decision than you did a few years ago.",
      },
      {
        question: "What is the school situation in New Braunfels?",
        answer:
          "Most of New Braunfels falls within Comal ISD, which has a strong reputation across the region and continues to build new campuses to keep pace with growth. Portions of the area, particularly near the Guadalupe County line, are served by Seguin ISD or Navarro ISD, so it is worth confirming the specific district for any property you are seriously considering. There are also several private and faith-based school options in the area for families who prefer that route.",
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
