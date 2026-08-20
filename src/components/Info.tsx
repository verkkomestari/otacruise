import styled from 'styled-components'
import InfoContent from './InfoContent'
import InfoLink from './InfoLink'
import { useParams } from 'react-router-dom'
import infoList from '../assets/infoList'

const InfoBackground = styled.div`
  min-height: 100vh;
  padding: 2em 1em 1em;
  background: ${({ theme }) => theme.colors.blue};};
`

const InfoContainer = styled.div`
  width: min(100% - 2rem, 1140px);
  margin: 50px auto 100px;
  padding: 30px;
  border-radius: 20px;
  background-color: white;

  @media (min-width: 770px) {
    padding: 6em;
  }
`

const InfoLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Sidebar = styled.aside`
  width: 100%;
  padding: 20px 1em 1em;

  @media (min-width: 768px) {
    width: 33.333%;
  }
`

const InfoNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Info = () => {
  const { id } = useParams()

  const infoText = infoList.find((info) => info.id === id) ?? infoList[0]
  return (
    <InfoBackground id='info-bg'>
      <InfoContainer id='info-container'>
        <InfoLayout id='info-container-child'>
          <Sidebar>
            <InfoNav>
              {infoList.map((item) => (
                <li key={item.id}>
                  <InfoLink info={item} />
                </li>
              ))}
            </InfoNav>
          </Sidebar>
          <InfoContent infoItem={infoText} />
        </InfoLayout>
      </InfoContainer>
    </InfoBackground>
  )
}

export default Info
