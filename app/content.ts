type Project = {
  id: string;
  name: string;
  localName?: { text: string; lang: string };
  description: string;
  contribution: string;
  outcome: string;
  stack: readonly string[];
  repository: string;
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
  highlight: { project: 'Replimetr', scored: 65, total: 65, label: 'Customer conversations scored using a local LLM' },
  projects: [
    {
      id: 'replimetr',
      name: 'Replimetr',
      description: 'A quality review tool that scores customer chats and call transcripts against a shared set of criteria.',
      contribution: 'I owned the backend, built the batch-processing API, and validated model responses against the source conversation on the server.',
      outcome: 'The local model scored all 65 conversations in the challenge dataset.',
      stack: ['Python', 'FastAPI', 'Qwen3', 'Docker'],
      repository: 'https://github.com/8zellorr8/data_ch',
    },
    {
      id: 'fortelens',
      name: 'ForteLens',
      description: 'A team prototype that flags moments for human review in videos of bank cash operations.',
      contribution: 'I built seven API routes and a background queue, then fixed failures on longer videos.',
      outcome: 'Our team evaluated the model on 42 hand-labeled videos.',
      stack: ['Python', 'FastAPI', 'Qwen3-VL', 'FFmpeg'],
      repository: 'https://github.com/8zellorr8/datathon_ketnavr',
    },
    {
      id: 'nextbuy',
      name: 'NextBuy',
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
      description: 'A Kazakh-language learning platform for a college, with a digital gradebook, course materials, assignments, and scheduling.',
      contribution: 'I came up with the idea and developed the product concept.',
      outcome: 'Students can see their grades and attendance in one place.',
      stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
      repository: 'https://github.com/8zellorr8/smart_joba',
      inDevelopment: true,
    },
  ] as readonly Project[],
};

export type { Project };
