// The text content on Info page
import type { TInfoList } from '../assets/infoList'

interface InfoContentProps {
  infoItem: TInfoList[number]
}

const InfoContent = ({ infoItem }: InfoContentProps) => {
  return (
    <div className='page-content col-md-8'>
      <h1 className='montserrat info-title'>{infoItem.title}</h1>
      {infoItem.title === 'Tickets' ? (
        <div className='mb-1'>
          <div className='btn linkbtn' id='linkbtn'>
            <a
              href='https://kide.app/events/093d480a-c091-44d6-82f4-627da1e4872f'
              target='_blank'
              rel='noreferrer'
              className='ticketLink'
            >
              Go to Kide.app!
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      {infoItem.content.map((part, idx) => (
        <div className='page-body' key={idx}>
          <h2
            className={
              infoItem.id === 'faq'
                ? 'montserrat subtitle pb-1'
                : 'montserrat subtitle'
            }
          >
            {part.subtitle}
          </h2>
          <p className={infoItem.id === 'faq' ? 'pb-4' : ''}>{part.body}</p>
        </div>
      ))}
      {infoItem.title === 'Safety & guidelines' ? (
        <div className='mb-1'>
          <div className='btn linkbtn' id='linkbtn'>
            <a
              href='https://forms.gle/oqCWaBzqa1LfHrS97'
              target='_blank'
              rel='noreferrer'
              className='ticketLink'
            >
              Harassment report form
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      {infoItem.title === 'About Us' ? (
        <div className='mb-1'>
          <div className='btn linkbtn' id='linkbtn'>
            <a
              href='https://forms.gle/vk15w6hemVJftMCp6'
              target='_blank'
              rel='noreferrer'
              className='ticketLink'
            >
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
