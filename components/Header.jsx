'use client';

import Profile from '@components/icons/profile';
import { NameTransition } from '@components/Name';
import { DarkModeToggle } from '@components/ThemeProvider';
import React from 'react';

export function Header() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="transition-all border-b pb-6 sm:pb-0 border-gray-200 dark:border-neutral-800 mb-4">
      <div className="flex items-center gap-4">
        <div className="rounded-full">
          {mounted ? (
            <div className="grid relative size-16 place-items-center rounded-full border bg-white dark:bg-slate-50 md:size-20">
              <Profile className="absolute size-full -top-1.5" />
            </div>
          ) : (
            <div className="size-16 place-items-center rounded-full border bg-white dark:bg-slate-50 md:size-20">
              <div className="size-full animate-pulse rounded-full bg-gray-200 dark:bg-slate-50" />
            </div>
          )}
        </div>
        <div className="sm:my-10">
          <NameTransition />
        </div>
        <div className="ml-auto">
          {mounted ? (
            <DarkModeToggle />
          ) : (
            <div className="h-8 w-[88px] animate-pulse rounded-md bg-gray-200 dark:bg-slate-50" />
          )}
        </div>
      </div>
      {/* <nav className="my-3 sm:my-6 flex items-center">
        <NavItem href="/" name="home" />
        <NavItem href="/blog" name="blog" />
        <NavItem href="/photos" name="photos" />
        <NavItem href="/works" name="works" />
        <NavItem href="/bookmarks" name="bookmarks" />
        <NavItem href="/resume" name="cv" />
      </nav> */}
    </header>
  );
}
