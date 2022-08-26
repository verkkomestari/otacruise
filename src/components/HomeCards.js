import Card from './Card';

const HomeCards = () => {
  return (
    <div className='container overflow-hidden mb-5'>
      <div className='row text-dark'>
        <Card id='main' />
        <Card id='safety' />
        <Card id='tickets' />
      </div>
    </div>
  );
};

export default HomeCards;
