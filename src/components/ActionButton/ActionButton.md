** Aksjonsknapp for selvstendige og mindre fremtredende handlinger **

```js
import ActionButton from '@skatteetaten/frontend-components/ActionButton';

<div>
  <ActionButton ariaLabel={'legg-til'} icon="AddOutline">
    Legg til
  </ActionButton>
  <ActionButton ariaLabel={'oppdater'} icon="Update" color="black">
    Oppdater
  </ActionButton>
</div>;
```

```js noeditor uu
<h3>Tips</h3>

<ul>
  <li>Bruk korte, forståelige tekster i knappen. Det skal være lett å skjønne hva målet med knappen er. </li>
  <li>Sjekk at ikonet er plassert ved siden av teksten</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>

<ul>
  <li>3.3.2 A, Ledetekster eller instruksjoner</li>
  <li>4.1.2 A, Navn, rolle, verdi</li>
</ul>

<h3>WAI-ARIA</h3>

<ul>
  <li>Aria-hidden="true" brukes på ikonet for skjule det for skjermleser.</li>
  <li>Aria-label kan benyttes på button-tag hvis det er behov for å tydeliggjøre hva knappen gjør.</li>
</ul>
```

```js noeditor beskrivelse
<h3>En mindre fremtredende knapp</h3>
  <p>
    ActionButton bruker vi for mindre fremtredende og selvstendige funksjoner
    på siden. Den tar mindre plass og er mer plasseringsvennlig enn Button.
  </p>
  <h3>Varianter</h3>
  <p>
    Normalt bruker vi blå farge for alle klikkbare elementer, også
    aksjonsknapper, men dersom er mange blå elementer på skjermen kan det
    oppleves som støyende. I slike tilfeller kan vi benytte sorte (nedtonede)
    aksjonsknapper. Dersom aksjonsknappen skal være mer synlig kan man øke ikonstørrelsen.
  </p>
  <p>
    Ikonet kan gis farge hvis en vil understreke en mening, for eksempel grønn
    for godkjenn eller rød for avvis.
  </p>
```
