'use client'

import React from 'react'
import NextImage from 'next/image'
import NavItem from 'app/components/NavItem'
import darkProfile from 'public/icons/profile-dark.svg'
import profile from 'public/icons/profile.svg'
import { DarkModeToggle, useDarkMode } from '@components/ThemeProvider'

export function Header() {
  const [mounted, setMounted] = React.useState(false)
  const isDarkTheme = useDarkMode()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header>
      <div className="flex items-center gap-4">
        <div className="rounded-full">
          {mounted && <NextImage
            src={isDarkTheme ? darkProfile : profile}
            className="rounded-full"
            width={48}
            height={48}
            alt="Gökhan Öztürk"
          />}
        </div>
        <div className="sm:my-10">
          <h1 className="text-xl sm:text-3xl">Gökhan Öztürk</h1>
        </div>
        <div className="ml-auto">
          {mounted && <DarkModeToggle />}
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
