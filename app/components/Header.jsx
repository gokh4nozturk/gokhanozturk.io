'use client'

import React from 'react'
import NextImage from 'next/image'
import NavItem from 'app/components/NavItem'
import profile from 'public/icons/profile.svg'
import { DarkModeToggle } from '@components/ThemeProvider'
import { NameTransition } from '@components/Name'

export function Header() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header>
      <div className="flex items-center gap-4">
        <div className="rounded-full">
          {mounted
          && <div className="grid size-16 place-items-center rounded-full border bg-yellow-50/70 dark:bg-slate-50 md:size-20">
            <NextImage
              src={profile}
              className="-mt-2 rounded-full"
              width={120}
              height={120}
              alt="Gökhan Öztürk"
            />
          </div>}
        </div>
        <div className="sm:my-10">
          <NameTransition />
        </div>
        <div className="ml-auto">
          {mounted && <DarkModeToggle />}
        </div>
      </div>
      <nav className="my-8 sm:my-10">
        <NavItem href="/" name="home" />
        {/* <NavItem href="/blog" name="blog" /> */}
        <NavItem href="/photos" name="photos" />
        <NavItem href="/works" name="works" />
        <NavItem href="/bookmarks" name="bookmarks" />
      </nav>
    </header>
  )
}
