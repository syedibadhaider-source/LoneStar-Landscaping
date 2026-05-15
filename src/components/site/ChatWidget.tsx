"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, MessageCircle, Send, X } from "lucide-react";

import { contactInfo } from "@/data/site";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
            className="w-[min(360px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-white/16 bg-white shadow-[0_26px_90px_rgba(22,33,66,0.24)]"
          >
            <div className="bg-[var(--pine)] p-5 text-white">
              <p className="font-heading text-lg font-extrabold">Need help fast?</p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Choose the quickest way to reach BR Lonestar.
              </p>
            </div>
            <div className="grid gap-3 p-4">
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(242,91,30,0.28)]"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="size-5" />
                  Urgent WhatsApp Contact
                </span>
                <Send className="size-4" />
              </a>
              <a
                href="#quote"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--off-white)] px-4 py-3 text-sm font-extrabold text-[var(--pine)] transition hover:-translate-y-0.5 hover:border-[var(--green)] hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <ClipboardCheck className="size-5 text-[var(--green)]" />
                  Submit Form
                </span>
                <Send className="size-4" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={isOpen ? "Close chat options" : "Open chat options"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="relative grid size-16 place-items-center rounded-full bg-[var(--accent)] text-white shadow-[0_18px_52px_rgba(242,91,30,0.38)] transition hover:bg-[var(--accent-strong)] focus:outline-none focus:ring-4 focus:ring-[rgba(242,91,30,0.24)]"
        animate={
          shouldReduceMotion || isOpen
            ? { scale: 1, rotate: 0 }
            : { scale: [1, 1.07, 1], rotate: [0, -4, 4, -2, 0] }
        }
        transition={{ duration: 1.7, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
      >
        <span className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-30 blur-md" />
        <motion.span
          className="absolute inset-0 rounded-full border border-[var(--accent)]"
          animate={shouldReduceMotion || isOpen ? undefined : { scale: [1, 1.35], opacity: [0.5, 0] }}
          transition={{ duration: 1.7, ease: "easeOut", repeat: Infinity }}
        />
        <span className="relative">
          {isOpen ? <X className="size-7" /> : <MessageCircle className="size-7" />}
        </span>
      </motion.button>
    </div>
  );
}
