"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Badge } from "@/components/ui/badge";
import { fadeScale, revealViewport, softReveal, staggerContainer } from "@/components/site/motion";
import { insights } from "@/data/site";

export function InsightsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-pad bg-[var(--off-white)]">
      <div className="section-shell">
        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>
            <FilledIcon name="leaf" className="size-3.5 text-[var(--green)]" />
            Blog
          </Badge>
          <h2 className="font-heading mt-5 text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--pine)] sm:text-[38px] lg:text-[48px]">
            Landscape insights for outdoor living
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {insights.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeScale}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
              className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(11,46,74,0.1)]"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl bg-[var(--muted)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-2 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--green)]">
                  February 5, 2026  ·  {post.category}
                </p>
                <h3 className="font-heading mt-3 text-xl font-bold tracking-[-0.03em] text-[var(--pine)]">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{post.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
