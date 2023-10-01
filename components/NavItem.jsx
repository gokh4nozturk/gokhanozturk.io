import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { animated, useTransition } from 'react-spring';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  const transitions = useTransition(text, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, 10px, 0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0px, 0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0, 10px, 0)',
    },
    config: {
      duration: 200,
    },
  });
  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'font-normal text-gray-800 dark:text-gray-200 underline underline-offset-8 decoration-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'rounded-lg hover:underline hover:underline-offset-8 transition-all mr-4',
      )}
    >
      {transitions((style) => {
        return (
          <animated.span className="capsize" style={style}>
            {text}
          </animated.span>
        );
      })}
      {/* <span className="capsize">{text}</span> */}
    </NextLink>
  );
}

export default NavItem;
