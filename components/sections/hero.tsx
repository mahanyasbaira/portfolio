'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { profile } from '@/content/profile';
import { DottedGlow } from '@/components/ui/dotted-glow';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { Terminal } from '@/components/ui/terminal';

const introTerminal = [
  '$ whoami',
  '→ mahanyas baira',
  '$ cat stack.json | head -5',
  '→ next.js · typescript · pytorch · aws',
  '$ ./ship-it.sh',
  '✓ deployed to prod · 2026',
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 md:pt-36">
      <DottedGlow />
      <div className="container-prose relative grid gap-10 md:grid-cols-[minmax(0,1fr)_280px] md:gap-16">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--fg-muted)]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--primary)]" />
            Open to SWE / ML internships · Summer 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
          >
            {profile.name.split(' ')[0]}
            <span className="text-gradient"> {profile.name.split(' ').slice(1).join(' ')}</span>
            <span className="text-[var(--primary)]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-2xl text-lg text-[var(--fg-muted)] sm:text-xl"
          >
            {profile.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--fg-muted)]"
          >
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {profile.location}</span>
            <span className="opacity-40">·</span>
            <Link className="transition hover:text-[var(--primary)]" href={`mailto:${profile.email}`}>{profile.email}</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--primary-contrast)] shadow-sm transition hover:brightness-110"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={profile.links.resume}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Download className="h-4 w-4" /> Resume
            </Link>
            <Link
              href={profile.links.github}
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={profile.links.linkedin}
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-[240px] sm:w-[280px]"
        >
          <div
            className="absolute -inset-4 rounded-full opacity-80 blur-3xl"
            style={{ background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)' }}
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--bg-elevated)]">
            <Image
              src="/images/headshot.png"
              alt={`${profile.name} portrait`}
              fill
              sizes="(max-width: 768px) 240px, 280px"
              priority
              className="object-cover"
            />
          </div>
          <div className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
            B.S. CS · Colorado State
          </div>
        </motion.div>
      </div>

      <div className="container-prose mt-16">
        <MacbookScroll>
          <Terminal lines={introTerminal} />
        </MacbookScroll>
      </div>
    </section>
  );
}
