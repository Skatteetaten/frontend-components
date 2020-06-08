** Innholdskort brukes til å gruppere innhold som hører sammen. **

```js
import { Card } from '@skatteetaten/frontend-components';

const initialState = { title: 'Skatteoppgjøret for 2017' };

<div>
  <Card
    color={Card.Color.BEIGE}
    title={initialState.title}
    circleOnIcon={false}
    isExpanded={false}
    expand
  >
    <p>
      De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27. juni.
      Neste mulighet var 15. august, og heretter blir det løpende oppgjør frem
      til 24. oktober. Vi kan dessverre ikke fortelle deg når du får
      skatteoppgjøret ditt, hverken på telefon, chat eller på skattekontoret.
    </p>
  </Card>
  <br />
  <Card
    color={Card.Color.GREEN}
    title="Skatteoppgjøret for 2018"
    circleOnIcon={false}
    isExpanded={false}
    expand
  >
    <p>
      De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27. juni.
      Neste mulighet var 15. august, og heretter blir det løpende oppgjør frem
      til 24. oktober. Vi kan dessverre ikke fortelle deg når du får
      skatteoppgjøret ditt, hverken på telefon, chat eller på skattekontoret.
    </p>
  </Card>
</div>;
```

Mulighet for å endre f.eks tittel mellom åpen og lukket tilstand

```js
import { Card } from '@skatteetaten/frontend-components';

const initialState = { title: 'Inntekt' };

function onChange(isExpanded) {
  setState({
    title: isExpanded ? 'Inntekt (kr 450 000)' : initialState.title,
  });
}

<div>
  <Card
    color={Card.Color.BEIGE}
    title={state.title}
    circleOnIcon={false}
    isExpanded={false}
    onChange={(isExpanded) => onChange(isExpanded)}
    expand
  >
    <p>
      De fleste lønnsmottakere og pensjonister fikk skatteoppgjøret 27. juni.
      Neste mulighet var 15. august, og heretter blir det løpende oppgjør frem
      til 24. oktober. Vi kan dessverre ikke fortelle deg når du får
      skatteoppgjøret ditt, hverken på telefon, chat eller på skattekontoret.
    </p>
  </Card>
</div>;
```

Hvitt kort med ramme:

```js
import { Card, Grid, TextField } from '@skatteetaten/frontend-components';

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
  <h3>Gruppering av innhold</h3>
  <p> Card-komponenten er laget for å gruppere informasjon.
      Hvis man har mange innholdskort på skjermen kan det være nyttig å kollapse
      dem, slik at brukeren ikke ser så mye informasjon på en gang. Handlinger
      knyttet til informasjonen inni kortet kan legges i handlingsknapper i
      toppen av kortet.
  </p>
  <h3>Ulike farger har ulike betydninger</h3>
  <ul>
    <li>Grå: Ofte bruk bakgrunnsfarge for interne løsninger</li>
    <li>Grønn: Brukers til hjelp</li>
    <li>Gul: Brukes til informasjon og opplysning.</li>
    <li>
      Hvit med grønn ramme: Brukes til konklusjoner og betalingsopplysninger
    </li>
  </ul>
```

```js noeditor uu
<h3>Tips</h3>
<ul>
<li>Det skal kun være ett tabstopp pr ekspander.</li>
<li>Ekspandere skal ha en visuell indikator på at innhold utvides/minimeres.</li>
<li>Sjekk at elementet leses som en ekspander med skjermleser og at du beholder fokus når du utvider/minimerer den.</li>
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
```
