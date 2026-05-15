"use client";

import { useEffect, useState } from "react";
import { useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";

/* ─────────────────────────── easing ─────────────────────────── */
export const editorialEase = [0.22, 1, 0.36, 1] as [number, number, number, number];
export const cinemaEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─────────────────────────── transitions ─────────────────────────── */
export const transitionBase = { duration: 0.78, ease: editorialEase };
export const transitionSlow = { duration: 1.05, ease: cinemaEase };
export const transitionFast = { duration: 0.36, ease: editorialEase };

/* ─────────────────────────── viewport ─────────────────────────── */
export const viewportOnce = {
  once: true as const,
  amount: 0.01 as const,
};

/* ─────────────────────────── variants ─────────────────────────── */
export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpDeep = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export const revealMask = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const editorialStagger = (delayChildren = 0.05, staggerChildren = 0.1) => ({
  visible: {
    transition: { delayChildren, staggerChildren },
  },
});

/* ─────────────────────────── parallax hook ─────────────────────────── */
/**
 * Returns a MotionValue tied to scroll progress over a target element.
 * `range` is the translateY range in pixels at scroll progress 0 → 1.
 * Respects useReducedMotion: returns a static 0 MotionValue when reduced.
 */
export function useParallaxY<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  range: [number, number] = [-60, 60]
): MotionValue<number> {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // useTransform must be called unconditionally; we zero the range when reduced
  return useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : range);
}

/* ─────────────────────────── mount-only flag (avoids SSR hydration mismatch) ─────────────────────────── */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
