**Fra @skatteetaten/frontend-components v5+ (designsystem-legacy) til Designsystemet v0.5.0**

## Endringer i funksjonalitet:

- tittel er obligatorisk.

## Styling:

- de nye komponentene i designsystemet er avhengige av designtokens. Disse leveres nå som en separat pakke. <a class="brodtekst-link" href="#section-designtokens-deprecated">Se designtokens for detaljer.</a>

## Endringer i API

<!-- For full API-dokumentasjon, vennligst se på <a class="brodtekst-link" href="https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/modal/">Modal komponent</a> på dokumentasjonssiden til designsystemet. -->

<div class="migration-tabell">
<table>
<caption>Liste over endringer i komponent-api'et</caption>
<thead><tr><th>Tidligere Prop</th><th>Alternativ</th></tr></thead>
<tbody>
<tr>
<td>'name'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'customClassNames'</td>
<td>
Faset ut. Bruk 'className' eller 'classNames' for å style komponenten.
</td>
</tr>
<tr>
<td>'elementToFocusOnDismiss'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'language'</td>
<td>
'lang'
</td>
</tr>
<tr>
<td>'onOpen'</td>
<td>
Faset ut.
</td>
</tr>
<tr>
<td>'shadowRootNode'</td>
<td>
Faset ut.
</td>
</tr>
</tbody>
</table>

ModalProvider og ModalContext tilbys ikke lenger og Modalen åpnes/lukkes gjennom ref.

Før:

```javascript static
import { Button } from '@skatteetaten/frontend-components/Button';
import { ModalProvider } from '@skatteetaten/frontend-components/Modal/ModalProvider';
import { useModalContext } from '@skatteetaten/frontend-components/Modal//ModalContext';
import { Modal } from '@skatteetaten/frontend-components/Modal';

const TestComponent = ({}) => {
  const modal = useModalContext();

  const toggleModal = () => {
    modal && modal.toggle('testModal');
  };

  return (
    <>
      <Button onClick={toggleModal}>{'Åpne modal'}</Button>

      {modal && modal.isOpen('testModal') && (
        <Modal name={'testModal'}>
          <h3 style={{ marginTop: '0px' }}>
            {'Vil du erstatte nye opplysninger fra fil?'}
          </h3>
          <p>
            Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse
            skal gjelde fra nå av?
          </p>

          <div style={{ marginTop: '32px' }}>
            <Button buttonStyle="primary" onClick={toggleModal}>
              {'Erstatt opplysninger'}
            </Button>
            <Button onClick={toggleModal}>{'Avbryt'}</Button>
          </div>
        </Modal>
      )}
    </>
  );
};

<div>
  <ModalProvider>
    <TestComponent />
  </ModalProvider>
</div>;
```

Nå:

```js static
import { Modal } from '@skatteetaten/ds-overlays';
import { Button } from '@skatteetaten/ds-buttons';

const ref = React.useRef<HTMLDialogElement>(null);

<Button
  variant={'secondary'}
  onClick={(): void => ref.current?.showModal()}
>
  {'Åpne modal'}
</Button>
<Modal
    ref={ref}
    title={'Vil du erstatte nye opplysninger fra fil?'}
>
    <Paragraph hasSpacing>
        {
        'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
        }
    </Paragraph>
    <Button
        onClick={(): void => ref.current?.close()}
    >
        {'Erstatt opplysninger'}
    </Button>
    <Button
        variant={'secondary'}
        onClick={(): void => ref.current?.close()}
    >
        {'Avbryt'}
    </Button>
</Modal>
```

</div>
