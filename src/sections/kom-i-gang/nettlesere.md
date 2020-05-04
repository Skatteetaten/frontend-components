Skatteetatens Designsystem støtter de nettleserne som brukes av mer enn 2 % av de besøkende på skatteetaten.no. Per dags dato betyr det at vi støtter de to siste versjonene av:

- Chrome (ca. 41,9 %)
- Safari (ca. 32,7 %)
- Internet Explorer 11 (ca. 7,9 %)
- Edge (ca. 6,4 %)
- Firefox (ca. 4,6 %)
- Samsung Internet (ca. 3,8 %)

Vi bør ikke uten videre anta at brukerne våre vet hva en nettleser er eller vet hvordan man installerer en. Det er også en mulighet at de ikke kan oppgradere på grunn av plattform eller fordi de bruker en løsning som krever en bestemt nettleser.

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import MessageBar from '@skatteetaten/frontend-components/MessageBar';
import Link from '@skatteetaten/frontend-components/Link';
<>
  <br />
  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={'Varsler i løsningene'}
      stepId={'step-1-3'}
    >
      <p>
        Når vi oppdager at brukeren har gammel nettleser skal vedkommende få
        beskjed om det. Dette gjør vi ved hjelp av en tydelig meldingslinje på
        toppen av skjermen. En slik meldingslinje skal inneholde lenke til
        dokumentasjon som hjelper brukeren videre.
      </p>
      <p>Hvis bruker har en nettleser som vi ikke støtter:</p>
      <MessageBar onDismiss={() => null}>
        <div>
          Du bruker en utdatert nettleser, og vil kunne oppleve feil eller
          mangler ved løsningen. Vi anbefaler at du
          <a href="#" style={{ color: '#1362ae' }}>
            oppdaterer til en annen nettleser
          </a>.
        </div>
      </MessageBar>

      <p>
        Hvis bruker har en nettleser som snart vil miste støtten (under 3 %):
      </p>
      <MessageBar onDismiss={() => null}>
        Du bruker en nettleser vi er i ferd med å fase ut. Vi anbefaler at du
        <a href="#" style={{ color: '#1362ae' }}>
          oppdaterer til en annen nettleser
        </a> snart.
      </MessageBar>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Nettleser uten JavaScript'}
      stepId={'step-1-2'}
    >
      <p>
        Det er mulig å skru av støtte for Javascript i nettlesere, eller det kan
        finnes små mindre enheter uten JavaScript. Bruk derfor &lt;noscript&gt;
        taggen for å vise en melding til disse brukerne. For eksempel:
        &lt;noscript&gt;Har du skrudd av JavaScript i nettleseren din? For at
        løsningen skal fungere (best mulig) må du slå på JavaScript
        &lt;/noscript&gt;
      </p>
    </AccordionItem>
  </Accordion>
</>;
```
