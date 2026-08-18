import * as Icon from 'react-bootstrap-icons'

interface IconGetProps {
  id: string
}

const IconGet = ({ id }: IconGetProps) => {
  if (id === 'main') {
    return <Icon.InfoCircle />
  } else if (id === 'aboutus') {
    return <Icon.ChatHeart />
  } else {
    return <Icon.Heart />
  }
}

export default IconGet
