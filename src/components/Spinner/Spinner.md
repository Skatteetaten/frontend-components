**Spinner brukes for å vise brukeren at data lastes.**

```js
import { Spinner, Button } from '@skatteetaten/frontend-components';

<div style={{ textAlign: 'center' }}>
  <Button ariaLabel="Laster" buttonStyle="primary">
    {' '}
    <Spinner spinnerColor="white" />{' '}
  </Button>
  <br />
  <br />
  <Spinner size={Spinner.Size.large} spinnerColor="black" />
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Bruk bare spinner når du har en handling eller oppgave med innlasting.
    </li>
    <li>Vis bare én spinner om gangen.</li>
    <li>Spinneren skal ha et tekstalternativ for skjermlesere</li>
    <li>
      Spinneren kommer i svart og hvit, der svart er standardfarge. Den hvite
      spinneren kan brukes i knapper.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-label brukes for å navngi knappen for skjermlesere</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Viser at data holder på å laste ned</h3>
  <p>
    Dersom brukeren må vente mellom ett og ti sekunder vil dette oppleves som en
    forsinkelse. I slike tilfeller er det nyttig å kunne bruke en spinner for å
    vise at systemet jobber.
  </p>
  <h3>Fargevalg for spinneren:Farge</h3>
  <ul>
    <li>Svart er standardfarge.</li>
    <li>Hvit bruker vi på knapper med fyll.</li>
  </ul>
</>
```
