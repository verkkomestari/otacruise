import { useEffect, useState, type RefObject } from 'react'
import styled, { css, keyframes } from 'styled-components'
import HomeCards from './HomeCards'

// Aloitussivun esittelyosio

interface IntroProps {
  introRef: RefObject<HTMLElement>
}

// Upward fade animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const IntroSection = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: clamp(3.5rem, 8vw, 6rem) 1.5rem;
  scroll-margin-top: 90px;
  overflow: hidden;
  text-align: center;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`

// Welcome card: starts hidden, triggers animation when $isVisible is true
const IntroCopy = styled.div<{ $isVisible: boolean }>`
  width: min(100%, 720px);
  margin: 0 auto clamp(2.5rem, 5vw, 4rem);
  padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.25);
  opacity: 0;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeInUp} 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    `}
`

const IntroTitle = styled.h2`
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const IntroText = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;
  opacity: 0.92;
`

// Cards wrapper: triggers with a slight stagger once visible
const CardsWrapper = styled.div<{ $isVisible: boolean }>`
  opacity: 0;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeInUp} 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.4s;
    `}
`

const Intro = ({ introRef }: IntroProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const target = introRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(target) // Animate once
        }
      },
      {
        threshold: 0.15, // Triggers when 15% of the section is in view
      },
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [introRef])

  return (
    <IntroSection ref={introRef} id='intro'>
      <IntroCopy $isVisible={isVisible}>
        <IntroTitle>Ahoy, Matey!</IntroTitle>
        <IntroText>
          Want to step on an unforgettable adventure across the Baltic Sea?
          Otacruise will once again welcome all of Otaniemi to a ship full of
          entertainment. The cruise will sail from Helsinki to Stockholm and
          back, carrying more than 2,500 party-craving students.
        </IntroText>
      </IntroCopy>

      <CardsWrapper $isVisible={isVisible}>
        <HomeCards />
      </CardsWrapper>
    </IntroSection>
  )
}

export default Intro
