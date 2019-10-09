Her har vi plukket ut de fargene fra Skatteetatens visuelle profil som fungerer best på digitale flater. I tillegg lagt til et sett med grå- og blåtoner fordi de ofte brukes på nett.

### Hovedfarger

Burgundy sammen med den lysere varianten burgundyLight brukes i header og footer og er hovedfargen på en side.
Bokser, rammer, visuelle elementer på en side kan bruke green, lightGreen, brown, beige, pink og lightPink. Pink og lightPink brukes i hovedsak til feilmeldinger og markering av feil.

```js noeditor
import TinyColor from '@ctrl/tinycolor';
import SkeBasis from '@skatteetaten/frontend-components/SkeBasis';

palette = Object(SkeBasis.PALETTE);

function drawSwatch(colorCode) {
  const color = new TinyColor(palette.skeColor[colorCode]);

  return (
    <div
      class="swatch"
      style={{
        backgroundColor: palette.skeColor[colorCode],
        color: color.isDark()
          ? palette.skeColor.white
          : palette.skeColor.blackAlt
      }}
    >
      <p>skeColor.{colorCode}</p>
      <p>{palette.skeColor[colorCode]}</p>
    </div>
  );
}

<div>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {(drawSwatch('burgundy'), drawSwatch('burgundyLight'))}
  </div>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {(drawSwatch('green'), drawSwatch('lightGreen'))}
  </div>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>{}</div>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {
      (drawSwatch('brown'),
      drawSwatch('darkBeige'),
      drawSwatch('beige'),
      drawSwatch('lightBeige'))
    }
  </div>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {(drawSwatch('pink'), drawSwatch('lightPink'))}
  </div>
  <h3>Gråtoner</h3>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {
      (drawSwatch('darkGrey'),
      drawSwatch('grey'),
      drawSwatch('lightGrey'),
      drawSwatch('whiteGrey'))
    }
  </div>
</div>;
```

### Tekstfarge

BlackAlt brukes som fargen på tekster hvis bakgrunnen er lys. White brukes hvis det er tekst på mørk bakgrunn.

```js noeditor
import TinyColor from '@ctrl/tinycolor';
import SkeBasis from '@skatteetaten/frontend-components/SkeBasis';
palette = Object(SkeBasis.PALETTE);

function drawSwatch(colorCode) {
  const color = new TinyColor(palette.skeColor[colorCode]);

  return (
    <div
      class="swatch"
      style={{
        backgroundColor: palette.skeColor[colorCode],
        color: color.isDark()
          ? palette.skeColor.white
          : palette.skeColor.blackAlt
      }}
    >
      <p>skeColor.{colorCode}</p>
      <p>{palette.skeColor[colorCode]}</p>
    </div>
  );
}

<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
  {(drawSwatch('blackAlt'), drawSwatch('white'))}
</div>;
```

### Interaksjonsfarge (det som er klikkbart)

Blue brukes på lenker og knapper som er klikkbare og som ligger på lys bakgrunn. Lenker på mørk bakgrunn, bruker lightBlue. DarkBlue brukes for hover-effekt på knapper og andre klikkbare elementer som ikke er lenke.

```js noeditor
const { TinyColor } = require('@ctrl/tinycolor');
import SkeBasis from '@skatteetaten/frontend-components/SkeBasis';

palette = Object(SkeBasis.PALETTE);

function drawSwatch(colorCode) {
  const color = new TinyColor(palette.skeColor[colorCode]);

  return (
    <div
      class="swatch"
      style={{
        backgroundColor: palette.skeColor[colorCode],
        color: color.isDark()
          ? palette.skeColor.white
          : palette.skeColor.blackAlt
      }}
    >
      <p>skeColor.{colorCode}</p>
      <p>{palette.skeColor[colorCode]}</p>
    </div>
  );
}

<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
  {(drawSwatch('darkBlue'), drawSwatch('blue'), drawSwatch('lightBlue'))}
</div>;
```

### Kun til interne løsninger

```js noeditor
import TinyColor from '@ctrl/tinycolor';
import SkeBasis from '@skatteetaten/frontend-components/SkeBasis';

palette = Object(SkeBasis.PALETTE);

function drawSwatch(colorCode) {
  const color = new TinyColor(palette.skeColor[colorCode]);

  return (
    <div
      class="swatch"
      style={{
        backgroundColor: palette.skeColor[colorCode],
        color: color.isDark()
          ? palette.skeColor.white
          : palette.skeColor.blackAlt
      }}
    >
      <p>skeColor.{colorCode}</p>
      <p>{palette.skeColor[colorCode]}</p>
    </div>
  );
}

<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
  {(drawSwatch('internal'), drawSwatch('internalLight'))}
</div>;
```

### Støttefarger

Disse fargene brukes i løsninger som designet før det nye visuelle designet kom, og skal derfor fases ut. Ikke bruk disse fargene i nye løsninger som lages.

```js noeditor
const { TinyColor } = require('@ctrl/tinycolor');
import SkeBasis from '@skatteetaten/frontend-components/SkeBasis';

palette = Object(SkeBasis.PALETTE);

function drawSwatch(colorCode) {
  const color = new TinyColor(palette.skeColor[colorCode]);

  return (
    <div
      class="swatch"
      style={{
        backgroundColor: palette.skeColor[colorCode],
        color: color.isDark()
          ? palette.skeColor.white
          : palette.skeColor.blackAlt
      }}
    >
      <p>skeColor.{colorCode}</p>
      <p>{palette.skeColor[colorCode]}</p>
    </div>
  );
}

<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
  {(drawSwatch('mediumBlue'), drawSwatch('neutralGrey'), drawSwatch('black'))}
</div>;
```
