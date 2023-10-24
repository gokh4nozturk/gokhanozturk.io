'use client'

import NavItem from "./NavItem"

const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
export const Header = () => {
  return (
    <header>
      <div className="flex items-center gap-4">
        <div className="rounded-full">
          <img
            src={isDarkTheme ? 'icons/profile-dark.svg' : 'icons/profile.svg'}
            className="rounded-full"
            width={48}
            height={48}
            alt="Gökhan Öztürk"
          />
        </div>
        <div className="sm:my-10">
          <h1 className="sm:text-3xl text-xl">Gökhan Öztürk</h1>
        </div>
      </div>
      <nav className="sm:my-10 my-8">
        <NavItem href="/" name="home" />
        <NavItem href="/blog" name="blog" />
        <NavItem href="/projects" name="projects" />
        <NavItem href="/photos" name="photos" />
        {/* <NavItem href="/bookmarks" name="bookmarks" /> */}
      </nav>
    </header>
  )
}
