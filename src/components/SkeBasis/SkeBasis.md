** Teknisk grunnkomponent for å sette Skatteetatens fonter og farge **

```js noeditor
import MessageBar from '@skatteetaten/frontend-components/MessageBar';

<MessageBar>Det finnes ingen egne eksempler for SkeBasis.</MessageBar>;
```

```js noeditor beskrivelse
  <p>
    Teknisk komponent som aktiverer skatteetaten-utseende på komponentene i
    dette biblioteket. Sørg for at denne komponenten ligger øverste nivå og
    underliggende komponenter vil hente riktige farger, fonter og ikoner. Den
    vil også tilgjengeligegjøre fonter, farger og ikoner for stiling av nye
    komponenter.
  </p>
  <p>
    Dersom man ikke bruker denne komponenten er det mulig at standard-ikoner
    og fonter brukes i stedet - og å bruke disse kan være et brudd på
    lisensbetingelsene.
  </p>
```
