import { SectionHeading } from '@/components/ui/section-heading';
import { skillGroups } from '@/content/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Technical"
          title="Stack I reach for."
          description="Tools I’ve used in production, research, or graded coursework — not a buzzword wall."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div
              key={g.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                  {g.label}
                </h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
