// The text content on Info page

const InfoContent = ({ infoList }) => {
  return (
    <div className='page-content col-md-8'>
      <h1 className='montserrat info-title'>{infoList.title}</h1>
      {infoList.title === 'Tickets' ? (
        <div className='mb-4'>
          <div className='btn callToAction' id='linkbtn'>
            <a
              href='https://kide.app/events/c153f086-a944-4782-a70a-a608a49be183'
              target='_blank'
              rel='noreferrer'>
              {' '}
              Go to Kide.app!
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      {infoList.content.map((part) => (
        <div className='page-body' key={part.content}>
          <h2
            className={
              infoList.id === 'faq'
                ? 'montserrat subtitle pb-1'
                : 'montserrat subtitle'
            }>
            {part.subtitle}
          </h2>
          <p className={infoList.id === 'faq' ? 'pb-4' : ''}>{part.body}</p>
        </div>
      ))}
    </div>
  )
}

export default InfoContent
