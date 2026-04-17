import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mahanyasbaira.vercel.app'),
  title: {
    default: 'Mahanyas Baira · Student Systems Software Engineer',
    template: '%s · Mahanyas Baira',
  },
  description:
    'Mahanyas Baira. CS @ Colorado State, ML research, hackathon winner (Hack4Health, AgriVerse VR), and systems software engineer building AI-first tools.',
  keywords: [
    'Mahanyas Baira',
    'Software Engineer',
    'Machine Learning',
    'Colorado State University',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name: 'Mahanyas Baira', url: 'https://github.com/mahanyasbaira' }],
  creator: 'Mahanyas Baira',
  openGraph: {
    title: 'Mahanyas Baira · Student Systems Software Engineer',
    description:
      'CS @ Colorado State · ML research · Hackathon winner · Systems software engineer',
    url: 'https://mahanyasbaira.vercel.app',
    siteName: 'Mahanyas Baira',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahanyas Baira · Student Systems Software Engineer',
    description: 'CS @ Colorado State · ML research · Hackathon winner',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans`}>
        <ThemeProvider>
          <Nav />
          <main id="top">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
