"use client";

import { cn } from "@lib/utils";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import * as React from "react";
import { animated, useSpring } from "react-spring";

export function DarkModeToggle() {
  const { setTheme, theme, themes } = useTheme();

  const [styles, api] = useSpring(
    () => ({
      left: theme === "light" ? "4px" : "unset",
      right: theme === "system" ? "4px" : theme === "dark" ? "32px" : "unset",
      transition: "left 300ms ease-out, right 300ms ease-out",
      width: 0,
    }),
    [],
  );

  React.useEffect(() => {
    api.start({
      immediate: true,
      left: theme === "light" ? "4px" : "unset",
      right: theme === "system" ? "4px" : theme === "dark" ? "32px" : "unset",
      width: 24,
    });

    setTheme(theme);
  }, [api, setTheme, theme]);

  const handleThemeChange = (t) => {
    if (t && t !== theme) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          setTheme(t);

          api.start({
            to: async (animate) => {
              await animate({ width: theme === "dark" ? 24 : t === "dark" ? 32 : 64 });

              api.set({
                left: t === "light" ? "4px" : t === "dark" && theme === "system" ? "32px" : "unset",
                right:
                  t === "system" ? "4px" : t === "dark" && theme === "light" ? "32px" : "unset",
              });

              await animate({ width: 24 });
            },
          });
        });
      } else {
        setTheme(t);

        api.start({
          to: async (animate) => {
            await animate({ width: theme === "dark" ? 24 : t === "dark" ? 32 : 64 });

            api.set({
              left: t === "light" ? "4px" : t === "dark" && theme === "system" ? "32px" : "unset",
              right: t === "system" ? "4px" : t === "dark" && theme === "light" ? "32px" : "unset",
            });

            await animate({ width: 24 });
          },
        });
      }
    }
  };

  const handlePointerEnter = (t) => {
    if (theme === t) return;

    api.start({
      width: theme === "dark" ? 24 : t === "dark" ? 32 : 64,
    });
  };
  const handlePointerOut = (t) => {
    if (theme === t) return;

    api.start({
      width: 24,
    });
  };

  const themeIcon = {
    dark: (
      <MoonIcon className="pointer-events-none size-4 stroke-2 text-p3-text-light dark:text-p3-text-dark" />
    ),
    light: (
      <SunIcon className="pointer-events-none size-4 stroke-2 text-p3-text-light dark:text-p3-text-dark" />
    ),
    system: (
      <MonitorIcon className="pointer-events-none size-4 stroke-2 text-p3-text-light dark:text-p3-text-dark" />
    ),
  };

  return (
    <animated.div
      aria-label="Toggle light/dark mode"
      className="relative z-0 flex gap-1 rounded-md border border-p3-accent-dark p-1 backdrop-blur-sm dark:border-p3-accent"
    >
      {themes.map((t) => (
        <animated.button
          aria-checked={theme === t}
          aria-label={t}
          className={cn(
            "z-[1] rounded-full p-1 transition-all duration-300 ease-in-out focus:outline-none",
            `${theme === t ? "bg-blue-300" : "bg-gray-200 dark:bg-gray-500"}`,
          )}
          key={t}
          onClick={() => handleThemeChange(t)}
          onPointerEnter={() => handlePointerEnter(t)}
          onPointerOut={() => handlePointerOut(t)}
          title={t}
          type="button"
        >
          <span className="sr-only">{t}</span>
          {themeIcon[t]}
        </animated.button>
      ))}
      <animated.span
        className={cn("absolute top-1 bottom-0 z-0 h-6 rounded-full bg-blue-200")}
        style={styles}
      />
    </animated.div>
  );
}

export function useDarkMode() {
  const { resolvedTheme } = useTheme();
  return resolvedTheme === "dark";
}

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
