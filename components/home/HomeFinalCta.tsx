"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { finalCta } from "@/lib/home-content";
import { site } from "@/lib/site";
import {
  editorialStagger,
  fadeUp,
  transitionBase,
  transitionSlow,
  useParallaxY,
  viewportOnce,
} from "./motion";

export function HomeFinalCta() {
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : transitionBase;
  const tSlow = reduce ? { duration: 0 } : transitionSlow;

  const sectionRef = useRef<HTMLElement>(null);
  const skyY = useParallaxY(sectionRef, [-40, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-ink text-paper"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: reduce ? 0 : skyY }}
      >
        <Image
          src={finalCta.desktopSrc}
          alt={finalCta.imageAlt}
          fill
          sizes="100vw"
          className="hidden object-cover object-center opacity-80 lg:block"
        />
        <Image
          src={finalCta.mobileSrc}
          alt={finalCta.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-75 lg:hidden"
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-ink/20 to-ink/50"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-32 left-1/3 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-copper/[0.14] blur-[180px]" />
        <div className="absolute -top-32 right-[-6rem] h-[36rem] w-[36rem] rounded-full bg-primary-soft/[0.15] blur-[170px]" />
      </div>

      <div className="section-wrap relative py-section-y-md md:py-section-y-lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={editorialStagger(0.05, 0.1)}
          className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10"
        >
          <motion.div
            variants={fadeUp}
            transition={tSlow}
            className="flex items-center gap-3 lg:col-span-12"
          >
            <span aria-hidden className="h-px w-10 bg-paper/40" />
            <p className="eyebrow !text-paper/70">{finalCta.eyebrow}</p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={tSlow}
            className="display-xl !text-paper lg:col-span-10"
          >
            {finalCta.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={t}
            className="dek !text-paper/75 lg:col-span-7"
          >
            {finalCta.dek}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={t}
            className="flex flex-col items-start gap-4 lg:col-span-12 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex flex-wrap items-center gap-5">
              <Link href={finalCta.button.href} className="btn-on-dark">
                {finalCta.button.label}
                <span aria-hidden className="text-base">→</span>
              </Link>
              <Link
                href={finalCta.secondary.href}
                className="editorial-link editorial-link-light text-sm font-medium"
              >
                {finalCta.secondary.label}
              </Link>
            </div>
            <div className="flex flex-col gap-1 text-[0.875rem] text-paper/65 lg:items-end">
              <a href={site.phoneHref} className="hover:text-paper">
                {site.phone}
              </a>
              <a href={site.emailHref} className="hover:text-paper">
                {site.email}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative border-t border-paper/[0.12]">
        <div className="section-wrap flex items-center justify-between py-6 text-paper/55">
          <span className="caption !text-paper/55">
            {site.brand} · New Braunfels, Texas
          </span>
          <span className="caption !text-paper/55">Hill Country twilight</span>
        </div>
      </div>
    </section>
  );
}
