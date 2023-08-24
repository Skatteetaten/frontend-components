```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { Button } from '@skatteetaten/frontend-components/Button';
import { IconButton } from '@skatteetaten/frontend-components/IconButton';
import { Card } from '@skatteetaten/frontend-components/Card';
import { Callout } from '@skatteetaten/frontend-components/Callout';
import { OpenClose } from '@skatteetaten/frontend-components/OpenClose';
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';
import { Link } from '@skatteetaten/frontend-components/Link';
import { TextField } from '@skatteetaten/frontend-components/TextField';
import { Chip } from '@skatteetaten/frontend-components/Chip';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { Table } from '@skatteetaten/frontend-components/Table';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';

const [state, setState] = React.useState({
  isTableCalloutVisible: false,
});

function closeButton() {
  setState({
    isTableCalloutVisible: false,
  });
}

const columns = [
  {
    name: 'Måned',
    fieldName: 'month',
    sortable: true,
    autohideSorting: false,
  },
  {
    name: 'Beløp',
    fieldName: 'amount',
    alignment: 'right',
    sortable: true,
    autohideSorting: false,
  },
  {
    name: 'Dekningsgrad',
    fieldName: 'coverage',
    alignment: 'right',
  },
  {
    name: (
      <div ref={(divElement) => (buttonElement = divElement)}>
        <span>Avkastning</span>
        <span>
          <IconButton
            title={'Hjelp avkastning'}
            buttonSize="medium"
            icon={'HelpOutline'}
            onClick={() =>
              setState({
                isTableCalloutVisible: !state.isTableCalloutVisible,
              })
            }
          />
        </span>
      </div>
    ),
    fieldName: 'revenue',
    alignment: 'right',
  },
];

const data = [
  {
    month: 'Januar',
    amount: '5 426',
    coverage: '100 %',
    revenue: '1 000',
  },
  {
    month: 'Februar',
    amount: '5 432',
    coverage: '50 %',
    revenue: '500',
  },
  {
    month: 'Mars',
    amount: '4 899',
    coverage: '20 %',
    revenue: '2 000',
  },
  {
    month: 'April',
    amount: '2 344',
    coverage: '30 %',
    revenue: '1 055',
  },
];

<div>
  <Card
    title="Hovedregler for hjelpetekster"
    color={Card.Color.WHITE}
    border={Card.Border.YELLOW_BORDER}
    titlesize="x-large"
    margin="large"
  >
    <p>
      Hjelpetekster er veiledninger som hjelper brukeren i en digital løsning
      der ledeteksten ikke er tilstrekkelig forståelig. Vi skiller mellom
      fremskutt hjelpetekst hvor tekstsnutten vises uoppfordret, og selvvalgt
      hjelpetekst hvor brukeren selv velger å hente den fram ved å klikke på
      spørsmålsikonet. Hvis vi må forklare mer utdypende kan hjelpeteksten
      presenteres på en fordypningsside. I saksbehandlingsløsninger kan
      hjelpetekster også bli kalt merknadstekster. De fungerer da som
      kontrolltekster hvor saksbehandlere blir gjort oppmerksom på noe.
    </p>

    <ul>
      <li>
        Gjør alltid en vurdering av om hjelpetekst faktisk er nødvendig. Kan
        ledeteksten justeres noe for å bli enklere å forstå og slik fjerne
        behovet for ekstra forklaring?
      </li>
      <li>
        Vær kortfattet og bruk ord som er lette å forstå for alle brukere. Det
        innebærer å unngå stammespråk og vanskelige ord. Dersom du <i>må</i>{' '}
        bruke fagord (for eksempel forskuddsskatt) skal det det alltid være
        hjelpetekst.
      </li>

      <li>Test på en kollega eller andre som ikke kjenner løsningen.</li>
    </ul>
    <p>
      <i>
        Husk at teksten er en del av designet og viktig for brukeropplevelsen.
      </i>
    </p>
  </Card>

  <h2>Se nærmere veiledning for hjelpetekster:</h2>

  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={'Ulike varianter av hjelpetekst'}
      headingLevel="3"
      stepId={'step-1'}
    >
      <p>
        Hjelpetekster kan vises uoppfordret, som regel i introduksjonen i et
        skjema. De kan også presenteres ved at brukeren velger å lese mer
        informasjon ved å klikke på et ikon med spørsmålstegn. I tillegg kan de
        være henvisninger til fordypningssider med mer informasjon.
      </p>
      <Card
        margin="large"
        color={Card.Color.WHITE}
        border={Card.Border.GREEN_BORDER}
      >
        <h2 style={{ marginTop: '0px', marginBottom: '2px' }}>
          Hvem er ny eier av kjøretøyet?
        </h2>

        <Grid padding="0px">
          <Grid.Row>
            <Grid.Col sm={8} noSpacing>
              <p className="mt0">
                Før vi kan hjelpe deg videre må du oppgi hvem som er den nye
                eieren av kjøretøyet.
              </p>
            </Grid.Col>
            <Grid.Col sm={4} noSpacing>
              <span
                style={{ fontSize: '16px' }}
                ref={(spanElement) => (buttonElement1 = spanElement)}
              >
                <Chip size="standard" className="tipchip">
                  Fremskutt hjelpetekst
                </Chip>
              </span>
            </Grid.Col>
          </Grid.Row>
        </Grid>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <div style={{ maxWidth: '180px', marginBottom: '16px' }}>
            <Card color={Card.Color.BEIGE}>Alle felt må fylles ut.</Card>{' '}
          </div>
        </div>

        <div>
          <Grid padding="0px">
            <Grid.Row>
              <Grid.Col sm={8} noSpacing>
                <TextField
                  label="Fødselsnummer (11 tall) eller organisasjonsnummer (9 tall)"
                  inputSize={'large'}
                  required
                  value={state.value}
                />
              </Grid.Col>
              <Grid.Col sm={4} noSpacing>
                <span style={{ fontSize: '16px' }}>
                  <Chip size="standard" className="tipchip">
                    Formathjelp i ledetekst
                  </Chip>
                </span>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <Grid padding="0px">
            <Grid.Row>
              <Grid.Col sm={5} noSpacing>
                <TextField
                  label="Tillatt totalvekt med tilhenger"
                  inputSize={'large'}
                  required
                  value={state.value}
                  mask={'9999'}
                  maskChar={''}
                  suffix="kg"
                  help={
                    <div>
                      <p>
                        Dette vil si vekten du har lov å ha på kjøretøyet ditt i
                        tillegg til vekten på tilhenger. Opplysninger finnes i
                        vognkortet på bilen.
                      </p>
                      <p style={{ marginTop: '1rem' }}>
                        Les mer:
                        <Link
                          path={'#link'}
                          text={'Finn totalvekt for kjøretøyet ditt.'}
                        />
                      </p>
                    </div>
                  }
                />
              </Grid.Col>
              <Grid.Col sm={7} noSpacing>
                <span style={{ fontSize: '16px' }}>
                  <Chip size="standard" className="tipchip">
                    Selvvalgt hjelpetekst (med henvisning)
                  </Chip>
                </span>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>
      </Card>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Slik stiller du opp selvvalgte hjelpetekster'}
      headingLevel="3"
      stepId={'step-2'}
    >
      <ul>
        <li>
          Bruk grønn bakgrunnsfarge og plasser den selvvalgte hjelpeteksten i en
          utropsboks.
        </li>
        <li>
          Juster plasseringen av utropsboksen slik at den skyver resterende
          innhold i skjemaet ditt nedover dersom dette er mulig. Boksen skal
          ikke dekke tekst eller felt i skjemaer.
        </li>
        <li>
          I toppraden i tabeller bør du legge utropsboksen over i stedet for
          under, slik at tabellinnholdet framstår i sammenheng.
        </li>
        <li>
          Bruk avsnitt i lengre hjelpetekster, dette skaper luft og gjør
          informasjonen mer oversiktlig for brukeren.
        </li>
        <li>Bruk autolukking.</li>
      </ul>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Slik skriver du hjelpetekster'}
      headingLevel="3"
      stepId={'step-3'}
    >
      <ul>
        <li>
          Skriv direkte til brukeren. Bruk du-form når du gir informasjon – da
          blir interaksjonen mer som en samtale og dermed mer intuitiv.
        </li>
        <li>
          Bytt ut vanskelige ord i skjemaet framfor å skrive hjelpetekster som
          forklarer det vanskelige ordet. Klarspråk gjelder for alle tekster.
        </li>
        <li>
          Bruk ord og uttrykk som er kjente for brukeren og som gjerne relaterer
          til skjematittelen. Vanskelige ord kan stå i parentes i hjelpeteksten.
        </li>
        <li>
          Bruk gjerne eksempler. De er særlig nyttige i omfattende skjemaer
          fordi brukeren da enklere kan forstå hva som forventes å fylle ut.
        </li>
        <li>
          Hjelpetekster i selve utfyllingsområdet må være svært kortfattet. Bruk
          selvvalgt hjelpetekst hvis det er behov for utfyllende informasjon.
        </li>
      </ul>
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '44%' }}>
          <p className="title">Ja</p>
          <Card
            margin="large"
            color={Card.Color.WHITE}
            border={Card.Border.GREY_BORDER}
          >
            <h2 style={{ marginTop: '0px' }}>Bank- og kontoopplysninger</h2>

            <Card color={Card.Color.BEIGE}>
              Felt markert med * må fylles ut.
            </Card>
            <div className="mt16">
              <TextField
                label={'Bankens navn'}
                readOnly
                value="Sparebank 1"
                boldText
              />
            </div>
            <div className="mt16">
              <TextField
                label={'Kontonummer'}
                readOnly
                value="09040 90 01010"
                boldText
              />
            </div>

            <div className="mt16">
              <OpenClose
                isOpen={true}
                title={'Samlet beløp i banken'}
                headingLevel={2}
              >
                <TextField
                  requiredWithMark
                  label="Samlet beløp i banken"
                  help={
                    <div>
                      <p>
                        Her legger du inn det samlede beløpet (innskuddet) du
                        hadde på kontoen per 31. desember i inntektsåret.
                        Beløpet finner du årsoppgaven fra banken din.
                      </p>
                      <p style={{ marginTop: '1rem' }}>
                        Les mer om{' '}
                        <Link
                          path={'#link'}
                          text={'samlet beløp i banken (bankinnskudd)'}
                        />
                      </p>
                    </div>
                  }
                />
              </OpenClose>
            </div>
          </Card>
        </div>
        <div className="dont" style={{ maxWidth: '44%' }}>
          <p className="title">Nei</p>
          <Card
            margin="large"
            color={Card.Color.WHITE}
            border={Card.Border.GREY_BORDER}
          >
            <h2 style={{ marginTop: '0px' }}>Bank- og kontoopplysninger</h2>

            <p>Felt markert med * må fylles ut.</p>

            <div className="mt16">
              <TextField
                label={'Bankens navn'}
                readOnly
                value="Sparebank 1"
                boldText
              />
            </div>
            <div className="mt16">
              <TextField
                label={'Kontonummer'}
                readOnly
                value="09040 90 01010"
                boldText
              />
            </div>

            <div className="mt16">
              <OpenClose isOpen={true} title={'Innskudd'} headingLevel={2}>
                <TextField
                  requiredWithMark
                  label="Innskudd"
                  help={
                    <div>
                      <p>
                        Her legger du inn det samlede beløpet (innskuddet) du
                        hadde på kontoen per 31. desember i inntektsåret.
                        Beløpet finner du årsoppgaven fra banken din.
                      </p>
                      <p style={{ marginTop: '1rem' }}>
                        Les mer om <Link path={'#link'} text={'bankinnskudd'} />
                      </p>
                    </div>
                  }
                />
              </OpenClose>
            </div>
          </Card>
        </div>
      </div>
      <p>
        I ja-eksempelet har vi byttet ut feltnavnet «kontofører/bank» med «Navn
        på bank eller forvaltningsselskap (selger)» for at dette skal bli bedre
        tilgjengelig for brukeren slik at vi ikke trenger hjelpetekst. Hvis vi
        mener «eller» trenger vi ikke bruke «/», skråstreken kan gi unødvendig
        kognitiv last.
      </p>
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '44%' }}>
          <p className="title">Ja</p>
          <h2>Verdipapirfond</h2>
          <p>Hvis du sparer i fond, skal du føre det opp her.</p>
          <TextField label="Navn på bank eller forvaltningsselskap (selger)" />
        </div>
        <div className="dont" style={{ maxWidth: '44%' }}>
          <p className="title">Nei</p>
          <h2>Verdipapirfond</h2>
          <TextField
            label="Kontofører/bank"
            help="Her legger du inn forvaltningsselskapet eller annen selgers navn"
          />
        </div>
      </div>
    </AccordionItem>
  </Accordion>
</div>;
```
