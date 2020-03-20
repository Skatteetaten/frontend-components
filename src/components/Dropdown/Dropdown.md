** Nedtrekkslister brukes når brukeren skal kunne velge et eller flere valg fra en liste. **

```js
import Dropdown from '@skatteetaten/frontend-components/Dropdown';

const initialState = {
  options: [
    { key: null, text: 'Ingen' },
    { key: 'Header', text: 'Frukt', itemType: Dropdown.ItemType.Header },
    { key: 'A', text: 'Banan' },
    { key: 'B', text: 'Eple' },
    { key: 'C', text: 'Kiwi' },
    { key: 'D', text: 'Pære' },
    { key: 'E', text: 'Sitron' },
    { key: 'divider_2', text: '-', itemType: Dropdown.ItemType.Divider },
    { key: 'Header2', text: 'Grønnsaker', itemType: Dropdown.ItemType.Header },
    { key: 'F', text: 'Agurk' },
    { key: 'G', text: 'Kålrabi' },
    { key: 'H', text: 'Potet' },
    { key: 'I', text: 'Selleri' },
    { key: 'J', text: 'Tomat' }
  ]
};

<div style={{ width: '300px' }}>
  <Dropdown
    label="Velg favoritt"
    help="Tekst som hjelper brukeren å fylle ut feltet."
    options={state.options}
    onChange={console.log}
  />
</div>;
```

Stor versjon:

```js
import Dropdown from '@skatteetaten/frontend-components/Dropdown';

const initialState = {
  options: [
    { key: null, text: 'Ingen' },
    { key: 'Header', text: 'Frukt', itemType: Dropdown.ItemType.Header },
    { key: 'A', text: 'Banan' },
    { key: 'B', text: 'Eple' },
    { key: 'C', text: 'Kiwi' },
    { key: 'D', text: 'Pære' },
    { key: 'E', text: 'Sitron' },
    { key: 'divider_2', text: '-', itemType: Dropdown.ItemType.Divider },
    { key: 'Header2', text: 'Grønnsaker', itemType: Dropdown.ItemType.Header },
    { key: 'F', text: 'Agurk' },
    { key: 'G', text: 'Kålrabi' },
    { key: 'H', text: 'Potet' },
    { key: 'I', text: 'Selleri' },
    { key: 'J', text: 'Tomat' }
  ]
};

<div style={{ width: '300px' }}>
  <Dropdown
    label="Velg favoritt"
    help="Tekst som hjelper brukeren å fylle ut feltet."
    inputSize="large"
    options={state.options}
    onChange={console.log}
  />
</div>;
```

```js noeditor uu
<ul>
  <li>
    Nedtrekklisten bør ikke åpnes automatisk på fokus. Sjekk at det er mulig å
    åpne og lukke menyen ved hjelp av tastatur
  </li>
  <li>
    Sjekk også at brukeren kan navigere seg gjennom menyen og velge et element i
    listen.
  </li>
  <li>Ikke bruk lange setninger som valg.</li>
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