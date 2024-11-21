import AnimatedLink from '@components/AnimatedLink'
import { Github } from '@lib/github'
import { GitFork, Star } from 'lucide-react'
import cn from 'classnames'
import TitleDescription from '@components/TitleDescription'

const REPOS = [
  'magicuidesign/magicui',
  'pqoqubbw/icons',
  'Teknasyon/rocket-ui',
  'gokh4nozturk/gokhanozturk.io',
  'RustDili/Rust-Ogrenmek',
  'gokh4nozturk/linguolink',
]

const LANG_COLORS = {
  'TypeScript': 'text-blue-500',
  'JavaScript': 'text-yellow-500',
  'Python': 'text-green-500',
  'HTML': 'text-red-500',
  'CSS': 'text-blue-500',
  'SCSS': 'text-pink-500',
  'Shell': 'text-gray-500',
  'Dockerfile': 'text-blue-500',
  'Ruby': 'text-red-500',
  'Rust': 'text-orange-500',
  'C': 'text-blue-500',
  'C++': 'text-blue-500',
  'C#': 'text-blue-500',
  'Java': 'text-red-500',
  'Kotlin': 'text-blue-500',
  'Swift': 'text-red-500',
  'Objective-C': 'text-blue-500',
  'PHP': 'text-blue-500',
  'Go': 'text-blue-500',
  'R': 'text-blue-500',
  'Vim script': 'text-green-500',
  'Makefile': 'text-blue-500',
  'PowerShell': 'text-blue-500',
  'Vue': 'text-green-500',
  'Vue.js': 'text-green-500',
  'VueJS': 'text-green-500',
  'Vue.js 2': 'text-green-500',
  'Vue.js 3': 'text-green-500',
  'Vue 2': 'text-green-500',
  'Vue 3': 'text-green-500',
  'React': 'text-blue-500',
  'React.js': 'text-blue-500',
  'ReactJS': 'text-blue-500',
  'React.js 2': 'text-blue-500',
  'React.js 3': 'text-blue-500',
  'React 2': 'text-blue-500',
  'React 3': 'text-blue-500',
  'React Native': 'text-blue-500',
  'ReactNative': 'text-blue-500',
  'React Native 2': 'text-blue-500',
  'React Native 3': 'text-blue-500',
  'ReactNative 2': 'text-blue-500',
  'ReactNative 3': 'text-blue-500',
  'Angular': 'text-red-500',
  'Angular.js': 'text',
}

export const revalidate = 3600 // 60 * 60 seconds

export default async function Works() {
  const github = new Github()
  const works = await Promise.all(
    REPOS.map(async (repo) => {
      const repoData = await github.getRepo(repo)
      return repoData
    }),
  )

  return (
    <div className="w-full">
      <TitleDescription title='Works' description='A collection of works that I have contributed to.' />
      <div className="grid divide-y">
        {works.map(work => (
          <Work key={work.id} data={work} />
        ))}
      </div>
    </div>
  )
}

function Work({ data: work }) {
  return (
    <div key={work.id} className='grid gap-1 py-3'>
      <AnimatedLink href={work.html_url} name={work.name} className='font-medium'>
        {work.full_name}
      </AnimatedLink>
      <p className='my-1 text-xs text-neutral-400'>
        {work.description}
      </p>
      <div className='flex gap-3 text-xs font-medium text-neutral-400'>
        <span className={cn(LANG_COLORS[work.language])}>
          {work.language || 'Unknown'}
        </span>
        <span className='flex items-center gap-1'>
          <Star size={12} />
          {work.stargazers_count}
        </span>
        <span className='flex items-center gap-1'>
          <GitFork size={12} />
          {work.forks_count}
        </span>
      </div>
    </div>
  )
}

export async function generateMetadata() {
  const siteUrl = '/works'

  return {
    title: 'Works',
    description: 'A collection of works',
    openGraph: {
      title: 'Works',
      description: 'A collection of works',
      url: siteUrl,
    },
    alternates: {
      canonical: siteUrl,
    },
  }
}
