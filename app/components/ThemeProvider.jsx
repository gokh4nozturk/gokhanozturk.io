'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'

import cn from 'classnames'
import { animated, useSpring } from 'react-spring'

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function DarkModeToggle() {
  const { setTheme, theme, themes } = useTheme()

  const [styles, api] = useSpring(() => ({
    width: 0,
    left: theme === 'light' ? '4px' : 'unset',
    right: theme === 'system' ? '4px' : theme === 'dark' ? '24px' : 'unset',
    transition: 'left 400ms ease-out, right 400ms ease-out',
  }), [])

  React.useEffect(() => {
    api.start({
      width: 16,
      left: theme === 'light' ? '4px' : 'unset',
      right: theme === 'system' ? '4px' : theme === 'dark' ? '24px' : 'unset',
      immediate: true,
    })

    setTheme(theme)
  }, [])

  const handleThemeChange = (t) => {
    if (t && t !== theme) {
      setTheme(t)

      api.start({
        to: async (animate) => {
          await animate({ width: theme === 'dark' ? 16 : t === 'dark' ? 22 : 42 })

          api.set({
            left: t === 'light' ? '4px' : t === 'dark' && theme === 'system' ? '24px' : 'unset',
            right: t === 'system' ? '4px' : t === 'dark' && theme === 'light' ? '24px' : 'unset',
          })

          await animate({ width: 16 })
        },
      })
    }
  }

  const handlePointerEnter = (t) => {
    if (theme === t)
      return

    api.start({
      width: theme === 'dark' ? 16 : t === 'dark' ? 22 : 42,
    })
  }
  const handlePointerOut = (t) => {
    if (theme === t)
      return

    api.start({
      width: 16,
    })
  }

  return (
    <animated.div
      aria-label="Toggle light/dark mode"
      className='relative flex gap-1 rounded-md bg-yellow-50 p-1 dark:bg-gray-800'>
      {themes.map(t => (
        <animated.button
          key={t}
          aria-checked={theme === t}
          aria-label={t}
          title={t}
          role='radio'
          type="button"
          className={cn(
            'rounded-full p-2 focus:outline-none transition-all duration-300 ease-in-out z-[1]',
            `${theme === t
              ? 'bg-blue-200 dark:bg-gray-900 '
              : 'bg-gray-200 dark:bg-gray-500'}`,
          )}
          onClick={() => handleThemeChange(t)}
          onPointerEnter={() => handlePointerEnter(t)}
          onPointerOut={() => handlePointerOut(t)}
        />
      ))}
      <animated.span
        style={styles}
        className={cn(
          'absolute top-1 h-4 bottom-0 rounded-full z-0 bg-blue-200 dark:bg-gray-900',
        )}
      />
    </animated.div>
  )
}

export function useDarkMode() {
  const { resolvedTheme } = useTheme()
  return resolvedTheme === 'dark'
}
