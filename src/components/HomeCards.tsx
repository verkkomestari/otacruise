import Card from './Card'
import info from '../assets/images/info.svg'
import heart from '../assets/images/heart.svg'
import styled from 'styled-components'

const InfoIcon = styled.img.attrs({
  src: info,
  width: '200rem',
})``

const HeartIcon = styled.img.attrs({
  src: heart,
  width: '220rem',
})``

const HomeCards = () => {
  return (
    <div className='container overflow-hidden mb-5'>
      <div className='row text-dark'>
        <Card id='main'>
          <InfoIcon />
        </Card>
        <Card id='aboutus'>
          <HeartIcon />
        </Card>
      </div>
    </div>
  )
}

export default HomeCards
