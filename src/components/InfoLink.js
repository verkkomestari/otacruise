import { Link } from 'react-router-dom';

const InfoLink = ({ title }) => {
  const id = title === ('Info' || 'info') ? 'main' : title;
  return (
    <li>
      <Link to={`/info/${id.toLowerCase()}`} className='nav-item navlink fs-4'>
        {title}
      </Link>
    </li>
  );
};

export default InfoLink;
