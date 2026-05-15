"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cardHover, cardHoverTransition, fadeUp, staggerContainer } from "@/components/site/motion";
import { galleryImages } from "@/data/site";

export function GalleryPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="gallery" className="bg-white py-16 md:py-20">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Badge>
              <FilledIcon name="leaf" className="size-3.5 text-[var(--green)]" />
              Gallery preview
            </Badge>
            <h2 className="font-heading mt-5 max-w-2xl text-[26px] font-extrabold leading-tight text-[var(--pine)] sm:text-[30px] lg:text-[44px]">
              Beautiful landscapes. Better first impressions.
            </h2>
          </div>
          <Button variant="outline" asChild>
            <a href="#gallery">
              View Full Gallery
              <FilledIcon name="arrow" />
            </a>
          </Button>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {galleryImages.map((image) => (
            <motion.div
              key={image.src}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
            >
              <motion.div whileHover={shouldReduceMotion ? undefined : cardHover} transition={cardHoverTransition} className="group relative h-64 overflow-hidden rounded-xl bg-white shadow-[0_22px_70px_rgba(22,33,66,0.1)]">
                <motion.div className="absolute inset-0" whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
