import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { insightCards } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes from New Braunfels. Moving guides, cost of living, lifestyle rituals, and real estate trends.",
};

export default function BlogIndexPage() {
  return (
    <main id="main" className="bg-paper">
      <section className="section-wrap py-20 md:py-28 lg:py-32">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Journal</p>
        </div>
        <h1 className="display-lg mt-6 max-w-3xl text-ink">
          Field notes from the corridor.
        </h1>
        <p className="dek mt-8">
          Honest, plain English guides for the questions buyers, sellers, and the curious actually ask. New entries posted regularly.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
          {insightCards.map((card) => (
            <article key={card.kind} className="group">
              <Link href={card.href} className="block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-cinema ease-cinema group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/[0.08] to-transparent"
                  />
                  <div className="absolute left-6 top-6 flex items-center gap-2 text-paper/85">
                    <span className="caption !text-paper/70">{card.eyebrow}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="display-sm text-ink">{card.title}</h2>
                  <p className="mt-3 text-[0.9375rem] leading-[1.7] text-ink/65">{card.dek}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-cinema ease-cinema group-hover:text-copper">
                    Continue reading
                    <span aria-hidden className="block h-px w-8 bg-primary transition-all duration-cinema ease-cinema group-hover:w-12 group-hover:bg-copper" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
