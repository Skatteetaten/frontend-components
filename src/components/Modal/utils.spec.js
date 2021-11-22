import React from 'react';
import { render } from 'react-dom';

import { mount } from 'enzyme';

import { createModalDomPlacement, useEscOnPress } from './utils';
import { DummyWebComp } from '../utils/test-utils';

describe('Modal utils', () => {
  describe('createModalDomPlacement', () => {
    test('Når shadowRootNode ikke finnes så returneres det ingenting og flagget settes til true', () => {
      const setFlagMock = jest.fn();
      const a = createModalDomPlacement(setFlagMock);
      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
    });

    test('Når shadowRootNode allerede inneholder en modal-wrapper', () => {
      const original = global.document['body'];
      const originalWindow = global.window;
      window.customElements.define('shadowrootnode-test', DummyWebComp);
      document.body.innerHTML =
        '<shadowrootnode-test><div id="modal-wrapper"></div></shadowrootnode-test>';

      const element = document.querySelector('shadowrootnode-test');

      const setFlagMock = jest.fn();
      const a = createModalDomPlacement(setFlagMock, element.shadowRoot);
      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
      global.document['body'] = original;
      global.window = originalWindow;
    });

    test('Når shadowRootNode ikke inneholder noe modal-wrapper, så lages det en', () => {
      class DummyWebComp2 extends DummyWebComp {}
      const original = global.document['body'];

      window.customElements.define('second-shadowrootnode-test', DummyWebComp2);
      document.body.innerHTML =
        '<second-shadowrootnode-test></second-shadowrootnode-test>';

      const element = document.querySelector('second-shadowrootnode-test');
      const setFlagMock = jest.fn();
      const a = createModalDomPlacement(setFlagMock, element.shadowRoot);

      expect(element.shadowRoot.innerHTML).toEqual(
        '<div><div id="shadow">dummy-shadow</div></div><div id="modal-wrapper"></div>'
      );

      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
      global.document['body'] = original;
    });

    test('Når shadowRootNode ikke inneholder noe modal-wrapper men at den har en style-injector wrapper, så lages det en modal-wrapper nested', () => {
      class DummyWebComp3 extends DummyWebComp {
        mountComponent() {
          this.mountPoint = document.createElement('div');
          const shadowRoot = this.attachShadow({ mode: 'open' });
          shadowRoot.appendChild(this.mountPoint);
          render(<div id="style-injector"></div>, this.mountPoint);
        }
      }
      const original = global.document['body'];

      window.customElements.define('third-shadowrootnode-test', DummyWebComp3);
      document.body.innerHTML =
        '<third-shadowrootnode-test></third-shadowrootnode-test>';

      const element = document.querySelector('third-shadowrootnode-test');
      const setFlagMock = jest.fn();
      const a = createModalDomPlacement(setFlagMock, element.shadowRoot);

      expect(element.shadowRoot.innerHTML).toEqual(
        '<div><div id="style-injector"><div id="modal-wrapper"></div></div></div>'
      );

      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
      global.document['body'] = original;
    });
  });

  describe('ModalProvider', () => {
    const HookEsc = ({ componentRef, closeMock }) => {
      const hookResult = useEscOnPress(componentRef, closeMock);
      return <div>{hookResult}</div>;
    };

    const TestComponent = ({ closeMock, noRef }) => {
      const elementRef = React.createRef();
      return (
        <div ref={elementRef}>
          <HookEsc
            componentRef={!noRef ? elementRef : null}
            closeMock={closeMock}
          />
        </div>
      );
    };

    test('addEventListener er lagt til og keydown på andre key trigger ingenting', () => {
      const map1 = {};
      const listenerMock = jest.fn((event, callback) => {
        map1[event] = callback;
      });
      window.addEventListener = listenerMock;

      const closeMock = jest.fn();
      mount(<TestComponent closeMock={closeMock} />);

      map1.keydown({ code: 'Enter' });
      expect(closeMock).toHaveBeenCalledTimes(0);
    });

    test('addEventListener er lagt til og keydown på Escape kaller onClose funksjonen', () => {
      const map2 = {};
      const listenerMock = jest.fn((event, callback) => {
        map2[event] = callback;
      });
      window.addEventListener = listenerMock;

      const closeMock = jest.fn();
      mount(<TestComponent closeMock={closeMock} />);

      map2.keydown({ code: 'Escape' });
      expect(closeMock).toHaveBeenCalledTimes(1);
    });

    test('uten Ref så registreres det ikke noe addEventListener for keydown', () => {
      const map3 = {};
      const listenerMock = jest.fn((event, callback) => {
        map3[event] = callback;
      });
      window.addEventListener = listenerMock;

      const closeMock = jest.fn();
      mount(<TestComponent closeMock={closeMock} noRef />);

      expect(map3.keydown).toBe(undefined);
    });
  });
});
