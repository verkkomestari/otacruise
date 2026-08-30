import Hero from './Hero'
import Intro from './Intro'
import { useRef } from 'react'
import AnimatedSea from './Sea'

const Home = () => {
  const introRef = useRef<HTMLElement | null>(null)

  const executeScroll = () => {
    const element = introRef.current
    if (!element) return

    const startY = window.scrollY
    const navbarOffset = 90
    const targetY =
      element.getBoundingClientRect().top + window.scrollY - navbarOffset
    const duration = 800
    const startTime = performance.now()

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const animateScroll = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)

      window.scrollTo({
        top: startY + (targetY - startY) * eased,
        left: 0,
      })

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return (
    <>
      <Hero executeScroll={executeScroll} />
      <AnimatedSea />
      <Intro introRef={introRef} />
    </>
  )
}

export default Home
