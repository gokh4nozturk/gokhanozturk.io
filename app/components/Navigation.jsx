'use client';

import { cn } from '@lib/utils';
import { Bookmark, Home, Image, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
    icon: Workflow,
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    icon: Bookmark,
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="fixed sm:bottom-10 bottom-6 w-full px-4 z-50 left-1/2 -translate-x-1/2">
      <nav className="mx-auto flex h-[52px] max-w-fit items-center gap-1 rounded-full border border-[#eaeaea] bg-white/80 px-4 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_1px_6px_rgba(0,0,0,0.03)] backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
        {navItems.map(({ path, name, icon }) => {
          const isActive = path === pathname;
          const Icon = icon;
          return (
            <Link
              key={path}
              href={path}
              className={cn(
                'relative flex items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors gap-2',
                isActive
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
              )}
            >
              <div className="relative z-20 flex items-center gap-2">
                <Icon className="w-4 h-4" />
                {name}
              </div>
              {isActive && (
                <motion.div
                  layoutId="navigation-pill"
                  className="absolute inset-0 z-10 rounded-full bg-neutral-100 dark:bg-neutral-800"
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 32,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
