**TopStripe er en svart menystripe øverst på innloggede sider for publikum.**

### Ikke innlogget

Viser Kontakt oss, endre skriftsstørrelse, språk og logg inn.

```js
import { useState } from 'react';
import {
  TopStripe,
  LanguagePicker,
  TopStripeMenu,
  TopStripeButton,
  TopBanner,
  Link,
} from '@skatteetaten/frontend-components';

const [language, setLanguage] = useState('nb');

<div>
  <TopStripe>
    <Link path={'#main-content-id'} text={'Hopp til hovedinnhold'} skipLink />
    <Link
      path={'https://www.skatteetaten.no/kontakt/'}
      text={'Kontakt oss'}
      placement="before"
    />
    <TopStripeMenu
      closeMenuAriaLabel="Lukk endre skriftstørrelse"
      title={'Endre skriftstørrelse'}
      showOnMobile={false}
      contentIsMenu={false}
    >
      <div style={{ fontSize: '24px', marginTop: '8px' }}>
        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
        eller - for å forminske.
      </div>
    </TopStripeMenu>
    <LanguagePicker
      selectedLanguage={language}
      setLanguage={setLanguage}
      showOnMobile={true}
      showSami={true}
    />

    <Link path={'#link'} text={'Logg inn'} placement="before" />
  </TopStripe>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
  />
</div>;
```

### Innlogget og kan kun representere seg selv

Viser Kontakt oss, endre skriftsstørrelse, språk, partsvalg og logg ut.

```js
import { useState } from 'react';

import {
  LanguagePicker,
  TopStripe,
  TopStripeMenu,
  TopStripeButton,
  TopBanner,
  Link,
  Icon,
} from '@skatteetaten/frontend-components';
const [language, setLanguage] = useState('nb');

<div>
  <TopStripe>
    <Link path={'#main-content-id'} text={'Hopp til hovedinnhold'} skipLink />
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
      <div style={{ fontSize: '1.5rem', marginTop: '8px' }}>
        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
        eller - for å forminske.
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
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
  />
</div>;
```

### Innlogget og kan representere flere

Viser Kontakt oss, endre skriftsstørrelse, språk, partsvalg og logg ut.

```js
import { useState } from 'react';

import {
  TopStripe,
  LanguagePicker,
  TopStripeMenu,
  TopStripeButton,
  TopBanner,
  Link,
  Icon,
} from '@skatteetaten/frontend-components';
import { UseScreen } from '@skatteetaten/frontend-components/utils/ScreenPlugin';

const size = UseScreen();
const [language, setLanguage] = useState('nb');

<div>
  <TopStripe>
    <Link path={'#main-content-id'} text={'Hopp til hovedinnhold'} skipLink />

    <Link
      path={'https://www.skatteetaten.no/kontakt/'}
      text={'Kontakt oss'}
      placement="before"
    />

    <TopStripeMenu
      isMenu={false}
      showOnMobile={false}
      closeMenuAriaLabel="Lukk endre skriftstørrelse"
      title={'Endre skriftstørrelse'}
    >
      <div style={{ fontSize: '1.5rem', marginTop: '8px' }}>
        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
        eller - for å forminske.
      </div>
    </TopStripeMenu>

    <LanguagePicker
      selectedLanguage={language}
      setLanguage={setLanguage}
      showOnMobile={true}
      showSami={true}
    />

    <TopStripeMenu showOnMobile={true} icon="person" title={'Hamdi Normann'}>
      <TopStripeButton>Kari Normann</TopStripeButton>
      <TopStripeButton>987654321 Eplepress AS</TopStripeButton>
      <TopStripeButton>987654322 Pærepress AS</TopStripeButton>
      <TopStripeButton>987654323 Druepress AS</TopStripeButton>
      <TopStripeButton onClick={() => console.log('Se alle')}>
        Se alle virksomheter
      </TopStripeButton>
    </TopStripeMenu>

    <Link path={'#topstripe'} text={'Logg ut'} placement="before" />
  </TopStripe>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
  />
</div>;
```

### På mobil

På mobil flyttes valgene for kontakt oss og skriftsstørrelse til footeren.

```js
import { useState } from 'react';

import {
  TopStripe,
  LanguagePicker,
  TopStripeMenu,
  TopStripeButton,
  TopBanner,
  Link,
} from '@skatteetaten/frontend-components';

const [language, setLanguage] = useState('nb');

<div>
  <TopStripe>
    <Link path={'#main-content-id'} text={'Hopp til hovedinnhold'} skipLink />
    <LanguagePicker
      selectedLanguage={language}
      setLanguage={setLanguage}
      showOnMobile={true}
      showSami={true}
    />
    <TopStripeMenu icon="person" title={'Kari Normann'}>
      <TopStripeButton>Jenny Sandli</TopStripeButton>
      <TopStripeButton>987654321 Eplepress AS</TopStripeButton>
      <TopStripeButton>987654322 Pærepress AS</TopStripeButton>
      <TopStripeButton>987654323 Druepress AS</TopStripeButton>
      <TopStripeButton onClick={() => console.log('Se alle')}>
        Se alle virksomheter
      </TopStripeButton>
    </TopStripeMenu>
    <Link path={'#topstripe'} text={'Logg ut'} placement="before" />
  </TopStripe>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
  >
    <div style={{ minHeight: '80px', textAlign: 'right' }}>
      «Hamburger»-meny her (egen komponent finnes ennå ikke)
    </div>
  </TopBanner>
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Viser at brukeren er logget inn med MinID</h3>
  <p>
    TopStripe er svart og ligger øverst på innloggede sider for publikum.
    Digitaliseringsdirektoratet anbefaler at vi har en felles markering av
    innloggede tjenester som benytter MinID. Alle innloggede publikumsløsninger
    skal derfor ha en slik TopStripe. Den svarte stripen skal være identisk på
    tvers av løsningene våre, slik at brukerne kjenner den igjen.
  </p>
  <h3>Overordnede lenker og funksjoner</h3>
  <p>
    Legg de overordede funksjonene «Kontakt oss», «Language/Språk» og «Endre
    skriftstørrelse» i TopStripen. På mobil flytter du «Kontakt oss» og «Endre
    skriftstørrelse» ned til <a href="#FooterContent">footeren</a>, mens
    «Language/Språk» legges inn i <a href="#TopBanner">TopBanner</a>.
  </p>
  <h3>Endre bruker</h3>
  <p>
    Av og til kan den innloggende brukeren ha rettighet til å se eller sende inn
    opplysninger på vegne av andre personer eller virksomheter. Mellom logg
    ut-knappen og navnet på den som er logget inn, har vi derfor en «velger» med
    nedtrekksliste. Her kan brukerne bytte til den de ønsker å representere.
    Denne velgeren er alltid synlig når brukeren er innlogget, også på mobil.
    Dersom en bruker har rettigheter til å handle på vegne av et stort antall
    personer, lenker du til en side eller dialog som gir brukeren mulighet til å
    bytte.
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
      Interaktivt innhold i utvidet innhold skal kunne velges med tastatur.
    </li>
    <li>
      Når du lukker utvidet innhold, f.eks. ved escape eller lukk-knappen, skal
      tastaturfokus være tilbake på hovedvalget.
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
      "bytte" modus og trigge menynavigering.
    </li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermleser.</li>
  </ul>
</>
```
