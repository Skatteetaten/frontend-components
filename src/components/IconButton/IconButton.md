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
<h3>Ha alltid en beskrivende tittel</h3>
<p>
  En ikonknapp skal alltid ha en tittel som beskriver funksjonen til knappen. For eksempel kan blind og svaksynte være avhengige av hjelpeverktøy for å lese opp knappens funksjonalitet.
</p>
<h3>Ikke bruk inaktiv knapp</h3>
<p>
  Unngå å bruke IconButton i disabled. La knappen alltid være aktiv, og vis heller gode feilmeldinger dersom ikke alle kriterier for å utføre handlingen er oppfylt.
</p>
```

```js noeditor beskrivelse
  <h3>Vurder knapp med tekst</h3>
  <p>
    Knapper bør i størst mulig grad ha den beskrivende teksten synlig, men
    ikonknapper kan brukes i situasjoner der man ikke har anleding til å vise
    den. Det skal alltid være en tekst som kommer ved mouseover som forklarer
    hva ikonet gjør.
  </p>
  <p>Ikonknapper bør brukes med varsomhet i publikumsløsninger.</p>

  <h3>Kan ha ulik fremheving</h3>

  <p>
    Ikonknapper kan være små eller store, med eller uten sirkel. Sirkelen
    benyttes for å fremheve ikonknappen.
  </p>
```
