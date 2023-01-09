import Head from 'next/head';
import NavItem from '../components/NavItem';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { useDarkThemeDetector } from '../hooks';

export default function DefaultLayout(props) {
  const router = useRouter();
  const isDarkTheme = useDarkThemeDetector();

  const { children, title, ...customMeta } = props;
  const meta = {
    title: 'Gökhan Öztürk – Developer, crafter.',
    description: `Front-end developer, JavaScript enthusiast.`,
    // image: "https://gokhanozturk.io/static/images/banner.png",
    type: 'website',
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://gokhanozturk.io${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://gokhanozturk.io${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Gökhan Öztürk" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gokh4anozturk" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <header>
        <div className="name-profile">
          <div className="rounded-full mb-10 ">
            <img
              src={isDarkTheme ? 'profile-dark.svg' : 'profile.svg'}
              className="rounded-full"
              width={48}
              height={48}
            />
          </div>
          <div className="my-10">
            <h1 className="text-3xl">{title}</h1>
          </div>
        </div>
        <nav className="my-10">
          <NavItem href="/" text="About" />
          {/* <NavItem href="/blog" text="Blog" />
          <NavItem href="/projects" text="Projects" /> */}
        </nav>
      </header>
      <div
        style={{
          backgroundColor: 'rgb(238, 238, 238)',
          flex: '0 0 auto',
          height: '1px',
          overflow: 'visible',
          position: 'relative',
          width: '100%',
        }}
      ></div>
      <main className="main mt-10">{children}</main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
