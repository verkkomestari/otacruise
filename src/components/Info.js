import { Link } from 'react-router-dom';
import '../styles/Global.css';
import '../styles/Info.css';

// Info page

const Info = () => (
  <div id='info-bg'>
    <div id='info-container' className='container'>
      <div id='info-container-child' className='row'>
        <div className='page-sidebar col-4'>
          <ul className='nav nav-pills flex-column mb-auto montserrat'>
            <li>
              <Link to='/' className='nav-item navlink fs-3'>
                Info
              </Link>
            </li>
            <li>
              <Link to='/' className='navlink fs-4'>
                Safety
              </Link>
            </li>
            <li>
              <Link to='/' className='navlink fs-4'>
                Tickets
              </Link>
            </li>
          </ul>
        </div>
        <div className='page-content col-8'>
          <h1 className='info-title'>Info</h1>
          <p>This is some info text.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
