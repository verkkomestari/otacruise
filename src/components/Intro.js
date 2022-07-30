import '../styles/Global.css';
import '../styles/Intro.css';

//Alotusssivun alla oleva esittelyosio

const Intro = () => {
  return (
    <div className='overflow-hidden text-center introContainer'>
      <div className='spacer'></div>
      <div className='container'>
        <h1 className='title introTitle display-5'>Ohoi maakravut!</h1>
        <p className='fs-4 text-light'>
          Lähde mukaan matkalle halki Suomenlahden
        </p>
      </div>
    </div>
  );
};

export default Intro;
