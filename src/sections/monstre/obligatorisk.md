```js noeditor
import Card from '@skatteetaten/frontend-components/Card';
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
import Button from '@skatteetaten/frontend-components/Button';
import TextField from '@skatteetaten/frontend-components/TextField';
import RadioButtonGroup from '@skatteetaten/frontend-components/RadioButtonGroup';

const initialState = {
  options: [
    {
      key: 'A',
      text: 'Enkeltpersonsforetak'
    },
    {
      key: 'B',
      text: 'Aksjeselskap'
    }
  ]
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
      spørre brukeren om ting vi trenger. Det finnes imidlertid unntak og da
      merker vi de obligatoriske feltene med stjerne (*). Toppen av skjemaet
      skal inneholde en beskrivelse av hva som gjelder i det aktuelle tilfellet.
    </p>
    <ul>
      <li>
        Vi spør kun etter de opplysningene vi trenger - verken mer eller mindre.
      </li>
      <li>
        Hvis alle felt må fylles ut, skriver vi:{' '}
        <em>«Alle felt må fylles ut»</em> i toppen av skjemaet
      </li>
      <li>
        Hvis ikke alle felt må fylles ut, markerer vi feltene med * og skriver
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
        Når alle felt må fylles ut, bruker vi ikke stjernemarkering, men
        forklarer det i toppen:
      </p>
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '30%' }}>
          <p class="title">Ja</p>
          <div style={{ padding: '2px' }}>
            <Card color={Card.Color.BEIGE}>Alle felt må fylles ut.</Card>
            <br />
            <TextField label={'Bedriftens navn'} inputSize="large" />
            <br />
            <RadioButtonGroup
              label="Type virksomhet"
              options={state.options}
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
        Når ikke alle felt må fylles ut, bruker vi stjerne (*) til å markere de
        obligatoriske feltene.
      </p>
      <div className="dodont" style={{ marginLeft: '24px' }}>
        <div className="do" style={{ maxWidth: '30%' }}>
          <p class="title">Ja</p>
          <div style={{ padding: '2px' }}>
            <Card color={Card.Color.BEIGE}>
              Felt markert med * må fylles ut
            </Card>
            <br />
            <TextField label={'Navn på virksomhet *'} inputSize="large" />
            <br />
            <RadioButtonGroup
              label="Type virksomhet *"
              options={state.options}
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
