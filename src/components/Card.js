import { useNavigate } from 'react-router-dom';
import infoList from '../assets/infoList';
import card_image from '../assets/images/card_image.JPG';
import IconGet from '../helpers/IconGet';

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
          className='card-image rounded-bottom d-flex align-items-center justify-content-center'
          style={{
            backgroundImage: `url(${card_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className='icon'>
            <IconGet id={id} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
