** Avkrysningsboks brukes for eksempel i skjemaer til å bekrefte et eller flere valg. **

```js
import CheckBox from '@skatteetaten/frontend-components/CheckBox';

<div>
  <fieldset style={{ border: 'none' }}>
    <legend style={{ fontSize: '14px' }}>Velg aktuelle lover</legend>
    <CheckBox boxSide={'start'} label="Skatteloven" />
    <CheckBox boxSide={'start'} label="Skattebetalingsloven" />
    <CheckBox boxSide={'start'} label="Skatteforvaltningsloven" />
  </fieldset>
</div>;
```

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    toggleContent
    isOpen
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      Avhukingsbokser brukes når det er liste med valg og brukeren kan velge et
      vilkårlig antall av dem, inkludert null, ett eller flere. En avhukingsboks
      er med andre ord uavhengig av de andre i listen. Og huker brukeren av et
      valg, tar det ikke bort avhukingen av de andre.
    </p>

    <p>(Hvis brukeren kun skal velge ett valg, bruk RadioButtonGroup.)</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <ul>
      <li>
        Sjekk at tilstand på avhuking (valgt/ikke valgt) leses opp av
        skjermleser
      </li>
      <li>
        Bruk <b>fieldset</b> og <b>legend</b>-elementer for å gi
        kontekstinformasjon til skjermleser (hvilke elementer hører sammen, og
        hva er overordnet tittel eller emne).
      </li>
    </ul>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      <a
        href="https://developer.microsoft.com/en-us/fabric#/components/checkbox#Implementation"
        target="_blank"
      >
        Se flere tilgjengelige props i Fabric dokumentasjonen
      </a>
    </p>
  </AccordionItem>
</Accordion>;
```
