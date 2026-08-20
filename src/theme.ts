const colors = {
  seaFront: '#62b6cb',
  white: '#ffffff',
  // new colors
  red: '#561801',
  darkBlue: '#071434',
  blue: '#363b59',
  darkGreen: '#203c48',
  black: '#1b1e27',
  yellow: '#febb48',
  cloud: '#e0e7f1',
  lightBlue: '#7096ba',
  lightGreen: '#90af9d',
  egg: '#fff4b6',
  orange: '#fcb460',
  sky: '#92c0f1',
} as const

export const theme = {
  colors,
  fonts: {
    body: "'Montserrat', sans-serif",
    display: "'Mochiy Pop One', 'Gill Sans', sans-serif",
  },
  breakpoints: {
    mobile: '575px',
    tablet: '768px',
    wideTablet: '770px',
  },
  radii: {
    small: '0.375rem',
    button: '10px',
    panel: '20px',
  },
} as const

export type AppTheme = typeof theme
