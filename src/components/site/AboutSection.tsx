"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/components/site/motion";

export function AboutSection() {
  return (
    <section id="about" className="bg-[var(--background)] py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <Badge>
            <Leaf className="size-3.5 text-[var(--green)]" />
            About BR Lonestar
          </Badge>
          <h2 className="font-heading mt-5 max-w-xl text-[26px] font-extrabold leading-tight text-[var(--pine)] sm:text-[30px] lg:text-[44px]">
            Landscaping support built around real property needs
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted-foreground)] md:text-[17px]">
            We provide dependable outdoor care that enhances curb appeal, protects property value,
            and creates welcoming environments for residents, tenants, and guests.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--muted-foreground)] md:text-[17px]">
            Our leadership brings 40 years of combined HOA and commercial industry experience,
            ensuring every property is managed with professionalism and pride.
          </p>
          <Button className="mt-8" variant="outline" asChild>
            <a href="#quote">
              Learn More About Us
              <ArrowRight />
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[520px] overflow-hidden rounded-2xl bg-[var(--muted)] shadow-[0_24px_80px_rgba(22,33,66,0.14)]"
        >
          <Image
            // TODO: Replace with a real BR Lonestar crew and property manager photo.
            src="/images/about-team.jpg"
            alt="Professional landscaper walking a maintained property with a property manager"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(22,33,66,0.35),rgba(22,33,66,0.02)_62%)]" />
          <div className="absolute bottom-6 left-6 rounded-lg bg-[var(--green-strong)] px-5 py-4 text-white shadow-[0_18px_46px_rgba(22,33,66,0.22)]">
            <p className="font-heading max-w-xs text-[15px] font-bold leading-6">
              Trusted by managed properties across Texas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
