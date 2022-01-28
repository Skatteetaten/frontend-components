
Nedenfor har vi plukket ut de fargene fra Skatteetatens visuelle profil som fungerer best på digitale flater.
I tillegg har vi lagt til et sett med blåtoner og statusfarger fordi vi ofte bruker disse på nett.

```js noeditor beskrivelse
import TinyColor from '@ctrl/tinycolor';
import { SkeBasis } from '@skatteetaten/frontend-components/SkeBasis';
import { Icon } from '@skatteetaten/frontend-components/Icon';


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

  <h3>Tips og retningslinjer</h3>
  <p>100-fargene kan brukes med 30-fargene og lysere. Unngå å blande på tvers av hovedfarger.</p>
  <div className="dodont">
    <div className="do">
      <p class="title">Gjør slik:</p>
      <div style={{fontSize:"22px",padding:'0px 8px', color: palette.skeColor.green100, backgroundColor: palette.skeColor.green30}}>green100 på green30</div>
      <div style={{fontSize:"22px", padding:'0px 8px', color: palette.skeColor.green100, backgroundColor: palette.skeColor.green10}}>green100 på green10</div>
      <div style={{fontSize:"22px", padding:'0px 8px', color: palette.skeColor.green100, backgroundColor: palette.skeColor.green5}}>green100 på green5</div>
    </div>
    
    <div className="dont">
      <p class="title">Ikke gjør slik:</p>
      <div style={{fontSize:"22px", padding:'0px 8px', color: palette.skeColor.green100, backgroundColor: palette.skeColor.green50}}>green100 på green50 (3.88 i kontrast)</div>
      <div style={{fontSize:"22px", padding:'0px 8px', color: palette.skeColor.green70, backgroundColor: palette.skeColor.green10}}>green70 på green10 (2.89 i kontrast)</div>
      <div style={{fontSize:"22px", padding:'0px 8px', color: palette.skeColor.blue100, backgroundColor: palette.skeColor.brown50, border: `4px solid ${palette.skeColor.burgundy50}`}}>blue100 på brown50 + ramme (blande farger)</div>
    </div>
  </div>

  <p>Av statusfargene er den bare den røde som brukes til tekst:</p>

  <div className="dodont">
    <div className="do">
      <p class="title">Gjør slik:</p>
      <div style={{fontSize:"22px"}}><Icon iconName="Completed" style={{position: 'absolute', fontSize:"22px", color: palette.skeColor.statusOk}}/><span style={{marginLeft: '26px', marginTop: '4px'}}>Fullført</span></div>
      <div style={{fontSize:"22px"}}><Icon iconName="Info" style={{position: 'absolute', fontSize:"22px", color: palette.skeColor.statusWarning}}/><span style={{marginLeft: '26px', marginTop: '4px'}}>Til oppfølging</span></div>
      <div style={{fontSize:"22px", color: palette.skeColor.statusError}}><Icon iconName="Error" style={{position: 'absolute', fontSize:"22px", color: palette.skeColor.statusError}}/><span style={{marginLeft: '26px', marginTop: '4px'}}>Feil på siden</span></div>
    </div>
    <div className="dont">
      <p class="title">Ikke gjør slik:</p>
      <p style={{color: palette.skeColor.statusOk, backgroundColor: palette.skeColor.green5, fontSize:"22px"}}>Fullført</p>
      <p style={{color: palette.skeColor.statusWarning, backgroundColor: palette.skeColor.brown5, fontSize:"22px"}}>Til oppfølging</p>
    </div>
  </div>

</div>;
```

