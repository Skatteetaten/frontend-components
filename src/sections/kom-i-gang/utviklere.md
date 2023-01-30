## Må du bruke designsystemet i alle løsninger?

Du skal ha veldig gode grunner for å prioritere å lage alt i løsningene selv. Det er et krav å følge Skatteetatens visuelle profil og UX-standarder, og sikre universell utforming. Designsystemet vil oftest være den sikreste og mest effektive måten for å ivareta dette. I tillegg vil prosjektene bli vurdert ut ifra om de bruker designsystemet gjennom de ikke-funkjonelle kravene (UT-UX-EXT-03).  
Når du bruker designsystemet, blir arbeidet med digitale uttak mer korrekt og effektive. I tillegg vil jevnlige forbedringer rundt sikkerhet og universell utforming bli ivaretatt gjennom komponentsbiblioteket vårt.

## Kontrollert release

Designsystemet blir publisert med semantisk versjonering. Denne retningslinjen indikerer hvor omfattende endringene mellom de forskjellige versjonene er, og sikrer at vi oppdaterer på en kontrollert måte. Vi lager nye versjoner etter følgende modell:

- PATCH-versjon når vi lager bakoverkompatible bugfixes. Bugfix er en intern endring av uønsket oppførsel eller feil. Dette er versjoner som kan bli installert uten at brukere vil merke endringer.
- MINOR-versjon når du legger til ny funksjonalitet på en bakoverkompatibel måte.
- MAJOR-versjon når vi har API-endringer som ikke er bakoverkompatible.

<p><a class="brodtekst-link" href="https://semver.org/">Les mer om semantisk versjonering.</a></p>

## Tidspunkt for nye versjoner

Vi jobber hele tiden aktivt med å rette feil og legge til funksjoner i komponentene i Designssystemet. Disse endringene bryter ikke med eksisterende funksjonalitet og er derfor uproblematiske å oppgradere til. Slike versjoner legger vi normalt ut med et par ukers mellomrom. Versjoner med større endringer eller underliggende oppgraderinger, krever litt jobb å oppgradere til fordi de normalt inneholder grensesnittendringer. Vi endrer disse hovedversjonene så sjelden vi kan, som regel en gang i året.

## Merk komponenter som er utgående

Når vi lansererer nye hovedversjoner kan vi fjerne eller endre på hele komponenter eller deler av dem. Slike endringer varsler vi alltid om i god tid i forveien. Vi merker enkelte komponenter eller deler av APIet som utgående (Deprecated). Disse er viktige at du merker deg, siden disse er kandidater for fjerning i neste hovedversjon. Vanligvis vil markeringene ligge i API-listen, men vi kan også merke hele komponenter med en tydelig meldingsboks. Fra og med versjon 3.4.0 vil vi også vise nye markeringer i versjonsloggen.

## Vi støtter de to siste versjonene

Når vi lager en ny hovedversjon er det den som blir gjeldende utad (master-branch). Vi lager samtidig en kopi av forrige versjon (release-branch) slik at den er tilgjengelig for prosjektene som trenger den. Vi hjelper gjerne med feilrettinger i eldre versjoner (release-brancher) i seks måneder, så lenge vi har kapasitet. Vi støtter bare de to siste versjonene. Hvis et prosjekt fortsetter med en eldre versjon så er det på eget ansvar.
