import Hero from './Hero'
import Intro from './Intro'
import { useRef } from 'react'
import AnimatedSea from './Sea'

const Home = () => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) =>
    window.scrollTo({
      top: ref.current?.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  const introRef = useRef(null)
  const executeScroll = () => scrollToRef(introRef)

  return (
    <>
      <Hero executeScroll={executeScroll} />
      <AnimatedSea />
      <Intro introRef={introRef} />
    </>
  )
}

export default Home
