"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { FilledIcon } from "@/components/site/FilledIcon";
import { fadeScale, gentleStagger, revealViewport, softReveal } from "@/components/site/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/site";

export function TeamSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="team" className="section-pad relative overflow-hidden bg-white">
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
          variants={softReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <Badge>
            <FilledIcon name="users" className="size-3.5 text-[var(--green)]" />
            Leadership team
          </Badge>
          <h2 className="font-heading mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--pine)] sm:text-[38px] lg:text-[46px]">
            Meet the team behind BR Lonestar
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-[var(--muted-foreground)] md:text-[16px]">
            Experienced leadership with direct access for property managers, board members, and
            commercial clients across North Texas.
          </p>
        </motion.div>

        <motion.div
          variants={gentleStagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2"
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeScale}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
              className="group flex min-h-[340px] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_26px_74px_rgba(11,46,74,0.13)] md:flex-row"
            >
              <div className="relative min-h-64 overflow-hidden bg-[var(--muted)] md:min-h-full md:w-[42%]">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at BR Lonestar`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: member.imagePosition ?? "center 18%" }}
                  sizes="(max-width: 768px) 100vw, 280px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,33,66,0.02)_0%,rgba(22,33,66,0.18)_100%)]" />
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div>
                  <h3 className="font-heading text-2xl font-extrabold leading-tight text-[var(--pine)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold leading-5 text-[var(--accent)]">{member.role}</p>
                </div>

                <div className="mt-5 grid gap-2">
                  <TeamContact icon="phone" label="Mobile" value={member.mobile} href={`tel:+1${member.mobile.replace(/\D/g, "")}`} />
                  {member.office ? (
                    <TeamContact icon="phone" label="Office" value={member.office} href={`tel:+1${member.office.replace(/\D/g, "")}`} />
                  ) : null}
                  <TeamContact icon="mail" label="Email" value={member.email} href={`mailto:${member.email}`} />
                  <TeamContact icon="map-pin" label="Address" value={compactAddress(member.address)} />
                </div>

                <Button className="mt-auto h-11 w-full text-sm" asChild>
                  <a href={`mailto:${member.email}`}>
                    Contact {member.name.split(" ")[0]}
                    <FilledIcon name="arrow" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
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
      <span className="relative grid size-7 shrink-0 place-items-center rounded-full bg-[var(--pine)] text-white shadow-[0_8px_18px_rgba(22,33,66,0.16)]">
        <FilledIcon name={icon} className="size-3.5" />
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border border-white bg-[var(--accent)]" />
      </span>
      <span className="min-w-0">
        <span className="block text-[9px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
          {label}
        </span>
        <span className="mt-0.5 block text-[13px] font-semibold leading-5 text-[var(--pine)]">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="flex items-start gap-2.5 rounded-lg p-1.5 transition hover:bg-[var(--off-white)]" href={href}>
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-2.5 rounded-lg p-1.5">{content}</div>;
}

function compactAddress(address: string) {
  return address.replace("State Highway", "State Hwy").replace("Suite", "Ste.");
}
