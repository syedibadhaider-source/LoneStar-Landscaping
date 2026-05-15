"use client";

import { motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { fadeUp } from "@/components/site/motion";
import { benefits } from "@/data/site";

const processContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.35,
    },
  },
};

const processStep = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function WhyChooseSection() {
  const shouldReduceMotion = useReducedMotion();
  const transition = { duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" as const };

  return (
    <section id="quality" className="bg-white py-16 md:py-20">
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

          <motion.div
            variants={processContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-6 xl:gap-0"
          >
            <div className="pointer-events-none absolute left-5 right-5 top-8 hidden h-px bg-white/12 xl:block">
              <motion.div
                className="h-full origin-left bg-[var(--green)]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 1.9, ease: "easeOut" }}
              />
            </div>

            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                variants={processStep}
                whileHover={shouldReduceMotion ? undefined : "hover"}
                transition={transition}
                className="group relative z-10 flex gap-4 border-t border-white/10 pt-6 first:border-t-0 first:pt-0 md:[&:nth-child(2)]:border-t-0 md:[&:nth-child(2)]:pt-0 xl:block xl:border-t-0 xl:px-5 xl:pt-0"
              >
                {index < benefits.length - 1 ? (
                  <motion.span
                    className="absolute left-5 top-12 w-px bg-[var(--green)] xl:hidden"
                    initial={{ height: 0 }}
                    whileInView={{ height: "calc(100% - 12px)" }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: index * 0.18, ease: "easeOut" }}
                  />
                ) : null}
                <motion.span
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-[var(--green)] text-white shadow-[0_10px_28px_rgba(61,113,35,0.28)] xl:mx-0"
                >
                  <motion.span
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2, delay: 0.45 + index * 0.22 }}
                    className="font-heading text-xs font-extrabold"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.55 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.28, delay: 0.6 + index * 0.22, ease: "easeOut" }}
                    className="absolute inset-0 grid place-items-center"
                  >
                    <FilledIcon name="check" className="size-5" />
                  </motion.span>
                </motion.span>
                <div className="pt-1 xl:pt-7">
                  <h3 className="font-heading text-[17px] font-bold leading-snug text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
