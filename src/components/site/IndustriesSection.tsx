"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cardHover, cardHoverTransition, fadeUp, staggerContainer } from "@/components/site/motion";
import { industries } from "@/data/site";

export function IndustriesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="industries" className="bg-[var(--background)] py-24 md:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>
            <Leaf className="size-3.5 text-[var(--green)]" />
            Industries we serve
          </Badge>
          <h2 className="font-heading mt-5 text-[26px] font-extrabold leading-tight text-[var(--pine)] sm:text-[30px] lg:text-[44px]">
            Landscaping solutions for managed properties
          </h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.52, ease: "easeOut" }}
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : cardHover}
                transition={cardHoverTransition}
                className="group h-full rounded-[28px] border border-[rgba(228,232,223,0.9)] bg-[#F4FAE8] p-4 shadow-[0_22px_70px_rgba(6,26,47,0.08)] transition hover:shadow-[0_30px_90px_rgba(6,26,47,0.14)] sm:p-5 xl:p-3"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white xl:rounded-[20px]">
                  <motion.div className="absolute inset-0" whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                    <Image
                      src={industry.image}
                      alt={`${industry.title} landscaping`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 20vw"
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-4 px-0 pt-6 sm:flex-row sm:items-center sm:justify-between xl:flex-col xl:items-start xl:gap-3 xl:pt-4">
                  <h3 className="font-heading text-[26px] font-extrabold leading-tight text-black sm:text-[28px] xl:text-[19px]">
                    {industry.title}
                  </h3>
                  <a
                    href="#quote"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--accent-strong)] sm:text-base xl:px-4 xl:py-2.5 xl:text-sm"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
