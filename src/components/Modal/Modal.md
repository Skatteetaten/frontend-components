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

```js noeditor uu
<>
  <h3>Tips</h3>

  <ul>
    <li>
      Sjekk at modalen får fokus etter at den åpnes. Dette gjør det enklere for
      en skjermleser å oppdage og lese opp innholdet.
    </li>
    <li>
      Test med tastatur at du ikke kan navigere ut av dialogen. Tastaturfokuset
      skal være på knappen som åpner dialogen etter lukking.
    </li>
    <li>Sjekk at alt innholdet bak dialogen "viskes" ut visuelt.</li>
  </ul>

  <h3>Mest relevante WCAG-krav</h3>

  <ul>
    <li>2.4.3 A, Fokusrekkefølge</li>
    <li>4.1.2 A, Navn, rolle, verdi</li>
  </ul>

  <h3>WAI-ARIA</h3>

  <ul>
    <li>Aria-hidden="true" brukes for å skjule ikon(er) for skjermleser.</li>
  </ul>
</>
```

```js noeditor beskrivelse
<>
  <p>
    Modal har mange likhetstrekk med Dialog-komponenten, men vi anbefaler å
    bruke Modal når:
  </p>
  <ul>
    <li>
      du har enkle bekreftelsesmeldinger med lite innhold inni boksen, og du er
      sikker på at du ikke må skrolle i innholdet.
    </li>
    <li>løsningen din har micro frontend-arkitektur eller web components</li>
  </ul>
</>
```
