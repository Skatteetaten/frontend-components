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
<fieldset style={{ border: 'none' }}>
  <RadioButtonGroup
    label="Type virksomhet"
    renderAsLegend
    options={state.options}
    onChange={(e, option) => console.log(option)}
    help="Type virksomhet vil påvirke hva du må rapportere til oss."
    id="radio"
  />
</fieldset>;
```

```js noeditor uu
<h3>Huskeliste</h3>
<ul>
  <li>RadioButtonGroup egner seg best når det er 2–7 valg.</li>
  <li>Hvis det er mer enn 7 valg, bruk heller komponenten Dropdown.</li>
</ul>
```

```js noeditor beskrivelse
  <h3>Velge kun ett valg</h3>

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
