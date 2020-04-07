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
