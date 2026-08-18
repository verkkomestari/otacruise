import { Link } from 'react-router-dom'

interface InfoLinkProps {
  info: {
    id: string
    title: string
  }
}

const InfoLink = ({ info }: InfoLinkProps) => {
  return (
    <li>
      <Link to={`/info/${info.id}`} className='nav-item navlink fs-4'>
        {info.title}
      </Link>
    </li>
  )
}

export default InfoLink
