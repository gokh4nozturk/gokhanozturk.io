'use client';
import cn from 'classnames';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavItem({ href, name }) {
  const pathname = usePathname() || '/';
  const isActive = pathname === href;

  return (
    <NextLink
      key={name}
      href={href}
      className={cn(
        isActive
          ? 'font-medium text-p3-text dark:text-p3-text-dark'
          : 'font-normal text-p3-text-light dark:text-p3-text-light group',
        'mr-4 transition-all duration-300 ease-in-out text-sm sm:text-base'
      )}
    >
      <span
        className={cn(
          isActive && 'bg-[length:100%_1px] dark:from-p3-text-dark dark:to-p3-text-dark',
          'pb-0.5 bg-gradient-to-r from-p3-text to-p3-text bg-[length:0%_1px] bg-left-bottom bg-no-repeat',
          'transition-all duration-500 ease-out',
          'dark:from-p3-text-light dark:to-p3-text-light sm:group-hover:bg-[length:100%_1px]'
        )}
      >
        {name}
      </span>
    </NextLink>
  );
}

export default NavItem;
