```js noeditor
import { Accordion } from '@skatteetaten/frontend-components/Accordion';
import { AccordionItem } from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import { Button } from '@skatteetaten/frontend-components/Button';
import { Card } from '@skatteetaten/frontend-components/Card';
import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';
import { TextField } from '@skatteetaten/frontend-components/TextField';

const marginTopStyle = {
  marginTop: '1.5rem',
};

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
            <div>
              <Card color={Card.Color.BEIGE}>Alle felt må fylles ut.</Card>
            </div>
            <div style={marginTopStyle}>
              <TextField required label={'Bedriftens navn'} />
            </div>
            <div style={marginTopStyle}>
              <RadioButtonGroup
                label="Type virksomhet"
                required
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
            </div>
            <div style={marginTopStyle}>
              <Button buttonStyle="primaryRoundedFilled">Send inn</Button>
            </div>
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
            <div>
              <Card color={Card.Color.BEIGE}>
                Felt markert med * må fylles ut.
              </Card>
            </div>
            <div style={marginTopStyle}>
              <TextField requiredWithMark label={'Navn på virksomhet'} />
            </div>
            <div style={marginTopStyle}>
              <RadioButtonGroup
                requiredWithMark
                label="Type virksomhet"
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
            </div>
            <div style={marginTopStyle}>
              <TextField label={'Kontaktperson i bedriften'} />
            </div>
            <div style={marginTopStyle}>
              <Button buttonStyle="primaryRoundedFilled">Send inn</Button>
            </div>
          </div>
        </div>
      </div>
    </AccordionItem>
  </Accordion>
</div>;
```
