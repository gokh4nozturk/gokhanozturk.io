'use client'; // @NOTE: Add in case you are using Next.js

import { cn } from '@lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
export function AnimatedTabs({ tabs }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);
  const containerRef = useRef(null);
  const activeTabRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container && activeTab) {
      const activeTabElement = activeTabRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;

        container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% round 17px)`;
      }
    }
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center rounded-full">
      <div
        ref={containerRef}
        className={cn(
          'absolute z-10 w-full overflow-hidden [clip-path:inset(0px_100%_0px_0%_round_17px)] [transition:clip-path_0.4s_ease-in-out]'
        )}
      >
        <div className="relative flex w-full justify-center bg-p3-background dark:bg-p3-background-light">
          {tabs.map(({ name, path, icon }, index) => {
            const Icon = icon;

            return (
              <Link
                href={path}
                key={name}
                className={cn(
                  'flex h-8 items-center sm:px-4 px-2 text-sm font-medium text-p3-text-dark dark:text-p3-text',
                  activeTab !== path && 'hover:animate-tilt'
                )}
                tabIndex={-1}
              >
                {Icon && <Icon />}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="relative flex w-full justify-center">
        {tabs.map(({ name, path, icon }) => {
          const isActive = activeTab === path;
          const Icon = icon;

          return (
            <Link
              href={path}
              key={name}
              ref={isActive ? activeTabRef : null}
              className={cn(
                'flex h-8 items-center sm:px-4 px-2 text-sm font-medium text-p3-text-light dark:text-p3-text-light',
                activeTab !== path && 'hover:animate-tilt'
              )}
            >
              {Icon && <Icon />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
