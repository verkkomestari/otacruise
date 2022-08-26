import { useNavigate } from 'react-router-dom';

const Card = ({ title }) => {
  const navigateTo = useNavigate();
  const handleClick = () => {
    window.scroll(0, 0);
    navigateTo(`/info/${title.toLowerCase()}`);
  };
  return (
    <div className='col-lg-4 card-container'>
      <div className='card m-3'>
        <div className='card-body' onClick={handleClick}>
          <h5 className='card-title montserrat'>{title}</h5>
          <p className='card-text mb-1'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className='card-image rounded-bottom'></div>
      </div>
    </div>
  );
};

export default Card;
