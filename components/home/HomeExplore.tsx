"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { exploreTiles } from "@/lib/home-content";
import { fadeUp, transitionBase, viewportOnce } from "./motion";

/**
 * Editorial bento for 8 explore categories.
 * Index-driven sizing to keep the grid intentionally asymmetric.
 */
const layout = [
  // 0 restaurants
  { col: "lg:col-span-7", aspect: "aspect-[5/4]", size: "lg" },
  // 1 river life (portrait companion)
  { col: "lg:col-span-5", aspect: "aspect-[3/4]", size: "md" },
  // 2 live music (portrait)
  { col: "lg:col-span-5", aspect: "aspect-[4/5]", size: "md" },
  // 3 breweries (landscape)
  { col: "lg:col-span-7", aspect: "aspect-[16/10]", size: "lg" },
  // 4 hidden gems (cinematic full-bleed)
  { col: "lg:col-span-12", aspect: "aspect-[21/9] md:aspect-[24/9]", size: "xl" },
  // 5 weekend activities (square)
  { col: "lg:col-span-4", aspect: "aspect-square", size: "sm" },
  // 6 neighborhood guides (square)
  { col: "lg:col-span-4", aspect: "aspect-square", size: "sm" },
  // 7 family activities (square)
  { col: "lg:col-span-4", aspect: "aspect-square", size: "sm" },
] as const;

export function HomeExplore() {
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : transitionBase;

  return (
    <section className="relative overflow-hidden bg-paper py-section-y md:py-section-y-md lg:py-section-y-lg">
      <div className="section-wrap">
        <motion.div
          className="max-w-[44rem]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} transition={t} className="flex items-center gap-3">
            <span className="tick" aria-hidden />
            <p className="eyebrow">Explore New Braunfels</p>
          </motion.div>
          <motion.h2 variants={fadeUp} transition={t} className="display-lg mt-6 text-ink">
            A city worth knowing, one vignette at a time.
          </motion.h2>
          <motion.p variants={fadeUp} transition={t} className="dek mt-8">
            Restaurants, river life, live music, breweries, hidden gems, weekend rhythm, neighborhood guides, and family days. A premium local read, kept honest.
          </motion.p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-7">
          {exploreTiles.map((tile, i) => {
            const cell = layout[i] ?? layout[0];
            return (
              <motion.article
                key={tile.category}
                className={`group ${cell.col}`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ ...t, delay: reduce ? 0 : Math.min(i * 0.05, 0.24) }}
              >
                <Link href={tile.href} className="block">
                  <div className={`relative ${cell.aspect} w-full overflow-hidden rounded-[24px] bg-ink/[0.04] shadow-surface ring-1 ring-ink/[0.06] transition-shadow duration-cinema ease-cinema group-hover:shadow-surface-hover`}>
                    <Image
                      src={tile.imageSrc}
                      alt={tile.imageAlt}
                      fill
                      sizes={
                        cell.size === "xl"
                          ? "100vw"
                          : cell.size === "lg"
                          ? "(max-width: 1024px) 100vw, 60vw"
                          : cell.size === "md"
                          ? "(max-width: 1024px) 100vw, 42vw"
                          : "(max-width: 1024px) 100vw, 33vw"
                      }
                      className="object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.045]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-transparent opacity-70"
                    />
                    <div className="absolute left-6 top-6 flex items-center gap-2 text-paper/85 sm:left-7 sm:top-7">
                      <span className="caption !text-paper/70">
                        № {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden className="h-px w-6 bg-paper/40" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 md:p-8">
                      <h3
                        className={
                          cell.size === "xl"
                            ? "display-lg !text-paper max-w-[28rem]"
                            : cell.size === "lg"
                            ? "display-md !text-paper max-w-[22rem]"
                            : cell.size === "md"
                            ? "display-sm !text-paper max-w-[18rem]"
                            : "display-sm !text-paper max-w-[14rem]"
                        }
                      >
                        {tile.title}
                      </h3>
                      <p className="mt-3 max-w-md text-[0.875rem] leading-relaxed text-paper/80 md:text-[0.9375rem]">
                        {tile.dek}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-2 text-paper/85">
                        <span className="caption !text-paper/65">Read field note</span>
                        <span
                          aria-hidden
                          className="block h-px w-8 bg-paper/45 transition-all duration-cinema ease-cinema group-hover:w-14 group-hover:bg-copper"
                        />
                      </div>
                    </div>
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
