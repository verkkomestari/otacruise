import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import pelastusrengas from '../assets/images/pelastusrengas.png'

// Navigointipalkki sivun yläreunassa

const Navigation = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`

const NavContainer = styled.div`
  width: min(100% - 2rem, 70rem);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Brand = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
`

const Toggle = styled.button`
  display: none;
  padding: 0.4rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 5px;
  background: transparent;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 575px) {
    display: block;
  }
`

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
  padding-top: 10px;

  @media (max-width: 575px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 85px;
    right: 1rem;
    left: 1rem;
    flex-direction: column;
    padding: 0.5rem 1rem 1rem;
    background: ${({ theme }) => theme.colors.lightBlue};
  }
`

const NavLink = styled(Link)`
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
  const navigateTo = useNavigate()

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  return (
    <Navigation id='navigationBar'>
      <NavContainer>
        <Brand type='button' onClick={() => navigateTo('/')}>
          <img alt='Otacruise' src={pelastusrengas} height='85' />
        </Brand>
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
