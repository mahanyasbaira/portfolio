import Link from 'next/link';
import { profile } from '@/content/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="container-prose flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <div className="font-serif text-xl">{profile.name}</div>
          <p className="mt-1 text-sm text-[var(--fg-muted)]">
            {profile.tagline} · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href={profile.links.github} className="text-[var(--fg-muted)] transition hover:text-[var(--primary)]">GitHub</Link>
          <Link href={profile.links.linkedin} className="text-[var(--fg-muted)] transition hover:text-[var(--primary)]">LinkedIn</Link>
          <Link href={`mailto:${profile.email}`} className="text-[var(--fg-muted)] transition hover:text-[var(--primary)]">Email</Link>
          <Link href={profile.links.resume} className="text-[var(--fg-muted)] transition hover:text-[var(--primary)]">Resume</Link>
        </div>
        <div className="text-xs text-[var(--fg-muted)]">
          © {year} · Built with Next.js + Tailwind
        </div>
      </div>
    </footer>
  );
}
