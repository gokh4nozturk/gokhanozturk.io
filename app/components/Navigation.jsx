'use client';

import { cn } from '@lib/utils';
import { Bookmark, File, Home, Image, Workflow } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import ThankYou from './ThankYou';

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
  {
    path: '/resume',
    name: 'Resume',
    icon: File,
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(null);

  return (
    <>
      <AnimatePresence>
        {hoveredPath && hoveredPath !== pathname && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-white/60 backdrop-blur-0 dark:bg-neutral-900/60"
          />
        )}
      </AnimatePresence>
      <div className="fixed sm:bottom-10 bottom-6 w-full px-4 z-50 left-1/2 -translate-x-1/2">
        <nav className="mx-auto flex h-[52px] max-w-fit items-center gap-1 rounded-full border border-[#eaeaea] bg-white/80 px-4 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_1px_6px_rgba(0,0,0,0.03)] backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
          {navItems.map(({ path, name, icon }) => {
            const isActive = path === pathname;
            const Icon = icon;
            return (
              <Link
                key={path}
                href={path}
                onMouseEnter={() => setHoveredPath(path)}
                onMouseLeave={() => setHoveredPath(null)}
                className={cn(
                  'relative flex items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors gap-2',
                  isActive
                    ? 'text-neutral-900 dark:text-neutral-100'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:-translate-y-1'
                )}
              >
                <div className="relative z-20 flex items-center gap-2">
                  <Icon className="sm:size-4 size-5" />
                  <span className="hidden sm:block">{name}</span>
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
          |
          <ThankYou />
        </nav>
      </div>
    </>
  );
}
