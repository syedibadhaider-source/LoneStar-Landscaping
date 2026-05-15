"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Leaf } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cardHover, cardHoverTransition, fadeUp, staggerContainer } from "@/components/site/motion";
import { services } from "@/data/site";

const serviceCardStyles = [
  "bg-[var(--green)] shadow-[0_24px_70px_rgba(61,113,35,0.22)] hover:shadow-[0_30px_90px_rgba(61,113,35,0.32)]",
  "bg-[var(--soft-navy)] shadow-[0_24px_70px_rgba(22,33,66,0.22)] hover:shadow-[0_30px_90px_rgba(22,33,66,0.32)]",
  "bg-[var(--accent)] shadow-[0_24px_70px_rgba(242,91,30,0.22)] hover:shadow-[0_30px_90px_rgba(242,91,30,0.32)]",
];

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-white py-16 md:py-20">
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

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
            >
              <motion.div whileHover={shouldReduceMotion ? undefined : cardHover} transition={cardHoverTransition} className="h-full">
                <Card className={`h-full rounded-2xl border-white/20 ${serviceCardStyles[index % serviceCardStyles.length]}`}>
                  <CardContent className="flex h-full flex-col items-center p-6 text-center">
                    <span className="grid size-14 place-items-center rounded-2xl bg-white/16 text-white ring-1 ring-white/20">
                      <service.icon className="size-7" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-heading mt-6 text-[16px] font-bold leading-snug text-white md:text-[18px]">{service.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-white/82">{service.text}</p>
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
