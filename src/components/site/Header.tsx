"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { contactInfo, navItems } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(6,26,47,0.86)] text-white backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="#home" className="flex shrink-0 items-center gap-3 text-white" onClick={() => setIsOpen(false)}>
          <span className="grid size-12 place-items-center overflow-hidden rounded-md border border-white/20 bg-white shadow-lg backdrop-blur">
            <Image
              src="/images/lonestar-logo.png"
              alt="BR Lonestar Landscaping logo"
              width={48}
              height={48}
              className="size-11 object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="font-heading block text-sm font-extrabold uppercase tracking-[0.14em]">LONESTAR</span>
            <span className="block text-xs text-white/72">Landscaping & Property Maintenance</span>
          </span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-semibold text-white/76 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} className="group relative py-2 transition hover:text-white" href={item.href}>
              {item.label}
              <span
                className={
                  item.active
                    ? "absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--green)]"
                    : "absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 rounded-full bg-[var(--green)] transition group-hover:scale-x-100"
                }
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={contactInfo.officeHref} className="flex items-center gap-2 text-sm font-semibold text-white/84 transition hover:text-white">
            <span className="grid size-9 place-items-center rounded-md border border-white/14 bg-white/8">
              <Phone className="size-4 text-[var(--green)]" />
            </span>
            <span>Office: {contactInfo.office}</span>
          </a>
          <Button size="sm" asChild>
            <a href="#quote">
              Get a Free Quote
              <ArrowRight />
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-md border border-white/14 bg-white/8 text-white transition hover:bg-white/14 lg:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="section-shell pb-5 lg:hidden"
        >
          <div className="rounded-lg border border-white/10 bg-[rgba(3,18,37,0.94)] p-3 shadow-[0_24px_80px_rgba(3,18,37,0.38)] backdrop-blur-xl">
            <nav className="grid">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                  {item.active ? <span className="h-1.5 w-8 rounded-full bg-[var(--green)]" /> : null}
                </a>
              ))}
            </nav>
            <div className="mt-3 border-t border-white/10 pt-4">
              <a href={contactInfo.officeHref} className="flex items-center gap-3 rounded-md px-4 py-3 text-sm font-semibold text-white/86">
                <Phone className="size-4 text-[var(--green)]" />
                Office: {contactInfo.office}
              </a>
              <Button className="mt-3 w-full" asChild>
                <a href="#quote" onClick={() => setIsOpen(false)}>
                  Get a Free Quote
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
