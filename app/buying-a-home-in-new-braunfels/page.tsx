import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Buying a Home in New Braunfels, TX — Todd Spencer",
  description:
    "Buying a home in New Braunfels? Todd Spencer guides buyers through every neighborhood, price range, and property type in Comal County. 120+ reviews.",
  alternates: {
    canonical: `${site.websiteUrl}/buying-a-home-in-new-braunfels`,
  },
  openGraph: {
    title: "Buying a Home in New Braunfels, TX",
    description:
      "Todd Spencer guides New Braunfels buyers from first search to closing — local knowledge, no pressure, 120+ five-star reviews.",
    url: `${site.websiteUrl}/buying-a-home-in-new-braunfels`,
    type: "website",
    images: [{ url: "https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg", width: 1200, height: 630, alt: "Todd Spencer — New Braunfels Real Estate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buying a Home in New Braunfels, TX",
    description: "Buying a home in New Braunfels? Local agent Todd Spencer knows every neighborhood and price point in Comal County.",
    images: ["https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg"],
  },
};

const services = [
  {
    title: "Neighborhood Matching",
    description:
      "Before you fall in love with a listing, Todd helps you understand what daily life in that neighborhood actually looks like — proximity to schools, commute realities to Austin or San Antonio, flood zone exposure, and what neighboring land is zoned for. The goal is to match you to a place, not just a property.",
  },
  {
    title: "Competitive Offer Strategy",
    description:
      "New Braunfels moves fast on well-priced homes. Todd monitors active inventory daily and can walk you through what a competitive offer looks like in the current market — including how to structure terms, not just price, to stand out without overpaying.",
  },
  {
    title: "Builder and New Construction Guidance",
    description:
      "Communities like Veramendi and Vintage Oaks are still actively building. Todd represents buyers in new construction purchases, reviews builder contracts (which are written entirely in the builder's favor), and helps you negotiate upgrades, lot premiums, and rate buydowns.",
  },
  {
    title: "Hill Country and Lake Property Expertise",
    description:
      "Canyon Lake and the rural Hill Country west of New Braunfels require a different checklist — well and septic inspections, survey review, access easements, and short-term rental restrictions. Todd knows what to look for before you go under contract.",
  },
  {
    title: "Relocation Support",
    description:
      "A significant portion of Todd's buyers are relocating from Austin, Dallas, or out of state. He offers virtual consultations, curated neighborhood tours, and straightforward market context so you can make an informed decision without needing to fly in a dozen times.",
  },
  {
    title: "Post-Contract Coordination",
    description:
      "Once you are under contract, Todd stays hands-on through inspections, appraisals, title, and closing. He keeps timelines on track and translates what inspectors, lenders, and title officers are actually telling you — so nothing catches you off guard at the closing table.",
  },
];

const process = [
  {
    step: "Start with an honest market conversation",
    description:
      "Before you see a single listing, Todd spends time understanding your priorities, timeline, and budget — and gives you an unfiltered read of what that gets you in today's New Braunfels market. No false optimism, no pressure.",
  },
  {
    step: "Get pre-approved with a lender who knows Texas",
    description:
      "Todd can connect you with local lenders who understand Comal County title timelines and rural property lending. A solid pre-approval letter makes your offer credible from day one.",
  },
  {
    step: "Targeted home search and tours",
    description:
      "Todd filters listings by what actually matters to you, not just the obvious search fields. He flags properties with concerns before you visit, so your time is spent on real contenders.",
  },
  {
    step: "Write a strong offer",
    description:
      "When you find the right home, Todd helps you put together an offer built around the specific situation — the seller's motivation, days on market, competing interest, and your financing. He explains every term before you sign.",
  },
  {
    step: "Navigate inspections, appraisal, and closing",
    description:
      "Todd coordinates with your inspector, stays in contact with the listing agent and title company, and walks you through any issues that surface during the option period. The goal is no surprises — and a smooth closing.",
  },
];

const faqs = [
  {
    question: "How competitive is the New Braunfels housing market right now?",
    answer:
      "New Braunfels has moderated from the peak frenzy of 2021 and 2022, but well-priced homes in desirable areas still move quickly. Buyers today generally have more room to negotiate than they did a few years ago, and inventory has improved in most price ranges. That said, entry-level homes and turnkey properties near Gruene or the river can still see multiple offers. Todd monitors active inventory and recent sales weekly so he can give you a current, honest read — not a talking point.",
  },
  {
    question: "What neighborhoods should I consider as a buyer in New Braunfels?",
    answer:
      "It depends on your priorities. Gruene and the historic district offer character, walkability, and proximity to the river, but at a premium. Veramendi is a growing master-planned community with trails, a resort-style pool, and highly rated schools — popular with families relocating from Austin. Vintage Oaks near Bulverde caters to buyers wanting larger lots, a Hill Country feel, and a tight-knit community. River Chase offers acreage and privacy at a lower price per square foot. Canyon Lake is ideal if you want waterfront or water-access lifestyle. There is no single best neighborhood — the right one depends on your commute, lifestyle, and budget.",
  },
  {
    question: "How long does it typically take to buy a home in New Braunfels?",
    answer:
      "From the time you start seriously searching to closing, most buyers take between 60 and 120 days, though it varies. A competitive buyer in a clear price range can move faster. The contract-to-close period in Texas is typically 30 to 45 days depending on financing type. New construction timelines vary by builder — some homes are move-in ready, others are 6 to 12 months out. Todd will give you a realistic timeline based on what you are looking for.",
  },
  {
    question: "Are there things specific to Texas or Comal County I should know as a buyer?",
    answer:
      "A few things stand out. Texas does not have a state income tax, but property taxes are higher than most states — understanding your estimated tax bill matters as much as the purchase price. Comal County has some of the strongest property tax growth caps for homesteaded properties, so establishing your homestead exemption quickly after closing is important. Many properties outside city limits operate on well and septic systems rather than municipal utilities, which require specific inspections. And unlike some states, Texas sellers are required to disclose known defects, but the option period — typically 5 to 10 days — is your real window to inspect and walk away if needed.",
  },
  {
    question: "Does working with Todd cost me anything as a buyer?",
    answer:
      "In most cases, no. In Texas, the seller typically covers the buyer's agent commission as part of the transaction. Following recent industry changes, Todd will walk you through a buyer representation agreement before you tour homes together so there are no surprises about how he is compensated. The conversation is straightforward, and he will answer every question you have before you sign anything.",
  },
];

export default function BuyingAHomeInNewBraunfelsPage() {
  return (
    <>
      <JsonLd
        schema={
          servicePageSchema({
            name: "Buying a Home in New Braunfels",
            description: "Real estate services provided by Todd Spencer, eXp Realty, in New Braunfels and Comal County, TX.",
            urlPath: "/buying-a-home-in-new-braunfels",
            serviceType: "Home Buyer Representation",
          }) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Buying a Home in New Braunfels", href: "/buying-a-home-in-new-braunfels" },
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
              <p className="eyebrow">Buyer guide</p>
            </div>
            <h1 className="display-xl mt-6 max-w-4xl text-ink">
              Buying a Home in New Braunfels, TX
            </h1>
            <p className="dek mt-6 max-w-2xl">
              New Braunfels is one of the fastest-growing cities in Texas, and buying here takes
              more than a pre-approval letter. Todd Spencer has guided hundreds of buyers through
              this market — from first-time purchases in Veramendi to move-up homes on Canyon Lake
              — with 120+ five-star reviews and deep roots in Comal County.
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
                <p className="eyebrow">Why local knowledge matters</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">
                Not every New Braunfels neighborhood works the same way.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5">
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                New Braunfels sits in a rare position: close enough to Austin and San Antonio to
                commute, far enough to feel like somewhere worth coming home to. The Comal River
                runs through the middle of town, the Hill Country opens up to the west, and
                neighborhoods range from walkable historic blocks near Gruene to newer master-planned
                communities with resort-style amenities. That variety is exactly what makes buying
                here rewarding — and what makes working with the right agent matter.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                New Braunfels is not a generic Texas suburb. Each pocket of Comal and Guadalupe
                County has its own character, price dynamics, and buyer considerations. Homes near
                the Comal River and Gruene carry a lifestyle premium. Master-planned communities
                like Veramendi and Vintage Oaks come with HOA structures, amenity packages, and
                deed restrictions that vary significantly. Canyon Lake properties carry different
                flood zone and septic considerations than in-town lots. Rural acreage tracts in
                River Chase operate under Comal County rules, not city codes.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                A buyer working with an agent from outside the area simply will not know these
                distinctions until it is too late. Todd has closed deals across all of these
                submarkets and knows how to read a seller's disclosure, spot a problem lot, and
                negotiate in a way that fits local norms.
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
          <h2 className="display-lg mt-6 text-ink">Full buyer support, start to close.</h2>
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
            <p className="eyebrow">The buying process</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">How Todd guides you from search to closing.</h2>
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
            <p className="eyebrow">Buyer questions</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">What buyers ask about New Braunfels.</h2>
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
                  Thinking about buying in New Braunfels?
                </h2>
                <p className="dek mt-6 max-w-[42rem]">
                  Whether that is three months from now or three years from now, Todd is happy to
                  have an honest conversation about the market, the neighborhoods, and what the
                  process actually looks like. No pressure, no scripts.
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
