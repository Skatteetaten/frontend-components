** Toppbanner vises på toppen i løsningene og skiller interne og eksterne løsninger fra hverandre **

Brukt på startsiden i et fagsystem:

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import IconButton from '@skatteetaten/frontend-components/IconButton';
<div>
  <TopBanner icon="Systemnavn" icon="Home" homeText="Systemnavn">
    <IconButton title="Innlogget bruker" buttonSize="large" icon="Person" />
    <IconButton title="Meny" buttonSize="large" icon="Menu" />
  </TopBanner>
  <br />
  <TopBanner compact icon="Home" homeText="Systemnavn">
    <IconButton title="Innlogget bruker" buttonSize="large" icon="Person" />
    <IconButton title="Meny" buttonSize="large" icon="Menu" />
  </TopBanner>
</div>;
```

Brukt på en underside i et fagsystem:

```js
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import IconButton from '@skatteetaten/frontend-components/IconButton';
import Button from '@skatteetaten/frontend-components/Button';

<div>
  <TopBanner
    icon="arrowBack"
    homeText="Systemnavn"
    title="Navn som setter konteksten"
  >
    <IconButton title="Søk" buttonSize="large" icon="Search" />
  </TopBanner>
  <br />
  <TopBanner
    compact
    icon="arrowBack"
    homeText="Systemnavn"
    title="Navn som setter konteksten"
  ></TopBanner>
</div>;
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
<h3>Forskjell på interne- og publikumsløsninger</h3>
  <p>
    Vi ønsker å skille intere og eksterne løsninger visuelt fra hverandre. Interne løsninger bruker fylt toppbanner med skrå strek, mens eksterne bruker
    den som ligner mer på den som brukes på skatteetaten.no.
  </p>
  <h3>Startsider på interne løsinger</h3>
  <p>Interne fagsystemer har gjerne en hovedside hvor en finner arbeidsoppgaver eller søker etter opplysninger. Her kan TopBanneren holdes enkel, og kun inneholde navn på logo og navn på applikasjonen. Det er ikke nødvendig å skrive «Hjemmeside», «Startside»,  «Velkommen» i toppbanneren her. TopBanner kan inneholde meny til rapporter og «løse sider», eller personlige innstillinger.</p>
  <h3>Undersider på interne løsinger</h3>
   <p>De fleste interne systemer har en eller flere sett med undersider. TopBanner bør da inneholde en tydelig markert snarvei tilbake til hovedsiden. I tillegg bør banneren få en tittelen som setter kontektsen til det som utføres i skjermbildet nedenfor, for eksempel en sakstype eller arbeidsoppgave. Høyre side av topBanner kan inneholde funksjoner knyttet til konteksten.</p>
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
