export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  highlight?: string;
  year: number;
  terminalLines: string[];
};

export const projects: Project[] = [
  {
    id: 'oars',
    name: 'OARS — Online Academic Research System',
    tagline: 'Full-stack research management platform with LLM-powered search.',
    description:
      'Production-grade web app for managing research artefacts across a lab. Semantic search over papers, automatic citation extraction, and Gemini-powered summaries surface the right source in seconds instead of hours.',
    stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Gemini 2.5', 'Tailwind'],
    repo: 'https://github.com/mahanyasbaira',
    highlight: '1,000+ research artefacts indexed with sub-second semantic search.',
    year: 2026,
    terminalLines: [
      '$ pnpm run db:push && pnpm run dev',
      '→ postgres: 42 tables, 1,247 rows synced',
      '→ gemini: embedding batch ok (cosine sim 0.91)',
      '→ next: ready on http://localhost:3000',
      '✓ semantic search over 1,000+ papers, <200ms p95',
    ],
  },
  {
    id: 'hybridherd',
    name: 'HybridHerd',
    tagline: 'ML pipeline for precision-livestock classification.',
    description:
      'Research project under AI-LEAF: multi-modal model fusing vision + sensor data to classify cattle behavior. Improved classification accuracy +20% over the baseline across 11,000+ messages / sensor events.',
    stack: ['PyTorch', 'scikit-learn', 'Hugging Face', 'Python', 'HPC'],
    repo: 'https://github.com/mahanyasbaira',
    highlight: '+20% classification lift across 11,000+ events.',
    year: 2025,
    terminalLines: [
      '$ python train.py --model fusion --epochs 25',
      '→ loading 11,247 labeled events…',
      '→ epoch 25/25  loss=0.082  acc=0.914',
      '✓ +20.3% over resnet50 baseline',
    ],
  },
  {
    id: 'agriverse-vr',
    name: 'AgriVerse VR',
    tagline: 'Immersive VR training sim for agricultural workflows. 🏆 1st Place.',
    description:
      'Won 1st Place at the CSU Engineering Innovation Challenge. Unity + Meta Quest experience that teaches precision-agriculture workflows through interactive VR scenarios built on real farm data.',
    stack: ['Unity', 'C#', 'Meta Quest', 'Blender', 'AI-LEAF Data'],
    highlight: '🏆 1st Place — CSU Engineering Innovation Challenge.',
    year: 2025,
    terminalLines: [
      '$ unity build --platform quest',
      '→ scene: pivot-irrigation-sim',
      '→ frame target: 72fps on Quest 3',
      '✓ judged 1st place of 40+ teams',
    ],
  },
  {
    id: 'ai-form-builder',
    name: 'AI Form Builder',
    tagline: 'Describe a form in English, get a production-ready component.',
    description:
      'Typescript-first form generator. Prompt describes intent, LLM produces schema + Zod validation + accessible React components with shadcn/ui. Ships straight into any Next.js app.',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'Zod', 'shadcn/ui'],
    repo: 'https://github.com/mahanyasbaira',
    highlight: 'From English prompt to typed, validated form in under 10s.',
    year: 2025,
    terminalLines: [
      '$ npx ai-form "email + password + MFA toggle"',
      '→ parsing intent…',
      '→ generating zod schema + form fields',
      '✓ wrote components/auth-form.tsx (92 lines)',
    ],
  },
  {
    id: 'employee-mgmt',
    name: 'Employee Management App',
    tagline: 'Full-stack onboarding + HR workflows with role-based access.',
    description:
      'Internal tool for managing employee records, role-based permissions (RBAC), and onboarding checklists. Drizzle ORM schema with audit trails and typed server actions.',
    stack: ['Next.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'RBAC'],
    repo: 'https://github.com/mahanyasbaira',
    highlight: 'Typed server actions, full audit trail, RBAC-first.',
    year: 2025,
    terminalLines: [
      '$ pnpm run dev',
      '→ drizzle: 14 tables migrated',
      '→ auth: RBAC policies loaded',
      '✓ ready on http://localhost:3000',
    ],
  },
];
