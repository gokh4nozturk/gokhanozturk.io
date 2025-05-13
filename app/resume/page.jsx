import AnimatedLink from '@components/AnimatedLink';
import { FeedbackRating } from '@components/hextaui/feedback';

export default function ResumePage() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <Article />
      <FeedbackRating className="-translate-x-1/2 fixed bottom-[5.5rem] left-1/2 backdrop-blur-sm sm:bottom-32" />
    </div>
  );
}

function Article() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="mt-2 mb-3 font-bold text-3xl text-gray-900 tracking-tight dark:text-white">
        Gökhan Öztürk
      </h1>

      <div className="mb-8 text-gray-600 dark:text-gray-400">
        Frontend Developer
        <br />
        İstanbul, Turkey ·{' '}
        <a
          href="https://github.com/gokh4nozturk?ref=gokhanozturk.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          github.com/gokh4nozturk
        </a>{' '}
        ·{' '}
        <a
          href="https://linkedin.com/in/gokhannozturk?ref=gokhanozturk.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          linkedin.com/in/gokhannozturk
        </a>
      </div>

      <h2 className="mb-4 border-gray-200 border-b pb-1 font-semibold text-gray-900 text-xl dark:border-gray-800 dark:text-white">
        Summary
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Frontend Developer with 4+ years of experience specializing in Vue.js and React ecosystems.
        Focused on building scalable web applications and contributing to open-source projects.
        Strong expertise in modern JavaScript frameworks and performance optimization.
      </p>

      <h2 className="mt-8 mb-4 border-gray-200 border-b pb-1 font-semibold text-gray-900 text-xl dark:border-gray-800 dark:text-white">
        Professional Experience
      </h2>

      <h3 className="mb-0 mb-1 font-medium text-gray-900 text-lg dark:text-white">
        Frontend Developer | Teknasyon Tech
      </h3>
      <p className="mb-2 text-gray-600 text-sm dark:text-gray-400">05/2021 – Present | İstanbul</p>
      <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
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

      <h3 className="mt-6 mb-0 font-medium text-gray-900 text-lg dark:text-white">
        Frontend Developer | Phanka Group
      </h3>
      <p className="mb-2 text-gray-600 text-sm dark:text-gray-400">12/2020 – 05/2021 | İstanbul</p>
      <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
        <li>Developed responsive web applications using Vue.js and Nuxt.js</li>
        <li>Built reusable component library improving development efficiency</li>
        <li>
          <strong>Tech stack:</strong> Vue 2, Vuex, SASS, Bootstrap
        </li>
      </ul>

      <h2 className="mt-8 mb-4 border-gray-200 border-b pb-1 font-semibold text-gray-900 text-xl dark:border-gray-800 dark:text-white">
        Open Source & Projects
      </h2>

      <h3 className="mb-0 font-medium text-gray-900 text-lg dark:text-white">
        Rocket UI | Core Maintainer
      </h3>
      <a
        href="https://github.com/Teknasyon/rocket-ui?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-1 inline-block text-blue-600 text-sm hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <i>github.com/Teknasyon/rocket-ui</i>
      </a>
      <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
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

      <h3 className="mt-6 mb-0 font-medium text-gray-900 text-lg dark:text-white">
        Linguolink | Creator & Maintainer
      </h3>
      <a
        href="https://linguol.ink?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-1 inline-block text-blue-600 text-sm hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <i>linguol.ink</i>
      </a>
      <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
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

      <h3 className="mt-6 mb-0 font-medium text-gray-900 text-lg dark:text-white">
        Chop-URL | Creator & Maintainer
      </h3>
      <a
        href="https://github.com/gokh4nozturk/chop-url?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-1 inline-block text-blue-600 text-sm hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <i>github.com/gokh4nozturk/chop-url</i>
      </a>
      <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
        <li>Developed a modern URL shortening service with serverless architecture</li>
        <li>Implemented scalable backend using Cloudflare Workers and D1 database</li>
        <li>Built responsive frontend with Next.js and deployed on Vercel</li>
        <li>Added features like analytics tracking, rate limiting, and API documentation</li>
        <li>
          <strong>Tech stack:</strong> TypeScript, Next.js, Cloudflare Workers, Cloudflare D1,
          Drizzle ORM, Cloudflare R2, Hono, GitHub Actions, Tailwind CSS, Shadcn UI
        </li>
      </ul>

      <h3 className="mt-6 mb-0 border-gray-200 border-b font-medium text-gray-900 text-lg dark:text-white">
        Open Source Contributions
      </h3>

      <h4 className="my-1 font-medium text-base text-gray-900 dark:text-white">
        Magic UI | Contributor
      </h4>
      <a
        href="https://github.com/magicuidesign/magicui?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-1 inline-block text-blue-600 text-sm hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <i>github.com/magicuidesign/magicui</i>
      </a>
      <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
        <li>Contributed to a popular UI library (16k+ stars) for Design Engineers</li>
        <li>Developed reusable animated components and effects</li>
        <li>Collaborated on documentation and accessibility improvements</li>
        <li>
          <strong>Tech stack:</strong> React, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI
        </li>
      </ul>

      <h4 className="my-1 mb-1 font-medium text-base text-gray-900 dark:text-white">
        Animated Icons | Contributor
      </h4>
      <a
        href="https://github.com/pqoqubbw/icons?ref=gokhanozturk.io"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-1 inline-block text-blue-600 text-sm hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <i>github.com/pqoqubbw/icons</i>
      </a>
      <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
        <li>Contributed to a widely-used animated icons library (4k+ stars)</li>
        <li>Enhanced icon animations and optimized SVG performance</li>
        <li>Improved documentation and component examples</li>
        <li>
          <strong>Tech stack:</strong> TypeScript, SVG, Next.js, Framer Motion, Tailwind CSS, Shadcn
          UI
        </li>
      </ul>

      <h2 className="mt-8 mb-4 border-gray-200 border-b pb-1 font-semibold text-gray-900 text-xl dark:border-gray-800 dark:text-white">
        Education
      </h2>

      <div className="mb-2">
        <strong className="text-gray-900 dark:text-gray-200">Computer Engineering</strong> | Erciyes
        University | <span className="text-gray-600 dark:text-gray-400">2018 – Paused</span>
      </div>
      <div className="mb-6">
        <strong className="text-gray-900 dark:text-gray-200">Computer Programming</strong> |
        Nevşehir University | <span className="text-gray-600 dark:text-gray-400">2015 – 2017</span>
      </div>

      <h2 className="mt-8 mb-4 border-gray-200 border-b pb-1 font-semibold text-gray-900 text-xl dark:border-gray-800 dark:text-white">
        Technical Skills
      </h2>

      <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
        <li>
          <strong className="text-gray-900 dark:text-gray-200">Languages:</strong> TypeScript,
          JavaScript (ES6+), HTML5, CSS3
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-200">Frontend Libraries:</strong> Vue.js,
          React.js, Vuex, Vue Router
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-200">Frameworks:</strong> Nuxt.js, Next.js
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-200">UI & Styling | Animations:</strong>{' '}
          Tailwind CSS, Shadcn UI, Storybook, Framer Motion
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-200">Testing:</strong> Vitest, Vue Testing
          Library, Jest
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-200">DevOps & Cloud:</strong> GitHub
          Actions, Vercel, Cloudflare Workers, Cloudflare D1, Cloudflare R2, Postgres, Neon,
          Supabase
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-200">Tools:</strong> Git, Figma, ESLint,
          Prettier, Biome
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-200">Backend & API:</strong> Node.js, REST
          APIs, Hono, Drizzle ORM
        </li>
      </ul>

      <hr className="my-8 border-gray-200 dark:border-gray-800" />

      <p className="text-gray-600 text-sm dark:text-gray-400">Last Updated: May 2025</p>
    </article>
  );
}
