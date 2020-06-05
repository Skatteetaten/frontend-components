** Toppbanner vises på toppen i løsningene og skiller interne og eksterne løsninger fra hverandre **

### Publikumsløsninger

Ikke-innlogget publikumsløsning:

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<TopBanner
  external
  homeText="Til skatteetaten.no"
  title="Ekstern publikumsløsning"
  logoLink
/>;
```

Innlogget publikumsløsning:

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
    <Link path={'#topbanner'} text={'Kontakt oss'} placement="before" />

    <TopStripeMenu title={'Endre skriftstørrelse'}>
      <div style={{ fontSize: '20px' }}>
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

    <Link path={'#topbanner'} text={'Logg ut'} placement="before" />
  </TopStripe>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
    logoLink
  />
</div>;
```

### Interne løsninger

På startsiden i et fagsystem:

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

<div>
  <TopBanner compact homeText="Systemnavn" homeUrl="#topbanner">
    <div></div>
  </TopBanner>
</div>;
```

På en underside i et fagsystem:

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

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
<h3>Forskjell på interne systemer og publikumsløsninger</h3>
  <p>
   Alle løsningene våre har et toppbanner som visuelt skiller interne og eksterne fra hverandre. Interne løsninger bruker fylt toppbanner med skrå strek, mens eksterne bruker en smal lang strek, slik som på <a href='https://www.skatteetaten.no'>skatteetaten.no</a>. Dette lager en smidig overgang fra skatteetaten.no til en tilknyttet løsning.
  </p>
  <p>
    Det er valgfritt å bruke kompakt eller standard utgave av banneret, men du må være konsekvent gjennom hele løsningen.
  </p>
  <h3>Startsider på interne løsinger</h3>
  <p>Interne fagsystemer har gjerne en hovedside der brukerne finner arbeidsoppgaver eller søker etter opplysninger. Her kan toppbanneret holdes enkel, og kun inneholde navn på logo og navn på applikasjonen. Toppbanneret kan inneholde meny til rapporter og «løse sider», eller personlige innstillinger. Du trenger ikke skrive «Hjemmeside», «Startside», «Velkommen» i toppbanneret her.</p>
  <h3>Undersider på interne løsinger</h3>
   <p>De fleste interne systemer har en eller flere undersider. Banneret på sidene bør ha en tittel som forteller konteksten til innholdet på siden, altså en forklaring som gjør det relevant for brukeren, for eksempel en sakstype eller arbeidsoppgave. Dersom du velger å ha arbeidsoppgaven i toppbanneret, skal også arbeidsliste-funksjonene «Gjør tilgjengelig», «Sett på vent» og «Fordel» stå i umiddelbar nærhet til arbeidsoppgaven.
   </p>
    <h3>Klikkbar logo</h3>
  <p>
    For alle publikumsløsninger skal logoen som hovedregel være klikkbar og ta deg
    til forsiden av <a href='https://www.skatteetaten.no'>skatteetaten.no</a>.
  </p>

  <p>
    Se også {' '}
    <a href="https://www.skatteetaten.no/stilogtone/visuelt/logo/">
      visuell identitet
    </a>{' '}
    for detaljer rundt bruk av logoen.
  </p>
```

```js noeditor uu
<div>
  <h3>Tips</h3>
  <ul>
    <li>
      Valgene i toppstripa som utvider innhold, bør ha et pilikon, for visuell
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
</div>
```
