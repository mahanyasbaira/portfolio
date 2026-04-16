'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';

export function BackgroundBeams({ className, count = 18 }: { className?: string; count?: number }) {
  const beams = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: (Math.random() * 6).toFixed(2),
        duration: (4 + Math.random() * 5).toFixed(2),
        width: 0.5 + Math.random() * 1.2,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count],
  );

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {beams.map((b, i) => (
        <span
          key={i}
          className="absolute top-0 block animate-beam-fall rounded-full"
          style={{
            left: `${b.left}%`,
            width: `${b.width}px`,
            height: '18vh',
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
            background: 'linear-gradient(to bottom, transparent, var(--primary), transparent)',
          }}
        />
      ))}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
      />
    </div>
  );
}
