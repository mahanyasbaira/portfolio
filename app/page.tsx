import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { WinsSection } from '@/components/sections/wins';
import { PressSection } from '@/components/sections/press';
import { SkillsSection } from '@/components/sections/skills';
import { CertificationsSection } from '@/components/sections/certifications';
import { VolunteeringSection } from '@/components/sections/volunteering';
import { GithubLiveSection } from '@/components/sections/github-live';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <WinsSection />
      <PressSection />
      <SkillsSection />
      <CertificationsSection />
      <VolunteeringSection />
      <GithubLiveSection />
      <ContactSection />
    </>
  );
}
