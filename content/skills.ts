export type Skill = {
  name: string;
  /** skillicons.dev slug, if available */
  icon?: string;
};

export type SkillGroup = {
  id: string;
  label: string;
  items: Skill[];
};

// skillicons.dev slugs: https://skillicons.dev/icons
// Niche tools (AD, SCCM, Tenable, etc.) fall back to text chips.
export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'Java', icon: 'java' },
      { name: 'C++', icon: 'cpp' },
      { name: 'C', icon: 'c' },
      { name: 'SQL', icon: 'mysql' },
      { name: 'PowerShell', icon: 'powershell' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    items: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Framer Motion', icon: 'framer' },
      { name: 'Drizzle ORM' },
      { name: 'shadcn/ui' },
    ],
  },
  {
    id: 'data',
    label: 'Data & Databases',
    items: [
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Power BI' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'GCP', icon: 'gcp' },
      { name: 'Azure', icon: 'azure' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub Actions', icon: 'githubactions' },
    ],
  },
  {
    id: 'ml',
    label: 'AI / ML',
    items: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'scikit-learn', icon: 'sklearn' },
      { name: 'Hugging Face' },
      { name: 'Gemini' },
      { name: 'OpenAI' },
    ],
  },
  {
    id: 'it',
    label: 'IT & Security',
    items: [
      { name: 'Active Directory' },
      { name: 'Group Policy' },
      { name: 'SCCM' },
      { name: 'MDT' },
      { name: 'Nessus' },
      { name: 'Tenable.sc' },
      { name: 'Splunk' },
      { name: 'Burp Suite' },
      { name: 'Wireshark' },
      { name: 'Entra ID' },
      { name: 'PDQ Deploy' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: [
      { name: 'Unity', icon: 'unity' },
      { name: 'Blender', icon: 'blender' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Meta Quest SDK' },
      { name: 'Linear' },
      { name: 'Jira' },
    ],
  },
];
