import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, className, align = 'left' }: Props) {
  return (
    <div className={cn('mb-10 max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--fg-muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base text-[var(--fg-muted)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
