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
    help="Hjelpetekst"
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
    help="Hjelpetekst"
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
  <p>
    Nedtrekkslister er fine å bruke når en har lite tilgjenlig plass på
    skjermen, og når brukeren skal velge fra en liste med relativt få
    elementer (mindre enn 10). Det er lurt å sortere inneholdet i
    nedtrekkslisten på en logisk måte, for eksempel alfabetisk.
  </p>
  <p>
    Hvis man har to ulike typer data i samme nedtrekksliste kan det være
    hensiktmessig å lage en egen overskrift inni listen. Da blir den enklere å
    lete i.
  </p>
```
