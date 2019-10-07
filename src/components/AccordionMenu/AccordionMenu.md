```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar type={MessageBar.Type.info}>
  Se tilhørende underkomponent{' '}
  <a href="/#accordionmenuitem">AccordionMenuItem</a> for komplett API.
</MessageBar>;
```

** En AccordionMenu kan benyttes som er venstre meny i interne saksbehandlingsløsninger.**

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
      title={
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
      title={
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
      title={
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

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>AccordionMenu brukes primæret som venstremeny i saksbehandling</p>
    <p>Det er mulig å vise vilkårlig innhold inne i et ekspanderbart område.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>
      <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">
        Mer om WAI-ARIA for accordion.
      </a>
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Dette er en komponent vi har laget selv fra bunnen av, og det finnes
      derfor ikke flere props enn de som listes på denne siden.
    </p>
  </AccordionItem>
</Accordion>;
```
