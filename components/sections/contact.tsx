import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/beams';
import { profile } from '@/content/profile';

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <BackgroundBeams />
      <div className="container-prose relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
            Let’s build something
          </div>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
            Say hi, <span className="text-gradient">we’ll figure out the rest</span>.
          </h2>
          <p className="mt-5 text-lg text-[var(--fg-muted)]">
            Best via email. I reply within a day — sooner if it’s about ML research, hackathons, or
            anything weird and ambitious.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--primary-contrast)] shadow-sm transition hover:brightness-110"
            >
              <Mail className="h-4 w-4" /> {profile.email} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={profile.links.github}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Github className="h-4 w-4" /> GitHub
            </Link>
            <Link
              href={profile.links.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
