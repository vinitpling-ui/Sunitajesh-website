"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { SOCIAL_LINKS } from "../shared/social-links";
import { ArrowUpRightIcon } from "../shared/icons";
import { CONTACT, CONTACT_FORM } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;

const FIELD =
  "w-full bg-transparent border-b border-white/10 focus:border-accent/60 py-3 text-[15px] text-white placeholder:text-white/20 outline-none transition-colors duration-300";
const LABEL = "text-[11px] uppercase tracking-[0.14em] text-white/30 font-[570] mb-2 block";

export const ContactForm = () => {
  // no backend is wired yet — hand the enquiry to the mail client so the form
  // is not a dead end while the endpoint is still to come
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name") ?? ""}`,
      `Email: ${f.get("email") ?? ""}`,
      `Phone: ${f.get("phone") ?? ""}`,
      "",
      String(f.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Enquiry from ${f.get("name") ?? "the website"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    /* #get-in-touch is the footer's Services target. scroll-mt clears the fixed
       nav on a native hash jump; Lenis gets the same offset separately, since it
       does not honour scroll-margin. */
    <section
      id="get-in-touch"
      className="scroll-mt-28 py-16 sm:py-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* ── details ── */}
        <motion.div
          className="lg:col-span-5 flex flex-col"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] mb-6 block">
            {CONTACT_FORM.eyebrow}
          </span>
          <p className="text-[clamp(1.1rem,2vw,1.4rem)] font-[430] text-white/70 leading-[1.6] mb-12">
            {CONTACT_FORM.heading}
          </p>

          <dl className="flex flex-col">
            {[
              { label: "Office", value: CONTACT.office, href: undefined },
              { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
            ].map((row) => (
              <div key={row.label} className="border-t border-white/8 py-5">
                <dt className={LABEL}>{row.label}</dt>
                <dd className="text-[15px] text-white/70">
                  {row.href ? (
                    <a href={row.href} className="inline-block py-1.5 -my-1.5 hover:text-accent transition-colors duration-300">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
            <div className="border-t border-white/8 py-5">
              <dt className={LABEL}>{CONTACT_FORM.followLabel}</dt>
              <dd className="flex flex-col gap-2.5 mt-1">
                {SOCIAL_LINKS.map(({ label, value, href, icon }) => {
                  const external = href.startsWith("http");
                  return (
                    <a
                      key={label}
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group inline-flex items-center gap-3 py-1.5 -my-1.5 text-sm text-white/40 hover:text-white transition-colors duration-300 w-fit"
                    >
                      <span className="text-white/25 group-hover:text-accent transition-colors duration-300">
                        {icon}
                      </span>
                      <span className="w-20 shrink-0">{label}</span>
                      {value && <span className="text-white/25">{value}</span>}
                    </a>
                  );
                })}
              </dd>
            </div>
            <div className="border-t border-white/8" />
          </dl>
        </motion.div>

        {/* ── form ── */}
        <motion.form
          onSubmit={onSubmit}
          className="lg:col-span-7 flex flex-col gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px 0px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className={LABEL} htmlFor="name">{CONTACT_FORM.fields.name.label}</label>
              <input id="name" name="name" required className={FIELD}
                placeholder={CONTACT_FORM.fields.name.placeholder} />
            </div>
            <div>
              <label className={LABEL} htmlFor="email">{CONTACT_FORM.fields.email.label}</label>
              <input id="email" name="email" type="email" required className={FIELD}
                placeholder={CONTACT_FORM.fields.email.placeholder} />
            </div>
          </div>

          <div>
            <label className={LABEL} htmlFor="phone">{CONTACT_FORM.fields.phone.label}</label>
            <input id="phone" name="phone" type="tel" className={FIELD}
              placeholder={CONTACT_FORM.fields.phone.placeholder} />
          </div>

          <div>
            <label className={LABEL} htmlFor="message">{CONTACT_FORM.fields.message.label}</label>
            <textarea id="message" name="message" rows={5} className={`${FIELD} resize-none`}
              placeholder={CONTACT_FORM.fields.message.placeholder} />
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <button
              type="submit"
              className="group inline-flex items-center gap-2.5 bg-white text-darkgrey text-sm font-[650] px-7 py-3.5 rounded-full relative overflow-hidden w-fit cursor-pointer"
            >
              <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-380 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 group-hover:text-onprimary transition-[color] duration-200">
                {CONTACT_FORM.submit}
              </span>
              <ArrowUpRightIcon className="relative z-10 group-hover:text-onprimary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-200" />
            </button>
            {sent && (
              <span className="text-sm text-accent">Opening your mail app…</span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};
