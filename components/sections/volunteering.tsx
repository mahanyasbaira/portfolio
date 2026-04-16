import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { volunteering } from '@/content/volunteering';

export function VolunteeringSection() {
  return (
    <section id="volunteering" className="relative py-24">
      <div className="container-prose">
        <SectionHeading eyebrow="Community" title="Showing up off the clock." />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {volunteering.map((v) => (
              <div
                key={v.id}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  {v.cause} · {v.start} → {v.end}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{v.role}</h3>
                {v.orgUrl ? (
                  <Link href={v.orgUrl} className="text-sm text-[var(--primary)] underline-offset-4 hover:underline">
                    {v.org}
                  </Link>
                ) : (
                  <div className="text-sm">{v.org}</div>
                )}
                <ul className="mt-3 space-y-1.5 text-sm text-[var(--fg-muted)]">
                  {v.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-[var(--primary)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <figure className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]">
              <div className="relative aspect-square">
                <Image src="/images/hackprinceton.png" alt="At HackPrinceton, Princeton University" fill sizes="400px" className="object-cover transition group-hover:scale-[1.02]" />
              </div>
              <figcaption className="p-3 text-xs text-[var(--fg-muted)]">HackPrinceton · 2-day on-campus hackathon</figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]">
              <div className="relative aspect-square">
                <Image src="/images/csu-ai-symposium.png" alt="Volunteering at the CSU AI Symposium" fill sizes="400px" className="object-cover transition group-hover:scale-[1.02]" />
              </div>
              <figcaption className="p-3 text-xs text-[var(--fg-muted)]">CSU AI Symposium · Microsoft & Accenture panel</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
