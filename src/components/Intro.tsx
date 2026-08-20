import styled from 'styled-components'
import HomeCards from './HomeCards'
import tausta from '../assets/images/meritausta-2.jpg'

//Alotusssivun alla oleva esittelyosio

interface IntroProps {
  introRef: React.RefObject<HTMLDivElement>
}

const IntroSection = styled.div<{ $background: string }>`
  width: 100%;
  overflow: hidden;
  text-align: center;
  color: white;
  background: url(${({ $background }) => $background}) center / cover;
`

const Spacer = styled.div`
  height: 10vh;
`

const IntroCopy = styled.div`
  width: min(100% - 2rem, 760px);
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.375rem;
  background-color: #9bd4ac;
`

const IntroTitle = styled.h1`
  margin: 0 0 0.5rem;
  font-family: 'Mochiy Pop One', 'Gill Sans', sans-serif;
  font-size: 2.5rem;
  letter-spacing: 4px;
`

const IntroText = styled.p`
  margin: 3rem;
  font-size: 1.5rem;
  line-height: 1.5;
`

const Intro = ({ introRef }: IntroProps) => {
  return (
    <IntroSection ref={introRef} id='intro' $background={tausta}>
      <Spacer />
      <IntroCopy>
        <IntroTitle>Ahoy, Matey!</IntroTitle>
        <IntroText>
          Want to step on an unforgettable adventure across the Baltic Sea?
          Otacruise will once again welcome all of Otaniemi to a ship full of
          entertainment. The cruise will sail from Helsinki to Stockholm and
          back, carrying more than 2500 party-craving students.
        </IntroText>
      </IntroCopy>
      <HomeCards />
    </IntroSection>
  )
}

export default Intro
