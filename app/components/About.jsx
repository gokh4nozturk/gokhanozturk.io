import AnimatedLink from '@components/AnimatedLink'

export default function About() {
  return (
    <div className="mb-5">
        Hi 👋 I’m Gökhan, a software engineer at{' '}
      <AnimatedLink
        href="https://teknasyon.com/en/"
        color='teknasyon'
      >
          Teknasyon
      </AnimatedLink>
        . I&rsquo;m working on{' '}
      <AnimatedLink
        href="https://rockads.com/"
        color="rockads"
      >
          rockads.com
      </AnimatedLink>{' '}
        and B2B projects & their open-source projects. I love open source
        development and I build things on my{' '}
      <AnimatedLink
        href="https://github.com/gokh4nozturk"
      >
          GitHub profile.
      </AnimatedLink>{' '}
      {/* Example projects:{' '}
        <a
          href="https://github.com/Teknasyon/rocket-ui"
          target="_blank"
          className="decoration-[#4C5BE1] underline-offset-4 hover:text-[#4C5BE1] max-sm:underline md:hover:underline"
        >
          Rocket UI
        </a>
        , I love coding, reading and taking photos. */}
      <br />
        You can follow me on{' '}
      <AnimatedLink
        href="https://twitter.com/gokh4nozturk"
      >
          Twitter
      </AnimatedLink>
      {'  '}&{' '}
      <AnimatedLink
        href="https://www.linkedin.com/in/gokhannozturk/"
        target="_blank"
      >
          LinkedIn
      </AnimatedLink>
      {/* , or reach out via{' '}
        <a
          href="mailto:me@gokhanozturk.io?subject=Mail from your Website"
          className="underline-offset-4 max-sm:underline md:hover:underline"
        >
          Email.
        </a>{' '} */}
    </div>
  )
}
