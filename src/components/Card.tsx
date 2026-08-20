import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import infoList from '../assets/infoList'
import card_image from '../assets/images/card_image-2.jpg'

const CardWrapper = styled.div`
  min-width: 0;
  flex: 1 1 320px;
  min-height: 420px;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: ${({ theme }) => theme.shadows.card};
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    background-color: rgb(238, 246, 253);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  .card-body {
    padding: 1rem;
  }

  .card-title {
    margin: 0 0 0.5rem;
    color: ${({ theme }) => theme.colors.brandAccent};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .card-text {
    margin: 0 0 0.25rem;
  }

  .card-image {
    flex: 1;
    height: clamp(220px, 28vh, 320px);
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    background: url(${card_image}) center / cover no-repeat;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 80%;
      max-height: 90%;

      img {
        width: min(14rem, 70vw);
        max-width: 100%;
        height: auto;
      }

      font-size: max(15vh, 124px);
    }
  }
`

interface CardProps {
  id: string
  children?: React.ReactNode
}

const Card = ({ id, children }: CardProps) => {
  const info = infoList.find((i) => i.id === id) ?? infoList[0]
  const navigateTo = useNavigate()

  const handleClick = () => {
    window.scroll(0, 0)
    navigateTo(`/info/${info.id}`)
  }

  return (
    <CardWrapper onClick={handleClick}>
      <div className='card-body'>
        <h5 className='card-title'>{info.title}</h5>
        <p className='card-text'>{info.cardText}</p>
      </div>
      <div className='card-image'>
        <span>{children}</span>
      </div>
    </CardWrapper>
  )
}

export default Card
