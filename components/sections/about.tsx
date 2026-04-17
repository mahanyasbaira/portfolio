import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { profile } from '@/content/profile';

const facts = [
  { label: 'Degree', value: 'B.S. Computer Science' },
  { label: 'School', value: 'Colorado State University' },
  { label: 'Graduation', value: 'Dec 2027' },
  { label: 'Based in', value: 'Fort Collins, CO' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-prose grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <SectionHeading
            eyebrow="About"
            title="I build systems that ship, and research that holds up."
          />
          <div className="space-y-4 text-lg leading-relaxed text-[var(--fg-muted)]">
            <p>
              I’m a CS student at Colorado State splitting time between AI research at the AI-LEAF
              institute, systems engineering for the College of Engineering, and shipping AI-first
              web tools. I like problems where the right answer needs both a model and a deploy
              pipeline.
            </p>
            <p>
              In the last year I’ve won two hackathons, been featured in{' '}
              <Link className="text-[var(--primary)] underline-offset-4 hover:underline" href={profile.links.article}>
                The Rocky Mountain Collegian
              </Link>{' '}
              for phishing-awareness work, and shipped a research platform with sub-second semantic
              search over 1,000+ papers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 self-center">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                {f.label}
              </div>
              <div className="mt-1 text-sm font-medium">{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
