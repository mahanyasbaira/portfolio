import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { skillGroups } from '@/content/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Technical"
          title="Stack I reach for."
          description="Tools I’ve used in production, research, or graded coursework, not a buzzword wall."
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
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) =>
                  item.icon ? (
                    <div
                      key={item.name}
                      title={item.name}
                      className="group relative flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg)] transition hover:border-[var(--primary)]"
                    >
                      <Image
                        src={`https://skillicons.dev/icons?i=${item.icon}`}
                        alt={item.name}
                        width={22}
                        height={22}
                        unoptimized
                        className="h-[22px] w-[22px]"
                      />
                      <span className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-[var(--fg)] px-1.5 py-0.5 text-[10px] font-mono text-[var(--bg)] opacity-0 transition group-hover:opacity-100">
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <span
                      key={item.name}
                      className="inline-flex h-9 items-center rounded-md border border-[var(--border)] bg-[var(--bg)] px-2.5 text-xs"
                    >
                      {item.name}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
