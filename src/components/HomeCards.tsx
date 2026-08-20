import Card from './Card'
import info from '../assets/images/info.svg'
import heart from '../assets/images/heart.svg'
import styled from 'styled-components'

const CardsContainer = styled.div`
  width: min(100% - 2rem, 1140px);
  margin: 0 auto 3rem;
  overflow: hidden;
`

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #212529;
`

const InfoIcon = styled.img.attrs({
  src: info,
})``

const HeartIcon = styled.img.attrs({
  src: heart,
})``

const HomeCards = () => {
  return (
    <CardsContainer>
      <CardsRow>
        <Card id='main'>
          <InfoIcon />
        </Card>
        <Card id='aboutus'>
          <HeartIcon />
        </Card>
      </CardsRow>
    </CardsContainer>
  )
}

export default HomeCards
