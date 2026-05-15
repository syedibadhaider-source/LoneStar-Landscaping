"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

import { heroFadeUp, heroParent } from "@/components/site/motion";
import { heroSlides } from "@/data/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section id="home" className="relative min-h-0 bg-[var(--pine)] py-20 text-white sm:py-24 lg:min-h-[720px] lg:py-0">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.01 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: "easeOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={activeSlide === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,33,66,0.98)_0%,rgba(22,33,66,0.86)_38%,rgba(22,33,66,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(61,113,35,0.18),transparent_28%),radial-gradient(circle_at_72%_18%,rgba(242,91,30,0.1),transparent_22%)]" />

      <div className="section-shell relative z-10 flex min-h-0 items-center lg:min-h-[720px]">
        <motion.div variants={heroParent} initial="hidden" animate="visible" className="w-full max-w-4xl text-left lg:w-[58%]">
          <motion.h1 variants={heroFadeUp} className="font-heading max-w-4xl text-[42px] font-extrabold leading-[1.03] text-white md:text-[64px] lg:text-[76px] xl:text-[86px]">
            Your Property.
            <br />
            <motion.span
              className="block text-[var(--accent)]"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: 0.3, ease: "easeOut" }}
            >
              Perfectly
            </motion.span>
            <motion.span
              className="block text-[var(--accent)]"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: 0.46, ease: "easeOut" }}
            >
              Maintained.
            </motion.span>
          </motion.h1>

          <motion.p variants={heroFadeUp} className="mt-7 max-w-xl text-[17px] leading-8 text-white/82 md:text-[20px]">
            Professional landscaping and property maintenance that keeps every exterior looking its best.
          </motion.p>

          <motion.div variants={heroFadeUp} className="mt-9">
            <a
              href="#quote"
              className="inline-flex items-center gap-5 rounded-lg bg-[var(--green)] px-7 py-4 text-base font-extrabold text-white shadow-[0_18px_46px_rgba(61,113,35,0.32)] transition hover:-translate-y-0.5 hover:bg-[var(--green-strong)] hover:shadow-[0_24px_58px_rgba(61,113,35,0.38)] md:px-9 md:py-5 md:text-lg"
            >
              <span className="grid size-9 place-items-center rounded-md border border-white/26">
                <Leaf className="size-5" />
              </span>
              Get a Free Quote
              <ArrowRight className="size-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
