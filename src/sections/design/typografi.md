Hvor lett noe er å lese, er avgjørende for forståelsen av innholdet. Tekst formidler mesteparten av det vi å ønsker å fortelle til brukeren på de digitale plattformene våre.
Derfor er skriftstørrelse, farge, linjeavstand og spaltebredde viktige element i formidlingen av budskapet vårt.

### Skriftstørrelse

Fontstørrelsene er satt opp i REM-format. Det betyr at teksten kan forstørres og forminskes uten at man mister tilgang til innhold eller funksjoner. 1rem tilsvarer 16px størrelse på vanlig zoom.
Komponentene henter fontstørrelser fra en token-fil i biblioteket (components/utils/designtokens). Disse størrelsene er:

- xxs: 10px / 0.625rem
- xs: 12px / 0.75rem
- small: 14px / 0.875rem
- medium: 16px / 1rem
- large: 18px / 1.125rem
- xl: 22px / 1.375rem
- xxl: 30px / 1.875rem
- xxxl: 42px / 2.625rem
- mega: 68px / 4.25rem

### Avstander

Avstander i Designsystemet er i hovedsak hopp på '8px' (0.5rem). Vi bruker 8px mellom to elementer som hører sammen, 16px (1rem) mellom to elementer som ikke hører naturlig sammen, og 24px (1.5rem) for avslutninger av seksjoner eller andre tydelige skiller. Rammer og streker har gjerne en tykkelse på 4px.

### Farge

For å sikre god lesbarhet har vi valgt en tekstfarge er i nærheten av sort, som ikke er fullstendig sort. Denne fargen heter skeColor.blackAlt.

```css
color: '#1d1d1d';
color: 'rgba(29,29,29');
```

### Linjeavstand

Linjeavstandene er satt opp som desimaler (f.eks. 1.5). Da kan man kan øke skriftstørrelsen med browser uten å miste tilgang til innhold. Generelt øker behovet for linjeavstand når skriftstørrelsen blir mindre. Store overskrifter trenger mindre linjehøyde. Disse linjehøydene er tilgjengelige i designsystemet, under components/utils/designtokens:

- xxs: 1.6
- small: 1.75
- medium: 1.5
- large: 1.6666
- xl: 1.333

### Spaltebredde

Hvis en tekstlinje (spalten) er for lang vil teksten oppleves som tung å lese. Ideelt sett bør hver linje med tekst inneholde mellom 65–75 tegn.

### Om skrifttypen

Helvetica er valgt som Skatteetatens profilfont, men på grunn av høye kostnader har vi ikke valgt å kjøpe lisens for Helvetica til bruk på web.
Det betyr at Designsystemet ikke inneholder noen font, men er satt opp slik at dersom Helvetica er installert hos brukeren, så vil denne bli brukt.
Dersom Helvetica ikke er installert, vil Arial være neste beste alternativ, og i praksis den fonten de fleste brukere ser.

### Komponenter og design tokens

Størrelser, farger og linjehøyder er tilgjengelige som [Design tokens](#section-designtokens). Se også [Typography-komponenten](#typography) for hjelp til stiling av vanlige elementer.
