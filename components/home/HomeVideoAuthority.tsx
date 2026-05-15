"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { videoAuthority, videoCards } from "@/lib/home-content";
import {
  editorialStagger,
  fadeUp,
  transitionBase,
  useParallaxY,
  viewportOnce,
} from "./motion";

export function HomeVideoAuthority() {
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : transitionBase;
  const sectionRef = useRef<HTMLElement>(null);
  const haloY = useParallaxY(sectionRef, [-20, 20]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-ink py-section-y md:py-section-y-md lg:py-section-y-lg"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: reduce ? 0 : haloY }}
      >
        <div className="absolute -top-32 left-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[160px]" />
        <div className="absolute -bottom-40 right-[-6rem] h-[42rem] w-[42rem] rounded-full bg-copper/[0.12] blur-[180px]" />
      </motion.div>

      <div className="section-wrap relative">
        <motion.div
          className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.05, 0.1)}
        >
          <div className="lg:col-span-8">
            <motion.div variants={fadeUp} transition={t} className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-paper/35" />
              <p className="eyebrow !text-paper/70">{videoAuthority.eyebrow}</p>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={t}
              className="display-lg mt-6 !text-paper"
            >
              {videoAuthority.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={t}
              className="dek mt-8 !text-paper/70"
            >
              {videoAuthority.dek}
            </motion.p>
          </div>
          <motion.div
            variants={fadeUp}
            transition={t}
            className="flex flex-wrap items-center gap-5 lg:col-span-4 lg:justify-end"
          >
            <Link href={videoAuthority.primaryCta.href} className="btn-on-dark" target="_blank" rel="noopener noreferrer">
              {videoAuthority.primaryCta.label}
              <span aria-hidden className="text-base">→</span>
            </Link>
            <Link
              href={videoAuthority.secondaryCta.href}
              className="editorial-link editorial-link-light text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {videoAuthority.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {videoCards.map((card, i) => (
            <motion.article
              key={card.kind}
              variants={fadeUp}
              transition={{ ...t, delay: reduce ? 0 : i * 0.06 }}
              className={`group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <Link
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[16/9]"} w-full overflow-hidden rounded-[24px] bg-ink shadow-glow ring-1 ring-paper/10`}>
                  <Image
                    src={card.posterSrc}
                    alt={card.posterAlt}
                    fill
                    sizes={
                      i === 0
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover transition-transform duration-cinema ease-cinema group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/15"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 text-paper/75 sm:px-6 sm:py-5">
                    <span className="caption !text-paper/65">{card.eyebrow}</span>
                    <span className="caption !text-paper/65">{card.runtime}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="relative inline-flex items-center justify-center">
                      <span
                        aria-hidden
                        className="absolute h-20 w-20 rounded-full bg-paper/[0.08] transition-transform duration-cinema ease-cinema group-hover:scale-110 md:h-24 md:w-24"
                      />
                      <span
                        aria-hidden
                        className="absolute h-16 w-16 rounded-full ring-1 ring-paper/40 transition-all duration-cinema ease-cinema group-hover:ring-paper/70 md:h-20 md:w-20"
                      />
                      <span
                        aria-hidden
                        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink shadow-lift md:h-14 md:w-14"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="h-5 w-5 translate-x-[2px] md:h-6 md:w-6"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M5 3.5v13l11-6.5L5 3.5Z" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 px-5 pb-5 sm:px-6 sm:pb-6">
                    <h3
                      className={
                        i === 0
                          ? "display-sm !text-paper md:!text-[1.625rem]"
                          : "font-display text-[1.0625rem] font-medium text-paper"
                      }
                    >
                      {card.title}
                    </h3>
                    {i === 0 ? (
                      <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-paper/75">
                        {card.dek}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 flex items-center justify-between text-paper/55">
          <span className="caption">Field film series · 2026</span>
          <span className="caption">Static posters · no autoplay</span>
        </div>
      </div>
    </section>
  );
}
