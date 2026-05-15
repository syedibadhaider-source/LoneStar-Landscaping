"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

import { fadeUp, staggerContainer } from "@/components/site/motion";
import { benefits } from "@/data/site";

export function WhyChooseSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="quality" className="bg-white py-24 md:py-32">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl bg-[var(--pine)] p-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_30px_100px_rgba(22,33,66,0.18)] md:p-10"
        >
          <h2 className="font-heading text-center text-[26px] font-extrabold leading-tight sm:text-[30px] lg:text-[44px]">
            Why choose BR Lonestar?
          </h2>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mt-10 grid gap-0 md:grid-cols-2 xl:grid-cols-6">
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? undefined : "hover"}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
                className="group border-t border-white/10 p-5 first:border-t-0 md:[&:nth-child(2)]:border-t-0 xl:border-t-0 xl:border-r xl:border-white/10 xl:last:border-r-0"
              >
                <motion.span
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="grid size-10 place-items-center rounded-full bg-[var(--green)] text-white shadow-[0_10px_28px_rgba(61,113,35,0.28)]"
                >
                  <Check className="size-5" />
                </motion.span>
                <h3 className="font-heading mt-5 text-[17px] font-bold leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
