import Hero from './Hero';
import Intro from './Intro';
import { useRef } from 'react';

// Home page ref.current.offsetTop

const Home = () => {
  const scrollToRef = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
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
