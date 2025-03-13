'use client';

import { cn } from '@lib/utils';
import { Bookmark, Briefcase, FileUser, Home, Image } from 'lucide-react';
import React from 'react';
import ThankYou from './ThankYou';
import { AnimatedTabs } from './luxe/animated-tabs';

const navItems = [
  {
    path: '/',
    name: 'Home',
    icon: Home,
  },
  {
    path: '/photos',
    name: 'Photos',
    icon: Image,
  },
  {
    path: '/works',
    name: 'Works',
    icon: Briefcase,
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    icon: Bookmark,
  },
  {
    path: '/resume',
    name: 'Resume',
    icon: FileUser,
  },
];

export default function Navigation() {
  return (
    <div
      className={cn(
        'fixed flex items-center gap-1 h-[52px] sm:bottom-10 bottom-6 w-full z-50 left-1/2 -translate-x-1/2 border border-[#eaeaea]',
        'px-4 py-2 backdrop-blur-sm dark:border-neutral-800 max-w-fit rounded-full'
      )}
    >
      <AnimatedTabs tabs={navItems} />
      |
      <ThankYou />
    </div>
  );
}
