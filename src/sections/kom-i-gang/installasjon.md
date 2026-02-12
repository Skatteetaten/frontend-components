```js noeditor
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';
import { Link } from '@skatteetaten/frontend-components/Link';

<MessageBar>
  <p style={{ margin: 0 }}>
    Før du begynner. Sjekk som du kan
    <Link
      path="https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/for-utviklere/"
      text="installere komponenter fra det nye designsystemet"
    /> i stedet.
  </p>
</MessageBar>;
```

## Legg til komponentbiblioteket i prosjektet:

```bash noeditor
npm config set registry https://nexus.sits.no/repository/npm-all/
npm install @skatteetaten/frontend-components
```

## Omslutt hele applikasjonen din i SkeBasis (index.js):

```js static noeditor
import React from 'react';
import ReactDOM from 'react-dom';
import { SkeBasis } from '@skatteetaten/frontend-components/SkeBasis';
import App from './App';

ReactDOM.render(
  <SkeBasis>
    <App />
  </SkeBasis>,
  document.getElementById('root')
);
```

## Ta så ibruk komponentene i applikasjonen din (App.js):

```js static noeditor
import React, { Component } from 'react';
import { Card } from '@skatteetaten/frontend-components/Card';

class App extends Component {
  render() {
    return (
      <Card title="Innhold" expand>
        Innhold i kortet
      </Card>
    );
  }
}
export default App;
```

## Bruke komponentene som UMD-pakke

```html
<% if (isLocal) { %>
<script
  type="systemjs-importmap"
  src="https://unpkg.com/@skatteetaten/frontend-components@<version>/umd/importmap.json"
></script>
<% } else { %>
<script
  type="systemjs-importmap"
  src="https://unpkg.com/@skatteetaten/frontend-components@<version>/umd/importmap-prod.json"
></script>
<% } %>
```

## Tester

Ved testing av komponenter som bruker @skatteetaten/frontend-components må temaet til Skatteetaten
lastes inn før testene kjøres. Dette gjøres per nå [før hver testfil i testsuiten kjøres](https://jestjs.io/docs/configuration#setupfilesafterenv-array).
Det er mulig du må legge til følgende i package.json for å få jest-tester til å kjøre korrekt:

```js static
"jest": {
    "transformIgnorePatterns": ["node_modules/?!(@skatteetaten/frontend-components)"]
  },
```

Ved bruk av _create-react-app_ kan dette gjøres i _src/setupTests.js_.

```js static noeditor
// src/setupTests.js
import '@skatteetaten/frontend-components/utils/loadTheme';
```

## Rammeverk basert på Fluent UI

Mange av komponentene i legacy er basert på rammeverket Fluent UI. Du kan se nærmere på hvilke komponenter som er
tilgjengelig og hvilke egenskaper de har på <a class="brodtekst-link" href="https://developer.microsoft.com/en-us/fluentui#/controls/web">Microsofts side for utviklere</a>.
