import Hero from './Hero';
import Intro from './Intro';
import { useRef } from 'react';

// Home page

const Home = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const introRef = useRef(null);
  const executeScroll = () => scrollToRef(introRef);

  return (
    <>
      <Hero executeScroll={executeScroll} />
      <Intro introRef={introRef} />
    </>
  );
};

export default Home;
