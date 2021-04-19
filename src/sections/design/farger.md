```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components';

<MessageBar>Fargene under «Visuell identitet» har nylig blitt endret. Vi jobber med å innnarbeide de nye fargene, men inntil videre er det fargene på denne siden som brukes i komponentene.</MessageBar>;
```

Nedenfor har vi plukket ut de fargene fra Skatteetatens visuelle profil som fungerer best på digitale flater. 
I tillegg har vi lagt til et sett med grå- og blåtoner fordi vi ofte bruker disse på nett.


### Hovedfarger

Vi bruker farger etter følgende regler:

- Hovedfargen på en side er burgundy. Vi bruker denne fargen sammen med den lysere varianten burgundyLight i header og footer.
- Bokser, rammer og visuelle elementer på en side har fargene, green, lightGreen, brown, beige, pink og lightPink. 
- Vi bruker Pink og lightPink i hovedsak på feilmeldinger og markering av feil.

```js noeditor beskrivelse
import TinyColor from '@ctrl/tinycolor';
import { SkeBasis } from '@skatteetaten/frontend-components';

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
    {drawSwatch('burgundy'), drawSwatch('burgundyLight')}
  </div>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {drawSwatch('green'), drawSwatch('lightGreen')}
  </div>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {
      drawSwatch('brown'),
      drawSwatch('darkBeige'),
      drawSwatch('beige'),
      drawSwatch('lightBeige')
    }
  </div>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {
      drawSwatch('pink'), 
      drawSwatch('lightPink')
    }
  </div>
  <h3>Gråtoner</h3>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {
      drawSwatch('darkGrey'),
      drawSwatch('grey'),
      drawSwatch('lightGrey'),
      drawSwatch('whiteGrey')
    }
  </div>
</div>;
```

### Tekstfarge

Vi bruker BlackAlt som farge på tekster der bakgrunnen er lys. Hvis det er tekst på mørk bakgrunn bruker vi White.

```js noeditor beskrivelse
import TinyColor from '@ctrl/tinycolor';
import { SkeBasis } from '@skatteetaten/frontend-components';
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
  {drawSwatch('blackAlt'), drawSwatch('white'), drawSwatch('error')}
</div>;
```

### Interaksjonsfarge (det som er klikkbart)

Vi bruker Blue på lenker og knapper som brukeren kan klikke på og som ligger på lys bakgrunn. 
På lenker med mørk bakgrunn, bruker vi lightBlue. DarkBlue bruker vi for hover-effekt på knapper og andre klikkbare elementer som ikke er lenke.

```js noeditor beskrivelse
const { TinyColor } = require('@ctrl/tinycolor');
import { SkeBasis } from '@skatteetaten/frontend-components';

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
  {drawSwatch('darkBlue'), drawSwatch('blue'), drawSwatch('lightBlue') }
</div>;
```

