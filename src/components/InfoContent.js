// The text content on Info page

const InfoContent = ({ info }) => {
  return (
    <div className='page-content col-8'>
      <h1 className='montserrat info-title'>{info.title}</h1>
      <p>{info.content}</p>
    </div>
  );
};

export default InfoContent;
