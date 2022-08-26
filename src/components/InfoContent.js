// The text content on Info page

const InfoContent = ({ title }) => {
  return (
    <div className='page-content col-8'>
      <h1 className='montserrat info-title'>{title}</h1>
      <p>This is some info text.</p>
    </div>
  );
};

export default InfoContent;
