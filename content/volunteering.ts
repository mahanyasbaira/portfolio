export type Volunteering = {
  id: string;
  role: string;
  org: string;
  orgUrl?: string;
  start: string;
  end: string;
  cause: string;
  bullets: string[];
};

export const volunteering: Volunteering[] = [
  {
    id: 'cs-peer-mentor',
    role: 'Computer Science Peer Mentor',
    org: 'CSU College of Natural Sciences',
    orgUrl: 'https://natsci.colostate.edu',
    start: '2025-08',
    end: 'Present',
    cause: 'Education',
    bullets: [
      'Mentor first- and second-year CS students on coursework, study habits, and career pathways.',
      'Run weekly office hours alongside faculty and share tools, internship tips, and campus resources.',
    ],
  },
  {
    id: 'interact-rotary',
    role: 'Director of IT, Interact Club',
    org: 'Rotary International · Interact',
    orgUrl: 'https://www.rotary.org/en/get-involved/interact-clubs',
    start: '2022-10',
    end: '2023-06',
    cause: 'Social Services',
    bullets: [
      'Ran the tech stack for a Rotary-sponsored service club: AV, registrations, and comms.',
      'Led Cyber Safety workshops for kids under 10, teaching how to stay safe online with parents in the room.',
      'Supported Book Donation Drive, Paper Collection, and adult literacy teaching programs.',
    ],
  },
];

export type Press = {
  id: string;
  title: string;
  publication: string;
  date: string;
  url: string;
  excerpt: string;
  cover?: string;
};

export const press: Press[] = [
  {
    id: 'collegian-phishing',
    title: 'CSU-system IT dept., staff, interns guard against student scams',
    publication: 'The Rocky Mountain Collegian',
    date: '2025-09',
    url: 'https://collegian.com/articles/featured/2025/09/category-news-csu-system-it-dept-staff-interns-guard-against-student-scams/',
    excerpt:
      'Claire VanDeventer\'s feature on the CSU cybersecurity team\'s outreach to students on phishing and scams. I co-led campus-wide awareness as a CSU cyber intern.',
  },
];
