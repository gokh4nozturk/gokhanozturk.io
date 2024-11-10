import AnimatedLink from '@components/AnimatedLink'
import { Github } from '@lib/github'

const REPOS = [
  'Teknasyon/rocket-ui',
  'gokh4nozturk/gokhanozturk.io',
  'magicuidesign/magicui',
  'pqoqubbw/icons',
  'RustDili/Rust-Ogrenmek',
  'gokh4nozturk/linguolink',
]

export default async function Works() {
  const github = new Github()
  const works = await Promise.all(
    REPOS.map(async (repo) => {
      const repoData = await github.getRepo(repo)
      return repoData
    }),
  )

  return (
    <div className="w-full sm:px-2">
      <div className="grid gap-2">
        {works.map(work => (
          <div key={work.id} className='grid gap-1 rounded-sm border border-neutral-300 px-2 py-1'>
            <AnimatedLink href={work.html_url}>
              {work.full_name}
            </AnimatedLink>
            <p className='text-xs text-neutral-400'>
              {work.description}
            </p>
            <div className='flex gap-3 text-xs text-neutral-400'>
              <span>
                {work.language || 'Unknown'}
              </span>
              <span>
                {work.stargazers_count}
              </span>
              <span>
                {work.forks_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
