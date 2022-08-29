import Card from './Card';

const HomeCards = () => {
  return (
    <div className='container overflow-hidden mb-5'>
      <div className='row text-dark'>
        <Card id='main' />
        <Card id='aboutus' />
      </div>
    </div>
  );
};

export default HomeCards;
