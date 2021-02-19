```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import Card from '@skatteetaten/frontend-components/Card';
import Icon from '@skatteetaten/frontend-components/Icon';
import TextField from '@skatteetaten/frontend-components/TextField';
import Button from '@skatteetaten/frontend-components/Button';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';
import MessageBar from '@skatteetaten/frontend-components/MessageBar';
import CheckBox from '@skatteetaten/frontend-components/CheckBox';
import ErrorMessage from '@skatteetaten/frontend-components/ErrorMessage';
import DatePicker from '@skatteetaten/frontend-components/DatePicker';
import Image from '@skatteetaten/frontend-components/Image';

<div>
  <Card
    title="Hovedregler for feilmeldinger"
    color={Card.Color.WHITE}
    border={Card.Border.YELLOW_BORDER}
    titlesize="x-large"
    margin="large"
  >
    <p>
      Feilmeldinger forteller brukeren at noe har gått galt, og det kan både
      gjelde systemfeil og brukerfeil. Det er vår jobb å hjelpe brukeren videre.
      Det er derfor nyttig å ta utgangspunkt i en samtale med brukeren når du
      foklarer tilpasser løsningsteksten.
    </p>

    <ul>
      <li>
        Skriv med ord som er lette å forstå, også for ikke-tekniske brukere.
      </li>
      <li>Spesifiser hva som er feil.</li>
      <li>Unngå for generelle feilmeldinger - skreddersøm er bra.</li>
      <li>Foreslå konkret hva brukeren kan gjøre for å komme videre.</li>
      <li>Test på en kollega eller andre som ikke kjenner løsningen.</li>
    </ul>
    <p>
      <i>
        Husk at teksten er en del av designet og viktig for brukeropplevelsen.
      </i>
    </p>
  </Card>

  <h2>Se veiledning for hvordan skrive og designe feilmeldinger:</h2>

  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={'Systemfeil'}
      headingLevel="3"
      stepId={'step-1'}
    >
      <h3>Slik skriver du feilmeldinger som gjelder systemfeil:</h3>
      <ul>
        <li>Vis respekt ved å skrive kort, konsist og uten tekniske ord.</li>
        <li>
          Forklar når brukeren kan prøve igjen, dersom det har en hensikt.
        </li>
        <li>Vis ansvar og empati ved å forklare at det er vår feil.</li>
        <li>Fortell konkret hvordan brukeren kan komme videre.</li>
        <li>
          Bruk en knapp for å registrere feilen automatisk, hvis det er mulig,
          og vis en kvittering.
        </li>
      </ul>

      <h3>Slik designer du en feilmelding som gjelder systemfeil:</h3>
      <ul>
        <li>La bakgrunnen rundt feilmeldingen være dus og inaktiv.</li>
        <li>
          Bruk varseltrekant som ikon i toppen av feilmeldingen dersom det er en
          feil av mer alvorlig art.
        </li>
      </ul>
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '37%' }}>
          <p class="title">Ja</p>
          <Image
            src="./assets/png/eks_systemfeil1.png"
            alt="Eksempel på systemfeil: Beklager – vi har systemfeil. Vi klarte ikke opprette forbindelse til en nødvendig tjeneste. Skal vi sende deg en melding når tjenesten er oppe igjen? "
            width="auto"
          />
        </div>
        <div className="dont" style={{ maxWidth: '37%' }}>
          <p class="title">Nei</p>
          <Image
            src="./assets/png/eks_systemfeil2.png"
            alt="Eksempel på systemfeil: Systemfeil. Prøv igjen senere. Hvis feilen vedvarer, kontakt Skatteetaten.[undefined]"
            width="auto"
          />
        </div>
      </div>
      <br />
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '44%' }}>
          <p class="title">Ja</p>
          <MessageBar type={MessageBar.Type.warning}>
            Beklager, vi har en feil. Prøv igjen om 10 minutter. Vedvarer
            feilen, er vi takknemlig som du vil hjelpe oss ved å{' '}
            <Link
              path={'#link'}
              text={'sende automatisk beskjed'}
              icon={'OpenInNew'}
            />{' '}
            til oss.
          </MessageBar>
        </div>
        <div className="dont">
          <p class="title">Nei</p>
          <MessageBar type={MessageBar.Type.warning}>
            Feil i annen tjeneste. Vennligst prøv igjen.
          </MessageBar>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Brukerfeil (valideringsfeil)'}
      headingLevel="3"
      stepId={'step-2'}
    >
      <h3>Slik skriver du feilmeldinger som skyldes brukerfeil i tekstfelt:</h3>

      <ul>
        <li>
          Vær svært kortfattet og konkret for å hjelpe brukeren videre. I stedet
          for å skrive «Feltet er obligatorisk», fortell hva brukeren skal fylle
          inn.{' '}
        </li>
        <li>Bruk en vennlig tone og unngå tekniske ord.</li>
      </ul>

      <h3>Slik designer du en feilmelding som brukerfeil i tekstfelt:</h3>
      <ul>
        <li>Bruk rød skrift og merk feltet med rød ramme.</li>
        <li>Plasser feilmeldingen rett ved feltet.</li>
        <li>
          Ta brukeren til feltet med feil dersom brukeren er på annet sted på
          siden.
        </li>
      </ul>

      <h3>
        Slik skriver du feilmeldinger som skyldes generelle brukerfeil som for
        eksempel valideringsfeil:
      </h3>
      <ul>
        <li>
          Foreslå hva som kan ha forårsaket feilen og hjelp brukeren videre.{' '}
        </li>
        <li>
          Vær konkret. I stedet for å skrive «Udefinerbar feil», fortell hva
          brukeren skal gjøre for å komme videre.{' '}
        </li>
        <li>
          Bruk en vennlig tone og unngå tekniske ord. Feilmeldingen skal ha
          brukerens perspektiv og språk.
        </li>
      </ul>
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '44%' }}>
          <p class="title">Ja</p>
          <TextField
            label="Inntektsår"
            value="1009"
            errorMessage={'Inntekståret må være etter 2008.'}
          />
          <br />
          <TextField
            label="E-post"
            value="Ola.Normann.no"
            errorMessage={
              'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'
            }
          />
          <br />
          <TextField
            label="Antall dager i Norge i perioden/inntekståret"
            value=""
            errorMessage={'Du må fylle ut antall dager.'}
          />
        </div>
        <div className="dont" style={{ maxWidth: '44%' }}>
          <p class="title">Nei</p>
          <TextField
            label="Inntektsår"
            value="20"
            errorMessage={'Ugyldig år (YYYY)'}
          />
          <br />
          <TextField
            label="E-post"
            value="Ola.Normann.no"
            errorMessage={'Feil i e-postadressen.'}
          />
          <br />
          <TextField
            label="Antall dager i Norge i perioden/inntekståret"
            value=""
            errorMessage={'Feltet må fylles ut.'}
          />
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Feil ved innlasting'}
      headingLevel="3"
      stepId={'step-3'}
    >
      <p>
        I tilfeller hvor vi ikke klarer å laste inn data i rammer og bokser,
        viser vi et varselikon, en forklarende tekst og et forslag til løsning.
      </p>

      <div>
        <Card color={Card.Color.WHITE} border={Card.Border.GREEN_BORDER}>
          <div style={{ minHeight: '260px', verticalAlign: 'center' }}>
            <div style={{ textAlign: 'center', paddingTop: '40px' }}>
              <Icon
                iconName="ErrorOutline"
                style={{ fontSize: '32px', color: '#1d1d1d' }}
              />
              <p style={{ fontSize: '18px' }}>
                Beklager, vi har en feil. Prøv igjen om 10 minutter. <br />
                Vedvarer feilen, er vi takknemlig som du vil hjelpe oss ved å <Link
                  path={'#link'}
                  text={'sende automatisk beskjed'}
                  icon={'OpenInNew'}
                /> til oss.
              </p>
            </div>
          </div>
        </Card>
        <Card color={Card.Color.WHITE} border={Card.Border.GREEN_BORDER}>
          <div style={{ minHeight: '260px', verticalAlign: 'center' }}>
            <div style={{ textAlign: 'center', paddingTop: '40px' }}>
              <Icon
                iconName="ErrorOutline"
                style={{ fontSize: '32px', color: '#1d1d1d' }}
              />
              <p style={{ fontSize: '18px' }}>
                Beklager, vi har en feil. Skal vi kontakte deg når feilen er
                løst?
              </p>
              <Button buttonStyle="primaryRoundedFilled">
                Ja, send melding
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Flere feil i et skjema'}
      headingLevel="3"
      stepId={'step-5'}
    >
      {' '}
      <p>
        Feil skal vises i umiddelbar nærhet til der hvor brukeren trykker eller
        har blikket da feilen oppstår.
      </p>
      <TextField
        id={'my-input1'}
        inputSize={'normal'}
        label={'E-postadresse'}
        value={'min_adresse.no'}
        errorMessage="E-postadressen ser ikke riktig ut."
      />
      <br />
      <TextField
        id={'my-input2'}
        label={'Hva trenger du hjelp til?'}
        multiline
        rows={7}
        value={''}
        errorMessage="Feltet «Hva trenger du hjelp til?» kan ikke være tomt."
      />
      <br />
      <Button buttonStyle="primary">Send inn</Button>
      <ErrorMessage>
        Skjemaet inneholder 2 feil som du må rette opp.
      </ErrorMessage>
    </AccordionItem>
  </Accordion>
</div>;
```
