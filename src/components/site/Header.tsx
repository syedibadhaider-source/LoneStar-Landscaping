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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/92 text-[var(--text)] shadow-[0_10px_34px_rgba(3,18,37,0.08)] backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="#home" className="flex shrink-0 items-center" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/lonestar-logo-full.svg"
            alt="BR Lonestar Landscaping & Property Maintenance logo"
            width={268}
            height={100}
            className="h-14 w-auto max-w-[210px] object-contain sm:max-w-[258px]"
            priority
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-semibold text-[var(--muted)] lg:flex">
          {navItems.map((item) => (
            <a key={item.label} className="group relative py-2 transition hover:text-[var(--navy)]" href={item.href}>
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
          <a href={contactInfo.officeHref} className="flex items-center gap-2 text-sm font-semibold text-[var(--navy)] transition hover:text-[var(--green)]">
            <span className="grid size-9 place-items-center rounded-md border border-[var(--border)] bg-[var(--off-white)]">
              <Phone className="size-4 text-[var(--dark-green)]" />
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
          className="grid size-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--off-white)] text-[var(--navy)] transition hover:border-[var(--green)] hover:bg-white lg:hidden"
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
          <div className="rounded-lg border border-[var(--border)] bg-white p-3 shadow-[0_24px_80px_rgba(3,18,37,0.14)] backdrop-blur-xl">
            <nav className="grid">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--off-white)] hover:text-[var(--navy)]"
                >
                  {item.label}
                  {item.active ? <span className="h-1.5 w-8 rounded-full bg-[var(--green)]" /> : null}
                </a>
              ))}
            </nav>
            <div className="mt-3 border-t border-[var(--border)] pt-4">
              <a href={contactInfo.officeHref} className="flex items-center gap-3 rounded-md px-4 py-3 text-sm font-semibold text-[var(--navy)]">
                <Phone className="size-4 text-[var(--dark-green)]" />
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
