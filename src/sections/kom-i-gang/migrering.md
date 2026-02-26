```js noeditor
import { Card } from '@skatteetaten/frontend-components/Card';
import { Link } from '@skatteetaten/frontend-components/Link';

<Card color={Card.Color.BEIGE}>
  <h2>Legacy-komponentene fases ut</h2>

  <p>
    Vi har besluttet å fase ut legacy‑komponentene. På et tidspunkt vil de ikke
    lenger bli vedlikeholdt. Vi jobber for at flest flest mulig skal samle seg
    om og bruke det{' '}
    <a href="https://www.skatteetaten.no/stilogtone/designsystemet/">
      nye designsystemet
    </a>
    .
  </p>
</Card>;
```

## **Slik bruker du guidene**

Denne siden er en overordnet migreringsguide. Den beskriver strategi, arbeidsflyt og kvalitetskriterier på tvers av komponenter. For konkrete API-endringer og kodegrep, bruk migreringsguidene per komponent.

- Overordnet guide (denne siden): prioritering, rekkefølge, tverrgående mønstre og kvalitetssikring.
- Komponentguide: detaljerte endringer per komponent, inkludert props, semantikk og konkrete migreringsgrep.

Anbefalt rekkefølge:

1. Les denne siden for overordnet retning.
2. Velg komponenten du skal migrere.
3. Følg migreringsguiden for komponenten.
4. Bruk sjekklisten nederst på denne siden før du anser arbeidet som ferdig.

Eksempel på komponentguide: [Button](https://skatteetaten.github.io/frontend-components/#button)

## **Før du starter**

### **Forberedelser**

- Verifiser at prosjektet kan oppgraderes til React 19. Fra 2.0.0 av designsystemet kreves denne versjonen av React.
- Snakk med designer om:
  - hvilke sider som kan påvirkes. Legacy designsystem hadde sitt utspring i interne løsninger, og mens nytt designsystem har prioritert publikumsløsninger høyere. Det betyr at ting som brekkpunkter og spacing er satt opp litt forskjellig. Vi har også en annen tilnærming til mobil og responsivt design.
  - Sjekk tilgjengelighetserklæringen - hvis dere har en slik - og vurder å bruke eventuelle feil eller mangler her som utgangspunkt for migreringen.
- Sett opp:
  - [installer nytt komponentbibliotek](https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/for-utviklere/) i prosjektet (npm install):
  - [sett opp tokens](https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/for-utviklere/) for bruk med legacy og nytt ds:

### **Når du står fast**

- Bruk designsystem‑kanalen hyppig. Her er det hjelp å få, enten fra designsystem-teamet eller kollegaer.
- Sjekk [mønstrene og maler](https://www.skatteetaten.no/stilogtone/monster/) og tilhørende kodeeksempler i Storybook. Kanskje problemet ditt kan løses på en annen måte?
- Sjekk hvordan andre team har løst lignende migreringer.

## **Underveis i migreringen**

### **Strategi**

- Migrer inkrementelt – én komponent av gangen.
- Legacy og nytt designsystem kan brukes parallelt.
- Bytt ut egne verdier for font, farge, brekkpunkter og liknende med [designtokens](https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/bruke-designtokens/):
- Test fortløpende:
  - visuelle tester
  - jest/RTL
  - interaksjon + UU

### **Hva som ikke videreføres**

Legacy bygger på Fluent UI og hadde:

1. Sammensatte komponenter med mange varianter og tilstander - forskjeller er dokumentert under "Migration-fanen" på hver enkelt komponent.
2. Ujevn semantikk - komponentene var en kombinasjon av Fluent UI og egenutviklede komponenter med stylingmekanisme fra Fluent UI.
3. API‑er med skjult funksjonalitet via `...props`

Nytt designsystem prioriterer:

- _færre, tydeligere tilstander_, komponentene gjør færre ting og har færre tilstander.
- _mer forutsigbare API-er_, slik at props har mer enhetlige navn og bruksområder.
- _utvalgte aria‑attributter_, vi velger ut aria-attributter etter praktisk testing med komponenter. Hvis man bruker for mange aria-attributter kan komponentene fort oppleves som masete for skjermleserbrukere. Sjekk dokumentasjon på stil og tone-sidene eller migreringsfanen hvis du er usikker.
- _mer helhetlig brukeropplevelse_ gjennom blant annet bruk av designtokens.

### **Komponentfleksibilitet**

- Legacy støttet `...props` som førte til mer uforutsigbar oppførsel som ikke var enkelt å dokumentere. Noen ganger ble slike props sendt videre til Fluent UI-komponent, mens andre ganger ble de håndtert i vår kode. I tillegg kunne aria-attributter brukes forskjellig fra team til team.
- Nytt designsystem:
  - støtter ikke spread‑operator
  - komponenter har eksplisitte props
  - lav terskel for å legge til nye props ved behov.
  - komponenter kan overstyres ved hjelp av ref.

Summen av dette er at vi ønsker å øke sjansen for helhetlige brukeropplevelser og at vi kan få til god universell utforming ut av boksen, men samtidig skal komponentene være fleksible å jobbe med.

### **Layout og Grid**

- Nytt designsystem inneholder ikke layout‑komponenter. Vår vurdering har vært at det ofte vil være små forskjeller fra løsning til løsning, og det er lite kost–nytte å lage dedikerte layout-komponenter som likevel må overstyres. Vi tilbyr i stedet css-eksempler som bruker våre designtokens.
- Bruk:
  - [CSS Grid](https://www.w3schools.com/css/css_grid.asp)
  - [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- Se sidetyper i Storybook for kodeeksempler,
  - Ekstern: [Sentrert sidelayout](https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-ekstern-layout--standard-layout)
  - Intern: [Arbeidliste](https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-intern-arbeidsliste--arbeidsliste) eller [Saksvisning](https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-intern-saksvisning--saksvisning)

### **Viktige mønstre**

- **Obligatoriske felt**
  - Unngå å bruke stjerne `*` for å markere obligatoriske felt [mønster for obligatoriske felt](https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/) i stedet. Dette for å støtte [tverretatlig mønster](https://designsystemet.no/no/patterns/required-and-optional-fields) for slik markering.
- **Disablede elementer**
  - Unngå å bruke inaktive felt der du kan. Vurder i stedet skjuling, forklaring eller readonly. Se [mønster for inaktive felt](https://www.skatteetaten.no/stilogtone/monster/interaksjon/inaktive-felt/)
- **Feilmeldinger**
  - Her skiller vi mellom [brukerutløste feil](https://www.skatteetaten.no/stilogtone/monster/interaksjon/brukerutlost/) og [systemvarsler](https://www.skatteetaten.no/stilogtone/monster/interaksjon/systemvarsler/). Også for å matche [tverretatlig mønster](https://designsystemet.no/no/patterns/systemnotifications)
- **Overskriftsnivåer**
  - Bruk `<Heading level="" as="">` aktivt for å styre visuelt og semantisk nivå.
  - Unngå [hopp i overskriftnivå](https://www.uutilsynet.no/veiledning/tekst-og-struktur/226#overskriftsniver)

## **Etter migreringen**

### **Sjekk at du er ferdig**

1. Alle legacy‑komponenter er fjernet
2. Nye tokens og tema brukes
3. Mobilvisning fungerer (min. 320px)
4. UU og tilgjengelighetserklæring er oppdatert
5. Komponenter og sider følger mønstrene i stil og tone
6. Ingen `@skatteetaten/frontend-components` i kodebasen
