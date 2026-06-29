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

      </div>
    </section>
  );
}
