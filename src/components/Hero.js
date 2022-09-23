import '../styles/Hero.css'
import '../styles/Global.css'
import rapu from '../assets/images/final_rapu.png'
import otacruise from '../assets/images/otacruise.png'
import year from '../assets/images/2022.png'

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
              <div>
                <img src={year} alt='heroTitle' id='year' />
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <p className='fs-3 lead motto justify-content-center'>
              The most popular student cruise for Aalto University students!
            </p>
            <div className='row d-flex justify-content-center'>
              <p className='fs-2 mt-2 motto date'>27.-29.11.</p>
            </div>
          </div>
          <div className='d-none d-sm-block d-flex justify-content-center'>
            <button
              className='callToAction btn btn-outline-secondary db-text'
              onClick={executeScroll}>
              Read more!
            </button>
          </div>
          <div className=' d-flex justify-content-center'>
            <button className='d-block d-sm-none ticketsAction btn btn-outline-secondary db-text'>
              <a
                href='https://kide.app/events/c153f086-a944-4782-a70a-a608a49be183'
                className='ticketLinkHero'>
                Tickets on Kide.app!
              </a>
            </button>
          </div>
        </div>
      </div>
      <img alt='' src={rapu} className='rapu1' />
    </div>
  )
}

export default Hero
