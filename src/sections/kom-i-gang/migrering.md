```js noeditor
import { Card } from '@skatteetaten/frontend-components/Card';
import { Link } from '@skatteetaten/frontend-components/Link';

<Card color={Card.Color.BEIGE}>
  <h2>Hvorfor vi faser ut legacy-komponentene</h2>

  <p>
    Denne migreringsguiden bygger på et strategisk valg om å avvikle
    legacy‑komponentene og samle all videre utvikling i det nye designsystemet.
    Målet er å sikre bedre helhet, forutsigbarhet og en mer effektiv
    utviklingsprosess på tvers av team.
  </p>

  <h3>Bakgrunn for beslutningen</h3>

  <ul>
    <li>
      Legacy‑komponentene blir gradvis faset ut og vil ikke lenger
      vedlikeholdes.
    </li>
    <li>
      Parallel bruk av gamle og nye komponenter skaper utfordringer som:
      <ul>
        <li>ujevn visuell stil</li>
        <li>ulike interaksjonsmønstre</li>
        <li>økt teknisk gjeld og mer vedlikehold</li>
      </ul>
    </li>
  </ul>

  <h3>Fordeler med nytt designsystem</h3>

  <ul>
    <li>mer helhetlig og konsistent brukeropplevelse</li>
    <li>bedre tilgjengelighet og tydeligere semantikk</li>
    <li>moderne, mer forutsigbare og vedlikeholdbare komponenter</li>
    <li>mindre kompleksitet og færre spesialtilpasninger</li>
  </ul>

  <p>
    Dette gir rammene for migreringsarbeidet: å redusere variasjon, forenkle
    utviklingsløp og sikre at alle løsninger beveger seg i samme retning.
  </p>
</Card>;
```

## Før du starter

### **Forberedelser**

- Sjekk Migrering‑fanen for hver legacy‑komponent.
- Verifiser at prosjektet kan oppgraderes til React 19.
- Snakk med designer om:
  - sider som påvirkes
  - avstander, tilstander, UU
- Sett opp:
  - [installer nytt komponentbiliotek](https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/for-utviklere/) i prosjektet (npm install):
  - [sett opp tokens](https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/for-utviklere/) for bruk med legacy og nytt ds:

### **Når du står fast**

- Bruk designsystem‑kanalen.
- Sjekk hvordan andre team har løst lignende migreringer.

## Underveis i migreringen

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

- mange varianter og tilstander
- ujevn semantikk
- API‑er med skjult funksjonalitet via `...props`

Nytt designsystem prioriterer:

- færre, tydeligere tilstander
- mer forutsigbare API-er
- konsistente aria‑attributter
- enklere og mer helhetlig brukeropplevelse

### **Komponentfleksibilitet**

- Legacy støttet `...props` som førte til mer uforutsigbar oppforsel
- Nytt designsystem:
  - støtter ikke spread‑operator
  - komponenter har eksplisitte props
  - nye props legges til ved behov

### **Layout og Grid**

- Ingen nye layout‑komponenter.
- Bruk:
  - [CSS Grid](https://www.w3schools.com/css/css_grid.asp)
  - [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- Se sidetyper i Storybook for kodeeksempler,
  - Ekstern: [Sentrert sidelayot](https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-ekstern-layout--standard-layout)
  - Intern: [Arbeidliste](https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-intern-arbeidsliste--arbeidsliste) eller[Saksvisning](https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-intern-saksvisning--saksvisning)

### **Viktige mønstre**

- **Obligatoriske felt**
  - ingen `*`, bruk [mønster for obligatoriske felt](https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/) i stedet.
- **Disablede elementer**
  - unngå; vurder skjuling, forklaring eller readonly. Se [mønster for inaktive felt](https://www.skatteetaten.no/stilogtone/monster/interaksjon/inaktive-felt/)
- **Feilmeldinger**
  - skille mellom [brukerutløste feil](https://www.skatteetaten.no/stilogtone/monster/interaksjon/brukerutlost/) og [systemvarsler}(https://www.skatteetaten.no/stilogtone/monster/interaksjon/systemvarsler/)
- **Overskriftsnivåer**
  - bruk `<Heading level="" as="">` aktivt for å styre visuelt og semantisk nivå.
  - unngå [hopp i overskriftnivå](https://www.uutilsynet.no/veiledning/tekst-og-struktur/226#overskriftsniver)

## Etter migreringen

### **Sjekk at du er ferdig**

1. Alle legacy‑komponenter er fjernet
2. Nye tokens og tema brukes
3. Mobilvisning fungerer (min. 320px)
4. UU og tilgjengelighetserklæring er oppdatert
5. Komponenter og sider følger mønstrene i stil og tone
6. Ingen `@skatteetaten/frontend-components` i kodebasen

### **Oppdatér teamet**

- Del erfaringer i designsystem‑kanalen.
- Gi beskjed om behov for nye props eller mønstre.

## **Hvor får du hjelp**

- Designsystem-teamet og kollegaer i designsystem-kanalen.
- Migreringsfanen på hver komponent
