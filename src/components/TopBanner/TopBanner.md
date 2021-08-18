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
      <div style={{ fontSize: '24px', marginTop: '8px' }}>
        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
        eller - for å forminske.
      </div>
    </TopStripeMenu>
    <TopStripeMenu
      showOnMobile={false}
      closeMenuAriaLabel="Lukk Language / Språk"
      title={'Language / Språk'}
    >
      <TopStripeButton>Norsk</TopStripeButton>
      <TopStripeButton icon={'check'}>Nynorsk</TopStripeButton>
      <TopStripeButton>Engelsk</TopStripeButton>
      <TopStripeButton>Sørsamisk</TopStripeButton>
      <TopStripeButton ariaLabel={'Nordsamisk'}>Nordsamisk</TopStripeButton>
    </TopStripeMenu>

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
<>
  <h3>Forskjellig toppbanner på interne løsninger og på publikumsløsninger</h3>
  <p>
    Alle løsningene våre har et toppbanner som visuelt skiller interne og eksterne nettløsninger
  </p>

  <ul>
    <li>Interne løsninger bruker fylt toppbanner med skrå strek.</li>
    <li>
      Eksterne løsninger bruker en smal lang strek, slik som på skatteetaten.no. Dette
      lager en smidig overgang fra publikumsløsningen til en tilknyttet løsning.
    </li>
  </ul>

<h3>Slik setter du opp TopBanner på interne løsninger</h3>



 <p>Startsider: Interne fagsystemer har en startside der brukeren finner arbeidsoppgaver eller søker etter opplysninger. På startsiden gjelder følgende: </p>
  <ul>
    <li>
     Hold toppbanneret enkelt ved å kun ha navn på logo og tittel på applikasjonen.
    </li>

    <li>
      TopBanner kan inneholde meny til rapporter og enkeltstående sider eller personlige innstillinger. 
    </li> 
<li>
    Unngå å skrive «Startside» eller «Velkommen» i toppbanneret.
    </li>
  </ul>


  <p>Undersider: På undersidene på interne fagsystemer viser vi gjerne sakstypen eller en arbeidsoppgaven. På undersider gjelder følgende:</p>

  <ul>
    <li>
      Banneret skal ha en tittel som gjør innholdet relevant og enkelt å bruke, for eksempel hvilken sakstype eller arbeidsoppgave det gjelder.
    </li>
    <li>
      Hvis du velger å ha arbeidsoppgaven i toppbanneret, skal også arbeidsliste-funksjonene «Gjør tilgjengelig», «Sett på vent» og «Fordel» stå i umiddelbar nærhet.
    </li>
  </ul>

  <h3>Pass på å ha klikkbar logo i publikumsløsninger</h3>
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
