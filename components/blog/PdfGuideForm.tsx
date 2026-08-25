"use client";

import { useState, type FormEvent } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Status = "idle" | "submitting" | "success" | "error";

export function PdfGuideForm({ guideSlug, shortName }: { guideSlug: string; shortName: string }) {
  const ctaLabel = `Get Your Free ${shortName} Guide`;
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const canSubmit = firstName.trim().length > 0 && email.trim().length > 0 && status !== "submitting";

  const inputClass =
    "w-full rounded-[14px] border border-ink/[0.10] bg-paper px-4 py-3 text-[0.9375rem] text-ink placeholder:text-ink/30 shadow-inset-frame transition-[border-color,box-shadow] duration-300 ease-editorial focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/[0.12] focus:ring-offset-0";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/pdf-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, phone, guideSlug }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = (await res.json()) as { downloadUrl?: string };
      window.gtag?.("event", "form_submit", {
        event_category: "pdf_lead_magnet",
        event_label: guideSlug,
      });
      window.gtag?.("event", "pdf_guide_download", {
        event_category: "lead",
        event_label: guideSlug,
      });
      setDownloadUrl(data.downloadUrl ?? null);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" && downloadUrl) {
    return (
      <div className="flex flex-col items-start gap-3">
        <p className="text-[0.9375rem] leading-[1.6] text-ink/75">
          Thanks, {firstName.trim()} — your guide is ready.
        </p>
        <a href={downloadUrl} download className="btn-primary">
          Download the guide
          <span aria-hidden className="text-base">↓</span>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor={`pdf-firstName-${guideSlug}`} className="eyebrow !text-ink/60">
            First name
          </label>
          <input
            id={`pdf-firstName-${guideSlug}`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor={`pdf-email-${guideSlug}`} className="eyebrow !text-ink/60">
            Email
          </label>
          <input
            id={`pdf-email-${guideSlug}`}
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
      </div>

      <div className="grid gap-1.5">
        <label htmlFor={`pdf-phone-${guideSlug}`} className="eyebrow !text-ink/60">
          Phone <span className="normal-case font-normal text-ink/40">(optional)</span>
        </label>
        <input
          id={`pdf-phone-${guideSlug}`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 555-5555"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col items-start gap-2">
        <button
          type="submit"
          disabled={!canSubmit}
          aria-disabled={!canSubmit}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          {status === "submitting" ? "Sending" : ctaLabel}
          {status !== "submitting" && (
            <span aria-hidden className="text-base">↓</span>
          )}
        </button>
        {status === "error" && (
          <p role="alert" className="text-[0.8125rem] text-copper">
            Something went wrong. Please try again, or{" "}
            <a href="/contact" className="editorial-link !text-copper">
              contact Todd directly
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
