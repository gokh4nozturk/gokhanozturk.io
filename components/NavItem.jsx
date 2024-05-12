'use client'
import React from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

function NavItem({ href, name }) {
  const pathname = usePathname() || '/'
  const isActive = pathname === href

  return (
    <NextLink
      key={name}
      href={href}
      className={cn(
        isActive
          ? 'font-normal text-gray-950 dark:text-gray-100'
          : 'font-normal text-gray-500 dark:text-gray-400 group',
        'mr-4 transition-all duration-300 ease-in-out',
      )}
    >
      <span className={`
      bg-gradient-to-r from-gray-950 to-gray-950 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all
      duration-500 ease-out dark:from-gray-400 dark:to-gray-400 sm:group-hover:bg-[length:100%_1px]`
      }>
        {name}
      </span>
    </NextLink>
  )
}

export default NavItem
