'use client';

import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number; // 0..20
};

export function Card3D({ children, className, intensity = 10 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--rx', `${(-y * intensity).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * intensity).toFixed(2)}deg`);
    el.style.setProperty('--mx', `${(x * 100 + 50).toFixed(1)}%`);
    el.style.setProperty('--my', `${(y * 100 + 50).toFixed(1)}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: '1000px' }}
      className={cn('group relative', className)}
    >
      <div
        className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 transition-transform duration-200 ease-out"
        style={{ transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))', transformStyle: 'preserve-3d' }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), var(--glow), transparent 60%)',
          }}
        />
        <div className="relative" style={{ transform: 'translateZ(40px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
