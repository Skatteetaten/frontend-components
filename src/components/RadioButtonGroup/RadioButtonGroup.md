**RadioButtonGroup (Radioknapper): en valggruppe (med radioknapper) brukes i skjemaer for å velge ett alternativ blant flere gjensidig utelukkende valg.**

```js
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

const [state, setState] = React.useState({
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
});
<div style={{ maxWidth: '400px' }}>
  <RadioButtonGroup
    label="Type virksomhet"
    options={state.options}
    requiredWithMark
    onChange={(e, option) => console.log(option)}
    help="Type virksomhet vil påvirke hva du må rapportere til oss."
    id="radio"
    labelWithCalloutProps={{
      calloutProps: { autoDismiss: true },
    }}
  />
</div>;
```

Med beskrivelse på hvert steg:

```js
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

const [state, setState] = React.useState({
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
});
<>
  <RadioButtonGroup
    label="Type sparekonto"
    options={state.options}
    onChange={(e, option) => console.log(option)}
  />
</>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      RadioButtonGroup egner seg best når det er 2–7 valg. Hvis det er mer enn 7
      valg, bruk heller komponenten Dropdown.
    </li>
    <li>
      Standard HTML er tilstrekkelig for riktig koding: bruk av fieldset og
      legend for gruppering av radioknapper under en ledetekst, og input med
      label for-attributt.
    </li>
    <li>
      Det skal kun være ett tabstopp på radioknappene med bruk av tastatur. For
      å bytte mellom valg av radioknapp skal piltast opp/ned brukes. Hvis du
      tabulerer vekk fra radioknappene og tilbake igjen, skal tastaturfokus være
      på valgt radioknapp.
    </li>
    <li>
      Sjekk at tilstand på avhuking (valgt/ikke valgt) leses opp av skjermleser.
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
    <li>N/A</li>
  </ul>
</>
```

```js noeditor beskrivelse
import { Link } from '@skatteetaten/frontend-components/Link';

<>
  <h3>Skjema der brukeren bare kan velge ett alternativ</h3>

  <p>Radioknapper lar brukeren velge kun ett alternativ i listen din.</p>
  <h3>To oppsett for radioknapper:</h3>

  <ul>
    <li>
      Radioknappene kan settes opp uten at de er avhuket – da må brukeren ta et
      aktivt valg.
    </li>
    <li>
      Radioknappene kan ha ett alternativ ferdig avhuket. Da kan brukeren enten
      la være å gjøre noe, eller huke av for andre alternativ.
    </li>
  </ul>

  <h3>Relaterte komponenter:</h3>
  <p className="mb0">
    Dersom brukeren skal kunne huke av for flere valg samtidig:
  </p>
  <p className="mt0">
    <Link
      path={'#checkbox'}
      text={'CheckBox (Avkrysningsboks)'}
      icon={'ArrowForward'}
      placement="before"
    />
  </p>
  <p className="mb0">
    Når listen med valg har mer enn 7 alternativer, kan den bli litt lang og du
    bør bruke:
  </p>
  <p className="mt0">
    <Link
      path={'#dropdown'}
      text={'Dropdown (Nedtrekksliste)'}
      icon={'ArrowForward'}
      placement="before"
    />
  </p>
</>;
```
