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
    <header className='transition-all'>
      <div className="flex items-center gap-4">
        <div className="rounded-full">
          {mounted
            ? (<div className="grid size-16 place-items-center rounded-full border bg-white dark:bg-slate-50 md:size-20">
              <NextImage
                src={profile}
                priority
                loading='eager'
                quality={100}
                className="-mt-2 rounded-full"
                width={120}
                height={120}
                alt="Gökhan Öztürk"
              />
            </div>)
            : (<div className="size-16 place-items-center rounded-full border bg-white dark:bg-slate-50 md:size-20">
              <div className="size-full animate-pulse rounded-full bg-gray-200 dark:bg-slate-50" />
            </div>)}
        </div>
        <div className="sm:my-10">
          <NameTransition />
        </div>
        <div className="ml-auto">
          {mounted ? <DarkModeToggle /> : <div className="h-8 w-[88px] animate-pulse rounded-md bg-gray-200 dark:bg-slate-50" />}
        </div>
      </div>
      <nav className="my-3 sm:my-6 flex items-center">
        <NavItem href="/" name="home" />
        {/* <NavItem href="/blog" name="blog" /> */}
        <NavItem href="/photos" name="photos" />
        <NavItem href="/works" name="works" />
        <NavItem href="/bookmarks" name="bookmarks" />
        <NavItem href="/resume" name="cv" />
      </nav>
    </header>
  )
}
