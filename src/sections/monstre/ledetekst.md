```js noeditor
import {
  Accordion,
  AccordionItem,
  Card,
  Icon,
  Grid,
  LabelWithCallout,
  ComboBox,
  Button,
  Link,
  MessageBar,
  TextField,
  Typography,
  Chip,
  Image,
  Callout,
} from '@skatteetaten/frontend-components';

const [state, setState] = React.useState({
  isTitleCalloutVisible: false,
});

function closeButton() {
  setState({
    isCalloutVisible: false,
  });
}

const eksempel = '[TODO eksempel]';

<div>
  <Card
    title="Hovedregler for ledetekster (label, spørsmålstekst)"
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
          <span style={{ fontSize: '16px' }}>
            <Chip size="standard" className="tipchip">
              <Button buttonStyle="secondary">
                Skjematittel eller spørsmålstekst
              </Button>
            </Chip>
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
              <Chip className="tipchip">Fremskutt hjelpetekst</Chip>
            </Grid.Col>
          </Grid.Row>
        </Grid>

        <div style={{ width: '600px', display: 'flex' }}>
          <div>
            <TextField
              label="Fødselsnr 11 siffer / organisasjonsnr. 9 siffer"
              inputSize={'large'}
              value={state.value}
              onChange={(e, value) => setState({ value })}
            />
          </div>
          <div style={{ paddingLeft: '8px' }}>
            {' '}
            <Chip className="tipchip">
              Feltnavn
              <span class="sr-only">
                Spesifiserer hva brukeren skal fylle ut.
              </span>
            </Chip>
          </div>
        </div>
        <br />
        <div style={{ width: '600px', display: 'flex' }}>
          <div>
            <TextField
              label="Tillatt totaltvekt med tilhenger"
              inputSize={'large'}
              value={state.value}
              onChange={(e, value) => setState({ value })}
              suffix="kg"
            />
          </div>
          <div
            style={{
              paddingLeft: '8px',
              paddingBottom: '4px',
              alignSelf: 'flex-end',
            }}
          >
            {' '}
            <Chip className="tipchip">Enhetsbenevnelse</Chip>
          </div>
        </div>
      </Card>

      <dl>
        <dt id="text-tittel">Skjematittel eller spørsmålstekst</dt>
        <dd>
          1. Ha alltid med en tittel eller spørsmål i skjemaet. Ikke bland
          spørsmål med en spesifikasjon av hva brukeren skal gjøre.
        </dd>

        <dt id="text-fremskutt">Fremskutt hjelpetekst</dt>
        <dd>Skal forklare brukeren hvorfor de skal fylle ut feltet.</dd>
        <dt id="text-feltnavn">Feltnavn</dt>
        <dd>Spesifiserer hva brukeren skal fylle ut.</dd>
        <dt id="text-enhet">Enhetsbenevnelse</dt>
        <dd>
          Viser enhetsbenevnelse ved siden av feltet hvis det er behov for å
          forklare hva vi teller. For eksempel, NOK, kg, dager, måneder og
          kvadratmeter.
        </dd>
      </dl>
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
          Eksempel er knapper med: «Last opp fil», «Avbryt» eller «OK»
        </li>
        <li>Like elementer skal uttrykkes likt gjennom hele skjemaet.</li>
      </ul>

      <p>
        I et skjema er det viktig å vise hva som er overordnet og underordnet.
        Placeholder gir en instruks:
      </p>
      <Card
        margin="large"
        color={Card.Color.WHITE}
        border={Card.Border.GREEN_BORDER}
      >
        <h2 style={{ marginTop: '0px' }}>
          Legg til opplysninger om barn over 12 år
        </h2>

        <div style={{ width: '500px' }}>
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
          <br />
          <MessageBar>
            Forklar hva brukeren skal gjøre i placeholder. Ikke skriv
            spesifikasjon av verdien.
          </MessageBar>
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
        og placeholderteksten gir instruks om å skrive i feltet.
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
      toggleButtonText={
        'Ledetekster i inputfelt for søk eller valg fra liste (Combobox, Dropdown og SearchField) '
      }
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
          (Vær oppmerksom på å skille mellom søk, valg og valg fra liste (ikke
          «søk» fra liste), og bruk riktig ikon og instruks i
          plassholder-teksten, for å veillede brukeren.){' '}
        </li>
        <li>
          Searchfield: Bruk forstørrelsesglass og teksten «skriv søkeord her»
          ved generelt søk og filtreringsikonet og teksten«begynn å skrive» når
          brukeren skal søke fra et utvalg.{' '}
        </li>
        <li>
          Dropdown: Vi benytter denne når brukeren skal kunne krysse av for ett
          eller flere valg i en liste. Skriv «velg» i placeholderen, og pass på
          at det også er mulig å ikke velge noe.{' '}
        </li>
        <li>
          Combobox: Når nedtrekkslisten er lang, er det nyttig at brukeren kan
          skrive i feltet og at det da automtisk kommer opp aktuelle ord fra
          listen. Plassholderteksten må da spesifisere dette, som for eksempel
          «velg eller begynn å skrive» eller «velg eller legg til»
        </li>
      </ul>
    </AccordionItem>
  </Accordion>
</div>;
```
