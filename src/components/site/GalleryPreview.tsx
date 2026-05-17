"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Badge } from "@/components/ui/badge";
import { fadeScale, revealViewport, softReveal, staggerContainer } from "@/components/site/motion";
import { testimonials } from "@/data/site";

export function GalleryPreview() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = useMemo(
    () =>
      Array.from({ length: Math.min(3, testimonials.length) }, (_, index) => {
        const testimonialIndex = (activeIndex + index) % testimonials.length;
        return testimonials[testimonialIndex];
      }),
    [activeIndex],
  );

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }

  return (
    <section id="reviews" className="section-pad bg-[var(--off-white)]">
      <div className="section-shell">
        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <Badge>
              <FilledIcon name="spark" className="size-3.5 text-[var(--green)]" />
              Testimonials
            </Badge>
            <h2 className="font-heading mt-5 text-[30px] leading-tight tracking-[-0.04em] text-[var(--pine)] sm:text-[38px] lg:whitespace-nowrap lg:text-[44px] xl:text-[48px]">
              Trusted feedback for outdoor services
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Show previous testimonials"
              onClick={showPrevious}
              className="grid size-11 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--green)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--green)] hover:bg-[var(--green)] hover:text-white"
            >
              <FilledIcon name="arrow" className="size-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Show next testimonials"
              onClick={showNext}
              className="grid size-11 place-items-center rounded-full bg-[var(--green)] text-white shadow-[0_14px_34px_rgba(47,107,69,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--accent)]"
            >
              <FilledIcon name="arrow" className="size-4" />
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
            className="section-stack grid gap-6 md:grid-cols-3"
          >
            {visibleTestimonials.map((review) => (
              <motion.article
                key={review.name}
                variants={fadeScale}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
                className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(11,46,74,0.1)]"
              >
                <div className="flex gap-1 text-[var(--green)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FilledIcon key={index} name="spark" className="size-4" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-[var(--muted-foreground)]">{review.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  {review.image ? (
                    <span className="relative size-11 overflow-hidden rounded-full bg-[var(--green)] transition group-hover:scale-110">
                      <Image src={review.image} alt={review.name} fill className="object-cover" sizes="44px" />
                    </span>
                  ) : (
                    <span className="grid size-11 place-items-center rounded-full bg-[var(--green)] text-sm font-medium text-white transition group-hover:scale-110 group-hover:bg-[var(--accent)]">
                      {review.name.charAt(0)}
                    </span>
                  )}
                  <div>
                    <p className="font-heading text-sm text-[var(--pine)]">{review.name}</p>
                    <p className="text-xs font-light text-[var(--muted-foreground)]">{review.type}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
