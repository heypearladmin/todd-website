"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Status = "idle" | "submitting" | "ok" | "error";

/**
 * ContactForm
 *
 * A2P 10DLC compliant contact form with two optional consent checkboxes:
 *  - Non-marketing (transactional): opt-in to property inquiry follow-ups via SMS
 *  - Marketing/promotional: opt-in to market updates and listings via SMS
 * Both checkboxes default to unchecked. Submit is enabled once required fields
 * are filled regardless of checkbox state (consent is optional per A2P guidelines).
 */
export function ContactForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consentTransactional, setConsentTransactional] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const company = site.complianceCompanyName;

  const canSubmit =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    email.trim().length > 0 &&
    phone.trim().length > 0 &&
    status !== "submitting";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, consentTransactional, consentMarketing }),
      });
      if (!res.ok) throw new Error(await res.text());
      window.gtag?.("event", "form_submit", {
        event_category: "contact",
        event_label: "contact_form",
      });
      window.gtag?.("event", "contact_form_submit", {
        event_category: "lead",
      });
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again or call directly.");
    }
  }

  const inputClass =
    "w-full rounded-[14px] border border-ink/[0.10] bg-paper px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-ink/30 shadow-inset-frame transition-[border-color,box-shadow] duration-300 ease-editorial focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/[0.12] focus:ring-offset-0";

  return (
    <form
      onSubmit={onSubmit}
      noValidate={false}
      className="grid gap-6"
      aria-describedby="contact-consent-text"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="firstName" className="eyebrow !text-ink/60">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="lastName" className="eyebrow !text-ink/60">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="eyebrow !text-ink/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="eyebrow !text-ink/60">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 555-5555"
          className={inputClass}
        />
      </div>

      {/* ───────────── A2P 10DLC consent block ─────────────
          Both checkboxes are optional and NOT pre-checked.
          Submit is enabled once required fields are filled. */}
      <div className="mt-2 space-y-4 rounded-2xl border border-ink/[0.08] bg-paper-deep/40 p-5 shadow-inset-frame">
        <label htmlFor="consent-transactional" className="flex items-start gap-3 cursor-pointer">
          <input
            id="consent-transactional"
            name="consent_transactional"
            type="checkbox"
            checked={consentTransactional}
            onChange={(e) => setConsentTransactional(e.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-ink/30 text-primary accent-primary focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-paper"
          />
          <span className="text-[0.875rem] leading-[1.7] text-ink/75">
            I consent to receive non-marketing text messages from{" "}
            <strong className="font-semibold text-ink">{company}</strong> regarding
            real estate inquiries, property updates, and appointment reminders.
            Message frequency varies, message &amp; data rates may apply. Reply HELP
            for assistance, reply STOP to opt out.
          </span>
        </label>

        <label htmlFor="consent-marketing" className="flex items-start gap-3 cursor-pointer">
          <input
            id="consent-marketing"
            name="consent_marketing"
            type="checkbox"
            checked={consentMarketing}
            onChange={(e) => setConsentMarketing(e.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-ink/30 text-primary accent-primary focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-paper"
          />
          <span className="text-[0.875rem] leading-[1.7] text-ink/75">
            I consent to receive marketing text messages from{" "}
            <strong className="font-semibold text-ink">{company}</strong> regarding
            new listings, market updates, and real estate promotions. Message
            frequency varies, message &amp; data rates may apply. Reply HELP for
            assistance, reply STOP to opt out.
          </span>
        </label>
      </div>

      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={!canSubmit}
          aria-disabled={!canSubmit}
          className="btn-primary justify-self-start disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          {status === "submitting" ? "Sending" : "Send note"}
        </button>

        <p className="text-[0.8125rem] text-ink/50">
          <Link href={site.policiesPath} className="editorial-link !text-ink/50 hover:!text-ink/80">
            Privacy Policy
          </Link>
          {" | "}
          <Link href={site.termsPath} className="editorial-link !text-ink/50 hover:!text-ink/80">
            Terms and Conditions
          </Link>
        </p>

        {feedback ? (
          <p
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
            className={`text-[0.875rem] leading-relaxed ${
              status === "error" ? "text-copper" : "text-ink/70"
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
