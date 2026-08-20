import React, { useRef } from 'react'
import { useSpring, animated, easings } from '@react-spring/web'
import styled, { useTheme } from 'styled-components'
import pallokala from '../assets/images/pallokala.png'

const SeaContainer = styled.div`
  width: 100%;
  height: 25rem;
  margin-bottom: 8rem;
  overflow: visible; /* Allows the fish to jump outside the container bounds */
  position: relative;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.cloud};
`

// Base wave paths designed to tile seamlessly
const WAVE_PATH_1 =
  'M 0 50 Q 150 20 300 50 T 600 50 T 900 50 T 1200 50 T 1500 50 T 1800 50 V 350 H 0 Z'
const WAVE_PATH_2 =
  'M 0 40 Q 200 70 400 40 T 800 40 T 1200 40 T 1600 40 T 2000 40 V 350 H 0 Z'
const WAVE_PATH_3 =
  'M 0 30 Q 120 60 240 30 T 480 30 T 720 30 T 960 30 T 1200 30 T 1440 30 T 1680 30 V 350 H 0 Z'

const randomBetween = (min: number, max: number) =>
  Math.round(min + Math.random() * (max - min))

interface FishTrajectory {
  startX: number
  endX: number
  startY: number
  jumpHeight: number
  direction: number
  size: number
}

export const AnimatedSea: React.FC = () => {
  const theme = useTheme()

  // Back wave: slow and wide
  const backWave = useSpring({
    from: { transform: 'translateX(0px) translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({
          transform: 'translateX(-600px) translateY(8px)',
          config: { duration: 14000, easing: easings.easeInOutQuad },
        })
        await next({
          transform: 'translateX(0px) translateY(0px)',
          config: { duration: 14000, easing: easings.easeInOutQuad },
        })
      }
    },
  })

  // Mid wave: offset speed and displacement
  const midWave = useSpring({
    from: { transform: 'translateX(-400px) translateY(4px)' },
    to: async (next) => {
      while (true) {
        await next({
          transform: 'translateX(0px) translateY(-6px)',
          config: { duration: 7000, easing: easings.easeInOutQuad },
        })
        await next({
          transform: 'translateX(-400px) translateY(4px)',
          config: { duration: 7000, easing: easings.easeInOutQuad },
        })
      }
    },
  })

  // Front wave: faster crests
  const frontWave = useSpring({
    from: { transform: 'translateX(0px) translateY(-4px)' },
    to: async (next) => {
      while (true) {
        await next({
          transform: 'translateX(-480px) translateY(6px)',
          config: { duration: 5500, easing: easings.easeInOutQuad },
        })
        await next({
          transform: 'translateX(0px) translateY(-4px)',
          config: { duration: 5500, easing: easings.easeInOutQuad },
        })
      }
    },
  })

  const fishTrajectory = useRef<FishTrajectory>({
    startX: 320,
    endX: 520,
    startY: 280,
    jumpHeight: -80,
    direction: 1,
    size: 80,
  })

  // Jumping fish loop with a new parabolic trajectory on every jump
  const fishSpring = useSpring({
    from: { progress: 0 },
    to: async (next) => {
      while (true) {
        const direction = Math.random() < 0.5 ? -1 : 1
        const jumpDistance = randomBetween(120, 320)
        const startX =
          direction === 1 ? randomBetween(120, 620) : randomBetween(380, 880)
        const endX = startX + direction * jumpDistance
        const startY = randomBetween(250, 310)
        const jumpHeight = startY - randomBetween(180, 360)
        const size = randomBetween(55, 100)

        fishTrajectory.current = {
          startX,
          endX,
          startY,
          jumpHeight,
          direction,
          size,
        }

        // 1. Reset position submerged
        await next({ progress: 0, config: { duration: 0 } })

        // 2. Pause underwater before jumping
        await new Promise((res) => setTimeout(res, 2200))

        // 3. Follow one continuous arc from launch to landing
        await next({
          progress: 1,
          config: { duration: 2500, easing: easings.linear },
        })
      }
    },
  })

  return (
    <SeaContainer>
      <svg
        viewBox='0 0 1000 350'
        preserveAspectRatio='xMidYMid slice'
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          {/* Depth gradients */}
          <linearGradient id='deepWave' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#1b4965' stopOpacity='0.85' />
            <stop offset='100%' stopColor='#0b2545' />
          </linearGradient>

          <linearGradient id='midWaveGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#5fa8d3' stopOpacity='0.75' />
            <stop offset='100%' stopColor='#1b4965' />
          </linearGradient>

          <linearGradient id='frontWaveGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop
              offset='0%'
              stopColor={theme.colors.seaFront}
              stopOpacity='0.9'
            />
            <stop offset='35%' stopColor={theme.colors.lightBlue} />
            <stop offset='100%' stopColor={theme.colors.lightBlue} />
          </linearGradient>
        </defs>

        {/* Back Layer */}
        <g transform='translate(0, 90)'>
          <animated.path
            d={WAVE_PATH_2}
            fill='url(#deepWave)'
            style={backWave}
          />
        </g>

        {/* Mid Layer */}
        <g transform='translate(0, 120)'>
          <animated.path
            d={WAVE_PATH_1}
            fill='url(#midWaveGrad)'
            style={midWave}
          />
        </g>

        {/* Jumping Fish */}
        <animated.g
          style={{
            transform: fishSpring.progress.to((progress) => {
              const { startX, endX, startY, jumpHeight, direction, size } =
                fishTrajectory.current
              const arc = 4 * progress * (1 - progress)
              const x = startX + (endX - startX) * progress
              const y = startY + (jumpHeight - startY) * arc
              const rotate = direction * (progress * 110 - 55)

              return `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${size / 80}) scaleX(${direction})`
            }),
            opacity: fishSpring.progress.to((progress) =>
              progress === 0 ? 0 : 1,
            ),
            transformOrigin: '40px 40px',
          }}
        >
          <svg
            x='0'
            y='0'
            width='80'
            height='80'
            viewBox='0 0 80 80'
            preserveAspectRatio='xMidYMid meet'
            overflow='visible'
          >
            <image
              href={pallokala}
              width='80'
              height='80'
              preserveAspectRatio='xMidYMid meet'
            />
          </svg>
        </animated.g>

        {/* Front Layer */}
        <g transform='translate(0, 150)'>
          <animated.path
            d={WAVE_PATH_3}
            fill='url(#frontWaveGrad)'
            style={frontWave}
          />
        </g>
      </svg>
    </SeaContainer>
  )
}

export default AnimatedSea
