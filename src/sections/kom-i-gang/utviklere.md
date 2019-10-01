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

3. Når develop blir merget til master vil det starte et
   nytt bygg som vil utlede neste versjon. Versjonen kan styres med å endre
   commit-meldingen:
   - Start commit-meldingen med 'feature/<navn på feature>' for å få ny minor versjon. Eks. 1.1.0 -> 1.2.0
   - Start commit-meldingen med 'patch/<navn på patch>' for å få ny patch versjon. Eks. 1.1.0 -> 1.1.1

Hvis commit-meldingen ikke starter med noen av disse vil den øke patch versjonen som default.

For å endre major versjon må versionHint under versionStrategy i `Jenkinsfile` endres.
Endres til ønsket major versjon.

### Om rammeverket

Designsystemet er basert på rammeverket Fabric UI. For å se hvilke komponenter
som er tilgjengelig og hvilke egenskaper de har, se: https://developer.microsoft.com/en-us/fabric#/components
