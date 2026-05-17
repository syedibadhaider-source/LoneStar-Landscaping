"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeScale, gentleStagger, revealViewport } from "@/components/site/motion";

const stats = [
  { value: 40, suffix: "+", label: "Years Combined Experience" },
  { value: 24, suffix: "hr", label: "Quote Response Focus" },
  { value: 100, suffix: "%", label: "Managed Property Mindset" },
];

const imageSlideIn: Variants = {
  hidden: { opacity: 0, x: -78, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.92, ease: [0.22, 1, 0.36, 1] },
  },
};

const contentSlideIn: Variants = {
  hidden: { opacity: 0, x: 78, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.92, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
};

function CountUpStat({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    let frameId = 0;
    const duration = 1100;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, shouldReduceMotion, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-[var(--off-white)]">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <motion.div
          variants={imageSlideIn}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-[0_22px_80px_rgba(11,46,74,0.09)]"
        >
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[var(--muted)] md:min-h-[540px]">
            <Image
              src="/images/about-team.jpg"
              alt="BR Lonestar landscaper reviewing a maintained property with a property manager"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white/92 p-4 shadow-[0_18px_50px_rgba(11,46,74,0.18)] backdrop-blur">
            <p className="font-heading text-lg font-bold text-[var(--pine)]">Trusted by managed properties across Texas</p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">
              Site walks, maintenance planning, and polished property presentation.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={contentSlideIn}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <Badge>
            <FilledIcon name="leaf" className="size-3.5 text-[var(--green)]" />
            About BR Lonestar
          </Badge>
          <h2 className="font-heading mt-5 max-w-2xl text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--pine)] sm:text-[38px] lg:text-[48px]">
            Landscaping support built around real property needs
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-7 text-[var(--muted-foreground)] md:text-[17px]">
            <p>
              We provide dependable outdoor care that enhances curb appeal, protects property value,
              and creates welcoming environments for residents, tenants, and guests.
            </p>
            <p>
              Our leadership brings 40 years of combined HOA and commercial industry experience,
              ensuring every property is managed with professionalism and pride.
            </p>
          </div>

          <motion.div
            variants={gentleStagger}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {stats.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeScale}
                className="rounded-2xl border border-white/10 bg-[var(--pine)] p-5 shadow-[0_18px_52px_rgba(11,46,74,0.16)] transition hover:-translate-y-1 hover:bg-[var(--pine-soft)] hover:shadow-[0_22px_60px_rgba(11,46,74,0.22)]"
              >
                <p className="font-heading text-3xl font-semibold text-[var(--accent)]">
                  <CountUpStat value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm font-light leading-5 text-white/90">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="outline" className="arrow-drift" asChild>
              <a href="#quote">
                Request a Site Walk
                <FilledIcon name="arrow" />
              </a>
            </Button>
            <p className="text-sm font-semibold text-[var(--muted-foreground)]">Serving HOAs, commercial sites, and managed communities.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
