"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef } from "react";

export default function TOC({ headings, ...props }) {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const activeTabElementRef = useRef(null);

  const active = useMemo(() => {
    return headings.find((h) => `/${h.id}` === pathname)?.id;
  }, [headings, pathname]);

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
        {headings.map((h) => (
          <li
            className="opacity-40 transition-opacity hover:opacity-70 dark:opacity-50"
            key={h.id}
            ref={active === h.id ? activeTabElementRef : null}
          >
            <Link href={`/${h.id}`}>{h.title}</Link>
          </li>
        ))}
      </ol>

      {/* Overlay list - full opacity, clipped to active item */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-[clip-path] duration-300 ease-out"
        ref={containerRef}
        style={{ clipPath: "inset(0 0 100% 0 round 4px)" }}
      >
        <ol className="space-y-4 font-[425] text-sm">
          {headings.map((h) => (
            <li className="opacity-100" key={h.id}>
              <Link href={`/${h.id}`} tabIndex={-1}>
                {h.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
