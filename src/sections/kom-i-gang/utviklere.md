### Utvikling av Designsystemet

For å starte projektet i utviklingsmodus, kjør kommandoene under.

```bash noeditor
npm install
npm start
```

Når prosjektet har startet, vil nye endringer automatisk bli oppdatert i nettleseren.

### Ny release

Designsystemet følger semantisk versjonering.
Les mer her: https://semver.org/

For å rulle ut en ny versjon av Desingsystemet følges disse stegene:

1. En feature/bugfix-branch merges til develop.
2. Vi tester i develop og hvis alt er ok; merger develop til master.
3. Når develop blir merget til master og bygger ok, lager vi en ny verson ved å kjøre "git tag -a v3.x.x && git push --follow-tags"

### Om knytning til Fabric UI

Mange av komponentene i Designsystemet er basert på rammeverket Fabric UI. For å se hvilke komponenter som er tilgjengelig og hvilke egenskaper de har, se: https://developer.microsoft.com/en-us/fabric#/components

### Mål: Enhetlig brukeropplevelse på tvers
Det er et uttalt mål i Skatteetaten at brukerne våre skal ha en enhetlig opplevelse på tvers av løsningene våre. Vi skal ha høye standarder for gode brukeropplevelser og universell utforming og vi skal alltid følge den visuelle profilen vår. Designsystemet er et av de viktigste virkemidlene for å sikre dette.

Alle moderniserte løsninger skal derfor, før eller siden, bruke Designsystemet – og da aller helst den nyeste versjonen.

### «Men må jeg bruke Designsystemet?»
Du skal ha veldig gode grunner for å prioritere å lage alt i løsningene selv. Det er et krav å følge Skatteetatens visuelle profil og UX-standarder og sikre universell utforming. Designsystemet vil oftest være den sikreste og mest effektive måten for å ivareta dette. I tillegg vil prosjektene bli vurdert utifra om de bruker Designsystemet gjennom de ikke-funkjonelle kravene (UT-UX-EXT-03)

### Tidspunkt for nye versjoner
Vi jobber hele tiden aktivt med å rette bugs og legge til funksjoner i komponentene i Designssystemet. Disse endringene bryter ikke med eksisterende funksjonalitet og er derfor uproblematiske å oppgradere til. Slike versjoner legger vi normalt ut med et par ukers mellomrom. Versjoner med større endringer eller underliggende oppgraderinger, krever litt jobb å oppgradere til fordi de normalt inneholder grensesnittendringer. Vi endrer disse hovedversjonene så sjelden vi kan, som regel en gang i året.

### Merk komponenter som er utgående
Når vi lansererer nye hovedversjoner kan vi fjerne eller endre på hele komponenter eller deler av dem. Slike endringer varsler vi alltid om i god tid i forveien.

Langsmed merker vi en del komponenter i Designsystemet som «utgående» (Deprecated). Denne delen er en kandidat for fjerning eller endring i neste hovedversjon. Vanligvis vil markeringene ligge i API-listen, men vi kan også merke hele komponenter med en tydelig meldingsboks. Fra og med versjon 3.4.0 vil vi også vise nye markeringer i versjonsloggen.

### Kan du ikke oppgradere til siste hovedversjon?
Når vi lager en ny hovedversjon er det den som blir gjeldende utad (master-branch). Vi  lager samtidig en kopi av forrige versjon (release-branch) slik at den er tilgjengelig for prosjektene som trenger den. Vi hjelper gjerne med feilrettinger i eldre versjoner (release-brancher) i seks måneder, så lenge vi har kapasitet.
