import { useEffect } from 'react'
import { animated, useTrail } from 'react-spring'
import styled from 'styled-components'
import otacruise from '../assets/images/otacruise.png'
import CONSTS from '../consts'
import { formatDateRange } from '../helpers/formatDate'

const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.cloud};
  color: ${({ theme }) => theme.colors.blue};

  /* Full screen height + responsive mobile address bar support */
  min-height: 100vh;
  min-height: 100dvh;
  box-sizing: border-box;

  padding: clamp(2rem, 5vh, 4rem) 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroContent = styled.div`
  width: min(100%, 1140px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  z-index: 1;
`

const HeroLogo = styled.img`
  width: min(90vw, 750px);
  height: auto;
`

const HeroMotto = styled.p`
  margin: 0;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  line-height: 1.4;
  padding-inline: 1rem;
`

const HeroDate = styled.p`
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: bold;
`

const HeroCTA = styled.button`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 10px;
  padding: 0.5rem 1.25rem;
  color: ${({ theme }) => theme.colors.blue};
  background: transparent;
  font-size: 1.25rem;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.cloud};
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`

const MottoDivider = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const HeroMascot = styled.img`
  position: absolute;
  bottom: 5rem;
  left: clamp(-40px, 2vw, 40px);
  width: clamp(140px, 25vw, 320px);
  height: auto;
  pointer-events: none;

  @media (max-width: 480px) {
    display: none;
  }
`

interface HeroProps {
  executeScroll: () => void
}

const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3)

const Hero = ({ executeScroll }: HeroProps) => {
  const [trail, trailApi] = useTrail(3, () => ({
    from: { opacity: 0, y: 40 },
    to: { opacity: 0, y: 40 },
    config: { duration: 400, easing: easeOut },
  }))

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      trailApi.start({
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 },
        reset: true,
        config: { duration: 400, easing: easeOut },
      })
    })

    return () => cancelAnimationFrame(frame)
  }, [trailApi])

  return (
    <HeroWrapper>
      <HeroContent>
        <animated.div
          style={{
            opacity: trail[0].opacity,
            transform: trail[0].y.to((y) => `translateY(${y}px)`),
          }}
        >
          <HeroLogo src={otacruise} alt='Otacruise' />
        </animated.div>

        <animated.div
          style={{
            opacity: trail[1].opacity,
            transform: trail[1].y.to((y) => `translateY(${y}px)`),
          }}
        >
          <MottoDivider>
            <HeroMotto>
              Finland's biggest student cruise for Aalto University students!
            </HeroMotto>
            <HeroDate>
              {formatDateRange(CONSTS.DEPARTURE_DATE, CONSTS.ARRIVAL_DATE)}
            </HeroDate>
          </MottoDivider>
        </animated.div>

        <animated.div
          style={{
            opacity: trail[2].opacity,
            transform: trail[2].y.to((y) => `translateY(${y}px)`),
          }}
        >
          <HeroCTA type='button' onClick={executeScroll}>
            Read more!
          </HeroCTA>
        </animated.div>
      </HeroContent>
    </HeroWrapper>
  )
}

export default Hero
