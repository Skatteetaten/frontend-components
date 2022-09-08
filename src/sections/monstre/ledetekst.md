```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { Button } from '@skatteetaten/frontend-components/Button';
import { Callout } from '@skatteetaten/frontend-components/Callout';
import { Card } from '@skatteetaten/frontend-components/Card';
import { Chip } from '@skatteetaten/frontend-components/Chip';
import { ComboBox } from '@skatteetaten/frontend-components/ComboBox';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { Icon } from '@skatteetaten/frontend-components/Icon';
import { Image } from '@skatteetaten/frontend-components/Image';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';
import { Link } from '@skatteetaten/frontend-components/Link';
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';
import { TextField } from '@skatteetaten/frontend-components/TextField';
import { Typography } from '@skatteetaten/frontend-components/Typography';

const [state, setState] = React.useState({
  isTitleCalloutVisible: false,
  isHelpCalloutVisible: false,
  isFieldCalloutVisible: false,
  isUnitCalloutVisible: false,
  isNoteCalloutVisible: false,
  isPlaceholderCalloutVisible: false,
});

function closeButton() {
  setState({
    isCalloutVisible: false,
    isHelpCalloutVisible: false,
    isFieldCalloutVisible: false,
    isUnitCalloutVisible: false,
    isPlaceholderCalloutVisible: false,
  });
}

<div>
  <Card
    title="Hovedregler for ledetekster (label, spørsmålstekst og instruks)"
    color={Card.Color.WHITE}
    border={Card.Border.YELLOW_BORDER}
    titlesize="x-large"
    margin="large"
  >
    <p className="mt0">
      Ledetekster blir også kalt label, spørsmålstekst eller instrukser. Disse
      mikrotekstene skal hjelpe brukeren med å fylle ut et skjema, og vi
      plasserer dem i nær tilknytning de feltene de gjelder for. Ledeteksten må
      bidra til at skjemaene blir lette å forstå og enkle å bruke. Hvis vi ikke
      tenker gjennom hvordan vi formulerer ledetekstene, kan det føre til at
      brukeren fyller ut viktig informasjon feil.
    </p>

    <ul>
      <li>Vær kort, men samtidig konkret.</li>
      <li>Spesifisér hva brukeren skal gjøre.</li>
      <li>Test på en kollega eller andre som ikke kjenner løsningen.</li>
    </ul>
    <p>
      <i>
        Husk at teksten er en del av designet og viktig for brukeropplevelsen.
      </i>
    </p>
  </Card>

  <h2>Se nærmere veiledning for ledetekster:</h2>

  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={'Oppbygging av ledetekster i skjema'}
      headingLevel="3"
      stepId={'ledetekst-step-1'}
    >
      <p>
        Ledetekster kan ha forskjellige nivå og funksjoner. Vi skal gi brukeren
        forskjellige råd ut fra nivå.
      </p>
      <Card
        margin="large"
        color={Card.Color.WHITE}
        border={Card.Border.GREEN_BORDER}
      >
        <h2 style={{ marginTop: '0px', marginBottom: '2px' }}>
          Hvem er ny eier av kjøretøyet?{' '}
          <span
            style={{ fontSize: '16px' }}
            ref={(spanElement) => (buttonElement = spanElement)}
          >
            <Chip
              size="standard"
              className="tipchip"
              onClick={() =>
                setState({
                  isTitleCalloutVisible: !state.isTitleCalloutVisible,
                })
              }
            >
              <Button buttonStyle="secondarySimple" aria-haspopup="true">
                Skjematittel
              </Button>
            </Chip>

            {state.isTitleCalloutVisible && (
              <Callout
                target={buttonElement}
                gapSpace={5}
                directionalHint={Callout.POS_TOP_LEFT}
                color={Callout.HELP}
                doNotLayer={true}
                onClose={() => closeButton()}
                onDismiss={() => closeButton()}
              >
                <h3>Skjematittel eller spørsmålstekst</h3>
                <p>
                  Ha alltid med en tittel eller spørsmål i skjemaet. Ikke bland
                  spørsmål med en spesifikasjon av hva brukeren skal gjøre.
                </p>
              </Callout>
            )}
          </span>
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
                <Chip
                  size="standard"
                  className="tipchip"
                  onClick={() =>
                    setState({
                      isHelpCalloutVisible: !state.isHelpCalloutVisible,
                    })
                  }
                >
                  <Button buttonStyle="secondarySimple" aria-haspopup="true">
                    Fremskutt hjelpetekst
                  </Button>
                </Chip>

                {state.isHelpCalloutVisible && (
                  <Callout
                    target={buttonElement1}
                    gapSpace={5}
                    directionalHint={Callout.POS_TOP_LEFT}
                    color={Callout.HELP}
                    doNotLayer={true}
                    onClose={() => closeButton()}
                    onDismiss={() => closeButton()}
                  >
                    <h3>Fremskutt hjelpetekst</h3>
                    <p>
                      Skal forklare brukeren hvorfor de skal fylle ut feltet.
                    </p>
                  </Callout>
                )}
              </span>
            </Grid.Col>
          </Grid.Row>
        </Grid>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <div style={{ maxWidth: '180px', marginBottom: '16px' }}>
            <Card color={Card.Color.BEIGE}>Alle felt må fylles ut.</Card>{' '}
          </div>
          <div
            style={{ fontSize: '16px', marginLeft: '16px' }}
            ref={(spanElement) => (buttonElement5 = spanElement)}
          >
            <Chip
              size="standard"
              className="tipchip"
              onClick={() =>
                setState({
                  isNoteCalloutVisible: !state.isNoteCalloutVisible,
                })
              }
            >
              <Button buttonStyle="secondarySimple" aria-haspopup="true">
                Merkelapp for obligatoriske felt
              </Button>
            </Chip>

            {state.isNoteCalloutVisible && (
              <Callout
                target={buttonElement5}
                gapSpace={5}
                directionalHint={Callout.POS_TOP_RIGHT}
                calloutMinWidth="500"
                color={Callout.HELP}
                doNotLayer={true}
                onClose={() => closeButton()}
                onDismiss={() => closeButton()}
              >
                <h3>Merkelapp for obligatoriske felt</h3>
                <p>
                  Merk toppen av skjemaet med «Alle felt må fylles ut» eller
                  «Felt markert med * må fylles ut». Se{' '}
                  <Link
                    path="#section-obligatoriske-felt"
                    text="mønster for obligatoriske felt"
                  />{' '}
                  for flere detaljer.
                </p>
              </Callout>
            )}
          </div>
        </div>

        <div style={{ minWidth: '600px', display: 'flex' }}>
          <div>
            <TextField
              label="Fødselsnr 11 siffer / organisasjonsnr. 9 siffer"
              inputSize={'large'}
              value={state.value}
              //onChange={(e, value) => setState({ value })}
            />
          </div>
          <div style={{ minWidth: '250px', paddingLeft: '16px' }}>
            <span
              style={{ fontSize: '16px' }}
              ref={(spanElement) => (buttonElement2 = spanElement)}
            >
              <Chip
                size="standard"
                className="tipchip"
                onClick={() =>
                  setState({
                    isFieldCalloutVisible: !state.isFieldCalloutVisible,
                  })
                }
              >
                <Button buttonStyle="secondarySimple" aria-haspopup="true">
                  Feltnavn
                </Button>
              </Chip>

              {state.isFieldCalloutVisible && (
                <Callout
                  target={buttonElement2}
                  gapSpace={5}
                  directionalHint={Callout.POS_TOP_RIGHT}
                  calloutMinWidth="500"
                  color={Callout.HELP}
                  doNotLayer={true}
                  onClose={() => closeButton()}
                  onDismiss={() => closeButton()}
                >
                  <h3>Feltnavn</h3>
                  <p>Spesifiserer hva brukeren skal fylle ut.</p>
                </Callout>
              )}
            </span>
          </div>
        </div>
        <div style={{ width: '600px', display: 'flex', marginTop: '1rem' }}>
          <div>
            <TextField
              label="Tillatt totaltvekt med tilhenger"
              inputSize={'large'}
              value={state.value}
              //onChange={(e, value) => setState({ value })}
              mask={'9999'}
              maskChar={''}
              suffix="kg"
            />
          </div>
          <div
            style={{
              paddingLeft: '16px',
              paddingBottom: '4px',
              alignSelf: 'flex-end',
              minWidth: '300px',
            }}
          >
            <span
              style={{ fontSize: '16px' }}
              ref={(spanElement) => (buttonElement3 = spanElement)}
            >
              <Chip
                size="standard"
                className="tipchip"
                onClick={() =>
                  setState({
                    isUnitCalloutVisible: !state.isUnitCalloutVisible,
                  })
                }
              >
                <Button buttonStyle="secondarySimple" aria-haspopup="true">
                  Enhetsbenevnelse
                </Button>
              </Chip>

              {state.isUnitCalloutVisible && (
                <Callout
                  target={buttonElement3}
                  gapSpace={5}
                  directionalHint={Callout.POS_TOP_RIGHT}
                  calloutMinWidth="500"
                  color={Callout.HELP}
                  doNotLayer={true}
                  onClose={() => closeButton()}
                  onDismiss={() => closeButton()}
                >
                  <h3>Enhetsbenevnelse</h3>
                  <p>
                    {' '}
                    Viser enhetsbenevnelse ved siden av feltet hvis det er behov
                    for å forklare hva vi teller. For eksempel, NOK, kg, dager,
                    måneder og kvadratmeter.
                  </p>
                </Callout>
              )}
            </span>
          </div>
        </div>
      </Card>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Slik stiller du opp ledetekster'}
      headingLevel="3"
      stepId={'ledetekst-step-2'}
    >
      <ul>
        <li>Navnet på skjemaet skal vises på alle undersidene.</li>
        <li>
          Et skjema skal være oversiktlig slik at det er lett å se hva som er
          overordnet og underordnet, og hvilke elementer det er sammenheng
          mellom.
        </li>

        <li>
          Funksjoner i skjemaet bør være tydelige uten skriftlige forklaringer.
          Eksempel er knapper med: «Last opp fil», «Avbryt» eller «Send inn».
        </li>
        <li>Like elementer skal uttrykkes likt gjennom hele skjemaet.</li>
      </ul>

      <p>
        I et skjema er det viktig å vise hva som er overordnet og underordnet.
        Plassholder gir en instruks:
      </p>
      <Card
        margin="large"
        color={Card.Color.WHITE}
        border={Card.Border.GREEN_BORDER}
      >
        <h2 style={{ marginTop: '0px' }}>
          Legg til opplysninger om barn over 12 år
        </h2>

        <div style={{ display: 'flex' }}>
          <div style={{ maxWidth: '500px' }}>
            <ComboBox
              label="Velg type opplysninger du vil legge til"
              help="Dette feltet foreslår en verdi når du begynner å skrive. Du kan også bla gjennom listen og velge på den måten."
              placeholder="Velg eller begynn å skrive"
              inputSize="large"
              options={[
                { key: 'A', text: 'Bosted', value: 'Bosted' },
                { key: 'B', text: 'Alder', value: 'Alder' },
                { key: 'C', text: 'Foresatt', value: 'Foresatt' },
                { key: 'D', text: 'Frikort', value: 'Frikort' },
                { key: 'E', text: 'Andre opplysninger', value: 'Andre' },
              ]}
              allowFreeform={false}
              ariaLabel="Eksempel ComboBox"
              useComboBoxAsMenuWidth
              calloutFloating={false}
            />
          </div>
          <div
            style={{
              paddingLeft: '16px',
              paddingBottom: '4px',
              alignSelf: 'flex-end',
              minWidth: '300px',
            }}
          >
            <span
              style={{ fontSize: '16px' }}
              ref={(spanElement) => (buttonElement6 = spanElement)}
            >
              <Chip
                size="standard"
                className="tipchip"
                onClick={() =>
                  setState({
                    isPlaceholderCalloutVisible: !state.isPlaceholderCalloutVisible,
                  })
                }
              >
                <Button buttonStyle="secondarySimple" aria-haspopup="true">
                  Plassholder med instruks
                </Button>
              </Chip>

              {state.isPlaceholderCalloutVisible && (
                <Callout
                  target={buttonElement6}
                  gapSpace={5}
                  directionalHint={Callout.POS_TOP_LEFT}
                  color={Callout.HELP}
                  doNotLayer={true}
                  onClose={() => closeButton()}
                  onDismiss={() => closeButton()}
                >
                  <h3>Plassholder med forklaring</h3>
                  <p>
                    Forklar hva brukeren skal gjøre i plassholderen. Ikke skriv
                    spesifikasjon av verdien.
                  </p>
                </Callout>
              )}
            </span>
          </div>
        </div>
      </Card>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Slik skriver du ledetekster'}
      headingLevel="4"
      stepId={'ledetekst-step-3'}
    >
      <ul>
        <li>Skriv alltid en tittel eller still et spørsmål i toppen.</li>
        <li>
          Bruk ord og uttrykk som brukeren forstår, og unngå fagsjargong. For
          eksempel kan ordet «filtrer» byttes ut med «velg blant aktuelle».
        </li>

        <li>
          Bruk spørsmålsikonet for å forklare ytterligere og for å sikre at
          brukeren forstår – gjerne med ett eller flere eksempler.
        </li>

        <li>
          Pass på å ikke bruke spørsmålsikonet fordi du har vanskelige uttrykk i
          skjemaet. Da skal vi i stedet jobbe med et forståelig språk i skjemaet
          vårt.
        </li>

        <li>
          Bruk du-form når du stiller spørsmål og gir informasjon. Det vil si at
          brukeren skal svare i jeg-form, der det er aktuelt.{' '}
        </li>

        <li>
          Vi bruker plassholder (placeholder) som instruks, som for eksempel
          «Begynn å skrive». Plassholder skal ikke være identisk med eller
          erstatte feltnavnet. Vi bruker det aldri som formatvisning, som
          foreksemel «dd.mm.åååå», da dette utfordrer arbeidsminnet.
        </li>
      </ul>
      <p>
        Tittelen i ja-eksempelet er kort men konkret, og plassert i toppen av
        skjemaet. Ledeteksten forklarer med vanlige ord hva brukeren skal gjøre,
        og plassholderteksten gir instruks om å skrive i feltet.
      </p>
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '44%' }}>
          <p className="title">Ja</p>
          <Card
            margin="large"
            color={Card.Color.WHITE}
            border={Card.Border.GREY_BORDER}
          >
            <h2 style={{ marginTop: '0px' }}>
              Legg til opplysninger om barn over 12 år
            </h2>

            <div style={{ maxWidth: '500px' }}>
              <ComboBox
                label="Velg type opplysninger du vil legge til"
                placeholder="Velg eller begynn å skrive"
                help="Bruk spørsmålsikonet for å forklare ytterligere og for å sikre at brukeren forstår – gjerne med ett eller flere eksempler."
                inputSize="large"
                options={[
                  { key: 'A', text: 'Bosted', value: 'Bosted' },
                  { key: 'B', text: 'Alder', value: 'Alder' },
                  { key: 'C', text: 'Foresatt', value: 'Foresatt' },
                  { key: 'D', text: 'Frikort', value: 'Frikort' },
                  { key: 'E', text: 'Andre opplysninger', value: 'Andre' },
                ]}
                allowFreeform={false}
                ariaLabel="Eksempel ComboBox"
                useComboBoxAsMenuWidth
                calloutFloating={false}
              />
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
            <h2 style={{ marginTop: '0px' }}>Legg til opplysninger</h2>
            <p>
              Her finner du en liste med opplysninger du kan legge til for barn
              over 12 år
            </p>

            <div style={{ maxWidth: '500px' }}>
              <ComboBox
                label="Filtrer listen med opplysninger"
                inputSize="large"
                options={[
                  { key: 'A', text: 'Bosted', value: 'Bosted' },
                  { key: 'B', text: 'Alder', value: 'Alder' },
                  { key: 'C', text: 'Foresatt', value: 'Foresatt' },
                  { key: 'D', text: 'Frikort', value: 'Frikort' },
                  { key: 'E', text: 'Andre opplysninger', value: 'Andre' },
                ]}
                allowFreeform={false}
                ariaLabel="Eksempel ComboBox"
                useComboBoxAsMenuWidth
                calloutFloating={false}
              />
            </div>
          </Card>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Ledetekster i Combobox, Dropdown og SearchField'}
      headingLevel="3"
      stepId={'ledetekst-step-4'}
    >
      <ul>
        <li>
          I <a href="#searchfield">Searchfield</a> (søkefelt),{' '}
          <a href="#dropdown">Dropdown</a> (nedtrekksliste) og{' '}
          <a href="#combobox">Combobox</a> (nedtrekksliste med skriving), skal
          vi ha med plassholdertekst i tillegg til riktig ikon.
        </li>
        <li>
          Searchfield: Bruk forstørrelsesglass og teksten «skriv søkeord her»
          ved generelt søk og filtreringsikonet og teksten «begynn å skrive» når
          brukeren skal søke fra et utvalg.
        </li>
        <li>
          Dropdown: Vi benytter denne når brukeren skal kunne krysse av for ett
          eller flere valg i en liste. Skriv «Velg» i plassholderen, og pass på
          at det også er mulig å ikke velge noe.
        </li>
        <li>
          Combobox: Når nedtrekkslisten er lang, er det nyttig at brukeren kan
          skrive i feltet og at det da automtisk kommer opp aktuelle ord fra
          listen. Plassholderteksten må da spesifisere dette, som for eksempel
          «velg eller begynn å skrive» eller «velg eller legg til».
        </li>
      </ul>
    </AccordionItem>
  </Accordion>
</div>;
```
