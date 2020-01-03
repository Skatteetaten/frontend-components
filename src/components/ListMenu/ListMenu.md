** Meny med underliggende funksjoner **

```js
import ListMenu from '@skatteetaten/frontend-components/ListMenu';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import { useConstCallback } from '@uifabric/react-hooks';

const menuItems = [
  {
    key: 'Home',
    text: 'Hjem',
    onClick: () => console.log('Hjem klikket')
  },
  {
    key: 'settings',
    text: 'Mine innstillinger',
    onClick: () => console.log('Innstillinger klikket')
  },
  {
    key: 'reports',
    text: 'Rapporter',
    onClick: () => console.log('Rapporter klikket')
  },
  {
    key: 'maintenance',
    text: 'Satser og vedlikehold',
    onClick: () => console.log('Satser og vedlikehold klikket')
  }
];
const myRef = React.useRef(null);
const [showContextualMenu, setShowContextualMenu] = React.useState(false);
const onShowContextualMenu = useConstCallback(() =>
  setShowContextualMenu(true)
);
const onHideContextualMenu = useConstCallback(() =>
  setShowContextualMenu(false)
);

<div>
  <span ref={myRef}>
    <ActionButton
      buttonStyle="primary"
      icon="menu"
      onClick={onShowContextualMenu}
    >
      Vis meny
    </ActionButton>
  </span>
  <ListMenu
    hidden={!showContextualMenu}
    target={myRef}
    items={menuItems}
    onItemClick={onHideContextualMenu}
    onDismiss={onHideContextualMenu}
  />
</div>;
```

```js
import ListMenu from '@skatteetaten/frontend-components/ListMenu';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import { useConstCallback } from '@uifabric/react-hooks';

const menuItems = [
  {
    key: 'excel',
    text: 'Eksporter til Excel',
    iconProps: {
      iconName: 'ExcelFile'
    }
  },
  {
    key: 'Word',
    text: 'Eksporter til Word',
    iconProps: {
      iconName: 'WordFile'
    }
  },
  {
    key: 'Pdf',
    text: 'Eksporter til PDF',
    iconProps: {
      iconName: 'PdfFile'
    }
  }
];
const myRef = React.useRef(null);
const [showContextualMenu, setShowContextualMenu] = React.useState(false);
const onShowContextualMenu = useConstCallback(() =>
  setShowContextualMenu(true)
);
const onHideContextualMenu = useConstCallback(() =>
  setShowContextualMenu(false)
);

<div>
  <span ref={myRef}>
    <ActionButton
      buttonStyle="primary"
      icon="file"
      onClick={onShowContextualMenu}
    >
      Eksporter til fil
    </ActionButton>
  </span>
  <ListMenu
    hidden={!showContextualMenu}
    target={myRef}
    items={menuItems}
    onItemClick={onHideContextualMenu}
    onDismiss={onHideContextualMenu}
  />
</div>;
```

```js noeditor uu
<h3>Huskeliste</h3>
<ul>
  <li>
    Bruk bare spinner når du har en handling eller oppgave med innlasting.{' '}
  </li>
  <li>Vis bare én spinner om gangen.</li>
  <li>
    Spinneren kan gjerne ha en label slik at brukeren vet hva som foregår.
  </li>
  <li>
    Bruk <b>aria-label</b> for å gi elementet riktige labels.
  </li>
  <li>
    Spinneren kommer i svart og hvit, der svart er standardfarge. Den hvite
    spinneren kan brukes i knapper.
  </li>
</ul>
```

```js noeditor beskrivelse
  <h3>Tidsgrenser</h3>
  <p>
    Dersom brukeren må vente mellom ett og ti sekunder vil dette oppleves som
    en forsinkelse. I slike tilfeller er det nyttig å kunne bruke en spinner
    for å vise at systemet jobber.
  </p>
  <h3>Farge</h3>
  <p>
    Spinneren kommer i svart og hvit, der svart er standardfarge. Den hvite
    spinneren kan brukes i knapper.
  </p>
```
