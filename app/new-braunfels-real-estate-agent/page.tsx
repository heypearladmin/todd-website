import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "New Braunfels Real Estate Agent — Todd Spencer, LPT Realty",
  description:
    "Todd Spencer is a full-service New Braunfels real estate agent with LPT Realty, helping buyers and sellers navigate Comal and Guadalupe County's market. 120+ five-star reviews. Call (512) 665-3747.",
  alternates: {
    canonical: `${site.websiteUrl}/new-braunfels-real-estate-agent`,
  },
  openGraph: {
    title: "New Braunfels Real Estate Agent — Todd Spencer, LPT Realty",
    description:
      "Todd Spencer is a full-service New Braunfels real estate agent with LPT Realty, helping buyers and sellers navigate Comal and Guadalupe County's market. 120+ five-star reviews.",
    url: `${site.websiteUrl}/new-braunfels-real-estate-agent`,
    type: "website",
  },
};

const services = [
  {
    title: "Buyer Representation Across All New Braunfels Neighborhoods",
    description:
      "From established in-town neighborhoods near the historic district to newer master-planned communities in Comal County, Todd guides buyers through the full process — understanding the local market, identifying the right areas for their lifestyle and budget, writing competitive offers, and negotiating terms that protect their interests through closing.",
  },
  {
    title: "Seller Representation with Honest Pricing Strategy",
    description:
      "Todd does not inflate list price estimates to win listings. He provides sellers with a straightforward comparative market analysis, clear advice on what preparation actually moves the needle, and a marketing plan designed to attract serious buyers — not just generate online clicks.",
  },
  {
    title: "Relocation Guidance for Austin and San Antonio Commuters",
    description:
      "Many of Todd's buyers are relocating from Austin or San Antonio for more space, better value, or the Hill Country lifestyle. He helps them understand the trade-offs between neighborhoods, commute realities, and what their budget realistically gets them in different parts of Comal and Guadalupe County.",
  },
  {
    title: "Canyon Lake and Waterfront Property",
    description:
      "Canyon Lake waterfront and lake-access properties require a different level of due diligence — flood zones, pier permits, septic systems, and water rights all factor into the transaction. Todd has experience navigating these specifics so buyers and sellers are not caught off guard.",
  },
  {
    title: "New Construction Guidance in Veramendi, Vintage Oaks, and River Chase",
    description:
      "New Braunfels has seen significant new construction growth. Todd helps buyers evaluate builder contracts, understand what is and is not negotiable, and get independent representation rather than relying solely on the builder's on-site sales team.",
  },
  {
    title: "Transparent Transaction Management",
    description:
      "From contract to close, Todd keeps clients informed at every stage — explaining what each document means, tracking deadlines, and coordinating with lenders, inspectors, and title companies so nothing falls through the cracks at the end.",
  },
];

const process = [
  {
    step: "Start with a Conversation",
    description:
      "Todd's first priority is understanding what you actually need — your timeline, your budget, your non-negotiables, and any concerns you have about the process. Whether you are buying or selling, that conversation shapes everything that follows.",
  },
  {
    step: "Get Clear on the Market",
    description:
      "Before you tour a single home or set a list price, Todd walks you through current market conditions in the specific neighborhoods or price ranges relevant to your situation. Real data, plainly explained.",
  },
  {
    step: "Build a Plan That Fits Your Situation",
    description:
      "Buyers get a focused search strategy. Sellers get a pricing recommendation and preparation guidance. Either way, the plan is built around your goals — not around closing a deal as fast as possible.",
  },
  {
    step: "Negotiate with Your Interests First",
    description:
      "When it comes time to make an offer or respond to one, Todd negotiates with a clear head and your priorities in mind. He explains options without pressure and lets you make informed decisions.",
  },
  {
    step: "Close with Confidence",
    description:
      "Todd manages the details through closing — staying in contact with all parties, flagging issues early, and making sure you understand exactly what you are signing. The goal is a closing day with no surprises.",
  },
];

const faqs = [
  {
    question: "How do I choose the right real estate agent in New Braunfels?",
    answer:
      "Look for an agent with a verifiable track record in the specific areas and price ranges you care about — not just a general Texas license. Read reviews carefully and pay attention to how clients describe the experience, not just the outcome. A good New Braunfels agent should be able to speak specifically about neighborhood differences, local market trends, and the practical realities of buying or selling in Comal and Guadalupe County. It is also worth having a direct conversation before you commit — you should feel like the agent is giving you honest information rather than telling you what you want to hear.",
  },
  {
    question: "What does a buyer's agent actually do, and do I need one?",
    answer:
      "A buyer's agent represents your interests throughout the transaction — helping you understand the market, identifying properties that fit your criteria, writing and negotiating offers, managing the due diligence process, and guiding you through closing. In Texas, the seller typically covers buyer's agent compensation, which means you generally get professional representation at no direct cost to you. Given the complexity of contracts, inspection contingencies, and title issues that can arise, having someone in your corner with local knowledge is usually well worth it.",
  },
  {
    question: "How long does it take to buy a home in New Braunfels right now?",
    answer:
      "It depends on your timeline, financing situation, and how specific your criteria are. Well-qualified buyers with flexible criteria can often be under contract within a few weeks. If you are looking for something specific — a particular neighborhood, acreage, waterfront access — it may take longer to find the right fit. The closing process typically runs 30 to 45 days once you are under contract, depending on financing and any negotiated timelines.",
  },
  {
    question: "What should I do to prepare my home before listing it in New Braunfels?",
    answer:
      "The preparation that actually matters depends on your home's condition, price point, and the current market. In general, decluttering, thorough cleaning, and addressing obvious deferred maintenance tend to have the clearest return. Major renovations before selling are often less straightforward — the cost does not always translate to a higher sale price. Todd provides sellers with specific, honest guidance on where to focus energy and money, rather than a generic checklist.",
  },
  {
    question: "Is New Braunfels still a good place to buy real estate?",
    answer:
      "New Braunfels has consistently ranked among the fastest-growing cities in the United States, driven by its location between Austin and San Antonio, quality of life along the Comal and Guadalupe Rivers, and relatively accessible price points compared to both metro areas. Growth brings demand, and demand supports property values over time. That said, every market has pockets that perform differently, and buying decisions should be based on your specific situation — timeline, financial goals, and lifestyle needs — not just market optimism. Todd can give you an honest read on current conditions for the specific type of property and neighborhood you are considering.",
  },
];

export default function NewBraunfelsRealEstateAgentPage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema() as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "New Braunfels Real Estate Agent", href: "/new-braunfels-real-estate-agent" },
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
              <p className="eyebrow">New Braunfels Real Estate</p>
            </div>
            <h1 className="display-xl mt-6 max-w-4xl text-ink">
              New Braunfels Real Estate Agent — Todd Spencer, LPT Realty
            </h1>
            <p className="dek mt-6 max-w-2xl">
              Todd Spencer is a full-service New Braunfels real estate agent with LPT Realty, LLC,
              helping buyers and sellers navigate Comal and Guadalupe County's fast-moving market.
              With 120+ five-star Google reviews and deep roots in the area, Todd brings local
              knowledge and a straightforward, no-pressure approach to every transaction.
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

        {/* intro + why local */}
        <section className="section-wrap py-20 md:py-28">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">Local expertise</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">
                New Braunfels is not a generic Texas suburb.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5">
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                New Braunfels is not a generic Texas suburb — it is a river town with its own
                rhythm, its own neighborhoods, and a real estate market that rewards people who know
                how it actually works. Todd Spencer has spent years learning the difference between a
                Gruene bungalow and a Vintage Oaks estate, what Canyon Lake waterfront really sells
                for, and which Veramendi streets see the best long-term appreciation. That local
                depth is what separates a useful agent from one who is simply licensed.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                Todd works with buyers relocating from Austin or San Antonio, first-time homeowners
                stepping into the Hill Country market for the first time, and longtime New Braunfels
                residents ready to sell and move on. His approach is consistent across all of them:
                honest information, a clear process, and none of the pressure tactics that make real
                estate feel adversarial. The 120+ five-star Google reviews reflect not just closed
                deals but clients who felt well taken care of from first conversation to closing day.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                New Braunfels sits at an unusual crossroads — 45 minutes from Austin, 30 minutes
                from San Antonio, anchored by the Comal and Guadalupe Rivers, and growing fast. That
                growth creates opportunity and complexity in equal measure. An agent who understands
                the local inventory — not just what is listed but what has sold, what sat, and why —
                gives clients a real advantage.
              </p>
            </div>
          </div>
        </section>

        {/* services */}
        <section className="section-wrap border-t border-ink/[0.07] py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">Services</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">How Todd helps buyers and sellers.</h2>
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
            <p className="eyebrow">The process</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">What working with Todd looks like.</h2>
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
            <p className="eyebrow">Common questions</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">What buyers and sellers ask.</h2>
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
                  <p className="eyebrow">Get in touch</p>
                </div>
                <h2 className="display-lg mt-6 text-ink">
                  Ready to buy or sell in New Braunfels?
                </h2>
                <p className="dek mt-6 max-w-[42rem]">
                  A short conversation is the best place to start. No pressure and no obligation —
                  just a straightforward discussion about what you are trying to accomplish and
                  whether Todd is the right fit to help you get there.
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
