import { Link } from 'react-router-dom';

const InfoLink = ({ title }) => (
  <li>
    <Link to={`/info/${title.toLowerCase()}`} className='nav-item navlink fs-4'>
      {title}
    </Link>
  </li>
);

export default InfoLink;
