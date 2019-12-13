** Spinner brukes for å vise brukeren at data lastes. **

```js
import Spinner from '@skatteetaten/frontend-components/Spinner';
import Button from '@skatteetaten/frontend-components/Button';

<div style={{ textAlign: 'center' }}>
  <Button buttonStyle="primary">
    {' '}
    <Spinner spinnerColor="white" />{' '}
  </Button>
  <br />
  <br />
  <Spinner size={Spinner.Size.large} spinnerColor="black" />
</div>;
```

```js noeditor uu
<h3>Huskeliste</h3>
<ul>
  <li>
    Bruk bare spinner når du har en handling eller oppgave med innlasting.{' '}
  </li>
  <li>Vis bare én spinner om gangen.</li>
  <li>
    Spinneren kan gjerne ha en label slik at brukeren vet hva som foregår.
  </li>
  <li>
    Bruk <b>aria-label</b> for å gi elementet riktige labels.
  </li>
  <li>
    Spinneren kommer i svart og hvit, der svart er standardfarge. Den hvite
    spinneren kan brukes i knapper.
  </li>
</ul>
```

```js noeditor beskrivelse
  <h3>Tidsgrenser</h3>
  <p>
    Dersom brukeren må vente mellom ett og ti sekunder vil dette oppleves som
    en forsinkelse. I slike tilfeller er det nyttig å kunne bruke en spinner
    for å vise at systemet jobber.
  </p>
  <h3>Farge</h3>
  <p>
    Spinneren kommer i svart og hvit, der svart er standardfarge. Den hvite
    spinneren kan brukes i knapper.
  </p>
```
