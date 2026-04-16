export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

// Ordered per CLAUDE.md SWE resume guidance: Languages → Frameworks → Data/DB → Cloud → ML → IT/Security → Tools
export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C', 'SQL', 'PowerShell'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    items: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Drizzle ORM', 'Framer Motion', 'shadcn/ui'],
  },
  {
    id: 'data',
    label: 'Data & Databases',
    items: ['PostgreSQL', 'Firebase', 'Pandas', 'NumPy', 'Power BI'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Azure', 'Terraform', 'Vercel', 'Docker', 'Git', 'GitHub Actions'],
  },
  {
    id: 'ml',
    label: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'Gemini', 'OpenAI'],
  },
  {
    id: 'it',
    label: 'IT & Security',
    items: ['Active Directory', 'Group Policy', 'SCCM', 'MDT', 'Nessus', 'Tenable.sc', 'Splunk', 'Burp Suite', 'Wireshark', 'Entra ID', 'PDQ Deploy'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Unity', 'Blender', 'Meta Quest SDK', 'Figma', 'Linear', 'Jira'],
  },
];
