import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding: 60px 40px 40px;
  color: white;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.lavenderDark};
`

const FooterTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
`

const Footer = () => (
  <FooterContainer id='footer'>
    <div>
      <FooterTitle>Let's sea!</FooterTitle> <br /> Remember to follow us on
      social media @Otacruise{' '}
    </div>
  </FooterContainer>
)

export default Footer
