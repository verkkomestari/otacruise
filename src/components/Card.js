import { useNavigate } from 'react-router-dom';
import infoList from '../assets/infoList';
import image from '../assets/images/Hero_rapu_sininen_tausta.pdf';

const Card = ({ id }) => {
  const info = infoList.find((i) => i.id === id);
  console.log(info);
  const navigateTo = useNavigate();
  const handleClick = () => {
    window.scroll(0, 0);
    navigateTo(`/info/${info.id}`);
  };
  return (
    <div className='col card-container'>
      <div className='card m-3' onClick={handleClick}>
        <div className='card-body'>
          <h5 className='card-title montserrat'>{info.title}</h5>
          <p className='card-text mb-1'>{info.cardText}</p>
        </div>
        <div
          className='card-image rounded-bottom'
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
