**Modal : enkel modal fungerende med web-components**

Lorem ipsum:

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
      <Button icon={'ChatBubbleOutline'} onClick={toggleModal} aria-haspopup>
        {'Åpne modal'}
      </Button>

      {modal && modal.isOpen('testModal') && (
        <Modal name={'testModal'}>
          <Typography>
            <h2>{'Random title'}</h2>
            <p>
              Lorem ipsum dolor sit amet onsectur Lorem ipsum dolor sit amet
              onsectur Lorem ipsum dolor sit amet onsectur Lorem ipsum dolor sit
              amet onsectur Lorem ipsum dolor sit amet onsectur Lorem ipsum
              dolor sit amet onsectur Lorem ipsum dolor sit amet onsectur Lorem
              ipsum dolor sit amet onsectur Lorem ipsum dolor sit amet onsectur
            </p>
          </Typography>
          <Button onClick={toggleModal}>{'Lukk'}</Button>
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
