// The text content on Info page

const InfoContent = ({ info }) => {
  return (
    <div className='page-content col-8'>
      <h1 className='montserrat info-title'>{info.title}</h1>
      {info.content.map((part) => (
        <div className='page-body'>
          <h2 className='montserrat subtitle'>{part.subtitle}</h2>
          <p>{part.body}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoContent;
