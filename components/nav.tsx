'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { cn } from '@/lib/utils';
import { profile } from '@/content/profile';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'wins', label: 'Wins' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'border-b border-[var(--border)] glass' : 'bg-transparent',
      )}
    >
      <nav className="container-prose flex h-16 items-center justify-between">
        <Link href="#top" className="font-serif text-lg tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-[var(--primary)]">.</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
            >
              {s.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-[var(--fg)]" />
              <span className="block h-0.5 w-4 bg-[var(--fg)]" />
              <span className="block h-0.5 w-4 bg-[var(--fg)]" />
            </div>
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-[var(--border)] bg-[var(--bg-elevated)] md:hidden">
          <div className="container-prose flex flex-col py-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
