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

const TIMELINE_OPTIONS = [
  "Ready to list now",
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "Just curious about value",
];

/**
 * ValuationForm
 *
 * Dedicated home-valuation intake — separate from ContactForm so valuation
 * leads carry their own GHL tag/source and the property details needed to
 * actually prepare a CMA, rather than a generic inquiry.
 */
export function ValuationForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cityZip, setCityZip] = useState("");
  const [timeline, setTimeline] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const canSubmit =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    email.trim().length > 0 &&
    phone.trim().length > 0 &&
    address.trim().length > 0 &&
    cityZip.trim().length > 0 &&
    status !== "submitting";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");
    try {
      const res = await fetch("/api/valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, address, cityZip, timeline }),
      });
      if (!res.ok) throw new Error(await res.text());
      window.gtag?.("event", "form_submit", {
        event_category: "valuation",
        event_label: "home_valuation_form",
      });
      window.gtag?.("event", "valuation_request", {
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
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="val-firstName" className="eyebrow !text-ink/60">
            First name
          </label>
          <input
            id="val-firstName"
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
          <label htmlFor="val-lastName" className="eyebrow !text-ink/60">
            Last name
          </label>
          <input
            id="val-lastName"
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

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="val-email" className="eyebrow !text-ink/60">
            Email
          </label>
          <input
            id="val-email"
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
          <label htmlFor="val-phone" className="eyebrow !text-ink/60">
            Phone number
          </label>
          <input
            id="val-phone"
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
      </div>

      <div className="grid gap-2">
        <label htmlFor="val-address" className="eyebrow !text-ink/60">
          Property address
        </label>
        <input
          id="val-address"
          name="address"
          type="text"
          autoComplete="street-address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123 River Bend Dr"
          className={inputClass}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="val-cityZip" className="eyebrow !text-ink/60">
            City &amp; ZIP
          </label>
          <input
            id="val-cityZip"
            name="cityZip"
            type="text"
            autoComplete="address-level2"
            required
            value={cityZip}
            onChange={(e) => setCityZip(e.target.value)}
            placeholder="New Braunfels, TX 78130"
            className={inputClass}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="val-timeline" className="eyebrow !text-ink/60">
            Selling timeline <span className="normal-case font-normal text-ink/40">(optional)</span>
          </label>
          <select
            id="val-timeline"
            name="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">Select one</option>
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={!canSubmit}
          aria-disabled={!canSubmit}
          className="btn-primary justify-self-start disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          {status === "submitting" ? "Sending" : "Get my home value"}
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
