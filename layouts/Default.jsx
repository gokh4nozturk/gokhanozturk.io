import Head from 'next/head';
import NavItem from '../components/NavItem';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { useDarkThemeDetector } from '../hooks';

export default function DefaultLayout(props) {
  const router = useRouter();
  const isDarkTheme = useDarkThemeDetector();

  const { children, ...customMeta } = props;
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
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header>
        <div className="flex items-center gap-4">
          <div className="rounded-full">
            <img
              src={isDarkTheme ? 'profile-dark.svg' : 'profile.svg'}
              className="rounded-full"
              width={48}
              height={48}
            />
          </div>
          <div className="sm:my-10">
            <h1 className="sm:text-3xl text-xl">Gökhan Öztürk</h1>
          </div>
        </div>
        <nav className="sm:my-10 my-8">
          <NavItem href="/" text="home" />
          {/* <NavItem href="/blog" text="Blog" /> */}
          <NavItem href="/projects" text="projects" />
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
