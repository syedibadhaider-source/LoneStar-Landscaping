"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Button } from "@/components/ui/button";
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
    }, 5600);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-[var(--pine)] text-white md:min-h-[860px]">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.01 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: "easeOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={activeSlide === 0}
              className="object-cover ambient-pan"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,31,51,0.88)_0%,rgba(7,31,51,0.68)_34%,rgba(7,31,51,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(0deg,rgba(7,31,51,0.78),transparent)]" />

      <div className="section-shell relative z-10 flex min-h-[760px] items-end pb-20 pt-32 md:min-h-[860px] md:pb-24">
        <motion.div variants={heroParent} initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div
            variants={heroFadeUp}
            className="ambient-float-slow inline-flex items-center gap-3 rounded-full border border-white/22 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/86 backdrop-blur-md"
          >
            <FilledIcon name="leaf" className="size-4 text-[var(--accent)]" />
            {slide.label}
          </motion.div>

          <motion.h1
            key={slide.headline}
            variants={heroFadeUp}
            className="font-heading mt-6 max-w-2xl text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[62px]"
          >
            {slide.headline}
          </motion.h1>

          <motion.p key={slide.text} variants={heroFadeUp} className="mt-5 max-w-lg text-[15px] font-normal leading-7 text-white/80 md:text-[17px]">
            {slide.text}
          </motion.p>

          <motion.div variants={heroFadeUp} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="soft-sheen arrow-drift" asChild>
              <a href="#quote">
                Get a Free Quote
                <FilledIcon name="arrow" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="arrow-drift" asChild>
              <a href="#services">
                View Services
                <FilledIcon name="arrow" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -10, 0] }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { opacity: { duration: 0.7, delay: 0.45, ease: "easeOut" }, y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" } }
          }
          className="absolute right-8 top-36 hidden w-64 rounded-3xl bg-white p-3 text-[var(--foreground)] shadow-[0_28px_90px_rgba(7,31,51,0.34)] lg:block"
        >
          <div className="overflow-hidden rounded-2xl bg-[var(--muted)]">
            <Image src={slide.image} alt="" width={480} height={330} className="h-44 w-full object-cover" />
          </div>
          <div className="flex items-start justify-between gap-4 p-3">
            <div>
              <p className="font-heading text-base font-bold text-[var(--pine)]">{slide.label}</p>
              <p className="mt-1 text-xs leading-5 text-[var(--muted-foreground)]">{slide.text}</p>
            </div>
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--green)] text-white">
              <FilledIcon name="arrow" className="size-4" />
            </span>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroSlides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              aria-label={`Show hero slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all ${index === activeSlide ? "w-8 bg-[var(--accent)]" : "w-2 bg-white/56 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
