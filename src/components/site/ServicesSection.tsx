"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Badge } from "@/components/ui/badge";
import { cardHover, cardHoverTransition, fadeUp, staggerContainer } from "@/components/site/motion";
import { services } from "@/data/site";

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-pad bg-[var(--off-white)]">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>
            <FilledIcon name="leaf" className="size-3.5 text-[var(--green)]" />
            Our services
          </Badge>
          <h2 className="font-heading mt-5 text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--pine)] sm:text-[38px] lg:text-[48px]">
            Professional solutions for outdoor areas
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
            >
              <motion.a
                href="#quote"
                whileHover={shouldReduceMotion ? undefined : cardHover}
                transition={cardHoverTransition}
                className="group block h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-4 shadow-sm transition hover:shadow-[0_26px_80px_rgba(11,46,74,0.12)]"
              >
                <div className="flex items-start justify-between gap-4 px-1 pb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold tracking-[-0.03em] text-[var(--pine)]">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{service.text}</p>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--green)] text-white transition group-hover:bg-[var(--accent)]">
                    <FilledIcon name="arrow" className="size-4" />
                  </span>
                </div>
                <div className="relative h-60 overflow-hidden rounded-2xl bg-[var(--muted)]">
                  <Image
                    src={service.image}
                    alt={`${service.title} by BR Lonestar`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
