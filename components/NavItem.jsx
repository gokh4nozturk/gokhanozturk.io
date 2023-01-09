import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden md:inline-block rounded-lg hover:underline transition-all mr-4',
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

export default NavItem;
