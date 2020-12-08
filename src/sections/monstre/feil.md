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

<>
  <Card
    title="Hovedregler for feilmeldinger"
    color={Card.Color.WHITE}
    border={Card.Border.YELLOW_BORDER}
    titlesize="x-large"
    margin="large"
  >
    <p>
      Feilmeldinger forteller brukeren at noe har gått galt. Det kan være både
      systemfeil og brukerfeil. Den viktigste funksjonen til feilmeldingen er å
      hjelpe brukeren videre. Tenk gjennom hvordan du best mulig kan hjelpe
      brukeren, og skap tillit til ved å tilpasse løsningsteksten. Tenk at du
      snakker direkte med brukeren når du forklarer feilen.
    </p>

    <ul>
      <li>
        Skriv med ord som er lette å forstå, også for ikke-tekniske brukere.
      </li>
      <li>Vær presis ved å spesifisere hva som er feil.</li>
      <li>
        Vær løsningsorientert ved å konkret foreslå, gjerne i trinn, hva
        brukeren kan gjøre for å komme videre.
      </li>
      <li>Test på en kollega eller andre som ikke kjenner løsningen.</li>
    </ul>
  </Card>
  <h2>Systemfeil</h2>

  <h3>Slik skriver du feilmeldinger som gjelder systemfeil:</h3>
  <ul>
    <li>Vis respekt ved å skrive kort, konsist og uten tekniske ord.</li>
    <li>Forklar når brukeren kan prøve igjen, dersom det har en hensikt.</li>
    <li>Vis ansvar og empati ved å forklare at det er vår feil.</li>
    <li>Fortell konkret hvordan brukeren kan komme videre.</li>
    <li>
      Bruk en knapp for å registrere feilen automatisk, hvis det er mulig, og
      vis en kvittering.
    </li>
  </ul>

  <h3>Slik designer du en feilmelding som gjelder systemfeil:</h3>
  <ul>
    <li>La bakgrunnsbildet være dus og inaktivt.</li>
    <li>
      Bruk gul bakgrunnsfarge for generelle feilmeldinger og rød hvis det er av
      høyere alvorlighetsgrad at noe ikke virker som det skal.
    </li>
    <li>
      Bruk varseltrekant som ikon i toppen av feilmeldingen dersom det er en
      feil av mer alvorlig art.
    </li>
  </ul>
  <div className="dodont" style={{ marginLeft: '24px' }}>
    <div className="do">
      <p>Ja</p>
      dialog 1
    </div>
    <div className="dont">
      <p>Nei</p>
      dialog 2
    </div>
  </div>
  <br />
  <div className="dodont" style={{ marginLeft: '24px' }}>
    <div className="do" style={{ maxWidth: '45%' }}>
      <p>Ja</p>
      <MessageBar type={MessageBar.Type.warning}>
        Beklager, vi har en feil. Prøv igjen om 10 minutter. Vedvarer feilen, er
        vi takknemlig som du vil hjelpe oss ved å{' '}
        <Link
          path={'#link'}
          text={'sende automatisk beskjed'}
          icon={'OpenInNew'}
        />{' '}
        til oss.
      </MessageBar>
    </div>
    <div className="dont">
      <p>Nei</p>
      <MessageBar type={MessageBar.Type.warning}>
        Feil i annen tjeneste. Vennligst prøv igjen.
      </MessageBar>
    </div>
  </div>
  <h2>Brukerfeil (valideringsfeil)</h2>

  <h3>Slik skriver du feilmeldinger som skyldes brukerfeil i tekstfelt:</h3>

  <ul>
    <li>
      Vær svært kortfattet og konkret for å hjelpe brukeren videre. I stedet for
      å skrive «Feltet er obligatorisk», fortell hva brukeren skal fylle inn.{' '}
    </li>
    <li>Bruk en vennlig tone og unngå tekniske ord.</li>
  </ul>

  <h3>Slik designer du en feilmelding som brukerfeil i tekstfelt:</h3>
  <ul>
    <li>Bruk rød skrift og merk feltet med rød ramme.</li>
    <li>Plasser feilmeldingen rett ved feltet.</li>
    <li>
      Ta brukeren til feltet med feil dersom brukeren er på annet sted på siden.
    </li>
  </ul>

  <h3>
    Slik skriver du feilmeldinger som skyldes generelle brukerfeil som for
    eksempel valideringsfeil:
  </h3>
  <ul>
    <li>Foreslå hva som kan ha forårsaket feilen og hjelp brukeren videre. </li>
    <li>
      Vær konkret. I stedet for å skrive «Udefinerbar feil», fortell, gjerne
      stegvis, hva brukeren skal gjøre for å komme videre.{' '}
    </li>
    <li>
      Bruk en vennlig tone og unngå tekniske ord. Feilmeldingen skal ha
      brukerens perspektiv og språk.
    </li>
  </ul>
  <p style={{ color: 'red' }}>Gjerne ett eksempel til her.</p>

  <h2>Andre eksempler</h2>

  <Accordion>
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
                iconName="WarningOutline"
                style={{ fontSize: '32px', color: '#1d1d1d' }}
              />
              <p style={{ fontSize: '18px' }}>
                Beklager, vi har en feil. Prøv igjen om 10 minutter. Vedvarer
                feilen, er vi takknemlig som du vil hjelpe oss ved å{' '}
                <Link
                  path={'#link'}
                  text={'sende automatisk beskjed'}
                  icon={'OpenInNew'}
                />{' '}
                til oss.
              </p>
            </div>
          </div>
        </Card>
        <Card color={Card.Color.WHITE} border={Card.Border.GREEN_BORDER}>
          <div style={{ minHeight: '260px', verticalAlign: 'center' }}>
            <div style={{ textAlign: 'center', paddingTop: '40px' }}>
              <Icon
                iconName="WarningOutline"
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
        errorMessage="Denne kan ikke være tom"
      />
      <br />
      <Button buttonStyle="primary">Send inn</Button>
      <ErrorMessage>Skjemaet inneholder 2 feil som må rettes opp.</ErrorMessage>
    </AccordionItem>
  </Accordion>
</>;
```
