import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { wins } from '@/content/wins';

export function WinsSection() {
  return (
    <section id="wins" className="relative py-24">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Hackathon wins"
          title="First-place finishes."
          description="Two hackathons, two first-place podiums, both with working demos judged on stage."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          {wins.map((w) => (
            <article
              key={w.id}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
            >
              <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
                {w.images.map((img) => (
                  <div key={img.src} className="relative aspect-[4/3] bg-[var(--bg)]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  {w.event} · {w.year} · {w.location}
                </div>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{w.title}</h3>
                <div className="mt-1 text-[var(--primary)]">{w.place}</div>
                <p className="mt-3 text-sm text-[var(--fg-muted)]">{w.description}</p>
                {w.stack ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {w.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[11px] font-mono text-[var(--fg-muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
