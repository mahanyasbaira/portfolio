'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
};

export function MacbookScroll({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const rotateX = useTransform(scrollYProgress, [0, 0.35], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 1], [0.9, 1, 1.03]);
  const translateY = useTransform(scrollYProgress, [0, 0.4], [60, 0]);

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div
        style={{ rotateX, scale, y: translateY, transformPerspective: 1200 }}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="relative rounded-[18px] border border-[var(--border)] bg-ink-900/95 p-2 shadow-[0_40px_120px_-40px_rgba(11,17,32,0.4)] dark:bg-ink-950">
          <div className="flex items-center justify-between px-3 pb-2 pt-1">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-[11px] text-white/40">mahanyasbaira.dev</span>
            <span className="h-2.5 w-2.5" />
          </div>
          <div className="rounded-[10px] bg-[var(--bg)] p-4 text-[var(--fg)]">{children}</div>
        </div>
        <div className="mx-auto mt-1 h-3 w-[88%] rounded-b-2xl bg-ink-900/95 dark:bg-ink-950" />
        <div className="mx-auto h-2 w-[92%] rounded-b-[28px] bg-ink-900/60 dark:bg-ink-950/70" />
      </motion.div>
    </div>
  );
}
