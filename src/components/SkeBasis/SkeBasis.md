** Teknisk grunnkomponent for å sette Skatteetatens fonter og farge **

```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar>Det finnes ingen egne eksempler for SkeBasis.</MessageBar>;
```

```js noeditor beskrivelse
import MessageBar from '@skatteetaten/frontend-components/MessageBar';
<>
  <h3>Viktig grunnkomponent for riktig oppsett i løsningene våre</h3>
  <p>
    SkeBasis henter inn korrekte farger, fonter og ikoner på komponentene i
    biblioteket i designsystemet vårt. Sørg for at denne komponenten ligger på
    øverste nivå for underliggende komponenter, slik at komponentene blir i tråd
    med visuell profil.
  </p>
  <p></p>
  <MessageBar>
    Dersom du ikke bruker SkeBasis i løsningen din er det sannsynlig
    komponentene vil laste inn feil ikoner og fonter slik at brukeren ikke får
    opp det som er standard i Skatteetaten. Å bruke andre ikoner og fonter kan
    være et brudd på lisensbetingelsene.
  </MessageBar>
</>;
```
