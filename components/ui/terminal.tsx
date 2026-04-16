'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  lines: string[];
  className?: string;
  typingSpeed?: number;
  startOnVisible?: boolean;
};

export function Terminal({ lines, className, typingSpeed = 18, startOnVisible = true }: Props) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [started, setStarted] = useState(!startOnVisible);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!startOnVisible || started) return;
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStarted(true);
            io.disconnect();
            return;
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [startOnVisible, started]);

  useEffect(() => {
    if (!started) return;
    if (lineIdx >= lines.length) return;
    const current = lines[lineIdx] ?? '';
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
      return () => clearTimeout(t);
    }
    const pause = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, 240);
    return () => clearTimeout(pause);
  }, [charIdx, lineIdx, lines, started, typingSpeed]);

  return (
    <div
      ref={hostRef}
      className={cn(
        'rounded-lg border border-[var(--border)] bg-ink-900 font-mono text-[13px] text-ink-50 shadow-sm dark:bg-ink-950',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-[11px] text-white/40">~/portfolio</span>
      </div>
      <div className="min-h-[10rem] space-y-1 p-4">
        {lines.slice(0, lineIdx).map((l, i) => (
          <div key={i} className={colorFor(l)}>{l}</div>
        ))}
        {lineIdx < lines.length ? (
          <div className={colorFor(lines[lineIdx] ?? '')}>
            {(lines[lineIdx] ?? '').slice(0, charIdx)}
            <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-[2px] bg-ink-50/90 animate-pulse" />
          </div>
        ) : (
          <div className="text-white/30">$ _</div>
        )}
      </div>
    </div>
  );
}

function colorFor(line: string) {
  if (line.startsWith('$')) return 'text-[#7aa2f7]';
  if (line.startsWith('→')) return 'text-white/70';
  if (line.startsWith('✓')) return 'text-[#9ece6a]';
  if (line.startsWith('✗') || line.startsWith('!')) return 'text-[#f7768e]';
  return 'text-white/80';
}
