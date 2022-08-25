import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom';

import '../styles/Global.css';
import '../styles/NavBar.css';
import logo from '../assets/images/ph-rapu.png';

// Navigointipalkki sivun yläreunassa

const NavigationBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav id='navigationBar' className='navbar navbar-expand-sm sticky-top'>
      <div className='container'>
        <div className='navbar-brand'>
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
          onClick={handleNavCollapse}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          class={`${isNavCollapsed ? 'collapse' : 'expand'} navbar-collapse`}
        >
          <div
            className='navbar-nav montserrat'
            style={{ borderBottom: '4px' }}
          >
            <Link
              to='/'
              className='nav-item nav-link navlink ps-5 ps-sm-2 m-sm-1'
            >
              Home
            </Link>
            <Link
              to='/info'
              className='nav-item nav-link navlink ps-5 ps-sm-2 m-sm-1'
            >
              Info
            </Link>
            <Link
              to='/tickets'
              className='nav-item nav-link navlink ps-5 ps-sm-2 m-sm-1'
            >
              Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
