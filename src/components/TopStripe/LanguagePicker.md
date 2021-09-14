**LanguagePicker (språkvelger): velge språk i publikumsløsninger**

For å velge mellom norsk bokmål, nynorsk, engelsk og samisk i publikumsløsninger.

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
</div>;
```

```js noeditor beskrivelse
import LinkGroup from '@skatteetaten/frontend-components/LinkGroup';
const links = [
  {
    text: 'TopBanner (Topp)',
    path: '#topbanner',
  },
  {
    text: 'TopStripe (Toppstripe)',
    path: '#topstripe',
  },
];

<>
  <h3>Språk</h3>
  <p>
    For at folk skal kunne bruke løsningene våre, må de være i et språk de
    forstår. I praksis betyr dette at alle løsninger for publikum skal kunne
    presenteres på norsk bokmål, nynorsk og engelsk. Innhold som er rettet mot
    eller av særlig interesse for den samiske befolkningen skal oversettes til
    samisk.
  </p>

  <h3>Huske språk på tvers</h3>
  <p>
    Vi ønsker å få til en konsistent brukeropplevelse på tvers av løsningene
    våre. Dette gjelder også språket. Som hovedregel skal samme språk brukes på
    tvers i brukerreisen. I praksis betyr det at når en bruker velger engelsk på
    skatteetaten.no, og logger inn, så skal også "Min side" og deretter
    skattemeldingen presentres på engelsk.
  </p>
  <p>
    Dersom du ikke vet hvor brukeren kommer fra, og hvilket språk som ble brukt
    der bør du forsøke å hente brukeren foretrukkede språk fra profil eller
    nettleser før du bruker standardverdien som er norsk bokmål.
  </p>

  <h3>Relaterte komponenter</h3>
  <LinkGroup links={links} />
</>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Skal ha støtte for navigering med piltaster ned/opp i tillegg til tab.
    </li>
    <li>
      Kode for nettsidens hovedspråk, lang-attributt, må oppdateres i henhold
      til valgt språk.
    </li>
    <li>
      Når menyen lukkes, for eksempel ved valg av språk eller lukk-knappen, skal
      synlig tastaturfokus være på hovedvalget.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>2.4.3 A, Fokusrekkefølge</li>
    <li>3.1.1 A, Språk på siden</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-hidden=true brukes for å skjule ikoner.</li>
    <li>Aria-expanded brukes på innhold som utvides/minimeres.</li>
    <li>
      Aria-haspopup=true brukes på interaktivt popup-element, typisk meny.
      Annonseres som meny av skjermleser, derfor ikke hensiktsmessig å bruke på
      vanlig utvidbar funksjonalitet som f.eks. Endre skriftstørrelse.
    </li>
    <li>
      Role=menu, menuitem brukes for å identifisere listeelementer som
      menyelementer.
    </li>
    <li>Aria-current=true brukes for å annonsere gjeldene valg (avhukning)</li>
  </ul>
</>
```
