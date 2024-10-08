import '../styles/Global.css'
import '../styles/Intro.css'
import HomeCards from './HomeCards'
import tausta from '../assets/images/meritausta-2.jpg'

//Alotusssivun alla oleva esittelyosio

const Intro = ({ introRef }) => {
  return (
    <div
      ref={introRef}
      id='intro'
      className='overflow-hidden text-center introContainer text-light'
      style={{ backgroundImage: `url(${tausta})` }}>
      <div className='spacer'></div>
      <div className='container col-12 col-md-9 col-lg-8 db-bg p-3 rounded'>
        <h1 className='display-title introTitle display-5 mb-2'>
          Ahoy, Matey!
        </h1>
        <p className='fs-4 m-5 lead'>
          Want to step on an unforgettable adventure across the Baltic Sea?
          Otacruise will once again welcome all of Otaniemi to a ship full of
          entertainment. The cruise will sail from Helsinki to Stockholm and
          back, carrying more than 2500 party-craving students.
        </p>
      </div>
      <HomeCards />
    </div>
  )
}

export default Intro
