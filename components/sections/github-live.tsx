import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { profile } from '@/content/profile';

export function GithubLiveSection() {
  const u = profile.githubUsername;
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&hide_border=true&bg_color=00000000&title_color=1F77B4&text_color=4A5366&icon_color=C9A96E`;
  const langUrl = `https://github-readme-stats.vercel.app/api/top-langs?username=${u}&layout=compact&hide_border=true&bg_color=00000000&title_color=1F77B4&text_color=4A5366`;
  const chartUrl = `https://ghchart.rshah.org/1F77B4/${u}`;

  return (
    <section id="github" className="relative py-24">
      <div className="container-prose">
        <SectionHeading
          eyebrow="GitHub live"
          title="What I’ve been pushing."
          description="Stats pulled live from my public GitHub."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
            <Image src={statsUrl} alt={`${u} GitHub stats`} width={495} height={195} unoptimized className="h-auto w-full" />
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
            <Image src={langUrl} alt={`${u} top languages`} width={495} height={195} unoptimized className="h-auto w-full" />
          </div>
          <div className="md:col-span-2 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
            <Image src={chartUrl} alt={`${u} contribution chart`} width={828} height={128} unoptimized className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
