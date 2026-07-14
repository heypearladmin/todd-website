type Props = { takeaways: string[] };

export function KeyTakeaways({ takeaways }: Props) {
  if (!takeaways.length) return null;
  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-paper px-6 py-6">
      <p className="caption !text-ink/50 mb-4">Key takeaways</p>
      <ul className="space-y-3">
        {takeaways.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10"
            >
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                <path
                  d="M1 4.5l3 3 6-7"
                  stroke="#27497A"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-[0.9375rem] leading-[1.65] text-ink/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
