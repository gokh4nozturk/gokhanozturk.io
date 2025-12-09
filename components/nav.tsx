"use client";
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
import { useEffect, useState } from "react";

const tops = new WeakMap<any, number>();

function getTop(id) {
  const el = document.getElementById(id);
  return el ? el.getBoundingClientRect().top + window.scrollY : 0;
}

export default function TOC({ headings, ...props }) {
  const [active, setActive] = useState(headings[0]?.id);

  useEffect(() => {
    let scrollPt = 0;
    function onResize() {
      for (const heading of headings) {
        tops.set(heading, getTop(heading.id));
      }
      const rootStyle = window.getComputedStyle(document.documentElement);
      scrollPt = parseFloat(
        rootStyle.getPropertyValue("scroll-padding-top").match(/[\d.]+/)?.[0]!,
      );
    }
    window.addEventListener("resize", onResize);
    onResize();

    function onScroll() {
      // let fontSize = parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? 16)
      // scrollMt = scrollMt * fontSize

      // let sortedHeadings = headings.sort((a, b) => tops.get(a)! - tops.get(b)!)
      const top = window.scrollY; // + scrollMt + 1
      const current =
        headings.findLast((h) => top >= tops.get(h)! - scrollPt - 1) ??
        headings[0];
      setActive(current!.id);
    }

    window.addEventListener("scroll", onScroll, {
      capture: true,
      // passive: true
    });
    onScroll();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll, {
        capture: true,
      });
    };
  }, []);

  return (
    <nav {...props} aria-label="Table Of Contents" id="toc">
      <ol className="space-y-4 font-[425] text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              className="opacity-40 transition-opacity hover:opacity-70 data-[active]:opacity-100 dark:opacity-50"
              data-active={h.id === active || undefined}
              href={`/${h.id}`}
            >
              {h.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
