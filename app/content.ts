type ProjectSummary = {
  id: string;
  name: string;
  description: string;
  stack: readonly string[];
};

type Project = ProjectSummary & {
  localName?: { text: string; lang: string };
  context?: string;
  cover?: {
    theme: 'coverage' | 'video' | 'matchup' | 'classroom' | 'planning' | 'risk' | 'telemetry';
    tone?: 'light';
    value: string;
    label: string;
    screenshot?: { src: string; alt: string; width: number; height: number };
  };
  contribution: string;
  contributionLabel?: 'Team approach';
  outcome?: string;
  repository?: string;
  inDevelopment?: boolean;
  accessRestricted?: boolean;
};

export const portfolio = {
  name: 'Ulan Akhmet',
  role: 'Software Engineering Student · Backend & AI Projects',
  location: 'Astana, Kazakhstan',
  description: 'Software engineering student in Astana. Explore my work on backend systems, LLM evaluation, and product prototypes.',
  resume: '/ulan-akhmet-cv.pdf',
  education: 'I study Software Engineering at Astana IT University. During my QA internship on a product team, I tested a live web product, reported defects before release, and wrote the user guide.',
  interests: 'I enjoy building backends, integrating LLMs into real products, and evaluating the quality of their responses.',
  learning: 'I want to take AI features from prototype to production and learn how to evaluate LLM outputs on real-world data.',
  contacts: [
    { label: 'GitHub', href: 'https://github.com/8zellorr8' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ulan-akhmet-ab60a5395' },
    { label: 'Email', href: 'mailto:ulanahmet5@gmail.com' },
  ],
  build: {
    description: 'Built with Codex · Deployed on Vercel',
    links: [
      { label: 'Site source', href: 'https://github.com/8zellorr8/ulan-akhmet-portfolio' },
      { label: 'Example pull request', href: 'https://github.com/8zellorr8/ulan-akhmet-portfolio/pull/2' },
    ],
  },
  highlight: { project: 'Replimetr', scored: 65, total: 65, label: 'Customer conversations scored using a local LLM' },
  projects: [
    {
      id: 'replimetr',
      name: 'Replimetr',
      context: 'Freedom Broker Data Challenge ’26',
      cover: {
        theme: 'coverage',
        value: '91%',
        label: 'Backend line coverage',
        screenshot: {
          src: '/projects/replimetr-demo.png',
          alt: 'Replimetr demo with a scoring checklist, customer chat, and the AI assessment result.',
          width: 1898,
          height: 917,
        },
      },
      description: 'A quality review tool that scores customer chats and call transcripts against a shared set of criteria.',
      contribution: 'I owned the backend, built the batch-processing API, and validated model responses against the source conversation on the server.',
      outcome: 'The backend test suite includes 431 pytest tests.',
      stack: ['Python', 'FastAPI', 'Qwen3', 'Docker'],
      repository: 'https://github.com/8zellorr8/data_ch',
    },
    {
      id: 'fortelens',
      name: 'ForteLens',
      context: 'Datathon · Team project',
      cover: { theme: 'video', value: '42', label: 'Hand-labeled videos used to evaluate the model' },
      description: 'A team prototype that flags moments for human review in videos of bank cash operations.',
      contribution: 'I built seven API routes and a background queue, then fixed failures on longer videos.',
      stack: ['Python', 'FastAPI', 'Qwen3-VL', 'FFmpeg'],
      repository: 'https://github.com/8zellorr8/datathon_ketnavr',
    },
    {
      id: 'nextbuy',
      name: 'NextBuy',
      cover: {
        theme: 'matchup',
        value: '2 heroes',
        label: 'One item recommendation',
        screenshot: {
          src: '/projects/nextbuy-demo.png',
          alt: 'NextBuy recommends Radiance for Spectre against Phantom Assassin and shows the ranked match sample.',
          width: 1914,
          height: 914,
        },
      },
      description: 'A Dota 2 item advisor that uses ranked matches to suggest what to buy next for a hero matchup.',
      contribution: 'I built the OpenDota match ingestion and the logic that recommends the next item for a pair of heroes.',
      outcome: 'Each recommendation shows how many match records support it.',
      stack: ['React', 'Node.js', 'Go', 'MongoDB'],
      repository: 'https://github.com/8zellorr8/nextbuy',
      inDevelopment: true,
      accessRestricted: true,
    },
    {
      id: 'smartjoba',
      name: 'SmartJoba',
      localName: { text: 'Оқужол', lang: 'kk' },
      cover: { theme: 'classroom', value: 'Grades & attendance', label: 'Student view' },
      description: 'A Kazakh-language learning platform for a college, with a digital gradebook, course materials, assignments, and scheduling.',
      contribution: 'I came up with the idea and developed the product concept.',
      stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
      repository: 'https://github.com/8zellorr8/smart_joba',
      inDevelopment: true,
    },
  ] as readonly Project[],
  hackathonProjects: [
    {
      id: 'ketnavr',
      name: 'Ketnavr',
      context: 'Decentrathon 4 · Solo backend',
      cover: { theme: 'planning', tone: 'light', value: '6 months', label: 'Demand forecast horizon' },
      description: 'A supplier reorder engine that prioritizes purchases using stock coverage, lead times, and projected demand.',
      contribution: 'I built the backend and added a fallback from OpenAI to NVIDIA NIM so the chat could keep responding when one provider failed.',
      outcome: 'The engine sorted stock from two suppliers into critical, soon, and normal reorder priorities.',
      stack: ['FastAPI', 'pandas', 'NumPy', 'OpenAI API', 'NVIDIA NIM'],
      repository: 'https://github.com/BAITC-Hacks/hack-f8b85cde-ketnavr',
    },
    {
      id: 'procureai-kz',
      name: 'ProcureAI KZ',
      context: 'Decentrathon 5.0 · Finalist',
      cover: { theme: 'risk', tone: 'light', value: '250', label: 'Synthetic tenders used for evaluation' },
      description: 'A prototype that flags potentially risky public tenders for review.',
      contribution: 'Our team used six rules and Isolation Forest to flag anomalies, then generated plain-language explanations with GPT-4o.',
      contributionLabel: 'Team approach',
      stack: ['Python', 'FastAPI', 'scikit-learn', 'GPT-4o'],
    },
    {
      id: 'kentavr',
      name: 'Kentavr',
      context: 'hackNU · Team project',
      cover: { theme: 'telemetry', tone: 'light', value: '6', label: 'Live telemetry metrics' },
      description: 'A digital twin prototype for a locomotive.',
      contribution: 'Our team streamed locomotive telemetry over WebSockets.',
      contributionLabel: 'Team approach',
      outcome: 'An offline simulator and CSV export let us demonstrate the prototype without hardware.',
      stack: ['Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'React'],
    },
  ] as readonly Project[],
  courseProjects: [
    {
      id: 'campus-cafe',
      name: 'Campus Cafe',
      description: 'A Java project built by a team of three using five design patterns and UML modeling.',
      stack: ['Java 17', 'UML'],
    },
    {
      id: 'campus-cafe-web',
      name: 'Campus Cafe Web',
      description: 'A Campus Cafe web project built by a team of four.',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'travel-booking-system',
      name: 'Travel Booking System',
      description: 'A Java travel booking project with a PostgreSQL database and code organized around SOLID principles.',
      stack: ['Java', 'JDBC', 'PostgreSQL'],
    },
    {
      id: 'pet-adoption-center',
      name: 'Pet Adoption Center',
      description: 'A PostgreSQL project for pet adoption that used EXPLAIN ANALYZE to inspect query execution.',
      stack: ['PostgreSQL', 'SQL'],
    },
    {
      id: 'uniqr-bot',
      name: 'UniQR Bot',
      description: 'A bot built with aiogram as a course project.',
      stack: ['Python', 'aiogram'],
    },
  ] as readonly ProjectSummary[],
};

export type { Project };
