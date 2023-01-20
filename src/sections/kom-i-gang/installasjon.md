Brukerne våre skal ha en enhetlig opplevelse på tvers av løsningene våre. Skal vi få til dette, må alle løsninger i Skatteetaten bruke designsystemet. Gjennom designsystemet sikrer vi også høye standarder for gode brukeropplevelser og universell utforming og ikke minst, at vi følger den visuelle profilen vår.

Som utvikler, samarbeider du med designer for å best mulig sikre at dere følger prinsippene i designsystemet. Videre ser du hvordan du kommer i gang for å bruke designsystemet når du jobber.

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

## Bruke komponentene som UMD-pakke (Micro Frontend)

// TO-DO følges opp - hva har umd med micro-frontend å gjøre?
Dersom løsningen din følger prinippene til «Micro Frontend», kan du importere komponentene (i SystemJS) som UMD pakke.
Alle nødvendige avhengigheter i tillegg til selv designsystemet kommer fra et importmap:

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
lastes inn før testene kjøres. Dette bør gjøres en gang før alle testene starter. Det er mulig du må legge til følgende i package.json for å få jest-tester til å kjøre korrekt:

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

Mange av komponentene i Designsystemet er basert på rammeverket Fluent UI. Du kan se nærmere på hvilke komponenter som er tilgjengelig og hvilke egenskaper de har på [Microsofts side for utviklere](https://developer.microsoft.com/en-us/fluentui#/controls/web).
