import Image from "next/image";

import { FilledIcon } from "@/components/site/FilledIcon";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--pine)] py-24 text-white md:py-32">
      <Image
        src="/images/hero-gated-community.jpg"
        alt="Premium landscaped community entrance at dusk"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[rgba(7,31,51,0.68)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,31,51,0.86),rgba(7,31,51,0.34))]" />

      <div className="section-shell relative z-10">
        <div className="max-w-2xl">
          <p className="eyebrow-dot inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/76">
            Start your project
          </p>
          <h2 className="font-heading mt-5 text-[34px] font-extrabold leading-tight tracking-[-0.05em] md:text-[52px]">
            Ready to improve your outdoor space?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/78">
            Let BR Lonestar keep your outdoor spaces clean, polished, reliable, and welcoming year round.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#quote">
                Get Started
                <FilledIcon name="arrow" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={contactInfo.officeHref}>
                Call {contactInfo.office}
                <FilledIcon name="phone" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
