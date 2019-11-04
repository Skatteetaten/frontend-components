** Ikonknapper brukes til mindre fremtredende funksjoner, når man har lite plass eller når funksjonen er innlysende og man ikke trenger å kommunisere den tekstlig **

```js
import IconButton from '@skatteetaten/frontend-components/IconButton';

<div className="ExampleSpacing8">
  <IconButton
    alt={'Sky med sirkel rundt'}
    title="Skriv ut"
    circle
    buttonSize="large"
    icon="Print"
  />
  <IconButton
    alt={'Sky med sirkel rundt'}
    title="Skriv ut"
    buttonSize="large"
    icon="Print"
  />
  <br />
  <IconButton
    alt={'Sky med sirkel rundt'}
    title="Skriv ut"
    circle
    buttonSize="default"
    icon="Print"
  />
  <IconButton
    alt={'Sky med sirkel rundt'}
    title="Skriv ut"
    buttonSize="default"
    icon="Print"
  />
</div>;
```

```js noeditor uu
<ul>
  <li>Tittel på knappen bør beskrive dens funksjon.</li>
  <li>
    Husk å bruke gi ikonknappen en label slik at skjermlesere kan lese opp
    funksjonen
  </li>
</ul>
```

```js noeditor beskrivelse
  <p>
    Knapper bør i størst mulig grad ha den beskrivende teksten synlig, men
    ikonknapper kan brukes i situasjoner der man ikke har anleding til å vise
    den. Det skal alltid være en tekst som kommer ved mouseover som forklarer
    hva ikonet gjør.
  </p>
  <p>Ikonknapper bør brukes med varsomhet i publikumsløsninger.</p>
  <p>
    Ikonknapper kan være små eller store, med eller uten sirkel. Sirkelen
    benyttes for å fremheve ikonknappen.
  </p>
```
