** En valggruppe (med radioknapper) brukes i skjemaer for å velge ett alternativ blant flere gjensidig utelukkende valg. **

```js
import { RadioButtonGroup } from '@skatteetaten/frontend-components';

const initialState = {
  options: [
    {
      key: 'A',
      text: 'Enkeltpersonsforetak',
    },
    {
      key: 'B',
      text: 'Aksjeselskap',
    },
  ],
};
<RadioButtonGroup
  label="Type virksomhet"
  options={state.options}
  onChange={(e, option) => console.log(option)}
  help="Type virksomhet vil påvirke hva du må rapportere til oss."
  id="radio"
/>;
```

Med beskrivelse på hvert steg:

```js
import { RadioButtonGroup } from '@skatteetaten/frontend-components';

const initialState = {
  options: [
    {
      key: 'A',
      text: 'Sparekonto',
      description:
        'Dette er egentlig bare en brukskonto, med et annet navn. Du har ubegrenset uttak i året',
    },
    {
      key: 'B',
      text: 'Sparekonto pluss',
      description:
        'Hvis du er veldig glad i å spare uten renter er dette kontoen for deg. Uttak fra denne kontoen kommer med gebyr',
    },
  ],
};
<>
  <RadioButtonGroup
    label="Type sparekonto"
    options={state.options}
    onChange={(e, option) => console.log(option)}
    id="radio"
  />
</>;
```

```js noeditor uu
<h3>Tips</h3>
<ul>
<li>RadioButtonGroup egner seg best når det er 2–7 valg. Hvis det er mer enn 7 valg, bruk heller komponenten Dropdown.</li>
<li>Standard HTML er tilstrekkelig for riktig koding: bruk av fieldset og legend for gruppering av radioknapper under en ledetekst, og input med label for-attributt.</li>
<li>Det skal kun være ett tabstopp på radioknappene med bruk av tastatur. For å bytte mellom valg av radioknapp skal piltast opp/ned brukes. Hvis du tabulerer vekk fra radioknappene og tilbake igjen, skal tastaturfokus være på valgt radioknapp.</li>
<li>Sjekk at tilstand på avhuking (valgt/ikke valgt) leses opp av skjermleser.</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>
<ul>
<li>1.3.1 A, Informasjon og relasjoner </li>
<li>3.3.2 A, Ledetekster eller instruksjoner</li>
<li>4.1.2 A, Navn, rolle, verdi</li>
</ul>

<h3>WAI-ARIA</h3>
<ul>
<li>N/A</li>
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
