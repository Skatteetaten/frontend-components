**Modal : enkel modal fungerende med web-components**

Lorem ipsum:

```js
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
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
      <ActionButton
        icon={'ChatBubbleOutline'}
        onClick={toggleModal}
        aria-haspopup
      >
        {'Toggle Modal'}
      </ActionButton>

      {modal && modal.isOpen('testModal') && (
        <Modal name={'testModal'}>
          <h2>{'Random title'}</h2>

          <ActionButton onClick={toggleModal}>{'Close'}</ActionButton>
        </Modal>
      )}
    </>
  );
};

<div className="ExampleSpacing8">
  <ModalProvider>
    <TestComponent />
  </ModalProvider>
</div>;
```
