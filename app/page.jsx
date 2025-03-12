'use client';

// import Techs from 'app/components/Techs'
import About from '@components/About';
import ASCIIText from '@components/reactbits/ASCIIText';
// import DemoAnimation from '@components/DemoAnimation'
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <About />
      {/* <Techs /> */}
      {/* <DemoAnimation /> */}
      <ASCIIText />
      <Footer />
    </>
  );
}
