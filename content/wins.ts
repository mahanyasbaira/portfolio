export type Win = {
  id: string;
  title: string;
  place: string;
  event: string;
  year: number;
  location: string;
  description: string;
  images: { src: string; alt: string }[];
  stack?: string[];
};

export const wins: Win[] = [
  {
    id: 'hack4health',
    title: 'Hack4Health 2026 — Campus Safety Track',
    place: '🏆 1st Place',
    event: 'Hack4Health 2026',
    year: 2026,
    location: 'Colorado State University',
    description:
      'Built a real-time phishing + scam detector for college students in 24 hours. Pitched on-stage to a judging panel; the work carried through to a Rocky Mountain Collegian feature on CSU-system cyber outreach.',
    images: [
      { src: '/images/hack4health-podium.png', alt: 'Mahanyas presenting at the Hack4Health podium with the Colorado flag.' },
      { src: '/images/hack4health-team.png', alt: 'Team working together at Hack4Health.' },
    ],
    stack: ['Python', 'React', 'ML Classifier'],
  },
  {
    id: 'agriverse-vr',
    title: 'AgriVerse VR — Engineering Innovation Challenge',
    place: '🏆 1st Place',
    event: 'CSU Engineering Innovation Challenge',
    year: 2025,
    location: 'Colorado State University',
    description:
      'Led the build of an immersive VR training experience for precision agriculture on Meta Quest. Judged first out of 40+ teams across the College of Engineering.',
    images: [
      { src: '/images/vr-check.png', alt: 'Team holding the oversized 1st-place check for AgriVerse VR.' },
      { src: '/images/vr-demo.png', alt: 'Demoing AgriVerse VR on Meta Quest.' },
    ],
    stack: ['Unity', 'C#', 'Meta Quest', 'Blender'],
  },
];
