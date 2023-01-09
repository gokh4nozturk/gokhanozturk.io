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
          className="hover:underline"
        >
          Teknasyon
        </a>
        . I'm working on B2B projects & their open-source projects. I love open
        source development and I build things on my{' '}
        <a
          href="https://github.com/gokh4nozturk"
          target="_blank"
          className="hover:underline"
        >
          GitHub profile.
        </a>{' '}
        I love coding, reading and taking photos. You can follow me on{' '}
        <a
          href="https://twitter.com/gokh4nozturk"
          target="_blank"
          className="hover:underline"
        >
          Twitter
        </a>
        {/* , check out my projects on{' '}
        <a
          href="https://github.com/gokh4nozturk"
          target="_blank"
          className="hover:underline"
        >
          GitHub
        </a> */}
        , or reach out via{' '}
        <a
          href="mailto:gokhaanozturk@gmail.com?subject=Mail from your Website"
          className="hover:underline"
        >
          Email.
        </a>
      </div>
      <div className="mt-10">
        <img className="rounded-2xl aspect-video" src="index.jpg" />
      </div>
    </DefaultLayout>
  );
}
