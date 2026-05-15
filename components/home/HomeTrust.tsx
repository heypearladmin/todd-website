"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { localGuide, trustColophon, trustTextureSrc } from "@/lib/home-content";
import { site } from "@/lib/site";
import {
  editorialStagger,
  fadeUp,
  transitionBase,
  useParallaxY,
  viewportOnce,
} from "./motion";

export function HomeTrust() {
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : transitionBase;
  const sectionRef = useRef<HTMLElement>(null);
  const portraitY = useParallaxY(sectionRef, [-30, 30]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-paper py-section-y md:py-section-y-md lg:py-section-y-lg"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: `url(${trustTextureSrc})`, backgroundSize: "cover" }}
      />
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0" />

      <div className="section-wrap relative">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-12 lg:items-center">
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={t}
          >
            <div className="relative mx-auto max-w-[28rem] lg:mx-0 lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 bg-copper/[0.06] blur-3xl"
              />
              <div className="relative overflow-hidden rounded-[28px] ring-1 ring-ink/[0.08] shadow-surface">
                <motion.div
                  style={{ y: reduce ? 0 : portraitY }}
                  className="relative aspect-[4/5] w-full"
                >
                  <Image
                    src={site.agentPortraitSrc}
                    alt={site.agentPortraitAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    className="object-cover object-[center_22%]"
                  />
                </motion.div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/30 via-ink/[0.08] to-transparent"
                />
                <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between text-paper">
                  <span className="caption !text-paper/85">{site.agentName}</span>
                  <span className="caption !text-paper/65">New Braunfels, TX</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 lg:pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
          >
            <motion.div variants={fadeUp} transition={t} className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">{localGuide.eyebrow}</p>
            </motion.div>

            <motion.h2 variants={fadeUp} transition={t} className="display-lg mt-6 text-ink">
              {localGuide.title}
            </motion.h2>

            <motion.p variants={fadeUp} transition={t} className="dek mt-8">
              {localGuide.dek}
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              transition={t}
              className="mt-10 border-l-2 border-copper/70 pl-6 text-[1.125rem] italic leading-[1.6] text-ink/85 md:text-[1.25rem]"
            >
              {localGuide.pullQuote}
            </motion.blockquote>

            <motion.p variants={fadeUp} transition={t} className="mt-10">
              <Link href={localGuide.aboutHref} className="editorial-link text-sm font-medium tracking-wide">
                {localGuide.aboutLabel} →
              </Link>
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 border-t border-ink/[0.08] pt-12 md:mt-24 md:pt-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.05, 0.08)}
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <motion.p
              variants={fadeUp}
              transition={t}
              className="text-[1.0625rem] leading-[1.78] text-ink/75 md:col-span-7"
            >
              {trustColophon.proof}
            </motion.p>
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5">
              {trustColophon.lines.map((row) => (
                <motion.div key={row.label} variants={fadeUp} transition={t} className="space-y-2">
                  <dt className="caption !text-ink/45">{row.label}</dt>
                  <dd className="font-display text-2xl font-medium text-primary md:text-[1.75rem]">
                    {row.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
