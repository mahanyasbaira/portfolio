import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { projects } from '@/content/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Projects"
          title="Things I’ve built end-to-end."
          description="Full-stack, ML, and VR, each one shipped with its own metric that matters."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--primary)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl leading-tight">{p.name}</h3>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">{p.tagline}</p>
                </div>
                <div className="flex gap-1.5">
                  {p.repo ? (
                    <Link
                      href={p.repo}
                      aria-label={`${p.name} on GitHub`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </Link>
                  ) : null}
                  {p.demo ? (
                    <Link
                      href={p.demo}
                      aria-label={`${p.name} demo`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : null}
                </div>
              </div>
              <p className="mt-4 text-sm text-[var(--fg)]/90">{p.description}</p>
              {p.highlight ? (
                <div className="mt-3 rounded-lg border border-dashed border-[var(--primary)]/40 bg-[var(--primary)]/5 px-3 py-2 text-xs font-mono text-[var(--primary)]">
                  {p.highlight}
                </div>
              ) : null}
              <div className="mt-4">
                <ArchitectureDiagram architecture={p.architecture} />
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[11px] font-mono text-[var(--fg-muted)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
