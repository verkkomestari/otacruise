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
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.sky};
  }
`

const InfoLink = ({ info }: InfoLinkProps) => {
  return <NavigationLink to={`/info/${info.id}`}>{info.title}</NavigationLink>
}

export default InfoLink
