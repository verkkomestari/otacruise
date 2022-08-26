import '../styles/Global.css';
import '../styles/Info.css';
import InfoContent from './InfoContent';
import InfoLink from './InfoLink';
import { useParams } from 'react-router-dom';

// Info page

const Info = () => {
  const id = useParams().id;
  const title = id === 'main' ? 'info' : id;
  return (
    <div id='info-bg'>
      <div id='info-container' className='container'>
        <div id='info-container-child' className='row'>
          <div className='page-sidebar col-sm-4'>
            <ul className='nav nav-pills flex-column mb-auto montserrat'>
              <InfoLink title={'Info'} />
              <InfoLink title={'Safety'} />
              <InfoLink title={'Tickets'} />
            </ul>
          </div>
          <InfoContent title={title} />
        </div>
      </div>
    </div>
  );
};

export default Info;
