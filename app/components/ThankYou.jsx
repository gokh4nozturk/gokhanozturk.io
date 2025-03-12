'use client';

import Buymeacoffee from '@components/icons/buymeacoffee';
import { cn } from '@lib/utils';
import React from 'react';

export default function ThankYou({ className }) {
  return (
    <a
      href="https://www.buymeacoffee.com/gokhanozturk"
      className={cn(
        'flex items-center ml-1 -mr-2.5',
        'rounded-full no-underline transition',
        'bg-amber-100 text-amber-900 transition-all',
        'hover:text-amber-950',
        'dark:bg-amber-300/10 dark:text-amber-200',
        'dark:hover:text-amber-50',
        className
      )}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black/10">
        <Buymeacoffee />
      </span>
    </a>
  );
}
