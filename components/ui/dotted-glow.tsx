import { cn } from '@/lib/utils';

export function DottedGlow({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      <div className="dotted-backdrop absolute inset-0 mask-radial-fade" />
      <div
        className="absolute left-1/2 top-1/3 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)' }}
      />
    </div>
  );
}
