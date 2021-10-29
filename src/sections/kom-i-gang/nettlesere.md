Designsystemet i Skatteetaten støtter nettlesere som blir brukt av mer enn 2 % på skatteetaten.no. Vi støtter nå følgende nettlesere (oppdatert oktober 2021):

- Chrome (ca. 45,8 %)
- Safari (ca. 36,1 %)
- Edge (ca. 9,4 %)
- Samsung Internet (ca. 4,1 %)
- Firefox (ca. 2,1 %)

Vi bør ikke uten videre anta at brukerne våre vet hva en nettleser er eller vet hvordan man installerer en. Det er også en mulighet at de ikke kan oppgradere på grunn av plattform eller fordi de bruker en løsning som krever en bestemt nettleser.

```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { Link } from '@skatteetaten/frontend-components/Link';
import { MessageBar } from '@skatteetaten/frontend-components/MessageBar';
<>
  <br />
  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={
        'Varsle når nettleser er gammel eller under 2 %-grensen'
      }
      stepId={'step-1-3'}
    >
      <p>
        Når vi oppdager at brukeren har gammel nettleser skal vi gi beskjed om
        det. Dette gjør vi ved hjelp av en tydelig meldingslinje på toppen av
        skjermen. En slik meldingslinje skal inneholde lenke til dokumentasjon
        som hjelper brukeren videre.
      </p>
      <p>Hvis bruker har en nettleser som vi ikke støtter:</p>
      <MessageBar onDismiss={() => null}>
        <div>
          Du bruker en utdatert nettleser, og vil kunne oppleve feil eller
          mangler ved løsningen. Vi anbefaler at du
          <Link
            path={'https://www.skatteetaten.no/system/nettlesersjekk2/'}
            text={'oppdaterer til en annen nettleser'}
          />.
        </div>
      </MessageBar>
    </AccordionItem>

    <AccordionItem
      toggleContent
      toggleButtonText={'Gi beskjed når nettleser er uten JavaScript'}
      stepId={'step-1-2'}
    >
      <p>
        Det er mulig å skru av støtte for Javascript i nettlesere, eller det kan
        finnes små mindre enheter uten JavaScript. Bruk derfor &lt;noscript&gt;
        taggen for å vise en melding til disse brukerne. For eksempel:
        &lt;noscript&gt;Har du skrudd av JavaScript i nettleseren din? For at
        løsningen skal fungere (best mulig) må du slå på JavaScript.
        &lt;/noscript&gt;
      </p>
    </AccordionItem>
  </Accordion>
</>;
```
