// import Image from 'next/image'
// import cover from '@public/images/cover.svg'
// import cover2 from '@public/images/cover2.svg'
import { Github } from '@lib/github'

// const WORKS = [
//   {
//     title: 'Rocket UI',
//     description:
//       'A set of customizable UI components for Vue 3, built with TypeScript',
//     image: cover,
//     url: 'https://teknasyon.github.io/rocket-ui/',
//     id: 1,
//     full_name: 'Teknasyon/rocket-ui',
//     name: 'rocket-ui',
//     html_url: '',
//     description: 'A set of customizable UI components for Vue 3, built with TypeScript',
//   },
//   {
//     title: 'LinguoLink',
//     description: 'The best place to manage translations',
//     image: cover2,
//     url: 'https://linguolink.gokhanozturk.io/',
//   },
// ]

export default async function Works() {
  const repos = ['Teknasyon/rocket-ui', 'gokh4nozturk/gokhanozturk.io', 'magicuidesign/magicui', 'pqoqubbw/icons', 'RustDili/Rust-Ogrenmek', 'gokh4nozturk/linguolink']
  const github = new Github()
  const works = await Promise.all(
    repos.map(async (repo) => {
      const repoData = await github.getRepo(repo)
      return repoData
    }),
  )

  return (
    <div className="w-full sm:px-2">
      <div className="grid gap-2 sm:grid-cols-2">
        {works.map(work => (
          <div key={work.id} className='border px-2 py-1 rounded-md'>
            <a href={work.html_url} target='_blank' className='text-sm'>
              {work.full_name}
            </a>
            <p className='h-16 text-xs mt-1'>
              {work.description}
            </p>
            <div className='flex gap-3 text-xs'>
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
