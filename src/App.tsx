import NavigationBar from './components/NavBar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Info from './components/Info'
import Tickets from './components/Tickets'
import Footer from './components/Footer'
import styled, { createGlobalStyle } from 'styled-components'

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
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`

const AppContainer = styled.div`
  min-height: 100%;
`

const NavigationOffset = styled.div`
  height: 5rem;
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <NavigationBar />
        <NavigationOffset />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info/:id' element={<Info />} />
          <Route path='/tickets' element={<Tickets />} />
        </Routes>
        <Footer />
      </Router>
    </AppContainer>
  )
}

export default App
