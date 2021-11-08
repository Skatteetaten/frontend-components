**Modal: Enkel modalboks**

```js
import { Button } from '@skatteetaten/frontend-components/Button';
import { ModalProvider } from '@skatteetaten/frontend-components/Modal/ModalProvider';
import { useModalContext } from '@skatteetaten/frontend-components/Modal//ModalContext';
import { Modal } from '@skatteetaten/frontend-components/Modal';
import { Typography } from '@skatteetaten/frontend-components/Typography';

const TestComponent = ({}) => {
  const modal = useModalContext();

  const toggleModal = () => {
    modal && modal.toggle('testModal');
  };

  return (
    <>
      <Button onClick={toggleModal} aria-haspopup>
        {'Åpne modal'}
      </Button>

      {modal && modal.isOpen('testModal') && (
        <Modal name={'testModal'}>
          <Typography>
            <h3 style={{ marginTop: '0px' }}>
              {'Kansellere arbeidsoppgaven?'}
            </h3>
            <p>Er du sikker på at du vil kansellere arbeidsoppgaven?</p>
          </Typography>
          <div style={{ marginTop: '16px' }}>
            <Button buttonStyle="primaryRoundedFilled" onClick={toggleModal}>
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
