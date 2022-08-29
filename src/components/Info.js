import '../styles/Global.css';
import '../styles/Info.css';
import InfoContent from './InfoContent';
import InfoLink from './InfoLink';
import { useParams } from 'react-router-dom';
import infoList from '../assets/infoList';
// Info page

const Info = () => {
  const id = useParams().id;
  const infoText = infoList.find((info) => info.id === id);
  return (
    <div id='info-bg'>
      <div id='info-container' className='container'>
        <div id='info-container-child' className='row'>
          <div className='page-sidebar col-md-4'>
            <ul className='nav nav-pills flex-column mb-auto montserrat'>
              {infoList.map((item) => (
                <div key={item.id}>
                  <InfoLink info={item} />
                </div>
              ))}
            </ul>
          </div>
          <InfoContent info={infoText} />
        </div>
      </div>
    </div>
  );
};

export default Info;
