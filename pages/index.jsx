import DefaultLayout from '../layouts/Default';
const img = '@assets/index.jpg';

export default function Home() {
  return (
    <DefaultLayout title="Gökhan Öztürk">
      <div className="mb-10">
        Hello! I’m Gökhan, a software engineer at{' '}
        <a
          href="https://teknasyon.com/en/"
          target="_blank"
          className="max-sm:underline md:hover:underline"
        >
          Teknasyon
        </a>
        . I'm working on B2B projects & their open-source projects. I love open
        source development and I build things on my{' '}
        <a
          href="https://github.com/gokh4nozturk"
          target="_blank"
          className="max-sm:underline md:hover:underline"
        >
          GitHub profile.
        </a>{' '}
        I love coding, reading and taking photos. You can follow me on{' '}
        <a
          href="https://twitter.com/gokh4nozturk"
          target="_blank"
          className="max-sm:underline md:hover:underline"
        >
          Twitter
        </a>
        {/* , check out my projects on{' '}
        <a
          href="https://github.com/gokh4nozturk"
          target="_blank"
          className="max-sm:underline md:hover:underline"
        >
          GitHub
        </a> */}
        , or reach out via{' '}
        <a
          href="mailto:gokhaanozturk@gmail.com?subject=Mail from your Website"
          className="max-sm:underline md:hover:underline"
        >
          Email.
        </a>{' '}
        {/* You can reach out to{' '}
        <a
          href="https://flowcv.com/resume/4t62w9o7n6"
          target="_blank"
          className="max-sm:underline md:hover:underline"
        >
          my CV
        </a>
        , or you can check out my{' '}
        <a
          href="https://flowcv.com/resume-template/63d28d4ba1fd40d227224578"
          target="_blank"
          className="max-sm:underline md:hover:underline"
        >
          CV Template
        </a>
        . */}
      </div>
      <div className="mt-10">
        <img className="rounded-2xl aspect-video" src="index.jpg" />
      </div>
    </DefaultLayout>
  );
}
