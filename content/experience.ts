export type Experience = {
  id: string;
  role: string;
  org: string;
  orgUrl?: string;
  type: 'Part-time' | 'Internship' | 'Research' | 'Full-time';
  location: string;
  mode: 'On-site' | 'Remote' | 'Hybrid';
  start: string; // YYYY-MM
  end: string | 'Present';
  summary: string;
  bullets: string[];
  skills: string[];
  logoInitial: string;
};

export const experiences: Experience[] = [
  {
    id: 'csu-engineering',
    role: 'Systems Software Engineer',
    org: 'CSU Walter Scott, Jr. College of Engineering',
    orgUrl: 'https://engr.colostate.edu',
    type: 'Part-time',
    location: 'Fort Collins, CO',
    mode: 'On-site',
    start: '2026-01',
    end: 'Present',
    summary:
      'Infrastructure, automation, and security posture for the college IT environment.',
    bullets: [
      'Administered 1,200+ Active Directory accounts and 50+ Group Policies to harden security posture.',
      'Built Python audit scripts that raised account compliance by 30% across the college.',
      'Deployed 600+ Windows endpoints via SCCM imaging + MDT, cutting provisioning time by 40%.',
      'Automated 25+ recurring tasks with PowerShell and Python, freeing recurring sysadmin hours.',
    ],
    skills: ['Active Directory', 'Group Policy', 'Python', 'PowerShell', 'SCCM', 'MDT'],
    logoInitial: 'E',
  },
  {
    id: 'csu-it-support',
    role: 'IT Support Specialist',
    org: 'Colorado State University — Morgan Library',
    orgUrl: 'https://lib.colostate.edu',
    type: 'Part-time',
    location: 'Fort Collins, CO',
    mode: 'On-site',
    start: '2025-03',
    end: 'Present',
    summary:
      'Desktop support, imaging, and account management for a 24/7 research library environment.',
    bullets: [
      'Operated Active Directory, PDQ Deploy, and Microsoft Entra ID for daily sysadmin workflows.',
      'Supported user account lifecycle, software deployment, and imaging across shared workstations.',
      'Partnered with the library IT team to improve ticket turnaround and service reliability.',
    ],
    skills: ['Active Directory', 'PDQ Deploy', 'Entra ID', 'Imaging', 'Ticketing'],
    logoInitial: 'M',
  },
  {
    id: 'ai-leaf',
    role: 'Undergraduate Research Scholar — AI-LEAF',
    org: 'AI-LEAF Institute',
    orgUrl: 'https://ai-leaf.org',
    type: 'Research',
    location: 'Remote',
    mode: 'Remote',
    start: '2025-09',
    end: '2026-01',
    summary:
      'Year-long NSF-backed scholars program applying AI to agriculture and forestry.',
    bullets: [
      'Collaborated across universities to translate AI research into fact sheets and real-world apps.',
      'Strengthened remote sensing, data science, and science-communication toolkit.',
      'Mentored by graduate students and faculty driving AI-LEAF research threads.',
    ],
    skills: ['Remote Sensing', 'Data Science', 'Science Communication'],
    logoInitial: 'L',
  },
  {
    id: 'csu-cyber',
    role: 'Cyber Security Intern',
    org: 'CSU Division of Information Technology',
    orgUrl: 'https://it.colostate.edu',
    type: 'Internship',
    location: 'Fort Collins, CO',
    mode: 'Hybrid',
    start: '2025-05',
    end: '2025-12',
    summary:
      'Vuln management, incident response, and security awareness across the CSU system.',
    bullets: [
      'Executed vulnerability scans and triaged 200+ risks via Splunk, Nessus, Qualys, and Wireshark.',
      'Ran 350+ Nessus scans and co-led campus-wide phishing awareness; featured in The Rocky Mountain Collegian.',
      'Engineered Python and PowerShell automation for user management and detection pipelines.',
    ],
    skills: ['Splunk', 'Nessus', 'Qualys', 'Wireshark', 'Python', 'PowerShell', 'Entra ID'],
    logoInitial: 'C',
  },
  {
    id: 'harvard',
    role: 'AI/ML Research Intern',
    org: 'Harvard University',
    orgUrl: 'https://harvard.edu',
    type: 'Internship',
    location: 'Remote',
    mode: 'Remote',
    start: '2023-06',
    end: '2023-10',
    summary:
      'Neural-network research mentored by Dr. Aleksandar Jevremović.',
    bullets: [
      'Developed and optimized 3+ neural network models in Python, TensorFlow, and PyTorch.',
      'Leveraged HPC clusters to cut model training time by 25%.',
      'Authored a 15-page research paper on sentiment analysis and opinion mining methodologies.',
    ],
    skills: ['TensorFlow', 'PyTorch', 'Python', 'CNN', 'HPC', 'Sentiment Analysis'],
    logoInitial: 'H',
  },
  {
    id: 'drs-school',
    role: 'Design Tech & Robotics Captain · ICT Captain',
    org: 'DRS International School',
    orgUrl: 'https://www.drsinternational.com',
    type: 'Full-time',
    location: 'Hyderabad, India',
    mode: 'On-site',
    start: '2022-08',
    end: '2024-05',
    summary:
      'Led the school-wide robotics and ICT program — hands-on projects, workshops, and mentoring.',
    bullets: [
      'Captained the Design Technology & Robotics Club — ran hackathon-style builds and workshops.',
      'Directed ICT events end-to-end: stage tech, video production, and cross-grade tech support.',
      'Mentored juniors on programming, design, and robotics competitions.',
    ],
    skills: ['Leadership', 'Team Management', 'Graphic Design', 'Video Editing', 'Robotics'],
    logoInitial: 'D',
  },
];
