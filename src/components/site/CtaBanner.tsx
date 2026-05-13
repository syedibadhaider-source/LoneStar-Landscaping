import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#F25A1D,#D94B13)] shadow-[0_26px_80px_rgba(242,90,29,0.24)]">
          <div className="absolute -right-12 -top-16 size-48 rounded-full bg-white/10" />
          <div className="absolute bottom-4 right-40 size-24 rounded-full border border-white/14" />
          <div className="absolute -bottom-20 left-1/3 size-52 rounded-full bg-white/8" />
          <div className="absolute left-8 top-8 h-20 w-32 rotate-[-18deg] rounded-full border border-white/10 opacity-60" />

          <div className="relative grid gap-8 p-8 text-white md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <h2 className="font-heading text-[28px] font-extrabold leading-tight md:text-[38px]">
                Ready to improve your property&apos;s curb appeal?
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-white/82 md:text-[17px]">
                Let BR Lonestar keep your outdoor spaces looking their best year round.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="bg-white text-[var(--accent)] shadow-none hover:bg-white/92 hover:text-[var(--accent-strong)]" size="lg" asChild>
                <a href="#quote">
                  Get a Free Quote
                  <ArrowRight />
                </a>
              </Button>
              <Button className="border border-white/55 bg-transparent text-white shadow-none hover:bg-white/12" size="lg" asChild>
                <a href={contactInfo.officeHref}>
                  Call {contactInfo.office}
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
