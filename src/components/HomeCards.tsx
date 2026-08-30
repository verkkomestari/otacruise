import Card from './Card'
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
  color: ${({ theme }) => theme.colors.black};
`

const InfoIcon = styled.i`
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.cloud};
`

const HeartIcon = styled.i`
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.cloud};
`

const HomeCards = () => {
  return (
    <CardsContainer>
      <CardsRow>
        <Card id='main'>
          <InfoIcon className='bi bi-info-circle' aria-hidden='true' />
        </Card>
        <Card id='aboutus'>
          <HeartIcon className='bi bi-heart-fill' aria-hidden='true' />
        </Card>
      </CardsRow>
    </CardsContainer>
  )
}

export default HomeCards
