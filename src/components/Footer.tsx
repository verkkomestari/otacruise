import React, { useMemo } from 'react'
import { animated, useSpring } from 'react-spring'
import styled, { keyframes } from 'styled-components'

const riseBubble = keyframes`
  0% {
    transform: translateY(100%) scale(0.6);
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-120px) scale(1.1);
    opacity: 0;
  }
`

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background: transparent;
  color: #ffffff;
  overflow: hidden;
  text-align: center;
`

const FooterSurface = styled.div`
  position: absolute;
  inset: 2rem 0 0;
  background: ${({ theme }) => theme.colors.darkGreen};
  z-index: 0;
`

const WaveDivider = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  color: ${({ theme }) => theme?.colors?.darkGreen || '#032b21'};
  pointer-events: none;
  z-index: 1;
`

const Content = styled.div`
  position: relative;
  z-index: 5;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  margin: 0 0 12px;
  font-family: ${({ theme }) => theme?.fonts?.body || 'inherit'};
  font-size: 1.8rem;
  letter-spacing: 0.5px;
`

const Text = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme?.fonts?.body || 'inherit'};
  font-size: 1rem;
  opacity: 0.9;
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
`

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-size: 1.2rem;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(110, 231, 183, 0.15);
    box-shadow: 0 0 0 1px rgba(110, 231, 183, 0.3);
  }
`

const Copyright = styled.p`
  margin: 12px 0 0;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  opacity: 0.8;
`

const Handle = styled.span`
  font-weight: 600;
  color: #6ee7b7;
`

const FloraLayer = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 100%;
  pointer-events: none;
  z-index: 2;
`

const BubbleLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  overflow: hidden;
`

const Bubble = styled.span<{
  left: number
  size: number
  duration: string
  delay: string
}>`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  bottom: 0;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  background: rgba(110, 231, 183, 0.8);
  box-shadow: 0 0 14px rgba(110, 231, 183, 0.5);
  animation: ${riseBubble} ${({ duration }) => duration} ease-in infinite;
  animation-delay: ${({ delay }) => delay};
  transform-box: fill-box;
  transform-origin: center;
`

const Footer = () => {
  const { waveX } = useSpring({
    from: { waveX: 0 },
    to: { waveX: 1440 },
    loop: true,
    config: { duration: 40000 },
  })

  const bubbles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        id: index,
        left: 10 + Math.random() * 78,
        size: 4 + Math.random() * 6,
        duration: `${3.8 + Math.random() * 2.2}s`,
        delay: `${Math.random() * 2.5}s`,
      })),
    [],
  )

  return (
    <FooterWrapper id='footer'>
      <WaveDivider
        viewBox='0 0 1440 32'
        fill='none'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <animated.g transform={waveX.to((value) => `translate(${value} 0)`)}>
          <path
            d='M0,16 C60,5 120,5 180,16 C240,27 300,27 360,16 C420,5 480,5 540,16 C600,27 660,27 720,16 C780,5 840,5 900,16 C960,27 1020,27 1080,16 C1140,5 1200,5 1260,16 C1320,27 1380,27 1440,16 L1440,32 L0,32 Z'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='1'
          />
          <path
            d='M0,16 C60,5 120,5 180,16 C240,27 300,27 360,16 C420,5 480,5 540,16 C600,27 660,27 720,16 C780,5 840,5 900,16 C960,27 1020,27 1080,16 C1140,5 1200,5 1260,16 C1320,27 1380,27 1440,16 L1440,32 L0,32 Z'
            transform='translate(-1440 0)'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='1'
          />
        </animated.g>
      </WaveDivider>
      <FooterSurface />

      <BubbleLayer>
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            left={bubble.left}
            size={bubble.size}
            duration={bubble.duration}
            delay={bubble.delay}
          />
        ))}
      </BubbleLayer>
      {/* Seabed illustration with sand mounds, kelp, rocks, starfish, and bubbles */}
      <FloraLayer
        viewBox='0 0 1600 240'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          {/* Soft gradient for deep-water sand floor */}
          <linearGradient id='sandFloor' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#0b382c' stopOpacity='0.8' />
            <stop offset='100%' stopColor='#051c16' stopOpacity='1' />
          </linearGradient>

          {/* Coral & seaweed gradients */}
          <linearGradient id='kelpGrad1' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#10b981' />
            <stop offset='100%' stopColor='#064e3b' />
          </linearGradient>
          <linearGradient id='kelpGrad2' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#34d399' />
            <stop offset='100%' stopColor='#047857' />
          </linearGradient>
        </defs>

        {/* Seabed only; bubbles live in a separate layer */}

        {/* Seabed sand mounds */}
        <path
          d='M 0,205 Q 80,198 180,214 Q 290,180 380,200 Q 500,228 610,186 Q 700,155 820,210 Q 950,250 1080,182 Q 1220,118 1350,195 Q 1470,240 1600,188 L 1600,240 L 0,240 Z'
          fill='url(#sandFloor)'
        />
        <path
          d='M 0,220 Q 110,208 220,226 Q 360,198 520,236 Q 660,266 820,214 Q 980,166 1130,214 Q 1270,250 1420,224 Q 1510,210 1600,214 L 1600,240 L 0,240 Z'
          fill='#062b23'
          opacity='0.72'
        />
        <path
          d='M 0,236 Q 120,228 230,244 Q 360,268 500,228 Q 660,188 810,236 Q 1000,286 1160,238 Q 1320,198 1480,236 Q 1545,240 1600,232 L 1600,240 L 0,240 Z'
          fill='#031b17'
          opacity='0.9'
        />
      </FloraLayer>

      <Content>
        <Title>Let's sea!</Title>
        <Text>
          Remember to follow us on social media <Handle>@Otacruise</Handle>
        </Text>
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
        <Copyright>© Otaniemen Merikerho ry</Copyright>
      </Content>
    </FooterWrapper>
  )
}

export default Footer
