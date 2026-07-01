import { HomeExplore } from "@/components/home/HomeExplore";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMarket } from "@/components/home/HomeMarket";
import { HomeNeighborhoods } from "@/components/home/HomeNeighborhoods";
import { HomeSocialProof } from "@/components/home/HomeSocialProof";
import { HomeTrust } from "@/components/home/HomeTrust";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationSchema,
  webSiteSchema,
  realEstateAgentSchema,
  localBusinessSchema,
  faqSchema,
} from "@/lib/seo/schemas";
import { site } from "@/lib/site";

const homepageFaqs = [
  {
    question: "What areas do you serve?",
    answer:
      "I work throughout New Braunfels and Comal County — including Canyon Lake, River Chase (my home neighborhood), Vintage Oaks, Veramendi, and the Gruene Historic District. Whether you're looking for a home on the Comal River, a Hill Country acreage lot, or a neighborhood with easy access to I-35, I know these communities street by street. If you're not sure which area fits your lifestyle, that's exactly the conversation I love to have.",
  },
  {
    question: "Why work with a local agent instead of searching on my own?",
    answer:
      "National platforms show you what's listed — they can't tell you which streets flood, which neighborhoods are walkable to Gruene Hall, or which subdivisions have HOA restrictions that might surprise you later. As someone who lives and works here, I bring that context to every showing and every offer. That local knowledge routinely saves my clients from costly mistakes and helps them find homes that never would have surfaced in an algorithm.",
  },
  {
    question: "What makes New Braunfels different from other Texas markets?",
    answer:
      "New Braunfels sits in a genuinely rare spot — 45 minutes to Austin, 30 minutes to San Antonio, and right on two of the most beloved rivers in Texas. It has the feel of a small town with real infrastructure, a thriving downtown, and some of the best outdoor access in the state. The growth here isn't accidental; people find it and decide to stay, which creates steady demand and a strong sense of community that's hard to replicate elsewhere.",
  },
  {
    question: "How do I get started — buying or selling?",
    answer:
      "The easiest first step is a short conversation. For buyers, we'll talk through your timeline, budget, and what you're actually looking for in a home and a neighborhood. For sellers, I'll walk your property, pull the relevant comps, and give you an honest picture of what it's worth and how to position it. There's no pressure and no obligation — just a straightforward exchange of information so you can make a confident decision.",
  },
  {
    question: "How competitive is the New Braunfels market right now?",
    answer:
      "It depends on the price point and neighborhood, and I'll give you a straight answer based on current data, not a sales pitch. Well-priced homes in desirable areas still move quickly and can attract multiple offers, while other segments have more room to negotiate. Knowing which situation you're walking into — before you make an offer — is one of the most valuable things a local agent can do for you.",
  },
  {
    question: "What does working with you actually look like?",
    answer:
      "I keep things simple and communicative — you'll always know where things stand and what's coming next. I handle the research, the negotiations, the coordination with lenders and title companies, and the hundred small details that can derail a transaction if nobody's watching them. My clients often tell me they felt taken care of without feeling pressured, which is exactly the experience I aim for every time.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema() as Record<string, unknown>} />
      <JsonLd schema={webSiteSchema() as Record<string, unknown>} />
      <JsonLd schema={realEstateAgentSchema() as Record<string, unknown>} />
      <JsonLd schema={localBusinessSchema() as Record<string, unknown>} />
      <JsonLd schema={faqSchema(homepageFaqs) as Record<string, unknown>} />
      <main id="main">
        <HomeHero />
        <HomeTrust />
        <HomeExplore />
        <HomeNeighborhoods />
        <HomeSocialProof />
        <HomeMarket />

        {/* FAQ section */}
        <section className="section-wrap py-20 md:py-28 lg:py-32">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">Common questions</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">What people ask before reaching out.</h2>
              <p className="dek mt-6">
                Straightforward answers to the questions buyers, sellers, and curious neighbors ask most often.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={site.contactPath} className="btn-primary">
                  Start a conversation
                  <span aria-hidden className="text-base">→</span>
                </a>
                <a href={site.phoneHref} className="editorial-link text-sm font-medium tracking-wide">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="divide-y divide-ink/[0.07]">
                {homepageFaqs.map((faq) => (
                  <details key={faq.question} className="group py-6">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                      <h3 className="text-[1.0rem] font-medium leading-[1.55] text-ink">{faq.question}</h3>
                      <span
                        aria-hidden
                        className="mt-0.5 flex-shrink-0 text-ink/40 transition-transform duration-300 group-open:rotate-45"
                      >
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-[0.9375rem] leading-[1.75] text-ink/65">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HomeFinalCta />
      </main>
    </>
  );
}
