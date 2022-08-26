import '../styles/Hero.css';
import '../styles/Global.css';
import rapu from '../assets/images/ph-rapu.png';

// Huikean hiano aloitussivu

const Hero = () => {
  return (
    <div className='overflow-hidden text-center'>
      <div className='heroText'>
        <div className='container titleNbutton'>
          <div>
            <h1 className='display-1 display-title'>Otacruise 2022</h1>
            <p className='fs-3 lead  motto'>
              The most popular student cruise for Aalto University students!
            </p>
            <p className='fs-2 mt-2 motto'>27.-29.11.</p>
          </div>
          <div>
            <a
              className='callToAction btn btn-outline-secondary db-text'
              href='#intro'
            >
              Read more!
            </a>
          </div>
        </div>
      </div>
      <img alt='' src={rapu} className='rapu1 align-center' />
    </div>
  );
};

export default Hero;
