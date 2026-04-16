'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]',
        className,
      )}
    >
      <Sun className={cn('h-4 w-4 transition-all', isDark ? 'scale-0 -rotate-90' : 'scale-100 rotate-0')} />
      <Moon className={cn('absolute h-4 w-4 transition-all', isDark ? 'scale-100 rotate-0' : 'scale-0 rotate-90')} />
    </button>
  );
}
