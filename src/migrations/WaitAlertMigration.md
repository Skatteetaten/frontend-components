**Fra @skatteetaten/frontend-components v15+ (designsystem-legacy) til Designsystemet v1.5.0**

## Endringer i funksjonalitet:

- Komponenten er faset ut.
- Vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/modal/">Modal komponent</a> på dokumentasjonssiden til designsystemet.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

Før:

```javascript static
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import { Button } from '@skatteetaten/frontend-components/Button';
import { Dialog } from '@skatteetaten/frontend-components/Dialog';

const twentyMin = 1200;
const [state, setState] = React.useState({ hideDialog: true });
const [time, setTime] = React.useState(twentyMin);

React.useEffect(() => {
  if (time === 0) {
    setState({ hideDialog: false });
  }
  const intervalId = setInterval(() => {
    setTime((t) => t - 1);
  }, 1000);
  return () => clearInterval(intervalId);
}, [time]);

const closeDialog = () => {
  setState({ hideDialog: true });
  setTime(twentyMin);
};
const resettTimer = () => {
  document.onmousemove = () => setTime(twentyMin);
  document.onkeydown = () => setTime(twentyMin);
};

window.onload = () => {
  resettTimer();
};

<div>
  <ActionButton
    buttonStyle="secondary"
    onClick={() => setState({ hideDialog: false })}
    icon="InfoOutline"
  >
    Vis ventevarsel
  </ActionButton>
  <Dialog
    hidden={state.hideDialog}
    type={Dialog.Type.normal}
    onDismiss={closeDialog}
    waitAlert
  ></Dialog>
</div>;
```

Nå:

```js static
const twentyMin = 1200;
const [time, setTime] = useState(twentyMin);
const refModalWait = useRef(null);

useEffect(() => {
  if (time === 0) {
    refModalWait.current?.showModal();
  }
  const intervalId = setInterval(() => {
    setTime((t) => t - 1);
  }, 1000);
  return () => clearInterval(intervalId);
}, [time]);

const resettTimer = () => {
  document.onmousemove = () => setTime(twentyMin);
  document.onkeydown = () => setTime(twentyMin);
};

window.onload = () => {
  resettTimer();
};

return (
  <>
    <Button
      className={'exampleSpacing'}
      variant={'tertiary'}
      svgPath={InfoOutlineSVGpath}
      onClick={() => refModalWait.current?.showModal()}
    >
      {'Vis ventevarsel'}
    </Button>
    <Modal
      ref={refModalWait}
      title={'Hei, er du fortsatt her?'}
      imageSource={waitIllustration}
      imageSourceAltText={
        'Illustrasjon av travel person med seks armer, opptatt med kontorarbeid.'
      }
    >
      <Paragraph hasSpacing>
        {
          'Vi ser at du ikke har gjort noe på nettsiden på ei stund. Er du fortsatt her?'
        }
      </Paragraph>
      <Button
        className={'width100'}
        onClick={() => refModalWait.current?.close()}
      >
        {'Ja'}
      </Button>
    </Modal>
  </>
);
```
