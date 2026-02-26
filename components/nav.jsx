"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef } from "react";

export default function TOC({ headings, ...props }) {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const activeTabElementRef = useRef(null);

  const active = useMemo(() => {
    return headings.find((h) => h.path === pathname)?.id;
  }, [headings, pathname]);

  const activeIndex = useMemo(() => {
    return headings.findIndex((h) => h.id === active);
  }, [headings, active]);

  const getDistanceFromActive = (index) => {
    if (activeIndex === -1) return Infinity;
    return Math.abs(index - activeIndex);
  };

  const getOpacityByDistance = (distance) => {
    if (distance === 0) return 1;
    if (distance === 1) return 0.6;
    if (distance === 2) return 0.4;
    return 0.3;
  };

  const _getPaddingByDistance = (distance) => {
    if (distance === 0) return 8;
    if (distance === 1) return 16;
    if (distance === 2) return 24;
    return 40;
  };

  useEffect(() => {
    const container = containerRef.current;

    if (active && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetTop, offsetHeight } = activeTabElement;
        const containerHeight = container.offsetHeight;

        const clipTop = offsetTop;
        const clipBottom = offsetTop + offsetHeight;

        const clipTopPercent = ((clipTop / containerHeight) * 100).toFixed(2);
        const clipBottomPercent = (
          100 -
          (clipBottom / containerHeight) * 100
        ).toFixed(2);

        container.style.clipPath = `inset(${clipTopPercent}% 0 ${clipBottomPercent}% 0 round 4px)`;
      }
    }
  }, [active]);

  return (
    <nav
      {...props}
      aria-label="Table Of Contents"
      className="relative"
      id="toc"
    >
      {/* Base list - normal opacity */}
      <ol className="space-y-4 font-[425] text-sm">
        {headings.map((h, index) => {
          const distance = getDistanceFromActive(index);
          const opacity = getOpacityByDistance(distance);

          return (
            <li
              className="transition-all duration-300 hover:opacity-70"
              key={h.id}
              ref={active === h.id ? activeTabElementRef : null}
              style={{ opacity }}
            >
              <Link href={h.path}>{h.title}</Link>
            </li>
          );
        })}
      </ol>

      {/* Overlay list - full opacity, clipped to active item */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-duration-400 transition-[clip-path] ease-out"
        ref={containerRef}
        style={{ clipPath: "inset(0 0 100% 0 round 4px)" }}
      >
        <ol className="space-y-4 font-[425] text-sm">
          {headings.map((h, _index) => {
            return (
              <li className="opacity-100" key={h.id}>
                <Link href={`/${h.id}`} tabIndex={-1}>
                  {h.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
