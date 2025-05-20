'use client';

import ThankYou from '@components/ThankYou';
import { CircularMenu } from '@components/ground/menu';
import { AnimatedTabs } from '@components/luxe/animated-tabs';
import { cn } from '@lib/utils';
import { Bookmark, Briefcase, FileUser, Home, Image } from 'lucide-react';
import React from 'react';

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
        '-translate-x-1/2 fixed bottom-6 left-1/2 z-50 flex h-[52px] w-full items-center gap-1 border border-p3-border sm:bottom-12 print:hidden',
        'max-w-fit rounded-full px-4 py-2 backdrop-blur-sm dark:border-p3-border-dark'
      )}
    >
      <AnimatedTabs tabs={navItems} />|
      <div className="mr-3 flex items-center gap-10">
        <ThankYou />
        <CircularMenu />
      </div>
    </div>
  );
}
