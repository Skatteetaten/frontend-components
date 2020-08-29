** Ikonknapper brukes til mindre fremtredende funksjoner, når man har lite plass eller når funksjonen er innlysende og man ikke trenger å kommunisere den tekstlig **

```js
import IconButton from '@skatteetaten/frontend-components/IconButton';

<div className="ExampleSpacing8">
  <IconButton title="Skriv ut" circle buttonSize="large" icon="Print" />
  <IconButton title="Skriv ut" buttonSize="large" icon="Print" />
  <br />
  <IconButton title="Skriv ut" circle buttonSize="default" icon="Print" />
  <IconButton title="Skriv ut" buttonSize="default" icon="Print" />
</div>;
```

```js noeditor uu
<h3>Tips</h3>

<ul>
  <li>Bruk title-attributtet for å beskrive knappens funksjon (leses av hjelpemidler)</li>
  <li>Unngå bruk av inaktiv (disabled) knapp. Bruk heller aktiv knapp med eventuelle feilmeldinger</li>
</ul>

<h3>Mest relevante WCAG-krav</h3>

<ul>
  <li>1.1.1 A, Ikke-tekstlig innhold</li>
  <li>4.1.2 A, Navn, rolle, verdi</li>
</ul>

<h3>WAI-ARIA</h3>

<ul>
  <li>Aria-hidden="true" brukes på ikonet for skjule det for skjermleser.</li>
</ul>

```

```js noeditor beskrivelse
<h3>
 Ikonknapp uten synlig tekst for mindre fremtredende handlinger
</h3>
<p>
  
</p>
Denne komponenten fungerer godt når du skal vise brukeren mulighet for mindre viktige handlinger. Et eksempel er et ikon som viser en printer.
<p>
  I utgangspunktet bør knapper ha en synlig beskrivende tekst. 
Ikonknapper har likevel mulighet for å bare vise ikonet dersom du ikke har plass eller anledning til å ha teksten synlig. 
Merk at det alltid skal være en forklarende tekst som kommer frem når brukeren holder markøren over ikonet. 
</p>

<p>
  Vær varsom med å bruke ikonknapper i publikumsløsninger.
</p>
<h3>
  Kan ha ulik fremheving
</h3>
<p>
 Ikonknappene kan være små eller store, med eller uten sirkel. Bruker du sirkel rundt ikonet, vil dette virke noe fremhevende.
</p>
```
