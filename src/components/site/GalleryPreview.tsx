"use client";

import { motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Badge } from "@/components/ui/badge";
import { fadeScale, revealViewport, softReveal, staggerContainer } from "@/components/site/motion";
import { testimonials } from "@/data/site";

export function GalleryPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="reviews" className="section-pad bg-[var(--off-white)]">
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
            Testimonials
          </Badge>
          <h2 className="font-heading mt-5 text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--pine)] sm:text-[38px] lg:text-[48px]">
            Trusted feedback for outdoor services
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((review) => (
            <motion.article
              key={review.name}
              variants={fadeScale}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
              className="group rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(11,46,74,0.1)]"
            >
              <div className="flex gap-1 text-[var(--green)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FilledIcon key={index} name="spark" className="size-4" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">{review.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[var(--green)] text-sm font-extrabold text-white transition group-hover:scale-110 group-hover:bg-[var(--accent)]">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-[var(--pine)]">{review.name}</p>
                  <p className="text-xs font-semibold text-[var(--muted-foreground)]">{review.type}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
