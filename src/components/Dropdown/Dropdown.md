** Nedtrekkslister brukes når brukeren skal kunne velge et eller flere valg fra en liste. **

```js
import { Dropdown } from '@skatteetaten/frontend-components';

const initialState = {
  options: [
    { key: null, text: 'Ingen' },
    { key: 'A', text: 'Banan' },
    { key: 'B', text: 'Eple' },
    { key: 'C', text: 'Kiwi' },
    { key: 'D', text: 'Pære' },
    { key: 'E', text: 'Sitron' },
  ],
};

<div style={{ width: '300px' }}>
  <Dropdown
    label="Velg favoritt"
    help="Tekst som hjelper brukeren å forstå eller få til."
    options={state.options}
    onChange={console.log}
  />
</div>;
```

Stor versjon:

```js
import { Dropdown } from '@skatteetaten/frontend-components';

const initialState = {
  options: [
    { key: null, text: 'Ingen' },
    { key: 'A', text: 'Banan' },
    { key: 'B', text: 'Eple' },
    { key: 'C', text: 'Kiwi' },
    { key: 'D', text: 'Pære' },
    { key: 'E', text: 'Sitron' },
  ],
};

<div style={{ width: '300px' }}>
  <Dropdown
    label="Velg favoritt"
    help="Tekst som hjelper brukeren å forstå eller få til"
    inputSize="large"
    options={state.options}
    onChange={console.log}
  />
</div>;
```

Lesemodus:

```js
import Dropdown from '@skatteetaten/frontend-components/Dropdown';

<div style={{ width: '300px' }}>
  <Dropdown
    readOnly
    label="Lesemodus:"
    inputSize="large"
    options={[
      { key: 'A', text: 'Alfa', value: 'Alfa' },
      { key: 'B', text: 'Beta', value: 'Beta' },
      { key: 'C', text: 'Gamma', value: 'Gamma' },
      { key: 'D', text: 'Delta', value: 'Delta' },
      { key: 'E', text: 'Echo', value: 'Echo' },
    ]}
    selectedKey="D"
  />
</div>;
```

```js noeditor uu
<h3>Tips</h3>
<ul>
<li>Standard HTML er tilstrekkelig for riktig koding: bruk av select og option, og label med for-attributt.</li>
<li>Nedtrekklisten bør ikke åpnes automatisk på fokus. Sjekk at det er mulig å åpne, lukke, navigere og velge i menyen med kun tastatur. Test også at tastaturfokus beholdes på feltet etter at valg er foretatt.</li>
<li>Ikke bruk lange setninger som valg.</li>
<li>Sjekk med skjermleser at elementrekkefølge og navigering (pile ned/opp i listen når den åpen) er standard.</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>
<ul>
<li>1.3.1 A, Informasjon og relasjoner </li>
<li>3.3.2 A, Ledetekster eller instruksjoner</li>
<li>4.1.2 A, Navn, rolle, verdi</li>
</ul>

<h3>WAI-ARIA</h3>
<ul>
<li>Role=button med aria-haspopup=listbox og aria-expanded brukes for å definere element, indikere at den har en liste med valg og om listen er åpen eller ikke for skjermleser. </li>
<li>Role=option og aria-selected brukes på valgene i listen for å definere element og si om noe er valgt eller ikke.</li>
<li>Aria-expanded brukes på info/hjelp-knappene som utvides/minimeres</li>
</ul>
```

```js noeditor beskrivelse


  <h3>Fin ved lite plass</h3>
  <p>
    Nedtrekkslister er fine å bruke når en har lite tilgjenlig plass på
    skjermen, og når brukeren skal velge fra en liste med relativt få
    elementer (mindre enn 10). Det er lurt å sortere inneholdet i
    nedtrekkslisten på en logisk måte, for eksempel alfabetisk.
  </p>

  <h3>Unngå dynamisk innhold</h3>
  <p>Brukere kan bli forvirret dersom valgene en nedtrekksmenyen dynmisk endrer seg ut ifra andre valg på samme side. </p>

  <h3>Sortering av listen</h3>
  <p>Listen av elementer bør sorteres på en fornuftig måte, slik at den er lettere å lete.</p>
  <p>
    Hvis man har to ulike typer data i samme nedtrekksliste kan det være
    hensiktmessig å lage en egen overskrift inni listen. Da blir den enklere å
    lete i.
  </p>
  <p>
    Hvis en har flere enn 10 elementer i nedtrekkslisten bør en vurdere å velge
  </p>
```
