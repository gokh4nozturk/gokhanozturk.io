import AnimatedLink from '@components/AnimatedLink';
import { FeedbackRating } from '@components/hextaui/feedback';
import { Print } from './print';
import { getHeadingVariant, getLinkVariant, resumeVariants } from './variants';
export default function ResumePage() {
  return (
    <div className={resumeVariants.container}>
      <Article />
      <FeedbackRating className="-translate-x-1/2 fixed bottom-[5.5rem] left-1/2 backdrop-blur-sm sm:bottom-32 print:hidden" />
    </div>
  );
}

function Article() {
  return (
    <article className={resumeVariants.article}>
      <h1 className={getHeadingVariant(1)}>Gökhan Öztürk</h1>

      <div className={resumeVariants.text.meta}>
        Frontend Developer
        <br />
        İstanbul, Turkey ·{' '}
        <a
          href="https://github.com/gokh4nozturk?ref=gokhanozturk.io"
          target="_blank"
          rel="noopener noreferrer"
          className={resumeVariants.text.link}
        >
          github.com/gokh4nozturk
        </a>{' '}
        ·{' '}
        <a
          href="https://linkedin.com/in/gokhannozturk?ref=gokhanozturk.io"
          target="_blank"
          rel="noopener noreferrer"
          className={resumeVariants.text.link}
        >
          linkedin.com/in/gokhannozturk
        </a>
      </div>

      <h2 className={getHeadingVariant(2)}>Summary</h2>
      <p className={resumeVariants.text.paragraph}>
        Frontend Developer with 4+ years of experience specializing in Vue.js and React ecosystems.
        Focused on building scalable web applications and contributing to open-source projects.
        Strong expertise in modern JavaScript frameworks and performance optimization.
      </p>

      <h2 className={getHeadingVariant(2)}>Professional Experience</h2>

      <h3 className={getHeadingVariant(3)}>Frontend Developer | Teknasyon Tech</h3>
      <p className={resumeVariants.text.date}>05/2021 – Present | İstanbul</p>
      <ul className={resumeVariants.lists.unordered}>
        <li>Worked in the Growth Squad, alongside five web engineers, a PM, and a designer.</li>
        <li>
          Redeveloped and maintained Rockads, transitioning it to TypeScript and Vue 3 to enhance
          performance, scalability, and maintainability.
        </li>
        <li>
          Built and contributed to several components, including writing tests and setting up CI
          pipelines.
        </li>
        <li>
          Developed and maintained{' '}
          <AnimatedLink
            href="https://github.com/Teknasyon/rocket-ui?ref=gokhanozturk.io"
            className="no-underline"
          >
            Rocket UI
          </AnimatedLink>
          , a modern UI component library.
        </li>
        <li>
          <strong>Tech stack:</strong> Vue 3, TypeScript, Nuxt, Tailwind CSS, Storybook, GitHub
          Actions
        </li>
      </ul>

      <h3 className={getHeadingVariant(3)}>Frontend Developer | Phanka Group</h3>
      <p className={resumeVariants.text.date}>12/2020 – 05/2021 | İstanbul</p>
      <ul className={resumeVariants.lists.unordered}>
        <li>Developed responsive web applications using Vue.js and Nuxt.js</li>
        <li>Built reusable component library improving development efficiency</li>
        <li>
          <strong>Tech stack:</strong> Vue 2, Vuex, SASS, Bootstrap, Quasar
        </li>
      </ul>

      <h2 className={getHeadingVariant(2)}>Open Source & Projects</h2>

      <h3 className={getHeadingVariant(3)}>Rocket UI | Core Maintainer</h3>
      <a
        href="https://github.com/Teknasyon/rocket-ui?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className={getLinkVariant(true)}
      >
        <i>github.com/Teknasyon/rocket-ui</i>
      </a>
      <ul className={resumeVariants.lists.unordered}>
        <li>Led development of a modern Vue 3 component library with 38+ stars and 3 forks</li>
        <li>Built 30+ reusable components using TypeScript and Tailwind CSS</li>
        <li>Implemented comprehensive documentation with Storybook and automated testing</li>
        <li>Established CI/CD pipeline with GitHub Actions for automated releases</li>
        <li>
          <strong>
            Rocket UI is actively used across all{' '}
            <AnimatedLink
              href="https://rockads.com?ref=gokhanozturk.io"
              color="rockads"
              name="Rockads"
            >
              Rockads
            </AnimatedLink>{' '}
            projects to ensure consistent UI and improve development efficiency
          </strong>
        </li>
        <li>
          <strong>Tech stack:</strong> Vue 3, TypeScript, Tailwind CSS, Storybook, Vitest, GitHub
          Actions
        </li>
      </ul>

      <h3 className={getHeadingVariant(3)}>Linguolink | Creator & Maintainer</h3>
      <a
        href="https://linguol.ink?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className={getLinkVariant(true)}
      >
        <i>linguol.ink</i>
      </a>
      <ul className={resumeVariants.lists.unordered}>
        <li>
          Built a developer-first translation management SaaS with self-service onboarding and
          usage-based pricing
        </li>
        <li>Designed and implemented a scalable, automation-friendly backend architecture</li>
        <li>Launched product with a custom landing page and integrated early user feedback</li>
        <li>
          <strong>Tech stack:</strong> TypeScript, Next.js, Neon (PostgreSQL), Clerk, AWS S3,
          Drizzle ORM, GitHub Actions, Tailwind CSS, Shadcn UI
        </li>
      </ul>

      <h3 className={getHeadingVariant(3)}>Chop-URL | Creator & Maintainer</h3>
      <a
        href="https://github.com/gokh4nozturk/chop-url?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className={getLinkVariant(true)}
      >
        <i>github.com/gokh4nozturk/chop-url</i>
      </a>
      <ul className={resumeVariants.lists.unordered}>
        <li>Developed a modern URL shortening service with serverless architecture</li>
        <li>Implemented scalable backend using Cloudflare Workers and D1 database</li>
        <li>Built responsive frontend with Next.js and deployed on Vercel</li>
        <li>Added features like analytics tracking, rate limiting, and API documentation</li>
        <li>
          <strong>Tech stack:</strong> TypeScript, Next.js, Cloudflare Workers, Cloudflare D1,
          Drizzle ORM, Cloudflare R2, Hono, GitHub Actions, Tailwind CSS, Shadcn UI
        </li>
      </ul>

      <h3 className={getHeadingVariant(3, true)}>Open Source Contributions</h3>

      <h4 className={getHeadingVariant(4)}>Vue Circular Gauge | Creator & Maintainer</h4>
      <a
        href="https://gauge.gokhanozturk.io?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className={getLinkVariant(true)}
      >
        <i>gauge.gokhanozturk.io</i>
      </a>
      <ul className={resumeVariants.lists.unordered}>
        <li>Developed a simple and customizable circular gauge component for Vue 3</li>
        <li>Created comprehensive documentation and interactive playground</li>
        <li>Implemented responsive design with mobile-first approach</li>
        <li>Optimized for performance with TypeScript and modern UI patterns</li>
        <li>
          <strong>Tech stack:</strong> Vue 3, TypeScript, Tailwind CSS, Vite, Vitest, GitHub Actions
        </li>
      </ul>

      <h4 className={getHeadingVariant(4)}>Magic UI | Contributor</h4>
      <a
        href="https://github.com/magicuidesign/magicui?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className={getLinkVariant(true)}
      >
        <i>github.com/magicuidesign/magicui</i>
      </a>
      <ul className={resumeVariants.lists.unordered}>
        <li>Contributed to a popular UI library (16k+ stars) for Design Engineers</li>
        <li>Developed reusable animated components and effects</li>
        <li>Collaborated on documentation and accessibility improvements</li>
        <li>
          <strong>Tech stack:</strong> React, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI
        </li>
      </ul>

      <h4 className={resumeVariants.heading.h4WithMargin}>Animated Icons | Contributor</h4>
      <a
        href="https://github.com/pqoqubbw/icons?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className={getLinkVariant(true)}
      >
        <i>github.com/pqoqubbw/icons</i>
      </a>
      <ul className={resumeVariants.lists.unordered}>
        <li>Contributed to a widely-used animated icons library (4k+ stars)</li>
        <li>Enhanced icon animations and optimized SVG performance</li>
        <li>Improved documentation and component examples</li>
        <li>
          <strong>Tech stack:</strong> TypeScript, SVG Animations, Next.js, Framer Motion, Tailwind
          CSS, Shadcn UI
        </li>
      </ul>

      <h2 className={getHeadingVariant(2)}>Education</h2>

      <div className="mb-2">
        <strong className={resumeVariants.education.label}>Computer Engineering</strong> | Erciyes
        University | <span className={resumeVariants.text.date.split(' ')[0]}>2018 – Paused</span>
      </div>
      <div className="mb-6">
        <strong className={resumeVariants.education.label}>Computer Programming</strong> | Nevşehir
        University | <span className={resumeVariants.text.date.split(' ')[0]}>2015 – 2017</span>
      </div>

      <h2 className={getHeadingVariant(2)}>Technical Skills</h2>

      <ul className={resumeVariants.lists.unordered}>
        <li>
          <strong className={resumeVariants.education.label}>Core:</strong> TypeScript, JavaScript
          (ES6+), HTML5, CSS3
        </li>
        <li>
          <strong className={resumeVariants.education.label}>Frontend:</strong> Vue.js (2/3),
          React.js, Nuxt.js, Next.js, Vuex, Vue Router, Tailwind CSS, Shadcn UI, SASS, Bootstrap,
          Framer Motion, SVG Animations
        </li>
        <li>
          <strong className={resumeVariants.education.label}>Development:</strong> Git, Storybook,
          ESLint, Prettier, Biome, Vitest, Jest, Vue Testing Library, Figma
        </li>
        <li>
          <strong className={resumeVariants.education.label}>Infrastructure:</strong> GitHub
          Actions, Vercel, Cloudflare (Workers/D1/R2), Node.js, AWS S3, Clerk, REST APIs, Hono,
          Drizzle ORM, Postgres, Neon, Supabase
        </li>
      </ul>

      <hr className={resumeVariants.dividers.hr} />

      <div className="flex items-center justify-between gap-2">
        <p className={resumeVariants.text.lastUpdated}>Last Updated: May 2025</p>
        <Print />
      </div>
    </article>
  );
}
