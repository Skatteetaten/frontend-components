**Typography er hjelpekomponent som brukes til å sette riktige stiler på vanlige typografielementer**

```js
import Typography from '@skatteetaten/frontend-components/Typography';

<Typography>
  <h1>Overskriftsnivå 1</h1>
  <p>
    Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge
    klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver bare
    litt ekstra tekst for å få litt innhold, men normalt vil en ønske å skrive
    så konsentrert som mulig. Mange brukere leser bare de første ordene i en
    tekst, eller hopper ganske enkelt over den.{' '}
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
    <a href="#testhg">lenke</a>.
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

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      Typography er en teknisk hjelpekomponent som brukes til å legge på
      tekst-stiler til vanlige typografi-elementer, f.eks. overskrifter, lister
      og tekst. Komponenten legger til stiler for:
    </p>
    <ul>
      <li>Overskrifter (h1, h2, h3 og h4)</li>
      <li>Avsnitt (p) </li>
      <li>Lister (ol og ul)</li>
      <li>Sitat (blockqoute)</li>
    </ul>
    <p>
      Denne komponenten kan brukes på de fleste nivåer i koden. Tidlig i et
      prosjekt kan man legge Typography på et høyt nivå, for å sikre konsekvent
      utseende på tvers. Lengre ut i et prosjekt kan det være vitkig unngå
      potensielle ringvirkninger, og da gir det mening å bruke komponenten på et
      lavere nivå, og stile deler av løsningen (lokalt).
    </p>

    <p>
      Se <a href="#section-om-skrifttype">typografi</a> for detaljer rundt
      skriftstørrelse.
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-2'}
  >
    <p>
      Dersom du bruker to nøstede Typography-komponenter, kan du måtte sette
      props i begge komponentene for at disse skal fungere.
    </p>
  </AccordionItem>
</Accordion>;
```
