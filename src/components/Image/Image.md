```js
import Image from '@skatteetaten/frontend-components/Image';

<Image src="http://placehold.it/350x150" alt="Beskriv innholdet i bildet" />;
```

```js noeditor uu
<>
  <h3>Tips</h3>
  <ul>
    <li>
      Meningsbærende bilder må ha et tekstalternativ f.eks. med alt-attributtet.
      Alternativteksten skal være enkel og forståelig. Unngå å bruke "Bilde av
      …" som en del av teksten.
    </li>
    <li>
      Bilder som er pynt bør skjules for skjermlesere, f.eks. med bruk av
      aria-hidden eller role=presentation.
    </li>
    <li> Unngå bilder av tekst.</li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>
  <ul>
    <li>1.1.1 A, Ikke-tekstlig innhold</li>
  </ul>

  <h3>WAI-ARIA</h3>
  <ul>
    <li>N/A</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <h3>Vi bruker sjeldent bilder</h3>
  <p>
    Løsningene våre er stort sett uten bilder. Unntaket er kampanjer på
    skatteetaten.no og bakgrunnsbilde på oppgaveliste.
  </p>
  <p>
    Denne komponenten hjelper til med å skalere bildene og forbedrer
    innlastingen.
  </p>
</>
```
