import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.brand}.`,
};

export default function ContactPage() {
  return (
    <main id="main" className="bg-paper">
      <section className="section-wrap py-24 md:py-32 lg:py-40">
        <p className="type-eyebrow">Contact</p>
        <h1 className="type-display mt-4 max-w-3xl">
          Tell me the chapter you are in.
        </h1>
        <p className="type-dek mt-6 max-w-measure-wide">
          Send a note. Buying, selling, or just curious about the market here.
          I read every message and respond within a business day.
        </p>

        <form className="mt-12 grid max-w-2xl gap-6">
          <div className="grid gap-2">
            <label htmlFor="name" className="type-eyebrow text-ink/60">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="border border-ink/15 bg-paper px-4 py-3 text-base text-ink shadow-inset-frame focus:border-accent focus:outline-none"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="type-eyebrow text-ink/60">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="border border-ink/15 bg-paper px-4 py-3 text-base text-ink shadow-inset-frame focus:border-accent focus:outline-none"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="type-eyebrow text-ink/60">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="border border-ink/15 bg-paper px-4 py-3 text-base text-ink shadow-inset-frame focus:border-accent focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="btn-primary justify-self-start"
          >
            Send note
          </button>
        </form>
      </section>
    </main>
  );
}
