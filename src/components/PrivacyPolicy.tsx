import styled from 'styled-components';

const Page = styled.main`
  min-height: 100vh;
  padding: 2rem 1rem 6rem;
  background: ${({ theme }) => theme.colors.blue};
`;

const Container = styled.article`
  width: min(100%, 900px);
  margin: 2rem auto 0;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.panel};
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    padding: 4rem 5rem;
  }
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  line-height: 1.2;
`;

const DocumentLink = styled.a`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 700;
  text-underline-offset: 3px;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Intro = styled.p`
  margin: 0 0 2rem;
  line-height: 1.7;
`;

const Section = styled.section`
  margin-top: 2rem;
`;

const Heading = styled.h2`
  margin: 0 0 0.75rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.25rem;
  line-height: 1.4;
`;

const Paragraph = styled.p`
  margin: 0 0 1rem;
  line-height: 1.7;
  white-space: pre-line;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 1.5rem;
  line-height: 1.7;
`;

const PrivacyPolicy = () => (
  <Page>
    <Container>
      <Title>Tietosuojaseloste – tapahtumien ilmoittautumisrekisteri</Title>
      <Intro>
        Tämä on EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja
        tietosuojaseloste.
        <br />
        Laatimispäivämäärä 18.6.2021. Viimeisin muutos 3.9.2026.
      </Intro>

      <Section>
        <Heading>1. Rekisterinpitäjä</Heading>
        <Paragraph>
          Otaniemen Merikerho ry{`\n`}Servinkuja 3 B 36, 02150 Espoo
        </Paragraph>
      </Section>

      <Section>
        <Heading>2. Rekisterinpitäjän edustaja</Heading>
        <Paragraph>
          Puheenjohtaja Elias Hannula, amiraali@merikerho.net
        </Paragraph>
      </Section>

      <Section>
        <Heading>3. Rekisterinhoitaja</Heading>
        <Paragraph>
          Hallituksen sihteeri Atte Vilenius, perasin@merikerho.net
        </Paragraph>
      </Section>

      <Section>
        <Heading>4. Rekisterin nimi</Heading>
        <Paragraph>
          Otaniemen Merikerhon tapahtumien ilmoittautumisrekisteri
        </Paragraph>
      </Section>

      <Section>
        <Heading>
          5. Oikeusperuste ja henkilötietojen käsittelyn tarkoitus
        </Heading>
        <Paragraph>
          EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste
          henkilötietojen käsittelylle on rekisterinpitäjän oikeutettu etu.
        </Paragraph>
        <Paragraph>
          Henkilötietojen käsittelyn tarkoitus on vahvistaa tapahtumiin
          osallistuminen ja tietojen oikeellisuus, sekä parantaa tapahtumien
          laatua huomioimalla henkilökohtaiset toiveet. Lisäksi tietoja voidaan
          käyttää henkilöiden laskuttamiseen, mikäli kyseessä on maksullinen
          tapahtuma.
        </Paragraph>
      </Section>

      <Section>
        <Heading>6. Rekisterin tietosisältö</Heading>
        <Paragraph>
          Rekisteriin tallennettavat tiedot on ilmoitettu tapahtumakohtaisesti.
          Tietoja voivat olla esimerkiksi:
        </Paragraph>
        <List>
          <li>Täydellinen nimi</li>
          <li>Sähköpostiosoite</li>
          <li>Puhelinnumero</li>
          <li>Syntymäaika</li>
          <li>Vaihtuvat tapahtumakohtaiset lisätiedot</li>
        </List>
      </Section>

      <Section>
        <Heading>7. Säännönmukaiset tietolähteet</Heading>
        <Paragraph>
          Rekisteriin tallennettavat tiedot saadaan sähköisellä lomakkeella.
        </Paragraph>
      </Section>

      <Section>
        <Heading>
          8. Tietojen luovuttaminen ja tietojen siirto EU:n tai ETA:n
          ulkopuolelle
        </Heading>
        <Paragraph>
          Tietoja luovutetaan vain Otaniemen Merikerho ry:n hallituksen
          jäsenille sekä tapahtuman järjestäjille. Tietoja ei luovuteta muille
          tahoille ilman henkilön suostumusta.
        </Paragraph>
        <Paragraph>
          Rekisterinpitäjä ei pääsääntöisesti luovuta tietoja kolmansille
          osapuolille, eikä luovuta tietoja EU:n tai ETA:n ulkopuolelle.
        </Paragraph>
      </Section>

      <Section>
        <Heading>9. Rekisterin suojauksen periaatteet</Heading>
        <Paragraph>
          Rekisterin käsittelyssä noudatetaan huolellisuutta. Tietoja
          säilytetään sähköisessä muodossa luotettavassa ja EU:n
          tietosuojalainsäädäntöä noudattavan kolmannen osapuolen
          internetpalvelimilla, jossa ne on suojattu asianmukaisin salasanoin ja
          käyttäjätunnuksin.
        </Paragraph>
        <Paragraph>
          Osia tiedoista voidaan säilyttää väliaikaisesti paperisena versioina
          tapahtuman järjestämisen aikana, minkä jälkeen kaikki paperiset
          versiot tuhotaan.
        </Paragraph>
        <Paragraph>
          Rekisterinpitäjä huolehtii siitä, että rekisteriin on pääsy vain
          asiaankuuluvilla henkilöillä.
        </Paragraph>
      </Section>

      <Section>
        <Heading>
          10. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista
        </Heading>
        <Paragraph>
          Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa
          rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen
          tiedon korjaamista tai puutteellisen tiedon täydentämistä.
        </Paragraph>
        <Paragraph>
          Tarkastusoikeuden käyttäminen kohtuullisissa määrin on maksutonta.
        </Paragraph>
        <Paragraph>
          Mikäli henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia
          niihin oikaisua, pyyntö tulee lähettää kirjallisesti omakätisesti
          allekirjoitettuna rekisterinpitäjälle, -hoitajalle tai yhdistyksen
          hallitukselle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön
          esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa
          asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa
          (pääsääntöisesti kuukauden kuluessa).
        </Paragraph>
      </Section>

      <Section>
        <Heading>11. Rekisterin tietojen säilytysaika</Heading>
        <Paragraph>
          Rekisterissä säilytetään tietoja vain niin kauan kuin tarpeellista.
          Jos tietoja ei tarvita tapahtuman jälkeen, ne pyritään poistamaan
          pikimmiten, viimeistään kuukausi tapahtuman jälkeen.
        </Paragraph>
        <Paragraph>
          Mikäli osaa tiedoista tarvitaan vielä tämän jälkeen esimerkiksi
          osallistumismaksujen perintään, voidaan tarvittavia tietoja säilyttää
          tilikauden loppuun tai kunnes maksut on saatu käsiteltyä. Tarpeeton
          osa tiedoista pyritään kuitenkin tässäkin tapauksessa poistamaan
          viimeistään kuukausi tapahtuman jälkeen.
        </Paragraph>
      </Section>
    </Container>
  </Page>
);

export default PrivacyPolicy;
