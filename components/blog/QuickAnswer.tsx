type Props = { answer: string };

export function QuickAnswer({ answer }: Props) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] px-6 py-5">
      <p className="caption !text-primary mb-2">Quick answer</p>
      <p className="text-[1.0625rem] leading-[1.75] text-ink/80 font-medium">{answer}</p>
    </div>
  );
}
