import type { FaqSource } from "@/lib/home-content";

type Props = { sources: FaqSource[] };

export function FaqSources({ sources }: Props) {
  if (!sources.length) return null;
  return (
    <div>
      <p className="caption !text-ink/50 mb-4">Sources</p>
      <ul className="space-y-2">
        {sources.map((s) => (
          <li key={s.href} className="flex items-start gap-2.5 text-[0.875rem]">
            <span aria-hidden className="mt-[0.35em] h-1 w-1 flex-shrink-0 rounded-full bg-ink/30" />
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
