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

Ikonet kan rendres til høyre for teksten med iconAfter=_true_:

```js
import ActionButton from '@skatteetaten/frontend-components/ActionButton';

<div>
  <ActionButton ariaLabel={'legg-til'} icon="delete" iconAfter={true}>
    Fjern
  </ActionButton>
</div>;
```

```js noeditor uu
<h3>Huskeliste</h3>

<ul>
  <li>Sjekke av ikonet alltid er plassert ved siden av teksten.</li>
  <li>Bruk korte tekster i knappen.</li>
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
