import '../styles/Hero.css'
import '../styles/Global.css'
//import rapu from '../assets/images/final_rapu.png'
import otacruise from '../assets/images/otacruise.png'
//import year from '../assets/images/2022.png'
//import { Link } from 'react-router-dom'
import merihevonen from '../assets/images/merihevonen.png'

// Huikean hiano aloitussivu

const Hero = ({ executeScroll }) => {
  return (
    <div className='overflow-hidden text-center'>
      <div className='heroText'>
        <div className='container titleNbutton'>
          <div
            className='d-flex justify-content-center align-items-center ms-md-5 me-md-5 mt-sm-5'
            id='titleCont'>
            <div>
              <div>
                <img src={otacruise} alt='heroTitle' id='otacruise' />
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <p className='fs-3 lead motto justify-content-center'>
              Finland's biggest student cruise for Aalto University students!
            </p>
            <div className='row d-flex justify-content-center'>
              <p className='fs-2 mt-2 motto date'>23.-25.11.2025</p>
            </div>
          </div>
          <div className='mb-1'>
          <div className='btn linkbtn' id='linkbtn'>
            <a
              href='https://kide.app/events/23b3ba87-a6e4-4cbb-8725-7871931f150f'
              target='_blank'
              rel='noreferrer'
              className='ticketLink'>
              Get tickets!
            </a>
          </div>  
        </div>
          <div className='d-none d-sm-block d-flex justify-content-center'>
            <button
              className='callToAction btn btn-outline-secondary db-text'
              onClick={executeScroll}>
              Read more!
            </button>
          </div>
        </div>
      </div>
      <img alt='' src={merihevonen} className='rapu1' />
    </div>
  )
}

export default Hero

/*<div className='btn linkbtn' id='linkbtn'>
            <a
              href='https://kide.app/events/23b3ba87-a6e4-4cbb-8725-7871931f150f'
              target='_blank'
              rel='noreferrer'
              className='ticketLink'>
              Get tickets!
            </a>
          </div> */