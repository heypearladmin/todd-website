import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "New Braunfels Listing Agent — Sell Your Home With Local Expertise",
  description:
    "Selling a home in New Braunfels takes local knowledge. Todd Spencer has helped New Braunfels homeowners sell in every neighborhood — Gruene, River Chase, Vintage Oaks, Veramendi, Canyon Lake. 120+ five-star reviews.",
  alternates: {
    canonical: `${site.websiteUrl}/selling-a-home-in-new-braunfels`,
  },
  openGraph: {
    title: "New Braunfels Listing Agent — Sell Your Home With Local Expertise",
    description:
      "Selling a home in New Braunfels takes local knowledge. Todd Spencer has helped New Braunfels homeowners sell in every neighborhood. 120+ five-star reviews.",
    url: `${site.websiteUrl}/selling-a-home-in-new-braunfels`,
    type: "website",
  },
};

const services = [
  {
    title: "Accurate, Defensible Pricing",
    description:
      "Todd reviews recent closed sales, active competition, and current buyer demand before recommending a list price. The goal is a number that attracts serious buyers — not one that generates excitement and then requires a reduction two weeks later.",
  },
  {
    title: "Pre-Listing Preparation Guidance",
    description:
      "Before photos are taken or a sign goes up, Todd walks the property and identifies what's worth addressing and what isn't. Small improvements in presentation can meaningfully affect buyer perception. He helps you spend your time and money where it actually moves the needle.",
  },
  {
    title: "Professional Photography and Marketing",
    description:
      "Every listing receives professional photography. Depending on the property, that may include aerial imagery, video walkthroughs, or lifestyle-focused content that reflects the Hill Country setting. Listings are distributed across MLS, major search portals, and targeted buyer channels.",
  },
  {
    title: "Clear Communication Throughout",
    description:
      "Todd keeps sellers informed at every stage — showings, buyer feedback, offer activity, and market shifts. You will not be left wondering what is happening with your listing.",
  },
  {
    title: "Skilled Offer Negotiation",
    description:
      "When offers come in, Todd helps you evaluate the full picture: price, financing, contingencies, and timeline. He negotiates on your behalf with a direct, low-drama style focused on protecting your interests and getting to a successful close.",
  },
  {
    title: "Transaction Management to Close",
    description:
      "From executed contract to closing day, Todd coordinates inspections, appraisals, title, and any repair negotiations. The goal is a smooth process with no last-minute surprises.",
  },
];

const process = [
  {
    step: "Start With a Conversation",
    description:
      "Every listing engagement begins with a no-obligation conversation about your property, your goals, and your timeline. There is no commitment required to have an honest discussion about what selling looks like for your specific situation.",
  },
  {
    step: "Property Walk and Pricing Analysis",
    description:
      "Todd visits the home, reviews current market data, and prepares a comparative market analysis. He will share a recommended list price range and explain the reasoning behind it — including what factors are working in your favor and what buyers in this market will scrutinize.",
  },
  {
    step: "Prepare and Stage for Market",
    description:
      "Based on the walk-through, Todd outlines any recommended preparations — repairs, decluttering, curb appeal, staging. Professional photography and marketing materials are produced once the home is ready. This step typically takes one to three weeks depending on the scope of preparation.",
  },
  {
    step: "List, Market, and Show",
    description:
      "Your home goes live across MLS and major real estate platforms. Todd manages showing coordination, tracks buyer activity, and provides regular updates on feedback and market response. The first two weeks on market are the most critical — pricing and presentation need to be right from day one.",
  },
  {
    step: "Negotiate, Close, and Move On",
    description:
      "When offers arrive, Todd walks you through each one and negotiates on your behalf. Once under contract, he manages the transaction through inspection, appraisal, and closing — keeping the process on track and addressing any issues that come up along the way.",
  },
];

const faqs = [
  {
    question: "How long does it take to sell a home in New Braunfels?",
    answer:
      "It depends on price point, condition, and current inventory levels. Well-priced, well-presented homes in desirable New Braunfels neighborhoods have sold in days during active market periods. In a more balanced market, a realistic expectation is two to six weeks to an accepted offer, followed by a 30-to-45-day closing period. Todd will give you an honest estimate based on what is actually happening in the market at the time you list.",
  },
  {
    question: "What factors most affect what my New Braunfels home will sell for?",
    answer:
      "Location within New Braunfels carries significant weight — proximity to the Comal River, the historic Gruene area, top-rated Comal ISD schools, and established master-planned communities all influence buyer demand. Beyond location, condition and presentation matter more than most sellers expect. A home that is clean, updated in the right places, and priced accurately will consistently outperform a comparable property that is overpriced or under-prepared. Market timing and current inventory levels also play a role.",
  },
  {
    question: "Should I make repairs before listing?",
    answer:
      "Not always — and not every repair is worth the investment. Some improvements meaningfully increase buyer confidence and perceived value; others cost more than they return. Todd will walk your property before you list and give you a direct read on what is worth addressing. The goal is to make smart, targeted decisions — not to over-improve or sell as-is when a few changes would make a real difference.",
  },
  {
    question: "What is the real estate market like in New Braunfels right now?",
    answer:
      "New Braunfels has seen sustained demand driven by its location between Austin and San Antonio, its Hill Country setting, outdoor recreation on the Comal and Guadalupe rivers, and strong school districts. Market conditions do shift — inventory levels, interest rates, and buyer demand all fluctuate. Todd tracks the local market closely and will give you a current, honest picture when you sit down together — not a generalized statewide report.",
  },
  {
    question: "How do I choose the right listing agent in New Braunfels?",
    answer:
      "Look for someone who works this market specifically, not one who covers a broad swath of Central Texas. Ask about their recent closed sales in your neighborhood, how they determine list price, and what their marketing process looks like. Todd's 120+ five-star Google reviews reflect the experience past clients have had — read them, and then have a conversation to see if his approach fits what you are looking for. There is no pressure and no obligation.",
  },
];

export default function SellingAHomeInNewBraunfelsPage() {
  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Selling a Home in New Braunfels", href: "/selling-a-home-in-new-braunfels" },
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
              <p className="eyebrow">Seller guide</p>
            </div>
            <h1 className="display-xl mt-6 max-w-4xl text-ink">
              New Braunfels Listing Agent — Sell Your Home With Local Expertise
            </h1>
            <p className="dek mt-6 max-w-2xl">
              Selling a home in New Braunfels takes more than putting a sign in the yard. Todd
              Spencer has helped New Braunfels homeowners navigate this market with 120+ five-star
              reviews and a track record built entirely in this community.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href={site.contactPath} className="btn-primary">
                Start a conversation
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
                <p className="eyebrow">Honest approach</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">
                No inflated list prices. No pressure. Just a plan that works.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5">
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                New Braunfels has become one of the most-watched real estate markets in Texas Hill
                Country, drawing buyers from Austin, San Antonio, and well beyond. That visibility
                creates opportunity for sellers — but it also raises the bar for how a home needs to
                be presented and priced.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                Todd Spencer is a New Braunfels-based listing agent with LPT Realty who has guided
                sellers through every kind of transaction in this market: established neighborhoods
                like Gruene and River Chase, master-planned communities like Vintage Oaks and
                Veramendi, lakefront properties on Canyon Lake, and everything in between.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                New Braunfels is not a monolithic market. A home in Gruene sells differently than
                one in Veramendi. A Canyon Lake waterfront property attracts a different buyer
                profile than a move-in-ready home in a Comal County master-planned community.
                Todd has lived and worked in this area long enough to know those nuances without
                having to look them up.
              </p>
            </div>
          </div>
        </section>

        {/* services */}
        <section className="section-wrap border-t border-ink/[0.07] py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">What Todd provides</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">Full seller support, priced right from day one.</h2>
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
            <p className="eyebrow">The selling process</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">From first conversation to closing day.</h2>
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
            <p className="eyebrow">Seller questions</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">What sellers ask about listing in New Braunfels.</h2>
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
                  <p className="eyebrow">Whenever you are ready</p>
                </div>
                <h2 className="display-lg mt-6 text-ink">
                  Thinking about selling your New Braunfels home?
                </h2>
                <p className="dek mt-6 max-w-[42rem]">
                  A conversation with Todd costs you nothing and gives you a clear picture of where
                  you stand. Whether it is this season or sometime next year, there is no pressure
                  and no obligation.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5 lg:col-span-4 lg:justify-end">
                <Link href={site.contactPath} className="btn-primary">
                  Contact Todd
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
