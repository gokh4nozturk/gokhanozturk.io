export const personalInfo = {
  name: 'Gökhan Öztürk',
  title: 'Frontend Developer',
  location: 'İstanbul, Turkey',
  github: 'https://github.com/gokh4nozturk?ref=gokhanozturk.io',
  linkedin: 'https://linkedin.com/in/gokhannozturk?ref=gokhanozturk.io',
  githubDisplay: 'github.com/gokh4nozturk',
  linkedinDisplay: 'linkedin.com/in/gokhannozturk',
};

export const summary = {
  text: 'Frontend Developer with 4+ years of experience specializing in Vue.js and React ecosystems. Focused on building scalable web applications and contributing to open-source projects. Strong expertise in modern JavaScript frameworks and performance optimization.',
};

export const experience = [
  {
    title: 'Frontend Developer',
    company: 'Teknasyon Tech',
    period: '05/2021 – Present',
    location: 'İstanbul',
    achievements: [
      'Worked in the Growth Squad, alongside five web engineers, a PM, and a designer.',
      'Redeveloped and maintained Rockads, transitioning it to TypeScript and Vue 3 to enhance performance, scalability, and maintainability.',
      'Built and contributed to several components, including writing tests and setting up CI pipelines.',
      'Developed and maintained Rocket UI, a modern UI component library.',
    ],
    techStack: 'Vue 3, TypeScript, Nuxt, Tailwind CSS, Storybook, GitHub Actions',
    rocketUiLink: 'https://github.com/Teknasyon/rocket-ui?ref=gokhanozturk.io',
  },
  {
    title: 'Frontend Developer',
    company: 'Phanka Group',
    period: '12/2020 – 05/2021',
    location: 'İstanbul',
    achievements: [
      'Developed responsive web applications using Vue.js and Nuxt.js',
      'Built reusable component library improving development efficiency',
    ],
    techStack: 'Vue 2, Vuex, SASS, Bootstrap',
  },
];

export const projects = [
  {
    title: 'Rocket UI',
    role: 'Core Maintainer',
    url: 'https://github.com/Teknasyon/rocket-ui?ref=gokhanozturk.io',
    displayUrl: 'github.com/Teknasyon/rocket-ui',
    achievements: [
      'Led development of a modern Vue 3 component library with 39 stars',
      'Built 30+ reusable components using TypeScript and Tailwind CSS',
      'Implemented comprehensive documentation with Storybook and automated testing',
      'Established CI/CD pipeline with GitHub Actions for automated releases',
      'Rocket UI is actively used across all Rockads projects to ensure consistent UI and improve development efficiency',
    ],
    techStack: 'Vue 3, TypeScript, Tailwind CSS, Storybook, Vitest, GitHub Actions',
    rockadsLink: 'https://rockads.com?ref=gokhanozturk.io',
  },
  {
    title: 'Linguolink',
    role: 'Creator & Maintainer',
    url: 'https://linguol.ink?ref=gokhanozturk.io',
    displayUrl: 'linguol.ink',
    achievements: [
      'Built a developer-first translation management SaaS with self-service onboarding and usage-based pricing',
      'Designed and implemented a scalable, automation-friendly backend architecture',
      'Launched product with a custom landing page and integrated early user feedback',
    ],
    techStack:
      'TypeScript, Next.js, Neon (PostgreSQL), Clerk, AWS S3, Drizzle ORM, GitHub Actions, Tailwind CSS, Shadcn UI',
  },
  {
    title: 'Chop-URL',
    role: 'Creator & Maintainer',
    url: 'https://github.com/gokh4nozturk/chop-url?ref=gokhanozturk.io',
    displayUrl: 'github.com/gokh4nozturk/chop-url',
    achievements: [
      'Developed a modern URL shortening service with serverless architecture',
      'Implemented scalable backend using Cloudflare Workers and D1 database',
      'Built responsive frontend with Next.js and deployed on Vercel',
      'Added features like analytics tracking, rate limiting, and API documentation',
    ],
    techStack:
      'TypeScript, Next.js, Cloudflare Workers, Cloudflare D1, Drizzle ORM, Cloudflare R2, Hono, GitHub Actions, Tailwind CSS, Shadcn UI',
  },
];

export const openSourceContributions = [
  {
    title: 'Vue Circular Gauge',
    role: 'Creator & Maintainer',
    url: 'https://gauge.gokhanozturk.io?ref=gokhanozturk.io',
    displayUrl: 'gauge.gokhanozturk.io',
    achievements: [
      'Developed a simple and customizable circular gauge component for Vue 3',
      'Created comprehensive documentation and interactive playground',
      'Implemented responsive design with mobile-first approach',
      'Optimized for performance with TypeScript and modern UI patterns',
    ],
    techStack: 'Vue 3, TypeScript, Tailwind CSS, Vite, Vitest, GitHub Actions',
  },
  {
    title: 'Magic UI',
    role: 'Contributor',
    url: 'https://github.com/magicuidesign/magicui?ref=gokhanozturk.io',
    displayUrl: 'github.com/magicuidesign/magicui',
    achievements: [
      'Contributed to a popular UI library (17k+ stars) for Design Engineers',
      'Developed reusable animated components and effects',
      'Collaborated on documentation and accessibility improvements',
    ],
    techStack: 'React, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI',
  },
  {
    title: 'Animated Icons',
    role: 'Contributor',
    url: 'https://github.com/pqoqubbw/icons?ref=gokhanozturk.io',
    displayUrl: 'github.com/pqoqubbw/icons',
    achievements: [
      'Contributed to a widely-used animated icons library (4k+ stars)',
      'Enhanced icon animations and optimized SVG performance',
      'Improved documentation and component examples',
    ],
    techStack: 'TypeScript, SVG Animations, Next.js, Framer Motion, Tailwind CSS, Shadcn UI',
  },
];

export const education = [
  {
    degree: 'Computer Engineering',
    institution: 'Erciyes University',
    period: '2018 – Paused',
  },
  {
    degree: 'Computer Programming',
    institution: 'Nevşehir University',
    period: '2015 – 2017',
  },
];

export const technicalSkills = [
  {
    category: 'Core',
    skills: 'TypeScript, JavaScript (ES6+), HTML5, CSS3',
  },
  {
    category: 'Frontend',
    skills:
      'Vue.js (2/3), React.js, Nuxt.js, Next.js, Vuex, Vue Router, Tailwind CSS, Shadcn UI, SASS, Bootstrap, Framer Motion, SVG Animations',
  },
  {
    category: 'Development',
    skills: 'Git, Storybook, ESLint, Prettier, Biome, Vitest, Jest, Vue Testing Library, Figma',
  },
  {
    category: 'Infrastructure',
    skills:
      'GitHub Actions, Vercel, Cloudflare (Workers/D1/R2), Node.js, AWS S3, Clerk, REST APIs, Hono, Drizzle ORM, Postgres, Neon, Supabase',
  },
];

export const lastUpdated = 'May 2025';
