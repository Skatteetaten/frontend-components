** En valggruppe (med radioknapper) brukes i skjemaer for å velge ett alternativ blant flere gjensidig utelukkende valg. **

```js
import RadioButtonGroup from '@skatteetaten/frontend-components/RadioButtonGroup';

const initialState = {
  options: [
    {
      key: 'A',
      text: 'Enkeltpersonsforetak'
    },
    {
      key: 'B',
      text: 'Aksjeselskap'
    }
  ]
};
<>
  <RadioButtonGroup
    label="Type virksomhet"
    options={state.options}
    onChange={(e, option) => console.log(option)}
    help="Type virksomhet vil påvirke hva du må rapportere til oss."
    id="radio"
  />
</>;
```

Hjelpetekster og advarsel:

```js
import RadioButtonGroup from '@skatteetaten/frontend-components/RadioButtonGroup';

const initialState = {
  options: [
    {
      key: 'A',
      text: 'Bananer'
    },
    {
      key: 'B',
      text: 'Pærer'
    },
    {
      key: 'C',
      text: 'Appelsiner'
    }
  ]
};

<div style={{ width: '300px' }}>
  <RadioButtonGroup
    label="Velg en frukt"
    defaultSelectedKey="B"
    options={state.options}
    onChange={(e, option) => console.log(option)}
    help={'Velg en frukt'}
    id="medHjelp"
    calloutFloating={false}
  />
  <br />
  <RadioButtonGroup
    label="Velg enda en frukt"
    defaultSelectedKey="B"
    options={state.options}
    onChange={(e, option) => console.log(option)}
    warning={'Er du sikker på at pærer er det riktige valget for deg?'}
    id="medVarsel"
    calloutFloating={false}
  />
</div>;
```

```js noeditor uu
<ul>
  <li>RadioButtonGroup egner seg best når det er 2–7 valg.</li>
  <li>Hvis det er mer enn 7 valg, bruk heller komponenten Dropdown.</li>
</ul>
```

```js noeditor beskrivelse
  <p>
    Radioknapper bruker vi når ber brukeren om å velge nøyaktig ett valg i en
    liste.
  </p>
  <p>
    Hvis du har plass på siden, og 2-7 valg å velge mellom, er det ofte en
    fordel å bruke slike radioknapper fremfor nedtrekksmeny.
  </p>
  <p>
    Dersom brukeren må ta et aktivt valg, kan listen med radioknappen starte
    uten at noen av valgene er avhuket. Implisitt betyr dette at dersom listen
    med radioknapper får en default-valg satt, MÅ ikke brukeren ta et valg.
  </p>
```
