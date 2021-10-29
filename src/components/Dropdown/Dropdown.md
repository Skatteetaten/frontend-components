**Dropdown (Nedtrekksliste): brukes når brukeren skal kunne velge et eller flere valg fra en liste.**

```js
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

const [state, setState] = React.useState({
  options: [
    { key: null, text: 'Ingen' },
    { key: 'A', text: 'Banan' },
    { key: 'B', text: 'Eple' },
    { key: 'C', text: 'Kiwi' },
    { key: 'D', text: 'Pære' },
    { key: 'E', text: 'Sitron' },
  ],
});

<div style={{ maxWidth: '300px' }}>
  <Dropdown
    label="Fruktsort"
    placeholder="Velg"
    help="Tekst som hjelper brukeren å forstå eller få til."
    options={state.options}
    onChange={console.log}
  />
</div>;
```

Stor versjon:

```js
import { Dropdown } from '@skatteetaten/frontend-components/Dropdown';

const [state, setState] = React.useState({
  options: [
    { key: null, text: 'Ingen' },
    { key: 'A', text: 'Banan' },
    { key: 'B', text: 'Eple' },
    { key: 'C', text: 'Kiwi' },
    { key: 'D', text: 'Pære' },
    { key: 'E', text: 'Sitron' },
  ],
});

<div style={{ maxWidth: '300px' }}>
  <Dropdown
    label="Fruktsort"
    placeholder="Velg"
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

<div style={{ maxWidth: '300px' }}>
  <Dropdown
    readOnly
    label="Fruktsort"
    options={[
      { key: null, text: 'Ingen' },
      { key: 'A', text: 'Banan' },
      { key: 'B', text: 'Eple' },
      { key: 'C', text: 'Kiwi' },
      { key: 'D', text: 'Pære' },
      { key: 'E', text: 'Sitron' },
    ]}
    selectedKey="D"
  />
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Standard HTML er tilstrekkelig for riktig koding: bruk av select og
      option, og label med for-attributt.
    </li>
    <li>
      Nedtrekklisten bør ikke åpnes automatisk på fokus. Sjekk at det er mulig å
      åpne, lukke, navigere og velge i menyen med kun tastatur. Test også at
      tastaturfokus beholdes på feltet etter at valg er foretatt.
    </li>
    <li>Ikke bruk lange setninger som valg.</li>
    <li>
      Sjekk med skjermleser at elementrekkefølge og navigering (pile ned/opp i
      listen når den åpen) er standard.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner </li>
    <li>3.3.2 A, Ledetekster eller instruksjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Role=button med aria-haspopup=listbox og aria-expanded brukes for å
      definere element, indikere at den har en liste med valg og om listen er
      åpen eller ikke for skjermleser.{' '}
    </li>
    <li>
      Role=option og aria-selected brukes på valgene i listen for å definere
      element og si om noe er valgt eller ikke.
    </li>
    <li>Aria-expanded brukes på info/hjelp-knappene som utvides/minimeres</li>
  </ul>
</>
```

```js noeditor beskrivelse
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<>
  <MessageBar type={MessageBar.Type.info}>
    Merk at denne komponenten foreløpig ikke fungerer i micro frontends. Vurder
    å bruke ComboBox i stedet.
  </MessageBar>
  <h3>Nedtrekksliste som brukeren kan velge fra</h3>
  <p>
    Nedtrekkslister gjør det mulig for brukeren å velge ett eller flere valg fra
    en liste. De fungerer særlig godt når det er lite plass på skjermen og når
    brukeren skal velge fra en liste med mindre enn 10 alternativer. Hvis det er
    flere enn ti elementer i nedtrekkslisten bør du velge{' '}
    <a href="#combobox"> nedtrekksliste med skriving (ComboBox)</a>. Hvis
    brukeren bare skal huke av ett av alternativene og listen har færre enn 8
    valg, kan du vurdere å bruke{' '}
    <a href="#radiobuttongroup"> RadioButtonGroup (radioknapper)</a> i stedet.
  </p>
  <h3>Tips til hvordan du lager en god nedtrekksliste</h3>
  <ul>
    <li>
      Sorter innholdet i nedtrekkslisten på en logisk måte, for eksempel
      alfabetisk.
    </li>
    <li>
      Unngå dynamisk innhold. Brukeren kan bli forvirret dersom valgene i
      nedtrekksmenyen endrer seg dynamisk ut ifra andre valg på samme side.
    </li>
    <li>
      Sorter ordene i listen på en fornuftig måte, slik at det er lettere å
      lete. Hvis du har to ulike typer data i samme nedtrekksliste kan det være
      hensiktmessig å lage en egen overskrift inni listen. Da blir den enklere
      for brukeren å orientere seg
    </li>
    <li>
      Hvis det er flere enn ti elementer i nedtrekkslisten bør du velge{' '}
      <a href="#combobox"> nedtrekksliste med skriving (ComboBox) </a>.
    </li>
  </ul>
</>;
```
