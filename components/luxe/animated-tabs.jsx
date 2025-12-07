"use client"; // @NOTE: Add in case you are using Next.js

import { cn } from "@lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
        className={cn(
          "absolute z-10 w-full overflow-hidden [clip-path:inset(0px_100%_0px_0%_round_17px)] [transition:clip-path_0.4s_ease-in-out]",
        )}
        ref={containerRef}
      >
        <div className="relative flex w-full justify-center bg-p3-background dark:bg-p3-background-light">
          {tabs.map(({ name, path, icon }, index) => {
            const Icon = icon;

            return (
              <Link
                className={cn(
                  "flex h-8 items-center px-2 font-medium text-p3-text-dark text-sm sm:px-4 dark:text-p3-text",
                  activeTab !== path && "hover:animate-tilt",
                )}
                href={path}
                key={name}
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
              className={cn(
                "flex h-8 items-center px-2 font-medium text-p3-text-light text-sm sm:px-4 dark:text-p3-text-light",
                activeTab !== path && "hover:animate-tilt",
              )}
              href={path}
              key={name}
              ref={isActive ? activeTabRef : null}
            >
              {Icon && <Icon />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
