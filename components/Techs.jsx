import React from 'react'
import { animated } from 'react-spring'
import NextImage from 'next/image'

const TECHNOLOGIES = [
  {
    name: 'React',
    url: 'https://reactjs.org/',
    image: 'https://cdn.svgporn.com/logos/react.svg',
  },
  {
    name: 'Vue',
    url: 'https://vuejs.org/',
    image: 'https://cdn.svgporn.com/logos/vue.svg',
  },
  {
    name: 'Nuxt.js',
    url: 'https://nuxtjs.org/',
    image: 'https://cdn.svgporn.com/logos/nuxt-icon.svg',
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    image: 'https://cdn.svgporn.com/logos/nextjs-icon.svg',
  },
  {
    name: 'Vite',
    url: 'https://vitejs.dev/',
    image: 'https://cdn.svgporn.com/logos/vitejs.svg',
  },
  {
    name: 'JavaScript',
    url: 'https://www.javascript.com/',
    image: 'https://cdn.svgporn.com/logos/javascript.svg',
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    image: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    image: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
  },
  {
    name: 'Storybook',
    url: 'https://storybook.js.org/',
    image: 'https://cdn.svgporn.com/logos/storybook-icon.svg',
  },
  {
    name: 'GraphQL',
    url: 'https://graphql.org/',
    image: 'https://cdn.svgporn.com/logos/graphql.svg',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    image: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
  },
  {
    name: 'Sass',
    url: 'https://sass-lang.com/',
    image: 'https://cdn.svgporn.com/logos/sass.svg',
  },
  {
    name: 'PostCSS',
    url: 'https://postcss.org/',
    image: 'https://cdn.svgporn.com/logos/postcss.svg',
  },
  {
    name: 'Jest',
    url: 'https://jestjs.io/',
    image: 'https://cdn.svgporn.com/logos/jest.svg',
  },
  {
    name: 'Vitest',
    url: 'https://vitest.netlify.app/',
    image: 'https://cdn.svgporn.com/logos/vitest.svg',
  },
  {
    name: 'Pinia',
    url: 'https://pinia.esm.dev/',
    image: 'https://cdn.svgporn.com/logos/pinia.svg',
  },
  {
    name: 'Vuetify',
    url: 'https://vuetifyjs.com/',
    image: 'https://cdn.svgporn.com/logos/vuetifyjs.svg',
  },
  {
    name: 'React Spring',
    url: 'https://react-spring.io/',
    image: 'https://cdn.svgporn.com/logos/react-spring.svg',
  },
  {
    name: 'GitHub Actions',
    url: 'https://docs.github.com/en/actions',
    image: 'https://cdn.svgporn.com/logos/github-actions.svg',
  },
]

export default function Techs() {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {TECHNOLOGIES.map(technology => (
        <animated.a href={technology.url} key={technology.name}>
          <NextImage
            width={32}
            height={32}
            title={technology.name}
            src={technology.image}
            alt={technology.name}
            className="h-6 w-6 rounded-sm transition-all hover:scale-150 sm:h-8 sm:w-8"
          />
        </animated.a>
      ))}
    </div>
  )
}
