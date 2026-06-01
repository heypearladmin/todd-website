import type { ReactNode } from "react";

/**
 * LegalPage
 *
 * Shared editorial shell for /terms and /policies. Keeps both legal pages
 * visually aligned with the rest of the site (eyebrow + display heading +
 * long-form prose container) without duplicating layout markup.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <main id="main" className="bg-paper">
      <section className="section-wrap py-24 md:py-32 lg:py-40">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-lg mt-4 max-w-3xl text-ink">{title}</h1>
        {intro ? <p className="dek mt-6">{intro}</p> : null}
        {lastUpdated ? (
          <p className="caption mt-6 !text-ink/55">Last updated: {lastUpdated}</p>
        ) : null}

        <article
          className="
            mt-12 max-w-measure-wide
            text-[0.9375rem] leading-[1.78] text-ink/80
            [&_h2]:font-display [&_h2]:text-[1.375rem] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink
            [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:font-display [&_h3]:text-[1.0625rem] [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-ink
            [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:mb-5
            [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
            [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
            [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:opacity-80
            [&_strong]:text-ink [&_strong]:font-semibold
          "
        >
          {children}
        </article>
      </section>
    </main>
  );
}
