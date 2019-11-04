** Innholdskort brukes til å gruppere innhold som hører sammen. **

```js
import Card from '@skatteetaten/frontend-components/Card';

const initialState = { title: 'Skatteoppgjøret for 2017' };

<div>
  <Card
    color={Card.BEIGE}
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
    color={Card.GREEN}
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
import Card from '@skatteetaten/frontend-components/Card';

const initialState = { title: 'Inntekt' };

function onChange(isExpanded) {
  setState({
    title: isExpanded ? 'Inntekt (kr 450 000)' : initialState.title
  });
}

<div>
  <Card
    color={Card.BEIGE}
    title={state.title}
    circleOnIcon={false}
    isExpanded={false}
    onChange={isExpanded => onChange(isExpanded)}
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
import Card from '@skatteetaten/frontend-components/Card';
import Grid from '@skatteetaten/frontend-components/Grid';
import TextField from '@skatteetaten/frontend-components/TextField';

<div>
  <Card
    color={Card.WHITE}
    title="Du må betale omregistreringsavgift"
    subtitle="Gjelder kjøretøyet PR 12345"
  >
    <Grid>
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
<p>
  Innholdskort kan inneholde mange andre komponenter. Husk å sjekke
  «Tilgjengelighet» hvis du skal bruke flere komponenter fra Designsystemet i
  innholdskortet.
</p>
```

```js noeditor beskrivelse
  <p>
      Hvis man har mange innholdskort på skjermen kan det være nyttig å kollapse
      dem, slik at brukeren ikke ser så mye informasjon på en gang. Handlinger
      knyttet til informasjonen inni kortet kan legges i handlingsknapper i
      toppen av kortet.
  </p>
  <ul>
    <li>Grå: Standard bakgrunnsfarge for interne løsninger</li>
    <li>Grønn: Brukers til hjelp</li>
    <li>Gul: Brukes til informasjon og opplysning.</li>
    <li>
      Hvit med grønn ramme: Brukes til konklusjoner og betalingsopplysninger
    </li>
  </ul>
```
