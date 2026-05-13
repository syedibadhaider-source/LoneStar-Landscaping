"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarCheck, MapPin, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroFadeUp, heroParent } from "@/components/site/motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-0 bg-[var(--pine)] py-20 text-white sm:py-24 lg:min-h-[680px] lg:py-0">
      <motion.div
        className="absolute inset-0"
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.8, ease: "easeOut" }}
      >
        <Image
          // TODO: Replace with a real dusk luxury property exterior photo.
          src="/images/hero-landscape.jpg"
          alt="Luxury property exterior at dusk with maintained landscaping, warm lighting, pathways, and colorful flowers"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
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
          <motion.p variants={heroFadeUp} className="mt-6 max-w-2xl text-[15px] leading-7 text-white/78 md:text-[17px] md:leading-8">
            Professional landscaping and property maintenance for HOAs, commercial properties,
            luxury residential high rises, gated communities, and shopping centers.
          </motion.p>
          <motion.p variants={heroFadeUp} className="mt-4 max-w-2xl text-[15px] leading-7 text-white/68 md:text-[16px] md:leading-8">
            BR Lonestar helps property managers, board members, and commercial owners keep outdoor
            spaces clean, polished, reliable, and welcoming year round.
          </motion.p>

          <motion.div variants={heroFadeUp} className="mt-7 inline-flex items-center gap-4 rounded-lg border border-white/14 bg-white/10 p-4 pr-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur">
            <span className="grid size-11 place-items-center rounded-md bg-[rgba(109,165,68,0.18)] text-[var(--fresh-green)]">
              <ShieldCheck className="size-6" />
            </span>
            <span className="leading-tight">
              <span className="font-heading block text-[20px] font-extrabold text-white">40 Years Combined</span>
              <span className="block text-sm font-semibold text-white/70">HOA & Commercial Experience</span>
            </span>
          </motion.div>

          <motion.div variants={heroFadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#quote">
                Get a Free Quote
                <CalendarCheck />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#services">
                View Services
                <ArrowRight />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
