**Modal: Modalboks for enkle behov eller micro frontends**

```js
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
          <h3 style={{ marginTop: '0px' }}>{'Kansellere arbeidsoppgaven?'}</h3>
          <p>Er du sikker på at du vil kansellere arbeidsoppgaven?</p>

          <div style={{ marginTop: '32px' }}>
            <Button
              buttonStyle="primary"
              onClick={toggleModal}
              style={{ marginRight: '16px' }}
            >
              {'Kanseller'}
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

```js noeditor beskrivelse
<>
  <p>
    Modal har mange likhetstrekk med Dialog-komponenten, men vi anbefaler å
    bruke Modal når:
  </p>
  <ul>
    <li>
      du har enkle bekreftelsesmeldinger, eller når innholdet inni boksen er
      lite, og du er sikker på at du ikke må skrolle i innholdet.
    </li>
    <li>løsningen din har micro frontend-akitektur eller web components</li>
  </ul>
</>
```

```js noeditor uu
<>
  <p>Denne seksjonen er foreløpig tom.</p>
</>
```
