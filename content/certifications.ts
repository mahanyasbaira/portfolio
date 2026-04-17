export type Certification = {
  id: string;
  name: string;
  issuer: string;
  image: string;
  verifyUrl?: string;
  category: 'Cloud' | 'AI/ML' | 'DevOps' | 'Data' | 'Security' | 'ITSM' | 'Program';
};

// LinkedIn Learning + Forage URLs from user-provided certification links
// Map order follows the order URLs appeared in certifications links.rtf
const L = {
  // https://www.linkedin.com/learning/certificates/61eedb89...
  one: 'https://www.linkedin.com/learning/certificates/61eedb89b523780c72d3554e79e233e8bc213cf0413f808c28fc82142566b060?u=41911228',
  two: 'https://www.linkedin.com/learning/certificates/6ebd7d9189353c0c44d136b73b6f4603fcabeefdef76a3a7988f4db60e3bc2ca?u=41911228',
  three:
    'https://www.linkedin.com/learning/certificates/6ff8480df04dace3e0fb8785dd091bf5d8378e1971c7cc77ba4e904a9c55a16a',
  forage:
    'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_fn8FThxAPTdktF6Q3_1748894503384_completion_certificate.pdf',
  four: 'https://www.linkedin.com/learning/certificates/3999ec776a37eed20b5dc0a4ef519261f33c72253be6d1ecbb4b4aaa6b0b2866?u=41911228',
  five: 'https://www.linkedin.com/learning/certificates/c53d4bf64cf7ab44227c10071a15a574d1784d885ea02ba1cec9b5b4f575ab8a?u=41911228',
  six: 'https://www.linkedin.com/learning/certificates/a102ea11f9c6c2995a4e5b432db5a5be6e6019062f82b2cc4477e98a96ab6f38?u=41911228',
} as const;

export const certifications: Certification[] = [
  {
    id: 'aws-solutions-architecture',
    name: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Forage × AWS',
    image: '/images/certs/aws-solutions-architecture.jpg',
    verifyUrl: L.forage,
    category: 'Cloud',
  },
  {
    id: 'gcp-ai',
    name: 'Google Cloud Digital Cloud Leader: Innovating with GCP AI',
    issuer: 'Google Cloud / LinkedIn Learning',
    image: '/images/certs/gcp-ai.jpeg',
    verifyUrl: L.one,
    category: 'Cloud',
  },
  {
    id: 'azure-ai-essentials',
    name: 'Microsoft Azure AI Essentials Professional Certificate',
    issuer: 'Microsoft / LinkedIn Learning',
    image: '/images/certs/azure-ai-essentials.jpeg',
    verifyUrl: L.two,
    category: 'AI/ML',
  },
  {
    id: 'aws-educate-ml',
    name: 'AWS Educate: Machine Learning Foundations',
    issuer: 'AWS Educate',
    image: '/images/certs/aws-educate-ml.png',
    verifyUrl: L.three,
    category: 'AI/ML',
  },
  {
    id: 'aws-educate-genai',
    name: 'AWS Educate: Introduction to Generative AI',
    issuer: 'AWS Educate',
    image: '/images/certs/aws-educate-genai.png',
    verifyUrl: L.four,
    category: 'AI/ML',
  },
  {
    id: 'anaconda-python',
    name: 'Anaconda Python for Data Science Professional Certificate',
    issuer: 'Anaconda / LinkedIn Learning',
    image: '/images/certs/anaconda-python.jpeg',
    verifyUrl: L.five,
    category: 'Data',
  },
  {
    id: 'microsoft-powerbi',
    name: 'Complete Guide to Power BI for Data Analysts',
    issuer: 'Microsoft / LinkedIn Learning',
    image: '/images/certs/microsoft-powerbi.jpeg',
    verifyUrl: L.six,
    category: 'Data',
  },
  {
    id: 'pagerduty-devops',
    name: 'DevOps Professional Certificate',
    issuer: 'PagerDuty / LinkedIn Learning',
    image: '/images/certs/pagerduty-devops.jpeg',
    category: 'DevOps',
  },
  {
    id: 'lambdatest-automation',
    name: 'LambdaTest Test Automation Professional Certificate',
    issuer: 'LambdaTest',
    image: '/images/certs/lambdatest-automation.jpeg',
    category: 'DevOps',
  },
  {
    id: 'atlassian-itsm',
    name: 'Atlassian IT Service Management (ITSM) Professional Certificate',
    issuer: 'Atlassian',
    image: '/images/certs/atlassian-itsm.jpeg',
    category: 'ITSM',
  },
  {
    id: 'intl-internship',
    name: 'International Internship Program',
    issuer: 'International Internship Program',
    image: '/images/certs/intl-internship.jpg',
    category: 'Program',
  },
];
