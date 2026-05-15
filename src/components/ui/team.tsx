"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { fadeUp } from "@/components/site/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { teamMembers } from "@/data/site";

export function TeamSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="team" className="relative overflow-hidden bg-[var(--background)] py-16 md:py-20">
      <Image
        src="/images/lonestar-icon.svg"
        alt=""
        width={260}
        height={260}
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-4 hidden h-56 w-56 opacity-[0.035] md:block"
      />

      <div className="section-shell relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <Badge>
            <FilledIcon name="users" className="size-3.5 text-[var(--green)]" />
            Leadership team
          </Badge>
          <h2 className="font-heading mt-5 text-[26px] font-extrabold leading-tight text-[var(--pine)] sm:text-[30px] lg:text-[44px]">
            Meet the team behind BR Lonestar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[var(--muted-foreground)] md:text-[17px]">
            Experienced leadership with direct access for property managers, board members, and
            commercial clients across North Texas.
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[var(--background)] to-transparent md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-[var(--background)] to-transparent md:block" />

          <Marquee className="[--duration:30s] [--gap:1.5rem]" pauseOnHover>
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
                className="group w-[300px] shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_22px_70px_rgba(22,33,66,0.09)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(22,33,66,0.14)] sm:w-[340px]"
              >
                <div className="relative h-80 overflow-hidden bg-[var(--muted)]">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at BR Lonestar`}
                    fill
                    className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(max-width: 640px) 300px, 340px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,33,66,0)_45%,rgba(22,33,66,0.72)_100%)]" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/92 p-4 shadow-[0_18px_46px_rgba(22,33,66,0.18)] backdrop-blur">
                    <h3 className="font-heading text-xl font-extrabold leading-tight text-[var(--pine)]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-[var(--accent)]">{member.role}</p>
                  </div>
                </div>

                <div className="grid gap-3 p-5">
                  <TeamContact icon="phone" label="Mobile" value={member.mobile} href={`tel:+1${member.mobile.replace(/\D/g, "")}`} />
                  {member.office ? (
                    <TeamContact icon="phone" label="Office" value={member.office} href={`tel:+1${member.office.replace(/\D/g, "")}`} />
                  ) : null}
                  <TeamContact icon="mail" label="Email" value={member.email} href={`mailto:${member.email}`} />
                  <TeamContact icon="map-pin" label="Address" value={member.address} />

                  <Button className="mt-2 w-full" asChild>
                    <a href={`mailto:${member.email}`}>
                      Contact {member.name.split(" ")[0]}
                      <FilledIcon name="arrow" />
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function TeamContact({
  icon,
  label,
  value,
  href,
}: {
  icon: "mail" | "map-pin" | "phone";
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[rgba(242,91,30,0.1)] text-[var(--accent)]">
        <FilledIcon name={icon} className="size-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
          {label}
        </span>
        <span className="mt-0.5 block text-sm font-semibold leading-5 text-[var(--pine)]">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="flex items-start gap-3 rounded-lg p-2 transition hover:bg-[var(--off-white)]" href={href}>
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-3 rounded-lg p-2">{content}</div>;
}
