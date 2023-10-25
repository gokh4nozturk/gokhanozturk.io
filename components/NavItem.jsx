'use client'
import React from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import { animated, useTransition } from 'react-spring'

function NavItem({ href, name }) {
  const pathname = usePathname() || '/'
  const isActive = pathname === href

  const transitions = useTransition(name, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, 10px, 0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0px, 0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0, 10px, 0)',
    },
    config: {
      duration: 200,
    },
  })
  return (
    <NextLink
      key={name}
      href={href}
      className={cn(
        isActive
          ? 'font-normal text-gray-800 dark:text-gray-200 underline underline-offset-8 decoration-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'rounded-lg hover:underline hover:underline-offset-8 transition-all mr-4',
      )}
    >
      {transitions((style) => {
        return (
          <animated.span style={style}>
            {name}
          </animated.span>
        )
      })}
    </NextLink>
  )
}

export default NavItem
