import NavigationBar from './components/NavBar'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Info from './components/Info'
import Tickets from './components/Tickets'
import Footer from './components/Footer'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`

const AppContainer = styled.div<{ $route: string }>`
  min-height: 100vh;
  background-color: ${({ $route, theme }) => {
    if ($route.startsWith('/info')) return theme.colors.blue
    if ($route === '/tickets') return theme.colors.egg
    return theme.colors.lightBlue
  }};
`

const NavigationOffset = styled.div`
  height: 5rem;
`

function RoutedApp() {
  const { pathname } = useLocation()

  return (
    <AppContainer $route={pathname}>
      <GlobalStyle />
      <NavigationBar />
      <NavigationOffset />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info/:id' element={<Info />} />
        <Route path='/tickets' element={<Tickets />} />
      </Routes>
      <Footer />
    </AppContainer>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RoutedApp />
      </Router>
    </ThemeProvider>
  )
}

export default App
