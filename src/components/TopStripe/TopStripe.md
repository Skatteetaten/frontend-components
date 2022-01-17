**TopStripe (Toppstripe): er en svart menystripe øverst på innloggede sider for publikum.**

### Ikke innlogget

Viser kontakt oss, endre skriftsstørrelse, språk og logg inn.

```js
import { useState } from 'react';
import { Link } from '@skatteetaten/frontend-components/Link';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';
import { TopStripe } from '@skatteetaten/frontend-components/TopStripe';
import { LanguagePicker } from '@skatteetaten/frontend-components/TopStripe/LanguagePicker';
import { TopStripeMenu } from '@skatteetaten/frontend-components/TopStripe/TopStripeMenu';
import { TopStripeButton } from '@skatteetaten/frontend-components/TopStripe/TopStripeButton';

const [language, setLanguage] = useState('nb');

<div>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
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
          closeMenuAriaLabel="Lukk endre skriftstørrelse"
          title={'Endre skriftstørrelse'}
          showOnMobile={false}
          contentIsMenu={false}
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

        <Link path={'#link'} text={'Logg inn'} placement="before" />
      </TopStripe>
    }
  />
</div>;
```

### Innlogget og kan kun representere seg selv

Viser kontakt oss, endre skriftsstørrelse, språk, partsvalg (velger for hvem de representerer) og logg ut.

```js
import { useState } from 'react';
import { Icon } from '@skatteetaten/frontend-components/Icon';
import { Link } from '@skatteetaten/frontend-components/Link';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';
import { TopStripe } from '@skatteetaten/frontend-components/TopStripe';
import { LanguagePicker } from '@skatteetaten/frontend-components/TopStripe/LanguagePicker';
import { TopStripeMenu } from '@skatteetaten/frontend-components/TopStripe/TopStripeMenu';
import { TopStripeButton } from '@skatteetaten/frontend-components/TopStripe/TopStripeButton';

const [language, setLanguage] = useState('nb');

<div>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
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
          <div style={{ fontSize: '1.5rem', marginTop: '8px' }}>
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

### Innlogget og kan representere flere

Viser kontakt oss, endre skriftsstørrelse, språk, partsvalg (velger for hvem de representerer) og logg ut.

```js
import { useState } from 'react';
import { Icon } from '@skatteetaten/frontend-components/Icon';
import { Link } from '@skatteetaten/frontend-components/Link';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';
import { TopStripe } from '@skatteetaten/frontend-components/TopStripe';
import { LanguagePicker } from '@skatteetaten/frontend-components/TopStripe/LanguagePicker';
import { TopStripeMenu } from '@skatteetaten/frontend-components/TopStripe/TopStripeMenu';
import { TopStripeButton } from '@skatteetaten/frontend-components/TopStripe/TopStripeButton';

import { UseScreen } from '@skatteetaten/frontend-components/utils/ScreenPlugin';

const size = UseScreen();
const [language, setLanguage] = useState('nb');

<div>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
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
          isMenu={false}
          showOnMobile={false}
          closeMenuAriaLabel="Lukk endre skriftstørrelse"
          title={'Endre skriftstørrelse'}
        >
          <div style={{ fontSize: '1.5rem', marginTop: '8px' }}>
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

        <TopStripeMenu
          showOnMobile={true}
          icon="person"
          title={'Hamdi Normann'}
        >
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
    }
  />
</div>;
```

### På mobil

På mobil flyttes valgene for kontakt oss og skriftsstørrelse til footeren.

```js
import { useState } from 'react';
import { Link } from '@skatteetaten/frontend-components/Link';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';
import { TopStripe } from '@skatteetaten/frontend-components/TopStripe';
import { LanguagePicker } from '@skatteetaten/frontend-components/TopStripe/LanguagePicker';
import { TopStripeMenu } from '@skatteetaten/frontend-components/TopStripe/TopStripeMenu';
import { TopStripeButton } from '@skatteetaten/frontend-components/TopStripe/TopStripeButton';

const [language, setLanguage] = useState('nb');

<div>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
    topStripe={
      <TopStripe>
        <Link
          path={'#main-content-id'}
          text={'Hopp til hovedinnhold'}
          skipLink
        />
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
    }
  >
    <div style={{ minHeight: '80px', textAlign: 'right' }}>
      «Hamburger»-meny her (egen komponent finnes ennå ikke)
    </div>
  </TopBanner>
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Toppstripen viser at brukeren er innlogget med MinID</h3>
  <p>
    Alle innloggede publikumsløsninger skal ha en svart toppstripe som er
identisk på tvers av løsningene våre. Dette sikrer at brukerne kjenner den
igjen når de er innlogget med MinID, og er anbefalt av Digitaliseringsdirektoratet.
  </p>
  <h3>Slik setter du opp toppstripen:</h3>
<ul>
    <li>Plasser de overordede funksjonene «Kontakt oss», «Language/Språk» og
«Endre skriftstørrelse» i <a href="#TopBanner">TopBanner. </li>
    <li>På mobil flytter du overordnede funksjoner ned til <a href="#FooterContent">footeren</a>.</li>
  </ul>
<h3>Når brukeren representerer andre</h3>
  <p>
   Når den innloggende brukeren har fullmakt (rettighet) til å opptre på vegne av andre personer,
kan brukeren velge den de representerer i nedtrekksmenyen under sitt eget navn. Velgeren er alltid
synlig når brukeren er innlogget, også på mobil.
  </p>
  <p>
  Pass på:
<ul>
    <li>Dersom en bruker har fullmakt (rettigheter) til å handle på vegne av et stort antall personer,
må du lenke til en side eller dialog som gir brukeren mulighet til å bytte.</li>
</ul>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Bruk enten header-taggen rundt TopStripe eller TopStripe som en prop i
      TopBanner for at begge komponentene blir liggende inni header-taggen.
    </li>
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
      Aria-haspopup, role=menu, role=menuitem brukes på f.eks. på språkmenyen.
      Dette får skjermleser til å "bytte" modus og trigge menynavigering.
    </li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermleser.</li>
  </ul>
</>
```
