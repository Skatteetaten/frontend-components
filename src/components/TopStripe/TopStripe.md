** TopStripe er en svart menystripe øverst på innloggede sider for publikum. **

### Ikke innlogget

Viser Kontakt oss, endre skriftsstørrelse, språk og logg inn.

```js
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';

<div>
  <TopStripe>
    <Link
      path={'https://www.skatteetaten.no/kontakt/'}
      text={'Kontakt oss'}
      placement="before"
    />

    <TopStripeMenu
      showChevron
      closeMenuAriaLabel="Lukk endre skriftstørrelse"
      title={'Endre skriftstørrelse'}
    >
      <div style={{ fontSize: '24px', marginTop: '8px' }}>
        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
        eller - for å forminske.
      </div>
    </TopStripeMenu>
    <TopStripeMenu
      showChevron
      closeMenuAriaLabel="Lukk Language / Språk"
      title={'Language / Språk'}
    >
      <TopStripeButton ariaLabel={'Norsk'} onClick={() => console.log('NB')}>
        Norsk
      </TopStripeButton>
      <TopStripeButton
        icon={'check'}
        ariaLabel={'Nynorsk'}
        onClick={() => console.log('NN')}
      >
        Nynorsk
      </TopStripeButton>
      <TopStripeButton ariaLabel={'Engelsk'} onClick={() => console.log('EN')}>
        Engelsk
      </TopStripeButton>
      <TopStripeButton
        ariaLabel={'Sørsamisk'}
        onClick={() => console.log('SMA')}
      >
        Sørsamisk
      </TopStripeButton>
      <TopStripeButton
        ariaLabel={'Nordsamisk'}
        onClick={() => console.log('SME')}
      >
        Nordsamisk
      </TopStripeButton>
    </TopStripeMenu>
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
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';
import Icon from '@skatteetaten/frontend-components/Icon';

<div>
  <TopStripe>
    <Link
      path={'https://www.skatteetaten.no/kontakt/'}
      text={'Kontakt oss'}
      placement="before"
    />

    <TopStripeMenu title={'Endre skriftstørrelse'}>
      <div style={{ fontSize: '1.5rem', marginTop: '8px' }}>
        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
        eller - for å forminske.
      </div>
    </TopStripeMenu>
    <TopStripeMenu title={'Language / Språk'}>
      <TopStripeButton ariaLabel={'Norsk'} onClick={() => console.log('NB')}>
        Norsk
      </TopStripeButton>
      <TopStripeButton
        icon={'check'}
        ariaLabel={'Nynorsk'}
        onClick={() => console.log('NN')}
      >
        Nynorsk
      </TopStripeButton>
      <TopStripeButton ariaLabel={'Engelsk'} onClick={() => console.log('EN')}>
        Engelsk
      </TopStripeButton>
      <TopStripeButton
        ariaLabel={'Sørsamisk'}
        onClick={() => console.log('SMA')}
      >
        Sørsamisk
      </TopStripeButton>
      <TopStripeButton
        ariaLabel={'Nordsamisk'}
        onClick={() => console.log('SME')}
      >
        Nordsamisk
      </TopStripeButton>
    </TopStripeMenu>

    <span>
      <Icon iconName="person" />
      Vegard Sandli
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
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';
import Icon from '@skatteetaten/frontend-components/Icon';

import { UseScreen } from '@skatteetaten/frontend-components/utils/ScreenPlugin';

const size = UseScreen();

<div>
  <TopStripe>
    <Link
      path={'https://www.skatteetaten.no/kontakt/'}
      text={'Kontakt oss'}
      placement="before"
    />

    <TopStripeMenu title={'Endre skriftstørrelse'}>
      <div style={{ fontSize: '1.5rem', marginTop: '8px' }}>
        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
        eller - for å forminske.
      </div>
    </TopStripeMenu>
    <TopStripeMenu title={'Language / Språk'}>
      <TopStripeButton ariaLabel={'Norsk'} onClick={() => console.log('NB')}>
        Norsk
      </TopStripeButton>
      <TopStripeButton
        icon={'check'}
        ariaLabel={'Nynorsk'}
        onClick={() => console.log('NN')}
      >
        Nynorsk
      </TopStripeButton>
      <TopStripeButton ariaLabel={'Engelsk'} onClick={() => console.log('EN')}>
        Engelsk
      </TopStripeButton>
      <TopStripeButton
        ariaLabel={'Sørsamisk'}
        onClick={() => console.log('SMA')}
      >
        Sørsamisk
      </TopStripeButton>
      <TopStripeButton
        ariaLabel={'Nordsamisk'}
        onClick={() => console.log('SME')}
      >
        Nordsamisk
      </TopStripeButton>
    </TopStripeMenu>

    <TopStripeMenu showChevron icon="person" title={'Vegard Sandli'}>
      <TopStripeButton onClick={() => console.log('NB')}>
        Jenny Sandli
      </TopStripeButton>
      <TopStripeButton onClick={() => console.log('Eple')}>
        987654321 Eplepress AS
      </TopStripeButton>
      <TopStripeButton onClick={() => console.log('Pære')}>
        987654322 Pærepress AS
      </TopStripeButton>
      <TopStripeButton onClick={() => console.log('Drue')}>
        987654323 Druepress AS
      </TopStripeButton>
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

På mobil flyttes valgene for kontakt oss, skriftsstørrelse og språk til footeren.

```js
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';

<div>
  <TopStripe>
    <TopStripeMenu showChevron icon="person" title={'Vegard Sandli'}>
      <TopStripeButton onClick={() => console.log('NB')}>
        Jenny Sandli
      </TopStripeButton>
      <TopStripeButton onClick={() => console.log('Eple')}>
        987654321 Eplepress AS
      </TopStripeButton>
      <TopStripeButton onClick={() => console.log('Pære')}>
        987654322 Pærepress AS
      </TopStripeButton>
      <TopStripeButton onClick={() => console.log('Drue')}>
        987654323 Druepress AS
      </TopStripeButton>
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
    skriftstørrelse» i TopStripen. På mobil flytter du disse funksjonene ned til{' '}
    <a href="#FooterContent">footeren</a>.
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
