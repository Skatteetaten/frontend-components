Brukerne våre skal ha en enhetlig opplevelse på tvers av løsningene våre. Skal vi få til dette, må alle løsninger i Skatteetaten bruke designsystemet. Gjennom designsystemet sikrer vi også høye standarder for gode brukeropplevelser og universell utforming og ikke minst, at vi følger den visuelle profilen vår.

Som utvikler, samarbeider du med designer for å best mulig sikre at dere følger prinsippene i designsystemet. Videre ser du hvordan du kommer i gang for å bruke designsystemet når du jobber.

## Legg til komponentbiblioteket i prosjektet:

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

### Bruke komponentene som UMD-pakke (Micro Frontend)

Dersom løsningen din følger prinippene til «Micro Frontend», kan du importere komponentene (i SystemJS) som UMD pakke.
Man må da inkludere pakken fra unpkg, og et sett med eksterne pakker:

```html
<% if (isLocal) { %>
<script type="systemjs-importmap">
  {
    "imports": {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.5.0/lib/system/single-spa.min.js",
      "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.development.js",
      "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.development.js",
      "react-i18next": "https://cdn.jsdelivr.net/npm/react-i18next@11.7.2/dist/umd/react-i18next.js",
      "prop-types": "https://unpkg.com/prop-types@15.7.2/prop-types.min.js",
      "classnames": "https://cdn.jsdelivr.net/npm/classnames@2.2.6/index.min.js",
      "moment": "https://cdn.jsdelivr.net/npm/moment@2.26.0/min/moment.min.js",
      "axios": "https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js",
      "tslib": "https://unpkg.com/tslib@2.0.1/tslib.js",
      "@skatteetaten/frontend-components": "https://unpkg.com/@skatteetaten/frontend-components@4.0.0/umd/index.development.js"
    }
  }
</script>
<% } else { %>
<script type="systemjs-importmap">
  {
    "imports": {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.5.0/lib/system/single-spa.min.js",
      "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.js",
      "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.js",
      "react-i18next": "https://cdn.jsdelivr.net/npm/react-i18next@11.7.2/dist/umd/react-i18next.min.js",
      "prop-types": "https://unpkg.com/prop-types@15.7.2/prop-types.min.js",
      "classnames": "https://cdn.jsdelivr.net/npm/classnames@2.2.6/index.min.js",
      "moment": "https://cdn.jsdelivr.net/npm/moment@2.26.0/min/moment.min.js",
      "axios": "https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js",
      "tslib": "https://unpkg.com/tslib@2.0.1/tslib.js",
      "@skatteetaten/frontend-components": "https://unpkg.com/@skatteetaten/frontend-components@4.0.0/umd/index.production.js"
    }
  }
</script>
<% } %>
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
