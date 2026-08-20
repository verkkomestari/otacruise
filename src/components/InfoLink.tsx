import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface InfoLinkProps {
  info: {
    id: string
    title: string
  }
}

const NavigationLink = styled(Link)`
  display: block;
  color: #41b3a2;
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: #146555;
  }
`

const InfoLink = ({ info }: InfoLinkProps) => {
  return <NavigationLink to={`/info/${info.id}`}>{info.title}</NavigationLink>
}

export default InfoLink
