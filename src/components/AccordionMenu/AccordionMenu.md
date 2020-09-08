```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  Se tilhørende underkomponent{' '}
  <a href="/#accordionmenuitem">AccordionMenuItem</a> for komplett API.
</MessageBar>;
```

** Ekspanderende panel i saksbehandlingsløsninger**

```js
import AccordionMenu from '@skatteetaten/frontend-components/AccordionMenu';
import AccordionMenuItem from '@skatteetaten/frontend-components/AccordionMenu/AccordionMenuItem';
import Icon from '@skatteetaten/frontend-components/Icon/Icon';
import IconButton from '@skatteetaten/frontend-components/IconButton/IconButton';
import ActionButton from '@skatteetaten/frontend-components/ActionButton/ActionButton';

// Inline styles for hacking examples
const dlStyle = {
  display: 'inline-block',
  width: '50%',
  margin: '0 0 5px 0',
  verticalAlign: 'text-top'
};

const removeMargin = {
  margin: '0'
};

const ulStyle = {
  padding: 0,
  margin: 0
};

const centerAlignStyle = {
  display: 'flex',
  alignItems: 'center'
};

const timeStampStyle = {
  paddingLeft: 40,
  marginTop: '-10px'
};

<div style={{ width: '500px' }}>
  <AccordionMenu>
    <AccordionMenuItem
      icon="Company"
      iconLabel="Selskap"
      heading={
        <>
          <span>
            <strong>987 654 321 </strong>
          </span>
          <br />
          <span>
            <strong>Gårsdprodukter kortreist mat AS</strong>
          </span>
        </>
      }
    >
      <span>
        <strong>Kontaktopplysninger</strong>
      </span>
      <dl style={removeMargin}>
        <dt style={dlStyle}>Navn</dt>
        <dd style={dlStyle}>Ola Nordmann</dd>
        <dt style={dlStyle}>Adresse</dt>
        <dd style={dlStyle}>
          Norgesnavle 666 <br />
          4878 Grimstad
        </dd>
        <dt style={dlStyle}>Telefon</dt>
        <dd style={dlStyle}>987 65 432</dd>
      </dl>
    </AccordionMenuItem>
    <AccordionMenuItem
      icon="Briefcase"
      iconLabel={'Arbeidsgiver'}
      heading={
        <span>
          <strong>Kommentar</strong>
        </span>
      }
    >
      <div style={centerAlignStyle}>
        <strong>Om parten </strong>
        <IconButton
          alt="Rediger"
          title="Redigerer parten"
          type="default"
          icon="Edit"
        />
      </div>
      <p>
        Vært i kontakt med selskapet som opplyser at de har solgt varelagrene i
        juni.
      </p>
      <div style={centerAlignStyle}>
        <p style={removeMargin}>
          <em>Siri Saksbehandler, 17.07.2019 </em>
        </p>
        <IconButton
          alt="Oppdater"
          title="Oppdaterer partsinfo"
          type="small"
          icon="Update"
        />
      </div>
    </AccordionMenuItem>
    <AccordionMenuItem
      icon="Briefcase"
      iconLabel={'Arbeidsgiver'}
      heading={
        <>
          <span>
            <strong>Saksbehandling</strong>
          </span>
          <br />
          <span>1 aktiv sak</span>
        </>
      }
    >
      <ul style={ulStyle}>
        <li>
          <ActionButton icon="Update" ariaLabel="Oppdater">
            Vurder omberegning engangsavgift
          </ActionButton>
          <br />
          <div style={timeStampStyle}>Sist endret: 16.07.2019</div>
        </li>
        <li>
          <ActionButton icon="Check" ariaLabel="Utført">
            Refusjon engangsavgift
          </ActionButton>
          <br />
          <div style={timeStampStyle}>Sist endret: 22.05.2019</div>
        </li>
        <li>
          <ActionButton icon="Check" ariaLabel="Utført">
            Refusjon engangsavgift
          </ActionButton>
          <br />
          <div style={timeStampStyle}>Sist endret: 14.05.2019</div>
        </li>
      </ul>
    </AccordionMenuItem>
  </AccordionMenu>
</div>;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>Det skal kun være ett tabstopp pr ekspander.</li>
    <li>
      Ekspandere skal ha en visuell indikator på at innhold utvides/minimeres.
    </li>
    <li>
      Sjekk at elementet leses som en ekspander med skjermleser og at du
      beholder fokus når du utvider/minimerer den.
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>Aria-expanded brukes på knappene som utvides/minimeres.</li>
    <li>Aria-hidden brukes for å skjule ikoner for skjermlesere.</li>
  </ul>
  <p>
    <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">
      Mer om WAI-ARIA for accordion.
    </a>
  </p>
</>
```

```js noeditor beskrivelse
<>
  <h3>Ekspanderende panel i venstremeny forenkler saksbehandlingen</h3>
  <p>
    For å gjøre det enklere for saksbehandlere å ha oversikt over en rekke
    kategorier med ulikt innhold, kan du bruke ekspanderende bokser i
    venstremenyen. Du kan vise et vilkårlig innhold i det ekspanderbare området.
  </p>
  <p>
    Komponenten har mye til felles med Accordion, men AccordionMenu er spesielt
    stilet for å brukes til kategorivisning i saksbehandlingsløsninger.
    Komponenten setter alltid av plass til ikoner, og tegner opp sirkel rundt
    disse.
  </p>
</>
```
