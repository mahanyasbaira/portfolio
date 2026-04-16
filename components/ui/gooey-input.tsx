'use client';

import { useState, useId } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  className?: string;
};

export function GooeyInput({ placeholder = 'Search…', onSubmit, className }: Props) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const filterId = useId();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(value);
      }}
      className={cn('relative', className)}
      style={{ filter: `url(#${filterId})` }}
    >
      <svg width="0" height="0" aria-hidden>
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
      <label className="relative flex items-center">
        <Search className="pointer-events-none absolute left-4 h-4 w-4 text-[var(--fg-muted)]" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={cn(
            'h-12 w-full rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] pl-11 pr-4 text-sm outline-none transition-all',
            focused && 'w-full shadow-[0_0_0_4px_var(--glow)]',
          )}
        />
      </label>
    </form>
  );
}
