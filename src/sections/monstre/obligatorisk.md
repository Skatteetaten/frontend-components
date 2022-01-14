```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { Button } from '@skatteetaten/frontend-components/Button';
import { Card } from '@skatteetaten/frontend-components/Card';
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';
import { TextField } from '@skatteetaten/frontend-components/TextField';

<div>
  <Card
    title="Hovedregler for obligatoriske felt"
    color={Card.Color.WHITE}
    border={Card.Border.YELLOW_BORDER}
    titlesize="x-large"
    margin="large"
  >
    <p>
      Hovedregelen er at alle felt som vises skal fylles ut – vi skal bare
      spørre brukeren om ting vi trenger.
    </p>
    <ul>
      <li>
        Merk toppen av skjemaet med
        <em>«Alle felt må fylles ut»</em>.
      </li>
      <li>
        Unntak fra regelen: Hvis ikke alle felt må fylles ut må du merke
        obligatoriske felt med * og skrive
        <em>«Felt markert med * må fylles ut»</em> i toppen av skjemaet.
      </li>
    </ul>
  </Card>

  <h2>Se veiledning for obligatoriske felt:</h2>

  <Accordion>
    <AccordionItem
      toggleContent
      toggleButtonText={'Alle felt må fylles ut'}
      headingLevel="3"
      stepId={'step-1'}
    >
      <p>
        Der alle felt må fylles ut, merker vi ikke med stjerne, men beskriver
        det i toppen.
      </p>
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '30%' }}>
          <p class="title">Ja</p>
          <div style={{ padding: '2px' }}>
            <Card color={Card.Color.BEIGE}>Alle felt må fylles ut.</Card>
            <br />
            <TextField required label={'Bedriftens navn'} inputSize="large" />
            <br />
            <RadioButtonGroup
              label="Type virksomhet"
              required
              labelSize="large"
              options={[
                {
                  key: 'A',
                  text: 'Enkeltpersonsforetak',
                },
                {
                  key: 'B',
                  text: 'Aksjeselskap',
                },
              ]}
              help="Type virksomhet vil påvirke hva du må rapportere til oss."
              id="radio123"
            />
            <br />
            <Button buttonStyle="primaryRoundedFilled">Send inn</Button>
          </div>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      toggleContent
      toggleButtonText={'Ikke alle felt må fylles ut'}
      headingLevel="3"
      stepId={'step-2'}
    >
      <p>
        Der ikke alle felt må fylles ut, merker vi feltnavn/ledetekst med
        stjerne (*) på obligatoriske felt.
      </p>
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '30%' }}>
          <p class="title">Ja</p>
          <div style={{ padding: '2px' }}>
            <Card color={Card.Color.BEIGE}>
              Felt markert med * må fylles ut.
            </Card>
            <br />
            <TextField
              required
              showRequiredMark
              label={'Navn på virksomhet'}
              inputSize="large"
            />
            <br />
            <RadioButtonGroup
              required
              showRequiredMark
              label="Type virksomhet"
              labelSize="large"
              options={[
                {
                  key: 'A',
                  text: 'Enkeltpersonsforetak',
                },
                {
                  key: 'B',
                  text: 'Aksjeselskap',
                },
              ]}
              help="Type virksomhet vil påvirke hva du må rapportere til oss."
              id="radio321"
            />
            <br />
            <TextField label={'Kontaktperson i bedriften'} inputSize="large" />

            <br />
            <Button buttonStyle="primaryRoundedFilled">Send inn</Button>
          </div>
        </div>
      </div>
    </AccordionItem>
  </Accordion>
</div>;
```
