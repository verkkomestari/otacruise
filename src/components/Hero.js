import '../styles/Hero.css';
import '../styles/Global.css';
import rapu from '../assets/images/ph-rapu.png';

// Huikean hiano aloitussivu

const Hero = () => {
  return (
    <div id='hero-box' class='overflow-hidden text-center'>
      <div className='heroText'>
        <div className='container titleNbutton'>
          <div>
            <h1 class='display-1 title'>Otacruise 2022</h1>
            <p class='fs-3 lead fst-italic motto'>
              Suurin ja suosituin risteily Aalto-yliopiston opiskelijoille!
            </p>
            <p class='fs-1 lead fst-italic'>27.-29.11.</p>
          </div>
          <div>
            <a class='callToAction btn btn-outline-secondary' href='#'>
              Lue lisää!
            </a>
          </div>
        </div>
      </div>
      <img alt='' src={rapu} className='rapu1 align-center' />
    </div>
  );
};

export default Hero;
