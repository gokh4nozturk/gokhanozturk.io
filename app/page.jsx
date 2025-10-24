'use client';

import About from '@components/About';
import { AppleHelloEnglishEffect } from '@components/apple-hello-effect';
import { cn } from '@lib/utils';

export default function Home() {
  return (
    <div className='flex h-full flex-col justify-between sm:relative'>
      <About />
      {/* <ASCIIText
        className={cn(
          '-z-10',
          'fixed bottom-0 left-0 h-96 w-full',
          'sm:top-32 sm:left-16 sm:h-full'
        )}
      /> */}

      <AppleHelloEnglishEffect
        className={cn('-translate-x-1/2 -translate-y-2/3 fixed top-2/3 left-1/2 sm:h-32')}
      />
    </div>
  );
}
