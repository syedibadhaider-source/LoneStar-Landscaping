"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { FilledIcon, type FilledIconName } from "@/components/site/FilledIcon";
import { Badge } from "@/components/ui/badge";
import { fadeScale, revealViewport, softReveal, staggerContainer } from "@/components/site/motion";

const trustItems: { icon: FilledIconName; title: string; text: string }[] = [
  {
    icon: "users",
    title: "Professional Team",
    text: "Experienced, trained, and customer focused crews for managed properties.",
  },
  {
    icon: "spark",
    title: "Quality Focused",
    text: "Sharp details, clean finishes, and presentation standards you can see.",
  },
  {
    icon: "clipboard",
    title: "Reliable Scheduling",
    text: "Consistent site care that keeps exterior spaces ready year round.",
  },
  {
    icon: "leaf",
    title: "Clean Workmanship",
    text: "Organized crews, respectful service, and tidy common areas after every visit.",
  },
];

export function WhyChooseSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="quality" className="section-pad bg-[var(--off-white)]">
      <div className="section-shell">
        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>
            <FilledIcon name="shield" className="size-3.5 text-[var(--green)]" />
            Why choose us
          </Badge>
          <h2 className="font-heading mt-5 text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--pine)] sm:text-[38px] lg:text-[48px]">
            Why clients trust our outdoor services
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="section-stack grid gap-6 lg:grid-cols-[0.9fr_1.15fr_0.9fr] lg:items-stretch"
        >
          <div className="grid gap-6 lg:h-full lg:grid-rows-2">
            {trustItems.slice(0, 2).map((item) => (
              <TrustCard key={item.title} item={item} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </div>

          <motion.article
            variants={fadeScale}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-4 shadow-[0_26px_90px_rgba(11,46,74,0.1)]"
          >
            <div className="relative h-[260px] overflow-hidden rounded-2xl bg-[var(--muted)] lg:h-[300px]">
              <Image
                src="/images/gallery-2.jpg"
                alt="Completed landscaping with clean paths, lighting, and maintained plantings"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-5 text-center">
              <span className="mx-auto mb-4 grid size-10 place-items-center rounded-full bg-[var(--green)] text-white">
                <FilledIcon name="shield" className="size-5" />
              </span>
              <h3 className="font-heading text-[22px] font-bold leading-tight tracking-[-0.04em] text-[var(--pine)]">Design built for long-term outdoor value</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--muted-foreground)]">
                We focus on durable, low-maintenance outdoor improvements that stay beautiful across seasons.
              </p>
            </div>
          </motion.article>

          <div className="grid gap-6 lg:h-full lg:grid-rows-2">
            {trustItems.slice(2).map((item) => (
              <TrustCard key={item.title} item={item} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustCard({
  item,
  shouldReduceMotion,
}: {
  item: { icon: FilledIconName; title: string; text: string };
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.article
      variants={fadeScale}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
      className="group flex h-full min-h-[210px] flex-col justify-center rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(11,46,74,0.1)]"
    >
      <span className="grid size-11 place-items-center rounded-full bg-[var(--green)] text-white transition group-hover:scale-110">
        <FilledIcon name={item.icon} className="size-5" />
      </span>
      <h3 className="font-heading mt-5 text-xl font-bold tracking-[-0.03em] text-[var(--pine)]">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{item.text}</p>
    </motion.article>
  );
}
