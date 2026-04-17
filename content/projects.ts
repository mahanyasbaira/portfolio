export type ArchNode = {
  id: string;
  label: string;
  accent?: boolean;
};

export type ArchLayer = {
  label: string;
  nodes: ArchNode[];
};

export type Architecture = {
  title: string;
  layers: ArchLayer[];
};

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
  architecture: Architecture;
};

export const projects: Project[] = [
  {
    id: 'neurosync',
    name: 'NeuroSync',
    tagline: 'Multimodal brain-encoding model inspired by Meta AI\u2019s TRIBE v2.',
    description:
      'Research implementation that fuses video, audio, and text embeddings to predict fMRI responses across 1,000+ cortical parcels. Mirrors the TRIBE v2 architecture with a shared cross-modal transformer and per-subject adapters.',
    stack: ['PyTorch', 'Transformers', 'CLIP', 'Whisper', 'fMRI', 'Python'],
    repo: 'https://github.com/mahanyasbaira/NeuroSync-Multimodal-Brain-Encoding-Model-TRIBE-v2-Inspired',
    highlight: 'Cross-modal brain encoder matching TRIBE v2 on held-out subjects.',
    year: 2026,
    architecture: {
      title: 'Multimodal encoding pipeline',
      layers: [
        {
          label: 'Inputs',
          nodes: [
            { id: 'video', label: 'Video frames' },
            { id: 'audio', label: 'Audio waveform' },
            { id: 'text', label: 'Transcripts' },
          ],
        },
        {
          label: 'Modality encoders',
          nodes: [
            { id: 'vit', label: 'ViT / CLIP' },
            { id: 'whisper', label: 'Whisper' },
            { id: 'llm', label: 'Text LLM' },
          ],
        },
        {
          label: 'Fusion',
          nodes: [{ id: 'fusion', label: 'Cross-modal transformer', accent: true }],
        },
        {
          label: 'Output',
          nodes: [{ id: 'fmri', label: 'fMRI parcel predictions' }],
        },
      ],
    },
  },
  {
    id: 'hybridherd',
    name: 'HybridHerd',
    tagline: 'ML pipeline for precision-livestock classification.',
    description:
      'Research project under AI-LEAF: multi-modal model fusing vision and sensor data to classify cattle behavior. Improved classification accuracy +20% over the baseline across 11,000+ sensor events.',
    stack: ['PyTorch', 'scikit-learn', 'Hugging Face', 'Python', 'HPC'],
    repo: 'https://github.com/mahanyasbaira',
    highlight: '+20% classification lift across 11,000+ events.',
    year: 2025,
    architecture: {
      title: 'Fusion classifier',
      layers: [
        {
          label: 'Sensors',
          nodes: [
            { id: 'cam', label: 'Camera feed' },
            { id: 'imu', label: 'IMU + GPS' },
          ],
        },
        {
          label: 'Feature extractors',
          nodes: [
            { id: 'cnn', label: 'ResNet features' },
            { id: 'tsnet', label: 'Time-series net' },
          ],
        },
        {
          label: 'Fusion head',
          nodes: [{ id: 'fuse', label: 'Late-fusion MLP', accent: true }],
        },
        {
          label: 'Output',
          nodes: [{ id: 'class', label: 'Behavior class' }],
        },
      ],
    },
  },
  {
    id: 'agriverse-vr',
    name: 'AgriVerse VR',
    tagline: 'Immersive VR training sim for agricultural workflows. 1st Place.',
    description:
      'Won 1st Place at the CSU Engineering Innovation Challenge. Unity and Meta Quest experience that teaches precision-agriculture workflows through interactive VR scenarios built on real farm data.',
    stack: ['Unity', 'C#', 'Meta Quest', 'Blender', 'AI-LEAF Data'],
    highlight: '1st Place at the CSU Engineering Innovation Challenge.',
    year: 2025,
    architecture: {
      title: 'VR runtime',
      layers: [
        {
          label: 'Data',
          nodes: [
            { id: 'farm', label: 'Farm GIS' },
            { id: 'weather', label: 'Weather API' },
          ],
        },
        {
          label: 'Scene authoring',
          nodes: [
            { id: 'blender', label: 'Blender assets' },
            { id: 'unity', label: 'Unity scene graph' },
          ],
        },
        {
          label: 'Simulation',
          nodes: [{ id: 'sim', label: 'Precision-ag scenarios', accent: true }],
        },
        {
          label: 'Headset',
          nodes: [{ id: 'quest', label: 'Meta Quest 3' }],
        },
      ],
    },
  },
  {
    id: 'ai-form-builder',
    name: 'AI Form Builder',
    tagline: 'Describe a form in English, get a production-ready component.',
    description:
      'Typescript-first form generator. A prompt describes intent, the LLM produces schema, Zod validation, and accessible React components with shadcn/ui, ready to drop into any Next.js app.',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'Zod', 'shadcn/ui'],
    repo: 'https://github.com/mahanyasbaira',
    highlight: 'English prompt to typed, validated form in under 10 seconds.',
    year: 2025,
    architecture: {
      title: 'Prompt to component pipeline',
      layers: [
        {
          label: 'Input',
          nodes: [{ id: 'prompt', label: 'Natural-language prompt' }],
        },
        {
          label: 'LLM planner',
          nodes: [{ id: 'llm', label: 'GPT schema planner', accent: true }],
        },
        {
          label: 'Code gen',
          nodes: [
            { id: 'zod', label: 'Zod schema' },
            { id: 'tsx', label: 'React + shadcn/ui' },
          ],
        },
        {
          label: 'Output',
          nodes: [{ id: 'file', label: 'Typed .tsx file' }],
        },
      ],
    },
  },
  {
    id: 'employee-mgmt',
    name: 'Employee Management App',
    tagline: 'Full-stack onboarding and HR workflows with role-based access.',
    description:
      'Internal tool for managing employee records, role-based permissions (RBAC), and onboarding checklists. Drizzle ORM schema with audit trails and typed server actions.',
    stack: ['Next.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'RBAC'],
    repo: 'https://github.com/mahanyasbaira',
    highlight: 'Typed server actions, full audit trail, RBAC-first.',
    year: 2025,
    architecture: {
      title: 'RBAC data flow',
      layers: [
        {
          label: 'Client',
          nodes: [{ id: 'ui', label: 'Next.js UI' }],
        },
        {
          label: 'Server actions',
          nodes: [{ id: 'action', label: 'Typed server action', accent: true }],
        },
        {
          label: 'Policy',
          nodes: [
            { id: 'rbac', label: 'RBAC guard' },
            { id: 'audit', label: 'Audit log' },
          ],
        },
        {
          label: 'Data',
          nodes: [{ id: 'db', label: 'Postgres + Drizzle' }],
        },
      ],
    },
  },
];
