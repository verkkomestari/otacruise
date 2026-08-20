import styled from 'styled-components'
import otacruise from '../assets/images/otacruise.png'
import merihevonen from '../assets/images/merihevonen.png'
import CONSTS from '../consts'

const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.cloud};
  color: #146555;

  /* Full screen height + responsive mobile address bar support */
  min-height: 100vh;
  min-height: 100dvh;
  box-sizing: border-box;

  padding: clamp(2rem, 5vh, 4rem) 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .hero-content {
    width: min(100%, 1140px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    z-index: 1;
  }

  .hero-logo {
    width: min(90vw, 750px);
    height: auto;
  }

  .hero-motto {
    margin: 0;
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    line-height: 1.4;
    padding-inline: 1rem;
  }

  .hero-date {
    margin: 0;
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: bold;
  }

  .hero-cta {
    display: inline-block;
    border: 2px solid #166555;
    border-radius: 10px;
    padding: 0.5rem 1.25rem;
    color: #166555;
    background: transparent;
    font-size: 1.25rem;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover,
    &:focus-visible {
      color: #d7c3f1;
      background-color: #166555;
    }

    @media (max-width: 575px) {
      display: none;
    }
  }

  .hero-mascot {
    position: absolute;
    bottom: 5rem;
    left: clamp(-40px, 2vw, 40px);
    width: clamp(140px, 25vw, 320px);
    height: auto;
    pointer-events: none;

    @media (max-width: 480px) {
      display: none;
    }
  }
`

interface HeroProps {
  executeScroll: () => void
}

const Hero = ({ executeScroll }: HeroProps) => {
  return (
    <HeroWrapper>
      <div className='hero-content'>
        <img className='hero-logo' src={otacruise} alt='Otacruise' />

        <div>
          <p className='hero-motto'>
            Finland's biggest student cruise for Aalto University students!
          </p>
          <p className='hero-date'>
            {CONSTS.DEPARTURE_DATE.getDate()} -{' '}
            {CONSTS.ARRIVAL_DATE.toLocaleDateString()}
          </p>
        </div>

        <button type='button' className='hero-cta' onClick={executeScroll}>
          Read more!
        </button>
        <img className='hero-mascot' src={merihevonen} alt='' />
      </div>
    </HeroWrapper>
  )
}

export default Hero
