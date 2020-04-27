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
<h3>Tips</h3>

<ul>
  <li>Bruk korte, forståelige tekster i knappen. Det skal være lett å skjønne hva målet med knappen er. </li>
  <li>Sjekk at ikonet er plassert ved siden av teksten</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>

<ul>
  <li>4.1.2 A, Navn, rolle, verdi</li>
</ul>

<h3>WAI-ARIA</h3>

<ul>
  <li>Aria-hidden="true" brukes på ikonet for skjule det for skjermleser.</li>
  <li>Aria-label kan benyttes på button-tag hvis det er behov for å tydeliggjøre hva knappen gjør.</li>
</ul>
```

```js noeditor beskrivelse

<h3>En knapp for mindre fremtredende handlinger</h3>
<p>
  Aksjonsknapp bruker du for selvstendige og mindre fremtredende handlinger på siden, som for eksempel «Legg til» eller «Fjern». Knappen tar mindre plass og er mer plasseringsvennlig enn <a href='#button'>Button</a>.
</p>
<h3>Ulike varianter av aksjonsknapper</h3>
<p>
  Du skal normalt bruke blå farge på alle klikkbare elementer, også aksjonsknapper. Hvis det er mange blå elementer på siden, kan brukeren oppleve det støyende. Du kan da velge nedtonede aksjonsknapper i sort i stedet. Dersom aksjonsknappen skal være mer synlig kan du øke ikonstørrelsen.
</p>
<p>
  Du kan gi ikonet farge hvis du vil understreke en mening, for eksempel grønn for godkjenn eller rød for avvis.
</p>
<p>
  Se <a href='https://www.skatteetaten.no/stilogtone/skrive/skriveregler/knapper/'>skrivereglene</a> for hvordan skrive på knapper.
</p>

```
