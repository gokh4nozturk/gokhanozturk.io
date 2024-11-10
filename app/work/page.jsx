import Image from 'next/image'
import cover from '@public/images/cover.svg'
import cover2 from '@public/images/cover2.svg'

const WORKS = [
  {
    title: 'Rocket UI',
    description:
      'A set of customizable UI components for Vue 3, built with TypeScript',
    image: cover,
    url: 'https://teknasyon.github.io/rocket-ui/',
  },
  {
    title: 'LinguoLink',
    description: 'The best place to manage translations',
    image: cover2,
    url: 'https://linguolink.gokhanozturk.io/',
  },
]

export default function Works() {
  return (
    <div className="w-full sm:px-2">
      <div className="flex flex-wrap gap-2">
        {WORKS.map(work => (
          <a href={work.url} key={work.title}>
            <Image
              width={320}
              height={192}
              title={work.title}
              src={work.image}
              alt={work.title}
              className="rounded-md transition-all duration-300 hover:scale-105"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
