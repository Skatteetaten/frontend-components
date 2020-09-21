** Avkrysningsboks brukes for eksempel i skjemaer til å bekrefte ett eller flere valg. **

```js
import { CheckBox } from '@skatteetaten/frontend-components';

<div>
  <fieldset style={{ border: 'none' }}>
    <legend style={{ fontSize: '14px' }}>Velg aktuelle lover</legend>
    <CheckBox boxSide={'start'} label="Skatteloven" />
    <CheckBox boxSide={'start'} label="Skattebetalingsloven" />
    <CheckBox boxSide={'start'} label="Skatteforvaltningsloven" />
  </fieldset>
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Sjekk at tilstand på avhuking (valgt/ikke valgt) leses opp av skjermleser.
      OBS: Det trengs ikke noe WAI-ARIA for å få til dette hvis sjekkboksen er
      kodet riktig med HTML (input og label med for-attributt).
    </li>
    <li>
      Bruk fieldset og legend-elementer for gruppering av flere sjekkbokser
      under en ledetekst.
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
    <li>Aria-hidden brukes for å skjule sjekkboks-ikon for skjermleser.</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Avkrysningsboks for vilkårlig valg i en liste</h3>
  <p>
    En avkrysningsboks er ideell i en liste med valg der brukeren skal krysse av
    og få bekreftet dette valget. Hver avkrysning er uavhengig av de andre i
    listen, og det er også mulig å ikke krysse av.
  </p>

  <p>
    Se eksempel på bruk av avkrysningsbokser i
    <a href="https://www.skatteetaten.no/person/skatt/hjelp-til-riktig-skatt/fradragsveilederen/">
      {' '}
      fradragsveilederen på Skattetaten.no
    </a>
    .
  </p>

  <p>
    Hvis brukeren kun skal velge ett valg, bruk
    <a href="https://skatteetaten.github.io/frontend-components/#radiobuttongroup">
      {' '}
      RadioButtonGroup
    </a>.
  </p>
</>
```
