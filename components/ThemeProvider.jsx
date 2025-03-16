'use client';

import { cn } from '@lib/utils';
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import * as React from 'react';
import { animated, useSpring } from 'react-spring';

export function DarkModeToggle() {
  const { setTheme, theme, themes } = useTheme();

  const [styles, api] = useSpring(
    () => ({
      width: 0,
      left: theme === 'light' ? '4px' : 'unset',
      right: theme === 'system' ? '4px' : theme === 'dark' ? '32px' : 'unset',
      transition: 'left 300ms ease-out, right 300ms ease-out',
    }),
    []
  );

  React.useEffect(() => {
    api.start({
      width: 24,
      left: theme === 'light' ? '4px' : 'unset',
      right: theme === 'system' ? '4px' : theme === 'dark' ? '32px' : 'unset',
      immediate: true,
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
              await animate({ width: theme === 'dark' ? 24 : t === 'dark' ? 32 : 64 });

              api.set({
                left: t === 'light' ? '4px' : t === 'dark' && theme === 'system' ? '32px' : 'unset',
                right:
                  t === 'system' ? '4px' : t === 'dark' && theme === 'light' ? '32px' : 'unset',
              });

              await animate({ width: 24 });
            },
          });
        });
      } else {
        setTheme(t);

        api.start({
          to: async (animate) => {
            await animate({ width: theme === 'dark' ? 24 : t === 'dark' ? 32 : 64 });

            api.set({
              left: t === 'light' ? '4px' : t === 'dark' && theme === 'system' ? '32px' : 'unset',
              right: t === 'system' ? '4px' : t === 'dark' && theme === 'light' ? '32px' : 'unset',
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
      width: theme === 'dark' ? 24 : t === 'dark' ? 32 : 64,
    });
  };
  const handlePointerOut = (t) => {
    if (theme === t) return;

    api.start({
      width: 24,
    });
  };

  const themeIcon = {
    light: <SunIcon className="pointer-events-none size-4 stroke-2 text-p3-text-dark" />,
    dark: <MoonIcon className="pointer-events-none size-4 stroke-2 text-p3-text-dark" />,
    system: <MonitorIcon className="pointer-events-none size-4 stroke-2 text-p3-text-dark" />,
  };

  return (
    <animated.div
      aria-label="Toggle light/dark mode"
      className="relative z-0 flex gap-1 rounded-md bg-p3-background-light p-1 dark:bg-p3-background-light"
    >
      {themes.map((t) => (
        <animated.button
          key={t}
          aria-checked={theme === t}
          aria-label={t}
          title={t}
          type="button"
          className={cn(
            'rounded-full p-1 focus:outline-none transition-all duration-300 ease-in-out z-[1]',
            `${theme === t ? 'bg-p3-accent dark:bg-p3-accent-dark' : 'bg-p3-background dark:bg-p3-background-dark'}`
          )}
          onClick={() => handleThemeChange(t)}
          onPointerEnter={() => handlePointerEnter(t)}
          onPointerOut={() => handlePointerOut(t)}
        >
          <span className="sr-only">{t}</span>
          {themeIcon[t]}
        </animated.button>
      ))}
      <animated.span
        style={styles}
        className={cn(
          'absolute top-1 h-6 bottom-0 rounded-full z-0 bg-p3-accent-light dark:bg-p3-accent'
        )}
      />
    </animated.div>
  );
}

export function useDarkMode() {
  const { resolvedTheme } = useTheme();
  return resolvedTheme === 'dark';
}

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
