"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Button } from "@/components/ui/button";
import { contactInfo, navItems } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2"
    >
      <div className="rounded-full border border-white/70 bg-white/92 px-4 shadow-[0_18px_60px_rgba(11,46,74,0.16)] backdrop-blur-xl sm:px-5">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="flex shrink-0 items-center" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/lonestar-logo-full.svg"
              alt="BR Lonestar Landscaping & Property Maintenance logo"
              width={236}
              height={88}
              className="h-11 w-auto max-w-[180px] object-contain sm:max-w-[220px]"
              priority
            />
          </a>

          <nav className="hidden items-center justify-center gap-7 text-[13px] font-bold text-[var(--pine)] lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="group relative py-2 transition hover:text-[var(--green)]">
                {item.label}
                <span
                  className={
                    item.active
                      ? "absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-[var(--green)]"
                      : "absolute inset-x-1 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-[var(--green)] transition group-hover:scale-x-100"
                  }
                />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={contactInfo.officeHref}
              aria-label={`Call ${contactInfo.office}`}
              className="grid size-10 place-items-center rounded-full bg-[var(--green)] text-white shadow-[0_12px_28px_rgba(47,107,69,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--green-strong)]"
            >
              <FilledIcon name="phone" className="size-4" />
            </a>
            <Button size="sm" className="soft-sheen arrow-drift px-5" asChild>
              <a href="#quote">
                Get Quote
                <FilledIcon name="arrow" />
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="grid size-11 place-items-center rounded-full bg-[var(--green)] text-white transition hover:bg-[var(--green-strong)] lg:hidden"
          >
            {isOpen ? <FilledIcon name="x" className="size-5" /> : <FilledIcon name="menu" className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="mt-3 overflow-hidden rounded-3xl border border-white/70 bg-white/96 p-3 shadow-[0_22px_70px_rgba(11,46,74,0.18)] backdrop-blur-xl lg:hidden"
        >
          <nav className="grid">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-[var(--pine)] transition hover:bg-[var(--off-white)] hover:text-[var(--green)]"
              >
                {item.label}
                {item.active ? <span className="size-2 rounded-full bg-[var(--green)]" /> : null}
              </a>
            ))}
          </nav>
          <div className="mt-3 grid gap-2 border-t border-[var(--border)] pt-3">
            <a
              href={contactInfo.officeHref}
              className="flex items-center gap-3 rounded-2xl bg-[var(--off-white)] px-4 py-3 text-sm font-bold text-[var(--pine)]"
            >
              <FilledIcon name="phone" className="size-4 text-[var(--green)]" />
              Office: {contactInfo.office}
            </a>
            <Button className="soft-sheen arrow-drift w-full" asChild>
              <a href="#quote" onClick={() => setIsOpen(false)}>
                Get Quote
                <FilledIcon name="arrow" />
              </a>
            </Button>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
