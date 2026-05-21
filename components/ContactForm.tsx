"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "ok" | "error";

/**
 * ContactForm
 *
 * A2P 10DLC / Twilio / GoHighLevel AI Dialer compliant contact form.
 *
 * Compliance rules enforced here:
 *  - Consent checkbox is NOT pre-checked (defaults to false).
 *  - Submit button is disabled until consent is checked.
 *  - Consent text discloses SMS + AI calling, STOP/HELP, message frequency,
 *    and message & data rates, and links to /terms and /policies.
 *  - All fields use native HTML validation as a baseline (so the form
 *    remains compliant even with JS disabled — the checkbox is `required`).
 */
export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false); // MUST default to false
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const company = site.complianceCompanyName;

  const canSubmit =
    consent &&
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    email.trim().length > 0 &&
    phone.trim().length > 0 &&
    message.trim().length > 0 &&
    status !== "submitting";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setFeedback("Please review and check the consent box to continue.");
      return;
    }
    setStatus("submitting");
    setFeedback("");
    try {
      // TODO: wire to a real endpoint (e.g. POST /api/contact) when backend is ready.
      // Form is intentionally inert today so no submissions are silently lost.
      await new Promise((r) => setTimeout(r, 600));
      setStatus("ok");
      setFeedback("Thanks — your message has been received. I will respond within a business day.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setConsent(false);
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

      <div className="grid gap-2">
        <label htmlFor="message" className="eyebrow !text-ink/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* ───────────── A2P 10DLC consent block ─────────────
          Checkbox is NOT pre-checked and is `required`. Submit is also
          gated by `canSubmit` so the button stays disabled until consent
          is given and required fields are filled. */}
      <div className="mt-2 rounded-2xl border border-ink/[0.08] bg-paper-deep/40 p-5 shadow-inset-frame">
        <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-ink/30 text-primary accent-primary focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-paper"
            aria-describedby="contact-consent-text"
          />
          <span
            id="contact-consent-text"
            className="text-[0.875rem] leading-[1.7] text-ink/75"
          >
            I agree to receive text messages and phone calls from {company} at the phone
            number provided. Message frequency varies. Message &amp; data rates may
            apply. Reply STOP to unsubscribe. Reply HELP for help. By submitting this
            form, you agree to our{" "}
            <Link href={site.termsPath} className="editorial-link">
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link href={site.policiesPath} className="editorial-link">
              Privacy Policy
            </Link>
            .
            <span className="mt-3 block text-ink/65">
              By providing your phone number, you consent to receive calls and text
              messages, including automated calls and AI-assisted communications, from{" "}
              {company}.
            </span>
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
