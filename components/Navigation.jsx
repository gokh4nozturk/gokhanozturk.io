'use client';

import useHoverPosition from '@hooks/use-hover-position';
import { cn } from '@lib/utils';
import { Bookmark, Briefcase, FileUser, Home, Image } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react';
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
  const pathname = usePathname();
  const navRef = useRef(null);
  const { hoveredId, setHoveredId, hoverPosition, itemsRef } = useHoverPosition(navItems, navRef);

  return (
    <>
      {/* <AnimatePresence>
        {hoveredId && hoveredId !== pathname && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-white/60 backdrop-blur-0 dark:bg-neutral-900/60"
          />
        )}
      </AnimatePresence> */}
      <div className="fixed sm:bottom-8 bottom-6 w-full px-4 z-50 left-1/2 -translate-x-1/2">
        <nav
          ref={navRef}
          className="relative mx-auto flex h-[52px] max-w-fit items-center gap-1 rounded-full border border-[#eaeaea] px-4 py-2 backdrop-blur-md dark:border-neutral-800"
        >
          <motion.div
            className="absolute bg-neutral-200 dark:bg-neutral-800 rounded-full"
            animate={{
              x: hoverPosition.x,
              y: hoverPosition.y,
              width: hoverPosition.width,
              height: hoverPosition.height,
              opacity: hoveredId ? 1 : 0,
            }}
            transition={{
              type: 'spring',
            }}
          />
          {navItems.map(({ path, name, icon }, index) => {
            const isActive = path === pathname;
            const Icon = icon;
            return (
              <Link
                key={path}
                href={path}
                ref={(el) => {
                  if (itemsRef.current) {
                    itemsRef.current[index] = el;
                  }
                }}
                onMouseEnter={() => setHoveredId(path)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  'relative flex items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors gap-2',
                  isActive
                    ? 'text-neutral-900 dark:text-neutral-100'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                )}
              >
                <div className="relative z-20 flex items-center gap-2">
                  <Icon className="sm:size-6 size-5" />
                  {/* <span className="hidden sm:block">{name}</span> */}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="navigation-pill"
                    className="absolute inset-0 z-10 rounded-full bg-neutral-200 dark:bg-neutral-800"
                    transition={{
                      type: 'spring',
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
