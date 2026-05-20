"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroContent } from "@/lib/home-content";
import {
  editorialStagger,
  fade,
  fadeUp,
  transitionBase,
  transitionFast,
  useParallaxY,
} from "./motion";

export function HomeHero() {
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : transitionBase;
  const tFast = reduce ? { duration: 0 } : transitionFast;

  const sectionRef = useRef<HTMLElement>(null);
  const imageY = useParallaxY(sectionRef, [-40, 80]);
  const haloY = useParallaxY(sectionRef, [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[88vh] min-h-[88svh] overflow-hidden bg-ink text-paper"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: reduce ? 0 : imageY }}
      >
        <Image
          src={heroContent.landscapeSrc}
          alt={heroContent.imageAlt}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[center_55%] lg:block"
        />
        <Image
          src={heroContent.portraitSrc}
          alt={heroContent.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%] lg:hidden"
        />
      </motion.div>

      {/*
        Layered overlay system — each layer earns its keep:
        1. Bottom-up ink wash anchors copy in the lower half (mid-stop strengthened from /55 to /68 so headline area stays readable on bright frames).
        2. Top scrim softens the sky just enough for the eyebrow without crushing the warm sunlight.
        3. Left-side directional wash adds a quiet vignette behind the text column so the right side of the hero stays open and cinematic.
        4. Warm copper + primary halos preserved — they're the warm cinematic atmosphere.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink/95 via-ink/68 to-ink/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/5 bg-gradient-to-b from-ink/55 via-ink/15 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-3/5 bg-gradient-to-r from-ink/45 via-ink/15 to-transparent md:block"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: reduce ? 0 : haloY }}
      >
        <div className="absolute -top-24 left-1/3 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-copper/[0.14] blur-[140px]" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[36rem] w-[36rem] rounded-full bg-primary-soft/[0.16] blur-[160px]" />
      </motion.div>

      <div className="relative z-10 flex min-h-[88vh] min-h-[88svh] flex-col">
        <div className="flex-1" />
        <div className="section-wrap pb-16 pt-24 sm:pb-20 sm:pt-28 md:pb-24 lg:pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={editorialStagger(0.08, 0.12)}
            className="max-w-[58rem]"
          >
            <motion.div
              variants={fadeUp}
              transition={tFast}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-paper/70" aria-hidden />
              <span
                className="eyebrow !text-paper/90"
                style={{ textShadow: "0 1px 14px rgba(15, 22, 38, 0.45)" }}
              >
                {heroContent.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={t}
              className="display-xl mt-8 text-paper"
              style={{
                textShadow:
                  "0 1px 1px rgba(15, 22, 38, 0.35), 0 2px 24px rgba(15, 22, 38, 0.45)",
              }}
            >
              {heroContent.headlineBefore}
              <br className="hidden md:block" />{" "}
              <span className="italic text-paper">{heroContent.headlineItalic}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={t}
              className="dek mt-8 max-w-[36rem] !text-paper/95"
              style={{ textShadow: "0 1px 16px rgba(15, 22, 38, 0.42)" }}
            >
              {heroContent.dek}
            </motion.p>

            <motion.div
              variants={fade}
              transition={t}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <Link href={heroContent.primaryCta.href} className="btn-on-dark">
                {heroContent.primaryCta.label}
                <span aria-hidden className="text-base">→</span>
              </Link>
              <Link
                href={heroContent.secondaryCta.href}
                className="editorial-link editorial-link-light text-sm font-medium tracking-wide"
              >
                {heroContent.secondaryCta.label}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="section-wrap relative pb-8 pt-10 sm:pb-10">
          <div className="flex items-end justify-between gap-6">
            <div className="hidden sm:block">
              <span
                className="caption !text-paper/75"
                style={{ textShadow: "0 1px 12px rgba(15, 22, 38, 0.4)" }}
              >
                New Braunfels · Comal and Guadalupe corridors
              </span>
            </div>
            <div className="flex items-center gap-3 text-paper/80">
              <span
                className="caption !text-paper/75"
                style={{ textShadow: "0 1px 12px rgba(15, 22, 38, 0.4)" }}
              >
                Scroll
              </span>
              <span aria-hidden className="block h-10 w-px bg-paper/45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
