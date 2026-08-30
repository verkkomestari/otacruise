import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import pelastusrengas from '../assets/images/pelastusrengas.png'

const brandBounce = `
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(0.72);
  }
  45% {
    transform: scale(1.22);
  }
  65% {
    transform: scale(0.94);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

// Navigointipalkki sivun yläreunassa

const Navigation = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.blue};
`

const NavContainer = styled.div`
  width: min(100% - 2rem, 70rem);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 85px;
`

const Brand = styled.button<{
  $isBouncing: boolean
  $isSpinning: boolean
  $bounceDuration: number
}>`
  justify-self: start;
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  transform-origin: center center;
  will-change: transform;
  animation: ${({ $isBouncing, $isSpinning, $bounceDuration }) => {
    if ($isSpinning) return 'brandSpin 1.2s linear infinite'
    if ($isBouncing)
      return `brandBounce ${$bounceDuration}s cubic-bezier(0.2, 0.8, 0.2, 1)`
    return 'none'
  }};

  img {
    height: 62px;
    width: auto;
    display: block;
    pointer-events: none;
  }

  @keyframes brandBounce {
    ${brandBounce}
  }

  @keyframes brandSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const BrandWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`

const BrandCounter = styled.span<{ $isUnlocking: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.2rem;
  height: 1.5rem;
  padding: 0 0.4rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: ${({ theme }) => theme.colors.egg};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  transform: translateY(-4px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  animation: ${({ $isUnlocking }) =>
    $isUnlocking ? 'counterUnlock 0.7s ease forwards' : 'none'};

  &[data-visible='true'] {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes counterUnlock {
    0% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    35% {
      transform: scale(1.3) translateY(-2px);
    }
    100% {
      opacity: 0;
      transform: scale(0.8) translateY(-10px);
    }
  }
`

const Toggle = styled.button`
  display: none;
  width: auto;
  min-width: 2.75rem;
  padding: 0.4rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 5px;
  background: transparent;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  justify-self: end;
  align-self: center;

  @media (max-width: 575px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  justify-self: end;

  @media (max-width: 575px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 85px;
    right: 1rem;
    left: 1rem;
    flex-direction: column;
    align-items: stretch;
    padding: 0.5rem 1rem 1rem;
    background: ${({ theme }) => theme.colors.black};
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;

  @media (max-width: 575px) {
    justify-content: flex-start;
    margin: 0;
    padding-top: 0.5rem;
  }
`

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.cloud};
  font-size: 1.35rem;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.egg};
    background: rgba(255, 255, 255, 0.08);
  }
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center; /* Centers text vertically within link click-area */
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.cloud};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.egg};
  }
`

const NavigationBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const [isBrandBouncing, setIsBrandBouncing] = useState(false)
  const [brandClickCount, setBrandClickCount] = useState(0)
  const [isCounterUnlocking, setIsCounterUnlocking] = useState(false)
  const [brandBounceKey, setBrandBounceKey] = useState(0)
  const [brandBounceDuration, setBrandBounceDuration] = useState(0.45)
  const lastClickTimeRef = useRef<number | null>(null)
  const navigateTo = useNavigate()

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  const handleBrandClick = () => {
    const now = Date.now()
    const timeSinceLastClick = lastClickTimeRef.current
      ? now - lastClickTimeRef.current
      : Number.POSITIVE_INFINITY

    if (timeSinceLastClick < 220) {
      setBrandBounceDuration(0.22)
    } else if (timeSinceLastClick < 500) {
      setBrandBounceDuration(0.34)
    } else if (timeSinceLastClick < 800) {
      setBrandBounceDuration(0.48)
    } else {
      setBrandBounceDuration(0.7)
    }

    lastClickTimeRef.current = now

    const nextCount = Math.min(brandClickCount + 1, 67)
    setBrandClickCount(nextCount)

    if (nextCount >= 67) {
      setIsBrandBouncing(false)
      setIsCounterUnlocking(true)
      setTimeout(() => setIsCounterUnlocking(false), 700)
      navigateTo('/')
      return
    }

    setIsBrandBouncing(false)
    setBrandBounceKey((prev) => prev + 1)
    void (document.activeElement as HTMLElement | null)?.blur?.()
    requestAnimationFrame(() => {
      setIsBrandBouncing(true)
      setTimeout(() => setIsBrandBouncing(false), 450)
    })
    navigateTo('/')
  }

  const isBrandSpinning = brandClickCount >= 67
  const shouldShowCounter = brandClickCount > 0 && !isBrandSpinning

  return (
    <Navigation id='navigationBar'>
      <NavContainer>
        <BrandWrap>
          <Brand
            key={brandBounceKey}
            type='button'
            $isBouncing={isBrandBouncing}
            $isSpinning={isBrandSpinning}
            $bounceDuration={brandBounceDuration}
            onClick={handleBrandClick}
          >
            <img alt='Otacruise' src={pelastusrengas} />
          </Brand>
          <BrandCounter
            $isUnlocking={isCounterUnlocking}
            data-visible={shouldShowCounter ? 'true' : 'false'}
          >
            x{brandClickCount}
          </BrandCounter>
        </BrandWrap>

        <SocialLinks aria-label='Social media links'>
          <SocialLink
            href='https://www.tiktok.com/@otacruise'
            target='_blank'
            rel='noreferrer'
            aria-label='TikTok'
          >
            <i className='bi bi-tiktok' aria-hidden='true' />
          </SocialLink>
          <SocialLink
            href='https://www.instagram.com/otacruise/'
            target='_blank'
            rel='noreferrer'
            aria-label='Instagram'
          >
            <i className='bi bi-instagram' aria-hidden='true' />
          </SocialLink>
          <SocialLink
            href='https://t.me/otacruise'
            target='_blank'
            rel='noreferrer'
            aria-label='Telegram'
          >
            <i className='bi bi-telegram' aria-hidden='true' />
          </SocialLink>
        </SocialLinks>

        <Toggle
          type='button'
          aria-expanded={!isNavCollapsed}
          aria-label='Toggle navigation'
          onClick={handleNavCollapse}
        >
          ☰
        </Toggle>

        <NavLinks $isOpen={!isNavCollapsed}>
          <NavLink onClick={() => setIsNavCollapsed(true)} to='/'>
            Home
          </NavLink>
          <NavLink onClick={() => setIsNavCollapsed(true)} to='/info/main'>
            Info
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Navigation>
  )
}

export default NavigationBar
