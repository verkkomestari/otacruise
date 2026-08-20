export const theme = {
  colors: {
    brand: '#2c8c7d',
    brandDark: '#146555',
    brandAccent: '#0d7c66',
    link: '#41b3a2',
    lavender: '#d7c3f1',
    mint: '#9bd4ac',
    lavenderDark: '#b69cd6',
    text: '#212529',
    white: '#ffffff',
    seaDeep: '#0b2545',
    seaMid: '#1b4965',
    seaLight: '#5fa8d3',
    seaFront: '#62b6cb',
    primaryBackground: '#d7c3f1',
    // new colors
    red: '#561801',
    darkBlue: '#071434',
    blue: '#363b59',
    darkGreen: '#363b59',
    black: '#1b1e27',
    yellow: '#febb48',
    cloud: '#e0e7f1',
    lightBlue: '#7096ba',
    lightGreen: '#90af9d',
    egg: '#fff4b6',
    orange: '#fff4b6',
    sky: '#fff4b6',
  },
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
  shadows: {
    card: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
    cardHover: '0 0 25px 0 #b69cd6, 10px 10px 10px 0 #d7c3f1',
  },
} as const

export type AppTheme = typeof theme
