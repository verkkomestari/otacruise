import React from 'react'
import { useSpring, animated, easings } from '@react-spring/web'
import styled, { useTheme } from 'styled-components'

const SeaContainer = styled.div`
  width: 100%;
  height: 25rem;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.cloud};
`

// Base wave paths designed to tile seamlessly
const WAVE_PATH_1 =
  'M 0 50 Q 150 20 300 50 T 600 50 T 900 50 T 1200 50 T 1500 50 T 1800 50 V 400 H 0 Z'
const WAVE_PATH_2 =
  'M 0 40 Q 200 70 400 40 T 800 40 T 1200 40 T 1600 40 T 2000 40 V 400 H 0 Z'
const WAVE_PATH_3 =
  'M 0 30 Q 120 60 240 30 T 480 30 T 720 30 T 960 30 T 1200 30 T 1440 30 T 1680 30 V 400 H 0 Z'

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

  return (
    <SeaContainer>
      <svg
        viewBox='0 0 1000 350'
        preserveAspectRatio='none'
        style={{ width: '100%', height: '100%' }}
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
        <g transform='translate(0, 130)'>
          <animated.path
            d={WAVE_PATH_2}
            fill='url(#deepWave)'
            style={backWave}
          />
        </g>

        {/* Mid Layer */}
        <g transform='translate(0, 160)'>
          <animated.path
            d={WAVE_PATH_1}
            fill='url(#midWaveGrad)'
            style={midWave}
          />
        </g>

        {/* Front Layer */}
        <g transform='translate(0, 190)'>
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
