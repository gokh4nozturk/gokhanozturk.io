"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

export default function TOC({ headings, ...props }) {
  const pathname = usePathname();

  const active = useMemo(() => {
    return headings.find((h) => `/${h.id}` === pathname)?.id;
  }, [headings, pathname]);

  return (
    <nav {...props} aria-label="Table Of Contents" id="toc">
      <ol className="space-y-4 font-[425] text-sm">
        {headings.map((h) => (
          <li
            className="opacity-40 transition-opacity hover:opacity-70 data-[active]:opacity-100 dark:opacity-50"
            data-active={active === h.id || undefined}
            key={h.id}
          >
            <Link href={`/${h.id}`}>{h.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
