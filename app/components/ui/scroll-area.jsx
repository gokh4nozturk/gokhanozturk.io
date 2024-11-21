'use client'

import cn from 'classnames'

import { Corner, Root, ScrollAreaScrollbar, ScrollAreaThumb, Viewport } from '@radix-ui/react-scroll-area'

export function ScrollArea({ children, className }) {
  return (
  <Root className={cn('relative overflow-hidden', className)}>
    <Viewport className="size-full rounded-[inherit]">
      {children}
    </Viewport>
    <Scrollbar />
    <Corner />
  </Root>
  )
}

export function Scrollbar({ orientation = 'vertical' }) {
  return (
  <ScrollAreaScrollbar
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical'
        && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal'
        && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
    )}
  >
    <ScrollAreaThumb className="relative flex-1 rounded-full" />
  </ScrollAreaScrollbar>
  )
}
