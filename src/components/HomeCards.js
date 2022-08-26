import Card from './Card';

const HomeCards = () => {
  return (
    <div className='container overflow-hidden mb-5'>
      <div className='row text-dark'>
        <Card title='Info' />
        <Card title='Safety' />
        <Card title='Tickets' />
      </div>
    </div>
  );
};

export default HomeCards;
