// The text content on Info page

const InfoContent = ({ infoList }) => {
  return (
    <div className='page-content col-md-8'> 
      <h1 className='montserrat info-title'>{infoList.title}</h1>
      {infoList.title === 'Tickets' ? (
        <div className='mb-1'>
          <div className='btn linkbtn' id='linkbtn'>
            <a
              href='https://kide.app/events/23b3ba87-a6e4-4cbb-8725-7871931f150f'
              target='_blank'
              rel='noreferrer'
              className='ticketLink'>
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
      {infoList.title === 'Safety & guidelines' ? (
        <div className='mb-1'>
          <div className='btn linkbtn' id='linkbtn'>
            <a
              href='https://forms.gle/78ddcKNhBKLY3zXu6'
              target='_blank'
              rel='noreferrer'
              className='ticketLink'>
              Harassment report form
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      {infoList.title === 'About Us' ? (
        <div className='mb-1'>
          <div className='btn linkbtn' id='linkbtn'>
            <a
              href='https://docs.google.com/forms/d/1C_Rwul7hrcd6CMteDJ7nNCcq7Y3evcfo1GWSfEp2E4M/edit'
              target='_blank'
              rel='noreferrer'
              className='ticketLink'>
              Application form
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default InfoContent
