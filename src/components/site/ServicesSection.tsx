"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Leaf } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cardHover, cardHoverTransition, fadeUp, staggerContainer } from "@/components/site/motion";
import { services } from "@/data/site";

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>
            <Leaf className="size-3.5 text-[var(--green)]" />
            Our services
          </Badge>
          <h2 className="font-heading mt-5 text-[26px] font-extrabold leading-tight text-[var(--pine)] sm:text-[30px] lg:text-[44px]">
            Complete landscaping and property maintenance services
          </h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
            >
              <motion.div whileHover={shouldReduceMotion ? undefined : cardHover} transition={cardHoverTransition} className="h-full">
                <Card className="premium-card h-full rounded-2xl hover:border-[rgba(109,165,68,0.3)] hover:shadow-[0_30px_90px_rgba(6,26,47,0.14)]">
                  <CardContent className="flex h-full flex-col items-center p-6 text-center">
                    <span className="grid size-14 place-items-center rounded-2xl bg-[rgba(109,165,68,0.11)] text-[var(--green-strong)]">
                      <service.icon className="size-7" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-heading mt-6 text-[16px] font-bold leading-snug text-[var(--pine)] md:text-[18px]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{service.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
