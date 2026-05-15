# Todd Spencer · Build Playbook

Companion to `IMAGE_ASSETS.md`. Covers project structure, design tokens, animation system, SEO, GEO content strategy, blog taxonomy, mobile considerations, and where to extend next.

---

## 1. Project folder structure

```
todd-website/
├── app/
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── neighborhoods/page.tsx
│   ├── globals.css            # design tokens + editorial utilities
│   ├── layout.tsx             # fonts, metadata, header + footer
│   └── page.tsx               # home composition
│
├── components/
│   ├── NewsletterForm.tsx     # reusable, footer + inline variants
│   ├── SiteFooter.tsx
│   ├── SiteHeader.tsx
│   └── home/
│       ├── HomeHero.tsx
│       ├── HomeTrust.tsx
│       ├── HomeExplore.tsx
│       ├── HomeVideoAuthority.tsx
│       ├── HomeNeighborhoods.tsx
│       ├── HomeSocialProof.tsx
│       ├── HomeMarket.tsx
│       ├── HomeFinalCta.tsx
│       ├── HomeEditorialAuthority.tsx   (retired, safe to delete)
│       ├── HomeTestimonials.tsx          (retired, safe to delete)
│       └── motion.ts                     # framer-motion primitives
│
├── lib/
│   ├── home-content.ts        # all copy + image paths
│   └── site.ts                # brand, contact, social
│
├── public/
│   └── images/                # flat list, SEO-friendly slugs (see IMAGE_ASSETS.md)
│
├── scripts/
│   └── generate-local-editorial-assets.mjs   # placeholder gradient generator
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── IMAGE_ASSETS.md
└── PLAYBOOK.md
```

**Suggested next folders when content grows:**

```
app/
├── neighborhoods/[slug]/page.tsx   # dynamic neighborhood detail
├── blog/[slug]/page.tsx            # dynamic article detail
├── explore/[category]/page.tsx     # category landing page
└── api/
    └── newsletter/route.ts         # newsletter signup endpoint
content/                            # MDX or CMS fetch
├── neighborhoods/*.mdx
├── blog/*.mdx
└── guides/*.mdx
```

---

## 2. Component structure

### Sections (home page, in order)
1. `<HomeHero />`           cinematic immersive hero with parallax image
2. `<HomeTrust />`          Todd portrait + bio + KPI rail
3. `<HomeExplore />`        8 tile editorial bento (restaurants, river, music, breweries, hidden gems, weekend, neighborhoods, family)
4. `<HomeVideoAuthority />` 3 video posters with social CTAs (YouTube + Instagram)
5. `<HomeNeighborhoods />`  5 featured neighborhood spreads (Gruene, Downtown, Canyon Lake, Vintage Oaks, Veramendi)
6. `<HomeSocialProof />`    testimonials + Google reviews stat + story wins
7. `<HomeMarket />`         4 market insight cards + signal stat
8. `<HomeFinalCta />`       cinematic twilight close with contact rail

### Shell
- `<SiteHeader />` sticky, scroll-aware, mobile menu, phone link.
- `<SiteFooter />` newsletter, contact, nav, social, brokerage, colophon.

### Reusable
- `<NewsletterForm variant="footer" | "inline" />` self-contained, accessible, ready to wire to `/api/newsletter`.

### Motion primitives (`components/home/motion.ts`)
- `editorialEase`, `cinemaEase` — bezier curves.
- `transitionBase`, `transitionSlow`, `transitionFast` — duration presets.
- `fade`, `fadeUp`, `fadeUpDeep`, `revealMask` — variant objects.
- `editorialStagger(delay, stagger)` — orchestration helper.
- `viewportOnce` — `{ once: true, amount: 0.01 }`. Trigger as soon as element is in view, once.
- `useParallaxY(ref, [from, to])` — scroll-driven parallax, respects `useReducedMotion`.
- `useMounted()` — hydration guard helper.

---

## 3. Design tokens

Defined as CSS variables in `app/globals.css`, wired into Tailwind via `tailwind.config.ts`.

### Color tokens

| Token             | Hex      | Use                                              |
|-------------------|----------|--------------------------------------------------|
| `paper`           | `#F6F1E7`| Primary background, "warm cream"                 |
| `paper-deep`      | `#F0E8D5`| Section background contrast, footer              |
| `sand`            | `#D9C7A5`| Warm neutral accent                              |
| `primary`         | `#27497A`| Deep editorial blue. Headings emphasis, primary buttons |
| `primary-soft`    | `#4E89C0`| Sky blue. Glow halos, hover states               |
| `ink`             | `#182135`| Deep charcoal blue, body text on light bg        |
| `muted`           | `#5C6473`| Secondary text                                   |
| `sage`            | `#8B9E82`| Hill sage accent                                 |
| `teal`            | `#2F7A82`| River teal accent                                |
| `copper`          | `#C9924B`| Texas amber accent. Hairlines, hover indicators  |

Tailwind opacity modifiers in steps of 5 (`/10`, `/15`, `/20` …) work directly. For off-scale values use bracket syntax: `bg-copper/[0.12]`.

### Typography tokens

- `--font-display` → Inter (weights 400 / 500 / 600 / 700) for headings, eyebrows, captions.
- `--font-body` → Open Sans (400 / 500 / 600) for paragraphs and UI.

Display utilities defined in `@layer components`:
- `.display-xl` — hero scale, `clamp(2.75rem, 6.4vw, 5.5rem)`
- `.display-lg` — section heading, `clamp(2.25rem, 4.5vw, 3.75rem)`
- `.display-md` — sub heading, `clamp(1.625rem, 2.6vw, 2.125rem)`
- `.display-sm` — card title, `clamp(1.25rem, 1.8vw, 1.5rem)`
- `.dek` — section dek, 1.0625rem leading 1.78
- `.eyebrow` — uppercase tracked, primary color
- `.caption` — micro labels, uppercase tracked, muted

### Spacing tokens
Section rhythm (Tailwind):
- `section-y-sm` = `4.5rem`
- `section-y` = `6.5rem`
- `section-y-md` = `8.5rem`
- `section-y-lg` = `11rem`

### Easing and duration
- `ease-editorial` / `duration-editorial` (720ms) — the workhorse.
- `ease-cinema` / `duration-cinema` (900ms) — for slower reveals and hover zooms.

### Shadows
- `shadow-surface` — default lift on cards
- `shadow-surface-hover` — hover state
- `shadow-lift`, `shadow-lift-hover` — primary buttons
- `shadow-glow` — premium framing (video posters, primary diptych)
- `shadow-inset-frame` — fine 1px inner ring

### Composable utility classes
- `.section-wrap`, `.section-wrap-narrow` — page gutters
- `.card-surface`, `.frame-ink` — common card chrome
- `.btn-primary`, `.btn-ghost`, `.btn-on-dark`, `.btn-ghost-on-dark` — button family
- `.editorial-link`, `.editorial-link-light` — underlined editorial link
- `.tick`, `.hairline`, `.hairline-warm` — dividers
- `.paper-grain` — subtle multi-color radial grain

---

## 4. Animation system

Reach for these patterns, in this order, before inventing new ones.

| Pattern                       | When to use                                         | How                                                                 |
|------------------------------|------------------------------------------------------|---------------------------------------------------------------------|
| Fade up on scroll             | Section intros, card grids                          | `motion.div` with `variants={fadeUp}`, `whileInView="visible"`, `viewport={viewportOnce}` |
| Staggered children            | Header eyebrow + heading + dek + CTA group          | Parent uses `variants={editorialStagger(0.05, 0.1)}`               |
| Slow reveal                   | Hero text, final CTA copy                           | `transition={transitionSlow}` (0.9s cinema curve)                   |
| Scroll parallax               | Hero image, CTA sky, large editorial frames         | `useParallaxY(ref, [from, to])` on a wrapping `motion.div`         |
| Hover image zoom              | Card thumbnails                                     | `group` parent + `group-hover:scale-[1.045]` with `duration-[1200ms] ease-cinema` |
| Hairline grow on hover        | Card CTAs, inline links                             | small `<span>` divider that expands width and shifts color to copper |

**Reduced motion**
Every parallax helper and every transition is wrapped in `useReducedMotion` checks. Respect this by always passing `reduce ? { duration: 0 } : transitionBase` instead of hard coding transitions.

**Performance**
- Use `whileInView` with `once: true` to avoid replaying.
- Prefer `transform` and `opacity` over layout properties.
- Keep `useParallaxY` ranges modest (under ±80px) to avoid clipping at section boundaries.

---

## 5. SEO recommendations

### Site level
- Set `NEXT_PUBLIC_SITE_URL=https://todd-spencer.com` in `.env.production`.
- Title template already set in `app/layout.tsx`: `"%s · Todd Spencer"`.
- Add `app/sitemap.ts` and `app/robots.ts` (Next 15 conventions). Generate from a content index.
- Add structured data `<script type="application/ld+json">` blocks via `next/script` for:
  - `RealEstateAgent` schema on home and `/about`
  - `LocalBusiness` schema with phone, address, social
  - `Article` schema on each blog post
  - `BreadcrumbList` on category and detail pages

### Page level
- Every page should set its own `metadata` export with a specific title + 140 to 160 char description.
- Use `openGraph.images` per page with a contextual OG image when possible (fallback to `og-todd-spencer-new-braunfels.jpg`).

### Image SEO
- Filenames are slugged and descriptive (already enforced in `IMAGE_ASSETS.md`).
- Every `<Image>` has a written `alt` with the location and subject. Avoid "Image of …".

### Performance levers
- `priority` is on the hero images only.
- `<Image fill sizes>` is set on every grid tile so Next can serve the right resolution.
- Switch off `images.unoptimized` in `next.config.ts` before going to production. It is currently `true` as a diagnostic.
- Run Lighthouse before launch. Aim for LCP under 2.5s on the home page on Fast 3G.

### Suggested next files
```
app/sitemap.ts
app/robots.ts
app/api/newsletter/route.ts
app/api/contact/route.ts
```

---

## 6. GEO (generative engine optimization) content structure

Designed so that LLM search engines (ChatGPT, Perplexity, Gemini, Claude) cite this site when answering New Braunfels questions.

### Canonical pages to publish

| Path                                                  | LLM intent it answers                                  |
|-------------------------------------------------------|--------------------------------------------------------|
| `/neighborhoods/gruene`                               | "best neighborhoods in New Braunfels for X"            |
| `/neighborhoods/downtown-new-braunfels`               | "what is downtown New Braunfels like"                  |
| `/neighborhoods/canyon-lake`                          | "homes near Canyon Lake Texas"                         |
| `/neighborhoods/vintage-oaks`                         | "Vintage Oaks New Braunfels guide"                     |
| `/neighborhoods/veramendi`                            | "what is Veramendi New Braunfels"                      |
| `/blog/moving-to-new-braunfels`                       | "moving to New Braunfels"                              |
| `/blog/cost-of-living`                                | "cost of living New Braunfels"                         |
| `/blog/lifestyle`                                     | "things to do New Braunfels"                           |
| `/blog/market-trends`                                 | "New Braunfels real estate market"                     |
| `/blog/restaurants` …                                 | "best restaurants in New Braunfels"                    |

### Per-page GEO checklist
- Open with a clear one sentence answer to the canonical question.
- Follow with a definition or stat block (LLMs lift these).
- Use H2 sub-questions: "Is X right for families?", "How does X compare to Y?".
- End with a FAQ accordion. Mark up with `Question` / `Answer` JSON-LD.
- Cite primary sources (city of New Braunfels, MLS area reports, school district sites) by name. LLMs prefer pages that cite.
- Author byline: "Todd Spencer, New Braunfels Realtor". Add `sameAs` social links in JSON-LD.

### Voice rules for LLM friendliness
- Plain English. No jargon. No em-dashes.
- Short paragraphs (2–4 sentences).
- Specific numbers and place names ("Gruene Hall, 1281 Gruene Road") rather than vague claims.
- Year stamp visible on data heavy pages ("As of Q2 2026 …").

---

## 7. Blog / article categories

Use these as both routes (`/blog/[category]/[slug]`) and content tags. Each maps cleanly to a section already built on the home page.

| Category slug             | Display name           | What goes here                                            |
|---------------------------|------------------------|-----------------------------------------------------------|
| `moving-guides`           | Moving guides          | Relocation checklists, school comparisons, commute math   |
| `cost-of-living`          | Cost of living         | Tax notes, utility ranges, hidden line items              |
| `lifestyle`               | Lifestyle              | River rituals, market mornings, supper hours              |
| `market-trends`           | Market trends          | Monthly market reads, micro-neighborhood velocity         |
| `restaurants`             | Restaurants            | Honest local reviews                                      |
| `river-life`              | River life             | Float etiquette, seasonal water levels, safety            |
| `live-music`              | Live music             | Hall schedules, songwriter rounds, dance hall history     |
| `breweries`               | Breweries              | Taproom guides, brewery walks                             |
| `hidden-gems`             | Hidden gems            | Off-MLS, off-map favorites                                |
| `weekends`                | Weekend rhythm         | Saturday and Sunday itineraries                           |
| `family`                  | Family days            | Kid friendly outings, parks, swim spots                   |
| `neighborhood-deep-dives` | Neighborhood deep dives| Long-form neighborhood essays                             |
| `seller-strategy`         | Seller strategy        | Listing prep, staging, photography                        |
| `buyer-strategy`          | Buyer strategy         | Offer math, inspection language, contingency literacy     |

**Editorial cadence target:** 1 evergreen + 1 timely each week. The evergreen feeds GEO; the timely feeds social.

---

## 8. Mobile responsiveness considerations

Already in the build, but worth knowing.

- Hero swaps from `nb-hero-dusk-river.webp` (16:9) to `-mobile.webp` (4:5) at `lg`.
- Final CTA swaps the same way at `lg`.
- Header collapses into a hamburger menu under `lg`. Contact details surface inside the mobile drawer.
- Bento grids collapse to single column on `<sm`, varied on `sm`–`md`, full editorial layout on `lg+`.
- All `<Image fill>` containers have explicit `w-full` + `aspect-[...]` to prevent collapsed boxes.
- `min-h-[88vh]` is paired with `min-h-[88svh]` on the hero so iOS Safari handles the dynamic viewport correctly.
- Skip link is in `app/layout.tsx`, focusable but visually hidden.
- All interactive surfaces have visible `:focus-visible` rings tied to primary/copper.
- Body uses `text-size-adjust: 100%` to prevent iOS Safari oversizing.

**Touch sizing**
- Buttons are minimum 44px tall.
- Inline editorial links carry a 2px underline offset so they pass touch contrast even with the warm palette.

**Things to add when content grows**
- Mobile sticky bottom bar with phone + "Book a call" once the user scrolls past the hero.
- Bottom sheet contact form on `/contact` for mobile.

---

## 9. Pre-launch checklist

- [ ] Replace every placeholder image at the 26 paths in `IMAGE_ASSETS.md`.
- [ ] Remove `images.unoptimized: true` from `next.config.ts`.
- [ ] Wire `/api/newsletter` to your provider (Resend, Beehiiv, Mailchimp).
- [ ] Wire `/api/contact` to email (Resend) and to a CRM (Follow Up Boss, hubspot, etc.).
- [ ] Add JSON-LD blocks per SEO section above.
- [ ] Generate `sitemap.ts` and `robots.ts`.
- [ ] Set `NEXT_PUBLIC_SITE_URL` in deployment env.
- [ ] Run Lighthouse and axe. Fix anything below 95 / no a11y violations.
- [ ] Hook Plausible or Vercel Analytics.
- [ ] Replace brokerage placeholders in `lib/site.ts` (`name`, `licenseLine`).
- [ ] Delete the two retired components: `HomeEditorialAuthority.tsx`, `HomeTestimonials.tsx`.
- [ ] Delete `scripts/generate-local-editorial-assets.mjs` once all real images are in.

---

## 10. Where to extend next

1. **Dynamic neighborhood pages** — turn the neighborhood data in `home-content.ts` into MDX entries, render at `/neighborhoods/[slug]`.
2. **Blog detail template** — MDX-driven, share the typography utilities from `globals.css`.
3. **Search and filter on Explore** — once you have 20+ field notes, the bento becomes a magazine index.
4. **Video integration** — when video poster files exist, wire each to either an embedded YouTube player or a lightbox launching the IG/YouTube link.
5. **CRM contact flow** — form on `/contact` posts to your CRM, fires a calendar invite link on success.
6. **Press / media kit** — `/press` page with downloadable assets, bio, headshot.
7. **Internal linking pass** — each blog article should link to two neighborhoods and one market trend. Each neighborhood should link to two recent articles. Strong internal graph drives both SEO and GEO.
