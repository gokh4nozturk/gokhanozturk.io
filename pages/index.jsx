import DefaultLayout from '../layouts/Default';
const img = '@assets/index.jpg';
import { useSpringRef, animated, useTransition, useSpring } from 'react-spring';
import { useLayoutEffect, useState } from 'react';

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
        {transitions((springs, item) => (
          <animated.div style={springs}>
            <img src={IMAGES[item]} />
          </animated.div>
        ))}
      </div>
    </DefaultLayout>
  );
}
