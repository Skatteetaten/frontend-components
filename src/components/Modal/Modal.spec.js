import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { DummyWebComp } from '../utils/test-utils';

import { Modal } from './Modal';

describe('Modal', () => {
  const modalText = 'Modal';

  test('modal mountes slik den skal med wrapper, closeButton, overlay, trapFocus og innhold', () => {
    const wrapper = mount(
      <Modal>
        <div id={'modal-children'}>{modalText}</div>
      </Modal>
    );
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find('#modal-children').text()).toEqual(modalText);
    expect(
      wrapper.find('[data-testid="modal-closebutton"]').exists()
    ).toBeTruthy();
    expect(wrapper.find('[data-testid="modal-overlay"]').exists()).toBeTruthy();
  });

  test('modal mountes med create portal', () => {
    const portalSpy = jest
      .spyOn(ReactDOM, 'createPortal')
      .mockImplementation(() => <div>{'test'}</div>);
    mount(<Modal>{modalText}</Modal>);
    expect(portalSpy).toHaveBeenCalled();
    portalSpy.mockRestore();
  });

  test('modal kaller onOpen prop når den åpnes', () => {
    const onOpen = jest.fn();

    mount(
      <Modal onOpen={onOpen}>
        <div id={'modal-children'}>{modalText}</div>
      </Modal>
    );

    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  test('modal lukkes når man trykker på overlay', () => {
    const onClose = jest.fn();

    const wrapper = mount(
      <Modal onClose={onClose}>
        <div id={'modal-children'}>{modalText}</div>
      </Modal>
    );

    expect(wrapper.find('[data-testid="modal-overlay"]').exists()).toBeTruthy();
    wrapper.find('[data-testid="modal-overlay"]').simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('modal close button vises ikke når hideCloseButton er true', () => {
    const wrapper = mount(
      <Modal hideCloseButton>
        <div id={'modal-children'}>{modalText}</div>
      </Modal>
    );

    expect(
      wrapper.find('[data-testid="modal-closebutton"]').exists()
    ).toBeFalsy();
  });

  test('modal lukkes ved klikk på close button', () => {
    const onClose = jest.fn();

    const wrapper = mount(
      <Modal onClose={onClose}>
        <div id={'modal-children'}>{modalText}</div>
      </Modal>
    );

    expect(
      wrapper.find('[data-testid="modal-closebutton"]').exists()
    ).toBeTruthy();
    wrapper.find('[data-testid="modal-closebutton"]').simulate('click');

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('modal lukkes ved å trykke på Escape', () => {
    const map = {};
    const listenerMock = jest.fn((event, callback) => {
      map[event] = callback;
    });
    window.addEventListener = listenerMock;

    const onClose = jest.fn();

    mount(
      <Modal onClose={onClose}>
        <div id={'modal-children'}>{modalText}</div>
      </Modal>
    );

    map.keydown({ code: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('modal mountes med riktig classNames når customClassNames taes i bruk', () => {
    const wrapper = mount(
      <Modal
        customClassNames={{
          wrapper: 'wrapperCustomClassName',
          trapzone: 'trapzoneCustomClassName',
          modal: 'modalCustomClassName',
          closebutton: 'closebuttonCustomClassName',
          overlay: 'overlayCustomClassName',
        }}
      >
        <div id={'modal-children'}>{modalText}</div>
      </Modal>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('modal med rootNode instansierer Modal komponent i shadow-domen i en modal-wrapper', async () => {
    const original = global.document['body'];
    window.customElements.define('webcomp-test', DummyWebComp);
    document.body.innerHTML = '<webcomp-test></webcomp-test>';

    const element = document.querySelector('webcomp-test');
    mount(
      <Modal shadowRootNode={element.shadowRoot}>
        <div id={'modal-children'}>{modalText}</div>
      </Modal>
    );

    const domResult = element.shadowRoot.getElementById('modal-wrapper');

    expect(domResult).toMatchSnapshot();
    global.document['body'] = original;
  });
});
