import Image from 'next/image'
import cover from '@public/images/cover.svg'

const PROJECTS = [
  {
    title: 'Rocket UI',
    description:
      'A set of customizable UI components for Vue 3, built with TypeScript',
    image: cover,
    url: 'https://teknasyon.github.io/rocket-ui/',
  },
]

export default function Project() {
  return (
    <div className="w-full sm:px-2">
      <div className="flex flex-wrap gap-2">
        {PROJECTS.map(project => (
          <a href={project.url} key={project.title}>
            <Image
              width={320}
              height={192}
              title={project.title}
              src={project.image}
              alt={project.title}
              className="rounded-sm transition-all duration-300 hover:scale-105"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
