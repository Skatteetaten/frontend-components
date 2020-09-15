# Skatteetatens Designsystem

Designsystemet består av visuelle elementer som bidrar til å kommunisere at Skatteetaten er avsender. Her finner du byggeklosser, i form av React-komponenter, som kan brukes til å lage Skattetatens løsninger. Komponentene følger etatens visuelle profil og gir masse hjelp med tanke på universell utforming.

## Utviklere og designere

Designsystemet er til for både utviklere og for designere. Designere trenger ikke spesifisere så mye, og utviklere trenger ikke kode så mye.

## Kom i gang

Under «Kom i gang -> For utviklere» finner du en oppskrift på hvordan du skal bruke komponentene i et prosjekt.

## Importere i SystemJS som UMD pakke

Inkluder pakken som vanlig fra nexus. I tillegg trenger man et sett med eksterne pakker. Eksempel som følger:

```js
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
          "@skatteetaten/frontend-components": "<nexus-url>"
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
          "@skatteetaten/frontend-components": "<nexus-url>"
        }
      }
    </script>
  <% } %>
```
