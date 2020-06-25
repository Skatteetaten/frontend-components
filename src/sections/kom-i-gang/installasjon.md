Brukerne våre skal ha en enhetlig opplevelse på tvers av løsningene våre. Skal vi få til dette, må alle løsninger i Skatteetaten bruke designsystemet. Gjennom designsystemet sikrer vi også høye standarder for gode brukeropplevelser og universell utforming og ikke minst, at vi følger den visuelle profilen vår.

Som utvikler, samarbeider du med designer for å best mulig sikre at dere følger prinsippene i designsystemet. Videre ser du hvordan du kommer i gang for å bruke designsystemet når du jobber.

### Legg til komponentbiblioteket i prosjektet:

```bash noeditor
npm config set registry https://nexus-npm.aurora.skead.no/npm/repository/npm-all
npm install @skatteetaten/frontend-components
```

### Omslutt hele applikasjonen din i SkeBasis (index.js):

```js static noeditor
import React from 'react';
import ReactDOM from 'react-dom';
import { SkeBasis } from '@skatteetaten/frontend-components';
import App from './App';

ReactDOM.render(
  <SkeBasis>
    <App />
  </SkeBasis>,
  document.getElementById('root')
);
```

### Ta så ibruk komponentene i applikasjonen din (App.js):

```js static noeditor
import React, { Component } from 'react';
import { Card } from '@skatteetaten/frontend-components';

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

### Tester

Ved testing av komponenter som bruker @skatteetaten/frontend-components må temaet til Skatteetaten
lastes inn før testene kjøres. Dette bør gjøres en gang før alle testene starter.

Ved bruk av _create-react-app_ kan dette gjøres i _src/setupTests.js_.

```js static noeditor
// src/setupTests.js
import '@skatteetaten/frontend-components/utils/loadTheme';
```

### Rammeverk basert på Fluent UI

Mange av komponentene i Designsystemet er basert på rammeverket Fluent UI. Du kan se nærmere på hvilke komponenter som er tilgjengelig og hvilke egenskaper de har på [Microsofts side for utviklere](https://developer.microsoft.com/en-us/fluentui#/controls/web).
