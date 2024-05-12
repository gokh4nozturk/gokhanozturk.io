import React from 'react'

export default function AnimatedLink({ children, color = 'black', href = '#' }) {
  const textHoverColor = {
    black: 'hover:text-gray-800',
    rockads: 'hover:text-[#007CE1]',
    teknasyon: 'hover:text-[#009cfb]',
  }[color]
  const fromColor = {
    black: 'from-gray-800',
    rockads: 'from-[#007CE1]',
    teknasyon: 'from-[#009cfb]',
  }[color]
  const toColor = {
    black: 'to-gray-800',
    rockads: 'to-[#007CE1]',
    teknasyon: 'to-[#009cfb]',
  }[color]

  return (
    <a
      className={`group ${textHoverColor} transition-all duration-300 ease-in-out`}
      href={href}
      target="_blank"
    >
      <span className={`
      bg-gradient-to-r ${fromColor} ${toColor} bg-[length:0%_1px] bg-left-bottom bg-no-repeat 
      transition-all duration-500 ease-out group-hover:bg-[length:100%_1px]`
      }>
        {children}
      </span>
    </a>
  )
}
