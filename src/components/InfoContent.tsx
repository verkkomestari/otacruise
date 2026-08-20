// The text content on Info page
import type { TInfoList } from '../assets/infoList'
import styled from 'styled-components'

interface InfoContentProps {
  infoItem: TInfoList[number]
}

const Content = styled.main`
  width: 100%;

  @media (min-width: 768px) {
    width: 66.667%;
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
`

const PageBody = styled.div`
  margin-bottom: 1rem;
`

const Subtitle = styled.h2<{ $faq: boolean }>`
  padding-left: 1px;
  padding-bottom: ${({ $faq }) => ($faq ? '0.25rem' : '0')};
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 900;
  letter-spacing: 2px;
`

const BodyText = styled.p<{ $faq: boolean }>`
  padding-bottom: ${({ $faq }) => ($faq ? '1.5rem' : '0')};
`

const LinkButton = styled.a`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.colors.brandDark};
  border-radius: ${({ theme }) => theme.radii.button};
  color: ${({ theme }) => theme.colors.brandDark};
  background-color: ${({ theme }) => theme.colors.lavender};
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.lavender};
    background-color: ${({ theme }) => theme.colors.brandDark};
    border-color: ${({ theme }) => theme.colors.brandDark};
  }
`

const InfoContent = ({ infoItem }: InfoContentProps) => {
  return (
    <Content>
      <Title>{infoItem.title}</Title>
      {infoItem.title === 'Tickets' ? (
        <div>
          <LinkButton
            href='https://kide.app/events/093d480a-c091-44d6-82f4-627da1e4872f'
            target='_blank'
            rel='noreferrer'
          >
            Go to Kide.app!
          </LinkButton>
        </div>
      ) : (
        <></>
      )}
      {infoItem.content.map((part, idx) => (
        <PageBody key={idx}>
          <Subtitle $faq={infoItem.id === 'faq'}>{part.subtitle}</Subtitle>
          <BodyText $faq={infoItem.id === 'faq'}>{part.body}</BodyText>
        </PageBody>
      ))}
      {infoItem.title === 'Safety & guidelines' ? (
        <div>
          <LinkButton
            href='https://forms.gle/oqCWaBzqa1LfHrS97'
            target='_blank'
            rel='noreferrer'
          >
            Harassment report form
          </LinkButton>
        </div>
      ) : (
        <></>
      )}
      {infoItem.title === 'About Us' ? (
        <div>
          <LinkButton
            href='https://forms.gle/vk15w6hemVJftMCp6'
            target='_blank'
            rel='noreferrer'
          >
            Application form
          </LinkButton>
        </div>
      ) : (
        <></>
      )}
    </Content>
  )
}

export default InfoContent
