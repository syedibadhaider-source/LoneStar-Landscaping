"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Badge } from "@/components/ui/badge";
import { cardHover, cardHoverTransition, fadeScale, revealViewport, softReveal, staggerContainer } from "@/components/site/motion";
import { projects } from "@/data/site";

export function IndustriesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-pad bg-white">
      <div className="section-shell">
        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>
            <FilledIcon name="spark" className="size-3.5 text-[var(--green)]" />
            Projects
          </Badge>
          <h2 className="font-heading mt-5 text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--pine)] sm:text-[38px] lg:text-[48px]">
            Completed projects for managed properties
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeScale}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
            >
              <motion.a
                href="#quote"
                whileHover={shouldReduceMotion ? undefined : cardHover}
                transition={cardHoverTransition}
                className="group block overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-4 shadow-sm transition hover:shadow-[0_26px_80px_rgba(11,46,74,0.12)]"
              >
                <div className="relative h-72 overflow-hidden rounded-2xl bg-[var(--muted)] md:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-1 pt-5">
                  <div>
                    <h3 className="font-heading text-xl font-bold tracking-[-0.03em] text-[var(--pine)]">{project.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted-foreground)]">{project.text}</p>
                  </div>
                  <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full bg-[var(--green)] text-white transition group-hover:bg-[var(--accent)] group-hover:translate-x-1">
                    <FilledIcon name="arrow" className="size-4" />
                  </span>
                </div>
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
