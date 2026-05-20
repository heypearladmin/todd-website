"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import {
  editorialStagger,
  fade,
  fadeUp,
  transitionBase,
  transitionFast,
  useParallaxY,
  viewportOnce,
} from "@/components/home/motion";

/* ─────────────────────────── content ─────────────────────────── */

const fieldNotes: { num: string; title: string; body: string }[] = [
  {
    num: "No. 01",
    title: "Quiet, careful counsel",
    body: "Most of the value shows up in the unsexy parts — disclosures, lender choreography, inspection translations. Calm beats clever every time.",
  },
  {
    num: "No. 02",
    title: "Hyperlocal, not hype",
    body: "Where the school path actually runs. Which cul de sacs go quiet by nine. The bakery line worth standing in. A neighborhood read you can feel.",
  },
  {
    num: "No. 03",
    title: "Long after the close",
    body: "The good calls happen the season after move in. Who to call about the cypress, where to find the right cabinet maker. The relationship is the work.",
  },
];

const localBeats: { when: string; where: string }[] = [
  { when: "Saturday mornings", where: "Farmers market under the live oaks at the Civic Plaza" },
  { when: "Wednesday lunch", where: "Krause's biergarten porch when the weather turns kind" },
  { when: "Late summer", where: "Float trips on the Comal with friends visiting from Austin" },
  { when: "Fall evenings", where: "Gruene Hall, back row, two step room half empty" },
  { when: "Sunday quiet", where: "Walking the river path before the city wakes up" },
];

/* ─────────────────────────── small ui ─────────────────────────── */

function HairlineRule() {
  return <span className="hairline-warm" aria-hidden />;
}

/* ─────────────────────────── component ─────────────────────────── */

export function AboutEditorial() {
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : transitionBase;
  const tFast = reduce ? { duration: 0 } : transitionFast;

  const heroRef = useRef<HTMLElement>(null);
  const portraitOneRef = useRef<HTMLDivElement>(null);
  const cinemaStripRef = useRef<HTMLDivElement>(null);

  const portraitOneY = useParallaxY(portraitOneRef, [-30, 50]);
  const cinemaY = useParallaxY(cinemaStripRef, [-20, 60]);

  return (
    <main id="main" className="bg-paper">
      {/* ─────────────── 1 · OPENING ─────────────── */}
      <section
        ref={heroRef}
        className="relative isolate overflow-hidden bg-paper"
      >
        <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-[20%] -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-copper/[0.10] blur-[160px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-[-10%] -z-10 h-[34rem] w-[34rem] rounded-full bg-primary-soft/[0.12] blur-[180px]"
        />

        <div className="section-wrap relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={editorialStagger(0.06, 0.1)}
            className="grid gap-y-12 lg:grid-cols-12 lg:items-end lg:gap-x-12"
          >
            <motion.div
              variants={fadeUp}
              transition={tFast}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">About · A field guide</p>
              </div>
              <h1 className="display-xl mt-8 max-w-[34rem] text-ink">
                A guide{" "}
                <span className="italic text-ink/95">before</span>{" "}
                an agent.
              </h1>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={t}
              className="lg:col-span-4"
            >
              <p className="dek !text-ink/70">
                Fifteen years in the New Braunfels corridor. Limestone porches, river bends, and a thousand small decisions that turn a contract into a home.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium">
                <Link href={site.contactPath} className="editorial-link">
                  Start a conversation
                </Link>
                <Link href={site.neighborhoodsPath} className="editorial-link">
                  Neighborhood guides
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 2 · FIRST PORTRAIT + INTRO (asymmetric) ─────────────── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="section-wrap pb-section-y md:pb-section-y-md lg:pb-section-y-lg">
          <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-12">
            {/* Portrait — anchored left, indented down for asymmetry */}
            <motion.div
              ref={portraitOneRef}
              initial={fade.hidden}
              whileInView={fade.visible}
              viewport={viewportOnce}
              transition={t}
              className="lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:-mt-12"
            >
              <motion.div
                style={{ y: reduce ? 0 : portraitOneY }}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06]"
              >
                <Image
                  src="/images/todd-spencer-downtown-editorial-walk.webp"
                  alt="Editorial portrait of Todd Spencer walking through downtown New Braunfels at soft hour, limestone storefronts and warm window light along the sidewalk."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_30%]"
                  priority
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
                />
              </motion.div>
              <div className="mt-5 flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-ink/25" />
                <p className="caption !text-ink/55">
                  Main Street · soft hour, on foot
                </p>
              </div>
            </motion.div>

            {/* Copy — right column, indented down for the magazine feel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={editorialStagger(0.06, 0.12)}
              className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:pt-24"
            >
              <motion.div
                variants={fadeUp}
                transition={tFast}
                className="flex items-center gap-3"
              >
                <span className="tick" aria-hidden />
                <p className="eyebrow">The short story</p>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                transition={t}
                className="display-lg mt-7 text-ink"
              >
                I grew up listening to this town.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                transition={t}
                className="mt-8 max-w-[34rem] text-[1.0625rem] leading-[1.78] text-ink/75"
              >
                To the way the cypress hush in August. To the porch light at the bend in the river road. Real estate, the way I do it, is mostly listening — to neighborhoods, to numbers, and to the families trying to read both.
              </motion.p>

              <motion.div
                variants={fade}
                transition={t}
                className="mt-12 flex items-center gap-4"
              >
                <Link
                  href={site.contactPath}
                  className="editorial-link text-sm font-medium tracking-wide"
                >
                  Tell me the chapter you are in
                </Link>
                <span aria-hidden className="block h-px w-10 bg-ink/25" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── 3 · PULL QUOTE INTERLUDE ─────────────── */}
      <section className="relative isolate overflow-hidden bg-paper-deep">
        <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-70" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-6rem] -z-10 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-copper/[0.08] blur-[140px]"
        />

        <div className="section-wrap relative py-section-y md:py-section-y-md">
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.05, 0.12)}
            className="mx-auto max-w-[58rem]"
          >
            <motion.div variants={fadeUp} transition={tFast} className="flex items-center gap-3">
              <span aria-hidden className="block h-px w-10 bg-ink/30" />
              <p className="caption !text-ink/55">A working philosophy</p>
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              transition={t}
              className="mt-8 font-display text-[clamp(1.6rem,3.6vw,2.75rem)] font-medium leading-[1.18] tracking-[-0.018em] text-ink"
            >
              <span className="text-copper">“</span>
              The map is easy. The feeling takes longer. The trick is to walk it with someone who isn’t in a hurry — and to make the math kind enough that you can take your time.
              <span className="text-copper">”</span>
            </motion.blockquote>

            <motion.figcaption
              variants={fade}
              transition={t}
              className="mt-8 flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.22em] text-ink/55"
            >
              <span aria-hidden className="block h-px w-8 bg-ink/35" />
              <span>Todd Spencer · New Braunfels</span>
            </motion.figcaption>
          </motion.figure>
        </div>
      </section>

      {/* ─────────────── 4 · FIELD NOTES — three editorial vignettes ─────────────── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="section-wrap py-section-y md:py-section-y-md lg:py-section-y-lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.05, 0.1)}
            className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-12"
          >
            <motion.div variants={fadeUp} transition={t} className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">Field notes</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">
                What I actually bring.
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              transition={t}
              className="dek lg:col-span-5 lg:col-start-8"
            >
              Three quiet skills. None of them sound dramatic. All of them make the difference between a stressful close and a small, beautiful chapter.
            </motion.p>
          </motion.div>

          <div className="mt-16 lg:mt-24">
            <HairlineRule />
            {fieldNotes.map((note, i) => (
              <motion.article
                key={note.num}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ ...t, delay: reduce ? 0 : Math.min(i * 0.06, 0.18) }}
              >
                <div className="grid gap-y-4 py-10 md:py-12 lg:grid-cols-12 lg:items-baseline lg:gap-x-12">
                  <p className="caption !text-ink/45 lg:col-span-2">{note.num}</p>
                  <h3 className="display-sm text-ink lg:col-span-4">
                    {note.title}
                  </h3>
                  <p className="max-w-[34rem] text-[1rem] leading-[1.78] text-ink/70 lg:col-span-6">
                    {note.body}
                  </p>
                </div>
                <HairlineRule />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 5 · CINEMATIC FULL-BLEED PORTRAIT ─────────────── */}
      <section
        ref={cinemaStripRef as React.RefObject<HTMLElement>}
        className="relative isolate overflow-hidden bg-ink"
      >
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ y: reduce ? 0 : cinemaY }}
        >
          <Image
            src="/images/about-cinematic-comal-walk.webp"
            alt="Cinematic editorial photograph of Todd Spencer walking the limestone bank of the Comal River at golden hour, cypress canopy and clear water in soft warm light."
            fill
            sizes="100vw"
            className="object-cover object-[70%_center]"
            priority={false}
          />
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-3/5 bg-gradient-to-r from-ink/55 via-ink/15 to-transparent md:block"
        />

        <div className="section-wrap relative min-h-[72vh] py-24 md:min-h-[78vh] md:py-32 lg:min-h-[82vh] lg:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.06, 0.12)}
            className="flex h-full min-h-[60vh] max-w-[40rem] flex-col justify-end"
          >
            <motion.div
              variants={fadeUp}
              transition={tFast}
              className="flex items-center gap-3"
            >
              <span aria-hidden className="block h-px w-10 bg-paper/65" />
              <span
                className="eyebrow !text-paper/85"
                style={{ textShadow: "0 1px 14px rgba(15, 22, 38, 0.5)" }}
              >
                Comal riverwalk · golden hour
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={t}
              className="display-lg mt-7 text-paper"
              style={{
                textShadow:
                  "0 1px 1px rgba(15, 22, 38, 0.35), 0 2px 26px rgba(15, 22, 38, 0.45)",
              }}
            >
              The river sets the pace.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={t}
              className="mt-7 max-w-[32rem] text-[1.0625rem] leading-[1.78] !text-paper/90"
              style={{ textShadow: "0 1px 14px rgba(15, 22, 38, 0.45)" }}
            >
              Listings live online. Neighborhoods live at sidewalk speed — and most of what I know about this corridor I learned with my feet wet, slowing down to the rhythm of the water.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 6 · LOCALLY SPECIFIC ─────────────── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="section-wrap py-section-y md:py-section-y-md lg:py-section-y-lg">
          <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={editorialStagger(0.05, 0.1)}
              className="lg:col-span-5"
            >
              <motion.div variants={fadeUp} transition={tFast} className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">A standing schedule</p>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                transition={t}
                className="display-lg mt-6 text-ink"
              >
                Where you’ll find me.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={t}
                className="dek mt-6 max-w-[28rem] !text-ink/65"
              >
                The week has its own rhythm. Most of it happens between the river and Main, on foot, with time to talk.
              </motion.p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={editorialStagger(0.04, 0.07)}
              className="lg:col-span-6 lg:col-start-7"
            >
              <HairlineRule />
              {localBeats.map((beat) => (
                <motion.li
                  key={beat.when}
                  variants={fadeUp}
                  transition={t}
                  className="grid gap-1 py-6 md:grid-cols-[10rem_1fr] md:items-baseline md:gap-8 md:py-7"
                >
                  <p className="caption !text-ink/55">{beat.when}</p>
                  <p className="text-[1rem] leading-[1.7] text-ink/80">
                    {beat.where}
                  </p>
                  <span className="sr-only">—</span>
                  <span aria-hidden className="md:col-span-2">
                    <HairlineRule />
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ─────────────── 7 · CLOSING ─────────────── */}
      <section className="relative isolate overflow-hidden bg-paper-deep">
        <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-10rem] right-[-6rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-copper/[0.10] blur-[150px]"
        />

        <div className="section-wrap relative py-section-y md:py-section-y-md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={editorialStagger(0.05, 0.1)}
            className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-12"
          >
            <motion.div variants={fadeUp} transition={t} className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="tick" aria-hidden />
                <p className="eyebrow">An open invitation</p>
              </div>
              <h2 className="display-lg mt-6 text-ink">
                No pitch. Just a long walk and a careful read.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={t}
              className="lg:col-span-5 lg:col-start-8"
            >
              <p className="text-[1.0625rem] leading-[1.78] text-ink/70">
                First time buying, relocating, downsizing, or simply curious about the corridor — write whenever you’re ready. I read every note and reply within a business day.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href={site.contactPath} className="btn-primary">
                  Send Todd a note
                  <span aria-hidden className="text-base">→</span>
                </Link>
                <a
                  href={site.phoneHref}
                  className="editorial-link text-sm font-medium tracking-wide"
                >
                  {site.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
