Tekst formidler mesteparten av det vi å ønsker å kommunisere, så lesbarhet er viktig - og her spiller skriftstørrelse, farge, linjeavstand og spaltebredde inn.

### Skriftstørrelse

Standard fontstørrelse er 16px, Komponentene henter fontstørrelser fra en fil i biblioteket (components/utils/fonts). Disse størrelsene er:

- mini: 10px
- xSmall: 12px
- small: 12px
- medium: 16px
- large: 18px
- xLarge: 22px
- xxLarge: 28px
- superLarge: 42px
- mega: 72px

### Avstander

Avstander i Designsystemet er i hovedsak hopp på '8px'. Vi bruker 8px mellom to elementer som hører sammen, 16px mellom to elementer ikke hører naturlig sammen, og 24px for avslutninger av seksjoner eller andre tydelige skiller. Rammer og streker har en gjerne en tykkelse på 4px.

### Farge

For å sikre god lesbarhet har vi valgt en tekstfarge er i nærheten av sort, som ikke er fullstendig sort. Denne fargen heter skeColor.blackAlt.

```css
color: '#1d1d1d';
color: 'rgba(29,29,29');
```

### Linjeavstand

Linjeavstanden bør være omkring 120-160 % av skriftstørrelsen. Generelt øker behovet for linjeasvtand når skriftstørrelsen blir mindre. Som en tommelfingerregel kan line-height settes til font-size pluss 7 piksler. For standard brødtekst i artikkel blir dette: 16px + 7px = 23px.

```css
line-height: 23px;
```

### Spaltebredde

Hvis en tekstlinje (spalten) er for lang vil teksten oppleves som tung å lese. Ideelt sett bør hver linje med tekst inneholde mellom 65-75 tegn.

### Om skrifttypen

Helvetica er valgt som Skatteetatens profilfont, men på grunn av høye kostnader er det ikke blitt valgt å kjøpe lisens for Helvetica til bruk på web. Det betyr at Designsystemet ikke inneholder noen font, men er satt opp slik at dersom Helvetica er installert så vil denne brukes. Dersom en maskin ikke har installert Helvetica, vil Arial være neste beste alternativ, og i praksis den fonten som vises hos svært mange brukere.

### Komponent

Se også [Typography-komponenten](#typography) for hjelp til stiling av vanlige elementer.
