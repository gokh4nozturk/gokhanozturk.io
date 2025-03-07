'use client'

import { useRef } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { GitFork, Star } from 'lucide-react'

export default function ResumePage() {
  const contentRef = useRef(null)

  const handleDownload = async () => {
    if (!contentRef.current)
      return

    try {
      // PDF için özel stiller uygula
      const element = contentRef.current
      element.style.color = '#000000'
      element.style.backgroundColor = '#ffffff'
      element.style.width = '210mm' // A4 genişliği
      element.style.padding = '20mm'
      element.style.boxSizing = 'border-box'

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        format: 'a4',
        unit: 'mm',
      })

      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('gokhan-ozturk-resume.pdf')

      // Stilleri geri al
      element.style.color = ''
      element.style.backgroundColor = ''
      element.style.width = ''
      element.style.padding = ''
      element.style.boxSizing = ''
    }
    catch (error) {
      console.error('PDF oluşturulurken bir hata oluştu:', error)
    }
  }

  return (
    <>
      <div className="print:hidden">
        <button
          onClick={handleDownload}
          className="fixed bottom-8 right-8 flex items-center gap-2 rounded-full bg-blue-500/80 p-2.5 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-blue-500 hover:shadow-blue-500/25"
          aria-label="download resume as pdf"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="relative mx-auto max-w-2xl">
        <article ref={contentRef} className="prose prose-gray max-w-none dark:prose-invert">
          <h1 className="mb-3 mt-2 text-3xl font-bold tracking-tight">Gökhan Öztürk</h1>

          <div className="mb-8 text-gray-400">
            Frontend Developer<br />
            İstanbul, Turkey · <a href="https://github.com/gokh4nozturk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">github.com/gokhanozturk</a> · <a href="https://linkedin.com/in/gokhannozturk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">linkedin.com/in/gokhannozturk</a>
          </div>

          <h2 className="mb-4 border-b border-gray-800 pb-1 text-xl font-semibold">Summary</h2>
          <p className="text-gray-300">
            Frontend Developer with 4+ years of experience specializing in Vue.js and React ecosystems.
            Focused on building scalable web applications and contributing to open-source projects.
            Strong expertise in modern JavaScript frameworks and performance optimization.
          </p>

          <h2 className="mb-4 mt-8 border-b border-gray-800 pb-1 text-xl font-semibold">Professional Experience</h2>

          <h3 className="mb-1 text-lg font-medium">Frontend Developer | Teknasyon Tech</h3>
          <p className="mb-2 text-sm text-gray-400">05/2021 – Present | İstanbul</p>
          <ul className="list-disc pl-4 text-gray-300">
            <li>Led development of Rockads platform using Vue 3 & TypeScript, improving performance by 40%</li>
            <li>Created and maintained Rocket UI component library used across multiple projects</li>
            <li>Implemented automated testing workflows reducing bug reports by 30%</li>
            <li>Tech stack: Vue 3, TypeScript, Nuxt, Tailwind CSS, Storybook, GitHub Actions</li>
          </ul>

          <h3 className="mb-1 mt-6 text-lg font-medium">Frontend Developer | Phanka Group</h3>
          <p className="mb-2 text-sm text-gray-400">12/2020 – 05/2021 | İstanbul</p>
          <ul className="list-disc pl-4 text-gray-300">
            <li>Developed responsive web applications using Vue.js and Nuxt.js</li>
            <li>Built reusable component library improving development efficiency</li>
            <li>Tech stack: Vue 2, Vuex, SASS, Bootstrap</li>
          </ul>

          <h2 className="mb-4 mt-8 border-b border-gray-800 pb-1 text-xl font-semibold">Open Source & Projects</h2>

          <h3 className="mb-1 text-lg font-medium">Rocket UI | Core Maintainer</h3>
          <a href="https://github.com/Teknasyon/rocket-ui" target="_blank" rel="noopener noreferrer" className="mb-2 inline-block text-blue-400 hover:text-blue-300">github.com/Teknasyon/rocket-ui</a>
          <ul className="list-disc pl-4 text-gray-300">
            <li>Led development of a modern Vue 3 component library with 38+ stars and 3 forks</li>
            <li>Built 30+ reusable components using TypeScript and Tailwind CSS</li>
            <li>Implemented comprehensive documentation with Storybook and automated testing</li>
            <li>Established CI/CD pipeline with GitHub Actions for automated releases</li>
            <li>Tech stack: Vue 3, TypeScript, Tailwind CSS, Storybook, Vitest, GitHub Actions</li>
          </ul>

          <h3 className="mb-1 mt-6 text-lg font-medium">Chop-URL | Creator & Maintainer</h3>
          <a href="https://github.com/gokh4nozturk/chop-url" target="_blank" rel="noopener noreferrer" className="mb-2 inline-block text-blue-400 hover:text-blue-300">github.com/gokh4nozturk/chop-url</a>
          <ul className="list-disc pl-4 text-gray-300">
            <li>Developed a modern URL shortening service with serverless architecture</li>
            <li>Implemented scalable backend using Cloudflare Workers and D1 database</li>
            <li>Built responsive frontend with Next.js and deployed on Vercel</li>
            <li>Added features like analytics tracking, rate limiting, and API documentation</li>
            <li>Tech stack: TypeScript, Next.js, Cloudflare Workers, Cloudflare D1, Cloudflare R2, Hono, GitHub Actions, Tailwind CSS, Shadcn UI</li>
          </ul>

          <h3 className="mb-1 mt-6 text-lg font-medium">Open Source Contributions</h3>

          <h4 className="mb-1 text-base font-medium">Magic UI | Contributor</h4>
          <a href="https://github.com/magicuidesign/magicui" target="_blank" rel="noopener noreferrer" className="mb-2 inline-block text-blue-400 hover:text-blue-300">github.com/magicuidesign/magicui</a>
          <ul className="list-disc pl-4 text-gray-300">
            <li>Contributed to a popular UI library (15k+ stars) for Design Engineers</li>
            <li>Developed reusable animated components and effects</li>
            <li>Collaborated on documentation and accessibility improvements</li>
            <li>Tech stack: React, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI</li>
          </ul>

          <h4 className="mb-1 mt-4 text-base font-medium">Animated Icons | Contributor</h4>
          <a href="https://github.com/pqoqubbw/icons" target="_blank" rel="noopener noreferrer" className="mb-2 inline-block text-blue-400 hover:text-blue-300">github.com/pqoqubbw/icons</a>
          <ul className="list-disc pl-4 text-gray-300">
            <li>Contributed to a widely-used animated icons library (3.8k+ stars)</li>
            <li>Enhanced icon animations and optimized SVG performance</li>
            <li>Improved documentation and component examples</li>
            <li>Tech stack: TypeScript, SVG, Next.js, Framer Motion, Tailwind CSS, Shadcn UI</li>
          </ul>

          <h2 className="mb-4 mt-8 border-b border-gray-800 pb-1 text-xl font-semibold">Education</h2>

          <div className="mb-2">
            <strong className="text-gray-200">Computer Engineering</strong> | Erciyes University | <span className="text-gray-400">2018 – Present</span>
          </div>
          <div className="mb-6">
            <strong className="text-gray-200">Computer Programming</strong> | Nevşehir University | <span className="text-gray-400">2015 – 2017</span>
          </div>

          <h2 className="mb-4 mt-8 border-b border-gray-800 pb-1 text-xl font-semibold">Technical Skills</h2>

          <ul className="list-disc pl-4 text-gray-300">
            <li><strong className="text-gray-200">Frontend:</strong> Vue.js, React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3</li>
            <li><strong className="text-gray-200">Frameworks:</strong> Nuxt.js, Next.js, Tailwind CSS, Vuex, Vue Router, Shadcn UI</li>
            <li><strong className="text-gray-200">Testing & Quality:</strong> Vitest, Vue Testing Library, Jest, ESLint, Prettier</li>
            <li><strong className="text-gray-200">Cloud & DevOps:</strong> Cloudflare Workers, Cloudflare D1, Vercel, GitHub Actions</li>
            <li><strong className="text-gray-200">Tools:</strong> Git, Storybook, Figma, Framer Motion</li>
            <li><strong className="text-gray-200">Other:</strong> REST APIs, GraphQL, Node.js, Hono</li>
          </ul>

          <hr className="my-8 border-gray-800" />

          <p className="text-sm text-gray-400">Last Updated: March 2024</p>
        </article>
      </div>
    </>
  )
}

export async function generateMetadata() {
  const siteUrl = '/resume'

  return {
    title: 'Resume | Gökhan Öztürk',
    description: 'Professional journey and resume highlights',
    openGraph: {
      title: 'Resume | Gökhan Öztürk',
      description: 'Professional journey and resume highlights',
      url: siteUrl,
    },
    alternates: {
      canonical: siteUrl,
    },
  }
}
