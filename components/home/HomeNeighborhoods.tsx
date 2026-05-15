"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { neighborhoods } from "@/lib/home-content";
import { fadeUp, transitionBase, viewportOnce } from "./motion";

/**
 * Five featured neighborhoods, asymmetric magazine spread.
 *  0 Gruene               col-7 large
 *  1 Downtown NB          col-5 tall companion
 *  2 Canyon Lake          col-12 cinematic full bleed
 *  3 Vintage Oaks         col-6
 *  4 Veramendi            col-6
 */
const layout = [
  { col: "lg:col-span-7", aspect: "aspect-[5/4]", size: "lg", indent: false },
  { col: "lg:col-span-5", aspect: "aspect-[3/4]", size: "md", indent: true },
  { col: "lg:col-span-12", aspect: "aspect-[21/9] md:aspect-[24/8]", size: "xl", indent: false },
  { col: "lg:col-span-6", aspect: "aspect-[4/3]", size: "md", indent: false },
  { col: "lg:col-span-6", aspect: "aspect-[4/3]", size: "md", indent: false },
] as const;

export function HomeNeighborhoods() {
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : transitionBase;

  return (
    <section className="relative overflow-hidden bg-paper py-section-y md:py-section-y-md lg:py-section-y-lg">
      <div className="section-wrap">
        <motion.div
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} transition={t} className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">Featured neighborhoods</p>
            </div>
            <h2 className="display-lg mt-6 text-ink">Five places to start.</h2>
          </motion.div>
          <motion.p variants={fadeUp} transition={t} className="dek lg:col-span-5">
            School paths, tube put ins, porch hours, and walk to water pockets. The quiet details that never fit on an MLS row.
          </motion.p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {neighborhoods.map((n, i) => {
            const cell = layout[i] ?? layout[0];
            return (
              <motion.article
                key={n.slug}
                className={`group ${cell.col} ${cell.indent ? "lg:mt-24" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ ...t, delay: reduce ? 0 : Math.min(i * 0.06, 0.24) }}
              >
                <Link href={n.href} className="block">
                  <div className={`relative ${cell.aspect} w-full overflow-hidden rounded-[28px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover`}>
                    <Image
                      src={n.imageSrc}
                      alt={n.imageAlt}
                      fill
                      sizes={
                        cell.size === "xl"
                          ? "100vw"
                          : cell.size === "lg"
                          ? "(max-width: 1024px) 100vw, 58vw"
                          : "(max-width: 1024px) 100vw, 42vw"
                      }
                      className="object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.045]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/[0.08] to-transparent"
                    />
                    <div className="absolute left-6 top-6 flex items-center gap-2 text-paper/85 sm:left-8 sm:top-8">
                      <span className="caption !text-paper/70">
                        № {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden className="h-px w-6 bg-paper/40" />
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3
                        className={
                          cell.size === "xl" || cell.size === "lg"
                            ? "display-md text-ink"
                            : "display-sm text-ink"
                        }
                      >
                        {n.title}
                      </h3>
                      <span className="caption !text-ink/45">{n.vibe}</span>
                    </div>
                    <p className="max-w-[34rem] text-[0.9375rem] leading-[1.7] text-ink/70">
                      {n.dek}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-cinema ease-cinema group-hover:text-copper">
                      Read the guide
                      <span
                        aria-hidden
                        className="block h-px w-8 bg-primary transition-all duration-cinema ease-cinema group-hover:w-12 group-hover:bg-copper"
                      />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
