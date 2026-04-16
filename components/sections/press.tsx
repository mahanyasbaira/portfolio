import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { press } from '@/content/volunteering';
import { profile } from '@/content/profile';

export function PressSection() {
  return (
    <section id="press" className="relative py-24">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Press"
          title="Featured work."
        />
        <div className="grid gap-6 md:grid-cols-[1fr_auto]">
          {press.map((p) => (
            <Link
              key={p.id}
              href={p.url}
              className="group block rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--primary)]"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                {p.publication} · {p.date}
              </div>
              <h3 className="mt-2 font-serif text-2xl leading-tight">
                {p.title}
                <ArrowUpRight className="ml-2 inline h-5 w-5 -translate-y-1 text-[var(--primary)] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <p className="mt-3 text-sm text-[var(--fg-muted)]">{p.excerpt}</p>
            </Link>
          ))}
          <Link
            href={profile.links.phishingPdf}
            className="flex flex-col justify-between rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--primary)] md:max-w-xs"
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                Companion · PDF
              </div>
              <h3 className="mt-2 font-serif text-xl leading-tight">Phishing blog — read the deep dive</h3>
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--primary)]">
              Open PDF <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
