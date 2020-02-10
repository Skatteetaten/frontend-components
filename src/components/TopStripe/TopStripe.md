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

    <TopStripeMenu title={'Endre skriftstørrelse'}>
      <div style={{ fontSize: '24px', marginTop: '8px' }}>
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
      <div style={{ fontSize: '24px', marginTop: '8px' }}>
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
      <div style={{ fontSize: '24px', marginTop: '8px' }}>
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
  <h3>Vise innlogging</h3>
  <p>
    TopStripe er den svarte, horisontale stripen helt i toppen. DIFI anbefaler at vi har en felles markering av innloggede tjenester som
    benytter MinID. Alle innloggede publikumsløsninger skal derfor ha
    en slik TopStripe. I utgangspunktet skal TopStripe være identisk på tvers av løsningene våre, slik at brukerne kjenner den igjen.
  </p>
  <h3>Overordnede lenker og funksjoner</h3>
  <p>
    Vi legger de overordede funksjonene «Kontakt oss», «Language / Språk» og «Endre skriftstørrelse» i TopStripe. På mobil flytter vi disse funksjonene ned til footeren.
  </p>
  <h3>Endre bruker</h3>
  <p>
    Av og til kan den innloggende brukeren ha rettighet til å se eller sende inn opplysninger på vegne av andre (personer eller virksomheter). Rett ved siden av logg ut-knappen har vi derfor en partsvelger som lar deg bytte til hvem du ønsker å representere. Partsvelgeren vises alltid når brukeren er innlogget, også på mobil. Dersom en part har rettigheter til å handle på vegne av et stort antall parter, lenker vi til en side eller dialog som gir oversikt og mulighet til å bytte.
  </p>





```
