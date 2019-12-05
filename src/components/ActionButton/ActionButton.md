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
<ul>
  <li>Legg ikonet ved siden av teksten.</li>
  <li>Bruk korte tekster i knappen.</li>
</ul>
```

```js noeditor beskrivelse
  <p>
    ActionButton bruker vi for mindre fremtredende og selvstendige funksjoner
    på siden. Den tar mindre plass og er mer plasseringsvennlig enn Button.
  </p>
  <p>
    Normalt bruker vi blå farge for alle klikkbare elementer, også
    aksjonsknapper, men dersom er mange blå elementer på skjermen kan det
    oppleves som støyende. I slike tilfeller kan vi benytte sorte (nedtonede)
    aksjonsknapper.
  </p>
  <p>
    Dersom aksjonsknappen skal være mer synlig kan man øke ikonstørrelsen.
  </p>
  <p>
    Ikonet kan gis farge hvis en vil understreke en mening, for eksempel grønn
    for godkjenn eller rød for avvis.
  </p>
```
