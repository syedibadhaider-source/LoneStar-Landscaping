"use client";

import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

export const softReveal: Variants = {
  hidden: { opacity: 0, y: 38, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const gentleStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

export const cardHover = {
  y: -6,
};

export const cardHoverTransition = {
  duration: 0.25,
  ease: "easeOut" as const,
};

export const revealViewport = { once: true, margin: "-90px" };

export const smoothSpring = {
  type: "spring" as const,
  stiffness: 90,
  damping: 18,
  mass: 0.75,
};

export const heroParent = staggerContainer;

export const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};
