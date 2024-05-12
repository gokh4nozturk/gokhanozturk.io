'use client'

import React from 'react'
import NextImage from 'next/image'
import NavItem from '@components/NavItem'

export function Header() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  React.useEffect(() => {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
    setIsDarkTheme(isDarkTheme)
  }, [])

  return (
    <header>
      <div className="flex items-center gap-4">
        <div className="rounded-full">
          <NextImage
            src={isDarkTheme ? 'icons/profile-dark.svg' : 'icons/profile.svg'}
            className="rounded-full"
            width={48}
            height={48}
            alt="Gökhan Öztürk"
          />
        </div>
        <div className="sm:my-10">
          <h1 className="text-xl sm:text-3xl">Gökhan Öztürk</h1>
        </div>
      </div>
      <nav className="my-8 sm:my-10">
        <NavItem href="/" name="home" />
        <NavItem href="/blog" name="blog" />
        <NavItem href="/work" name="work" />
        <NavItem href="/photos" name="photos" />
        {/* <NavItem href="/bookmarks" name="bookmarks" /> */}
      </nav>
    </header>
  )
}
