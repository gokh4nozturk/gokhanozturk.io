'use client';

// import Techs from 'app/components/Techs'
import About from '@components/About';
import ASCIIText from '@components/reactbits/ASCIIText';
// import DemoAnimation from '@components/DemoAnimation'
import Footer from '@components/Footer';
import { cn } from '@lib/utils';

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-between sm:relative">
      <About />
      {/* <Techs /> */}
      {/* <DemoAnimation /> */}
      <ASCIIText
        className={cn(
          '-z-10',
          'fixed bottom-0 left-0 h-96 w-full',
          'sm:top-32 sm:left-16 sm:h-full'
        )}
      />
    </div>
  );
}
