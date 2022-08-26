const Card = ({ title }) => (
  <div className='col-lg-4 card-container'>
    <div className='card m-3'>
      <div className='card-body'>
        <h5 className='card-title montserrat'>{title}</h5>
        <p className='card-text mb-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
);

export default Card;
