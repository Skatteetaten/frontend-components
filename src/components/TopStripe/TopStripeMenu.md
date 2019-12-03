** TopStripe er en svart menystripe øverst på innloggede sider for publikum. **

Standard bruk på skatteetaten.no:

```js
import TopStripe, {
  TopStripeMenu,
  TopStripeButton
} from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';
import Link from '@skatteetaten/frontend-components/Link';
import Button from '@skatteetaten/frontend-components/Button';
<div>
  <TopStripe>
    <TopStripeButton
      ariaLabel={'legg-til'}
      onClick={() => console.log('NORSK')}
    >
      Norsk
    </TopStripeButton>
    <TopStripeMenu title={'Endre skriftstørrelse'}>
      Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
      eller - for å forminske.
    </TopStripeMenu>
    <TopStripeMenu title={'SpråkValg'}>
      <TopStripeButton
        ariaLabel={'legg-til'}
        onClick={() => console.log('NORSK')}
      >
        Norsk
      </TopStripeButton>
      <TopStripeButton
        icon={'check'}
        ariaLabel={'legg-til'}
        onClick={() => console.log('NORSK')}
      >
        Engelsk
      </TopStripeButton>
      <TopStripeButton
        ariaLabel={'legg-til'}
        onClick={() => console.log('NORSK')}
      >
        Fransk
      </TopStripeButton>
    </TopStripeMenu>
    <TopStripeMenu title={'En rar meny'}>
      <Button> Hei </Button>

      <Link path={'#link'} text={'abc'} placement="before" />
      <Link
        path={'#link'}
        icon={'ArrowForward'}
        text={'abc'}
        placement="before"
      />
      <Link path={'#topstripe'} text={'abc'} placement="before" />
    </TopStripeMenu>
    <Link path={'#link'} text={'Kontakt oss'} placement="before" />
  </TopStripe>
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
  />
</div>;
```

```js noeditor beskrivelse
  <p>
    TopStripe er den svarte, horisontale stripen helt i toppen. Dette er etter
    DIFIs anbefaling om en felles markering av innloggede tjenester som
    benytter MinID for innlogging. Alle innloggede publikumsløsninger skal ha
    en slik toppbar. Den skal inneholde et ikon for person, samt navnet på den
    som er logget inn. I tillegg skal det finnes en Logg ut lenke helt til
    høyre.
  </p>
  <p>
    På skatteetaten.no er det i tillegg overordnede lenker og funksjoner for
    nettstedet der, for eksempel «Kontakt oss» og «Endre skriftstørrelse».
  </p>
```
