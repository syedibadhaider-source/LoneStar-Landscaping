"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeScale, fadeUp, gentleStagger, revealViewport, softReveal } from "@/components/site/motion";

const stats = [
  { value: "40+", label: "Years Combined Experience" },
  { value: "24hr", label: "Quote Response Focus" },
  { value: "100%", label: "Managed Property Mindset" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-[var(--off-white)]">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <motion.div
          variants={softReveal}
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
          variants={softReveal}
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
              <motion.div key={item.label} variants={fadeScale} className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_52px_rgba(11,46,74,0.1)]">
                <p className="font-heading text-3xl font-extrabold text-[var(--green)]">{item.value}</p>
                <p className="mt-2 text-sm font-semibold leading-5 text-[var(--muted-foreground)]">{item.label}</p>
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
