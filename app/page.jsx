'use client';

// import Techs from 'app/components/Techs'
import About from '@components/About';
import ASCIIText from '@components/reactbits/ASCIIText';
// import DemoAnimation from '@components/DemoAnimation'
import Footer from '@components/Footer';
import { cn } from '@lib/utils';

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between sm:relative">
      <About />
      {/* <Techs /> */}
      {/* <DemoAnimation /> */}
      <ASCIIText
        className={cn(
          '-z-10',
          'fixed bottom-0 left-0 w-full h-96',
          'sm:top-32 sm:left-16 sm:h-full'
        )}
      />
    </div>
  );
}
