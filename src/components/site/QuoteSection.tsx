"use client";

import Image from "next/image";
import { type FormEvent, type ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Mail, MapPin, Phone, Sparkles, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp } from "@/components/site/motion";
import { contactInfo, propertyTypeOptions, serviceOptions } from "@/data/site";

export function QuoteSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    servicesNeeded: "",
    message: "",
  });
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateField(field: keyof typeof formData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    setFormError("");
    setIsSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hasEmptyField = Object.values(formData).some((value) => value.trim() === "");

    if (hasEmptyField) {
      setFormError("Please complete all fields before submitting your quote request.");
      setIsSubmitted(false);
      return;
    }

    setFormError("");
    setIsSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      propertyType: "",
      location: "",
      servicesNeeded: "",
      message: "",
    });
  }

  return (
    <section id="quote" className="bg-[var(--background)] py-24 md:py-32">
      <div className="section-shell grid gap-8 md:grid-cols-2 xl:grid-cols-[0.85fr_1.2fr_0.95fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="flex flex-col justify-between">
          <div>
            <Badge>
              <ClipboardCheck className="size-3.5 text-[var(--green)]" />
              Request quote
            </Badge>
            <h2 className="font-heading mt-5 text-[26px] font-extrabold leading-tight text-[var(--pine)] sm:text-[30px] lg:text-[44px]">
              Request a free landscaping quote
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-[var(--muted-foreground)] md:text-[17px]">
              Tell us about your property and our team will follow up with the right maintenance
              solution.
            </p>
          </div>
          <div className="mt-10 hidden overflow-hidden rounded-2xl xl:block">
            <Image
              src="/images/gallery-1.jpg"
              alt="Decorative landscaping detail with flowers and maintained plantings"
              width={520}
              height={360}
              className="h-56 w-full object-cover"
            />
          </div>
        </motion.div>

        <Card className="premium-card cursor-default">
          <CardContent className="p-6 md:p-8">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Full Name" htmlFor="fullName">
                  <Input id="fullName" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={(event) => updateField("fullName", event.target.value)} />
                </FormField>
                <FormField label="Email Address" htmlFor="email">
                  <Input id="email" name="email" type="email" placeholder="Email Address" value={formData.email} onChange={(event) => updateField("email", event.target.value)} />
                </FormField>
              </div>
              <FormField label="Phone Number" htmlFor="phone">
                <Input id="phone" name="phone" placeholder="Phone Number" value={formData.phone} onChange={(event) => updateField("phone", event.target.value)} />
              </FormField>
              <FormField label="Property Type" htmlFor="propertyType">
                <Select id="propertyType" name="propertyType" value={formData.propertyType} onChange={(event) => updateField("propertyType", event.target.value)}>
                  <option value="">Property Type</option>
                  {propertyTypeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Property Location" htmlFor="location">
                <Input id="location" name="location" placeholder="Property Location" value={formData.location} onChange={(event) => updateField("location", event.target.value)} />
              </FormField>
              <FormField label="Services Needed" htmlFor="servicesNeeded">
                <Select id="servicesNeeded" name="servicesNeeded" value={formData.servicesNeeded} onChange={(event) => updateField("servicesNeeded", event.target.value)}>
                  <option value="">Services Needed</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Message" htmlFor="message">
                <Textarea id="message" name="message" placeholder="Message" value={formData.message} onChange={(event) => updateField("message", event.target.value)} />
              </FormField>
              <div aria-live="polite">
                {formError ? (
                  <p className="rounded-md border border-[rgba(242,90,29,0.24)] bg-[rgba(242,90,29,0.08)] px-3 py-2 text-sm font-semibold text-[var(--accent-strong)]">{formError}</p>
                ) : null}
                {isSubmitted ? (
                  <p className="rounded-md border border-[rgba(109,165,68,0.28)] bg-[rgba(109,165,68,0.1)] px-3 py-2 text-sm font-semibold text-[var(--green-strong)]">
                    Thank you! Your quote request has been received.
                  </p>
                ) : null}
              </div>
              <Button size="lg" type="submit">
                Submit Quote Request
                <Sparkles />
              </Button>
            </form>
          </CardContent>
        </Card>

        <motion.aside
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="overflow-hidden rounded-2xl bg-[var(--pine)] p-6 text-white shadow-[0_24px_80px_rgba(6,26,47,0.18)]"
        >
          <h3 className="font-heading text-[22px] font-extrabold">Contact Information</h3>
          <div className="mt-7 grid gap-5">
            <ContactItem icon={MapPin} label="Address">{contactInfo.address}</ContactItem>
            <ContactItem icon={Phone} label="Office">{contactInfo.office}</ContactItem>
            <ContactItem icon={Phone} label="Cell">{contactInfo.cell}</ContactItem>
            <ContactItem icon={Mail} label="Email">{contactInfo.email}</ContactItem>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl">
            <Image src="/images/gallery-2.jpg" alt="Small landscaping plant detail" width={520} height={300} className="h-36 w-full object-cover opacity-88" />
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-bold text-[var(--pine)]" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactItem({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-md bg-white/10 text-[var(--fresh-green)]">
        <Icon className="size-4" />
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/48">{label}</p>
        <p className="mt-1 text-sm font-semibold leading-6 text-white/86">{children}</p>
      </div>
    </div>
  );
}
