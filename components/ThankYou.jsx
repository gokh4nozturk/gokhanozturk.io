'use client';

import { cn } from '@lib/utils';
import Buymeacoffee from 'components/icons/buymeacoffee';
import React from 'react';

export default function ThankYou({ className }) {
  return (
    <a
      href="https://www.buymeacoffee.com/gokhanozturk"
      className={cn(
        'flex items-center ml-1 -mr-2.5',
        'rounded-full no-underline transition',
        'bg-p3-accent text-p3-text transition-all',
        'dark:bg-p3-accent/40 dark:text-p3-text-light',
        className,
        'hover:animate-tada',
        'cursor-none opacity-60'
      )}
      aria-disabled="true"
      onClick={(e) => e.preventDefault()}
    >
      <span
        title="Coming soon!!!"
        className="flex sm:size-10 size-10 shrink-0 items-center justify-center rounded-full bg-black/10"
      >
        <Buymeacoffee />
      </span>
    </a>
  );
}
