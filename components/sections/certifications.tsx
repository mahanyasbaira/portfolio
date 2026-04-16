'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card3D } from '@/components/ui/card-3d';
import { certifications, type Certification } from '@/content/certifications';

const filters: (Certification['category'] | 'All')[] = [
  'All',
  'Cloud',
  'AI/ML',
  'DevOps',
  'Data',
  'ITSM',
  'Program',
];

export function CertificationsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const items = useMemo(
    () => (filter === 'All' ? certifications : certifications.filter((c) => c.category === filter)),
    [filter],
  );

  return (
    <section id="certifications" className="relative py-24">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified credentials."
          description="Click any card to open the issuer's verification page."
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={
                'rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] transition ' +
                (filter === f
                  ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-contrast)]'
                  : 'border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg-muted)] hover:text-[var(--fg)]')
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => {
            const inner = (
              <Card3D>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg)]">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                      {c.category} · {c.issuer}
                    </div>
                    <h3 className="mt-1 text-sm font-semibold leading-snug">{c.name}</h3>
                  </div>
                  {c.verifyUrl ? <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--primary)]" /> : null}
                </div>
              </Card3D>
            );
            return c.verifyUrl ? (
              <Link
                key={c.id}
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Verify ${c.name}`}
              >
                {inner}
              </Link>
            ) : (
              <div key={c.id}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
