"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MapPin, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
    <section id="home" className="relative min-h-0 bg-[var(--pine)] py-20 text-white sm:py-24 lg:min-h-[680px] lg:py-0">
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,47,0.97)_0%,rgba(6,26,47,0.86)_43%,rgba(6,26,47,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(109,165,68,0.18),transparent_28%),radial-gradient(circle_at_72%_18%,rgba(242,90,29,0.1),transparent_22%)]" />
      <div className="absolute inset-0 star-field opacity-45" />

      <div className="section-shell relative z-10 flex min-h-0 items-center lg:min-h-[680px]">
        <motion.div variants={heroParent} initial="hidden" animate="visible" className="w-full max-w-3xl text-left lg:w-1/2">
          <motion.div variants={heroFadeUp}>
            <Badge className="border-white/18 bg-white/10 text-white/78 backdrop-blur">
              <MapPin className="size-3.5 text-[var(--green)]" />
              Professional landscaping & property maintenance
            </Badge>
          </motion.div>

          <motion.h1 variants={heroFadeUp} className="font-heading mt-7 max-w-4xl text-[34px] font-extrabold leading-[1.02] text-white md:text-[42px] lg:text-[64px] xl:text-[72px]">
            Your Property.
            <br />
            <span className="text-[var(--fresh-green)]">Perfectly Maintained.</span>
          </motion.h1>

          <motion.div variants={heroFadeUp} className="mt-6 max-w-xl rounded-lg border border-white/14 bg-white/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--fresh-green)]">{slide.label}</p>
                <p className="mt-2 text-[15px] font-semibold leading-6 text-white/82 md:text-[16px]">{slide.text}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={heroFadeUp} className="mt-7 inline-flex items-center gap-4 rounded-lg border border-white/14 bg-white/10 p-4 pr-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur">
            <span className="grid size-11 place-items-center rounded-md bg-[rgba(109,165,68,0.18)] text-[var(--fresh-green)]">
              <ShieldCheck className="size-6" />
            </span>
            <span className="leading-tight">
              <span className="font-heading block text-[20px] font-extrabold text-white">40 Years Combined</span>
              <span className="block text-sm font-semibold text-white/70">HOA & Commercial Experience</span>
            </span>
          </motion.div>

          <motion.div variants={heroFadeUp} className="mt-8 flex items-center gap-3" aria-label="Hero image slider controls">
            {heroSlides.map((item, index) => (
              <button
                key={item.label}
                type="button"
                aria-label={`Show ${item.label}`}
                aria-pressed={activeSlide === index}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-10 bg-[var(--fresh-green)]"
                    : "w-2.5 bg-white/42 hover:bg-white/76"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
