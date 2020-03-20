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

```js noeditor uu
  <h3>Huskeliste</h3>
  <ul>
    <li>
      Sjekk at tilstand på avhuking (valgt/ikke valgt) leses opp av skjermleser
    </li>
    <li>
      Bruk <b>fieldset</b> og <b>legend</b>-elementer for å gi kontekstinformasjon
      til skjermleser (hvilke elementer hører sammen, og hva er overordnet tittel
      eller emne).
    </li>
  </ul>
```

```js noeditor beskrivelse
  <h3>Velge vilkårlig antall elementer</h3>
  <p>
    Avhukingsbokser brukes når det er liste med valg og brukeren kan velge et
    vilkårlig antall av dem, inkludert null, ett eller flere. En avhukingsboks
    er med andre ord uavhengig av de andre i listen. Og huker brukeren av et
    valg, tar det ikke bort avhukingen av de andre.
  </p>

  <p>(Hvis brukeren kun skal velge ett valg, bruk RadioButtonGroup.)</p>
```