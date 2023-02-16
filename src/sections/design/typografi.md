Hvor lett noe er å lese, er avgjørende for forståelsen av innholdet. Tekst formidler mesteparten av det vi å ønsker å fortelle til brukeren på de digitale plattformene våre.
Derfor er skriftstørrelse, farge, linjeavstand og spaltebredde viktige element i formidlingen av budskapet vårt.

## Skriftstørrelse

Fontstørrelsene er satt opp i REM-format. Det betyr at teksten kan forstørres og forminskes uten at man mister tilgang til innhold eller funksjoner. 1rem tilsvarer 16px størrelse på vanlig zoom.
Komponentene henter fontstørrelser fra en token-fil i biblioteket (components/utils/designtokens). Disse størrelsene er:

```js noeditor
import { Table } from '@skatteetaten/frontend-components/Table';
import { IconButton } from '@skatteetaten/frontend-components/IconButton';
import designtokenFontSizes from '../../components/utils/designtokens/_fontSizes.json';

const columns = [
  {
    key: 'column1',
    name: 'Navn',
    fieldName: 'name',
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: 'column2',
    name: 'Verdi',
    fieldName: 'valuerem',
    isResizable: true,
    alignment: 'right',
  },
  {
    key: 'column2',
    name: 'Verdi (PX)',
    fieldName: 'valuepx',
    isResizable: true,
    alignment: 'right',
  },
  {
    key: 'column4',
    name: 'Kopier',
    fieldName: 'kopierToken',
    maxWidth: 50,
    alignment: 'right',
  },
];

const fontKeys = Object.keys(designtokenFontSizes);

const designtokenTypographyData = [];
fontKeys.forEach((item) => {
  if (designtokenFontSizes[item].includes('rem')) {
    var pxvalue = designtokenFontSizes[item].split('r')[0] * 16;
  }
  if (item.includes('font-size') && !item.includes('icon')) {
    designtokenTypographyData.push({
      name: `$${item}`,
      valuerem: designtokenFontSizes[item],
      valuepx: pxvalue,

      kopierToken: (
        <IconButton
          title="Kopier"
          buttonSize="small"
          icon="Copy"
          onClick={() => {
            navigator.clipboard.writeText(`designtokenFontSizes['${item}']`);
          }}
        />
      ),
    });
  }
});

const iconGroup = {
  typography: designtokenTypographyData,
};

const caption = 'Liste over skriftstørrelser';

<div>
  <Table
    caption={caption}
    hideCaption
    columns={columns}
    data={iconGroup.typography}
    fullWidth
  />
</div>;
```

## Avstander

Avstander i Designsystemet er i hovedsak hopp på '8px' (0.5rem). Vi bruker 8px mellom to elementer som hører sammen, 16px (1rem) mellom to elementer som ikke hører naturlig sammen, og 24px (1.5rem) for avslutninger av seksjoner eller andre tydelige skiller. Rammer og streker har gjerne en tykkelse på 4px.

## Farge

For å sikre god lesbarhet har vi valgt en tekstfarge er i nærheten av sort, som ikke er fullstendig sort. Denne fargen heter skeColor.black100.

```css
color: '#1a1a1a';
color: 'rgba(26,26,26');
```

## Linjeavstand

Linjeavstandene er satt opp som desimaler (f.eks. 1.5). Da kan man kan øke skriftstørrelsen med browser uten å miste tilgang til innhold. Generelt øker behovet for linjeavstand når skriftstørrelsen blir mindre. Store overskrifter trenger mindre linjehøyde. Disse linjehøydene er tilgjengelige i designsystemet, under components/utils/designtokens:

```js noeditor
import { Table } from '@skatteetaten/frontend-components/Table';
import { IconButton } from '@skatteetaten/frontend-components/IconButton';
import designtokenFontSizes from '../../components/utils/designtokens/_fontSizes.json';

const columns = [
  {
    key: 'column1',
    name: 'Navn',
    fieldName: 'name',
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: 'column2',
    name: 'Verdi',
    fieldName: 'valuerem',
    isResizable: true,
    alignment: 'right',
  },
  {
    key: 'column4',
    name: 'Kopier',
    fieldName: 'kopierToken',
    maxWidth: 50,
    alignment: 'right',
  },
];

const fontKeys = Object.keys(designtokenFontSizes);

const designtokenTypographyData = [];
fontKeys.forEach((item) => {
  if (item.includes('line-height')) {
    designtokenTypographyData.push({
      name: `$${item}`,
      valuerem: designtokenFontSizes[item],

      kopierToken: (
        <IconButton
          title="Kopier"
          buttonSize="small"
          icon="Copy"
          onClick={() => {
            navigator.clipboard.writeText(`designtokenFontSizes['${item}']`);
          }}
        />
      ),
    });
  }
});

const iconGroup = {
  typography: designtokenTypographyData,
};

const caption = 'Liste over linjeavstander';

<div>
  <Table
    caption={caption}
    hideCaption
    columns={columns}
    data={iconGroup.typography}
    fullWidth
  />
</div>;
```

## Spaltebredde

Hvis en tekstlinje (spalten) er for lang vil teksten oppleves som tung å lese. Ideelt sett bør hver linje med tekst inneholde mellom 65–75 tegn.

## Om skrifttypen

Helvetica er valgt som Skatteetatens profilfont, men på grunn av høye kostnader har vi ikke valgt å kjøpe lisens for Helvetica til bruk på web.
Det betyr at Designsystemet ikke inneholder noen font, men er satt opp slik at dersom Helvetica er installert hos brukeren, så vil denne bli brukt.
Dersom Helvetica ikke er installert, vil Arial være neste beste alternativ, og i praksis den fonten de fleste brukere ser.

## Komponenter og design tokens

Størrelser, farger og linjehøyder er tilgjengelige som <a class="brodtekst-link" href="#section-designtokens">Design tokens</a>. Se også <a class="brodtekst-link" href="#typography">Typography-komponenten</a> for hjelp til stiling av vanlige elementer.
