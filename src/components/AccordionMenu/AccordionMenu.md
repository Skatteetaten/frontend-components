```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  Se tilhørende underkomponent{' '}
  <a href="/#accordionmenuitem">AccordionMenuItem</a> for komplett API.
</MessageBar>;
```

**AccordionMenu (Trekkspillmeny): Ekspanderende panel i saksbehandlingsløsninger**

```js
import { AccordionMenu } from '@skatteetaten/frontend-components/AccordionMenu';
import { AccordionMenuItem } from '@skatteetaten/frontend-components/AccordionMenu/AccordionMenuItem';
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { Icon } from '@skatteetaten/frontend-components/Icon';
import { IconButton } from '@skatteetaten/frontend-components/IconButton';
import { Link } from '@skatteetaten/frontend-components/Link';

// Inline styles for hacking examples
const dlStyle = {
  display: 'inline-block',
  width: '50%',
  margin: '0 0 5px 0',
  verticalAlign: 'text-top',
};

const removeMargin = {
  margin: '0',
};

const marginTopStyle = {
  marginTop: '1rem',
};

const ulStyle = {
  padding: 0,
  margin: 0,
};

const centerAlignStyle = {
  display: 'flex',
  alignItems: 'center',
};

const timeStampStyle = {
  paddingLeft: 26,
  marginTop: '0.3rem',
  marginBottom: '1rem',
};

<div style={{ maxWidth: '400px' }}>
  <AccordionMenu>
    <AccordionMenuItem
      icon="Company"
      iconLabel="Selskap"
      heading={
        <div>
          <span>
            <strong>987 654 321 </strong>
          </span>
          <br />
          <span>
            <strong>Gårsdprodukter kortreist mat AS</strong>
          </span>
        </div>
      }
    >
      <span>
        <strong>Kontaktopplysninger</strong>
      </span>
      <dl style={marginTopStyle}>
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
      icon="Forum"
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
      flex
      heading={
        <div
          style={{ display: 'flex', flexDirection: 'row', flex: '1 1 auto' }}
        >
          <div style={{ display: 'flex' }}>
            <strong>Saksbehandling</strong>
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              marginLeft: 'auto',
            }}
          >
            1 aktiv sak
          </div>
        </div>
      }
    >
      <ul style={ulStyle}>
        <li>
          <Link
            placement="before"
            icon="Update"
            ariaLabel="Vurder omberegning engangsavgift (oppdater)"
            text="Vurder omberegning engangsavgift"
            path={'#accordionmenu'}
          />
          <div style={timeStampStyle}>Sist endret: 16.07.2019</div>
        </li>
        <li>
          <Link
            placement="before"
            icon="Check"
            ariaLabel="Refusjon engangsavgift (utført)"
            text="Refusjon engangsavgift"
            path={'#accordionmenu'}
          />
          <div style={timeStampStyle}>Sist endret: 22.05.2019</div>
        </li>
        <li>
          <Link
            placement="before"
            icon="Check"
            ariaLabel="Refusjon engangsavgift (utført)"
            text="Refusjon engangsavgift"
            path={'#accordionmenu'}
          />
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
  <p>Noen særegenskaper:</p>
  <ul>
    <li>Laget spesielt for kategorivisning i saksbehandlingsløsninger.</li>
    <li>
      Setter alltid av plass til ikoner, og tegner opp sirkel rundt disse.
    </li>
  </ul>
</>
```
