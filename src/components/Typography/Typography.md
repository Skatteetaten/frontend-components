**Typography (Typografi): er hjelpekomponent som brukes til å sette riktige stiler på vanlige typografielementer**

```js
import { Typography } from '@skatteetaten/frontend-components/Typography';

<Typography>
  <h1>Overskriftsnivå 1</h1>
  <p>
    Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge
    klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver bare
    litt ekstra tekst for å få litt innhold, men normalt vil en ønske å skrive
    så konsentrert som mulig. Mange brukere leser bare de første ordene i en
    tekst, eller hopper ganske enkelt over den.
  </p>

  <h2>Overskriftsnivå 2</h2>
  <h3>Overskriftsnivå 3</h3>
  <h4>Overskriftsnivå 4</h4>
  <p>
    Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge
    klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver bare
    litt ekstra tekst for å få litt innhold, men normalt vil en ønske å skrive
    så konsentrert som mulig. Mange brukere leser bare de første ordene i en
    tekst, eller hopper ganske enkelt over den. Dette er en{' '}
    <a class="brodtekst-link" href="#testhg">
      lenke
    </a>
    .
  </p>

  <p>Hvordan lage god interaksjonsdesign:</p>
  <ul>
    <li>Kjenner du behovet til brukeren?</li>
    <li>Er du sikker på at du kjenner behovet til brukeren?</li>
    <li>Snakk med andre</li>
  </ul>

  <p>Skatteetatens brukskvalitetsmetode:</p>
  <ol>
    <li>Beskrive konteksten</li>
    <li>Forstå behov og krav</li>
    <li>Designe brukeropplevelsen</li>
    <li>Evaluere</li>
  </ol>
</Typography>;
```

```js noeditor beskrivelse
<>
  <h3>Komponent som legger til stiler på teksten</h3>
  <p>
    Typography er en hjelpekomponent som legger riktige stiler på tekstelementer
    som for eksempel overskrifter, lister og tekst.
  </p>
  <p>Komponenten legger til stiler for:</p>
  <ul>
    <li>Overskrifter (h1, h2, h3 og h4)</li>
    <li>Avsnitt (p) </li>
    <li>Lister (ol og ul)</li>
    <li>Sitat (blockqoute)</li>
  </ul>
  <h3>Tips når du plasserer komponenten i koden:</h3>
  <p>
    Du kan bruke typografi-komponenten både på høyere og lavere nivå i koden:
  </p>
  <ul>
    <li>
      Hvis du legger Typography på et høyt nivå, for eksempel innenfor
      body-taggen, sikrer det konsekvente stiler på tvers i løsningen. Det betyr
      samtidig at stilene kan påvirke utseendet i andre komponenter som du
      legger til på et lavere nivå, under Typography.{' '}
    </li>
    <li>
      Vurderer å flytte Typography-komponenten til et lavere nivå i koden hvis
      du opplever at typografien i underliggende komponenter ikke blir som du
      forventer.
    </li>
  </ul>
  <p>
    <a class="brodtekst-link" href="#section-skrifttype">
      Se «skrifttype» for detaljer rundt skriftstørrelse.
    </a>
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Bruk av overskrifter (h-tag) er veldig viktig for å strukturere og dele
      inn innhold. Det gir skjermleserbrukere bedre oversikt og enklere
      navigering til innhold.
    </li>
    <li>
      Det er en fordel om &lt;main&gt; innledes med en &lt;h1&gt; (etter
      brødsmulestien der det finnes). Mange med skjermleser hopper rett til
      første &lt;h1&gt; for å komme til hovedinnholdet. Der det ikke hierarkisk
      passer med en &lt;h1&gt;, bør &lt;h2&gt; brukes.
    </li>
    <li>
      En &lt;h2&gt; skal alltid høre til en &lt;h1&gt;, &lt;h3&gt; til
      &lt;h2&gt; osv. Tenk på logisk hierarki.
    </li>
    <li>Vurder om innhold bør ha h-tag.</li>
    <li>
      I de fleste tilfeller bør sidetittel (title-tag) og &lt;h1&gt; være
      identiske. Hvis det lenkes til siden, bør lenkenavnet samsvare med dette,
      f.eks. Bil og andre kjøretøy (lenke), Bil og andre kjøretøy (tittel) og
      Bil og andre kjøretøy (overskrift).
    </li>
    <li>
      Modaler bør ha en overskrift i toppen som sier hva modalen inneholder.
      &lt;h1&gt; eller &lt;h2&gt; bør brukes her og bruk nivå konsekvent på hele
      nettstedet (&lt;h2&gt; på skatteetaten.no).
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.3.1 A, Informasjon og relasjoner</li>
    <li>2.4.6 AA, Overskrifter og ledetekster</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>
      Hvis ikke vanlig h-tag kan brukes, vurder om du bør kode det med
      role="heading" og aria-level (overskriftsnivå) for skjermleser.
    </li>
  </ul>
</>
```
