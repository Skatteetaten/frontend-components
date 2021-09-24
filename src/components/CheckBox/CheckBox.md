**CheckBox (Avkrysningsboks): brukes for eksempel i skjemaer til å bekrefte ett eller flere valg.**

```js
import { CheckBox } from '@skatteetaten/frontend-components/CheckBox';
import { LabelWithCallout } from '@skatteetaten/frontend-components/LabelWithCallout';

<div style={{ width: '500px' }}>
  <fieldset style={{ border: 'none', margin: '0', padding: '0' }}>
    <LabelWithCallout
      inFieldset
      label="Velg det som gjelder deg"
      help="Du kan få fradrag for enkelte ting om helse og familie. Velg deg som gjelder for deg."
    />
    <div style={{ height: '8px' }} />
    <CheckBox boxSide={'start'} label="Har barn under 12 år" />
    <CheckBox
      boxSide={'start'}
      label="Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning"
    />
    <CheckBox
      boxSide={'start'}
      label="Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"
    />
    <CheckBox boxSide={'start'} label="Er enslig forsørger" />
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
