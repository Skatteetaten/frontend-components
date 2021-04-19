**Lenke til filer eller nettsider**

```js
import { Link } from '@skatteetaten/frontend-components';

<div className="ExampleSpacing8">
  <Link
    path={'#link'}
    text={'Last ned dokumentene'}
    icon={'Download'}
    placement="before"
  />
  <Link
    path={'#link'}
    text={'Gå til oversikt'}
    icon={'ArrowForward'}
    placement="before"
  />
  <Link
    path={'#link'}
    text={'Åpne i nytt vindu'}
    icon={'OpenInNew'}
    openInNew={true}
    placement="after"
  />
  <br />
  <br />
  <p>
    Det er også mulig å bruke en
    <Link path={'#link'} text={'link'} /> inni et avsnitt med tekst.
  </p>
</div>;
```

```js noeditor beskrivelse
<>
  <h3>Lenke til filer eller nettsider</h3>
  <p>
    En link benytter du for å lenke til filer eller nettsider. Når brukeren
    klikker på lenken, kommer den aktuelle filen eller nettsiden frem.
  </p>
  <p>
    Er lenken en handling som påvirker siden brukeren er på, for eksempel
    «Lagre» eller «Send inn», skal du normalt bruke en knapp i stedet. Se
    aksjonsknapp, knapp og ikonknapp for eksempler på knapper.
  </p>
  <p>
    Se også{' '}
    <a href="https://www.skatteetaten.no/stilogtone/produkt/skatteetatenno/lenker/">
      Skatteetatens skriveregler
    </a>{' '}
    for hjelp til å lage gode lenketekster.
  </p>
  <h3>Åpne i nytt vindu eller fane</h3>
  <p>
    Tenk gjennom hvilke egenskaper du gir lenken din. Du kan velge at innholdet
    i lenken din skal åpne seg i nytt vindu eller at navigeringen skal fortsette
    i det samme vinduet eller fanen. Som hovedregel bør lenkes åpnes i samme
    vindu, men dersom brukeren risikerer å miste innhold når man klikker på den,
    for eksempel ved utfylling av skjema, kan det være hensiktsmessig å åpne
    innholdet i ny fane.
  </p>
  <p>
    Når du velger at lenken din skal åpne nettsiden eller filen i nytt vindu,
    legger du til to egenskaper til lenken. Den første, «target», åpner i nytt
    vindu, og den andre, «rel», er en sikkerhetsfunksjon som bryter koblingen
    mellom eksisterende vindu og nytt vindu. Dersom den åpnede fanen inneholder
    ondsinnet kode, kan den uten denne funksjonen, få tilgang til vinduet den
    var lenket fra. Dette er spesielt viktig å ta hensyn til dersom du lenker
    til eksterne sider eller sider med innhold som er laget av bruker.
  </p>
</>
```

```js noeditor uu
<>
  <h3>Tips</h3>

  <ul>
    <li>
      En lenke skal minst 2 ulike visuelle "hint" for å skille det fra vanlig
      tekst. Her er det blå farge og understreking.
    </li>
    <li>
      Tenk på kontrast hvis bakgrunnsfargen bak lenken endrer seg, for eksempel
      svart bakgrunn = hvit skrift
    </li>
    <li>
      Lenketeksten eller alternativ tekst (grafisk lenke) skal tydeliggjøre hva
      som er målet til lenken
    </li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
    <li>1.4.1 A, Bruk av farge</li>
    <li>1.4.3 AA, Kontrast (minimum)</li>
    <li>2.4.4 A, Formål med lenke (i kontekst)</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
    <li>Aria-hidden="true" brukes for skjule ikonet for skjermleser.</li>
  </ul>
</>
```
