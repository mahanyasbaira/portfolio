import type { Config } from 'tailwindcss';
import svgToDataUri from 'mini-svg-data-uri';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          50: '#F5F2EB',
          100: '#EDE8DC',
          200: '#D9D2C2',
          900: '#0B1120',
          950: '#06080F',
        },
        primary: {
          DEFAULT: '#1F77B4',
          light: '#4FC3F7',
          dark: '#0E4E7F',
        },
        accent: {
          gold: '#C9A96E',
          sun: '#F4C430',
        },
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
        'beam-fall': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
        'beam-fall': 'beam-fall 6s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${value}'><path d='M0 .5H31.5V32'/></svg>`,
            )}")`,
          }),
          'bg-dot': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='none'><circle fill='${value}' cx='8' cy='8' r='1'/></svg>`,
            )}")`,
          }),
        },
        { values: (theme('colors') as unknown) as Record<string, string>, type: 'color' },
      );
    }),
  ],
};

export default config;
