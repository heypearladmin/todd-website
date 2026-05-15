"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { insightCards, marketInsights } from "@/lib/home-content";
import { fadeUp, transitionBase, viewportOnce } from "./motion";

export function HomeMarket() {
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : transitionBase;

  return (
    <section className="relative overflow-hidden bg-paper py-section-y md:py-section-y-md lg:py-section-y-lg">
      <div className="section-wrap">
        <motion.div
          className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <div className="lg:col-span-7">
            <motion.div variants={fadeUp} transition={t} className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">{marketInsights.eyebrow}</p>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t} className="display-lg mt-6 text-ink">
              {marketInsights.title}
            </motion.h2>
            <motion.p variants={fadeUp} transition={t} className="dek mt-8">
              {marketInsights.dek}
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            transition={t}
            className="relative overflow-hidden rounded-[24px] bg-paper-deep p-7 ring-1 ring-ink/[0.06] shadow-surface md:p-8 lg:col-span-5"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 right-[-4rem] h-48 w-48 rounded-full bg-primary-soft/15 blur-3xl"
            />
            <p className="caption !text-ink/55">{marketInsights.signalLabel}</p>
            <p className="mt-3 font-display text-[3rem] font-semibold leading-none text-primary md:text-[3.75rem]">
              {marketInsights.signalValue}
            </p>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink/65">
              {marketInsights.signalDek}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {insightCards.map((card, i) => (
            <motion.article
              key={card.kind}
              variants={fadeUp}
              transition={{ ...t, delay: reduce ? 0 : i * 0.05 }}
              className="group"
            >
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
                  <h3 className="display-sm text-ink">{card.title}</h3>
                  <p className="mt-3 max-w-[34rem] text-[0.9375rem] leading-[1.7] text-ink/65">
                    {card.dek}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-cinema ease-cinema group-hover:text-copper">
                    Read the guide
                    <span
                      aria-hidden
                      className="block h-px w-8 bg-primary transition-all duration-cinema ease-cinema group-hover:w-12 group-hover:bg-copper"
                    />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
