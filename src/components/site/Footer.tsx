import { type ReactNode } from "react";
import Image from "next/image";

import { FilledIcon, type FilledIconName } from "@/components/site/FilledIcon";
import { contactInfo, footerServices, navItems } from "@/data/site";

const socialLinks: { icon: FilledIconName; label: string; href: string }[] = [
  { icon: "facebook", label: "Facebook", href: "#" },
  { icon: "instagram", label: "Instagram", href: "#" },
  { icon: "linkedin", label: "LinkedIn", href: "#" },
  { icon: "mail", label: "Email", href: contactInfo.emailHref },
];

export function Footer() {
  return (
    <footer className="bg-[var(--pine)] text-white">
      <div className="border-b border-white/10">
        <div className="section-shell flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-heading text-lg font-bold">Subscribe newsletter for outdoor updates</p>
          <form className="flex w-full max-w-md overflow-hidden rounded-full border border-white/16 bg-white/8 p-1">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Add email"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/48"
            />
            <button type="submit" aria-label="Subscribe" className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-white transition hover:bg-[var(--accent-strong)]">
              <FilledIcon name="arrow" className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative overflow-hidden">
          <a href="#home" className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
            <Image
              src="/images/lonestar-logo-full.svg"
              alt="BR Lonestar Landscaping & Property Maintenance logo"
              width={240}
              height={90}
              className="h-14 w-auto max-w-[220px] object-contain"
            />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">
            Professional landscaping and property maintenance for HOAs, commercial properties, and
            managed communities across North Texas.
          </p>
          <Image
            src="/images/lonestar-icon.svg"
            alt=""
            width={120}
            height={118}
            className="pointer-events-none absolute right-2 top-24 h-24 w-24 opacity-10"
            aria-hidden="true"
          />
          <div className="mt-6 flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/7 text-white/72 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-white"
              >
                <FilledIcon name={item.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Link">
          {navItems.map((item) => (
            <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Our Services">
          {footerServices.map((service) => (
            <FooterLink key={service} href="#services">{service}</FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <FooterText>{contactInfo.address}</FooterText>
          <FooterText>Office: {contactInfo.office}</FooterText>
          <FooterText>Cell: {contactInfo.cell}</FooterText>
          <FooterLink href={contactInfo.emailHref}>{contactInfo.email}</FooterLink>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-6 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
          <p>© 2025 BR Lonestar Landscaping & Property Maintenance. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="transition hover:text-white" href="#">Privacy Policy</a>
            <a className="transition hover:text-white" href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-white">{title}</h3>
      <div className="mt-5 grid gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="text-sm leading-6 text-white/66 transition hover:text-white" href={href}>
      {children}
    </a>
  );
}

function FooterText({ children }: { children: ReactNode }) {
  return <p className="text-sm leading-6 text-white/66">{children}</p>;
}
