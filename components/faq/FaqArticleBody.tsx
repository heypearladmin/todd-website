import type { FaqBodySection } from "@/lib/home-content";

type Props = { sections: FaqBodySection[] };

export function FaqArticleBody({ sections }: Props) {
  if (!sections.length) return null;
  return (
    <div className="space-y-10">
      {sections.map((section, i) => (
        <div key={i}>
          {section.heading && (
            <h2 className="display-md text-ink mb-4">{section.heading}</h2>
          )}
          {section.subheading && (
            <h3 className="display-sm text-ink mb-3 mt-6">{section.subheading}</h3>
          )}
          {section.body && (
            <p className="text-[1.0625rem] leading-[1.78] text-ink/75">{section.body}</p>
          )}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {section.bullets.map((pt) => (
                <li key={pt} className="flex gap-3 text-[1.0625rem] leading-[1.78] text-ink/75">
                  <span
                    aria-hidden
                    className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
                  />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
          {section.quote && (
            <blockquote className="mt-5 border-l-[3px] border-primary/40 pl-5">
              <p className="text-[1.0625rem] italic leading-[1.78] text-ink/65">
                {section.quote}
              </p>
            </blockquote>
          )}
          {section.callout && (
            <div className="mt-5 rounded-xl border border-copper/25 bg-copper/[0.06] px-5 py-4">
              <p className="mb-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-copper">
                {section.callout.label}
              </p>
              <p className="text-[0.9375rem] leading-[1.7] text-ink/75">
                {section.callout.body}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
