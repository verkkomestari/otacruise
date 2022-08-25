const HomeCards = () => {
  return (
    <div className='container overflow-hidden mb-5'>
      <div className='row gx-5 text-dark'>
        <div className='col-lg-4'>
          <div class='card m-3'>
            <div class='card-body'>
              <h5 class='card-title navlink montserrat'>Info</h5>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div class='card m-3'>
            <div class='card-body'>
              <h5 class='card-title navlink montserrat'>Safety</h5>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div class='card m-3'>
            <div class='card-body'>
              <h5 class='card-title navlink montserrat'>Tickets</h5>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
