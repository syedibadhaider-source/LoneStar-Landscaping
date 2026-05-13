"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Leaf } from "lucide-react";

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

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.52, ease: "easeOut" }}
            >
              <motion.div whileHover={shouldReduceMotion ? undefined : cardHover} transition={cardHoverTransition} className="premium-card group relative h-[170px] overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-[0_22px_70px_rgba(6,26,47,0.08)]">
                <motion.div className="absolute inset-0" whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                  <Image
                    src={industry.image}
                    alt={`${industry.title} landscaping placeholder`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 20vw"
                  />
                </motion.div>
                <div className="absolute inset-x-0 top-0 h-1 bg-[var(--green)]" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,18,37,0.82),rgba(3,18,37,0.14)_68%)] transition duration-300 group-hover:bg-[linear-gradient(0deg,rgba(3,18,37,0.9),rgba(3,18,37,0.24)_68%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-[17px] font-bold leading-snug text-white">{industry.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
