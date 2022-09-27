```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { Button } from '@skatteetaten/frontend-components/Button';
import { Card } from '@skatteetaten/frontend-components/Card';
import { DatePicker } from '@skatteetaten/frontend-components/DatePicker';
import { ErrorMessage } from '@skatteetaten/frontend-components/ErrorMessage';
import { ErrorSummary } from '@skatteetaten/frontend-components/ErrorSummary';
import { Icon } from '@skatteetaten/frontend-components/Icon';
import { Image } from '@skatteetaten/frontend-components/Image';
import { Link } from '@skatteetaten/frontend-components/Link';
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';
import { Typography } from '@skatteetaten/frontend-components/Typography';
import { TextField } from '@skatteetaten/frontend-components/TextField';
import { TopStripe } from '@skatteetaten/frontend-components/TopStripe';
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';
import { TopStripeMenu } from '@skatteetaten/frontend-components/TopStripe/TopStripeMenu';
import { TopStripeButton } from '@skatteetaten/frontend-components/TopStripe/TopStripeButton';

import designtokenSpacing from '../../components/utils/designtokens/_spacing.json';
import designtokenFontSizes from '../../components/utils/designtokens/_fontSizes.json';

const marginTopStyle = {
  marginTop: '1rem',
};

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
      Det kan derfor være nyttig å se for seg en samtale med brukeren når du
      tilpasser løsningsteksten.
    </p>

    <ul>
      <li>Bruk et enkelt og forståelig språk. Unngå tekniske ord.</li>
      <li>
        Fortell hva som er feil og hva brukeren skal gjøre for å komme videre.
      </li>
      <li>Unngå for generelle feilmeldinger - skreddersøm er bra.</li>
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
        <li>Skriv kort, konsist og ikke-teknisk.</li>
        <li>
          Forklar når brukeren kan prøve igjen, dersom det har en hensikt.
        </li>
        <li>Vær tydelig på at feilen ikke skyldes brukeren.</li>
        <li>Fortell hvordan brukeren kan komme seg videre.</li>
      </ul>

      <h3>Slik designer du en feilmelding som gjelder systemfeil:</h3>
      <ul>
        <li>Ton ned/dus innholdet bak feilmeldingsboksen. </li>
        <li>
          Bruk varseltrekant som ikon i toppen av feilmeldingen dersom det er en
          feil av mer alvorlig art.
        </li>
        <li>
          Hvis det er mulig, bruk en knapp for å registrere feilen automatisk.
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

      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '37%' }}>
          <p class="title">Ja</p>
          <Image
            src="./assets/png/eks_systemfeil3.png"
            alt="Eksempel på systemfeil: Vi prøver å rette feilen. Forsøk å laste siden på nytt eller prøve igjen om 10 minutter. Takk for tålmodigheten!"
            width="auto"
          />
        </div>
        <div className="do" style={{ maxWidth: '37%' }}>
          <p class="title">Ja</p>
          <Image
            src="./assets/png/eks_systemfeil4.png"
            alt="Eksempel på systemfeil: Liste med aksjonspunkter for å løse feilen."
            width="auto"
          />
        </div>
      </div>

      <div className="dodont" style={{ marginLeft: '24px', marginTop: '24px' }}>
        <div className="do" style={{ maxWidth: '44%' }}>
          <p class="title">Ja</p>
          <MessageBar type={MessageBar.Type.warning}>
            Beklager, vi har en feil. Prøv igjen om 10 minutter. Send gjerne en{' '}
            <Link
              path={'#link'}
              text={'automatisk beskjed'}
              icon={'OpenInNew'}
            />{' '}
            for å hjelpe. Takk for tålmodigheten.
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
      <h3>Slik skriver du feilmeldinger ved brukerfeil i skjemautfylling:</h3>

      <ul>
        <li>Skriv enkelt, kort og konsist for å hjelpe brukeren videre.</li>
        <li>Bruk en vennlig tone og unngå tekniske ord.</li>
        <li>Forklar hva som er feil. </li>
        <li>
          Unngå at samme feilmelding gjenbrukes for ulike felt (For eksempel
          «Ikke gyldig verdi», «Feltet må fylles inn»).
        </li>
      </ul>

      <h3>Slik designer du en feilmelding ved brukerfeil i skjemautfylling:</h3>
      <ul>
        <li>Bruk ikon, rød skrift og rød ramme på feltet.</li>
        <li>Plasser feilmeldingen rett under feltet.</li>
        <li>
          Ta brukeren til feltet med feil dersom brukeren er på annet sted på
          siden.
        </li>
      </ul>

      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '44%' }}>
          <p class="title">Ja</p>
          <div>
            <TextField
              label="Inntektsår"
              value="1009"
              errorMessage={'Inntekståret må være etter 2008.'}
            />
          </div>
          <div style={marginTopStyle}>
            <TextField
              label="E-post"
              value="Ola.Normann.no"
              errorMessage={
                'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'
              }
            />
          </div>
          <div style={marginTopStyle}>
            <TextField
              label="Antall dager i Norge i perioden/inntekståret"
              value=""
              errorMessage={'Antall dager må fylles ut.'}
            />
          </div>
        </div>
        <div className="dont" style={{ maxWidth: '44%' }}>
          <p class="title">Nei</p>
          <div>
            <TextField
              label="Inntektsår"
              value="20"
              errorMessage={'Ugyldig år (YYYY)'}
            />
          </div>
          <div style={marginTopStyle}>
            <TextField
              label="E-post"
              value="Ola.Normann.no"
              errorMessage={'Feil i e-postadressen.'}
            />
          </div>
          <div style={marginTopStyle}>
            <TextField
              label="Antall dager i Norge i perioden/inntekståret"
              value=""
              errorMessage={'Feltet må fylles ut.'}
            />
          </div>
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
        Der hvor innlasting av data i rammer og bokser ikke er mulig, bruker vi
        varselikon, tekstbeskrivelse og løsningsforslag.
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
                Send gjerne en <Link
                  path={'#link'}
                  text={'automatisk beskjed'}
                  icon={'OpenInNew'}
                /> for å hjelpe. <br />
                <br /> Takk for tålmodigheten.
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
      toggleButtonText={'Flere feil på siden'}
      headingLevel="3"
      stepId={'step-3'}
    >
      <p>Hovedregler:</p>
      <ul>
        <li>
          Vi viser ikke brukerfeil eller valideringsfeil uten av brukeren
          foretar seg noe.
        </li>
        <li>
          Brukerfeil vises etter at bruker har lagt inn opplysningene som fører
          til feil. For tekstfelt betyr det for eksempel at valideringsfeil
          først vises etter at brukeren har forlatt feltet, og at feilmeldinger
          knyttet til obligatoriske felt vises ved fullføring, som når brukeren
          trykker «Send inn» i et skjema.
        </li>
        <li>
          Vi viser ikke brukerfeil når opplysningene i feltet er gyldige. (Men
          vi kan bruke et varsel dersom opplysningene er uvanlige eller at vi
          tror de kan være uriktige.
        </li>
      </ul>
      <div>
        <div style={{ maxWidth: '350px' }}>
          <div>
            <TextField
              label="Inntektsår"
              id="input-id1"
              value="1009"
              errorMessage={'Inntekståret må være etter 2008.'}
            />
          </div>
          <div style={marginTopStyle}>
            <TextField
              label="E-post"
              id="input-id2"
              value="Ola.Normann.no"
              errorMessage={
                'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'
              }
            />
          </div>
          <div style={marginTopStyle}>
            <TextField
              label="Antall dager i Norge i perioden/inntekståret"
              id="input-id3"
              value=""
              errorMessage={'Antall dager må fylles ut.'}
            />
          </div>
        </div>
        <div style={marginTopStyle}>
          <ErrorSummary
            title={'For å gå videre må du rette opp i følgende:'}
            errors={[
              {
                id: 'input_aar-input',
                error: 'Inntekståret må være etter 2008',
              },
              {
                id: 'input_epost-input',
                error:
                  'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no',
              },
              { id: 'input_dager-input', error: 'Antall dager må fylles ut.' },
            ]}
          />
        </div>
        <div style={marginTopStyle}>
          <Button buttonStyle="primary">Send inn</Button>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Siden finnes ikke (404)'}
      headingLevel="3"
      stepId={'step-5'}
    >
      <p>
        Når sider ikke finnes (for eksempel ved ugyldig nettadresse) viser vi en
        melding i kjerneområdet mellom topp og bunn:
      </p>
      <div style={{ margin: `${designtokenSpacing['ske-spacing-xl']}` }}>
        <Typography>
          <h2
            style={{ marginBottom: `${designtokenSpacing['ske-spacing-xl']}` }}
          >
            Siden finnes ikke
          </h2>
          <p>Beklager, vi finner ikke siden du ba om.</p>
          <p
            style={{ marginBottom: `${designtokenSpacing['ske-spacing-xl']}` }}
          >
            Du kan prøve å{' '}
            <Link
              path="https://www.skatteetaten.no/sok/"
              text="søke i innholdet"
            />
            , eller navigere deg frem ved å bruke toppmenyen.
          </p>

          <OpenClose title="Teknisk feilmelding" compact iconRight>
            <Typography>
              <p
                style={{
                  fontSize: `${designtokenFontSizes['ske-font-size-xs']}`,
                  marginTop: 0,
                }}
              >
                404: finner ikke siden
              </p>
            </Typography>
          </OpenClose>
        </Typography>
      </div>
    </AccordionItem>
  </Accordion>
</div>;
```
