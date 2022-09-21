import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../styles/Global.css'
import '../styles/NavBar.css'
import logo from '../assets/images/final_rapu.png'

// Navigointipalkki sivun yläreunassa

const NavigationBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const navigateTo = useNavigate()

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  return (
    <nav
      id='navigationBar'
      className='navbar navbar-dark db-bg navbar-expand-sm sticky-top'>
      <div className='container'>
        <div className='navbar-brand' onClick={() => navigateTo('/')}>
          <img
            alt='Otacruise'
            src={logo}
            height='50'
            className='align-center'
          />
        </div>
        <button
          className='navbar-toggler'
          type='button'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={handleNavCollapse}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`${
            isNavCollapsed ? 'collapse' : 'expand'
          } navbar-collapse`}>
          <div
            className='navbar-nav montserrat'
            style={{ borderBottom: '4px' }}>
            <Link
              onClick={() => setIsNavCollapsed(true)}
              to='/'
              className='nav-item nav-link navlink lb-text ps-5 ps-sm-2 m-sm-1'>
              Home
            </Link>
            <Link
              onClick={() => setIsNavCollapsed(true)}
              to='/info/main'
              className='nav-item nav-link navlink lb-text ps-5 ps-sm-2 m-sm-1'>
              Info
            </Link>
            <Link
              onClick={() => setIsNavCollapsed(true)}
              to='/info/tickets'
              className='nav-item nav-link navlink lb-text ps-5 ps-sm-2 m-sm-1'>
              Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
