
Nedenfor har vi plukket ut de fargene fra Skatteetatens visuelle profil som fungerer best på digitale flater.
I tillegg har vi lagt til et sett med blåtoner og statusfarger fordi vi ofte bruker disse på nett.

```js noeditor beskrivelse
import TinyColor from '@ctrl/tinycolor';
import { SkeBasis } from '@skatteetaten/frontend-components/SkeBasis';

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
          : palette.skeColor.blackAlt,
      }}
    >
      <p>skeColor.{colorCode}</p>
      <p>{palette.skeColor[colorCode]}</p>
    </div>
  );
}

<div>
<h3>Hovedfarger</h3>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {drawSwatch('burgundy100'),
     drawSwatch('burgundy70'), 
     drawSwatch('burgundy50'), 
     drawSwatch('burgundy30'), 
     drawSwatch('burgundy10'), 
     drawSwatch('burgundy5')}
  </div>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {drawSwatch('green100'), 
     drawSwatch('green70'),
     drawSwatch('green50'), 
     drawSwatch('green30'), 
     drawSwatch('green10'), 
     drawSwatch('green5')}  
  </div>

  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {drawSwatch('brown100'), 
     drawSwatch('brown70'),
     drawSwatch('brown50'), 
     drawSwatch('brown30'), 
     drawSwatch('brown10'), 
     drawSwatch('brown5')}  
  </div>

  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {drawSwatch('blue100'), 
     drawSwatch('blue70'),
     drawSwatch('blue50'), 
     drawSwatch('blue30'), 
     drawSwatch('blue10'), 
     drawSwatch('blue5')}  
  </div>

  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {drawSwatch('black100'), 
     drawSwatch('grey70'),
     drawSwatch('grey50'), 
     drawSwatch('grey30'), 
     drawSwatch('grey10'), 
     drawSwatch('grey5')}  
  </div>

  <h3>Statusfarger</h3>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {drawSwatch('statusError'), 
     drawSwatch('statusWarning'),
     drawSwatch('statusOk')}  
  </div>

  <h3>Interaksjonsfarger</h3>
  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {drawSwatch('interactive'), 
     drawSwatch('interactiveLight'), 
     drawSwatch('interactiveDark')}  
  </div>


</div>;
```

