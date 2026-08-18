import { Link } from 'react-router-dom';

const InfoLink = ({ info }) => {
  return (
    <li>
      <Link to={`/info/${info.id}`} className='nav-item navlink fs-4'>
        {info.title}
      </Link>
    </li>
  );
};

export default InfoLink;
