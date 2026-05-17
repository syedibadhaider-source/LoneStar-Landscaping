"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Button } from "@/components/ui/button";
import { fadeScale, gentleStagger, revealViewport, softReveal } from "@/components/site/motion";
import { faqs } from "@/data/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad bg-[var(--off-white)]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <p className="eyebrow-dot inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--green)]">
            FAQ
          </p>
          <h2 className="font-heading mt-5 max-w-lg text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--pine)] sm:text-[38px] lg:text-[48px]">
            Answers to common questions clearly
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-[var(--muted-foreground)]">
            Have a property maintenance question? Here are quick answers before you request your custom quote.
          </p>
          <Button className="arrow-drift mt-7" variant="outline" asChild>
            <a href="#quote">
              Contact Us
              <FilledIcon name="arrow" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={gentleStagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-3"
        >
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <motion.div key={item.question} variants={fadeScale} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(11,46,74,0.08)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-bold text-[var(--pine)]"
                >
                  {item.question}
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-[var(--green)] text-white" : "bg-[var(--off-white)] text-[var(--green)]"}`}>
                    <FilledIcon name={isOpen ? "x" : "arrow"} className="size-3.5" />
                  </span>
                </button>
                {isOpen ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="px-5 pb-5 text-sm leading-7 text-[var(--muted-foreground)]"
                  >
                    {item.answer}
                  </motion.p>
                ) : null}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
