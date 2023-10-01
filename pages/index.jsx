import DefaultLayout from '../layouts/Default';
import { useSpringRef, animated, useTransition, useSpring } from 'react-spring';
import { useLayoutEffect, useState } from 'react';
import Techs from '../components/Techs';

const IMAGES = [
  'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154443660/original/734570cec0de955789ff0acd80caad3d582b85e0/create-a-generative-art-piece-for-you.png',
  'https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg',
  'https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg',
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const springApi = useSpringRef();

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
    },
    enter: {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
    },
    leave: {
      clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1);
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 4000,
    },
    delay: 1000,
    ref: springApi,
  });

  const springs = useSpring({
    from: {
      strokeDashoffset: 120,
    },
    to: {
      strokeDashoffset: 0,
    },
    config: {
      duration: 11000,
    },
    loop: true,
    ref: springApi,
  });

  useLayoutEffect(() => {
    springApi.start();
  }, [activeIndex]);

  return (
    <DefaultLayout title="Gökhan Öztürk">
      <div className="mb-10">
        Hello! I’m Gökhan, a software engineer at{' '}
        <a
          href="https://teknasyon.com/en/"
          target="_blank"
          className="max-sm:underline md:hover:underline text-[#009cfb] decoration-[#009cfb] underline-offset-4"
        >
          Teknasyon
        </a>
        . I'm working on{' '}
        <a
          href="https://rockads.com/"
          target="_blank"
          className="max-sm:underline md:hover:underline text-[#007CE1] decoration-[#007CE1] underline-offset-4"
        >
          rockads.com
        </a>{' '}
        and B2B projects & their open-source projects. I love open source
        development and I build things on my{' '}
        <a
          href="https://github.com/gokh4nozturk"
          target="_blank"
          className="max-sm:underline md:hover:underline underline-offset-4"
        >
          GitHub profile.
        </a>{' '}
        Example projects:{' '}
        <a
          href="https://github.com/Teknasyon/rocket-ui"
          target="_blank"
          className="max-sm:underline md:hover:underline text-[#4C5BE1] decoration-[#4C5BE1] underline-offset-4"
        >
          Rocket UI
        </a>
        , I love coding, reading and taking photos. You can follow me on{' '}
        <a
          href="https://twitter.com/gokh4nozturk"
          target="_blank"
          className="max-sm:underline md:hover:underline underline-offset-4"
        >
          Twitter
        </a>
        {'  '}&{' '}
        <a
          href="https://www.linkedin.com/in/gokhannozturk/"
          target="_blank"
          className="max-sm:underline md:hover:underline underline-offset-4"
        >
          LinkedIn
        </a>
        , or reach out via{' '}
        <a
          href="mailto:me@gokhanozturk.io?subject=Mail from your Website"
          className="max-sm:underline md:hover:underline underline-offset-4"
        >
          Email.
        </a>{' '}
      </div>
      <div>
        technologies I use: <Techs />
      </div>
      <div className="mt-10">
        {transitions((springs, item) => (
          <animated.div style={springs}>
            <img src={IMAGES[item]} />
          </animated.div>
        ))}
      </div>
    </DefaultLayout>
  );
}
