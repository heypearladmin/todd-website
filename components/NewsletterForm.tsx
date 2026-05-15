"use client";

import { useState } from "react";
import { newsletterCopy } from "@/lib/home-content";

type Status = "idle" | "submitting" | "ok" | "error";

/**
 * NewsletterForm
 * Pure client component. Submits to /api/newsletter when wired up.
 * No backend yet, so we resolve optimistically and surface a polite success state.
 */
export function NewsletterForm({ variant = "footer" }: { variant?: "footer" | "inline" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }
    setStatus("submitting");
    setMessage("");
    try {
      // TODO: wire to a real endpoint, e.g. POST /api/newsletter
      await new Promise((r) => setTimeout(r, 600));
      setStatus("ok");
      setMessage("You are on the list. Thanks for signing up.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const dark = variant === "footer";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-md">
      <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
        Email address
      </label>
      <div
        className={`flex items-center gap-2 rounded-full p-1.5 transition-shadow duration-cinema ease-cinema ${
          dark
            ? "bg-paper/95 shadow-surface ring-1 ring-ink/[0.06] focus-within:shadow-surface-hover"
            : "bg-paper ring-1 ring-ink/10 focus-within:ring-primary/40"
        }`}
      >
        <input
          id={`newsletter-email-${variant}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={newsletterCopy.placeholder}
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-[0.9375rem] text-ink placeholder:text-ink/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-paper transition-[background-color,opacity] duration-cinema ease-cinema hover:bg-primary/90 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending" : newsletterCopy.cta}
        </button>
      </div>
      <p
        className={`mt-3 text-[0.78rem] ${
          dark ? "text-paper/55" : "text-ink/55"
        } ${status === "error" ? "!text-copper" : ""}`}
        role={status === "error" ? "alert" : undefined}
      >
        {status === "ok"
          ? message
          : status === "error"
          ? message
          : newsletterCopy.consentLine}
      </p>
    </form>
  );
}
