```js
import {
  Card,
  Grid,
  DatePicker,
  Dropdown,
  RadioButtonGroup,
  Button,
} from '@skatteetaten/frontend-components';

const [state, setState] = React.useState({
  options: [
    {
      key: 'A',
      text: 'Valg A',
    },
    {
      key: 'B',
      text: 'Valg B',
    },
  ],
});

<Card title="Skjema">
  <Grid>
    <Grid.Row>
      <Grid.Col xl={4} lg={6} md={12}>
        <DatePicker
          id={'my-date'}
          label={'Velg en dato'}
          ariaLabel={'Velg en dato'}
          placeholder={DatePicker.DefaultDateFormat}
          info={
            'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet'
          }
          value={state.value}
          onChange={({ target: { value } }) => setState({ value })}
        />
      </Grid.Col>
      <Grid.Col xl={4} lg={6} md={12}>
        <Dropdown
          label="Emne"
          info="Litt informasjon"
          placeHolder="Velg"
          options={state.options}
        />
      </Grid.Col>
      <Grid.Col xl={4} lg={6} md={12} />
    </Grid.Row>
    <Grid.Row rowSpacing={Grid.SPACE_MEDIUM}>
      <Grid.Col xl={4} lg={6} md={12}>
        <RadioButtonGroup
          label="Ta et valg"
          defaultSelectedKey="B"
          options={state.options}
          onChange={(e, option) => console.log(option)}
        />
      </Grid.Col>
    </Grid.Row>
    <Grid.Row>
      <div style={{ float: 'right' }}>
        <Button type="secondary" style={{ marginRight: '8px' }}>
          Avbryt
        </Button>
        <Button type="primaryRoundedFilled">Fullfør</Button>
      </div>
    </Grid.Row>
  </Grid>
</Card>;
```
