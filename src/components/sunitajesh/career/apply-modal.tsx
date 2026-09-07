"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRightIcon } from "../shared/icons";
import { startScroll, stopScroll } from "../shared/smooth-scroll-provider";
import { APPLY_FORM, CONTACT, type Role } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;
const FIELD =
  "w-full bg-transparent border-b border-white/10 focus:border-accent/60 py-3 text-[15px] text-white placeholder:text-white/20 outline-none transition-colors duration-300";
const LABEL = "text-[11px] uppercase tracking-[0.14em] text-white/30 font-[570] mb-2 block";

/**
 * The fields themselves, keyed by role from the parent so switching openings
 * gives a genuinely fresh form — no effect reaching in to clear the last one.
 */
const ApplyFields = ({ role }: { role: Role }) => {
  const [sent, setSent] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => firstField.current?.focus(), 220);
    return () => window.clearTimeout(t);
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const f = new FormData(event.currentTarget);
    const body = [
      `Role: ${role.title}`,
      `Name: ${f.get("name") ?? ""}`,
      `Email: ${f.get("email") ?? ""}`,
      `Phone: ${f.get("phone") ?? ""}`,
      "",
      String(f.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Application — ${role.title}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div>
        <label className={LABEL} htmlFor="apply-name">{APPLY_FORM.fields.name.label}</label>
        <input ref={firstField} id="apply-name" name="name" required className={FIELD}
          placeholder={APPLY_FORM.fields.name.placeholder} />
      </div>
      <div>
        <label className={LABEL} htmlFor="apply-email">{APPLY_FORM.fields.email.label}</label>
        <input id="apply-email" name="email" type="email" required className={FIELD}
          placeholder={APPLY_FORM.fields.email.placeholder} />
      </div>
      <div>
        <label className={LABEL} htmlFor="apply-phone">{APPLY_FORM.fields.phone.label}</label>
        <input id="apply-phone" name="phone" type="tel" className={FIELD}
          placeholder={APPLY_FORM.fields.phone.placeholder} />
      </div>
      <div>
        <label className={LABEL} htmlFor="apply-message">{APPLY_FORM.fields.message.label}</label>
        <textarea id="apply-message" name="message" rows={4} className={`${FIELD} resize-none`}
          placeholder={APPLY_FORM.fields.message.placeholder} />
      </div>

      <p className="text-[13px] text-white/35 leading-relaxed -mt-2">
        {APPLY_FORM.attachHint}
      </p>

      <div className="flex flex-col gap-3 pt-1">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2.5 bg-white text-darkgrey text-sm font-[650] px-7 py-3.5 rounded-full relative overflow-hidden w-full sm:w-fit cursor-pointer"
        >
          <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-380 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          <span className="relative z-10 group-hover:text-onprimary transition-[color] duration-200">
            {APPLY_FORM.submit}
          </span>
          <ArrowUpRightIcon className="relative z-10 group-hover:text-onprimary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-200" />
        </button>

        {sent && (
          <p className="text-[13px] text-accent leading-relaxed">
            {APPLY_FORM.sentNote}
          </p>
        )}
      </div>
    </form>
  );
};

type ApplyModalProps = { role: Role | null; onClose: () => void };

/**
 * Application dialog for a single role.
 *
 * It hands the filled details to the visitor's mail client, the same way the
 * contact form does. Attachments are deliberately not collected: `mailto:` has
 * no attachment parameter in any browser, so a file picker here could only
 * drop the file silently.
 */
export const ApplyModal = ({ role, onClose }: ApplyModalProps) => {
  useEffect(() => {
    if (!role) return;
    stopScroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      startScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [role, onClose]);

  return (
    <AnimatePresence>
      {role && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Apply for ${role.title}`}
            /* A stopped Lenis still swallows wheel and touch, so without an
               opt-out the dialog cannot scroll its own overflow. The generic
               attribute covers both, and the two specific ones are belt and
               braces for the touch path, which takes a different branch inside
               Lenis. touch-action keeps the browser's own panning available.
               svh, not vh, so the dialog fits the viewport a phone actually
               shows rather than the URL-bar-hidden one. */
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
            className="relative w-full sm:max-w-[560px] max-h-[85svh] overflow-y-auto overscroll-contain bg-darkgrey border border-white/10 rounded-t-3xl sm:rounded-3xl px-5 sm:px-8 py-7 sm:py-9"
            initial={{ y: 28, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.42, ease: EASE }}
          >
            <div className="flex items-start justify-between gap-6 mb-7">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] block mb-1.5">
                  {APPLY_FORM.eyebrow}
                </span>
                <h2 className="text-2xl sm:text-[28px] font-[790] tracking-[-0.02em] text-white leading-tight">
                  {role.title}
                </h2>
                <p className="text-[13px] text-white/35 mt-1.5">
                  {role.type} · {role.location}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 -mr-1 -mt-1 p-2.5 text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ApplyFields key={role.slug} role={role} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
