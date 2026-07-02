import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Relocating to New Braunfels, TX — Todd Spencer",
  description:
    "Relocating to New Braunfels? Todd Spencer guides families through neighborhoods, pricing, and the move — with local knowledge and no pressure.",
  alternates: {
    canonical: `${site.websiteUrl}/relocating-to-new-braunfels`,
  },
  openGraph: {
    title: "Relocating to New Braunfels, TX",
    description:
      "Todd Spencer guides families relocating to New Braunfels with honest neighborhood advice, video walkthroughs, and a process built around your timeline.",
    url: `${site.websiteUrl}/relocating-to-new-braunfels`,
    type: "website",
    images: [{ url: "https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg", width: 1200, height: 630, alt: "Todd Spencer — New Braunfels Real Estate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relocating to New Braunfels, TX",
    description: "Relocating to New Braunfels? Local agent Todd Spencer guides you through neighborhoods, pricing, and the move.",
    images: ["https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg"],
  },
};

const services = [
  {
    title: "Remote Buyer Consultation",
    description:
      "Todd works regularly with buyers who are still in another city or state. He'll walk you through the market over video call, share honest assessments of neighborhoods you're considering, and help you understand what your budget realistically gets you before you make a single trip.",
  },
  {
    title: "Video Walkthroughs and Detailed Property Notes",
    description:
      "For out-of-town buyers, a listing's photos only go so far. Todd provides thorough video walkthroughs with narration, pointing out things that matter — lot grading, proximity to a busy road, builder quality — so you're not flying in blind.",
  },
  {
    title: "Neighborhood-by-Lifestyle Matching",
    description:
      "New Braunfels has a range of distinct communities, from established in-town neighborhoods to master-planned developments to rural acreage. Todd helps you filter based on how you actually want to live, not just price range and square footage.",
  },
  {
    title: "Builder and New Construction Guidance",
    description:
      "A significant share of New Braunfels inventory is new construction. Todd knows the active builders in Veramendi, Vintage Oaks, River Chase, and other communities — their reputations, standard finishes, upgrade traps, and negotiation norms. Having representation costs you nothing and protects you considerably.",
  },
  {
    title: "Timeline-Flexible Process",
    description:
      "Relocation buyers often have layered timelines — a lease ending, a job start date, a school year to work around. Todd builds the process around your constraints and keeps communication clear whether you're one time zone away or three.",
  },
  {
    title: "Trusted Local Network",
    description:
      "From lenders familiar with Texas-specific programs to inspectors who know Hill Country soil conditions and foundation quirks, Todd connects you with professionals who know this market — not just whoever picks up the phone.",
  },
];

const process = [
  {
    step: "Start with a conversation",
    description:
      "A 30-minute call or video chat to understand where you're coming from, what you're looking for, and what timeline you're working with. No commitment required — just honest talk about whether New Braunfels is actually a fit for your situation.",
  },
  {
    step: "Get oriented to the market",
    description:
      "Todd will walk you through current inventory, realistic price ranges for your criteria, and a plain-language breakdown of the neighborhoods most likely to suit your lifestyle. He'll flag what's competitive and what has room to negotiate.",
  },
  {
    step: "Tour on your schedule",
    description:
      "Whether you're flying in for a weekend, doing a scouted shortlist visit, or need to see properties virtually first, Todd shapes the tour experience around what's practical for you. He prioritizes your time and won't fill a day with homes that don't fit.",
  },
  {
    step: "Write with confidence",
    description:
      "When you find the right home, Todd guides you through an offer strategy that reflects current market conditions — not a template. He'll explain what terms matter, what's negotiable, and what to watch for in the inspection and option period.",
  },
  {
    step: "Coordinate the close from anywhere",
    description:
      "Closing in Texas doesn't require you to be in the room. Todd works with title companies experienced in remote closings and stays in your corner through funding and key delivery, so the finish line is as smooth as the start.",
  },
];

const faqs = [
  {
    question: "What's the cost of living like in New Braunfels compared to Austin?",
    answer:
      "Home prices in New Braunfels are generally more accessible than in Austin proper, though the gap has narrowed over the past few years as demand has grown. Property taxes in Texas are a real line item — expect rates in the 2 to 2.5 percent range depending on the community and any applicable MUD or PID districts. Day-to-day living costs are comparable to other mid-size Texas cities. For buyers coming from high-cost states like California or Colorado, New Braunfels often feels like a meaningful value upgrade.",
  },
  {
    question: "Which neighborhoods are best for families with school-age children?",
    answer:
      "Comal ISD serves much of the New Braunfels area and has a strong local reputation. Communities like Veramendi, River Chase, and established in-town neighborhoods are popular with families. Canyon Lake area schools fall under Comal ISD as well. If Guadalupe County is on your radar, Guadalupe ISD is worth researching separately. Todd can help you map school zones to specific neighborhoods based on your children's ages and what you're looking for in a campus.",
  },
  {
    question: "Is New Braunfels realistic as a commute base for Austin or San Antonio?",
    answer:
      "It depends on where you're going and how often. To San Antonio's north side, the commute is typically 25 to 35 minutes on a normal day. To downtown San Antonio, add 10 to 15 minutes. Austin is roughly 45 to 55 minutes to the south corridor — longer to downtown during peak hours on I-35. Many New Braunfels residents commute two or three days a week and work remotely the rest. If you're doing five days a week into central Austin, it's worth having an honest conversation about whether the trade-off works for your situation.",
  },
  {
    question: "How do I buy a home in New Braunfels if I'm still living out of state?",
    answer:
      "Remote purchases are common in this market, and Todd has a process built for it. He starts with a thorough video consultation, provides detailed video walkthroughs of properties you're interested in, and helps you understand the neighborhood context that doesn't show up in photos. Texas real estate contracts and the option period give buyers meaningful due diligence rights, and closings can be handled remotely through a title company. Most out-of-state buyers make one or two in-person trips — one to tour and one that may not even be necessary if things go smoothly remotely.",
  },
  {
    question: "What should I know about new construction in New Braunfels?",
    answer:
      "New construction makes up a large share of the New Braunfels market, particularly in master-planned communities like Veramendi, Vintage Oaks, and various Canyon Lake area developments. Having a buyer's agent costs you nothing — builders compensate agents — and it gives you someone reviewing the purchase agreement, lot premiums, upgrade pricing, and warranty terms on your behalf. Builder representatives work for the builder. Todd works for you, and he's familiar with the active builders in this market and what to watch for with each one.",
  },
];

export default function RelocatingToNewBraunfelsPage() {
  return (
    <>
      <JsonLd
        schema={
          servicePageSchema({
            name: "Relocation to New Braunfels",
            description: "Real estate services provided by Todd Spencer, LPT Realty, in New Braunfels and Comal County, TX.",
            urlPath: "/relocating-to-new-braunfels",
            serviceType: "Relocation Services",
          }) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Relocating to New Braunfels", href: "/relocating-to-new-braunfels" },
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
              <p className="eyebrow">Relocation guide</p>
            </div>
            <h1 className="display-xl mt-6 max-w-4xl text-ink">
              Relocating to New Braunfels, Texas
            </h1>
            <p className="dek mt-6 max-w-2xl">
              New Braunfels sits at the crossroads of the Texas Hill Country and two major metros,
              making it one of the most practical — and genuinely enjoyable — places to land if
              you're leaving Austin, San Antonio, or coming from out of state. Todd Spencer has
              helped hundreds of families find the right home here.
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
                <p className="eyebrow">Why New Braunfels</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">
                People arrive for a weekend and start looking at listings by Sunday afternoon.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5">
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                Moving to a new city is a big decision, and New Braunfels is the kind of place that
                tends to surprise people — in the best way. They come expecting a charming small town
                and find a well-rounded community with good schools, Hill Country access, two
                spring-fed rivers, and a commute to either Austin or San Antonio that doesn't
                require rearranging your life.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                New Braunfels has been one of the fastest-growing cities in the country for good
                reason, but growth alone doesn't explain why people stay. The Comal River runs cold
                and clear through the middle of town. The Guadalupe River winds through canyon
                terrain that draws kayakers, fishermen, and weekend floaters year-round. Gruene
                Historic District gives the city an authentic anchor — live music, local restaurants,
                and a dance hall that's been operating since the 1870s.
              </p>
              <p className="text-[1.0625rem] leading-[1.78] text-ink/75">
                Todd Spencer has lived and worked in Comal County long enough to know what makes
                each corner of it distinct. He works with a lot of out-of-town buyers — people
                relocating from Houston, Dallas, California, Colorado, and across the country — and
                he understands what it takes to buy a home remotely with confidence. His 120-plus
                five-star Google reviews reflect a consistent approach: knowledgeable, low-pressure,
                and genuinely invested in helping you land in the right place.
              </p>
            </div>
          </div>
        </section>

        {/* services */}
        <section className="section-wrap border-t border-ink/[0.07] py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">Relocation services</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">Built for buyers who aren't here yet.</h2>
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
            <p className="eyebrow">The relocation process</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">How Todd makes a remote move work.</h2>
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
            <p className="eyebrow">Relocation questions</p>
          </div>
          <h2 className="display-lg mt-6 text-ink">What people ask before making the move.</h2>
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
                  Ready to find out if New Braunfels is the right move?
                </h2>
                <p className="dek mt-6 max-w-[42rem]">
                  No pressure, no pitch — just an honest conversation from someone who knows this
                  market well. Reach Todd at {site.phone} or {site.email}, or use the contact form
                  to get started.
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
