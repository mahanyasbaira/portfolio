import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { experiences } from '@/content/experience';

function fmt(d: string) {
  if (d === 'Present') return 'Present';
  const [y, m] = d.split('-');
  const date = new Date(Number(y), Number(m) - 1, 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shown up."
          description="Systems, security, and research roles, each one measured in what shipped."
        />
        <ol className="relative">
          {experiences.map((e, idx) => (
            <li
              key={e.id}
              className="relative grid grid-cols-[auto_1fr] gap-4 pb-12 last:pb-0 md:gap-6"
            >
              <div className="flex flex-col items-center">
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] font-mono text-[11px] font-bold">
                  {e.logoInitial}
                </span>
                {idx < experiences.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-[var(--border)]" />
                )}
              </div>
              <div className="pb-2">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <span className="text-[var(--fg-muted)]">·</span>
                  {e.orgUrl ? (
                    <Link
                      href={e.orgUrl}
                      className="text-base text-[var(--primary)] underline-offset-4 hover:underline"
                    >
                      {e.org}
                    </Link>
                  ) : (
                    <span className="text-base text-[var(--primary)]">{e.org}</span>
                  )}
                </div>
                <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.15em] text-[var(--fg-muted)]">
                  {fmt(e.start)} – {fmt(e.end)} · {e.type} · {e.mode} · {e.location}
                </div>
                <p className="mt-3 text-[var(--fg-muted)]">{e.summary}</p>
                <ul className="mt-3 space-y-2">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-[var(--primary)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-0.5 text-[11px] font-mono tracking-tight text-[var(--fg-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
