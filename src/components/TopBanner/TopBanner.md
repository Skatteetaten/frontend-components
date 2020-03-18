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
    Vi ønsker å skille interne og eksterne løsninger visuelt fra hverandre. Interne løsninger bruker fylt toppbanner med skrå strek, mens eksterne bruker
    den som ligner mer på den som brukes på skatteetaten.no, for en smidig overgang fra skatteetaten.no til en tilnyttet løsning.
  </p>
  <h3>Startsider på interne løsinger</h3>
  <p>Interne fagsystemer har gjerne en hovedside hvor en finner arbeidsoppgaver eller søker etter opplysninger. Her kan TopBanneren holdes enkel, og kun inneholde navn på logo og navn på applikasjonen. Det er ikke nødvendig å skrive «Hjemmeside», «Startside»,  «Velkommen» i toppbanneren her. TopBanner kan inneholde meny til rapporter og «løse sider», eller personlige innstillinger.</p>
  <h3>Undersider på interne løsinger</h3>
   <p>De fleste interne systemer har en eller flere sett med undersider. I tillegg bør banneren få en tittel som setter kontektsen til det som utføres i skjermbildet nedenfor, for eksempel en sakstype eller arbeidsoppgave. Dersom arbeidoppgaven står i toppbanneret skal også arbeidsliste-funksjonene «Gjør tilgjengelig», «Sett på vent» og «Fordel» bør stå i umiddelbar nærhet.
   </p>
    <h3>Klikkbar logo</h3>
  <p>
    For alle publikumsløsninger skal logoen som hovedregel være klikkbar skal det ta deg
    til forsiden av www.skatteetaten.no.
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

```js noeditor uu
<p>Ingen informasjon</p>
```
