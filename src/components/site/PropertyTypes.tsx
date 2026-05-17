"use client";

import { motion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { fadeScale, gentleStagger, revealViewport } from "@/components/site/motion";
import { propertyTypes } from "@/data/site";

export function PropertyTypes() {
  return (
    <section className="relative z-20 -mt-11 bg-[var(--off-white)] pb-5">
      <div className="w-full">
        <motion.div
          variants={gentleStagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-2 overflow-hidden border border-white/20 bg-[var(--accent)] px-[max(1rem,calc((100vw-1280px)/2+1.5rem))] py-3 shadow-xl shadow-[rgba(244,122,31,0.22)] lg:grid-cols-4 lg:py-4"
        >
          {propertyTypes.map((type) => (
            <motion.div
              key={type.label}
              variants={fadeScale}
              className="group px-4 py-2 transition hover:bg-white/10 lg:border-r lg:border-white/22 lg:px-7 lg:py-2.5 last:lg:border-r-0"
            >
              <FilledIcon name={type.icon} className="size-6 text-white transition group-hover:scale-105 sm:size-7" />
              <p className="font-heading mt-3 text-[15px] font-bold leading-tight text-white md:text-[17px]">
                {type.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
