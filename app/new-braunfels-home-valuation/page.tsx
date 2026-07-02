import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "New Braunfels Home Valuation: Find Out What Your Home Is Really Worth",
  description:
    "Todd Spencer provides free, no-obligation home valuations grounded in real local data and firsthand knowledge of New Braunfels neighborhoods — Gruene, Vintage Oaks, Veramendi, Canyon Lake, River Chase. Call (512) 665-3747.",
  alternates: {
    canonical: `${site.websiteUrl}/new-braunfels-home-valuation`,
  },
  openGraph: {
    title: "New Braunfels Home Valuation: Find Out What Your Home Is Really Worth",
    description:
      "Free, no-obligation home valuations grounded in real local data and firsthand knowledge of New Braunfels neighborhoods. No algorithms — just a local agent who knows your street.",
    url: `${site.websiteUrl}/new-braunfels-home-valuation`,
    type: "website",
  },
};

const services = [
  {
    title: "Comparative Market Analysis (CMA)",
    description:
      "Todd pulls recent closed sales of genuinely comparable homes — same general area, similar size, age, and condition — and adjusts for the specific features of your property. This is the same methodology used to price homes for the MLS, not a black-box algorithm.",
  },
  {
    title: "Neighborhood-Level Insight",
    description:
      "From Gruene to Veramendi to Canyon Lake, Todd knows which micro-markets are moving quickly, which are softening, and what buyers are prioritizing in each area right now. That context shapes a more accurate and useful valuation.",
  },
  {
    title: "Feature-by-Feature Assessment",
    description:
      "Pool, outdoor kitchen, river access, Hill Country views, guest suite, garage size — these aren't equal everywhere. Todd evaluates how specific features affect value in your particular neighborhood and price range, not the market at large.",
  },
  {
    title: "Current Market Context",
    description:
      "A valuation without market context is just a historical snapshot. Todd explains current inventory levels, average days on market, and buyer demand trends so you understand not just what your home is worth, but what it's likely to sell for and how quickly.",
  },
  {
    title: "No-Pressure Seller Consultation",
    description:
      "After reviewing the numbers, Todd walks you through your options — list now, wait, make targeted improvements first. There's no script and no pressure. The goal is to help you make a confident, informed decision on your timeline.",
  },
  {
    title: "Pre-Listing Strategy (If You're Ready)",
    description:
      "For sellers who are ready to move forward, Todd translates the valuation into a full pricing and marketing strategy, including how to position the home to attract the right buyers from day one.",
  },
];

const process = [
  {
    step: "Reach Out to Todd",
    description:
      "Call, email, or fill out the contact form with your property address and a few details about your home. Todd will follow up personally — no handoff to an assistant or automated drip sequence.",
  },
  {
    step: "Property Walk-Through or Review",
    description:
      "For the most accurate valuation, Todd will schedule a brief walk-through of your home. This lets him assess condition, upgrades, and features that photos and tax records don't capture. If you prefer to start remotely, he can work with what's available and refine from there.",
  },
  {
    step: "Market Research and Comparable Sales",
    description:
      "Todd researches recent closed sales in your area, active competition, and any pending sales that reflect current buyer behavior. He adjusts for differences in size, condition, lot, and features to arrive at a defensible price range.",
  },
  {
    step: "Valuation Presentation",
    description:
      "Todd presents the CMA findings in plain language — a price range, what supports it, and what factors could move it up or down. You'll understand the reasoning, not just the number.",
  },
  {
    step: "Your Decision, Your Timeline",
    description:
      "From here, you decide what to do with the information. List now, prepare the home first, revisit in six months — Todd is available to answer questions and advise as your situation evolves, without pressure to act before you're ready.",
  },
];

const faqs = [
  {
    question: "How accurate is Zillow's Zestimate for homes in New Braunfels?",
    answer:
      "Zillow's Zestimate can be a useful starting point, but it's built on public records and broad market data — it doesn't account for your home's condition, recent upgrades, specific location within a neighborhood, or the nuances of a local market like New Braunfels. In areas with lower transaction volume or significant variation between neighboring properties (both common here), Zestimate accuracy drops further. A CMA prepared by a local agent who has actually been inside comparable homes will consistently give you a more reliable number.",
  },
  {
    question: "Is a home valuation from Todd really free?",
    answer:
      "Yes, completely. There's no obligation to list with Todd or list at all. A home valuation is something Todd offers as a starting point for the conversation — whether you're ready to sell tomorrow or just want to understand your equity position. You walk away with useful information either way.",
  },
  {
    question: "What factors most affect home value in New Braunfels right now?",
    answer:
      "Location within the metro area matters a great deal — proximity to the Comal River, Gruene, or major employers plays a role. Lot size, pool, outdoor living features, and storage are consistently valued by buyers here. Condition and finish level affect both value and days on market. New Braunfels has also seen strong demand from Austin and San Antonio commuters, so commute access and community amenities in master-planned neighborhoods like Vintage Oaks and Veramendi carry real weight.",
  },
  {
    question: "How long does a home valuation take?",
    answer:
      "The walk-through portion typically takes 30 to 45 minutes. Todd then spends time pulling comps and preparing the analysis, and will typically follow up within a day or two with the full CMA. The conversation where he presents findings and answers your questions usually runs another 30 minutes or so, depending on how many questions you have.",
  },
  {
    question: "Can I get a valuation if I'm not planning to sell for another year or two?",
    answer:
      "Absolutely. In fact, knowing your home's value well before you plan to list gives you more time to make strategic decisions — whether that's a targeted improvement that boosts your return, or simply planning around market conditions. Todd is happy to provide a valuation with no expectation of an immediate listing.",
  },
];

export default function NewBraunfelsHomeValuationPage() {
  return (
    <>
      <JsonLd
        schema={
          servicePageSchema({
            name: "New Braunfels Home Valuation",
            description: "Real estate services provided by Todd Spencer, LPT Realty, in New Braunfels and Comal County, TX.",
            urlPath: "/new-braunfels-home-valuation",
            serviceType: "Home Valuation Services",
          }) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "New Braunfels Home Valuation", href: "/new-braunfels-home-valuation" },
          ]) as Record<string, unknown>
        }
      />
      <JsonLd schema={faqSchema(faqs) as Record<string, unknown>} />
      <main id="main" className="bg-paper">
        {/* hero */}
        <section className="relative isolate overflow-hidden bg-paper-deep">
          <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-70" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-[15%] -z-10 h-[32rem] w-[32rem] rounded-full bg-copper/[0.09] blur-[160px]"
          />
          <div className="section-wrap relative py-24 md:py-32 lg:py-36">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Home valuation</p>
            </div>
            <h1 className="display-xl mt-6 max-w-4xl text-ink">
              New Braunfels Home Valuation: Find Out What Your Home Is Really Worth
            </h1>
            <p className="dek mt-6 max-w-2xl">
              If you're thinking about selling your home in New Braunfels, the first step is
              understanding what it's actually worth in today's market — not what an algorithm
              guesses. Todd Spencer provides free, no-obligation home valuations grounded in real
              local data, recent sales, and firsthand knowledge of New Braunfels neighborhoods.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href={site.contactPath} className="btn-primary">
                Request a valuation
                <span aria-hidden className="text-base">→</span>
              </Link>
              <a href={site.phoneHref} className="editorial-link text-sm font-medium tracking-wide">
                {site.phone}
              </a>
            </div>
          </div>
        </section>

        {/* intro */}
        <section className="section-wrap py-20 md:py-28">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">Why local data matters</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">
                Online estimates are a starting point at best.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5">
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                A home valuation isn't just a number. It's the foundation of every decision you'll
                make as a seller — when to list, what to ask, and whether now is the right time at
                all. Todd Spencer has spent years tracking how homes move in New Braunfels, Gruene,
                Canyon Lake, Vintage Oaks, Veramendi, and the surrounding Hill Country communities.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                That means when he prepares a comparative market analysis for your home, it's built
                on actual closed sales in your neighborhood, current inventory levels, and the
                specific features that buyers in this market are willing to pay a premium for.
                There's no formula that replaces that. Online estimates are a starting point at best
                — and in a market as neighborhood-specific as New Braunfels, they're often
                significantly off.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                New Braunfels isn't a uniform market. A home in Gruene Historic District carries
                different buyer energy than a new build in Veramendi. A Canyon Lake property with
                Guadalupe River access prices differently than a comparable square footage inland.
                Online valuation tools pull broad regional data and can't account for any of this.
                Todd has personally worked transactions across these communities and knows which
                streets command a premium.
              </p>
            </div>
          </div>
        </section>

        {/* services */}
        <section className="section-wrap border-t border-ink/[0.07] py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">What's included</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">A valuation built on local knowledge.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-[24px] border border-ink/[0.08] bg-paper p-7 shadow-surface md:p-8"
              >
                <h3 className="display-sm text-ink">{s.title}</h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.72] text-ink/65">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* process */}
        <section className="section-wrap border-t border-ink/[0.07] py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">How it works</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">From first contact to clear answer.</h2>
          <div className="mt-12 space-y-0 divide-y divide-ink/[0.07]">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-8 py-8">
                <span className="flex-shrink-0 text-[0.8125rem] font-medium tabular-nums text-ink/35 pt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="display-sm text-ink">{p.step}</h3>
                  <p className="mt-3 text-[1.0rem] leading-[1.75] text-ink/70">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* faqs */}
        <section className="section-wrap border-t border-ink/[0.07] py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">Valuation questions</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">What homeowners ask about valuations.</h2>
          <div className="mt-10 divide-y divide-ink/[0.07]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <h3 className="display-sm text-ink">{faq.question}</h3>
                  <span
                    aria-hidden
                    className="mt-1 flex-shrink-0 text-ink/40 transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-[1.0rem] leading-[1.78] text-ink/70 max-w-3xl">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* cta */}
        <section className="relative isolate overflow-hidden bg-paper-deep py-20 md:py-28">
          <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-60" />
          <div className="section-wrap relative">
            <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="tick" aria-hidden />
                  <p className="eyebrow">Free, no-obligation</p>
                </div>
                <h2 className="display-lg mt-6 text-ink">
                  Ready to find out what your New Braunfels home is worth?
                </h2>
                <p className="dek mt-6 max-w-[42rem]">
                  Reach out to Todd Spencer for a free, no-obligation home valuation. Todd will get
                  back to you personally — no automated follow-up, no pressure.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5 lg:col-span-4 lg:justify-end">
                <Link href={site.contactPath} className="btn-primary">
                  Request a valuation
                  <span aria-hidden className="text-base">→</span>
                </Link>
                <a
                  href={site.phoneHref}
                  className="editorial-link text-sm font-medium tracking-wide"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
