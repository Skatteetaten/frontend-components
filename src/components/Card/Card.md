** Innholdskort brukes til å gruppere innhold som hører sammen. **

```js
import Card from '@skatteetaten/frontend-components/Card';

const initialState = { title: 'Skatteoppgjøret for 2017' };

<div>
  <Card
    color={Card.Color.BEIGE}
    title={initialState.title}
    isExpanded={false}
    expand
  >
    <p style={{ marginTop: 0 }}>
      De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27. juni.
      Neste mulighet var 15. august, og heretter blir det løpende oppgjør frem
      til 24. oktober. Vi kan dessverre ikke fortelle deg når du får
      skatteoppgjøret ditt, hverken på telefon, chat eller på skattekontoret.
    </p>
  </Card>
  <br />
  <br />
  <Card
    color={Card.Color.GREEN}
    title="Skatteoppgjøret for 2018"
    isExpanded={false}
    expand
  >
    <p style={{ marginTop: 0 }}>
      De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27. juni.
      Neste mulighet var 15. august, og heretter blir det løpende oppgjør frem
      til 24. oktober. Vi kan dessverre ikke fortelle deg når du får
      skatteoppgjøret ditt, hverken på telefon, chat eller på skattekontoret.
    </p>
  </Card>
</div>;
```

Du kan endre tittelen mellom åpen og lukket tilstand

```js
import Card from '@skatteetaten/frontend-components/Card';

const initialState = { title: 'Mine meldinger (2)' };

function onChange(isExpanded) {
  setState({
    title: isExpanded ? 'Mine meldinger' : initialState.title
  });
}

<div>
  <Card
    color={Card.Color.BEIGE}
    title={state.title}
    isExpanded={false}
    onChange={isExpanded => onChange(isExpanded)}
    expand
  >
    <p style={{ marginTop: 0 }}>Melding 1</p>
    <p>Melding 2</p>
  </Card>
</div>;
```

Hvitt kort med ramme:

```js
import Card from '@skatteetaten/frontend-components/Card';
import Grid from '@skatteetaten/frontend-components/Grid';
import TextField from '@skatteetaten/frontend-components/TextField';

<div>
  <Card
    color={Card.Color.WHITE}
    border={Card.Border.GREEN_BORDER}
    title="Du må betale omregistreringsavgift"
    subtitle="Gjelder kjøretøyet PR 12345"
  >
    <Grid padding={'10px 5px 0px 1px'}>
      <Grid.Row>
        <Grid.Col noSpacing xl={2} md={8}>
          <TextField
            id={'my-readonlyfield-1'}
            readOnly
            label="Beløp"
            value={'3600'}
            inputSize={'large'}
            boldText={true}
          />
        </Grid.Col>
        <Grid.Col noSpacing xl={4} md={8}>
          <TextField
            id={'my-readonlyfield-2'}
            readOnly
            label="KID"
            value={'4432 1233 4324 5425'}
            inputSize={'large'}
            boldText={true}
          />
        </Grid.Col>
        <Grid.Col noSpacing xl={3} md={8}>
          <TextField
            id={'my-readonlyfield-3'}
            readOnly
            label="Kontonummer"
            value={'9484 12 31435'}
            inputSize={'large'}
            boldText={true}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </Card>
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Gruppering av innhold skaper mer oversikt</h3>
  <p>
    {' '}
    Vi bruker innholdskort for å gruppere innhold som hører sammen. Kortene er
    formet som fargede eller innrammede bokser med tekst inni, noe som gjør
    informasjonen tydelig for brukeren. Er det mange innholdskort på skjermen
    kan det være nyttig å kollapse dem, slik at brukeren ikke ser mye og ulik
    informasjon på en gang.
  </p>
  <p>
    Er innholdet handlingsrettet, altså at brukeren skal gjøre noe, skal du
    beskrive handlingen i toppen av boksen. Les nærmere i språkprofilen om{' '}
    <a href="https://www.skatteetaten.no/stilogtone/skrive/sprakprofil/aktivt-sprak/">
      hvordan du skriver gode handlingstitler
    </a>
    .
  </p>

  <h3>Ulike farger på boksene har ulike betydninger. Vi bruker</h3>
  <ul>
    <li>Grønn: For hjelp</li>
    <li>Gul: For opplysninger og generelt innhold.</li>
    <li>Hvit med grønn ramme: For konklusjoner og betalingsopplysninger</li>
    <li>Grå: Som bakgrunnsfarge for interne løsninger</li>
  </ul>
  <p>
    Unngå å bruke forskjellig farge på ramme og bakgrunn, for eksempel grønn
    ramme og gul bakgrunn.
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>Det skal kun være ett tabstopp pr ekspander.</li>
    <li>
      Ekspandere skal ha en visuell indikator på at innhold utvides/minimeres.
    </li>
    <li>
      Sjekk at elementet leses som en ekspander med skjermleser og at du
      beholder fokus når du utvider/minimerer den.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-expanded brukes på knappene som utvides/minimeres.</li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermlesere.</li>
  </ul>
</>
```
