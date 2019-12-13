** Toppbanner vises på toppen i løsningene og skiller interne og eksterne løsninger fra hverandre **

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<TopBanner homeText="Hjem" title="Intern saksbehandling" />;
```

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<TopBanner compact homeText="Hjem" title="Intern saksbehandling" />;
```

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  external
  homeText="Til skatteetaten.no"
  title="Ekstern publikumsløsning"
  logoLink
/>;
```

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  external
  compact
  homeText="Til skatteetaten.no"
  title="Ekstern publikumsløsning"
/>;
```

```js noeditor beskrivelse
<h3>Forskjell på interne- og ublikumsløsninger</h3>
  <p>
    Interne løsninger bruker toppbanner med skrå strek, mens eksterne bruker
    den som er tilnærmet lik skatteetaten.no
  </p>
    <h3>Klikkbar logo</h3>
  <p>
    For alle publikumsløsninger, hvis logoen er klikkbar skal det ta brukeren
    til forsiden på www.skatteetaten.no.
  </p>
  <p>
    Det er valgfritt å bruke kompakt eller standard utgave av banneren, men
    bruken må være konsekvent i løsningen.
  </p>
  <p>
    Se også {' '}
    <a href="https://www.skatteetaten.no/stilogtone/visuell-identitet/">
      visuell identitet
    </a>{' '}
    for detaljer rundt bruk av logoen.
  </p>
```
