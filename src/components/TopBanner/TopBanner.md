**Toppbanner vises på toppen i løsningene og skiller interne og eksterne løsninger fra hverandre**

### Publikumsløsninger

Ikke-innlogget publikumsløsning:

```js
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  external
  homeText="Til skatteetaten.no"
  title="Ekstern publikumsløsning"
  logoLink
/>;
```

Innlogget publikumsløsning:

```js
import { useState } from 'react';

import { Icon } from '@skatteetaten/frontend-components/Icon';
import { Link } from '@skatteetaten/frontend-components/Link';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';
import { TopStripe } from '@skatteetaten/frontend-components/TopStripe';
import { LanguagePicker } from '@skatteetaten/frontend-components/TopStripe/LanguagePicker';
import { TopStripeButton } from '@skatteetaten/frontend-components/TopStripe/TopStripeButton';
import { TopStripeMenu } from '@skatteetaten/frontend-components/TopStripe/TopStripeMenu';

const [language, setLanguage] = useState('nb');

<div>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
    logoLink
    topStripe={
      <TopStripe>
        <Link
          path={'#main-content-id'}
          text={'Hopp til hovedinnhold'}
          skipLink
        />

        <Link
          path={'https://www.skatteetaten.no/kontakt/'}
          text={'Kontakt oss'}
          placement="before"
        />

        <TopStripeMenu
          showOnMobile={false}
          closeMenuAriaLabel="Lukk endre skriftstørrelse"
          title={'Endre skriftstørrelse'}
        >
          <div style={{ fontSize: '24px', marginTop: '8px' }}>
            Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å
            forstørre eller - for å forminske.
          </div>
        </TopStripeMenu>
        <LanguagePicker
          selectedLanguage={language}
          setLanguage={setLanguage}
          showOnMobile={true}
          showSami={true}
        />

        <span>
          <Icon
            iconName="person"
            style={{ fontSize: '20px', verticalAlign: 'sub' }}
          />
          Ola Normann
        </span>

        <Link path={'#topstripe'} text={'Logg ut'} placement="before" />
      </TopStripe>
    }
  />
</div>;
```

### Interne løsninger

På startsiden i et fagsystem:

```js
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';

<div>
  <TopBanner compact homeText="Systemnavn" homeUrl="#topbanner">
    <div></div>
  </TopBanner>
</div>;
```

På en underside i et fagsystem:

```js
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';

<div>
  <TopBanner
    compact
    homeText="Systemnavn"
    title="Sak eller arbeidsoppgave"
    homeUrl="#topbanner"
  >
    <div></div>
  </TopBanner>
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Forskjell på interne systemer og publikumsløsninger</h3>
  <p>
    Alle løsningene våre har et toppbanner som visuelt skiller interne og
    eksterne fra hverandre.
  </p>

  <ul>
    <li>Interne løsninger bruker fylt toppbanner med skrå strek.</li>
    <li>
      Eksterne bruker en smal lang strek, slik som på skatteetaten.no. Dette
      lager en smidig overgang fra skatteetaten.no til en tilknyttet løsning.
    </li>
  </ul>
  <p>
    Det er valgfritt å bruke kompakt eller standard utgave av banneret, men du
    må være konsekvent gjennom hele løsningen.
  </p>
  <h3>Startsider på interne løsninger</h3>
  <p>
    Interne fagsystemer har en hovedside der brukeren finner arbeidsoppgaver
    eller søker etter opplysninger. På de interne løsningene gjelder følgende:
  </p>
  <ul>
    <li>
      TopBanner kan holdes enkel og kun inneholde navn på logo og tittel på
      applikasjonen.
    </li>
    <li>
      TopBanner kan inneholde meny til rapporter og enkeltstående sider eller
      personlige innstillinger.
    </li>
    <li>
      Du trenger ikke skrive «Startside» eller «Velkommen» i toppbanneret.
    </li>
  </ul>

  <h3>Undersider på interne løsinger</h3>
  <p>De fleste interne systemer har en eller flere undersider.</p>

  <ul>
    <li>
      Banneret på undersidene skal ha en tittel som formidler konteksten og gjør
      innholdet relevant for brukeren, for eksempel en sakstype eller
      arbeidsoppgave.
    </li>
    <li>
      Velger du å ha arbeidsoppgaven i toppbanneret, skal også
      arbeidsliste-funksjonene «Gjør tilgjengelig», «Sett på vent» og «Fordel»
      stå i umiddelbar nærhet.
    </li>
  </ul>

  <h3>Klikkbar logo i publikumsløsninger</h3>
  <p>
    For alle publikumsløsninger skal logoen som hovedregel være klikkbar og ta
    brukeren til forsiden av{' '}
    <a href="https://www.skatteetaten.no">skatteetaten.no</a>.
  </p>

  <p>
    Se også{' '}
    <a href="https://www.skatteetaten.no/stilogtone/visuelt/logo/">
      visuell identitet
    </a>{' '}
    for detaljer rundt bruk av logoen.
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Lenken Hopp til hovedinnhold (blir synlig ved tastaturfokus), skal sette
      tastaturfokus til toppen av hovedinnholdet. Bruk riktig id og
      tabindex="-1" der fokus skal være.
    </li>
    <li>
      Valgene i toppstripa som utvider innhold, bør ha et pil-ikon, for visuell
      indikasjon av funksjonaliteten.{' '}
    </li>
    <li>
      Interaktivt innhold i utvida innhold skal kunne velges med tastatur.
    </li>
    <li>
      Når du lukker utvidet innhold, for eksempel ved escape eller lukk-knappen,
      skal tastaturfokus være tilbake på hovedvalget.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>2.1.1 A, Tastatur</li>
    <li>2.4.1 A, Hoppe over blokker</li>
    <li>2.4.3 A, Fokusrekkefølge</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Role=link brukes på Tilbake til skattetaten.no-knappen fordi den visuelt
      ser ut som en lenke.
    </li>
    <li>
      Aria-expanded brukes der innhold utvides/minimeres, f.eks. Endre
      skriftstørrelse.
    </li>
    <li>
      Aria-expanded, aria-haspopup, aria-controls, aria-labelledby, role=menu,
      role=menuitem brukes på f.eks. på språkmenyen. Dette får skjermleser til å
      «bytte» modus og trigge menynavigering.
    </li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermleser.</li>
  </ul>
</>
```
