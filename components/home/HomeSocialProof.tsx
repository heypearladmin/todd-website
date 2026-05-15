"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { googleReviewStats, storyWins, testimonials } from "@/lib/home-content";
import { fadeUp, transitionBase, viewportOnce } from "./motion";

export function HomeSocialProof() {
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : transitionBase;

  return (
    <section className="relative overflow-hidden bg-paper-deep py-section-y md:py-section-y-md lg:py-section-y-lg">
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-60" />

      <div className="section-wrap relative">
        <motion.div
          className="grid gap-y-6 lg:grid-cols-12 lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} transition={t} className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Margins</p>
            </div>
            <h2 className="display-lg mt-6 text-ink">Clients, in their own words.</h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={t}
            className="lg:col-span-5 lg:justify-self-end"
          >
            <Link
              href={googleReviewStats.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-5 rounded-full border border-ink/10 bg-paper px-6 py-3 shadow-surface transition-shadow duration-cinema ease-cinema hover:shadow-surface-hover"
            >
              <div className="flex flex-col">
                <span className="font-display text-2xl font-medium text-primary">
                  {googleReviewStats.rating}
                  <span className="ml-1 text-base font-normal text-ink/55">/ 5.0</span>
                </span>
                <span className="caption !text-ink/55">
                  {googleReviewStats.count} {googleReviewStats.source}
                </span>
              </div>
              <span
                aria-hidden
                className="h-8 w-px bg-ink/15"
              />
              <span className="text-sm font-medium text-primary transition-colors duration-cinema ease-cinema group-hover:text-copper">
                Read reviews
                <span aria-hidden className="ml-2 inline-block">→</span>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-20 space-y-20 md:space-y-28 lg:space-y-32">
          {testimonials.map((item, i) => {
            const right = i % 2 === 1;
            return (
              <motion.figure
                key={item.attribution}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ ...t, delay: reduce ? 0 : i * 0.05 }}
                className={`grid grid-cols-12 gap-x-6 gap-y-8 ${right ? "lg:text-right" : ""}`}
              >
                <div className={`col-span-12 lg:col-span-2 ${right ? "lg:col-start-11 lg:order-2" : ""}`}>
                  <span className="caption !text-ink/45">
                    № {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>

                <blockquote
                  className={`col-span-12 lg:col-span-10 ${right ? "lg:col-start-1 lg:order-1" : ""}`}
                >
                  <p className="font-display text-[1.5rem] font-medium leading-[1.3] text-ink md:text-[1.875rem] lg:text-[2.25rem]">
                    <span aria-hidden className="mr-1 text-copper/80">“</span>
                    {item.quote}
                    <span aria-hidden className="ml-1 text-copper/80">”</span>
                  </p>
                  <figcaption className={`mt-8 flex flex-wrap items-baseline gap-2 text-[0.8125rem] text-ink/55 ${right ? "lg:justify-end" : ""}`}>
                    <span className="font-medium uppercase tracking-[0.22em] text-ink/70">
                      {item.attribution}
                    </span>
                    <span aria-hidden className="text-ink/30">·</span>
                    <span className="text-ink/55">{item.context}</span>
                  </figcaption>
                </blockquote>
              </motion.figure>
            );
          })}
        </div>

        <motion.div
          className="mt-24 border-t border-ink/[0.08] pt-14 md:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} transition={t} className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">Story wins</p>
          </motion.div>
          <motion.h3 variants={fadeUp} transition={t} className="display-md mt-5 text-ink">
            Small numbers, real outcomes.
          </motion.h3>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
            {storyWins.map((win, i) => (
              <motion.article
                key={win.title}
                variants={fadeUp}
                transition={{ ...t, delay: reduce ? 0 : i * 0.06 }}
                className="relative rounded-[24px] border border-ink/[0.08] bg-paper p-7 shadow-surface md:p-8"
              >
                <p className="font-display text-[2.5rem] font-semibold leading-none text-primary md:text-[3rem]">
                  {win.metric}
                </p>
                <h4 className="display-sm mt-5 text-ink">{win.title}</h4>
                <p className="mt-3 text-[0.9375rem] leading-[1.7] text-ink/65">{win.dek}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
